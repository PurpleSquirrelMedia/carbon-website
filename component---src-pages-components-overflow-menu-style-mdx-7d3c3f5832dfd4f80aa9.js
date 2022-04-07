"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[62120],{28399:function(t,e,a){a.d(e,{Z:function(){return w}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),o=a(64905),m=a(68636),d=a(75900),s=a.n(d);var p=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var g=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:m}=a||l,d=`${r}/edit/${m}${o}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},c=a(56328),u=a(51721);let b=function(t){function e(){return t.apply(this,arguments)||this}return(0,u.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],o=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),o=e===l,m=new RegExp(`${l}/?(#.*)?$`),d=a.replace(m,e);return n.createElement("li",{key:t,className:s()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},e}(n.Component);var k=b,N=a(17680),f=a(75387),A=a(50041);var y=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=t=>{let{pageContext:e,children:a,location:l,Title:d}=t;const{frontmatter:s={},relativePagePath:u,titleType:b}=e,{tabs:A,title:w,theme:h,description:v,keywords:E,date:x}=s,{interiorTheme:C}=(0,f.Z)(),{site:{pathPrefix:z}}=(0,i.useStaticQuery)("2456312558"),S=z?l.pathname.replace(z,""):l.pathname,P=A?S.split("/").filter(Boolean).slice(-1)[0]||r()(A[0],{lower:!0}):"",L=h||C;return n.createElement(m.Z,{tabs:A,homepage:!1,theme:L,pageTitle:w,pageDescription:v,pageKeywords:E,titleType:b},n.createElement(p,{title:d?n.createElement(d,null):w,label:"label",tabs:A,theme:L}),A&&n.createElement(k,{title:w,slug:S,tabs:A,currentTab:P}),n.createElement(N.Z,{padded:!0},a,n.createElement(g,{relativePagePath:u}),n.createElement(y,{date:x})),n.createElement(c.Z,{pageContext:e,location:l,slug:S,tabs:A,currentTab:P}),n.createElement(o.Z,null))}},53370:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return u}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],o={},m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},d=m("Caption"),s=m("Row"),p=m("Column"),g={_frontmatter:o},c=r.Z;function u(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(c,Object.assign({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Overflow menu icon"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Menu option"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Danger option"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer"),"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null},"box-shadow"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 2px 6px 0 rgba(0, 0, 0, 0.3)"))))),(0,l.kt)(d,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)(s,{mdxType:"Row"},(0,l.kt)(p,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABS0lEQVQoz5WSzU7DMAyAs/bCDS5ceAFgxyH2NDwAAvESPOG0S6Wu2dpu2ZLmz1mCmMRPkaN1Qrt0s/RdLPuzLZmQo3DORbTWg+12myDe+wQA0slkgnkipYw11lrSG/+ExHtPQggRbF4ul5fGmPemaW4AAHODXiE2IlLKawAYA8AIAB6dc0NjzBMAtE3TjHEoACS9Qq11uhe+cc7bzWaDgjaE0HrvI5zzEdacJDTGpHiOUupFKdVKKb+MMT8hBOR7L3w4S4jFKBRC4IYHoff+fKG1ttvwVWuNG6IontydLYQ4XSiESPEtOOfPjLG2rusPIcTOObcDgE9r7S9jbKSUwqH9wtlsFsmy7IpSOqSU3lJK7zqKorifTqcXeZ4TpDfKsowURYF/F6nrmlRVdSDLMjKfz8lisegXrlarCErX63VyDGMswQtwCA47jj/Eco7gW9RjSgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"An example of an overflow menu",title:"An example of an overflow menu",src:"/static/1a244fb37922fbbe954cbf832543282f/3cbba/overflow-menu-style-1.png",srcSet:["/static/1a244fb37922fbbe954cbf832543282f/7fc1e/overflow-menu-style-1.png 288w","/static/1a244fb37922fbbe954cbf832543282f/a5df1/overflow-menu-style-1.png 576w","/static/1a244fb37922fbbe954cbf832543282f/3cbba/overflow-menu-style-1.png 1152w","/static/1a244fb37922fbbe954cbf832543282f/92c65/overflow-menu-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon button:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Menu option:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon button:hover"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$background-hover"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Menu option:hover"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer-hover")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Danger option:hover"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$button-danger-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Menu option:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))))),(0,l.kt)(s,{mdxType:"Row"},(0,l.kt)(p,{colLg:12,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCElEQVQ4y22TTWhcVRTHTybTEtSKUKziQkQwi+6kO0FJ6ELcCIKRwEBWQkBwYwQX4k7iR1tKIqbQSrGgWIsKbp2aKXEh1UDaOBMwnWYyX+/e9+7Hu+feO3l2JjNH7jBTqnTx4z3O/7z/O+eec6FcLkMcx9ButwERQUr5vFLqVSICzvkE5zzEIMuy8DytlDoZNMYTuFtrglAG9AGBUvKtcmVnEprNZkh8VwhxxVp71lp7yxjz9WAwCPGnpZSraZpe6nQ6q9baptZ6LvxYKXWa8fhKavALRPedMbhf+vWXPFQqlVDhjTiOyXs/BBFXu90uNBqN6b29PYqiaAhjjJqt9mt/1xLYrqr37+wnFAlHTHraa7u7kF+agFqtBkKI60qpYDYYGV46PDwMLU9zzntBM8ZQmqaUCPE6Fym0uH6vzQSp1FGKnoR2ceGd5RyEM2SMXWCM3UHETUSsa60/7PV6ofJnGWM3pZR/OeduIWJZCPGKVhKUTBZY1N43Jr1tLe4ipsXNP37Pw8zMDBQKhVyhUMgvLCxMLi0t5RcXF3NxHOdLpVJudnZ2cn5+Pj83Nxf0/MbGRv6fe10Ig/k/3nsILR85ODiYJKIJIspVq9WhWK/XH6nX60fH8YBSaqgh4rxzbs17/7n3/uwY59y58CFEUTTFGHs8JKdp+qbW+oPwrpQ6EkXRo0mSHCsWizmt9cdSyhedcyvOOXoY46F8lSRJK5yTc66PiJf7/T4IHj8XM3ZbC1F1iDvWGJJx/LLzbnlkkHnvew8CnU4nVFVExDDl/mjKKwMikFn2gsiyrukfUkZEHSLSRKectZ+FPOdcd7QZ94Gtra2wHjc45/fLNsZcvtdsQePaj9Otb78n9s1V4td+ovjqD1Q/c/4l3+t+Osrtjnd3DOzu7oZr93YURatKqU+UUmsJ52/oLy/C5slTT24/8czy9tTxc38+duLM1rGnVn4GONEZDM47ax9uuL6+Dq1Wa3gFrbVDlBDQKFeOfgQAO1PHoQIAN2ECfgMAdb0Eztq1B1r+j+G/m+UfRoWtoPwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Interactive states for overflow menu",title:"Interactive states for overflow menu",src:"/static/20ff73db125409152b3b7d0401568c4b/3cbba/overflow-menu-style-2.png",srcSet:["/static/20ff73db125409152b3b7d0401568c4b/7fc1e/overflow-menu-style-2.png 288w","/static/20ff73db125409152b3b7d0401568c4b/a5df1/overflow-menu-style-2.png 576w","/static/20ff73db125409152b3b7d0401568c4b/3cbba/overflow-menu-style-2.png 1152w","/static/20ff73db125409152b3b7d0401568c4b/0b124/overflow-menu-style-2.png 1728w","/static/20ff73db125409152b3b7d0401568c4b/0c3f5/overflow-menu-style-2.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Overflow menu option text should be set in sentence case with the first letter\nof the first word capitalized."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Menu option text"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("p",null,"The height of an overflow menu is determined by the amount of content in the\nmenu. The overflow menu icon can be found in the\n",(0,l.kt)("a",{parentName:"p",href:"/guidelines/icons/library"},"icons")," library."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon"),(0,l.kt)("td",{parentName:"tr",align:null},"icon size"),(0,l.kt)("td",{parentName:"tr",align:null},"16 x 16px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Menu option"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-right, padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Divider"),(0,l.kt)("td",{parentName:"tr",align:null},"border-top"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXklEQVQoz42RPUsDQRCGx1zs/BFiE+z9BWIr9naCYmNhGhsLwfLsDAomdnaKELxCixBEIkYURQsTozG53Mdu7i7n7X0oCGFkL6ccgkkGhp3dmXmYeRfgjyEiHCPCGSKPRxBR0AkRPj0/+baXB3zWYInX3RHAqRw8pNLQ31ZmQEKEKiK/cSCoVAfPYdBuabOsqWX421dVFw7H5+Exle4P3drcDafkXnyti9QyT61O58jzvQPmumrFMC+6vXziZXIthPUF7oj7P6tCWVZuKCHYJhQ9h6HLXLzUSZ7nasu5sfvUanIgMBMDXjVbBaoTtE0r8B3muw7Da42chMDFLAeODgRuxydU1FtqGugwhsFHgF7gY9myCs57ENYMtXJ2PfOrYempJioNuUhkRbKpIVnUOC815A2724V2nSakiYXBwLkIxl2OTgAQ+I/zgMbyQ9l0rEHtrZ6IJAhjI5LjP+A3Bbs1BaCYKEEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for an overflow menu",title:"Structure and spacing measurements for an overflow menu",src:"/static/42e2bdf210fdbf0312e2e02be604b178/3cbba/overflow-menu-style-4.png",srcSet:["/static/42e2bdf210fdbf0312e2e02be604b178/7fc1e/overflow-menu-style-4.png 288w","/static/42e2bdf210fdbf0312e2e02be604b178/a5df1/overflow-menu-style-4.png 576w","/static/42e2bdf210fdbf0312e2e02be604b178/3cbba/overflow-menu-style-4.png 1152w","/static/42e2bdf210fdbf0312e2e02be604b178/392b1/overflow-menu-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)("h2",null,"Sizes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Height (px/rem)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Menu options"),(0,l.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon button"),(0,l.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVQ4y61UiwqDMAzc//+o+Jj2vb5vpJtDZOJsVwhaSq/J3SU3nKycc4nt/3a/X7cjkD3A/vI3sEPAowsxJaQYXw/UZmithfceMUYIKfGYOLL1dSUTUNd1WJYFSikIIeCERg6pLsMQAuZ5LkBaa0gpS6ZVHP6ifpMotHfeIVqPHFMdhymlwiOVTl/GGewskR4NovR9j2maoNWLQ8cVsg1tKg/DUMAYYwjeX+dw60MqdxvlLONr91zulPfBf1Qm/1HJXph6YxMIcWeMKcE4h70LZNcgyjiOJTNqvaKyNDQl6jJcbUPt91E5hHqVydirqdfYz8p2lU/OLk3ss/FPgE8BJzE8Ebv/pAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for overflow menu",title:"Sizes for overflow menu",src:"/static/af408bdf449a8e678969340d342306a7/3cbba/overflow-menu-style-size.png",srcSet:["/static/af408bdf449a8e678969340d342306a7/7fc1e/overflow-menu-style-size.png 288w","/static/af408bdf449a8e678969340d342306a7/a5df1/overflow-menu-style-size.png 576w","/static/af408bdf449a8e678969340d342306a7/3cbba/overflow-menu-style-size.png 1152w","/static/af408bdf449a8e678969340d342306a7/392b1/overflow-menu-style-size.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{mdxType:"Caption"},"Sizes for menu options and icon button | px / rem"))}u.isMDXComponent=!0}}]);