//最开始的拖动表格行
        // dragRow(dom, moveIndex) {
        //     let { getCellInds, getTreeRowTotal, updateTreeRow, roots } = this;
        //     let [rootInd, colInd, cellInd] = getCellInds(dom);
        //     let node = roots[rootInd][colInd][cellInd];
        //     let rootTrees = JSON.parse(JSON.stringify(this.rootTrees));
        //     let { branchs, index } = findBranchsAndIndex(node.id, rootTrees);
        //     let currTree = branchs[index];
        //     let moveTree = branchs[moveIndex];
        //     //找到点击节点所在的最近的父级（且父级的rowspan必须大于1）的所有分支，及其该节点对于这个父级的所在分支下标
        //     function findBranchsAndIndex(byId, trees) {
        //         let branchs = [];
        //         let index = -1;
        //         function cycle(trees, parentTrees) {
        //             trees.some((tree, currInd) => {
        //                 let isFind = false;
        //                 let { id, children, rowspan } = tree;
        //                 let newParentTrees = parentTrees.slice(0);
        //                 if (id === byId) {
        //                     index = currInd;
        //                     branchs = newParentTrees.slice(-1)[0];
        //                     isFind = true;
        //                 } else {
        //                     if (rowspan > 1) {
        //                         newParentTrees.push(children);
        //                     }
        //                     cycle(children, newParentTrees);
        //                 }
        //                 return isFind;
        //             });
        //         }
        //         cycle(trees, [trees]);
        //         return { branchs, index };
        //     }
        //     //获取某棵树节点的最大的col值
        //     function getTreeMaxCol(tree) {
        //         let max = 0;
        //         function cycle(tree) {
        //             let { col, children = [] } = tree;
        //             if (max < col) {
        //                 max = col;
        //             }
        //             children.forEach(item => {
        //                 cycle(item);
        //             })
        //         }
        //         cycle(tree)
        //         return max;
        //     }
        //     if (moveTree) {
        //         let curr = {
        //             index: index,
        //             rowTotal: getTreeRowTotal(currTree),
        //             rowMin: currTree.row
        //         }
        //         let move = {
        //             index: moveIndex,
        //             rowTotal: getTreeRowTotal(moveTree),
        //             rowMin: moveTree.row
        //         }
        //         //移动数组元素
        //         function moveArrEle(arr, index, toIndex) {
        //             if (index > toIndex) {
        //                 arr.splice(toIndex, 0, arr[index]);
        //                 arr.splice(index + 1, 1)
        //             }
        //             else {
        //                 arr.splice(toIndex + 1, 0, arr[index]);
        //                 arr.splice(index, 1)
        //             }
        //         }
        //         branchs.forEach((branch, ind) => {
        //             if (curr.index < move.index) {
        //                 let gapRowTotal = move.rowTotal - curr.rowTotal;
        //                 let gapRowMin = move.rowMin - curr.rowMin;
        //                 if (ind === curr.index) {
        //                     updateTreeRow(branch, gapRowMin + gapRowTotal)
        //                 } else if (ind > curr.index && ind <= move.index) {
        //                     updateTreeRow(branch, -curr.rowTotal);
        //                 }
        //             } else if (curr.index > move.index) {
        //                 let gapRowMin = curr.rowMin - move.rowMin;
        //                 if (ind >= move.index && ind < curr.index) {
        //                     updateTreeRow(branch, curr.rowTotal);
        //                 } else if (ind === curr.index) {
        //                     updateTreeRow(branch, -gapRowMin);
        //                 }
        //             }
        //         });
        //         moveArrEle(branchs, curr.index, move.index);
        //         this.rootTrees = rootTrees;
        //     }
        // },


