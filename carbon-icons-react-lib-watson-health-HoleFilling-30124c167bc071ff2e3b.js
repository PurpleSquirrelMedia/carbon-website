"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[79911,49683,65326],{88192:function(e,t,r){var n=r(95752),a=r(45697),i=r(67294);function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=l(a),u=l(i);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=["className","children","tabIndex"],b=["tabindex"],g=u.default.forwardRef((function(e,t){var r=e.className,a=e.children,i=e.tabIndex,l=d(e,p),o=n.getAttributes(f(f({},l),{},{tabindex:i})),c=o.tabindex,s=d(o,b);return r&&(s.className=r),null!=c&&(s.tabIndex=c),t&&(s.ref=t),u.default.createElement("svg",s,a)}));g.displayName="Icon",g.propTypes={"aria-hidden":o.default.string,"aria-label":o.default.string,"aria-labelledby":o.default.string,children:o.default.node,className:o.default.string,height:o.default.oneOfType([o.default.number,o.default.string]),preserveAspectRatio:o.default.string,tabIndex:o.default.string,viewBox:o.default.string,width:o.default.oneOfType([o.default.number,o.default.string]),xmlns:o.default.string},g.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};var y={size:o.default.oneOfType([o.default.number,o.default.string])};t.Icon=g,t._objectSpread2=f,t._objectWithoutProperties=d,t.iconPropTypes=y},97137:function(e,t,r){var n=r(88192),a=r(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(95752),r(45697);var l,o,u=i(a),c=["children","size"],f=u.default.forwardRef((function(e,t){var r=e.children,a=e.size,i=void 0===a?16:a,f=n._objectWithoutProperties(e,c);return u.default.createElement(n.Icon,n._objectSpread2({width:i,height:i,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},f),l||(l=u.default.createElement("circle",{cx:"16",cy:"16",r:"5"})),o||(o=u.default.createElement("path",{d:"M26,28H6a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,6,4H26a2.0023,2.0023,0,0,1,2,2V26A2.0023,2.0023,0,0,1,26,28ZM6,6V26H26.0012L26,6Z"})),r)}));f.propTypes=n.iconPropTypes,e.exports=f}}]);