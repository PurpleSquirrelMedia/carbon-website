"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[67416,49683,65326],{88192:function(e,t,r){var n=r(95752),a=r(45697),i=r(67294);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=o(a),u=o(i);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=["className","children","tabIndex"],b=["tabindex"],g=u.default.forwardRef((function(e,t){var r=e.className,a=e.children,i=e.tabIndex,o=d(e,p),l=n.getAttributes(c(c({},o),{},{tabindex:i})),f=l.tabindex,s=d(l,b);return r&&(s.className=r),null!=f&&(s.tabIndex=f),t&&(s.ref=t),u.default.createElement("svg",s,a)}));g.displayName="Icon",g.propTypes={"aria-hidden":l.default.string,"aria-label":l.default.string,"aria-labelledby":l.default.string,children:l.default.node,className:l.default.string,height:l.default.oneOfType([l.default.number,l.default.string]),preserveAspectRatio:l.default.string,tabIndex:l.default.string,viewBox:l.default.string,width:l.default.oneOfType([l.default.number,l.default.string]),xmlns:l.default.string},g.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};var y={size:l.default.oneOfType([l.default.number,l.default.string])};t.Icon=g,t._objectSpread2=c,t._objectWithoutProperties=d,t.iconPropTypes=y},29300:function(e,t,r){var n=r(88192),a=r(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(95752),r(45697);var o,l=i(a),u=["children","size"],f=l.default.forwardRef((function(e,t){var r=e.children,a=e.size,i=void 0===a?16:a,f=n._objectWithoutProperties(e,u);return l.default.createElement(n.Icon,n._objectSpread2({width:i,height:i,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},f),o||(o=l.default.createElement("path",{d:"M11 24H21V26H11zM13 28H19V30H13zM10.8145 18.1406A7.1851 7.1851 0 018 12a8.0092 8.0092 0 018-8V2A10.0111 10.0111 0 006 12a9.1793 9.1793 0 003.46 7.6162C10.4717 20.5508 11 21.0815 11 22h2C13 20.16 11.8892 19.1338 10.8145 18.1406zM23.04 16a9.4858 9.4858 0 01-1.8623 2.1426C20.1069 19.1348 19 20.1611 19 22h2c0-.9194.5264-1.45 1.5352-2.3857A9.9838 9.9838 0 0025.2756 16zM30 8a6 6 0 10-6 6A6.0066 6.0066 0 0030 8zM28 8a3.9521 3.9521 0 01-.5669 2.019L21.981 4.5669A3.9529 3.9529 0 0124 4 4.0045 4.0045 0 0128 8zM20 8a3.9521 3.9521 0 01.5669-2.019l5.4521 5.4521A3.9529 3.9529 0 0124 12 4.0045 4.0045 0 0120 8z"})),r)}));f.propTypes=n.iconPropTypes,e.exports=f}}]);