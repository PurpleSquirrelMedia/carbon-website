"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[94421],{28399:function(e,t,o){o.d(t,{Z:function(){return k}});var n=o(67294),a=o(88650),l=o.n(a),s=o(1597),r=o(64905),c=o(68636),m=o(75900),i=o.n(m);var d=e=>{let{title:t,theme:o,tabs:a=[]}=e;return n.createElement("div",{className:i()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":a.length,"PageHeader-module--dark-mode--WCeH8":"dark"===o})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:o}=e;const{site:{siteMetadata:{repository:a}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:r,branch:c}=o||a,m=`${l}/edit/${c}${r}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=o(56328),b=o(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:o}=this.props,a=o.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===a,c=new RegExp(`${a}/?(#.*)?$`),m=o.replace(c,t);return n.createElement("li",{key:e,className:i()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var g=h,y=o(17680),x=o(75387),f=o(50041);var w=e=>{let{date:t}=e;const o=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",o.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:o,location:a,Title:m}=e;const{frontmatter:i={},relativePagePath:b,titleType:h}=t,{tabs:f,title:k,theme:v,description:C,keywords:T,date:E}=i,{interiorTheme:P}=(0,x.Z)(),{site:{pathPrefix:M}}=(0,s.useStaticQuery)("2456312558"),N=M?a.pathname.replace(M,""):a.pathname,D=f?N.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"",L=v||P;return n.createElement(c.Z,{tabs:f,homepage:!1,theme:L,pageTitle:k,pageDescription:C,pageKeywords:T,titleType:h},n.createElement(d,{title:m?n.createElement(m,null):k,label:"label",tabs:f,theme:L}),f&&n.createElement(g,{title:k,slug:N,tabs:f,currentTab:D}),n.createElement(y.Z,{padded:!0},o,n.createElement(p,{relativePagePath:b}),n.createElement(w,{date:E})),n.createElement(u.Z,{pageContext:t,location:a,slug:N,tabs:f,currentTab:D}),n.createElement(r.Z,null))}},47591:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return c},default:function(){return f}});var n=o(45987),a=(o(67294),o(64983)),l=o(28399),s=o(73281);const r=["components"],c={},m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},i=m("PageDescription"),d=m("Row"),p=m("Column"),u=m("ResourceCard"),b=m("MdxIcon"),h=m("ComponentDemo"),g=m("ComponentVariant"),y={_frontmatter:c},x=l.Z;function f(e){let{components:t}=e,o=(0,n.Z)(e,r);return(0,a.kt)(x,Object.assign({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i,{mdxType:"PageDescription"},(0,a.kt)("p",null,"Preview the dropdown component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,a.kt)("h2",null,"Documentation"),(0,a.kt)(d,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-dropdown--default",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"react",mdxType:"MdxIcon"}))),(0,a.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"angular",mdxType:"MdxIcon"}))),(0,a.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvdropdown--default",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"vue",mdxType:"MdxIcon"}))),(0,a.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-dropdown--default",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,a.kt)("h2",null,"Live demo"),(0,a.kt)(h,{components:[{id:"default-dropdown",label:"Default"},{id:"combo-box",label:"Combo box"},{id:"multiselect",label:"Multiselect"},{id:"filter-multiselect",label:"Filterable multiselect"}],scope:{items:s.Z},mdxType:"ComponentDemo"},(0,a.kt)(g,{id:"default-dropdown",knobs:{Dropdown:["light","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-dropdown--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdropdown--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=dropdown","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-dropdown--default"},mdxType:"ComponentVariant"},'\n    <Dropdown\n      ariaLabel="Dropdown"\n      id="carbon-dropdown-example"\n      items={items}\n      label="Dropdown menu options"\n      titleText="Dropdown title"\n    />\n  '),(0,a.kt)(g,{id:"combo-box",knobs:{ComboBox:["light","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-combobox--combobox",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcombobox--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=dropdown","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-combo-box--default"},mdxType:"ComponentVariant"},'\n    <ComboBox\n      ariaLabel="ComboBox"\n      id="carbon-combobox-example"\n      items={items}\n      label="Combo box menu options"\n      titleText="Combo box title"\n    />\n  '),(0,a.kt)(g,{id:"multiselect",knobs:{MultiSelect:["light","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-multiselect--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvmultiselect--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=dropdown","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-multi-select--default"},mdxType:"ComponentVariant"},'\n    <MultiSelect\n      ariaLabel="MultiSelect"\n      id="carbon-multiselect-example"\n      items={items}\n      label="Multiselect menu options"\n      titleText="Multiselect title"\n    />\n  '),(0,a.kt)(g,{id:"filter-multiselect",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-multiselect--filterable",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvmultiselect--user-filter-and-or-highlight",Vanilla:"https://the-carbon-components.netlify.com/?nav=dropdown","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-multi-select--default"},mdxType:"ComponentVariant"},'\n    <MultiSelect.Filterable\n      ariaLabel="Filterable MultiSelect"\n      id="filterable-multiselect-example"\n      items={items}\n      label="Filterable multiselect options"\n      titleText="Filterable multiselect title"\n    />\n ')),(0,a.kt)("h2",null,"Sample data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const items = [\n  {\n    id: 'option-1',\n    label: 'Option 1',\n  },\n  {\n    id: 'option-2',\n    label: 'Option 2',\n  },\n  {\n    id: 'option-3',\n    label: 'Option 3',\n  },\n  {\n    id: 'option-4',\n    label: 'Option 4',\n  },\n];\n")))}f.isMDXComponent=!0}}]);