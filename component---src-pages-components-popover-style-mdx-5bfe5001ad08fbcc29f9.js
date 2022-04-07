"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[89332],{28399:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(67294),r=a(88650),l=a.n(r),i=a(1597),o=a(64905),s=a(68636),p=a(75900),c=a.n(p);var d=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:s}=a||r,p=`${l}/edit/${s}${o}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},g=a(56328),u=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),o=t===r,s=new RegExp(`${r}/?(#.*)?$`),p=a.replace(s,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var k=b,A=a(17680),y=a(75387),v=a(50041);var N=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var h=e=>{let{pageContext:t,children:a,location:r,Title:p}=e;const{frontmatter:c={},relativePagePath:u,titleType:b}=t,{tabs:v,title:h,theme:f,description:w,keywords:x,date:E}=c,{interiorTheme:C}=(0,y.Z)(),{site:{pathPrefix:B}}=(0,i.useStaticQuery)("2456312558"),Q=B?r.pathname.replace(B,""):r.pathname,T=v?Q.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",P=f||C;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:P,pageTitle:h,pageDescription:w,pageKeywords:x,titleType:b},n.createElement(d,{title:p?n.createElement(p,null):h,label:"label",tabs:v,theme:P}),v&&n.createElement(k,{title:h,slug:Q,tabs:v,currentTab:T}),n.createElement(A.Z,{padded:!0},a,n.createElement(m,{relativePagePath:u}),n.createElement(N,{date:E})),n.createElement(g.Z,{pageContext:t,location:r,slug:Q,tabs:v,currentTab:T}),n.createElement(o.Z,null))}},57916:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var n=a(45987),r=(a(67294),a(64983)),l=a(28399);const i=["components"],o={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=s("Caption"),c=s("Row"),d=s("Column"),m={_frontmatter:o},g=l.Z;function u(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,r.kt)(g,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Color"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container"),(0,r.kt)("td",{parentName:"tr",align:null},"background-color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$layer")," ","*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"background-color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$background-inverse"))))),(0,r.kt)(p,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,r.kt)(c,{mdxType:"Row"},(0,r.kt)(d,{colLg:8,mdxType:"Column"},(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVQ4y6WUzW7TQBDHh4QcuHFAAgE3BOVSJHdjx9k0ElKOXJGoeAWEOPTS9+gb9JlQ+DgkB6Rms07s2Q9HSvOxaFZ25LRxObDST7OzmvnvenbWAJWBiJ4kSUBrvcMY4ynnSikQQvi4+XwOtSPLsgeF4Gul1LlS6mvBeelrrb8h4hchxGMpJcxms3pBpVSTdk+S5LMxxh3CWuu01k4I8bY4YaNWUGvdpM+azWZnlHiIPM+98HQ6PaLTpWnauHMqYwwJNRGxRUHT6fQDIv5BxB+I+KvCT0T8nabp9+vr61fj8ZjK1KJca21TStn0Ba4WPMsycM79k81m4y+wzLXWAtWUBC6UUheIuIN8Y0wtWus7ObQmhLggdV+batHJ0vp93L4sqq2U0pHg2lq7Nsbs2dVqVcvNzY2Pq+bkeb6WUq5JcGut3Rpj9qxzrpbNZuPjqjl5nm+llNv/FizZCZbHrlKWoY7q55b+YrFYJ0myprbZXUJZYJrTegki7vnE7Xi6TH8paZqGiBhmWeZtmqbRcrlkzrlj59y7guOK7621tp1lWVTmKqXCyWQSkqBvUGroxWIBw+HQNy4APAeAZwDwFABeAsCLYu7XKGY0GvmGplx6IJPJxDd2QynVQMTG5eVlq9VqQb/f/8g533LOkXOuOed5ger1epZzPh8MBke069XV1UPK1Vo3hBD77zqO42Ycx9DpdD51u13X7Xa3hd0jjuNVFEVvOp0Oxdb/bSqCZ3Ecu/uIougoiqL7BU9OToAxBkEQPGGMvWeMnTLG+gfoBUHwKAgCn1M7aEei3W7v5nVQDBGG4Z7IX4yT9lPcEdRGAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Popover container colors.",title:"Popover container colors.",src:"/static/b2eab8d625c6e35d0b30e901d88ab15c/3cbba/popover-style-1.png",srcSet:["/static/b2eab8d625c6e35d0b30e901d88ab15c/7fc1e/popover-style-1.png 288w","/static/b2eab8d625c6e35d0b30e901d88ab15c/a5df1/popover-style-1.png 576w","/static/b2eab8d625c6e35d0b30e901d88ab15c/3cbba/popover-style-1.png 1152w","/static/b2eab8d625c6e35d0b30e901d88ab15c/92c65/popover-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,r.kt)("h2",null,"Structure"),(0,r.kt)("p",null,"The width and height of a popover container can vary depending on the amount of\ncontent within it. We recommend to not exceed a popover width size of four\ncolumns."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,r.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container"),(0,r.kt)("td",{parentName:"tr",align:null},"max-width"),(0,r.kt)("td",{parentName:"tr",align:null},"352 / 22"),(0,r.kt)("td",{parentName:"tr",align:null},"–")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"padding"),(0,r.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Caret tip"),(0,r.kt)("td",{parentName:"tr",align:null},"height, width"),(0,r.kt)("td",{parentName:"tr",align:null},"8 / .5"),(0,r.kt)("td",{parentName:"tr",align:null},"–")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,r.kt)("td",{parentName:"tr",align:null},"4 / .25"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$spacing-02"))))),(0,r.kt)("div",{className:"image--fixed"},(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCElEQVQoz42S30rDMBTGvyxvouKeQhB6pRfio8wXcIJ4sbdrL51/VtrQOqVr2iapMOWT1FaGDOuBHzkQ+OXjnAC/qqqqjrIshXNOKqUkSeHxvWudLLK1+CDhiaYz/Fk7QjjnoJQCyQ7fu9Zhk60xCMMxoU/mZUVRHGmtz621QZIkFx5jTKCr6uxtpQ6GR8J/JJR9wkXTNPQYYzqGfpO/3mxJbMlJOL0aEda1rOoapdaLxhoaa9j0mA7LYkcYjQmz50RkcQr1GJ/mT8ldvoyv84d43rGM5y+r9DaN7k80CU2K0YR+0A0/YfsZXQIyACQAcQhM2N3zZ1Hh8Wxc2JJ477/KPtz3uXcpX3RHJiAtdyRdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for a popover container.",title:"Structure and spacing measurements for a popover container.",src:"/static/5207c222613f261fb6c082f22c126f87/3cbba/popover-style-3.png",srcSet:["/static/5207c222613f261fb6c082f22c126f87/7fc1e/popover-style-3.png 288w","/static/5207c222613f261fb6c082f22c126f87/a5df1/popover-style-3.png 576w","/static/5207c222613f261fb6c082f22c126f87/3cbba/popover-style-3.png 1152w","/static/5207c222613f261fb6c082f22c126f87/392b1/popover-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,r.kt)(p,{mdxType:"Caption"},"Structure and spacing measurements a popover container. | px / rem"),(0,r.kt)("div",{className:"image--fixed"},(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVQoz5WPwUrEMBCGJ/bgw6gXD958Cr3pVX0BFWTdB9CXEQ8+gofFg8U9KdpdKCGdNu1kbOq1y8QuLOoSHPhg/mTmIwH4UZVzAWwa5bxPZnme9H2vBOnlLK8qyfD48Q4wvvpmXVnnAmXTAHce5nkOsixIz10HuqpCfprP4sK0KFSKBTwbs50iHk+tPZhk2dkky06n1h6+lOXRw9vrDuxubZ7c321EhcycMDMQ0U3btr3gvQ8sc0M0+vIeyLnkP8LbIBskqz0RjRwzfDLHhcYYZYwBrfU+Io4R8RwRLwcuEPFaa70nMzIbFRJRoK5ree2fyN1yLlorQjV8/xfWWrVOuABbrybDA+hFpQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements between a popover container and trigger button.",title:"Structure and spacing measurements between a popover container and trigger button.",src:"/static/df79a5b25253dabda7c211fb52a60e65/3cbba/popover-style-4.png",srcSet:["/static/df79a5b25253dabda7c211fb52a60e65/7fc1e/popover-style-4.png 288w","/static/df79a5b25253dabda7c211fb52a60e65/a5df1/popover-style-4.png 576w","/static/df79a5b25253dabda7c211fb52a60e65/3cbba/popover-style-4.png 1152w","/static/df79a5b25253dabda7c211fb52a60e65/392b1/popover-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,r.kt)(p,{mdxType:"Caption"},"Structure and spacing measurements between a popover container and trigger button. | px / rem"))}u.isMDXComponent=!0}}]);