// dragRow(dom, moveIndex) {
        //     let { getCellInds, getTreeRowTotal, updateTreeRow, roots, colsNames, typeOf } = this;
        //     let [rootInd, colInd, cellInd] = getCellInds(dom);
        //     let node = roots[rootInd][colInd][cellInd];
        //     let rootTrees = JSON.parse(JSON.stringify(this.rootTrees));
        //     let { branchs, index } = findBranchsAndIndex(node.id, rootTrees);
        //     let currTree = branchs[index];
        //     let moveTree = branchs[moveIndex];
        //     console.log(branchs, index, moveIndex, 'branchs----index----moveIndex')
        //     //获取某棵树节点的最大的col值
        //     function getTreeMaxCol(tree) {
        //         let max = 0;
        //         function cycle(tree) {
        //             let { col, children = [] } = tree;
        //             if (max < col) {
        //                 max = col;
        //             }
        //             children.forEach(item => {
        //                 cycle(item);
        //             })
        //         }
        //         cycle(tree)
        //         return max;
        //     }
        //     //找到点击节点所在的最近的父级（且父级的rowspan必须大于1）的所有分支，及其该节点对于这个父级的所在分支下标
        //     // function findBranchsAndIndex(byId, trees) {
        //     //     let branchs = [];
        //     //     let index = -1;
        //     //     function cycle(trees, parentTrees) {
        //     //         trees.some((tree, currInd) => {
        //     //             let isFind = false;
        //     //             let { id, children, rowspan } = tree;
        //     //             let newParentTrees = parentTrees.slice(0);
        //     //             if (id === byId) {
        //     //                 index = currInd;
        //     //                 branchs = newParentTrees.slice(-1)[0];
        //     //                 isFind = true;
        //     //             } else {
        //     //                 if (rowspan > 1) {
        //     //                     newParentTrees.push(children);
        //     //                 }
        //     //                 cycle(children, newParentTrees);
        //     //             }
        //     //             return isFind;
        //     //         });
        //     //     }
        //     //     cycle(trees, [trees]);
        //     //     return { branchs, index };
        //     // }
        //     function findBranchsAndIndex(byId, trees) {
        //         let branchs = [];
        //         let index = -1;
        //         const maxCol = colsNames.length - 1;
        //         function cycle(trees, parentTrees) {
        //             trees.some((tree, currInd) => {
        //                 let isFind = false;
        //                 let { id, children, rowspan } = tree;
        //                 let newParentTrees = parentTrees.slice(0);
        //                 if (id === byId) {
        //                     console.log(id, byId, 'id---byId')
        //                     index = currInd;
        //                     branchs = newParentTrees.slice(-1)[0];
        //                     isFind = true;

        //                     // function getIndx(brans, cuInd) {
        //                     //     const isFullTree = getTreeMaxCol(brans[cuInd]) === maxCol;  //是否是满树：最外层的叶子节点的col属性是否是最大值
        //                     //     if (isFullTree) {
        //                     //         index = cuInd;
        //                     //     } else {
        //                     //         let preInd = cuInd - 1;
        //                     //         if (preInd >= 0) {
        //                     //             getIndx(brans, preInd);
        //                     //         }
        //                     //     }
        //                     // }
        //                     // getIndx(branchs, currInd);
        //                     // branchs = newParentTrees.slice(-1)[0];
        //                     // isFind = true;
        //                 } else {
        //                     if (rowspan > 1) {
        //                         newParentTrees.push(children);
        //                     }
        //                     cycle(children, newParentTrees);
        //                 }
        //                 return isFind;
        //             });
        //         }
        //         cycle(trees, [trees]);
        //         const newBranchs = [];
        //         branchs.forEach((item, ind) => {
        //             const isFullTree = getTreeMaxCol(item) === maxCol;
        //             const endInd = newBranchs.length - 1;
        //             isFullTree ? newBranchs.push(item) : newBranchs[endInd] = [newBranchs[endInd], item];
        //         })
        //         console.log(newBranchs, index, 'newBranchs----')
        //         return { branchs: newBranchs, index };
        //     }
        //     if (moveTree) {
        //         let curr = {
        //             index: index,
        //             rowTotal: getTreeRowTotal(currTree),
        //             rowMin: currTree.row
        //         }
        //         let move = {
        //             index: moveIndex,
        //             rowTotal: getTreeRowTotal(moveTree),
        //             rowMin: moveTree.row
        //         }
        //         //移动数组元素
        //         function moveArrEle(arr, index, toIndex) {
        //             if (index > toIndex) {
        //                 arr.splice(toIndex, 0, arr[index]);
        //                 arr.splice(index + 1, 1)
        //             }
        //             else {
        //                 arr.splice(toIndex + 1, 0, arr[index]);
        //                 arr.splice(index, 1)
        //             }
        //         }
        //         branchs.forEach((branch, ind) => {
        //             let branchType = typeOf(branch);
        //             if (curr.index < move.index) {
        //                 let gapRowTotal = move.rowTotal - curr.rowTotal;
        //                 let gapRowMin = move.rowMin - curr.rowMin;
        //                 if (ind === curr.index) {
        //                     if (branchType === 'Object') {
        //                         updateTreeRow(branch, gapRowMin + gapRowTotal)
        //                     } else if (branchType === 'Array') {

        //                     }
        //                 } else if (ind > curr.index && ind <= move.index) {
        //                     if (branchType === 'Object') {
        //                         updateTreeRow(branch, -curr.rowTotal);
        //                     } else if (branchType === 'Array') {

        //                     }
        //                 }
        //             } else if (curr.index > move.index) {
        //                 let gapRowMin = curr.rowMin - move.rowMin;
        //                 if (ind >= move.index && ind < curr.index) {
        //                     if (branchType === 'Object') {
        //                         updateTreeRow(branch, curr.rowTotal);
        //                     } else if (branchType === 'Array') {

        //                     }
        //                 } else if (ind === curr.index) {
        //                     if (branchType === 'Object') {
        //                         updateTreeRow(branch, -gapRowMin);
        //                     } else if (branchType === 'Array') {

        //                     }
        //                 }
        //             }
        //         });
        //         moveArrEle(branchs, curr.index, move.index);
        //         this.rootTrees = rootTrees;
        //     }
        // },
