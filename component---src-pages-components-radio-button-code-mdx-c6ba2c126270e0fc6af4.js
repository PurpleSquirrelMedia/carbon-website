"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[15639],{28399:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(67294),o=a(88650),r=a.n(o),l=a(1597),s=a(64905),d=a(68636),c=a(75900),i=a.n(c);var m=e=>{let{title:t,theme:a,tabs:o=[]}=e;return n.createElement("div",{className:i()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:d}=a||o,c=`${r}/edit/${d}${s}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(56328),b=a(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),s=t===o,d=new RegExp(`${o}/?(#.*)?$`),c=a.replace(d,t);return n.createElement("li",{key:e,className:i()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var h=g,y=a(17680),f=a(75387),v=a(50041);var k=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var T=e=>{let{pageContext:t,children:a,location:o,Title:c}=e;const{frontmatter:i={},relativePagePath:b,titleType:g}=t,{tabs:v,title:T,theme:x,description:E,keywords:C,date:w}=i,{interiorTheme:P}=(0,f.Z)(),{site:{pathPrefix:R}}=(0,l.useStaticQuery)("2456312558"),N=R?o.pathname.replace(R,""):o.pathname,D=v?N.split("/").filter(Boolean).slice(-1)[0]||r()(v[0],{lower:!0}):"",G=x||P;return n.createElement(d.Z,{tabs:v,homepage:!1,theme:G,pageTitle:T,pageDescription:E,pageKeywords:C,titleType:g},n.createElement(m,{title:c?n.createElement(c,null):T,label:"label",tabs:v,theme:G}),v&&n.createElement(h,{title:T,slug:N,tabs:v,currentTab:D}),n.createElement(y.Z,{padded:!0},a,n.createElement(u,{relativePagePath:b}),n.createElement(k,{date:w})),n.createElement(p.Z,{pageContext:t,location:o,slug:N,tabs:v,currentTab:D}),n.createElement(s.Z,null))}},40457:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return f}});var n=a(45987),o=(a(67294),a(64983)),r=a(28399);const l=["components"],s={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=d("PageDescription"),i=d("Row"),m=d("Column"),u=d("ResourceCard"),p=d("MdxIcon"),b=d("ComponentDemo"),g=d("ComponentVariant"),h={_frontmatter:s},y=r.Z;function f(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,o.kt)(y,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the radio button component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(i,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-radiobutton--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-radio--basic",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvradiobutton--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"vue",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-radio-button--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(b,{components:[{id:"radio-button",label:"Radio button"}],mdxType:"ComponentDemo"},(0,o.kt)(g,{id:"radio-button",knobs:{RadioButtonGroup:["orientation","labelPosition"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-radiobutton--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-radio--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvradiobutton--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=radio-button","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-radio-button--default"},mdxType:"ComponentVariant"},'\n  <FormGroup\n  legendText="Radio button heading"\n>\n  <RadioButtonGroup\n    defaultSelected="default-selected"\n    legend="Group Legend"\n    name="radio-button-group"\n    valueSelected="default-selected"\n  >\n    <RadioButton\n      id="radio-1"\n      labelText="Radio button label"\n      value="standard"\n    />\n    <RadioButton\n      id="radio-2"\n      labelText="Radio button label"\n      value="default-selected"\n    />\n    <RadioButton\n      id="radio-3"\n      labelText="Radio button label"\n      value="disabled"\n    />\n  </RadioButtonGroup>\n</FormGroup>\n  ')))}f.isMDXComponent=!0}}]);