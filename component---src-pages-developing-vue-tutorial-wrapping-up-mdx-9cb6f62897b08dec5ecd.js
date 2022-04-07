"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[31492],{28399:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(67294),r=a(88650),o=a.n(r),l=a(1597),i=a(64905),s=a(68636),c=a(75900),m=a.n(c);var p=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:i,branch:s}=a||r,c=`${o}/edit/${s}${i}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),i=t===r,s=new RegExp(`${r}/?(#.*)?$`),c=a.replace(s,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var b=h,f=a(17680),k=a(75387),y=a(50041);var v=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var N=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:m={},relativePagePath:g,titleType:h}=t,{tabs:y,title:N,theme:w,description:A,keywords:E,date:B}=m,{interiorTheme:I}=(0,k.Z)(),{site:{pathPrefix:T}}=(0,l.useStaticQuery)("2456312558"),C=T?r.pathname.replace(T,""):r.pathname,P=y?C.split("/").filter(Boolean).slice(-1)[0]||o()(y[0],{lower:!0}):"",x=w||I;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:x,pageTitle:N,pageDescription:A,pageKeywords:E,titleType:h},n.createElement(p,{title:c?n.createElement(c,null):N,label:"label",tabs:y,theme:x}),y&&n.createElement(b,{title:N,slug:C,tabs:y,currentTab:P}),n.createElement(f.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(v,{date:B})),n.createElement(u.Z,{pageContext:t,location:r,slug:C,tabs:y,currentTab:P}),n.createElement(i.Z,null))}},38042:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return k}});var n=a(45987),r=(a(67294),a(64983)),o=a(28399);const l=["components"],i={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=s("PageDescription"),m=s("AnchorLinks"),p=s("AnchorLink"),d=s("Row"),u=s("Column"),g=s("Caption"),h=s("InlineNotification"),b={_frontmatter:i},f=o.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,r.kt)(f,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Thanks for completing our tutorial and helping us improve it along the way. If\nyou want to show the world your new skills, you can apply for an IBM Digital\nBadge.")),(0,r.kt)(m,{mdxType:"AnchorLinks"},(0,r.kt)(p,{mdxType:"AnchorLink"},"Application form"),(0,r.kt)(p,{mdxType:"AnchorLink"},"Badge information")),(0,r.kt)("h2",null,"Application form"),(0,r.kt)("p",null,"Once you complete all five steps of the tutorial, you can apply for an\n",(0,r.kt)("a",{parentName:"p",href:"https://badges.carbondesignsystem.com"},"IBM Digital Badge"),". These badges are\navailable to anybody who completes the tutorial, not just IBM employees."),(0,r.kt)(d,{mdxType:"Row"},(0,r.kt)(u,{colLg:8,mdxType:"Column"},(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1120px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACkElEQVQ4y42TW0iTYRjH/9sXXlXQTVeCddFFXXSAsIvKICs6QlFmYRoJ4k1Qgl5YUiqVEG520jyhpIWHOaFaZjpluumUdghxlk7mTt/mTt90B7dvn+6NLe3Krf7w8j4PvO+Phz/PH9hEX/XPEGDd0NrFUNtEIITwCSHUjHOQR/umYz00th78l/SeUVSPZ6CofwfcQSOV04M4IHakBiECEQ8lW6jFhKUNjsAsxDMlyYFyUyNQ8gfiDMzHb0/IWLTM0lUi3f3tftaFQ28BhakZv1xDMDDKxDDB+AmklAPekJUXA+k98jN+1qkKR1ZImF0hQZYxW5Z/5OMaKMlcOdzBheTTCZTHYPPrKNo3BW4tXErWZbcy3MK8PbLRR6PRD+s28ExeTbIJjwOPAJQhZchQo9HYxERFd7MqWkTUtIio6C5Oa+8lclPjUoVsX2q5bC+a1Nm8hEDhWCZfoDgJwVhm+pvJi6RedWW1VZsXbdXmRpvU16Mt2lukQXU18kJ5irxUns16PXkerybOUQmB+bXpvN2FQFoBUj9r6t16t5xM0d+4n45holuUxurVeY8iOjLbEbnwJO3I0eKdKKw7zU8InCLZWOaMlH/NDKPFUcOG1siKnyMWs4OjrS4u6IuQVZYQt8cv2fAwI6swsYd2cgOllZ3xVcFBbNHOqfOdjMPCLDHEu8QQt9fl0xmmHxYIL289cLgGLZ19iD1NqF2X9qChtxl3n98D9gOLHgfyKu5sM9nNAquDbusY6EoLhUN42lKFti/v8XHkE3LKbidfncFJKarbhXjcUAkn46TqxPV/kyJR9CHMslS3tAdyrQJGmwk3H+T+O37vJO1xwKxpDv3jA7z1LPNGNXL+Bnz4u2zTz78BLVCphTl4NaIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"carbon badge",title:"carbon badge",src:"/static/b458aa5d47f7a1fc00ab3069fe649275/a7549/carbon-badge.png",srcSet:["/static/b458aa5d47f7a1fc00ab3069fe649275/7fc1e/carbon-badge.png 288w","/static/b458aa5d47f7a1fc00ab3069fe649275/a5df1/carbon-badge.png 576w","/static/b458aa5d47f7a1fc00ab3069fe649275/a7549/carbon-badge.png 1120w"],sizes:"(max-width: 1120px) 100vw, 1120px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)(g,{mdxType:"Caption"},"IBM Digital Badge"))),(0,r.kt)("h2",null,"Badge information"),(0,r.kt)("p",null,"For more information about the IBM Carbon Design System Developer Essentials -\nVue badge, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youracclaim.com/org/ibm/badge/ibm-carbon-design-system-developer-essentials-vue"},"Acclaim"),"\nsite."),(0,r.kt)("h3",null,"Badge process"),(0,r.kt)("p",null,"This badge demonstrates knowledge about Carbon’s Vue components. To earn the\nbadge:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Complete steps 1 through 5 of the Carbon Vue tutorial:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Step 1. ",(0,r.kt)("a",{parentName:"li",href:"/developing/vue-tutorial/step-1"},"Installing Carbon")),(0,r.kt)("li",{parentName:"ul"},"Step 2. ",(0,r.kt)("a",{parentName:"li",href:"/developing/vue-tutorial/step-2"},"Building pages")),(0,r.kt)("li",{parentName:"ul"},"Step 3. ",(0,r.kt)("a",{parentName:"li",href:"/developing/vue-tutorial/step-3"},"Using APIs")),(0,r.kt)("li",{parentName:"ul"},"Step 4. ",(0,r.kt)("a",{parentName:"li",href:"/developing/vue-tutorial/step-4"},"Creating components")),(0,r.kt)("li",{parentName:"ul"},"Step 5. ",(0,r.kt)("a",{parentName:"li",href:"/developing/vue-tutorial/step-5"},"Deploying to IBM Cloud")))),(0,r.kt)("li",{parentName:"ol"},"Have approved pull requests for steps 1 through 5 in the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-tutorial-vue"},"carbon-tutorial-vue repository"),"."),(0,r.kt)("li",{parentName:"ol"},"Apply for the IBM Digital Badge by completing the\n",(0,r.kt)("a",{parentName:"li",href:"https://badges.carbondesignsystem.com/"},"form and survey"),".")),(0,r.kt)(h,{mdxType:"InlineNotification"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," To quickly find your submitted PRs, you can\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-vue/pulls?utf8=%E2%9C%93&q=author%3Ausername"},"filter by author"),"\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"author:${username}"),").")),(0,r.kt)("h3",null,"FAQ and help"),(0,r.kt)("p",null,"Badge issuer contact: ",(0,r.kt)("a",{parentName:"p",href:"mailto:matt.rosno@ibm.com"},"matt.rosno@ibm.com"),"."),(0,r.kt)("p",null,"For questions related to your Acclaim badge earner account and profile, as well\nas issues related to claiming your badge after receiving a notification, go to\n",(0,r.kt)("a",{parentName:"p",href:"http://support.youracclaim.com"},"http://support.youracclaim.com")," for account\nissues."),(0,r.kt)("h3",null,"Privacy statement"),(0,r.kt)("p",null,"NOTICE: IBM leverages the services of Credly’s Acclaim platform, a 3rd party\ndata processor authorized by IBM and located in the United States, to assist in\nthe administration of the IBM Digital Badge program. In order to issue you an\nIBM Digital Badge, your personal information (name, email address, and badge\nearned) will be shared with the Credly’s Acclaim platform. You will receive an\nemail notification from Acclaim with instructions for claiming the badge. Your\npersonal information is used to issue your badge and for program reporting and\noperational purposes. It will be handled in a manner consistent with IBM privacy\npractices. The IBM Privacy Statement can be viewed here:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/privacy/us/en/"},"https://www.ibm.com/privacy/us/en/"),". IBM\nemployees can view the IBM Internal Privacy Statement here:\n",(0,r.kt)("a",{parentName:"p",href:"https://w3.ibm.com/w3publisher/w3-privacy-notice"},"https://w3.ibm.com/w3publisher/w3-privacy-notice"),"."),(0,r.kt)("p",null,"To apply for the IBM Digital Badge, please complete the\n",(0,r.kt)("a",{parentName:"p",href:"https://badges.carbondesignsystem.com"},"form and survey"),"."))}k.isMDXComponent=!0}}]);