"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[27558],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(88650),o=a.n(r),i=a(1597),l=a(64905),s=a(68636),c=a(75900),m=a.n(c);var p=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:l,branch:s}=a||r,c=`${o}/edit/${s}${l}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),l=t===r,s=new RegExp(`${r}/?(#.*)?$`),c=a.replace(s,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var b=h,y=a(17680),f=a(75387),k=a(50041);var w=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:m={},relativePagePath:g,titleType:h}=t,{tabs:k,title:v,theme:N,description:A,keywords:B,date:E}=m,{interiorTheme:I}=(0,f.Z)(),{site:{pathPrefix:P}}=(0,i.useStaticQuery)("2456312558"),C=P?r.pathname.replace(P,""):r.pathname,T=k?C.split("/").filter(Boolean).slice(-1)[0]||o()(k[0],{lower:!0}):"",M=N||I;return n.createElement(s.Z,{tabs:k,homepage:!1,theme:M,pageTitle:v,pageDescription:A,pageKeywords:B,titleType:h},n.createElement(p,{title:c?n.createElement(c,null):v,label:"label",tabs:k,theme:M}),k&&n.createElement(b,{title:v,slug:C,tabs:k,currentTab:T}),n.createElement(y.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(w,{date:E})),n.createElement(u.Z,{pageContext:t,location:r,slug:C,tabs:k,currentTab:T}),n.createElement(l.Z,null))}},81711:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return f}});var n=a(45987),r=(a(67294),a(64983)),o=a(28399);const i=["components"],l={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=s("PageDescription"),m=s("AnchorLinks"),p=s("AnchorLink"),d=s("Row"),u=s("Column"),g=s("Caption"),h=s("InlineNotification"),b={_frontmatter:l},y=o.Z;function f(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,r.kt)(y,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Thanks for completing our tutorial and helping us improve it along the way. If\nyou want to show the world your new skills, you can apply for an IBM Digital\nBadge.")),(0,r.kt)(m,{mdxType:"AnchorLinks"},(0,r.kt)(p,{mdxType:"AnchorLink"},"Application form"),(0,r.kt)(p,{mdxType:"AnchorLink"},"Badge information")),(0,r.kt)("h2",null,"Application form"),(0,r.kt)("p",null,"Once you complete all five steps of the tutorial, you can apply for an\n",(0,r.kt)("a",{parentName:"p",href:"https://badges.carbondesignsystem.com"},"IBM Digital Badge"),". These badges are\navailable to anybody who completes the tutorial, not just IBM employees."),(0,r.kt)(d,{mdxType:"Row"},(0,r.kt)(u,{colLg:8,mdxType:"Column"},(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVQoz5WSwU4CMRCG91W8+BwmxsTwLiSevRrQByAaHkI8cAS5GDUY9ySsmDQrBjy422XbLu12u9upLkZilAr20MPM/820+X/HWA983WBTOHbMaCh+VDaBS0xqKoFITb+NWAeD0SKPkzzgGSWMzjOa5KHIYzB6Pay0LCA3xiSMP43GjHFjTKGV0uIvGKCcPYzbLb/amdS70+Pe60lnWutO6i2/+hBdfL7LAi8abf+w5m43vf3TwW5jsNP0KmfDvaP7rXN0sNCAbXPZuEE97+1qPHMR7vvRHcL9l9gdhde36HKpsf45zRRhIuXFDLNH7zmhIhVFWZHZJlZBqkRIQ0xwwhkmOKCBUHyl1Y7NQy4FptE85fYIroLh1xL4V8KWANiD/QG/A4LO7NgnsFpGAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"carbon badge",title:"carbon badge",src:"/static/df7d368937a22295b5c5039e9882a683/3cbba/carbon-badge.png",srcSet:["/static/df7d368937a22295b5c5039e9882a683/7fc1e/carbon-badge.png 288w","/static/df7d368937a22295b5c5039e9882a683/a5df1/carbon-badge.png 576w","/static/df7d368937a22295b5c5039e9882a683/3cbba/carbon-badge.png 1152w","/static/df7d368937a22295b5c5039e9882a683/392b1/carbon-badge.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)(g,{mdxType:"Caption"},"IBM Digital Badge"))),(0,r.kt)("h2",null,"Badge information"),(0,r.kt)("p",null,"For more information about the IBM Carbon Design System Developer Essentials -\nReact badge, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youracclaim.com/org/ibm/badge/ibm-carbon-design-system-developer-essentials-react"},"Acclaim"),"\nsite."),(0,r.kt)("h3",null,"Badge process"),(0,r.kt)("p",null,"This badge demonstrates knowledge about Carbon’s React components. To earn the\nbadge:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Complete steps 1 through 5 of the Carbon React tutorial:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Step 1. ",(0,r.kt)("a",{parentName:"li",href:"/developing/react-tutorial/step-1"},"Installing Carbon")),(0,r.kt)("li",{parentName:"ul"},"Step 2. ",(0,r.kt)("a",{parentName:"li",href:"/developing/react-tutorial/step-2"},"Building pages")),(0,r.kt)("li",{parentName:"ul"},"Step 3. ",(0,r.kt)("a",{parentName:"li",href:"/developing/react-tutorial/step-3"},"Using APIs")),(0,r.kt)("li",{parentName:"ul"},"Step 4. ",(0,r.kt)("a",{parentName:"li",href:"/developing/react-tutorial/step-4"},"Creating components")),(0,r.kt)("li",{parentName:"ul"},"Step 5. ",(0,r.kt)("a",{parentName:"li",href:"/developing/react-tutorial/step-5"},"Deploying to IBM Cloud")))),(0,r.kt)("li",{parentName:"ol"},"Have approved pull requests for steps 1 through 5 in the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-tutorial"},"carbon-tutorial repository"),"."),(0,r.kt)("li",{parentName:"ol"},"Apply for the IBM Digital Badge by completing the\n",(0,r.kt)("a",{parentName:"li",href:"https://badges.carbondesignsystem.com/"},"form and survey"),".")),(0,r.kt)(h,{mdxType:"InlineNotification"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," To quickly find your submitted PRs, you can\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial/pulls?utf8=%E2%9C%93&q=author%3Ausername"},"filter by author"),"\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"author:${username}"),").")),(0,r.kt)("h3",null,"FAQ and help"),(0,r.kt)("p",null,"Badge issuer contact: ",(0,r.kt)("a",{parentName:"p",href:"mailto:matt.rosno@ibm.com"},"matt.rosno@ibm.com"),"."),(0,r.kt)("p",null,"For questions related to your Acclaim badge earner account and profile, as well\nas issues related to claiming your badge after receiving a notification, go to\n",(0,r.kt)("a",{parentName:"p",href:"http://support.youracclaim.com"},"http://support.youracclaim.com")," for account\nissues."),(0,r.kt)("h3",null,"Privacy statement"),(0,r.kt)("p",null,"NOTICE: IBM leverages the services of Credly’s Acclaim platform, a 3rd party\ndata processor authorized by IBM and located in the United States, to assist in\nthe administration of the IBM Digital Badge program. In order to issue you an\nIBM Digital Badge, your personal information (name, email address, and badge\nearned) will be shared with the Credly’s Acclaim platform. You will receive an\nemail notification from Acclaim with instructions for claiming the badge. Your\npersonal information is used to issue your badge and for program reporting and\noperational purposes. It will be handled in a manner consistent with IBM privacy\npractices. The IBM Privacy Statement can be viewed here:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/privacy/us/en/"},"https://www.ibm.com/privacy/us/en/"),". IBM\nemployees can view the IBM Internal Privacy Statement here:\n",(0,r.kt)("a",{parentName:"p",href:"https://w3.ibm.com/w3publisher/w3-privacy-notice"},"https://w3.ibm.com/w3publisher/w3-privacy-notice"),"."),(0,r.kt)("p",null,"To apply for the IBM Digital Badge, please complete the\n",(0,r.kt)("a",{parentName:"p",href:"https://badges.carbondesignsystem.com"},"form and survey"),"."))}f.isMDXComponent=!0}}]);