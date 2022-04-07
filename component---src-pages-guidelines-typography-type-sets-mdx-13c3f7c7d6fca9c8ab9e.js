"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[62883],{28399:function(e,t,a){a.d(t,{Z:function(){return x}});var s=a(67294),n=a(88650),i=a.n(n),r=a(1597),l=a(64905),o=a(68636),d=a(75900),p=a.n(d);var c=e=>{let{title:t,theme:a,tabs:n=[]}=e;return s.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12"},s.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:o}=a||n,d=`${i}/edit/${o}${l}/src/pages${t}`;return i?s.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},s.createElement("div",{className:"cds--col"},s.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},m=a(56328),h=a(51721);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===n,o=new RegExp(`${n}/?(#.*)?$`),d=a.replace(o,t);return s.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},s.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return s.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},s.createElement("nav",{"aria-label":e},s.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(s.Component);var f=y,g=a(17680),k=a(75387),v=a(50041);var b=e=>{let{date:t}=e;const a=new Date(t);return t?s.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},s.createElement(v.sg,null,s.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:a,location:n,Title:d}=e;const{frontmatter:p={},relativePagePath:h,titleType:y}=t,{tabs:v,title:x,theme:w,description:T,keywords:N,date:E}=p,{interiorTheme:C}=(0,k.Z)(),{site:{pathPrefix:P}}=(0,r.useStaticQuery)("2456312558"),S=P?n.pathname.replace(P,""):n.pathname,L=v?S.split("/").filter(Boolean).slice(-1)[0]||i()(v[0],{lower:!0}):"",D=w||C;return s.createElement(o.Z,{tabs:v,homepage:!1,theme:D,pageTitle:x,pageDescription:T,pageKeywords:N,titleType:y},s.createElement(c,{title:d?s.createElement(d,null):x,label:"label",tabs:v,theme:D}),v&&s.createElement(f,{title:x,slug:S,tabs:v,currentTab:L}),s.createElement(g.Z,{padded:!0},a,s.createElement(u,{relativePagePath:h}),s.createElement(b,{date:E})),s.createElement(m.Z,{pageContext:t,location:n,slug:S,tabs:v,currentTab:L}),s.createElement(l.Z,null))}},62539:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return y}});var s=a(45987),n=(a(67294),a(64983)),i=a(28399),r=a(42758);const l=["components"],o={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=d("PageDescription"),c=d("AnchorLinks"),u=d("AnchorLink"),m={_frontmatter:o},h=i.Z;function y(e){let{components:t}=e,a=(0,s.Z)(e,l);return(0,n.kt)(h,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(p,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Carbon uses a clear naming approach and type tokens to manage typography across\ncomplex and layered layouts and patterns, and these tokens sit within two type\nsets: expressive and productive.")),(0,n.kt)(c,{mdxType:"AnchorLinks"},(0,n.kt)(u,{mdxType:"AnchorLink"},"Overview"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Utility styles"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Body styles"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Fixed heading styles"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Fluid heading styles"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Fluid display styles"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Questions")),(0,n.kt)("h2",null,"Overview"),(0,n.kt)("p",null,"Carbon uses type tokens to manage typography, and these tokens sit within two\ntype sets. The productive and expressive type sets support designers creating\nfor a full range of user needs and activities across product and web pages. To\nunderstand when to use styles from each set, see\n",(0,n.kt)("a",{parentName:"p",href:"/guidelines/typography/styling-strategies"},"Styling strategies"),"."),(0,n.kt)("h4",null,"Base type sizes"),(0,n.kt)("p",null,"The productive type set uses a base type size of 14px, while the expressive type\nset uses a base type size of 16px."),(0,n.kt)("h4",null,"Style naming conventions"),(0,n.kt)("p",null,"Within ",(0,n.kt)("strong",{parentName:"p"},"Body styles")," and ",(0,n.kt)("strong",{parentName:"p"},"Supporting styles"),", the same set of styles are\noffered, and an easy way to spot which type set they belong to is to look at the\nsuffix. Productive styles are named with a suffix of ",(0,n.kt)("inlineCode",{parentName:"p"},"-01")," and expressive style\nnames have a suffix of ",(0,n.kt)("inlineCode",{parentName:"p"},"-02"),"."),(0,n.kt)("h4",null,"Two heading sets"),(0,n.kt)("p",null,"There are two heading sets, one for productive and one for expressive. The major\ndifference between them is in how they are implemented in code because of the\nnature of the pages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The productive type set uses ",(0,n.kt)("em",{parentName:"p"},"fixed")," headings. Product pages have a higher\ndensity of information housed inside containers for space efficiency, and in\nthese situations fixed type styles are a must.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The expressive type set has two fixed headings, for use where smaller headings\nare needed. The remaining headings are ",(0,n.kt)("em",{parentName:"p"},"fluid"),". Web pages need to be able to\nflex and work at different breakpoints, and the fluid heading styles change\nsize at different breakpoints, and can extrapolate/stretch in between sizes\nfor smooth transitions."))),(0,n.kt)("h2",null,"Utility styles"),(0,n.kt)("p",null,"The utility styles are for use with productive and expressive moments and\ninclude styles for code snippets, labels for captions and helper text, as well\nas legal copy. Productive styles have a suffix of ",(0,n.kt)("inlineCode",{parentName:"p"},"-01")," and expressive styles\nhave a suffix of ",(0,n.kt)("inlineCode",{parentName:"p"},"-02"),"."),(0,n.kt)(r.Z,{typesets:"smallStyle",mdxType:"TypesetStyle"}),(0,n.kt)("h2",null,"Body styles"),(0,n.kt)("p",null,"There are two body styles for productive and expressive moments. Productive\nstyles have a suffix of ",(0,n.kt)("inlineCode",{parentName:"p"},"-01")," and expressive styles have a suffix of ",(0,n.kt)("inlineCode",{parentName:"p"},"-02"),"."),(0,n.kt)(r.Z,{typesets:"body",mdxType:"TypesetStyle"}),(0,n.kt)("h2",null,"Fixed heading styles"),(0,n.kt)("p",null,"The fixed heading styles are used for product pages where multiple containers\nare used and space efficiency is key. Fixed means they are not responsive. The\ntype size remains constant regardless of break point."),(0,n.kt)("p",null,"Creators of web pages also use the fixed headings ",(0,n.kt)("inlineCode",{parentName:"p"},"-01")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"-02")," where smaller\nheadings are needed."),(0,n.kt)(r.Z,{typesets:"fixedHeadings",mdxType:"TypesetStyle"}),(0,n.kt)("h2",null,"Fluid heading styles"),(0,n.kt)("p",null,"The fluid heading styles are primarily used in web pages, and are therefore part\nof the expressive set of type styles. These headings are responsive and the type\nstyles change size at different breakpoints."),(0,n.kt)("p",null,"Do not use these styles inside a container. They may be used in product pages\nwhere text sits outside of a container, and a blend of expressive and productive\ntype styles is desired for hierarchy and distinction. For more information, see\n",(0,n.kt)("a",{parentName:"p",href:"/guidelines/typography/styling-strategies"},"Styling strategies"),"."),(0,n.kt)(r.Z,{typesets:"fluidHeadings",breakpointControls:!0,mdxType:"TypesetStyle"}),(0,n.kt)("h2",null,"Fluid display styles"),(0,n.kt)("p",null,"The callout and display styles are part of the expressive set and being fluid,\nthey will adjust at different breakpoints. Do not use these styles inside a\ncontainer. For guidance about using display styles, see\n",(0,n.kt)("a",{parentName:"p",href:"/guidelines/typography/styling-strategies#expressive-use-cases"},"Styling strategies"),"."),(0,n.kt)(r.Z,{typesets:"fluidCallouts,fluidDisplay",breakpointControls:!0,mdxType:"TypesetStyle"}),(0,n.kt)("h2",null,"Questions?"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"For IBMers only:")," If you have any questions about using either of these\nexperiences, reach out to the teams on Slack or sign up to share your work in a\nreview."),(0,n.kt)("h4",null,"Carbon Design System"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Slack channel:\n",(0,n.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/messages/C0M053VPT/"},"#carbon-design-system")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/whats-happening/meetups/"},"Meetups")," with\nCarbon Design System")),(0,n.kt)("h4",null,"Carbon for IBM Dotcom"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Slack channel:\n",(0,n.kt)("a",{parentName:"li",href:"https://cognitive-app.slack.com/archives/C2PLX8GQ6"},"#carbon-for-ibm-dotcom")),(0,n.kt)("li",{parentName:"ul"},"Office hours with Carbon for IBM.com. See our\n",(0,n.kt)("a",{parentName:"li",href:"https://cognitive-app.slack.com/archives/C2PLX8GQ6"},"Slack channel")," for\ndetails.")))}y.isMDXComponent=!0}}]);