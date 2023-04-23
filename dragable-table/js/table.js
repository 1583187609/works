let Layer = null;
layui.use(['layer'], (layer) => {
    Layer = layer;
});
const table = new Vue({
    el: '#app',
    props: {
        //能否编辑：区别查看、编辑页面时的状态
        canEdit: {
            type: Boolean,
            default: true
        },
        //列表头
        cols: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data: {
        mouseLeftDownTimer: null,  //鼠标左键定时器
        showMenu: false,   //是否显示右键菜单
        showTextarea: true,
        pinkGroup: null,  //可拖动的行组（粉色区域）
        greenGroups: [],  //可拖动的区域的其他所有行组（粉色+绿色区域的所有兄弟行组）
        //以下四层数据模型会依次触发改变，从而触发视图更新
        //每一层数据模型在新增行、删除行、拖动行、合并行、拆分行中都起到了重要作用
        //例如：第一层在拖动行时简化了逻辑，第二层在删除行时简化了逻辑，第三层在合并拆分单元格时简化了逻辑，第四层触发视图更新
        rootTrees: [],   //第一层数据模型
        nodes: [],  //第二层数据模型
        roots: [],  //第三层数据模型
        rootRows: [],  //第四层数据模型
    },
    created() {
        document.body.onselectstart = document.body.oncontextmenu = () => {
            return false;
        };
    },
    computed: {
        showCols() {
            if (this.canEdit) {
                return this.cols;
            } else {
                return this.cols.filter(item => {
                    return !item.whenEditShow;
                })
            }
        },
        colsNames() {
            let names = [];
            this.showCols.forEach(item => {
                let { type } = item;
                if (type === undefined) {
                    names.push(item.name)
                }
            })
            return names;
        },
        getColAttr() {
            return (key) => {
                let dict = {};
                this.showCols.forEach((item, index) => {
                    let { name, text, width, editable = false, type, disabled = false } = item;
                    dict[name] = { text, width, editable, type, index, disabled }
                });
                return dict[key];
            }
        },
        //所有按钮列
        btnCols() {
            return this.showCols.filter(item => item.type === 'btn');
        },
        //所有值列
        valCols() {
            return this.showCols.filter(item => item.type === undefined);
        },
        //所有固定了列宽的值列
        widthValCols() {
            return this.valCols.filter(item => !!item.width);
        },
        //获取按钮盒子的总宽度
        getBtnsBoxStyle() {
            let width = 0;
            this.btnCols.forEach(item => {
                width += item.width;
            })
            return { width: width + 'px' };
        },
        //根据根下标值获取节点的属性
        getNodeAttrByRootInd() {
            let { getRowInd, roots, getColAttr } = this;
            return (rootInd, subInd, colName, key) => {
                let colInd = getColAttr(colName).index;
                let currRow = getRowInd(rootInd, subInd, roots);
                let targetNode = roots[rootInd][colInd].find(node => {
                    return node.row === currRow;
                });
                return targetNode ? targetNode[key] : null;
            }
        }
    },
    watch: {
        // 注：为了让rootTrees，nodes，roots三层模型保持一致性，请每次要更新视图的时候都只更新rootTrees（会自动触发后两个更新，然后触发视图更新）
        rootTrees: {
            handler(newTrees, oldTrees) {
                this.nodes = this.getNodesFromRootTrees(newTrees);
            },
            deep: true
        },
        nodes: {
            handler(newNodes, oldNodes) {
                this.roots = this.nodesToRoots(newNodes);
            },
            deep: true
        },
        roots: {
            handler(newRoots, oldRoots) {
                this.rootRows = this.rootsToRootRows(newRoots);
            },
            deep: true
        }
    },
    mounted() {
        setTimeout(() => {
            let editCells = document.querySelectorAll(".edit-cell");
            for (let i = 0; i < editCells.length; i++) {
                editCells[i].setAttribute("title", editCells[i].innerText)
            }
        }, 0)
    },
    methods: {
        /**
         * 检测元素所属类型
        * @param {*} ele 待检测的对象、字符串、数组等
        * @returns 对象、字符串、数组等的类型（String、Number、Boolean、Symbol、Undefined、Null、Function、Date、Array、Object、RegExp、Error、HTMLDocument、global）
        */
        typeOf(ele) {
            let endStr = Object.prototype.toString.call(ele);
            let type = endStr.split(" ")[1].slice(0, -1);
            return type;
        },
        /**
         * 数组去重
         * @param {Array} arr
         */
        uniqueArr(arr) {
            return arr.filter((item, index, arr) => {
                //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
                return arr.indexOf(item, 0) === index;
            });
        },
        //根据dom的json数据获取列的名字（去重）
        getNamesByDomJson(obj) {
            let { uniqueArr } = this;
            let { children, name, type } = obj;
            let names = [];
            function cycle(children) {
                children.forEach(item => {
                    let { children, name } = item;
                    if (children) {
                        cycle(children);
                    } else {
                        names.push(name);
                    }
                })
            }
            if (type === 'box') {
                cycle(children);
            } else if (type === 'text') {
                names.push(name)
            }
            return uniqueArr(names);
        },
        //获取行内样式
        getStyle(obj) {
            let { name, span = 1, direction = 'vertical' } = obj;
            let style = {};
            let { getNamesByDomJson, widthValCols, typeOf } = this;
            let allNames = getNamesByDomJson(obj);
            if (name) {
                let findEle = this.showCols.find(item => item.name === name);
                let width = findEle.width;
                if (width) {
                    if (typeOf(width) === 'Number') {
                        width = width + 'px';
                    }
                    style.width = width;
                }
            } else {
                if (span > 1 || (span === 1 && direction === 'stretch')) {
                    let widthTotal = 0;
                    let widthCols = widthValCols.filter(item => {
                        return allNames.includes(item.name);
                    });
                    widthCols.forEach(item => {
                        widthTotal += item.width;
                    })
                    style['flex-basis'] = widthTotal + "px";
                }
            }
            return style;
        },
        //获取类名
        getClass(obj, parObj = {}) {
            let className = "";
            let width;
            let { getNamesByDomJson, widthValCols, getColAttr } = this;
            let allNames = getNamesByDomJson(obj);
            let { direction = 'vertical', type, name, span = 1 } = obj;
            let findEle = this.showCols.find(item => item.name === obj.name);
            if (findEle) {
                width = findEle.width;
            }
            let { direction: parDirection, children: parChildren } = parObj;
            let dict = {
                vertical: '',
                horizontal: 'f-fs-s',
                stretch: 'f-fs-s-r-w-s'
            }
            if (type === 'text') {
                let isAllText = parChildren.every(item => item.type === 'text');
                if (parDirection === 'horizontal' && parChildren.length > 1 && !isAllText) {
                    className += ' par-cell';
                } else {
                    className += ' cell';
                }
                if (name && getColAttr(name).editable) {
                    className += ' edit-cell'
                    // event.target.setAttribute('title', 'title---title')
                }
            }
            if (!width && parDirection !== 'vertical') {
                if (!name) {
                    if (span > 1 || (span === 1 && direction === 'stretch')) {
                        let widthCols = widthValCols.filter(item => {
                            return allNames.includes(item.name);;
                        })
                        span = span - widthCols.length;
                    }
                }
                className += ' f-' + span;
            }
            className += ' ' + dict[direction];
            return className;
        },
        //生成鼠标放上去的title
        getTitle(obj) {
            let { direction = 'vertical', type, name, span = 1 } = obj;
            let { getNamesByDomJson, widthValCols, getColAttr } = this;
            if (type === 'text') {
                let isAllText = parChildren.every(item => item.type === 'text');
                if (parDirection === 'horizontal' && parChildren.length > 1 && !isAllText) {
                    className += ' par-cell';
                } else {
                    className += ' cell';
                }
                if (name && getColAttr(name).editable) {
                    className += ' edit-cell'
                }
            }
            return '测试title'
        },
        //鼠标移入带有类名为btn-cell的单元格时
        onBtnCellEnter(rootInd, subInd) {
            let { getRowInd, roots } = this;
            let currRow = getRowInd(rootInd, subInd, roots);
            let valCells = document.querySelectorAll(`#body>.row:nth-child(${rootInd + 1}) [data-row='${currRow}']`);
            let btnCells = document.querySelectorAll(`#body>.row:nth-child(${rootInd + 1}) .box:nth-child(${subInd + 1}) .btn-cell`);
            for (let i = 0; i < valCells.length; i++) {
                if (valCells[i].dataset.rowspan == 1) {
                    valCells[i].classList.add('row-hover');
                }
            }
            for (let i = 0; i < btnCells.length; i++) {
                btnCells[i].classList.add('row-hover');
            }
        },
        //鼠标移出带有类名为btn-cell的单元格时
        onBtnCellLeave(rootInd, subInd) {
            let { getRowInd, roots } = this;
            let currRow = getRowInd(rootInd, subInd, roots);
            let valCells = document.querySelectorAll(`#body>.row:nth-child(${rootInd + 1}) [data-row='${currRow}']`);
            let btnCells = document.querySelectorAll(`#body>.row:nth-child(${rootInd + 1}) .box:nth-child(${subInd + 1}) .btn-cell`);
            for (let i = 0; i < valCells.length; i++) {
                if (valCells[i].dataset.rowspan == 1) {
                    valCells[i].classList.remove('row-hover');
                }
            }
            for (let i = 0; i < btnCells.length; i++) {
                btnCells[i].classList.remove('row-hover');
            }
        },
        /**
         * 对一维数组（每个元素都是对象）按照指定键名的值进行排序
         * @params type {String} asc（升序），desc（降序）
         * **/
        arrSortsByKey(arr, key, type = 'asc') {
            let isNotNum = isNaN(Number(arr[0][key]));
            if (!isNotNum) {
                arr.sort((a, b) => {
                    if (type === 'asc') {
                        return a[key] - b[key];
                    } else if (type === 'desc') {
                        return b[key] - a[key];
                    }
                })
            } else {
                throw new Error("暂未处理值不能转成数字类型的排序情况")
            }
            return arr;
        },
        //获取所在分组的最小粒度子行数量
        getRowTotal(root) {
            let { getLengthArr } = this;
            let lenArr = getLengthArr(root);
            return Math.max(...lenArr);
        },
        //获取行的最大值
        getRootsRowMax(roots) {
            let { getLengthArr } = this;
            let lenArrs = [];
            let lenTotal = [0];
            roots.forEach(item => {
                lenArrs.push(getLengthArr(item));
            })
            lenArrs.forEach((lenArr, ind) => {
                lenArr.forEach((item, ind) => {
                    if (lenTotal[ind]) {
                        lenTotal[ind] += item;
                    } else {
                        lenTotal[ind] = item;
                    }
                })
            })
            return Math.max(...lenTotal);
        },
        //从根树中根据节点信息获取离他的最近的根节点
        getNearestRootByNodeInfoFromTree(node, rootTree) {
            let rootNode = null;
            let { id: byId, row: byRow, rowspan: byRowspan } = node;
            function findNearestRoot(rootTree) {
                if (rootTree.rowspan > 1) {
                    rootNode = rootTree;
                }
                return rootTree.children.find(tree => {
                    let { id, row, rowspan } = tree;
                    let isFind = id === byId;
                    if (!isFind) {
                        if (byRow >= row && byRow < row + rowspan) {
                            isFind = !!findNearestRoot(tree);
                        }
                    }
                    return isFind;
                })
            }
            findNearestRoot(rootTree);
            return rootNode;
        },
        //获取树最大的子行数
        getTreeRowTotal(tree) {
            let { getNodesFromTree, nodesToRoots, getLengthArr } = this;
            let nodes = getNodesFromTree(tree);
            let lenArr = getLengthArr(nodesToRoots(nodes)[0]);
            return Math.max(...lenArr);
        },
        // 获取行组的一维节点中获取rowspan最大值和row最小值
        getRowTotalAndRowMinFromGroupNodes(nodes) {
            let [rowTotal, rowMin] = [0, 0]
            nodes.forEach((item, ind) => {
                const { row, rowspan = 1 } = item;
                if (ind === 0) {
                    rowMin = row;
                    rowTotal = rowspan;
                } else {
                    if (row < rowMin) {
                        rowMin = row;
                    }
                    if (rowspan > rowTotal) {
                        rowTotal = rowspan;
                    }
                }
            })
            return { rowTotal, rowMin };
        },
        //移除类
        removeClass(className) {
            let nodes = document.querySelectorAll('.' + className);
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].classList.remove(className)
            }
        },
        //将一棵树（放在对象上）转成多个树（放在数组中）
        treeToTreesByKey(tree, key = "id") {
            let trees = [];
            for (let key in tree) {
                trees.push(tree[key]);
            }
            return trees;
        },
        //将多个树（放在数组中）转成一棵树（放在对象上）
        treesToTreeByKey(trees, key = 'id') {
            let tree = {};
            trees.forEach(item => {
                let treeKey = item[key];
                if (tree[treeKey]) {
                    tree[treeKey].children.push(...item.children);
                } else {
                    tree[treeKey] = item;
                }
            })
            return tree;
        },
        /**
         * 将原始的单元格（节点）生成树
         * @aimTree {Object} 生成树后放到指定的对象上
         * **/
        createTrees(nodes, rowMax = 0) {
            let { addAttrToTree, treeToTreesByKey } = this;
            let remainNodes = [];
            let tree = {};
            //第一次将节点放进树中
            function firstAddNodesToTree() {
                nodes.forEach(node => {
                    let { id, pId } = node;
                    if (pId === null) {
                        if (!tree[id]) {
                            tree[id] = { ...node, children: [] };
                        }
                    } else {
                        if (tree[pId]) {
                            let isExist = tree[pId].children.some(item => item.id === id);
                            if (!isExist) {
                                tree[pId].children.push({ ...node, children: [] });
                            }
                        } else {
                            remainNodes.push(node);
                        }
                    }
                })
            }
            //将第一次未放完的节点多次循环放进树中，直到放完为止
            function addRemainNodesToTree(nodes) {
                let remains = [];
                nodes.forEach(node => {
                    let { pId } = node;
                    let isFind = false;
                    function isFindParent(children) {
                        if (children.length === 0) {
                            return false;
                        }
                        return children.some(item => {
                            let isFind = false;
                            let { id, children } = item;
                            if (pId === id) {
                                children.push({ ...node, children: [] });
                                isFind = true;
                            } else {
                                isFind = isFindParent(children);
                            }
                            return isFind;
                        })
                    }
                    for (let key in tree) {
                        isFind = isFindParent(tree[key].children);
                        if (isFind) {
                            break;
                        }
                    }
                    if (!isFind) {
                        remains.push(node);
                    }
                })
                if (remains.length) {
                    addRemainNodesToTree(remains);
                }
            }
            firstAddNodesToTree();
            addRemainNodesToTree(remainNodes);
            let hasAddAttr = nodes.some(item => {
                let { row } = item;
                return !(row === undefined || row === null || row === '');
            });
            if (!hasAddAttr) {
                addAttrToTree(tree, rowMax);
            }
            return treeToTreesByKey(tree);
        },
        //将子树插入到主树上
        insertSubTreesToMainTrees(subTrees, mainTrees) {
            let { updateTreeRow, getTreeRowTotal, getRootsRowMax, roots } = this;
            function getTreesRowMax(trees) {
                let rowMax = 0;
                function cycle(trees) {
                    trees.forEach(tree => {
                        let { row, children } = tree;
                        if (row > rowMax) {
                            rowMax = row;
                        }
                        cycle(children);
                    })
                }
                cycle(trees)
                return rowMax;
            }
            let subTreesRow = [];
            function insertSubTrees(subTrees, mainTrees) {
                function getArrNumTotal(arr) {
                    let total = 0;
                    arr.forEach(item => {
                        total += item;
                    })
                    return total;
                }
                subTrees.forEach((subTree, subInd) => {
                    let findMainInd = -1;
                    let findMainTree = mainTrees.find((mainTree, mainInd) => {
                        let isFind = subTree.id === mainTree.id;
                        if (isFind) {
                            findMainInd = mainInd;
                        }
                        return isFind;
                    });
                    if (findMainTree) {
                        let subTreeRowTotal = getTreeRowTotal(subTree);
                        insertSubTrees(subTree.children, findMainTree.children);
                        mainTrees.slice(findMainInd + 1).forEach(mainTree => {
                            mainTree = updateTreeRow(mainTree, subTreeRowTotal);
                        })
                    } else {
                        let isNewRoot = subTree.pId === null;
                        let beforeSubTreesRowTotal = getArrNumTotal(subTreesRow);
                        let rowMax = isNewRoot ? getRootsRowMax(roots) : getTreesRowMax(mainTrees) + 1 - beforeSubTreesRowTotal;
                        subTree = updateTreeRow(subTree, rowMax);
                        mainTrees.push(subTree);
                        subTreesRow.push(getTreeRowTotal(subTree));
                    }
                })
            }
            insertSubTrees(subTrees, mainTrees);
        },
        /**
         * 给根tree添加row、col、rowspan属性
         * 注意：不要考虑初始化时，就给treeMix类型的树添加rowspan属性，因为不存在此情况。且各种复杂情况下的计算rowspan的值会很复杂
         * **/
        addAttrToTree(tree, rowMax = 0) {
            let { getColAttr, getLengthArr, colsNames, getNodesFromTree } = this;
            //获取树的最外一层的叶子节点总数（即树的根节点的rowspan）
            function getRowspan(tree) {
                let [nodesObj, nodesArr] = [{}, []];
                let nodes = getNodesFromTree(tree);
                nodes.forEach(item => {
                    let { name } = item;
                    if (nodesObj[name]) {
                        nodesObj[name].push(item);
                    } else {
                        nodesObj[name] = [item];
                    }
                })
                for (let key in nodesObj) {
                    nodesArr.push(nodesObj[key]);
                }
                let rowspan = Math.max(...getLengthArr(nodesArr))
                return rowspan;
            };
            //遍历id、pId构建的嵌套关系树的所有节点，并依次添加row、col、rowspan属性
            function cycleAddAttr(node) {
                let { name, children, text } = node;
                let row = rowMax;
                let col = getColAttr(name).index;
                let rowspan = getRowspan(node);
                node.col = col;
                node.row = row;
                node.rowspan = rowspan;
                children.forEach((item, ind) => {
                    cycleAddAttr(item);
                })
                if (col === colsNames.length - 1) {
                    rowMax++;
                }
            }
            for (let key in tree) {
                let node = tree[key];
                cycleAddAttr(node);
            }
            return tree;
        },
        /**
         *计算节点的row、col、rowspan并返回所有节点
         * @nodes {Array}  没有row、col、rowspan属性的节点
         * @return {Array}  带有row、col、rowspan属性的节点
         * **/
        calNodesAttr(nodes) {
            let { createTrees, getNodesFromRootTrees } = this;
            let trees = createTrees(nodes);
            let newNodes = getNodesFromRootTrees(trees);
            return newNodes;
        },
        /**
        * 更新树的row属性
        * @param {Number} num row属性增加或减少的值
        * @param {Number} endCold col值小于等于endCol的才允许修改row属性值
        * */
        updateTreeRow(tree, num, endCol = Infinity) {
            function cycle(tree) {
                if (tree.col <= endCol) {
                    tree.row += Number(num);
                    tree.children.forEach(tree => {
                        cycle(tree);
                    })
                }
            }
            cycle(tree);
            return tree;
        },
        //更新单个行组的row属性
        updateNodesRow(nodes = [], num = 0) {
            nodes.forEach(item => {
                item.row = Number(item.row) + Number(num);
            })
        },
        //获取树的节点，不含children
        getNodesFromTree(tree) {
            let nodes = [];
            function cycle(tree) {
                let { children } = tree;
                let newTree = JSON.parse(JSON.stringify(tree));
                delete newTree.children;
                nodes.push(newTree);
                children.forEach(item => {
                    cycle(item);
                })
            }
            cycle(tree);
            return nodes;
        },
        //从根tree中获取节点，返回一个一维数组
        getNodesFromRootTrees(rootTrees) {
            let nodes = [];
            let { getNodesFromTree } = this;
            rootTrees.forEach(item => {
                nodes.push(...getNodesFromTree(item));
            })
            return nodes;
        },
        //将一维单元格数据转为多行多列的嵌套三层数组(不改变原数组)
        nodesToRoots(nodes, isMerge = true) {
            if (nodes.length === 0) {
                return [];
            }
            let [colGruopsObj, colGroups, rowGroups] = [{}, [], []];
            let { arrSortsByKey } = this;
            //合并数组
            function mergeArr(arr1, arr2) {
                let length = Math.max(arr1.length, arr2.length);
                let arr = new Array(length).fill([]);
                for (let i = 0; i < length; i++) {
                    arr[i] = [...arr1[i], ...arr2[i]];
                }
                return arr;
            };
            //合并行
            function mergeRow(rows) {
                let pushInd = 0;
                rows.forEach((row, rInd) => {
                    let hasEmpty = row.some((cell, cInd) => {
                        return cell.length === 0;
                    });
                    if (hasEmpty) {
                        rows[pushInd] = mergeArr(rows[pushInd], rows[rInd]);
                        rows[rInd] = null;
                    } else {
                        pushInd = rInd;
                    }
                })
                rows = rows.filter(item => {
                    return item !== null
                })
                return rows;
            }
            nodes.forEach(cell => {
                let { col } = cell;
                if (colGruopsObj[col]) {
                    colGruopsObj[col].push(cell);
                } else {
                    colGruopsObj[col] = [cell];
                }
            })
            for (let key in colGruopsObj) {
                colGroups.push(colGruopsObj[key]);
            }
            colGroups[0].forEach((item, ind) => {
                let rowBox = new Array(colGroups.length).fill([]);
                rowBox[0] = [item];
                rowGroups.push(rowBox);
            })
            let hasEmptyCell = false;
            for (let i = 0; i < rowGroups.length; i++) {
                if (i < rowGroups.length - 1) {
                    let min = rowGroups[i][0][0].row;
                    let max = rowGroups[i + 1][0][0].row;
                    for (let j = 1; j < colGroups.length; j++) {
                        let [filters, remains] = [[], []];
                        colGroups[j].forEach((item, ind) => {
                            let { row } = item;
                            row >= min && row < max ? filters.push(item) : remains.push(item);
                        })
                        rowGroups[i][j] = filters;
                        colGroups[j] = remains;
                        if (filters.length === 0) {
                            hasEmptyCell = true;
                        }
                    }
                } else {
                    for (let j = 1; j < colGroups.length; j++) {
                        rowGroups[i][j] = colGroups[j];
                        if (colGroups[j].length === 0) {
                            hasEmptyCell = true;
                        }
                    }
                }
            }
            if (isMerge && hasEmptyCell) {
                rowGroups = mergeRow(rowGroups);
            }
            //对每个列里面的所有节点按row的大小进行升序排列
            rowGroups.forEach(group => {
                group.forEach(cols => {
                    arrSortsByKey(cols, 'row');
                })
            })
            return rowGroups;
        },
        //生成dom节点对应的json数据格式
        rootsToRootRows(roots) {
            let { createRootChildsDomJson } = this;
            let rootRows = createRootChildsDomJson(roots);
            return rootRows;
        },
        //生成树dom节点
        createTreeDomJson(root, isBehindTree = false) {
            let { createSubChildsDomJson, createRowDomJson, getLengthArr, nodesToRoots } = this;
            let tree = null;
            let lenArr = getLengthArr(root[0]);
            if (isBehindTree) {
                let node = root[0][0][0];
                let rowDom = createRowDomJson(nodesToRoots(root[0].slice(1).flat(Infinity)));
                tree = {
                    type: 'box',
                    span: lenArr.length,
                    direction: "stretch",
                    children: [{
                        type: 'box',
                        direction: 'horizontal',
                        children: [
                            { ...node, type: 'text' },
                        ]
                    }]
                }
                if (rowDom) {
                    tree.children[0].children.push(rowDom);
                }
            } else {
                let lenArr = getLengthArr(root);
                let node = root[0][0];
                tree = {
                    type: 'box',
                    direction: 'horizontal',
                    children: [
                        { ...node, type: 'text' },
                        {
                            type: 'box',
                            span: lenArr.length - 1,
                            children: createSubChildsDomJson(root, 1)
                        }
                    ]
                }
            }
            return tree;
        },
        //生成行dom节点对应的json数据
        createRowDomJson(root) {
            let row = null;
            let { typeOf } = this;
            if (root.length) {
                let isHorizontal = typeOf(root[0][0]) === 'Object';
                if (isHorizontal) {
                    row = {
                        type: 'box',
                        direction: 'horizontal',
                        children: root.flat(1)
                    }
                } else {
                    let rowsBox = {
                        type: 'box',
                        span: root[0].length,
                        direction: root.length === 1 ? 'stretch' : 'vertical',
                        children: []
                    }
                    root.forEach((row, rInd) => {
                        let rowBox = {
                            type: 'box',
                            direction: 'horizontal',
                            children: []
                        };
                        row.forEach((nodes, colInd) => {
                            nodes.forEach(cell => {
                                rowBox.children.push({ ...cell, type: 'text' })
                            })
                        })
                        rowsBox.children.push(rowBox);
                    })
                    row = rowsBox;
                }
            }
            return row;
        },
        //生成dom子节点对应的json数据
        createSubChildsDomJson(root, sliceInd = 0, endInd) {
            let { nodesToRoots, getRowType, getLengthArr, createTreeDomJson, createRowDomJson, createSubChildsDomJson, getRowsMixSliceInd } = this;
            let childs = [];
            let nodes = root.slice(sliceInd, endInd).flat(Infinity);
            let groups = nodesToRoots(nodes);
            groups.forEach((group, gInd) => {
                let lenArr = getLengthArr(group);
                let rowType = getRowType(lenArr);
                if (rowType === 'row') {
                    let rowDom = createRowDomJson(group);
                    if (rowDom) {
                        childs.push(rowDom)
                    }
                } else if (rowType === 'tree') {
                    childs.push(createTreeDomJson(group));
                } else if (rowType === 'treeMix') {
                    let node = group[0][0];
                    let child = {
                        type: 'box',
                        direction: 'horizontal',
                        children: [
                            { ...node, type: 'text' },
                            {
                                type: 'box',
                                span: lenArr.length - 1,
                                children: createSubChildsDomJson(group, 1)
                            }
                        ]
                    }
                    childs.push(child);
                } else if (rowType === 'rowsMix') {
                    let sliceInd = getRowsMixSliceInd(lenArr);
                    let index = lenArr[0];
                    let isLeftMix = lenArr.some((len, ind) => {
                        if (ind < sliceInd) {
                            return index !== len;
                        } else {
                            return false;
                        }
                    });
                    if (isLeftMix) {
                        childs.push({
                            type: 'box',
                            direction: 'horizontal',
                            children: [{
                                type: 'box',
                                children: [{
                                    type: 'box',
                                    direction: 'horizontal',
                                    children: [{
                                        type: 'box',
                                        span: lenArr.length - (lenArr.length - sliceInd),
                                        children: createSubChildsDomJson(nodesToRoots(group.slice(0, sliceInd).flat(Infinity)))
                                    }, {
                                        type: 'box',
                                        span: lenArr.length - sliceInd,
                                        direction: 'stretch',
                                        children: createSubChildsDomJson(nodesToRoots(group.slice(sliceInd).flat(Infinity)))
                                    }]
                                }]
                            }]
                        })
                    } else {
                        let sliceInd = getRowsMixSliceInd(lenArr);
                        let rowDom = createRowDomJson(nodesToRoots(group.slice(0, sliceInd).flat(Infinity)));
                        let child = {
                            type: 'box',
                            span: lenArr.length,
                            direction: 'horizontal',
                            children: [{
                                type: 'box',
                                direction: 'horizontal',
                                span: lenArr.length - (lenArr.length - sliceInd),
                                children: []
                            },
                            createTreeDomJson(nodesToRoots(group.slice(sliceInd).flat(Infinity)), true)
                            ]
                        }
                        if (rowDom) {
                            child.children[0].children.push(rowDom);
                        }
                        childs.push(child);
                    }

                }
            })
            return childs;
        },
        //生成根节点dom对应的json数据
        createRootChildsDomJson(roots) {
            let childs = [];
            let { createTreeDomJson, createRowDomJson, createSubChildsDomJson, getLengthArr, getRowType } = this;
            roots.forEach(root => {
                let lenArr = getLengthArr(root);
                let rowType = getRowType(lenArr);
                if (rowType === 'row') {
                    let rowDom = createRowDomJson(root);
                    if (rowDom) {
                        childs.push(rowDom);
                    }
                } else if (rowType === 'tree') {
                    childs.push(createTreeDomJson(root));
                } else if (rowType === 'treeMix') {
                    let node = root[0][0];
                    let child = {
                        type: 'box',
                        direction: 'horizontal',
                        children: [
                            { ...node, type: 'text' },
                            {
                                type: 'box',
                                span: lenArr.length - 1,
                                children: createSubChildsDomJson(root, 1)
                            }
                        ]
                    }
                    childs.push(child);
                } else if (rowType === 'rowsMix') {
                    childs.push(...createSubChildsDomJson(root))
                }
            })
            return childs;
        },
        //获取行区域所在列的单元格个数
        getLengthArr(arr) {
            let lenArr = [];
            arr.forEach(item => {
                lenArr.push(item.length);
            });
            return lenArr;
        },
        //获取分割组树的分割下标值
        getTreeSliceInd(lenArr) {
            return lenArr.findIndex((len, ind) => {
                return len != 1;
            })
        },
        //获取水平放置同叶子节点数量的组数的分割下标集合
        getTreeMixSliceInds(lenArr) {
            let inds = [];
            let min = 1; //树的第一列的单元格数量必定为1
            lenArr.forEach((len, ind) => {
                if (min == 1 && len !== 1 || min > len) {
                    inds.push(ind);
                }
                min = len;
            });
            return inds;
        },
        //获取多行开头的混合类型的分割下标
        getRowsMixSliceInd(lenArr) {
            let index = lenArr[0];
            if (index === 1) {
                throw new Error('不是一个标准的rowsMix', lenArr);
            } else {
                return lenArr.findIndex((len, ind) => {
                    if (index <= len) {
                        index = len;
                        return false;
                    } else {
                        return true;
                    }
                })
            }
        },
        //获取单元格的多维数组的下标集合
        getCellInds(cell) {
            let inds = [];
            let cellRow = 0;
            let cellCol = 0;
            let { typeOf } = this;
            let argType = typeOf(cell);
            if (argType === 'HTMLDivElement') {
                let { row, col } = cell.dataset;
                cellRow = row;
                cellCol = col;
            } else if (argType === 'Object') {
                let { row, col } = cell;
                cellRow = row;
                cellCol = col;
            }
            this.roots.find((root, rootInd) => {
                return root.find((cols, colInd) => {
                    return cols.find((cell, cellInd) => {
                        let { row, col } = cell;
                        let isFind = cellRow == row && cellCol == col;
                        if (isFind) {
                            inds.push(rootInd, colInd, cellInd);
                        }
                        return isFind;
                    })
                })
            })
            return inds;
        },
        /**
         * 获取行的类型
         * @returns row: 单一行([1,1,1,1,1,1])；rowsMix（混合行，及非单一行）；tree：标准树（[1,2,2,2,2,2]每一层的节点数>=上一层的节点数）; treeMix(混合树，即非标准树)
         */
        getRowType(lenArr) {
            let type = '';
            let min = 1;
            let max = 1;
            lenArr.some((len, ind) => {
                if (ind === 0) {
                    if (len !== 1) {
                        type = 'rowsMix';
                    }
                    if (lenArr.length === 1) {
                        type = 'row';
                    }
                } else {
                    if (min <= len) {
                        min = len;
                        if (ind === lenArr.length - 1) {
                            type = min === 1 ? 'row' : 'tree';
                        }
                    } else {
                        type = 'treeMix';
                    }
                }
                return !!type
            })
            if (type === '') {
                throw new Error(lenArr, 'type为空字符串了');
            }
            return type;
        },
        //获取行id
        getRowInd(rootInd, rInd, roots) {
            let rowInd = 0;
            if (rootInd === 0) {
                rowInd = rInd;
            } else {
                let num = 0;
                for (let i = 0; i < rootInd; i++) {
                    num += this.getRowTotal(roots[i]);
                    rowInd = num + rInd;
                }
            }
            return rowInd;
        },
        //增加表格行
        addRow() {
            let { createTrees, insertSubTreesToMainTrees } = this;
            let nodes = addRowCb();
            let trees = createTrees(nodes);
            insertSubTreesToMainTrees(trees, this.rootTrees);
        },
        //将新节点添加到根树上
        addNodesToRootTrees(nodes) {
            let { createTrees, insertSubTreesToMainTrees } = this;
            let trees = createTrees(nodes);
            insertSubTreesToMainTrees(trees, this.rootTrees);
        },
        /**根据数组delRows删除对应的所有行
         * @delRows {Array} 要删除的行的属性row的值的数组集合，数组元素不用排序，方法里面会处理
         * **/
        deleteRows(delRows) {
            if (delRows.length) {
                let { createTrees } = this;
                let useNodes = JSON.parse(JSON.stringify(this.roots)).flat(Infinity);
                function toNumberAndOrder(delRows) {
                    delRows = delRows.map(item => {
                        return Number(item);
                    });
                    delRows.sort((a, b) => {
                        return a - b;
                    });
                    return delRows;
                }
                function deleteRow(nodes, delRow) {
                    let useNodes = [];
                    nodes.forEach(node => {
                        let { row, rowspan } = node;
                        if (row < delRow) {
                            if (delRow >= row && delRow < row + rowspan) {
                                node.rowspan--;
                            }
                        } else if (row == delRow) {
                            if (rowspan > 1) {
                                node.rowspan--;
                            }
                        } else if (row > delRow) {
                            node.row--;
                        }
                        if (!(row === delRow && rowspan < 2)) {
                            useNodes.push(node);
                        }
                    })
                    return useNodes;
                }
                delRows = toNumberAndOrder(delRows);
                delRows.forEach((delRow, delInd) => {
                    useNodes = deleteRow(useNodes, delRow - delInd);
                })
                this.rootTrees = createTrees(useNodes);
            }
        },
        // 删除表格行
        deleteRow(rootInd, subInd, roots) {
            let { getRowInd, createTrees } = this;
            let delRowInd = getRowInd(rootInd, subInd, roots);
            let delNodes = [];
            let useNodes = [];
            this.roots.flat(Infinity).forEach(node => {
                let { rowspan, row } = node;
                if (row < delRowInd) {
                    if (delRowInd >= row && delRowInd < row + rowspan) {
                        node.rowspan--;
                    }
                } else if (row == delRowInd) {
                    if (rowspan > 1) {
                        node.rowspan--;
                    }
                } else if (row > delRowInd) {
                    node.row--;
                }
                if (!(row === delRowInd && rowspan < 2)) {
                    useNodes.push(node);
                } else {
                    delNodes.push(node);
                }
            });
            let isSuccess = deleteRowCb(delNodes, useNodes);
            if (isSuccess === true) {
                this.rootTrees = createTrees(useNodes);
            }
            return delNodes;
        },
        //互换表格行（目前需求中暂未用到此方法，只是留着备用，以后可能会用到）
        exchangeRow(dom, moveIndex) {
            let { getCellInds, getTreeRowTotal, updateTreeRow, getBranchsAndIndex, roots } = this;
            let [rootInd, colInd, cellInd] = getCellInds(dom);
            let node = roots[rootInd][colInd][cellInd];
            let rootTrees = JSON.parse(JSON.stringify(this.rootTrees));
            let { branchs, index } = getBranchsAndIndex(node.id, rootTrees);
            let currTree = branchs[index];
            let moveTree = branchs[moveIndex];
            //找到点击节点所在的最近的父级（且父级的rowspan必须大于1），及其该节点在父级的所在分支的下标
            if (moveTree) {
                let curr = {
                    index: index,
                    rowTotal: getTreeRowTotal(currTree),
                    rowMin: currTree.row
                }
                let move = {
                    index: moveIndex,
                    rowTotal: getTreeRowTotal(moveTree),
                    rowMin: moveTree.row
                }
                let minInd = Math.min(curr.index, move.index);
                let maxInd = Math.max(curr.index, move.index);
                let gapRowTotal = move.rowTotal - curr.rowTotal;
                let gapRowMin = move.rowMin - curr.rowMin;
                if (curr.index > move.index) {
                    gapRowTotal = -gapRowTotal;
                    gapRowMin = -gapRowMin;
                }
                branchs.forEach((branch, ind) => {
                    if (ind === minInd) {
                        updateTreeRow(branch, gapRowMin + gapRowTotal);
                    } else if (ind > minInd && ind < maxInd) {
                        updateTreeRow(branch, gapRowTotal);
                    } else if (ind === maxInd) {
                        updateTreeRow(branch, -gapRowMin);
                    }
                });
                let tempBranch = branchs[curr.index];
                branchs[curr.index] = branchs[move.index];
                branchs[move.index] = tempBranch;
                this.rootTrees = rootTrees;
            }
        },
        //是否是满树：某棵树节点的最大的col值是否跟列的最大值相等
        getIsFullTree(tree) {
            let max = 0;
            function cycle(tree) {
                let { col, children = [] } = tree;
                if (max < col) {
                    max = col;
                }
                children.forEach(item => {
                    cycle(item);
                })
            }
            cycle(tree)
            return max === this.colsNames.length - 1;
        },
        //移动数组元素
        moveArrEle(arr, index, toIndex) {
            if (index > toIndex) {
                arr.splice(toIndex, 0, arr[index]);
                arr.splice(index + 1, 1)
            }
            else {
                arr.splice(toIndex + 1, 0, arr[index]);
                arr.splice(index, 1)
            }
        },
        //获取点击节点所在的最近的父级（且父级的rowspan必须大于1）的所有分支，及其该节点对于这个父级的所在分支下标
        getBranchsAndIndex(byId, trees) {
            let branchs = [];
            let index = -1;
            function initBranchs(trees, parentTrees = [trees]) {
                trees.some((tree, currInd) => {
                    let isFind = false;
                    let { id, children, rowspan } = tree;
                    let newParentTrees = parentTrees.slice(0);
                    if (id === byId) {
                        index = currInd;
                        branchs = newParentTrees.slice(-1)[0];
                        isFind = true;
                    } else {
                        if (rowspan > 1) {
                            newParentTrees.push(children);
                        }
                        initBranchs(children, newParentTrees);
                    }
                    return isFind;
                });
            }
            function getIndex(branchs, byId) {
                return branchs.findIndex(item => {
                    const { id, children = [] } = item;
                    let isFind = id === byId;
                    if (!isFind) {
                        isFind = getIndex(children, byId) !== -1;
                    }
                    return isFind;
                })
            }
            initBranchs(trees);
            index = getIndex(branchs, byId);
            return { branchs, index };
        },
        //表格拖动行(松开鼠标后才触发)
        dragRow(dom, moveIndex) {
            let { getCellInds, getTreeRowTotal, getRowTotalAndRowMinFromGroupNodes, updateTreeRow, updateNodesRow, getBranchsAndIndex, moveArrEle, getPinkAndGreenNodes, getIsFullTree, pinkGroup, greenGroups, roots, createTrees, typeOf } = this;
            let [rootInd, colInd, cellInd] = getCellInds(dom);
            let node = roots[rootInd][colInd][cellInd];
            let rootTrees = JSON.parse(JSON.stringify(this.rootTrees));
            let { branchs, index } = getBranchsAndIndex(node.id, rootTrees);
            let currBranch = branchs[index];
            let moveBranch = branchs[moveIndex];
            if (moveBranch) {
                const hasMerge = branchs.some(item => !getIsFullTree(item));
                //当存在用户合并的单元格，则拖动行的逻辑需要在这里处理
                if (hasMerge) {
                    let { pinkNodes, greenNodes } = getPinkAndGreenNodes(pinkGroup, greenGroups);
                    let { rowTotal: currRowTotal, rowMin: currRowMin } = getRowTotalAndRowMinFromGroupNodes(pinkNodes);
                    let { rowTotal: moveRowTotal, rowMin: moveRowMin } = getRowTotalAndRowMinFromGroupNodes(greenNodes[moveIndex]);
                    let [changeNodes, changeIds, newNodes] = [[], [], []];
                    let curr = { index: index, rowTotal: currRowTotal, rowMin: currRowMin };
                    let move = { index: moveIndex, rowTotal: moveRowTotal, rowMin: moveRowMin };
                    // console.log(curr, move, 'curr-move----');
                    greenNodes.forEach((nodes, ind) => {
                        if (curr.index < move.index) {
                            let gapRowTotal = move.rowTotal - curr.rowTotal;
                            let gapRowMin = move.rowMin - curr.rowMin;
                            if (ind === curr.index) {
                                updateNodesRow(nodes, gapRowMin + gapRowTotal);
                                changeNodes.push(...nodes.flat(Infinity));
                            } else if (ind > curr.index && ind <= move.index) {
                                updateNodesRow(nodes, -curr.rowTotal);
                                changeNodes.push(...nodes.flat(Infinity));
                            }
                        } else if (curr.index > move.index) {
                            let gapRowMin = curr.rowMin - move.rowMin;
                            if (ind >= move.index && ind < curr.index) {
                                updateNodesRow(nodes, curr.rowTotal);
                                changeNodes.push(...nodes.flat(Infinity));
                            } else if (ind === curr.index) {
                                updateNodesRow(nodes, -gapRowMin);
                                changeNodes.push(...nodes.flat(Infinity));
                            }
                        }
                    });
                    // let testGreenNodes = JSON.parse(JSON.stringify(greenNodes));
                    // testGreenNodes.forEach(nodes => {
                    //     nodes.forEach(node => {
                    //         delete node.businessId;
                    //         delete node.dimensionId;
                    //         delete node.jfgzHasSet;
                    //         delete node.sjlyHasSet;
                    //         delete node.type;
                    //         delete node.name;
                    //         delete node.pId;
                    //         delete node.id;
                    //     })
                    // })
                    // console.log(testGreenNodes, curr.index, move.index, 'greenNodes---greenNodes----')
                    changeNodes.forEach(item => {
                        changeIds.push(item.id);
                    });
                    newNodes = JSON.parse(JSON.stringify(this.nodes)).map(item => {
                        let changeInd = changeIds.indexOf(item.id);
                        if (changeInd !== -1) {
                            item = changeNodes[changeInd];
                        }
                        return item;
                    })
                    this.rootTrees = createTrees(newNodes);
                } else {
                    let curr = { index: index, rowTotal: getTreeRowTotal(currBranch), rowMin: currBranch.row };
                    let move = { index: moveIndex, rowTotal: getTreeRowTotal(moveBranch), rowMin: moveBranch.row };
                    branchs.forEach((branch, ind) => {
                        if (curr.index < move.index) {
                            let gapRowTotal = move.rowTotal - curr.rowTotal;
                            let gapRowMin = move.rowMin - curr.rowMin;
                            if (ind === curr.index) {
                                updateTreeRow(branch, gapRowMin + gapRowTotal)
                            } else if (ind > curr.index && ind <= move.index) {
                                updateTreeRow(branch, -curr.rowTotal);
                            }
                        } else if (curr.index > move.index) {
                            let gapRowMin = curr.rowMin - move.rowMin;
                            if (ind >= move.index && ind < curr.index) {
                                updateTreeRow(branch, curr.rowTotal);
                            } else if (ind === curr.index) {
                                updateTreeRow(branch, -gapRowMin);
                            }
                        }
                    });
                    moveArrEle(branchs, curr.index, move.index);
                    this.rootTrees = rootTrees;
                }
            }
        },
        //合并单元格
        mergeCells() {
            let { getCellInds, createTrees, getNearestRootByNodeInfoFromTree, rootTrees } = this;
            let nodes = document.querySelectorAll('.seled-cell');
            let [rootInd, colInd, cellInd] = getCellInds(nodes[0]);
            let roots = JSON.parse(JSON.stringify(this.roots));
            let delNodeIds = [];
            let currCols = roots[rootInd][colInd];
            let nextCols = roots[rootInd][colInd + 1];
            let canMerge = getCanMerge();
            function getCanMerge() {
                let nearRoots = [];
                let canMerge = true;
                nodes.forEach(node => {
                    let { id, row, rowspan } = node.dataset;
                    let { id: rootId, row: rootRow, rowspan: rootRowspan, col: rootCol } = getNearestRootByNodeInfoFromTree({ id, row, rowspan }, rootTrees[rootInd]);
                    let findRoot = nearRoots.find(item => item.id === rootId);
                    if (findRoot) {
                        findRoot.children.push(node);
                    } else {
                        nearRoots.push({
                            id: rootId,
                            row: rootRow,
                            col: rootCol,
                            rowspan: rootRowspan,
                            children: [node]
                        })
                    }
                })
                if (nearRoots.length > 1) {
                    nearRoots.find(item => {
                        let { col, rowspan, children } = item;
                        if (col !== 0 && rowspan !== children.length) {
                            canMerge = false;
                        }
                        return !canMerge
                    })
                }
                return canMerge;
            }
            if (canMerge) {
                currCols[cellInd].rowspan = nodes.length;
                currCols.splice(cellInd + 1, nodes.length - 1).forEach(item => {
                    delNodeIds.push(item.id);
                });
                if (nextCols) {
                    nextCols.forEach(item => {
                        if (delNodeIds.includes(item.pId)) {
                            item.pId = currCols[cellInd].id;
                        }
                    })
                }
                this.rootTrees = createTrees(roots.flat(Infinity));
                this.removeClass('seled-cell');
            } else {
                Layer.msg('此种情况不能合并，请重新选择需要合并的单元格！');
            }
            this.showMenu = false;
        },
        //拆分单元格
        splitCells() {
            let { getCellInds, roots, colsNames, createTrees, removeClass } = this;
            let nodes = document.querySelectorAll('.seled-cell');
            let newNodes = [];
            function getParentNode(node) {
                let [rootInd, colInd, cellInd] = getCellInds(node);
                function cycle() {
                    let parent = roots[rootInd][colInd - 1][cellInd];
                    if (parent) {
                        return parent;
                    } else {
                        cellInd--;
                        if (cellInd >= 0) {
                            cycle();
                        }
                    }
                }
                return cycle();
            }
            for (let i = 0; i < nodes.length; i++) {
                let { row, col, rowspan } = nodes[i].dataset;
                row = Number(row);
                col = Number(col);
                for (let j = 1; j < rowspan; j++) {
                    let pId = getParentNode(nodes[i]).id;
                    newNodes.push({ id: "", pId, dimensionId: "", businessId: "", name: colsNames[col], text: "", col, row: row + j, rowspan: 1, type: "text" })
                }
            }
            this.rootTrees = createTrees([...this.nodes, ...newNodes]);
            this.showMenu = false;
            removeClass('seled-cell');
        },
        //获取粉色（可拖动的行的所有节点）和绿色（可拖动区域的行组的所有节点）区域的节点
        getPinkAndGreenNodes(curr, brothors) {
            let nodes = JSON.parse(JSON.stringify(this.nodes));
            let pinkNodes = getNodes(curr);
            let greenNodes = [];
            function getNodes(box) {
                let ids = [];
                let doms = box.querySelectorAll("[data-row],[data-col]")
                for (let i = 0; i < doms.length; i++) {
                    const { id, row, col } = doms[i].dataset;
                    ids.push(id);
                }
                return nodes.filter(item => {
                    return ids.includes(item.id);
                });
            }
            for (let i = 0; i < brothors.length; i++) {
                let groupDomIds = getNodes(brothors[i]);
                greenNodes.push(groupDomIds);
            }
            return {
                pinkNodes,
                greenNodes
            }
        },
        //按下鼠标左键
        onMouseLeft(e) {
            let classList = e.target.classList;
            let { row, col, rowspan } = e.target.dataset;
            console.log(row, col, rowspan, 'row-col-rowspan----')
            if (classList.contains('cell') || classList.contains('par-cell')) {
                let { removeClass, dragRow, getCellInds } = this;
                let hasMove = false;  //是否已经发生了拖动
                let scrollTop = document.body.scrollTop + document.documentElement.scrollTop;  //获取滚动条高度（并处理兼容性）
                let scrollHeight = document.body.scrollHeight + document.documentElement.scrollHeight;  //获取滚动条高度（并处理兼容性）
                let clientHeight = window.innerHeight || document.documentElement.clientHeight;
                let hasScrollbar = scrollHeight > clientHeight;  //是否有滚动条存在
                let cellHeight = document.querySelector('.cell').getBoundingClientRect().height;
                let { x: dX, y: dY } = e;
                let cellBox = e.target.parentNode;
                let areaBox = cellBox.parentNode;
                let areaChildren = areaBox.children;
                let brothorBoxs = [];
                let { top: abTop, height: abHeight } = areaBox.getBoundingClientRect();
                let cellInds = getCellInds(e.target);
                let insertInd = cellInds[0];
                let { top: cbTop, left: cbLeft, width: cbWidth, height: cbHeight } = cellBox.getBoundingClientRect();
                let emptyDiv = document.createElement("div");
                emptyDiv.style.cssText = `height: ${cbHeight}px;`
                this.pinkGroup = cellBox;
                for (let i = 0; i < areaChildren.length; i++) {
                    if (areaChildren[i] !== cellBox) {
                        brothorBoxs.push(areaChildren[i]);
                    }
                    this.greenGroups.push(areaChildren[i]);
                }
                removeClass('drag-node');
                removeClass('drag-area');
                removeClass('seled-cell');
                cellBox.classList.add('drag-node');
                areaBox.classList.add('drag-area');
                document.onmousemove = (e) => {
                    let { x: mX, y: mY } = e;
                    cbTop = cbTop + (mY - dY);
                    if (cbTop < abTop) { cbTop = abTop; }
                    if (cbTop > abTop + abHeight - cbHeight) { cbTop = abTop + abHeight - cbHeight; }
                    cellBox.style.cssText = `
                        left: ${cbLeft}px;
                        top: ${cbTop}px;
                        width: ${cbWidth}px;
                        height: ${cbHeight}px;
                    `;
                    let cbBottom = cbTop + cbHeight;
                    let bbLen = brothorBoxs.length;
                    let isUpMove = mY - dY < 0;  //是否向上移动
                    //获取拖动过程中的当前兄弟行组
                    function getCurrBrothor() {
                        let curr = null;
                        let currInd = -1;
                        for (let i = 0; i < bbLen; i++) {
                            let { top: currTop, height: currHeight } = brothorBoxs[i].getBoundingClientRect();
                            let currBottom = currTop + currHeight;
                            if (cbHeight < currHeight) {
                                if (cbTop >= currTop && cbBottom <= currBottom) {
                                    curr = brothorBoxs[i];
                                    currInd = i;
                                    break;
                                }
                            } else {
                                if ((cbBottom >= currTop && cbBottom <= currBottom) || (cbTop >= currTop && cbTop <= currBottom)) {
                                    curr = brothorBoxs[i];
                                    currInd = i;
                                    break;
                                }
                            }
                        }
                        return { curr, currInd };
                    }
                    //用空盒子占位（撑开空间）
                    function takeSpace() {
                        if (insertInd < bbLen) {
                            areaBox.insertBefore(emptyDiv, brothorBoxs[insertInd]);
                        } else {
                            areaBox.appendChild(emptyDiv);
                        }
                    }
                    //拖动行到最下方或最上方时，自动滚动滚动条
                    function autoScroll() {
                        let reachBottomGap = cellHeight * 2;
                        let hasScroll = false;  //是否发生了滚动
                        if (isUpMove) {
                            if (cbTop >= 0 && cbTop < reachBottomGap) {
                                hasScroll = true;
                                scrollTop -= reachBottomGap;
                            }
                        } else {
                            let nearBottom = clientHeight - cbBottom;
                            if (nearBottom < reachBottomGap) {
                                hasScroll = true;
                                scrollTop += reachBottomGap;
                            }
                        }
                        document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
                        if (hasScroll) {
                            let { top: newAbTop, height: newAbHeight } = areaBox.getBoundingClientRect();
                            let { top: newCbTop, height: newCbHeight } = cellBox.getBoundingClientRect();
                            abTop = newAbTop;
                            abHeight = newAbHeight;
                            cbTop = newCbTop;
                            cbHeight = newCbHeight;
                        }
                    }
                    hasMove = true;
                    cellBox.classList.add('come-up');
                    //初始占位
                    takeSpace();
                    let { curr, currInd } = getCurrBrothor();
                    if (curr) {
                        let { top: currTop, height: currHeight } = curr.getBoundingClientRect();
                        let currMiddle = currTop + currHeight / 2;
                        let currBottom = currTop + currHeight;
                        if (cbHeight < currHeight) {
                            if (isUpMove) {
                                if (cbTop < currTop + cellHeight) {
                                    insertInd = currInd;
                                } else if (cbTop > currBottom - cellHeight) {
                                    insertInd = currInd + 1;
                                }
                            } else {
                                if (cbBottom < currTop + cellHeight) {
                                    insertInd = currInd;
                                } else if (cbBottom > currBottom - cellHeight) {
                                    insertInd = currInd + 1;
                                }
                            }
                        } else {
                            if (isUpMove) {
                                if (currHeight <= cellHeight) {
                                    if (cbTop < currMiddle) {
                                        insertInd = currInd;
                                    } else if (cbTop > currMiddle) {
                                        insertInd = currInd + 1;
                                    }
                                } else {
                                    if (cbTop < currTop + cellHeight) {
                                        insertInd = currInd;
                                    } else if (cbTop > currBottom - cellHeight) {
                                        insertInd = currInd + 1;
                                    }
                                }
                            } else {
                                if (currHeight <= cellHeight) {
                                    if (cbBottom < currMiddle) {
                                        insertInd = currInd;
                                    } else if (cbBottom > currMiddle) {
                                        insertInd = currInd + 1;
                                    }
                                } else {
                                    if (cbBottom < currTop + cellHeight) {
                                        insertInd = currInd;
                                    } else if (cbBottom > currBottom - cellHeight) {
                                        insertInd = currInd + 1;
                                    }
                                }
                            }
                        }
                        //拖动占位
                        takeSpace();
                    }
                    hasScrollbar && autoScroll();
                    dX = mX;
                    dY = mY;
                }
                document.onmouseup = () => {
                    hasMove && dragRow(e.target, insertInd);
                    removeClass('drag-node');
                    removeClass('drag-area');
                    emptyDiv.remove();
                    cellBox.classList.remove('come-up');
                    cellBox.style.cssText = null;
                    this.pinkGroup = null;
                    this.greenGroups = [];
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
        },
        //按下鼠标右键
        onMouseRight(e) {
            let classList = e.target.classList;
            if (classList.contains('edit-cell')) {
                let { removeClass, getCellInds } = this;
                let { x: dX, y: dY } = e;
                let cellInds = getCellInds(e.target);
                let rootInd = cellInds[0];
                let originCellCol = e.target.dataset.col;
                let rootRow = document.querySelector(`#body>.row:nth-child(${rootInd + 1})`);
                if (classList.contains('seled-cell')) {
                    this.showMenu = true;
                    this.$refs.menu.style.cssText = `
                    left: ${dX}px;
                    top: ${dY}px;
                `;
                } else {
                    removeClass('seled-cell');
                    this.showMenu = false;
                }
                document.onmousemove = (e) => {
                    let classList = e.target.classList;
                    let { x: mX, y: mY } = e;
                    let isUpMove = mY - dY < 0;
                    if (classList.contains('edit-cell')) {
                        let { top: cellTop, height: cellHeight } = e.target.getBoundingClientRect();
                        let { top: rootTop, height: rootHeight } = rootRow.getBoundingClientRect();
                        let currCellCol = e.target.dataset.col;
                        if (cellTop >= rootTop && cellTop + cellHeight <= rootTop + rootHeight) {
                            if (originCellCol === currCellCol) {
                                if (isUpMove) {
                                    if (mY <= cellTop + cellHeight / 5) {
                                        classList.remove('seled-cell');
                                    }
                                } else {
                                    classList.add('seled-cell');
                                }
                            }
                        }
                    }
                    dX = mX;
                    dY = mY;
                }
                document.onmouseup = () => {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
        },
        //单击单元格
        onCell() {
            if (this.mouseLeftDownTimer) {
                clearTimeout(this.mouseLeftDownTimer);
                this.mouseLeftDownTimer = null;
            }
        },
        //双击单元格
        onDbEditCell(e) {
            let target = e.target;
            let { rootTrees } = this;
            let { id: byId } = e.target.dataset;
            if (this.mouseLeftDownTimer) {
                clearTimeout(this.mouseLeftDownTimer);
                this.mouseLeftDownTimer = null;
            }
            if (this.canEdit && target.classList.contains("edit-cell")) {
                let { innerText } = target;
                let textarea = document.createElement("textarea");
                textarea.type = 'text';
                textarea.placeholder = "请输入";
                textarea.classList.add('layui-textarea');
                textarea.value = innerText;
                target.classList.add("relative");
                target.appendChild(textarea);
                //将光标设置在末尾
                function setCursorAtEnd(obj) {
                    obj.focus();
                    let len = obj.value.length;
                    if (document.selection) {
                        let sel = obj.createTextRange();
                        sel.moveStart('character', len);
                        sel.collapse();
                        sel.select();
                    } else if (typeof obj.selectionStart == 'number'
                        && typeof obj.selectionEnd == 'number') {
                        obj.selectionStart = obj.selectionEnd = len;
                    }
                }
                setCursorAtEnd(textarea);
                textarea.onblur = () => {
                    let inpVal = textarea.value;
                    function cycle(trees) {
                        return !!trees.find(tree => {
                            let { id, children } = tree;
                            let isFind = id === byId;
                            if (isFind) {
                                tree.text = inpVal;
                            } else {
                                isFind = cycle(children);
                            }
                            return isFind;
                        });
                    }
                    cycle(rootTrees);
                    target.classList.remove('relative');
                    target.setAttribute("title", textarea.value)
                    textarea.remove();
                }
            }
        },
        //在单元格上按下鼠标按键时
        onMouseDown(e) {
            if (!this.canEdit) { return; }
            let { onMouseLeft, onMouseRight } = this;
            let { button: mouseBtn } = e;
            //0鼠标左键；2鼠标右键
            if (mouseBtn === 0) {
                this.removeClass('seled-cell');
                this.showMenu = false;
                if (!this.mouseLeftDownTimer) {
                    this.mouseLeftDownTimer = setTimeout(() => {
                        onMouseLeft(e);
                        this.mouseLeftDownTimer = null;
                    }, 120);
                }
            } else if (mouseBtn === 2) {
                onMouseRight(e);
            }
        },
        /**
         * 切换按钮是否已设置状态
         * @btnColName {String} 区分按钮列的表头colName值
         * @attrKey {String} 要获取的目标节点上的属性值
         * @rootInd {String, Number} 所在根组的下标值
         * @subInd {String, Number} 所在根组的子组的下标值
         * @colName {String} 要获取的目标节点对应的表头colName值
         * **/
        toggleSet(btnColName, rootInd, subInd, colName, attrKey) {
            let { getRowInd, roots, getColAttr } = this;
            let currRow = getRowInd(rootInd, subInd, roots);
            let colInd = getColAttr(colName).index;
            let target = roots[rootInd][colInd].find(node => {
                return node.row === currRow;
            });
            let isSuccess = toggleSetCb(btnColName, target);
            if (isSuccess) {
                roots[rootInd][colInd].some(node => {
                    let isFind = node.row === currRow;
                    if (isFind) {
                        node[attrKey] = !node[attrKey];
                    }
                    return isFind;
                })
            }
        },
    },
});