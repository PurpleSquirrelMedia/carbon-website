"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[89585],{28399:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),s=a(64905),o=a(68636),d=a(75900),m=a.n(d);var c=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:o}=a||l,d=`${r}/edit/${o}${s}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},g=a(56328),u=a(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),s=t===l,o=new RegExp(`${l}/?(#.*)?$`),d=a.replace(o,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=k,A=a(17680),N=a(75387),h=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(h.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(h.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=e=>{let{pageContext:t,children:a,location:l,Title:d}=e;const{frontmatter:m={},relativePagePath:u,titleType:k}=t,{tabs:h,title:f,theme:v,description:E,keywords:w,date:C}=m,{interiorTheme:x}=(0,N.Z)(),{site:{pathPrefix:P}}=(0,i.useStaticQuery)("2456312558"),S=P?l.pathname.replace(P,""):l.pathname,B=h?S.split("/").filter(Boolean).slice(-1)[0]||r()(h[0],{lower:!0}):"",I=v||x;return n.createElement(o.Z,{tabs:h,homepage:!1,theme:I,pageTitle:f,pageDescription:E,pageKeywords:w,titleType:k},n.createElement(c,{title:d?n.createElement(d,null):f,label:"label",tabs:h,theme:I}),h&&n.createElement(b,{title:f,slug:S,tabs:h,currentTab:B}),n.createElement(A.Z,{padded:!0},a,n.createElement(p,{relativePagePath:u}),n.createElement(y,{date:C})),n.createElement(g.Z,{pageContext:t,location:l,slug:S,tabs:h,currentTab:B}),n.createElement(s.Z,null))}},87288:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],s={},o=(d="Caption",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var d;const m={_frontmatter:s},c=r.Z;function p(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,l.kt)(c,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large spinner"),(0,l.kt)("td",{parentName:"tr",align:null},"stroke"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$interactive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small spinner"),(0,l.kt)("td",{parentName:"tr",align:null},"stroke"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$interactive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer-accent")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Page overlay"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$overlay"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large spinner"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"88 / 5.5"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small spinner"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABPklEQVQoz43QvUtCARQF8KPvPYTUgpbCqSCwqaUthIYIySc09AdEkEFFhSRCGBFtQUNEtDRFCC+QAmvoY2hKSyy1Aj+GSLCIHrS8hhD0xDOFCkoP3O3wu5cL/ErK7gHIyhCAlTS4SAxChBMGbFY73+fP1Ao6NFAFdbifFRoCrLiTnCA6QYsNtLSDUlt9UMf2NlKIBZM9q1uF0aNQfohaWGLxFPfoA2EUKAA04mvpf+Ct3YPIblLULzu7/vBlX1k8SPBybIfmxe035Bxe09qI0iHLUdHtusC4+6Q+mAvdiM0A1Of3icwLH/fj5cNgpNQUPlbx4JgzTS9nLQjQAD+BeTb2w9j6OZ7yWkt3gF3BaNlG/ackMq3DmFlKAwsEfAS8DYJJJQG1oKF3hVCuyqiBabMMvz8OzBKYIqyTpR/IJx7Opz+egpnYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Large spinner structure measurements",title:"Large spinner structure measurements",src:"/static/432e561d8035e8aaba32d3ca89414550/3cbba/loading-style-1.png",srcSet:["/static/432e561d8035e8aaba32d3ca89414550/7fc1e/loading-style-1.png 288w","/static/432e561d8035e8aaba32d3ca89414550/a5df1/loading-style-1.png 576w","/static/432e561d8035e8aaba32d3ca89414550/3cbba/loading-style-1.png 1152w","/static/432e561d8035e8aaba32d3ca89414550/392b1/loading-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(o,{mdxType:"Caption"},"Structure measurements for small and large loading spinner | px / rem"),(0,l.kt)("h3",null,"Placement"),(0,l.kt)("p",null,"The large loading spinner should appear centered over a page or content that it\nis loading. Please note that the top-level navigation is not included in the\npage loading overlay."),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABGUlEQVQoz61RTUsDMRTcpT2olfb3e/BPbLM9KPgv7KFWqRVbe5CVzZuXr4YnCav0EpDiwCTkZWZewquqE4jIWSzi3wOVUlXbttVisbiaz+e3TdPcq4y2zUubD6l2o5S6SPrEIkII9dB1Zq3dW2vFey/OGfHOijFWUi2EsI0xTmKM2VMMJKKaiNI+JaIVEQlR71933XGz+zp23afvuk6I6JGZJ8aY7CkGMnMNoAIwBfDEzEK6D+vNPi6fP+J+9x4Oh4MAWBpjJt777CkGAvgJnAF4A5DMQqQF1Evfa9Fap9pLeiEzZ89fAq8BPADYAlgBvE5k5tXQ6A7A5aAtDyV94YSjEMLYOTfSWv8SwHi4q9JQkrYI59xZPMU3wr63BssgXIIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Large spinner in context example",title:"Large spinner in context example",src:"/static/15b62ae24c795cf50160fe6c9745a15e/3cbba/loading-style-4.png",srcSet:["/static/15b62ae24c795cf50160fe6c9745a15e/7fc1e/loading-style-4.png 288w","/static/15b62ae24c795cf50160fe6c9745a15e/a5df1/loading-style-4.png 576w","/static/15b62ae24c795cf50160fe6c9745a15e/3cbba/loading-style-4.png 1152w","/static/15b62ae24c795cf50160fe6c9745a15e/392b1/loading-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(o,{mdxType:"Caption"},"Example of a large loading spinner in product context"))}p.isMDXComponent=!0}}]);