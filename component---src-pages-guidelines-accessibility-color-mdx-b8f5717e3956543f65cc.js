"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[21853],{28399:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),o=a(88650),r=a.n(o),s=a(1597),i=a(64905),l=a(68636),c=a(75900),m=a.n(c);var d=e=>{let{title:t,theme:a,tabs:o=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:i,branch:l}=a||o,c=`${r}/edit/${l}${i}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},g=a(56328),b=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),i=t===o,l=new RegExp(`${o}/?(#.*)?$`),c=a.replace(l,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var A=u,h=a(17680),f=a(75387),k=a(50041);var w=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:a,location:o,Title:c}=e;const{frontmatter:m={},relativePagePath:b,titleType:u}=t,{tabs:k,title:y,theme:x,description:v,keywords:N,date:T}=m,{interiorTheme:C}=(0,f.Z)(),{site:{pathPrefix:E}}=(0,s.useStaticQuery)("2456312558"),S=E?o.pathname.replace(E,""):o.pathname,R=k?S.split("/").filter(Boolean).slice(-1)[0]||r()(k[0],{lower:!0}):"",V=x||C;return n.createElement(l.Z,{tabs:k,homepage:!1,theme:V,pageTitle:y,pageDescription:v,pageKeywords:N,titleType:u},n.createElement(d,{title:c?n.createElement(c,null):y,label:"label",tabs:k,theme:V}),k&&n.createElement(A,{title:y,slug:S,tabs:k,currentTab:R}),n.createElement(h.Z,{padded:!0},a,n.createElement(p,{relativePagePath:b}),n.createElement(w,{date:T})),n.createElement(g.Z,{pageContext:t,location:o,slug:S,tabs:k,currentTab:R}),n.createElement(i.Z,null))}},71914:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return h}});var n=a(45987),o=(a(67294),a(64983)),r=a(28399);const s=["components"],i={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=l("PageDescription"),m=l("AnchorLinks"),d=l("AnchorLink"),p=l("Row"),g=l("Column"),b=l("ResourceCard"),u={_frontmatter:i},A=r.Z;function h(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,o.kt)(A,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Visual impairments can include low vision, color blindness, and complete\nblindness. Carbon components are designed to accommodate the entire spectrum of\nvisual impairment, though designers still need to exercise diligence to ensure\nthat the components are used correctly.")),(0,o.kt)(m,{mdxType:"AnchorLinks"},(0,o.kt)(d,{mdxType:"AnchorLink"},"Color contrast"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Low vision"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Tools"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Resources")),(0,o.kt)("h2",null,"Color contrast"),(0,o.kt)("p",null,"Carbon strives to meet\n",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"},"WCAG AA standards"),"\nacross all standard themes in the system, including color contrast ratios."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Element type"),(0,o.kt)("th",{parentName:"tr",align:null},"Contrast ratio"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Standard text"),(0,o.kt)("td",{parentName:"tr",align:null},"4.5:1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Large text"),(0,o.kt)("td",{parentName:"tr",align:null},"3:1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UI components"),(0,o.kt)("td",{parentName:"tr",align:null},"3:1")))),(0,o.kt)("h4",null,"Standard text"),(0,o.kt)("p",null,"Standard text and images of text must have a contrast ratio of at least\n",(0,o.kt)("strong",{parentName:"p"},"4.5:1"),"."),(0,o.kt)("h4",null,"Large text"),(0,o.kt)("p",null,"Large text (at least 24 px regular and light / 19 px semi-bold) must have a\ncontrast ratio of ",(0,o.kt)("strong",{parentName:"p"},"3:1.")),(0,o.kt)("h4",null,"Text against non-static backgrounds"),(0,o.kt)("p",null,"When text is rendered on a gradient background or image, make sure the text\ncolor meets contrast standards in all places it appears. This is especially\nimportant for parallax applications or animations where text and backgrounds are\nmoving independently of each other."),(0,o.kt)("p",null,"Visual information used to indicate states and boundaries of UI components must\nhave a contrast ratio of 3:1 against adjacent colors. See\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/able/requirements/requirements/#1_4_11"},"IBM checkpoint 1.4.11 Non-text Contrast"),"."),(0,o.kt)("h3",null,"Use of color and color blindness"),(0,o.kt)("p",null,"Don’t rely on color alone to convey meaning. This includes conveying\ninformation, indicating an action, prompting the user for a response, or\ndistinguishing one visual element from another. When designing with color, it\nmight help to use a color-blind simulator to review visibility of content. If\nyou’re working in Sketch, we recommend the ",(0,o.kt)("a",{parentName:"p",href:"http://www.getstark.co/"},"Stark"),"\nplugin."),(0,o.kt)(p,{mdxType:"Row"},(0,o.kt)(g,{colLg:8,mdxType:"Column"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVQoz13OS0wTURgF4JqYuHfj2rgmxMTowpVx6woTgm1kAwmvsDAmBrVpo/JQDBiFgEolSCTiC4KpYEABKQ+RSAkwtDBtpsVOX7Qz987Mbef+d6ZjqEiMZ3U2X86xCZcrsqt+jTEV41eem8u+MZ2yPDVnRlqnhl26bqgGS3s/CdU1WJJ0SkM873Q6I5GIruu2rRNn92aXiGkoCN9zNo5/fMcYo8x623Vt6GENgKlZVrx/IHDmHM5kKGPc5mZ5efnOzg6l1PbtdFdiMZwzdAUr9c1jbyb8BuQZg+6+oY7uAQMoMc2d0bFJeyXKShQgGAzW1taFQuH95dsXrcBKjjJFwWqJ69d9757FNAtyFf3rl3rXLCAAMD7rq3e3SZIMQIPBYENdQzhcxMevFmbWSAFUjNVSV+SBN1XE+cr+n2W9yxYQC8Azt1Da0p6RJAbAcZzd7ji4faQxMLWZsUBDWL3s9nu8gsmIBbnqFxtXetYKRdzrWzjV1pGR5P/x0abBL1uRAs0jRbnufj3i/cGYbkL+jme6qWfSgLxFoc+3WNLWeYgdDgfP8/v4mKvua3CjQAEpuMV9Y8I7CowBYy+fP+3reqwDs4AOzi2eb+38Z9l+sHyy5cI8v2JSAyv4UbN9+vMggEmZ+eHZ3eHuW9QoFKj+fn6prP2JJCMACAQCVVVV4XB4H38PrsaSItGIoij89no0EtI0TSNkV+BD2xzCOEeImEz6A9syQoSQTDbLcZwYj2OMbUkxIWUlVVUVRYknUtHoriRJhGipVFoQorFYTFXVbCazGxFEUVRVVZZlURQFQUgkEjYxEU+n07IsI4SSxch/gzHCGP/pqJjDjjFGCP0GaX5LVbe1d7gAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"rainbow palette showing relationship between colors for users with color blindness",title:"rainbow palette showing relationship between colors for users with color blindness",src:"/static/b2f4feb9938e0dbcc3b475543fa2dbfb/3cbba/color-accessibility-1.png",srcSet:["/static/b2f4feb9938e0dbcc3b475543fa2dbfb/7fc1e/color-accessibility-1.png 288w","/static/b2f4feb9938e0dbcc3b475543fa2dbfb/a5df1/color-accessibility-1.png 576w","/static/b2f4feb9938e0dbcc3b475543fa2dbfb/3cbba/color-accessibility-1.png 1152w","/static/b2f4feb9938e0dbcc3b475543fa2dbfb/0b124/color-accessibility-1.png 1728w","/static/b2f4feb9938e0dbcc3b475543fa2dbfb/3f76e/color-accessibility-1.png 1830w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,o.kt)("h2",null,"Tools"),(0,o.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(b,{subTitle:"High contrast Chrome plugin",href:"https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/related?hl=en",mdxType:"ResourceCard"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"128px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAELUlEQVQ4y22UwUsbWxTGT2aaliIVMRbzqNAqNtGYLmoUpdSpFIQSLcYkExe6kVeJ1o3YbhrqwlXp3r/gvbfrtruuY24mahKhr41dSHTjG904IsXcmXMeZ0x8yuuBj+/Mhfub79w7DMCVun//PvT29kJPTw+Ew2Ho6upS+vv71bdv36q2bauIqDqOoyAiXNUvy+/3X/Z37txR2Lu7u+Hx48ewsrICtm27mx3H4d6DiAr3rP9BGRaJRICIwOPxqM3Nze56X1/f05GRkcybN2/WbdteR8SM4ziDDUg9Mezs7PwHffjwoesMAwA3WVtb25Pbt29v+P1+GhoaokwmQ47jECI2/Asi9l2FXo7P53Xz1i24ccOrer1eaGpqmlEUhTweD/l8Pnt4eFiura1Jx3EacurQn4j4vAG9BPaGeqG1tVXx+XzQ3t7+zHvzJjHQ6/XWWltbsb+/n1ZXV9FxHBYnREQ8r0PPEDFQh7mXBaFQCP768w8e2ePz+YrNzc3U0tJSa2lpod/8fgyHw7i8vEy2bTPgKrgB/VwHenh06OzsVDo7OyEQCLzo6Oige/fuSfaOjg588OABdXd30+zsLNVqtatneK2IKNxICYFgUA0Eg/zdfQwGg9QTDErXe3owFAq5wHg8Tufn5y5QSslpkRPLiyJZqy1KKUFKqcLAwIA6MDDA/ikSiVAkEpGRSAS5HxwcpEePHlEymaSTkxM6Ozuj09PThtA6taRlWWRZ1gfLssCyLBU0TVM1TYORkZFPmqaRpmlS0zTkfnR0lIaHh2lmZoYODw/p+PiYjo5MOjo6YqFpmtI0TTL/MT+YpgmmaaoQjUbVaDTK/jEajVI0GpV1x4mJCRobG6PfX72ivb09Ojg4oP39fRbWXVarVapWq4vVahWq1aoKiURCSSQS7C94NF3Xpa7r7JhKpSgWi9HS0hJ9+/aNfvz4QZXKLu3u7mKlUrnU98r3cKVSgUqlosDU1BSPDXfvtnt0XS/WYTX26elpnJqawtevX1OxWKSdnR0sl8ssKpfL56VSiUrl0udSqQTlctmztbUFnAySyaSSTCYhHo8/45R1MRQ54cLCAgohsFAokGEYaBjGuWEY3J8ZRj5gGAYUDEPJizy4CVOpFENVhsfj8Zn66JRKpexYLCYXFhZkLpeThmFIIYSTz+cpn8//FEI8z+fzUCgU1GKxCF+//g0MgHfv3rk/iOnpaUXXdV57kkgkNhg6OTlJ6XSastksQ0gIwfoihOjL5XJgGIa6ubkJxe1t2N7evvjjMHR8fNztdV1X+XlxcZFTP52YmMjMz8+vZ7PZdSFEZmNjY5BTCSFYquu5HPDateLR5+bmoH6Wyvv3791+cnIS0uk0ZLNZF5K72OwRQih1qKtfFp8hA16+fOmKLysWi6npdFrNZrOcRs3lctdA/IKr9S+1oz22r/aaRwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"high-contrast icon",title:"high-contrast icon",src:"/static/bcd5aa10efbf7395cf7f4e4402333371/79bda/high-contrast.png",srcSet:["/static/bcd5aa10efbf7395cf7f4e4402333371/79bda/high-contrast.png 128w"],sizes:"(max-width: 128px) 100vw, 128px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,o.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(b,{subTitle:"Stark Sketch plugin",href:"http://www.getstark.co/",mdxType:"ResourceCard"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"60px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACCElEQVQ4y72VTa7aQAzH/+EjG7gDCLhPi4r6cQUQEuJDQrBiwyK8LBBC7FhVBXoIYIU4QctLhYArvLabV15ceTSDnGlod7U0mnFi/2bGdhwgKgk9pwF8APAZwAnATz14vdLvXMsnIo5YVwAEAOgfI9C2cYybjITDM4BfAF4cxwkB8HjRz56FnYc71/S0ATtceZ1IJAzIOEv9qm0lNGmgrwUsdBzHOFMymaRcLkeZTEZeV9oY6CsDSwH4anaVsGq1SofDgVgqlQrpU6thnZTnL5qF9yJmN8P5fK5Au92OBoMBlUolBRyPx7RYLGQIpC+z8MlcV8eMarWagvX7/UhmR6MRGWk0GiTibK79kYGPWuEMhhyzIAhov9/Hwnher9d0Pp/JdV0S2ef1gYE/WNGloRIQhmHkdJ7nKdh0OlV6q9VSeqFQIOkL4ImB320gS7fbVca+7yt9MpncNmi32+pZsViMBX6TV06lUnQ8Hmm73dJwOPwDxoPfXS6XuCszS32bkaTU6/Vb8DmrEtbpdNTzZrMZl5TV3bJZLpc0m82UUz6fp16vR5vNRsG4bGS9Ct93prM8WkUacvFyxlkvl8sKdDqd1MkMTM9XkeG0+Vreip1Ca3fKZrOqsHXM7n16b+zm4NvNwWoG5uRxzcG/1xsf4tqXAMW1r4f/2mBNP3N1m1/95ReQtnsgy28tir6raOu1KAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Stark logo",title:"Stark logo",src:"/static/f158f56cddc2d2c23e32af1b122a6ae3/2fa9e/stark.png",srcSet:["/static/f158f56cddc2d2c23e32af1b122a6ae3/2fa9e/stark.png 60w"],sizes:"(max-width: 60px) 100vw, 60px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,o.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(b,{subTitle:"Color contrast tool",href:"https://marijohannessen.github.io/color-contrast-checker/",mdxType:"ResourceCard"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFB0lEQVQ4ywXBf1DXhR3H8Tff71eD7xd28UP/mHaaDOmP4PYPYMvSoivTtLtNuC+htDZp1QSGXrZC7xabeIonP5ztx4G6AL0mZExQw9CssBEy9RRoU/GLaLRAnSSifD6f13OPh7VPBaxr0qxjwuw0Cb77ns+Grlq0M+bP965GN+vfwYjOxE7pVOyUPglF1Brdon3+VfqrRVPlN1Uk+rTejLeijHUBs4ZJs0N3LYpfmF0gaHcdf653L3hZtxJgZBYMzoO+FOiZDyfnQfss9EEiqgsNqsofVnnIWGFGiUXxepTZhxNma54yayPeetxpVd/qQeTNgYlHHY1lOrq20NN/FknnFkmnFno6lulwMM1h7xzYEY82Ta/VxhlGmhlrzWwXCb4/EbTd7rSqIyTQx3xnnAyXqafR+HLpvyulSFj0h8XpHPHpculQNno/01V1qkNZInpjei1vhIziJJ+tdX32myl/boUepIn5zmdaoAjPM6WwmFyDbhbB9XXo0jo4VwRdhXA4TzQsherHpI2pDoXxkBPIY6XfLHnYonO84OVS5lCrDPcjnqdXqzRKEXLL0J3NaLQShipRfwV0l8HRImhcLaqXQlmmyy/nworQFdItxlKmfPmPK4ECHnU26WnqFFaHivhav2OCarhfj/7XCN80oov1cLoGjr4LjcWwI0+8lQ2vpDs8lwRZgQILecG/JzObZ5XhFPICFVqjfZTRpRqu0YjrtcHdTjTWCVfaUG8THK2Bv22EbYVi/QqUn+Vo8WxIi2mxoFIuzCWDx7XEzVG+SimhSps5qDrO6BC3+Cc4feh2PxrqhtPtqH0Pqt8CfyiBtbniZ096LEiGeXH9FqfsSAorWaxfeWHeppRKtqmOBg5yXJ9xUQPcYwwmbqDBPtT1CWpuhJ2V6J1SeCWMlizySEuBGXFDFqeCoRRKWKRyL6w/sk77qeRjGtVDpy7Rxy1GHY/7NzwYuAnH+1DTMbT9fVi/FeWVoMW5HvMXwg9+NGQhvX1hHltZqDo3Ry0q4gQVOke9rtLGHbrvQ/8IRAbg9lfgHnZgz3ew5SwqOYJyd4snKzwl/xrF5vRbtGoPzGIvmWpzlquLQvWrjG+p0T2aJqD9uug8K06dEAPtYmQf3KkFb9MkvDosvdiNslodPfQexJR/aH41r0rUEdL0lZOti+RxQ8Wew7u3oSYidp8RTR1wYJ84vkf8q1ZcKhejJTD5EtIz30P6ZYekk2ha68tmXlt0SGcH53CFTMbdpVNi9Rgqvig29ogtH0Nlg6jeIRq2iPZN8EWJOF8gRZaJm1m4Uw97KPbmEHYqaH6um18j4XhNkHoP57ERtHRA5H2JCg9DcYNYvx02bICtxVD3qmh+STq2DLp/Ig08IudaAowHWHU74JklDn/jC42O2/TvqU0cFqnn5WR+jpv9D7Fir5S7HeW9ifILUFGOVP4i2vkMNGTJbX1Ezokk6H1AuwZisd6Zt3xmI5iBzfgOm35WtfHHYW6LSK+Xk7UN54k35S0ukJ56Fv30CbzXFuC8k46z9WH4c4L44AHtOvlD2UnDPjWZRY26ZoNulHVioV5ZoEV5ob9wJWkzzC6F5AJIfQ5S0yEzGZY9BKuToDSWoc0B8vfHYjsN6zCivvTJLBDBos5j9rUsqQdf4ABmvyUmsIGCmJ9zMHYJw3E/xombiTM7pGsZMXz0QoCXlxvB3wdk+2fiazWs2Yd1TMP+D6lROFXIUQ5nAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"color contrast icon",title:"color contrast icon",src:"/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png",srcSet:["/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))),(0,o.kt)("h2",null,"Resources"),(0,o.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(b,{subTitle:"IBM Equal Access Toolkit",href:"https://www.ibm.com/able/toolkit",mdxType:"ResourceCard"},(0,o.kt)("img",{src:"/2a7ef6c341581a6ceee69391700f13f0/bee.svg",alt:"IBM bee icon"}))),(0,o.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(b,{subTitle:"IBM Web Accessibility Checklist",href:"https://www.ibm.com/able/requirements/requirements/",mdxType:"ResourceCard"},(0,o.kt)("img",{src:"/2a7ef6c341581a6ceee69391700f13f0/bee.svg",alt:"IBM bee icon"}))),(0,o.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(b,{subTitle:"WCAG 2.1 guidelines",href:"https://www.w3.org/TR/WCAG21/",mdxType:"ResourceCard"},(0,o.kt)("img",{src:"/2a7ef6c341581a6ceee69391700f13f0/bee.svg",alt:"IBM bee icon"}))),(0,o.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(b,{subTitle:"W3C low vision requirements",href:"https://www.w3.org/TR/low-vision-needs/",mdxType:"ResourceCard"},(0,o.kt)("img",{src:"/2a7ef6c341581a6ceee69391700f13f0/bee.svg",alt:"IBM bee icon"})))))}h.isMDXComponent=!0}}]);