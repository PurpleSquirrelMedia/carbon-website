"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[35118],{28399:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),r=a(88650),o=a.n(r),l=a(1597),s=a(64905),c=a(68636),m=a(75900),i=a.n(m);var d=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:i()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:c}=a||r,m=`${o}/edit/${c}${s}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),s=t===r,c=new RegExp(`${r}/?(#.*)?$`),m=a.replace(c,t);return n.createElement("li",{key:e,className:i()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=y,h=a(17680),T=a(75387),C=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(C.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(C.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:a,location:r,Title:m}=e;const{frontmatter:i={},relativePagePath:g,titleType:y}=t,{tabs:C,title:k,theme:v,description:E,keywords:x,date:w}=i,{interiorTheme:P}=(0,T.Z)(),{site:{pathPrefix:N}}=(0,l.useStaticQuery)("2456312558"),M=N?r.pathname.replace(N,""):r.pathname,D=C?M.split("/").filter(Boolean).slice(-1)[0]||o()(C[0],{lower:!0}):"",R=v||P;return n.createElement(c.Z,{tabs:C,homepage:!1,theme:R,pageTitle:k,pageDescription:E,pageKeywords:x,titleType:y},n.createElement(d,{title:m?n.createElement(m,null):k,label:"label",tabs:C,theme:R}),C&&n.createElement(b,{title:k,slug:M,tabs:C,currentTab:D}),n.createElement(h.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(f,{date:w})),n.createElement(u.Z,{pageContext:t,location:r,slug:M,tabs:C,currentTab:D}),n.createElement(s.Z,null))}},58006:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return T}});var n=a(45987),r=(a(67294),a(64983)),o=a(28399);const l=["components"],s={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("PageDescription"),i=c("Row"),d=c("Column"),p=c("ResourceCard"),u=c("MdxIcon"),g=c("ComponentDemo"),y=c("ComponentVariant"),b={_frontmatter:s},h=o.Z;function T(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,r.kt)(h,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Preview the tag component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,r.kt)("h2",null,"Documentation"),(0,r.kt)(i,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(p,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-tag--default",mdxType:"ResourceCard"},(0,r.kt)(u,{name:"react",mdxType:"MdxIcon"}))),(0,r.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(p,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-tag--basic",mdxType:"ResourceCard"},(0,r.kt)(u,{name:"angular",mdxType:"MdxIcon"}))),(0,r.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(p,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvtag--default",mdxType:"ResourceCard"},(0,r.kt)(u,{name:"vue",mdxType:"MdxIcon"}))),(0,r.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(p,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-tag--default",mdxType:"ResourceCard"},(0,r.kt)(u,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,r.kt)("h2",null,"Live demo"),(0,r.kt)(g,{components:[{id:"tag",label:"Tag"}],mdxType:"ComponentDemo"},(0,r.kt)(y,{id:"tag",knobs:{Tag:["filter","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tag--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tag--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtag--filter",Vanilla:"https://the-carbon-components.netlify.com/?nav=tag","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tag--default"},mdxType:"ComponentVariant"},'\n  <>\n<Tag type="red" title="Clear Filter"> Red </Tag>\n<Tag type="magenta" title="Clear Filter"> Magenta </Tag>\n<Tag type="purple" title="Clear Filter"> Purple </Tag>\n<Tag type="blue" title="Clear Filter"> Blue </Tag>\n<Tag type="cyan" title="Clear Filter"> Cyan </Tag>\n<Tag type="teal" title="Clear Filter"> Teal </Tag>\n<Tag type="green" title="Clear Filter"> Green </Tag>\n<Tag type="gray" title="Clear Filter"> Gray </Tag>\n<Tag type="cool-gray" title="Clear Filter"> Cool gray </Tag>\n<Tag type="warm-gray" title="Clear Filter"> Warm gray </Tag>\n</>\n  ')))}T.isMDXComponent=!0}}]);