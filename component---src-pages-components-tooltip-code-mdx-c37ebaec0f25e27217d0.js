"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[54574],{28399:function(e,t,o){o.d(t,{Z:function(){return k}});var n=o(67294),a=o(88650),i=o.n(a),s=o(1597),l=o(64905),r=o(68636),c=o(75900),m=o.n(c);var p=e=>{let{title:t,theme:o,tabs:a=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":a.length,"PageHeader-module--dark-mode--WCeH8":"dark"===o})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:o}=e;const{site:{siteMetadata:{repository:a}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:r}=o||a,c=`${i}/edit/${r}${l}/src/pages${t}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=o(56328),h=o(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:o}=this.props,a=o.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===a,r=new RegExp(`${a}/?(#.*)?$`),c=o.replace(r,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var g=b,y=o(17680),f=o(75387),T=o(50041);var v=e=>{let{date:t}=e;const o=new Date(t);return t?n.createElement(T.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(T.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",o.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:o,location:a,Title:c}=e;const{frontmatter:m={},relativePagePath:h,titleType:b}=t,{tabs:T,title:k,theme:x,description:E,keywords:C,date:w}=m,{interiorTheme:P}=(0,f.Z)(),{site:{pathPrefix:N}}=(0,s.useStaticQuery)("2456312558"),D=N?a.pathname.replace(N,""):a.pathname,L=T?D.split("/").filter(Boolean).slice(-1)[0]||i()(T[0],{lower:!0}):"",R=x||P;return n.createElement(r.Z,{tabs:T,homepage:!1,theme:R,pageTitle:k,pageDescription:E,pageKeywords:C,titleType:b},n.createElement(p,{title:c?n.createElement(c,null):k,label:"label",tabs:T,theme:R}),T&&n.createElement(g,{title:k,slug:D,tabs:T,currentTab:L}),n.createElement(y.Z,{padded:!0},o,n.createElement(d,{relativePagePath:h}),n.createElement(v,{date:w})),n.createElement(u.Z,{pageContext:t,location:a,slug:D,tabs:T,currentTab:L}),n.createElement(l.Z,null))}},80282:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return r},default:function(){return T}});var n=o(45987),a=(o(67294),o(64983)),i=o(28399),s=o(52006);const l=["components"],r={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("PageDescription"),p=c("Row"),d=c("Column"),u=c("ResourceCard"),h=c("MdxIcon"),b=c("ComponentDemo"),g=c("ComponentVariant"),y={_frontmatter:r},f=i.Z;function T(e){let{components:t}=e,o=(0,n.Z)(e,l);return(0,a.kt)(f,Object.assign({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m,{mdxType:"PageDescription"},(0,a.kt)("p",null,"Preview the tooltip component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,a.kt)("h2",null,"Documentation"),(0,a.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-tooltip--default-bottom",mdxType:"ResourceCard"},(0,a.kt)(h,{name:"react",mdxType:"MdxIcon"}))),(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-tooltip--basic",mdxType:"ResourceCard"},(0,a.kt)(h,{name:"angular",mdxType:"MdxIcon"}))),(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvtooltip--default-interactive-tootlip",mdxType:"ResourceCard"},(0,a.kt)(h,{name:"vue",mdxType:"MdxIcon"}))),(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-tooltip--default",mdxType:"ResourceCard"},(0,a.kt)(h,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,a.kt)("h2",null,"Live demo"),(0,a.kt)(b,{components:[{id:"tooltip",label:"Tooltip"},{id:"icon-tooltip",label:"Icon tooltip"},{id:"definition-tooltip",label:"Definition tooltip"}],scope:{Filter:s.wn$},mdxType:"ComponentDemo"},(0,a.kt)(g,{id:"tooltip",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tooltip--default-bottom",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tooltip--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtooltip--default-interactive-tootlip",Vanilla:"https://the-carbon-components.netlify.com/?nav=tooltip","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tooltip--default"},mdxType:"ComponentVariant"},'\n    <Tooltip\n      direction="bottom"\n      tabIndex={0}\n      triggerText="Tooltip label"\n    >\n      <p>\n        This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead.\n      </p>\n      <div className="cds--tooltip__footer">\n        <Link href="#">Learn more</Link>\n        <Button size="small">\n          Create\n        </Button>\n      </div>\n    </Tooltip>\n  '),(0,a.kt)(g,{id:"icon-tooltip",knobs:{TooltipIcon:["direction","align"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tooltipicon--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tooltip-icon--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtooltip--default-tootlip",Vanilla:"https://the-carbon-components.netlify.com/?nav=tooltip","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tooltip--icon"},mdxType:"ComponentVariant"},'\n    <TooltipIcon\n      tooltipText="Filter"\n    >\n      <Filter/>\n    </TooltipIcon>\n  '),(0,a.kt)(g,{id:"definition-tooltip",knobs:{TooltipDefinition:["direction","align"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tooltipdefinition--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tooltip-definition--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtooltip--default-definition-tootlip",Vanilla:"https://the-carbon-components.netlify.com/?nav=tooltip","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tooltip--definition"},mdxType:"ComponentVariant"},'\n    <TooltipDefinition\n      tooltipText="Brief description of the dotted, underlined word above."\n    >\n      Definition Tooltip\n    </TooltipDefinition>\n  ')))}T.isMDXComponent=!0}}]);