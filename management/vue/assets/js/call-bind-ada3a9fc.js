import{g as t}from"./get-intrinsic-176af07e.js";import{f as e}from"./function-bind-afbcd6f2.js";import{s as o}from"./set-function-length-968dc075.js";import{t as r}from"./es-errors-c8ed318b.js";import{r as n}from"./es-define-property-c2edbfb6.js";var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function p(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var o=function t(){return this instanceof t?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};o.prototype=e.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(o,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})})),o}var a={exports:{}};!function(f){var i=e,p=t,a=o,s=r,u=p("%Function.prototype.apply%"),c=p("%Function.prototype.call%"),l=p("%Reflect.apply%",!0)||i.call(c,u),y=n(),d=p("%Math.max%");f.exports=function(t){if("function"!=typeof t)throw new s("a function is required");var e=l(i,c,arguments);return a(e,1+d(0,t.length-(arguments.length-1)),!0)};var g=function(){return l(i,u,arguments)};y?y(f.exports,"apply",{value:g}):f.exports.apply=g}(a);var s=t,u=a.exports,c=u(s("String.prototype.indexOf")),l=function(t,e){var o=s(t,!!e);return"function"==typeof o&&c(t,".prototype.")>-1?u(o):o};export{p as a,l as b,f as c,i as g};