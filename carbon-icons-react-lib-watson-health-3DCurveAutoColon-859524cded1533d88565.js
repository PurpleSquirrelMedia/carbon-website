"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[22657,49683,65326],{88192:function(e,t,r){var n=r(95752),a=r(45697),i=r(67294);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=o(a),u=o(i);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=["className","children","tabIndex"],b=["tabindex"],g=u.default.forwardRef((function(e,t){var r=e.className,a=e.children,i=e.tabIndex,o=d(e,p),l=n.getAttributes(c(c({},o),{},{tabindex:i})),f=l.tabindex,s=d(l,b);return r&&(s.className=r),null!=f&&(s.tabIndex=f),t&&(s.ref=t),u.default.createElement("svg",s,a)}));g.displayName="Icon",g.propTypes={"aria-hidden":l.default.string,"aria-label":l.default.string,"aria-labelledby":l.default.string,children:l.default.node,className:l.default.string,height:l.default.oneOfType([l.default.number,l.default.string]),preserveAspectRatio:l.default.string,tabIndex:l.default.string,viewBox:l.default.string,width:l.default.oneOfType([l.default.number,l.default.string]),xmlns:l.default.string},g.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};var y={size:l.default.oneOfType([l.default.number,l.default.string])};t.Icon=g,t._objectSpread2=c,t._objectWithoutProperties=d,t.iconPropTypes=y},39646:function(e,t,r){var n=r(88192),a=r(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(95752),r(45697);var o,l=i(a),u=["children","size"],f=l.default.forwardRef((function(e,t){var r=e.children,a=e.size,i=void 0===a?16:a,f=n._objectWithoutProperties(e,u);return l.default.createElement(n.Icon,n._objectSpread2({width:i,height:i,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},f),o||(o=l.default.createElement("path",{d:"M9.5,8H20.1a5,5,0,1,0,0-2H9.5a5.5,5.5,0,0,0,0,11h11a3.5,3.5,0,0,1,0,7H11.9a5,5,0,1,0,0,2h8.6a5.5,5.5,0,0,0,0-11H9.5a3.5,3.5,0,0,1,0-7ZM25,4a3,3,0,1,1-3,3A3,3,0,0,1,25,4ZM7,28a3,3,0,1,1,3-3A3,3,0,0,1,7,28Z"})),r)}));f.propTypes=n.iconPropTypes,e.exports=f}}]);