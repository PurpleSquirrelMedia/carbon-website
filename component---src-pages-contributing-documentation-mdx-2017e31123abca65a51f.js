"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[48072],{28399:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(67294),o=n(88650),r=n.n(o),i=n(1597),s=n(64905),l=n(68636),c=n(75900),d=n.n(c);var u=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:l}=n||o,c=`${r}/edit/${l}${s}/src/pages${t}`;return r?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=n(56328),h=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),s=t===o,l=new RegExp(`${o}/?(#.*)?$`),c=n.replace(l,t);return a.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},a.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component);var k=g,b=n(17680),w=n(75387),f=n(50041);var y=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:d={},relativePagePath:h,titleType:g}=t,{tabs:f,title:E,theme:v,description:N,keywords:P,date:T}=d,{interiorTheme:C}=(0,w.Z)(),{site:{pathPrefix:x}}=(0,i.useStaticQuery)("2456312558"),L=x?o.pathname.replace(x,""):o.pathname,D=f?L.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",M=v||C;return a.createElement(l.Z,{tabs:f,homepage:!1,theme:M,pageTitle:E,pageDescription:N,pageKeywords:P,titleType:g},a.createElement(u,{title:c?a.createElement(c,null):E,label:"label",tabs:f,theme:M}),f&&a.createElement(k,{title:E,slug:L,tabs:f,currentTab:D}),a.createElement(b.Z,{padded:!0},n,a.createElement(m,{relativePagePath:h}),a.createElement(y,{date:T})),a.createElement(p.Z,{pageContext:t,location:o,slug:L,tabs:f,currentTab:D}),a.createElement(s.Z,null))}},87621:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return h}});var a=n(45987),o=(n(67294),n(64983)),r=n(28399);const i=["components"],s={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=l("PageDescription"),d=l("AnchorLinks"),u=l("AnchorLink"),m={_frontmatter:s},p=r.Z;function h(e){let{components:t}=e,n=(0,a.Z)(e,i);return(0,o.kt)(p,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"You can contribute to the content on the Carbon site in a few different ways.\nChoose the way that works best, depending on how extensive your contribution is.\nAnd be sure to read our content writing guidelines before you begin!")),(0,o.kt)(d,{mdxType:"AnchorLinks"},(0,o.kt)(u,{mdxType:"AnchorLink"},"Editing pages"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Making regular content updates"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Content and style guidelines")),(0,o.kt)("h2",null,"Editing pages"),(0,o.kt)("p",null,"The easiest way to edit a page is with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit this page on Github")," link that\nappears at the bottom of every page on the site. The link opens the specific\nGithub page where you can edit the content and then propose the change with a\npull request."),(0,o.kt)("p",null,"Alternatively, if you have a specific fix or contribution, you can fork the repo\nand generate a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/wiki/Creating-a-PR-through-github.com-UI"},"pull request"),"."),(0,o.kt)("h2",null,"Making regular content updates"),(0,o.kt)("p",null,"If you are planning regular or more comprehensive content updates, you’ll want\nto fork the repo and install some of the tools we use to build the website. This\nwill create an easier workflow for you long term."),(0,o.kt)("p",null,"Instructions for how to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/wiki/Updating-content-on-carbondesignsystem.com"},"install tools"),"\nand fork the repo."),(0,o.kt)("p",null,"Instructions for how to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/wiki/Update-content-with-VSCode"},"update content with VSCode"),"."),(0,o.kt)("h2",null,"Content and style guidelines"),(0,o.kt)("p",null,"Before you get started, take a moment to review our content guidelines.\nFollowing these will help us ensure consistency of experience across the site."),(0,o.kt)("h3",null,"Use Markdown"),(0,o.kt)("p",null,"The website is written in\n",(0,o.kt)("a",{parentName:"p",href:"https://gatsby-theme-carbon.now.sh/components/markdown/"},"Markdown"),", which makes\nit easy for anyone to contribute content in a systematic way. If you don’t\nalready have a Markdown editor installed, there are plenty of free editors\navailable online."),(0,o.kt)("p",null,"Check out Carbon’s handy markdown\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/wiki/Markdown-cheatsheet"},"styling cheatsheet"),"\nfor how to style content."),(0,o.kt)("h3",null,"Guidelines for writing content"),(0,o.kt)("p",null,"Please keep these things in mind when writing content for Carbon."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aim for a friendly and encouraging tone."),(0,o.kt)("li",{parentName:"ul"},"Speak directly to the user. You can use the second person pronoun (“you”)."),(0,o.kt)("li",{parentName:"ul"},"Keep sentences and paragraphs short and focused."),(0,o.kt)("li",{parentName:"ul"},"Be clear and concise by removing unnecessary words. The more concise the text,\nthe easier it is for all users to understand."),(0,o.kt)("li",{parentName:"ul"},"Use sentence case for everything, including component names, e.g. Content\nswitcher and Data table.")),(0,o.kt)("p",null,"To learn about writing content for component pages, see our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/wiki/Production-guidelines#creating-content-for-component-pages"},"production guidelines"),"."))}h.isMDXComponent=!0}}]);