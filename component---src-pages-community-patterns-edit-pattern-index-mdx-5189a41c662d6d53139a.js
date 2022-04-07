"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[85599],{28399:function(a,e,t){t.d(e,{Z:function(){return k}});var i=t(67294),n=t(88650),s=t.n(n),c=t(1597),l=t(64905),d=t(68636),o=t(75900),p=t.n(o);var g=a=>{let{title:e,theme:t,tabs:n=[]}=a;return i.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var m=a=>{let{relativePagePath:e,repository:t}=a;const{site:{siteMetadata:{repository:n}}}=(0,c.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:l,branch:d}=t||n,o=`${s}/edit/${d}${l}/src/pages${e}`;return s?i.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:o},"Edit this page on GitHub"))):null},r=t(56328),b=t(51721);let A=function(a){function e(){return a.apply(this,arguments)||this}return(0,b.Z)(e,a),e.prototype.render=function(){const{title:a,tabs:e,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],l=e.map((a=>{const e=s()(a,{lower:!0,strict:!0}),l=e===n,d=new RegExp(`${n}/?(#.*)?$`),o=t.replace(d,e);return i.createElement("li",{key:a,className:p()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},i.createElement(c.Link,{className:"PageTabs-module--link--Kz-7R",to:`${o}`},a))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":a},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},e}(i.Component);var f=A,u=t(17680),h=t(75387),w=t(50041);var y=a=>{let{date:e}=a;const t=new Date(e);return e?i.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(w.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=a=>{let{pageContext:e,children:t,location:n,Title:o}=a;const{frontmatter:p={},relativePagePath:b,titleType:A}=e,{tabs:w,title:k,theme:x,description:E,keywords:v,date:B}=p,{interiorTheme:C}=(0,h.Z)(),{site:{pathPrefix:S}}=(0,c.useStaticQuery)("2456312558"),N=S?n.pathname.replace(S,""):n.pathname,z=w?N.split("/").filter(Boolean).slice(-1)[0]||s()(w[0],{lower:!0}):"",Q=x||C;return i.createElement(d.Z,{tabs:w,homepage:!1,theme:Q,pageTitle:k,pageDescription:E,pageKeywords:v,titleType:A},i.createElement(g,{title:o?i.createElement(o,null):k,label:"label",tabs:w,theme:Q}),w&&i.createElement(f,{title:k,slug:N,tabs:w,currentTab:z}),i.createElement(u.Z,{padded:!0},t,i.createElement(m,{relativePagePath:b}),i.createElement(y,{date:B})),i.createElement(r.Z,{pageContext:e,location:n,slug:N,tabs:w,currentTab:z}),i.createElement(l.Z,null))}},76826:function(a,e,t){t.r(e),t.d(e,{_frontmatter:function(){return l},default:function(){return u}});var i=t(45987),n=(t(67294),t(64983)),s=t(28399);const c=["components"],l={},d=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},o=d("PageDescription"),p=d("AnchorLinks"),g=d("AnchorLink"),m=d("Caption"),r=d("Row"),b=d("Column"),A={_frontmatter:l},f=s.Z;function u(a){let{components:e}=a,t=(0,i.Z)(a,c);return(0,n.kt)(f,Object.assign({},A,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h4",null,"Maintainers:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/vikkipaterson"},"Vikki Paterson"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chloepoulterdesign"},"Chloe Poulter")),(0,n.kt)(o,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Editing is making changes to a resource that already exists in the system.\nUpdating and editing should use the same behavior as when the resource is\ncreated. This should only vary in situations where the number of editable fields\nis significantly smaller or larger than during creation, or the context of\ncurrent settings is required.")),(0,n.kt)(p,{mdxType:"AnchorLinks"},(0,n.kt)(g,{mdxType:"AnchorLink"},"Low-impact edit"),(0,n.kt)(g,{mdxType:"AnchorLink"},"High-impact edit"),(0,n.kt)(g,{mdxType:"AnchorLink"},"Optional extras")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB0ElEQVQoz62SzY/SUBTF5++bvWyI0LgmcYFG+aYtpXy0hY0mxI2J0g38DSTEuNDRBQEhbtzwtSjERYd2MgSOOTdWJMzChU1O7st9p793733v6ng84n99ZF1xsdvtYBgG6vU6VFVFsVj8o1KpdKG/9xj5z3K5FKgAPc9DLBZDPp9HJpORSOVyOWSzWRHzkZgvFAoirgmdz+cn4GazgaIoqFQq0HVdIoG9Xg+TyQTj8Riz2QzT6VRip9MRWOSvVqtYrVbnwGQyiUajAdM0pfVyuYzhcCim/X6Pw+Eg4pxc15U26Yv8Fy2zQsdxBGpZlpw+GAxkvr7vIwhDBOEddkGIbteVquijv9lsngOjCnkSjbVaTQbOCvf7e/j+LYLbn7jzPRzvfbjdd1IhfZH/AphIJGRT0zSpjoPu9/sYjUb4+uUzPn3z8PE7cPMDeP3mPcolztAQP1/IgxVyHoRRhKfTaSSTCp4oj/Ho6Vtcv7jB9bMPeF5+BdNQBRh5L2YYj8dlk5fBdijeIE+nqnoBpvYSNT0DXS3Jvqaq4qdvsVicgNvtFqlUCu12G7ZtPyjLdmDZLZFtO5LjJTK2Wi2s1+sTkE8hCIJ/UPhb5/kwDOVJEfgLlQvsKGZjBTUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Contextual image of an edit modal",title:"Contextual image of an edit modal",src:"/static/7622ab03a17a391bdd2c9cd6ec8bfa2c/3cbba/Contextual.png",srcSet:["/static/7622ab03a17a391bdd2c9cd6ec8bfa2c/7fc1e/Contextual.png 288w","/static/7622ab03a17a391bdd2c9cd6ec8bfa2c/a5df1/Contextual.png 576w","/static/7622ab03a17a391bdd2c9cd6ec8bfa2c/3cbba/Contextual.png 1152w","/static/7622ab03a17a391bdd2c9cd6ec8bfa2c/0b124/Contextual.png 1728w","/static/7622ab03a17a391bdd2c9cd6ec8bfa2c/4ea69/Contextual.png 2304w","/static/7622ab03a17a391bdd2c9cd6ec8bfa2c/0cbe4/Contextual.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of an edit modal in context"),(0,n.kt)("h2",null,"Low-impact edit"),(0,n.kt)("p",null,"For low-impact edits, allow editing with no warning. This approach is typically\nused when editing doesn’t have a wider impact."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAA1ElEQVQoz82T2QqEMAxF/f+fFFxxQa37fodbSKktzMPMPEzhkpiY08TWAADu+8YvFjmBwGi/FZcBbtuGtm3R9z2maXqreZ49XdflA5VSGkgNw2CsK77XdR3qukZZlqiqCvu+P4EsjqIIeZ4jSRKtLMsQx7G2aZoan5Z52jAMdR0begCXZTEjc3fpVmLSlZsX/zzPJ3BdV50Yx9GMSt+OUXasaRrdMUf3RnaBAmVMvqcbI7AoCv18HIcPZPtSIMV2TED24UneG5nHzra50ycy9/Dv/5QXZfenXM7GlbwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of an edit button in a table",title:"Example of an edit button in a table",src:"/static/231838378a246b253cf10e82938196ef/3cbba/02.png",srcSet:["/static/231838378a246b253cf10e82938196ef/7fc1e/02.png 288w","/static/231838378a246b253cf10e82938196ef/a5df1/02.png 576w","/static/231838378a246b253cf10e82938196ef/3cbba/02.png 1152w","/static/231838378a246b253cf10e82938196ef/0b124/02.png 1728w","/static/231838378a246b253cf10e82938196ef/4ea69/02.png 2304w","/static/231838378a246b253cf10e82938196ef/0cbe4/02.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of an edit button in a table"))),(0,n.kt)("h3",null,"Modal"),(0,n.kt)("p",null,"If an object was created in a modal, its editable fields can be made available\nin a modal. A modal can also be used where a small subset of fields are\neditable. If enough fields are editable to require scrolling, use a side-panel\nor full-page edit dialog instead."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAA9ElEQVQoz52TwYrCMBCGfaA9eBX2HdZD6cHn2D0sFHzVtqBumpiQtElKrfklkeBaq7T+8DMhDF8mM8wCI3LOYYrG8hbDhJgUz688Bn0KFEKAEALGGLTWMMaEGD0bWNd1gHqQtfbBs4FKqeCu69C27Z3fAjZNE4BD2NvA/1++2aLROjw2G+gbX1UVKKVhOJQcQKsDOCPou2uFbgowyk83z3OUZYmiKLAjCntmsaMGf0eL83lihTFmWYav9RppmiBJN1j97LH8BT6+T/jc9pBmBtBLSokj5xCcg3MBKntQhWBWA9cCfYtebMqwjyPLdmfn4t0NeAFZDaUAdGrlqgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a low consequence edit action in a modal",title:"Example of a low consequence edit action in a modal",src:"/static/02ccdbc4fd71f4556cb885ac8f6bc08b/3cbba/03.png",srcSet:["/static/02ccdbc4fd71f4556cb885ac8f6bc08b/7fc1e/03.png 288w","/static/02ccdbc4fd71f4556cb885ac8f6bc08b/a5df1/03.png 576w","/static/02ccdbc4fd71f4556cb885ac8f6bc08b/3cbba/03.png 1152w","/static/02ccdbc4fd71f4556cb885ac8f6bc08b/0b124/03.png 1728w","/static/02ccdbc4fd71f4556cb885ac8f6bc08b/4ea69/03.png 2304w","/static/02ccdbc4fd71f4556cb885ac8f6bc08b/0cbe4/03.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a low consequence edit action in a modal"))),(0,n.kt)("h3",null,"Side-panel"),(0,n.kt)("p",null,"If an object was created in a side panel, its editable fields can be made\navailable in a side panel. A side panel can also be used where context in the\nmain view of the screen is useful in the editing flow."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABh0lEQVQoz5VSy2rCUBT0K90I6gf4A4KKb6NRETcKLmqh0EXX7Rd07VYEpUFiaxNjBfGRmGTKXIkaH5UG5s69hDN3ztwTcF0X//0cx4Ft2z54OgEuq9UKhUIB5XIZmUwGqVTqTzSbTbTbbbRaLcGdTgeaph0FdV1HMBhEIpFAPB4XfAvJZBK9Xk/UTKdTLBYLzOdzmKZ5FJzNZohGo8jn88jlcshms8Ipz6d7Mv+PRiPRJkUIy7JEDD7BSCSCSqWCUql0gCRJF3vycDgUIoxqs9lgu92KC3wt02G9XheihCzLvr13rlarGAwGQmy5XB7gE/Qc8lGKxeJV0B2ZosyQLinc7/ehquply+FwWBQwM+Z0C8xSURQxJmyVrRNXHdIFC66BY+XxeDwWxbbtwHGBne1id55hKBQSBel0WrzmLbADXdfORt0FXJvrXtAwDMRiMTQaDdRqtbt46D7i+amLzss7pDdAfrXw+XPikHms1+u74IiQvzUNk4kK9cvAh2ZB0UyY1v5RfgFC0QMaqoE7lAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a low-impact edit action in a side panel",title:"Example of a low-impact edit action in a side panel",src:"/static/532b25ae141057a8f9b664b0ddd61b23/3cbba/LowSidepanel.png",srcSet:["/static/532b25ae141057a8f9b664b0ddd61b23/7fc1e/LowSidepanel.png 288w","/static/532b25ae141057a8f9b664b0ddd61b23/a5df1/LowSidepanel.png 576w","/static/532b25ae141057a8f9b664b0ddd61b23/3cbba/LowSidepanel.png 1152w","/static/532b25ae141057a8f9b664b0ddd61b23/0b124/LowSidepanel.png 1728w","/static/532b25ae141057a8f9b664b0ddd61b23/4ea69/LowSidepanel.png 2304w","/static/532b25ae141057a8f9b664b0ddd61b23/0cbe4/LowSidepanel.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a low impact edit action in a side panel"))),(0,n.kt)("h3",null,"Full page"),(0,n.kt)("p",null,"When an object is created in a full-page flow and the majority of fields become\neditable, a full-page edit flow should be used. This is made possible by\nincluding a configuration/properties view."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABoklEQVQoz5VT226CQBDt/z/19gQPNWpCjcTEmpj0F0zUmHhDfPCC1KACK+AFFk4za8G2NrFOcphlmT07M2e4AwDOOfr9PrrdLjqdDtrtNlqt1lVQXLPZFOsgCIgKd/Q4Ho94q9VQqVSgKApKpRJUVUW5XL6KarWKer2OzWZzJozjBMwL4DAfu90Ot5hpmuj1ekiS5EwYcY7JdIaF+QHbtuG6LjzPE2WQPxwOiKIIYRhmoKrIGo2GyJL2vmUYgzEXvu/9CL7F6MJzhhHHeDzGaKRD0zQhDpUxGAwyDIdD6Lou4nR9LNYETRthqGlZqwQhlaQorygWC5BlCZIkQZblC9B+ilwuh0I+j/yLhGJOhmVZJ0LRyyTBbn88ibLf/6tExhiWyyWWPgQuRJnNDUwmU8zncxiGgfV6nYGEchwng+syqGoZD49PuK9t8PweZH3/IoxhLBYibbp5tVoJIpot8rTn+75QPAUJKYx7QMh+qcw5VpYlCCg4HRtqdAoi3G63gpw8ZUqZ2+4WtsMuxybNID14Ks0VoHeaSfr2F+gc/b5E+AkXCHT/XKN9HAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a properties view in reading (top) and editing (bottom) views",title:"Example of a properties view in reading (top) and editing (bottom) views",src:"/static/ffa7d3e2d028ac5c0f3c52a1f43086d2/3cbba/05.png",srcSet:["/static/ffa7d3e2d028ac5c0f3c52a1f43086d2/7fc1e/05.png 288w","/static/ffa7d3e2d028ac5c0f3c52a1f43086d2/a5df1/05.png 576w","/static/ffa7d3e2d028ac5c0f3c52a1f43086d2/3cbba/05.png 1152w","/static/ffa7d3e2d028ac5c0f3c52a1f43086d2/0b124/05.png 1728w","/static/ffa7d3e2d028ac5c0f3c52a1f43086d2/4ea69/05.png 2304w","/static/ffa7d3e2d028ac5c0f3c52a1f43086d2/0cbe4/05.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a properties view in reading (top) and editing (bottom) views"))),(0,n.kt)("h2",null,"High-impact edit"),(0,n.kt)("p",null,"Warn the user of the consequences of editing. This pattern is typically used\nwhen editing has a wider impact. Inform users of the likely consequences of the\nedit to their system, and inform them that editing cannot be undone. Include a\nwarning stage."),(0,n.kt)("h3",null,"Modal"),(0,n.kt)("p",null,"A high-impact edit action of only a few fields can use a danger modal. A second\nconfirm edit modal should also be inserted before the changes are saved. If\ndesired, the confirmation modal can include a\n",(0,n.kt)("a",{parentName:"p",href:"#summary-of-changes"},"summary of changes"),"."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABl0lEQVQoz62Tu07DMBSGeTRGFthgAQkoSB1YYAHKQoXECAMDEooAlYfgFSgL4tbLQotKISEJ2GkSJ22S/uicNkUFqXTA0i8fyz6fz8We6Ha7+K9BrInUaLfbrCiKfimOYyRJwvudTofXqdIztE+DgbTRbDZhGAZarRY8zxuI1mEYsl2r1VimaeLz4wPCtuFKiZYQaIfhMNBxHHaiKIIgYAiJ7DQqIQQsy4IUAkIp6MqHB0ABiHqpfgN932fnNPVUSim+uVwuQ9M0XBQK0AoFFE/PIU/OoB9reDs8gipVhiN0XZedfwLpEhrFYhG5XA57+Tw287u43NqB3NjG6/om3lbX4F9dDwMpHaoXAQisfMWz57oD6Nhdpg4RUNd1bgxJf3+HbhgQjkTU73KcJN9znKDLinvqP79BhLZtc/dIlmnCkxK+48CXDsJ+HclplAbAer2ObDaLzNIy5lcy2F9YRGNmDvXpWTxNTsE6OOoBkwR/fQQGUq2q1Sp3slQp47lUQnj/iODuAcHNLTqNl6EIRwLH/XrjnvsCl++NTx4C4VkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a high-impact editing modal and consequent warning modal",title:"Example of a high-impact editing modal and consequent warning modal",src:"/static/42e89cac2f0c8997c0038d36c7b062ea/3cbba/HighModal.png",srcSet:["/static/42e89cac2f0c8997c0038d36c7b062ea/7fc1e/HighModal.png 288w","/static/42e89cac2f0c8997c0038d36c7b062ea/a5df1/HighModal.png 576w","/static/42e89cac2f0c8997c0038d36c7b062ea/3cbba/HighModal.png 1152w","/static/42e89cac2f0c8997c0038d36c7b062ea/0b124/HighModal.png 1728w","/static/42e89cac2f0c8997c0038d36c7b062ea/4ea69/HighModal.png 2304w","/static/42e89cac2f0c8997c0038d36c7b062ea/0cbe4/HighModal.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a high-impact editing modal and consequent warning modal"))),(0,n.kt)("h3",null,"Side-panel"),(0,n.kt)("p",null,"If an object was created in a side panel, or there are too many editable fields\nfor a modal, a slide-over panel can be used."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABlklEQVQoz52Sy2rCUBCGfUiXIq5c6NKlYrzfBS2FUqxVaTfiI/QpXAgiEfGyMFFRRJtEM+cvc9popbYFA19mOHPy5z8zxwUAQgis12ssFgtomob5fP4ns9kMk8lEMh6PZbQsi6Xg4tdms4Hf70coFEIwGEQgEPiTSqWCer2OWq2GRqOBZrMJXdfPguzM4/EgnU4jmUwim80ik8lc4KxxHI1G8mPbtuE8RHQWXC6X8Hq9SCQSiMfjiMViiEajMlcURcI1XuPaYDCAYRjY7XaS/X5/Ej859Pl8KJfLyOfzKBQKV+FasVjEcDiUAqZp4nA4SG4WLJVK6PV6WK1WpyFyfiHoHDmXyyGVSsleXoNrvKfb7crpslNVVeXkr/aQm8694sH8BotOp1M4101Gop8O+cj/OWT4p3wPpdDXhMW3ibMg6bpObrebFEWhcDhMkUjkKk5tqKpEQpBlGCQMk+jdIPt45DOTdLjdblGtVtHpdNBut//l9eUFT60W3urPWN49YH7/CEvTPh0KIfoAbkIAffsLziFE/wMp/P+q6x6kWQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a high-impact edit action in a side panel",title:"Example of a high-impact edit action in a side panel",src:"/static/85c841679479a3eb97c3b6a07a1e007f/3cbba/HighSidepanel.png",srcSet:["/static/85c841679479a3eb97c3b6a07a1e007f/7fc1e/HighSidepanel.png 288w","/static/85c841679479a3eb97c3b6a07a1e007f/a5df1/HighSidepanel.png 576w","/static/85c841679479a3eb97c3b6a07a1e007f/3cbba/HighSidepanel.png 1152w","/static/85c841679479a3eb97c3b6a07a1e007f/0b124/HighSidepanel.png 1728w","/static/85c841679479a3eb97c3b6a07a1e007f/4ea69/HighSidepanel.png 2304w","/static/85c841679479a3eb97c3b6a07a1e007f/0cbe4/HighSidepanel.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a high-impact edit action in a side panel"))),(0,n.kt)("p",null,"High-impact side panel edits should also warn the user of destructive edits with\na warning before changes are saved."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABaklEQVQoz42TTW7CQAyFOSUbJOACHAABIvyTIBBi0YpkASzaW/QCHAIBCVEhpcCGKH9+lUMHiBpoLH0aO9K8eWNPUkTk4hKEhEFE8H0/An/jSAFwbdtGp9MhRVFQr9dRrVafMhqNoKoqxuNxiKZp2G63N8HD4YB0Ok2lUgnFYhHlcvkhlUoF8/kchmFA13VYloX9fg/HcW6Cx+MR+Xyems0mGo1GSK1WA9fsWOS8cr1YLBAEAVzXvV6V64jDXC5Hsizz1a90u93YnJ2JXgox7mNEkB32+31wH5lerxfJRc2rEBSuYgWFw3a7HQs7E+t6vf5fMJvNEm/gHok+PmK1WiVzyKdz8+NotVrXfLlchpt9zwP5PgLP+yuYyWTCKUuSFE7zGeLN3UfAAyK6CJ5OJxQKBRoOh+DBDAaDp0wnE8ze3/AxneH7RcXuVYPzefewefy2bRP/MUmwdjtsTBNfpomzbuBsbBD8PuwfzPQF/sjEKKQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a warning screen in a side panel before a user saves changes",title:"Example of a warning screen in a side panel before a user saves changes",src:"/static/e10ed7e0c85b8171d24892da50b7b9a5/3cbba/08.png",srcSet:["/static/e10ed7e0c85b8171d24892da50b7b9a5/7fc1e/08.png 288w","/static/e10ed7e0c85b8171d24892da50b7b9a5/a5df1/08.png 576w","/static/e10ed7e0c85b8171d24892da50b7b9a5/3cbba/08.png 1152w","/static/e10ed7e0c85b8171d24892da50b7b9a5/0b124/08.png 1728w","/static/e10ed7e0c85b8171d24892da50b7b9a5/4ea69/08.png 2304w","/static/e10ed7e0c85b8171d24892da50b7b9a5/6c165/08.png 2626w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a warning screen in a side panel before a user saves changes"))),(0,n.kt)("h3",null,"Full page"),(0,n.kt)("p",null,"When an object was created in a full-page flow, or the volume of editable fields\nis high, use a full-page edit dialog."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABnElEQVQoz5WSaWvCQBCG/f//wnpAIa2CH5pWLYKCZ/xisfqhUQNKadRcJh453jIjux7Y0i68md3MzLOzO5sCgDAM0Ww20Wg0UKvVUK1WUalUpP1J5C+Xyzx3XZdQSNHncDig+lqD+vyCUqkEVVU5iIJFwi2Rr16vo9VqwbbtEzCKYqwtFyvLxcb38Z8xHo8ZmiTJJfDLNHmX3W6H/X6PKIo4II7jX4G6rqPT6fC1SSAter0eO7rdLtrtNlsSHYd8/X4fmqZJ9TSN/W+DAd6HQ3iedwJSRY+FIhRFQSaTQTabRT6fv1Aul7sQxRYKBeQUBfkHBcvl8giko9P5d/sQjhcw/C9jPp9jPBoBHzqgT+XVHLscRpjODOiTCWazGQzDgGmavCtpvV7DsiwpuusnVcVdOg3jXsGnUpSFyKYsFgssTZPvYrVasQhElt6Y7/vsI9FaNM1PEnhxxE9PAuM4kpVsNhuuwnEcnpMIJoAEI0t+qtS1bTiWfQmkLp/vLmACFAQBtttAxlyLcq4qjPmngIljigrPE2+JcsQ7/AYZxnOLI9U3aAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a full-page edit view",title:"Example of a full-page edit view",src:"/static/d518693eed81773092c38a82b96dcefc/3cbba/09.png",srcSet:["/static/d518693eed81773092c38a82b96dcefc/7fc1e/09.png 288w","/static/d518693eed81773092c38a82b96dcefc/a5df1/09.png 576w","/static/d518693eed81773092c38a82b96dcefc/3cbba/09.png 1152w","/static/d518693eed81773092c38a82b96dcefc/0b124/09.png 1728w","/static/d518693eed81773092c38a82b96dcefc/4ea69/09.png 2304w","/static/d518693eed81773092c38a82b96dcefc/0cbe4/09.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a full-page edit view"))),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABuklEQVQoz62TTWsaURSG8yMLSWkDQxPpPjSV6HzemavOjDpSBGvowlXppssyoVD8B9nlF6iVgggN1DsE9A3vwUliancdeDmHOec+5+POHGw2G/yvh6wDOsYYZFkPrVYLvu/DcRx4ngfXdf8pxplLP1AKs9lMoAIsigKBCnF29g7VahW1Wg22bQt4nxhjDlW/uIBr25hMJrvAdrsNx3GhlEIURdJto9EQPwzDB5Wx00oFR4eHcF8dQ1tvMPv5pENjCmjdkIrlGFQcx+j3+xgMBrgcDnH5cYgPvZ6AmcexletBB8HfI/MwIeyKB+r1OvI8x3K5xGKxwK/b3/gD4PrmRmBaa1EYRXJmB2iKAp1ORxI5EhNZfTQaYTwe4yrPMf92hbvvP3D9+Qv87VrKdTB/F2gMut0ugiCQJIKbzSben5/DsixUTk4wem3h64uX+HT6FkprRNt97gVyZAJ5IQwSyEQuP0kSxEkCL03gtFP4cfzQXUTw3pGNkVvmDgl9/p3RKhbZWk5Sqiw+nU53O+RNpmkqnUpXcSyW4n75nvapyndZlmE+nz8C+cuwy9VqJaK/T2X8uRhbr9cCvAdRPdd1RoTovAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a modal warning users of the consequences of saving after a full-page edit",title:"Example of a modal warning users of the consequences of saving after a full-page edit",src:"/static/9fb03523bacadbcdb7e45a5baafbdfad/3cbba/10.png",srcSet:["/static/9fb03523bacadbcdb7e45a5baafbdfad/7fc1e/10.png 288w","/static/9fb03523bacadbcdb7e45a5baafbdfad/a5df1/10.png 576w","/static/9fb03523bacadbcdb7e45a5baafbdfad/3cbba/10.png 1152w","/static/9fb03523bacadbcdb7e45a5baafbdfad/0b124/10.png 1728w","/static/9fb03523bacadbcdb7e45a5baafbdfad/4ea69/10.png 2304w","/static/9fb03523bacadbcdb7e45a5baafbdfad/0cbe4/10.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a modal warning users of the consequences of saving after a full-page edit"))),(0,n.kt)("h2",null,"Optional extras"),(0,n.kt)("h3",null,"Summary of changes"),(0,n.kt)("p",null,"Adding a summary of changes to the warning stage of a high-impact flow can help\nthe user manage and understand all of the changes they have made."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVQoz52T3WqDQBCF83i96EUppRRSShr6ML5coU2j4o0oeuHv7uquNv6eMgt6ERKiHTgMO8x+HHZ2NrgQ4zhiSVzq25w3TE1d16FpGrRti77vZ1GdNPWdQ68C0zSF53kIwxBCiFlSSpRliWEY1gGjKILjOHBdF77v6xwEAaqq0vqXQwIkSaJdxnGsa3RmjK0H0iUCkVPKBMqybM6rgfRWnHOd8zwHy3MopfS5KIr1wLquNYDeiwBcCJQErBSkUsuBU9AkOWPapZ4uuSUxDiUExqVTnsIwDLxut3jf7/Gx2+Hz8QXB/RPcuwf4z28YpFoHpD9omiYs24ZtWZCHI07fP/j9OuB0tDD2/W3gmrW7tnp/ZoyfJ2z2QZwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a summary of changes in a modal",title:"Example of a summary of changes in a modal",src:"/static/0d08168c01ec658050834436256113e3/3cbba/12.png",srcSet:["/static/0d08168c01ec658050834436256113e3/7fc1e/12.png 288w","/static/0d08168c01ec658050834436256113e3/a5df1/12.png 576w","/static/0d08168c01ec658050834436256113e3/3cbba/12.png 1152w","/static/0d08168c01ec658050834436256113e3/0b124/12.png 1728w","/static/0d08168c01ec658050834436256113e3/4ea69/12.png 2304w","/static/0d08168c01ec658050834436256113e3/0cbe4/12.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a summary of changes in a modal"))),(0,n.kt)("h3",null,"Non-editable fields"),(0,n.kt)("p",null,"When a small number of fields are not editable, display their set value in a\ndisabled field."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAAt0lEQVQoz61Tyw6EIBDj/3/P14WzetKIb1C76SQa1iwHyE7SFJLSlBlQ8Oq6LoG/DuGtv0vhR71FMRoVSuicE5znmZ7QFyzLgr7vMc8ztm3Duq4P7/seb2itFVMakG8kGzLZMAzCPpjyOI54Qx40xkhSGrCfZO6J0HCChtM0oWkatG0rTNR1LTyOY3zCruuQZRmqqkJRFCjLEnmeQ2udZsjGs4e8tg8OxTn79XT+8rBDOpX69UIJPxj0snH3MeoVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a single non-editable field",title:"Example of a single non-editable field",src:"/static/45739d9450d6e23fb40a15f9161df323/3cbba/11.png",srcSet:["/static/45739d9450d6e23fb40a15f9161df323/7fc1e/11.png 288w","/static/45739d9450d6e23fb40a15f9161df323/a5df1/11.png 576w","/static/45739d9450d6e23fb40a15f9161df323/3cbba/11.png 1152w","/static/45739d9450d6e23fb40a15f9161df323/0b124/11.png 1728w","/static/45739d9450d6e23fb40a15f9161df323/4ea69/11.png 2304w","/static/45739d9450d6e23fb40a15f9161df323/0cbe4/11.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a single non-editable field"))),(0,n.kt)("p",null,"Where a majority of variables are not editable, consider using an option that\nwill display only editable fields. In a small number of cases, make individual\nvariables editable in modals."),(0,n.kt)("h3",null,"Success notifications"),(0,n.kt)("p",null,"An optional success notification can be used to confirm that the user’s changes\nhave been saved."),(0,n.kt)(r,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAA70lEQVQoz7WTbW+CMBDH/f4fyRd7Q8IytgAqs5sPyJNsyIxMRW0L/S8WNCTi0sV5zfWf3l1+uUuuHfyzdZoPIcRZVbxZ2wpUgVbJykV1qXV4zcojuD4naGuHx2BZJ6I8wUP6DCsZwgh7MKI+noIe9JmJKY1Bdj6+WPb7yE2gt42hZTY0/wVdokl9jG3ocwvvLMQr9bBgq3p6BWCQf2JIPTgbF+aSoL+egBx8vNEAIx6B8AApz9RHDvMEzt6F8z2FmRLpxsdA6phFEqwEPCWKssCBU7CCg5e1i0Iq5QyUU1nzp7W5sJZwW+39F/vWr/cDkfGsrygSEvEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a successful editing toast notification",title:"Example of a successful editing toast notification",src:"/static/cff9abb42ee22ed94eb8a20bb1ac9c40/3cbba/13.png",srcSet:["/static/cff9abb42ee22ed94eb8a20bb1ac9c40/7fc1e/13.png 288w","/static/cff9abb42ee22ed94eb8a20bb1ac9c40/a5df1/13.png 576w","/static/cff9abb42ee22ed94eb8a20bb1ac9c40/3cbba/13.png 1152w","/static/cff9abb42ee22ed94eb8a20bb1ac9c40/0b124/13.png 1728w","/static/cff9abb42ee22ed94eb8a20bb1ac9c40/4ea69/13.png 2304w","/static/cff9abb42ee22ed94eb8a20bb1ac9c40/0cbe4/13.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(m,{mdxType:"Caption"},"Example of a successful editing toast notification"))))}u.isMDXComponent=!0}}]);