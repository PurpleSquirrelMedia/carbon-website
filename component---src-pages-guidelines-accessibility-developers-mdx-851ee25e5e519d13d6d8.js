"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[71139],{28399:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(67294),i=n(88650),l=n.n(i),r=n(1597),o=n(64905),s=n(68636),c=n(75900),d=n.n(c);var u=e=>{let{title:t,theme:n,tabs:i=[]}=e;return a.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:i}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:s}=n||i,c=`${l}/edit/${s}${o}/src/pages${t}`;return l?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=n(56328),h=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,i=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),o=t===i,s=new RegExp(`${i}/?(#.*)?$`),c=n.replace(s,t);return a.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(a.Component);var b=g,k=n(17680),v=n(75387),y=n(50041);var f=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(y.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var N=e=>{let{pageContext:t,children:n,location:i,Title:c}=e;const{frontmatter:d={},relativePagePath:h,titleType:g}=t,{tabs:y,title:N,theme:w,description:T,keywords:x,date:E}=d,{interiorTheme:C}=(0,v.Z)(),{site:{pathPrefix:P}}=(0,r.useStaticQuery)("2456312558"),L=P?i.pathname.replace(P,""):i.pathname,A=y?L.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",S=w||C;return a.createElement(s.Z,{tabs:y,homepage:!1,theme:S,pageTitle:N,pageDescription:T,pageKeywords:x,titleType:g},a.createElement(u,{title:c?a.createElement(c,null):N,label:"label",tabs:y,theme:S}),y&&a.createElement(b,{title:N,slug:L,tabs:y,currentTab:A}),a.createElement(k.Z,{padded:!0},n,a.createElement(m,{relativePagePath:h}),a.createElement(f,{date:E})),a.createElement(p.Z,{pageContext:t,location:i,slug:L,tabs:y,currentTab:A}),a.createElement(o.Z,null))}},2151:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return g}});var a=n(45987),i=(n(67294),n(64983)),l=n(28399);const r=["components"],o={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=s("PageDescription"),d=s("AnchorLinks"),u=s("AnchorLink"),m=s("Title"),p={_frontmatter:o},h=l.Z;function g(e){let{components:t}=e,n=(0,a.Z)(e,r);return(0,i.kt)(h,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Write code that is clear and logical. Be detailed in alt text and image\ndescriptions, and at each step consider users who experience your product\nthrough alternative technologies.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(u,{mdxType:"AnchorLink"},"HTML best practices"),(0,i.kt)(u,{mdxType:"AnchorLink"},"CSS best practices"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Mouse-specific events")),(0,i.kt)("h2",null,"HTML best practices"),(0,i.kt)("h3",null,"Structuring code and navigation"),(0,i.kt)("p",null,"Think of code hierarchy when structuring your content. Be sure screen readers\nand keyboard-only users can access interactive elements in a logical and\npredictable order via tabbing. Begin with the header, followed by the main\nnavigation, then page navigation (from left to right, top to bottom), and end\nwith the footer. Keyboard users should encounter an intentional experience that\nis comparable to the experience of mouse users."),(0,i.kt)("h3",null,"Use semantic HTML"),(0,i.kt)("p",null,"Use native HTML elements as much as you can. These elements have built-in\naccessibility benefits. They inform screen readers what they are and what they\ndo, and standard interactive elements, such as a button, include keyboard\nfunctionality. Aside from making a page accessible, native HTML is easier to\ndevelop and maintain, better on mobile, and improves search engine optimization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<button>Play Video</button>\n<header></header>\n<main></main>\n<nav></nav>\n<footer></footer>\n<aside></aside>\n<section></section>\n<article></article>\n")),(0,i.kt)("h3",null,"Use clear language"),(0,i.kt)("p",null,"When adding content, consider cognitive disabilities, anyone whose native\nlanguage isn’t the language your content is written in, and screen readers. When\npossible, avoid dashes, abbreviations, acronyms (at least the first time), and\ntable layouts if a table is not needed. If abbreviating, use the native\n",(0,i.kt)("inlineCode",{parentName:"p"},"<abbr />")," element with title attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'"9 to 5" "November" <abbr title="November">Nov</abbr>\n')),(0,i.kt)("h3",null,"Use meaningful text labels"),(0,i.kt)("p",null,"Consider visually impaired people when labeling elements. Make sure there is\ntextual context for screen readers."),(0,i.kt)(m,{mdxType:"Title"},"Correct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<a>Read more about pricing</a>\n")),(0,i.kt)(m,{mdxType:"Title"},"Incorrect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<a>Click here</a>\n")),(0,i.kt)("h3",null,"Designing accessible data tables"),(0,i.kt)("p",null,"Always specify table headers with ",(0,i.kt)("inlineCode",{parentName:"p"},"<th />")," elements, and make sure they stand\nout. Utilize ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," attributes if necessary to specify if they are headers for\nrows or columns. Utilize alternative text along with tables for visually\nimpaired users. ",(0,i.kt)("inlineCode",{parentName:"p"},"<caption />")," is preferred, but ",(0,i.kt)("inlineCode",{parentName:"p"},"<table />")," summary works too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<table summary="Names and Ages of My Coworkers">\n  <caption>\n    Names and Ages of My Coworkers\n  </caption>\n  <thead>\n    <tr>\n      <th scope="col">Firstname</th>\n      <th scope="col">Lastname</th>\n      <th scope="col">Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Jane</td>\n      <td>Smith</td>\n      <td>22</td>\n    </tr>\n    <tr>\n      <td>Tom</td>\n      <td>West</td>\n      <td>47</td>\n    </tr>\n  </tbody>\n</table>\n')),(0,i.kt)("h3",null,"Designing accessible data visualizations"),(0,i.kt)("p",null,"Consider visually impaired users when including data visualizations. Consider\naccompanying visuals with a data table as an alternative for users who rely on\nscreen readers. Also consider color choices for color-blind users."),(0,i.kt)("h3",null,"Multimedia text alternatives"),(0,i.kt)("p",null,"Every image that is not decorative must include ",(0,i.kt)("inlineCode",{parentName:"p"},"alt")," text with a meaningful\ndescription of the image. If the image is decorative, use an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"alt"),"\nattribute; otherwise the screen reader will read the whole image URL if the\n",(0,i.kt)("inlineCode",{parentName:"p"},"alt")," is left out."),(0,i.kt)(m,{mdxType:"Title"},"Be detailed and succinct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img src="puppy.jpg" alt="Picture of a sleeping puppy in cup" />\n')),(0,i.kt)(m,{mdxType:"Title"},"Give decorative images an empty `alt` attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img src="puppy.jpg" alt="" />\n')),(0,i.kt)("h3",null,"Audio alternatives"),(0,i.kt)("p",null,"Provide closed-captioning with videos or transcriptions of audio files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<video controls>\n  <source src="example.mp4" type="video/mp4" />\n  <source src="example.webm" type="video/webm" />\n  <track kind="subtitles" src="subtitles_english.vtt" srclang="en" />\n</video>\n')),(0,i.kt)("h3",null,"Avoid font icon libraries"),(0,i.kt)("p",null,"Use SVG’s instead of font icon libraries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<svg width="80" height="10">\n  <line class="line" x1="200" y1="0" x2="0" y2="0" />\n</svg>\n')),(0,i.kt)("h3",null,"Utilize ARIA roles and landmark roles"),(0,i.kt)("p",null,"ARIA (Accessible Rich Internet Application) roles convey the intent or meaning\nof an element to assistive technology. This helps users navigate when they can’t\nsee the layout and provides further context about different functionalities."),(0,i.kt)("p",null,"Landmark roles identify regions in a page, and act much like native HTML tags\nwould when it comes to semantics. Signpost roles describe other information\nabout a given element’s functionality on a page. These are especially helpful\nwhen building complex, custom interfaces or to reinforce semantics in native\nHTML elements."),(0,i.kt)(m,{mdxType:"Title"},"Landmark roles"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<nav role="navigation"></nav>\n<main role="main"></main>\n')),(0,i.kt)(m,{mdxType:"Title"},"Signpost roles"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div role="banner">This is a banner.</div>\n<div role="tabgroup"><div role="tab"></div></div>\n<div role="combobox"></div>\n<div role="slider"></div>\n<button role="button"></button>\n')),(0,i.kt)("h2",null,"CSS best practices"),(0,i.kt)("h3",null,"CSS rule of thumb"),(0,i.kt)("p",null,"You can style a page feature to fit your design, but don’t change it to the\npoint that it doesn’t look or behave as expected."),(0,i.kt)("h3",null,"Style focus indicators"),(0,i.kt)("p",null,"Add styling to tabbable elements on hover and focus, so that keyboard-only users\ncan have a clear visual of where they are navigating. Never suppress the focus\nindicator altogether."),(0,i.kt)("h3",null,"Hiding elements"),(0,i.kt)("p",null,"When hiding content from a screen reader, consider source order. Use\n",(0,i.kt)("inlineCode",{parentName:"p"},"visibility: hidden"),", along with ",(0,i.kt)("inlineCode",{parentName:"p"},"display: none")," in your CSS."),(0,i.kt)("h2",null,"Mouse-specific events"),(0,i.kt)("p",null,"Double up mouse-specific events with other events for keyboard-only users."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const foo = document.querySelector('.foo-class');\n\nfoo.onmouseover = someFunction();\n\nfoo.onmouseout = anotherFunction();\n\nfoo.onfocus = someFunction();\n\nfoo.onblur = anotherFunction();\n")))}g.isMDXComponent=!0}}]);