"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[83188],{28399:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),o=n(88650),i=n.n(o),s=n(1597),r=n(64905),l=n(68636),p=n(75900),c=n.n(p);var d=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:r,branch:l}=n||o,p=`${i}/edit/${l}${r}/src/pages${t}`;return i?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},m=n(56328),h=n(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),r=t===o,l=new RegExp(`${o}/?(#.*)?$`),p=n.replace(l,t);return a.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(a.Component);var y=k,g=n(17680),f=n(75387),w=n(50041);var b=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(w.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:n,location:o,Title:p}=e;const{frontmatter:c={},relativePagePath:h,titleType:k}=t,{tabs:w,title:v,theme:x,description:D,keywords:T,date:N}=c,{interiorTheme:A}=(0,f.Z)(),{site:{pathPrefix:I}}=(0,s.useStaticQuery)("2456312558"),E=I?o.pathname.replace(I,""):o.pathname,R=w?E.split("/").filter(Boolean).slice(-1)[0]||i()(w[0],{lower:!0}):"",B=x||A;return a.createElement(l.Z,{tabs:w,homepage:!1,theme:B,pageTitle:v,pageDescription:D,pageKeywords:T,titleType:k},a.createElement(d,{title:p?a.createElement(p,null):v,label:"label",tabs:w,theme:B}),w&&a.createElement(y,{title:v,slug:E,tabs:w,currentTab:R}),a.createElement(g.Z,{padded:!0},n,a.createElement(u,{relativePagePath:h}),a.createElement(b,{date:N})),a.createElement(m.Z,{pageContext:t,location:o,slug:E,tabs:w,currentTab:R}),a.createElement(r.Z,null))}},47656:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return w}});var a=n(45987),o=(n(67294),n(64983)),i=n(28399);const s=["components"],r={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=l("PageDescription"),c=l("AnchorLinks"),d=l("AnchorLink"),u=l("Row"),m=l("Column"),h=l("Caption"),k=l("DoDontRow"),y=l("DoDont"),g={_frontmatter:r},f=i.Z;function w(e){let{components:t}=e,n=(0,a.Z)(e,s);return(0,o.kt)(f,Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Writing should always be simple, clear, and easy to understand. Using everyday\nlanguage keeps the tone friendly, human, and inviting. And choose short words\nover long impressive-sounding words. Put the thesaurus away!")),(0,o.kt)(c,{mdxType:"AnchorLinks"},(0,o.kt)(d,{mdxType:"AnchorLink"},"Capitalization"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Simple writing"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Conversational style"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Inclusive language"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Pronouns"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Active and passive voice")),(0,o.kt)("h2",null,"Capitalization"),(0,o.kt)("h3",null,"Use sentence-case capitalization"),(0,o.kt)("p",null,"Use sentence-case capitalization for all UI text elements. This style is\npredominantly lowercase. Capitalize only the initial letter of the first word in\nthe text and other words that require capitalization, such as proper nouns. For\nexample, labels in a form would be written as “First name” and “Email address”."),(0,o.kt)("p",null,"The image below shows a page title, tabs, a module title, link text, button\ntext, table headers, and table content all following the sentence case rule."),(0,o.kt)(u,{mdxType:"Row"},(0,o.kt)(m,{colLg:8,mdxType:"Column"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0klEQVQ4y61TW4vTQBjNH+1LLy5CZXuhLvhQ8GVdKLgIfdYn0RX8PW2p0dokTZPm2tyby5Ez60ilCD7swMl88+V8Z2Zyvih4wtE0DZT5fI7B4Bo3Ny8xmUwwHA7/idFodIHxeIx+v4/ZbCZElds3d3h29RyD4Rj9F9fo9XrodrvodDpiPl+32+0LMN9qtTCdTh8FixJwjyWyCihq4Hg8IkkSnE4nxHGMMAyRpun/XznPM4SBjzSJUVclPM/DbreDYRhwHAe+74vZsiwhnue5QBRFgsvNZU4IJmkqBFggBws1TUNRFGLN0242G8FhEcfOtPBN/YE4yVA3QM0HBauqEgXnxy7LEnVdX+T+HqypJANAjZqCJBIU5YkImZNrmcvzAnmWwPESvP0K3H0BXn8EXn0AllojhBXXdbFYLKCqqrg6wXi5XGK73cI0TXH91WqF9XoNw9DxfaPj3eefuH2v4v6TgfsHG6qRPbpMV1lo27YwgKAITeFHD4JAmKLruviGXAc0MTQR+RrqwgVOHpqqEBdX2Br7/V4QGdO9w+EgNmBM8B053ExyLNuBadL5CEEYofjtg5Jl2R8iY/YcTy37jzm2htzwnMMcY0Kapjzlf8w+/AWJha17SRnjIAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sentence case for UI elements",title:"Sentence case for UI elements",src:"/static/3375801220657f773adb8a2e06af79d8/3cbba/sentence_case_786.png",srcSet:["/static/3375801220657f773adb8a2e06af79d8/7fc1e/sentence_case_786.png 288w","/static/3375801220657f773adb8a2e06af79d8/a5df1/sentence_case_786.png 576w","/static/3375801220657f773adb8a2e06af79d8/3cbba/sentence_case_786.png 1152w","/static/3375801220657f773adb8a2e06af79d8/392b1/sentence_case_786.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)(h,{mdxType:"Caption"},"Example of a product page using sentence-style capitalization"))),(0,o.kt)("p",null,"Sentence-style capitalization makes it easy for readers to distinguish between\ncommon nouns and proper nouns, and is generally considered the quickest form to\nread."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Do not capitalize the names of features and components unless they are sold\nseparately or are trademarked."),(0,o.kt)("cite",null,"- The IBM Style Guide: Conventions for Writers and Editors")),(0,o.kt)("p",null,"Carbon does not consider UI elements within a product to be proper nouns. Nor\ndoes Carbon support a concept of “important words” or “specialness”. Determining\nwhether something is important or special is highly subjective and can result in\ninconsistencies across an organization."),(0,o.kt)("p",null,"Unless the name is a product or service name, or is trademarked, always use\nsentence-style capitalization."),(0,o.kt)("p",null,"In the following examples, the capitalization shows that Padlock, Visual\nRecognition, and IBM Cloud are either products or services."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{text:"Secure your enterprise applications with Padlock.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{text:"Visual Recognition is a service on IBM Cloud.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("h3",null,"Do not use title case capitalization"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Title (or headline) case capitalization")," is where the first letter of most\nwords is capitalized, but not articles, conjunctions, or prepositions (except if\nany of these are the first or last word in the sentence or phrase)."),(0,o.kt)("p",null,"Title case is difficult to implement consistently across an organization\nbecause:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It requires everyone who writes any copy to understand and follow fairly\ncomplex grammatical rules about which words should and shouldn’t be\ncapitalized, and")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It relies on a subjective viewpoint of what is considered “important” or\n“special” and that viewpoint being communicated or understood somehow."))),(0,o.kt)("p",null,"Title case can also slow reading and comprehension down as it is more difficult\nfor readers to distinguish between proper nouns and common nouns."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{text:"Secure your enterprise applications with Padlock.",caption:"Only capitalize proper nouns, such as product names.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",text:"Secure your Enterprise Applications with Padlock.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("h3",null,"Do not use all caps capitalization"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All caps (or uppercase) capitalization")," is where every letter is capitalized."),(0,o.kt)("p",null,"All caps capitalization has been shown to be slower to read (especially when\ntext is more than a few words) as individual letter shapes are less\ndistinguishable from each other—they are the same height and have no ascenders\nor descenders. This style also typically requires more space in the UI per\nletter than sentence case does."),(0,o.kt)("p",null,"In addition, it can be difficult for the reader to distinguish between proper\nnouns and common nouns. In the first example below, it’s easy to distinguish\nproduct names from features whereas it takes longer to make these distinctions\nwhen the text is in all caps."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{text:"Get started with Watson Studio to build, test, and deploy your own custom models to iOS.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",text:"GET STARTED WITH WATSON STUDIO TO BUILD, TEST, AND DEPLOY YOU OWN CUSTOM MODELS TO IOS.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("h3",null,"When to use capital letters"),(0,o.kt)("p",null,"Capital letters are reserved for the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"“Carbon” or the “Carbon Design System” (the name of IBM’s official design\nsystem)"),(0,o.kt)("li",{parentName:"ul"},"“IBM” or any other company or organization name"),(0,o.kt)("li",{parentName:"ul"},"Any official, trademarked product or service (whether from IBM or not) -\nunless they intentionally use a lowercase letter at the beginning, such as the\niPhone"),(0,o.kt)("li",{parentName:"ul"},"Any initialisms (for example, BBC, HTML) or acronyms (for example, NASA, NATO)"),(0,o.kt)("li",{parentName:"ul"},"Any people"),(0,o.kt)("li",{parentName:"ul"},"Any country / place names"),(0,o.kt)("li",{parentName:"ul"},"When referring to any UI labels that are themselves capitalized"),(0,o.kt)("li",{parentName:"ul"},"When the word begins a sentence or phrase")),(0,o.kt)("p",null,"If it’s not in the list above, it should not be capitalized."),(0,o.kt)("p",null,"Sometimes official company and product names use non-standard capitalization. If\nyou refer to any of these, ensure you write them accurately. Here are some\nexamples (all written correctly):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"developerWorks"),(0,o.kt)("li",{parentName:"ul"},"GitHub"),(0,o.kt)("li",{parentName:"ul"},"iTunes"),(0,o.kt)("li",{parentName:"ul"},"JavaScript"),(0,o.kt)("li",{parentName:"ul"},"WebSphere")),(0,o.kt)("h3",null,"How to refer to UI elements"),(0,o.kt)("p",null,"When writing about a UI element, use the same capitalization as used in the UI.\nFor example, if an input field is labeled “Name” then you refer to this as the\nName input field. Similarly, if a drop-down menu has the label “Country” next to\nit, then it is correct to refer to the Country drop-down menu. Where a product\npage is titled “My network”, you refer to this in writing as follows: “Enter\nyour network information in the My network page”."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{text:"To enter network information, go to the My network page.",caption:"How to refer to UI elements in text",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",text:"To enter network information, go to the My Network page.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("h3",null,"Capitalizing proper nouns"),(0,o.kt)("p",null,"The names of people, places, and products are proper nouns and therefore all\ntake initial capitals. Examples of proper nouns are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Eliot Noyes"),(0,o.kt)("li",{parentName:"ul"},"IBM Watson Studio"),(0,o.kt)("li",{parentName:"ul"},"Paris, France"),(0,o.kt)("li",{parentName:"ul"},"Porsche Boxster")),(0,o.kt)("p",null,"There are many words that can act as either a common noun or a proper noun,\ndepending on the context. So, you always need to think about how the word is\nbeing used. Here are some examples:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Word"),(0,o.kt)("th",{parentName:"tr",align:null},"Used as a common noun"),(0,o.kt)("th",{parentName:"tr",align:null},"Used as a proper noun"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"agile"),(0,o.kt)("td",{parentName:"tr",align:null},"The group uses agile tools and processes"),(0,o.kt)("td",{parentName:"tr",align:null},"Debs referred her manager to the Agile Manifesto")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"design"),(0,o.kt)("td",{parentName:"tr",align:null},"Jodi works in the design organization"),(0,o.kt)("td",{parentName:"tr",align:null},"Jodi works for IBM Design")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"editor"),(0,o.kt)("td",{parentName:"tr",align:null},"Joe used a text editor to update the config file"),(0,o.kt)("td",{parentName:"tr",align:null},"Joe used IBM Flow Editor to define his data models")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"front end developer"),(0,o.kt)("td",{parentName:"tr",align:null},"Jane is hoping to recruit a front end developer"),(0,o.kt)("td",{parentName:"tr",align:null},"Megan’s job title is Senior Front End Developer")))),(0,o.kt)("h3",null,"Capitalizing abbreviations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IBM product and service names")),(0,o.kt)("p",null,"When referencing the name of any IBM product, use the official (full) name, not\nan abbreviation or just the product name initials, unless a shortened name has\nbeen specifically approved, as with IBM CICS."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{text:"Experience WebSphere Application Server on IBM Cloud...",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",text:"Experience WAS on IBM Cloud...",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("p",null,"Use all uppercase letters for well-recognized abbreviations. This applies to\nboth initialisms, such as IBM, and to acronyms, such as GIF."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ASCII"),(0,o.kt)("li",{parentName:"ul"},"CAPTCHA"),(0,o.kt)("li",{parentName:"ul"},"FAQ"),(0,o.kt)("li",{parentName:"ul"},"HTML"),(0,o.kt)("li",{parentName:"ul"},"OK (not Ok or Okay)"),(0,o.kt)("li",{parentName:"ul"},"WDSL")),(0,o.kt)("p",null,"If there’s a chance that an abbreviation might not be known to the target\naudience, it’s good practice to spell it out in full the first time you use it.\nHowever, don’t spell out commonly known abbreviations, for example PDF, CEO,\nAM/PM."),(0,o.kt)("h3",null,"Capitalizing all other words"),(0,o.kt)("p",null,"Unless the word begins a sentence, phrase, or UI element name, don’t give it a\ncapital letter."),(0,o.kt)("p",null,"Don’t give a word a capital letter to denote “specialness”. If you want to\nemphasize a particular word or phrase within a sentence, use italic or bold\nformatting (but not both)."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{text:"You can use a global policy to apply changes to all users.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",text:"You can use a Global Policy to apply changes to all users.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("h2",null,"Simple writing"),(0,o.kt)("h3",null,"Use simple words and sentences"),(0,o.kt)("p",null,"Use the simplest term that is appropriate for your audience. For example, use\nlarge instead of voluminous, and use small instead of diminutive."),(0,o.kt)("p",null,"Be succinct, and keep sentences as short and simple as possible. Omit wordy or\nredundant phrases."),(0,o.kt)("p",null,"TIP: Create a terminology list of words for your product that includes preferred\nwords and words not to use. This simple tool can help with consistency over\ntime, especially if multiple are writing copy."),(0,o.kt)("p",null,"Respect a user’s time and make things quick and easy to read. Always trim back\nto as few words as possible, although don’t be terse."),(0,o.kt)("p",null,"We recommend avoiding terms of politeness such as ",(0,o.kt)("em",{parentName:"p"},"please")," and ",(0,o.kt)("em",{parentName:"p"},"thank you")," in a\nUI as they can be inappropriate or offensive in some cultural contexts."),(0,o.kt)("h3",null,"Use simple present tense"),(0,o.kt)("p",null,"Use simple verbs and tenses, and keep sentences concise, simple, friendly, and\npunchy. Focus on the user’s context and make content relevant. The more familiar\nyou are with their context, the better you can communicate without using a lot\nof words."),(0,o.kt)("p",null,"If you need to use past or future tense, avoid verb tenses with the words have,\nhas, had, been, should, would, and will."),(0,o.kt)("h2",null,"Conversational style"),(0,o.kt)("p",null,"To set the appropriate tone and conversation level, it helps to imagine the user\nengaging with the product as if in a conversation. The interplay between words,\nimagery, and interactions forms the conversation, a back-and-forth that takes\nplace on the glass, between the user and the product."),(0,o.kt)("p",null,"The conversational level is determined by where the user is in the journey, and\nthe task they are performing at that time. The most conversational content is\nusually found in the “discover, try, and buy” phases of the journey. Probably\nthe least conversational content can be found in error messages where an economy\nof words is desirable."),(0,o.kt)("p",null,"Whatever the conversational level, the writing should always be simple, clear,\nand easy to understand. And keep the tone friendly, human, and inviting. Use\neveryday language, not jargon. And choose short words to make the reading\nfaster, rather than long impressive-sounding words. Put the thesaurus away!"),(0,o.kt)("p",null,"IBM Style offers more guidelines on\n",(0,o.kt)("a",{parentName:"p",href:"https://www-03preprod.ibm.com/support/knowledgecenter/ibm_style/conversational-style.html"},"conversational style"),"."),(0,o.kt)("h3",null,"Formal versus casual tone"),(0,o.kt)("p",null,"While a more formal tone is often appropriate for technical and business\nwriting, a more casual tone is becoming increasingly accepted (and expected) in\nUI and supporting materials."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Don’t be afraid to use ",(0,o.kt)("strong",{parentName:"li"},"contractions")," when they fit the context and improve\nthe flow."),(0,o.kt)("li",{parentName:"ul"},"Beginning sentences with ",(0,o.kt)("strong",{parentName:"li"},"and"),", ",(0,o.kt)("strong",{parentName:"li"},"but"),", or ",(0,o.kt)("strong",{parentName:"li"},"so")," is not always forbidden.\nWhen it allows for shorter scannable sentences they can be used, but do not\noveruse these devices."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("strong",{parentName:"li"},"exclamation marks")," only positively, not negatively. Make sure you use\nno more than one exclamation mark in a context, such as a single window or a\nsingle Docs topic.")),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{caption:"Do use exclamation points for positive messages.",text:"Your IBM Cloud account is ready!",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",caption:"Don’t use exclamation points for negative messages",text:"You have reached your usage limit!!",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("h4",null,"Terms of politeness"),(0,o.kt)("p",null,"Often overused, these terms can convey the wrong tone for technical material,\nand are not regarded the same way in all cultures. Use terms such as “please”\nand “thank you” carefully."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{caption:"Do use terms of politeness in a UI only when the user is being inconvenienced.",text:"Indexing might take a few minutes. Please wait.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",caption:"Don’t use terms of politeness superfluously.",text:"Please create a subscription account to get full access to the catalog.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("h3",null,"Can, may, and might"),(0,o.kt)("h4",null,"Terms of ability"),(0,o.kt)("p",null,"These terms are often misused. Remember, “can” implies ability, and “may”\nimplies permission (and sometimes uncertainty)."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{caption:"Do use ‘can’ to express ability.",text:"You can use the command line interface to update your app.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",caption:"Don’t use ‘may’ when you mean ‘can.’",text:"You may use the command line interface to update your app.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("h4",null,"Terms of possibility"),(0,o.kt)("p",null,"These terms can also be confusing. Remember, when either “may” or “might” will\nwork, generally go with “might” to avoid confusion with the multiple meanings of\n“may”."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{caption:"Do use ‘might’ to clarify possibility.",text:"You might need more advanced features when integrating with another app.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",caption:"Don’t use ‘may’ when ‘might’ will work.",text:"You may need more advanced features when integrating with another app.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("h2",null,"Inclusive language"),(0,o.kt)("p",null,"IBM is committed to eliminating language that supports racial, cultural, or\ngender bias. It is critical that all words used in any capacity in product\nofferings be inclusive in their language."),(0,o.kt)("p",null,"IBMers who are unsure about a particular word can search the\n",(0,o.kt)("a",{parentName:"p",href:"http://ibm.biz/termsearch"},"IBM Terminology database"),", and can\nalso ",(0,o.kt)("a",{parentName:"p",href:"http://tlwi.w3-969.ibm.com/standards/terminology/feedbackform2.html"},"submit a term for review"),"."),(0,o.kt)("p",null,"For more information about this important work, see\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://w3.ibm.com/w3publisher/inclusive-it-terminology/take-action"},"Inclusive IT Terminology")," site."),(0,o.kt)("h2",null,"Pronouns"),(0,o.kt)("p",null,"Use the second person (you, your) as often as possible."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{text:"You can customize the access role for this connection.",caption:"Second person is friendlier and more engaging.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{text:"Try adjusting your search or filter options to find what you're looking for.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("p",null,"You can use first person in headings or labels that are very specific to the\nuser or customer data, for example “My account” or “My usage.” However, in\nexplanatory text for the heading or label, switch to second person. For example,\n“Your usage is calculated from the first day of the month.”"),(0,o.kt)("p",null,"Where appropriate, use first person (we, our) to refer to IBM. For example, in\nrequests for personal information, such as name and email address, where the\nuser will benefit from knowing why IBM is asking for this information. Example:\n“Why do we need your email address?”"),(0,o.kt)("p",null,"Avoid third-person pronouns that are gender specific."),(0,o.kt)("p",null,"For more detailed guidance about pronouns, refer to the\n",(0,o.kt)("a",{parentName:"p",href:"https://www-03preprod.ibm.com/support/knowledgecenter/ibm_style/pronouns.html"},"Pronouns"),"\ntopic in IBM Style."),(0,o.kt)("h2",null,"Active and passive voice"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"active voice")," is direct and emphasizes the subject of the sentence. The\nsubject clearly “acts upon” the verb (hence, “active”). For example, “John ate\nthe apple”. In situations where either voice will work, generally choose the\nactive voice for more directness."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{caption:"Do use active voice when appropriate.",text:"Next, the admin configures access privileges.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",caption:"Don’t use passive voice when active voice will suffice.",text:"Next, access privileges are configured by the admin.",aspectRatio:"1:1",mdxType:"DoDont"})),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"passive voice"),", on the other hand, flips the construction so that the\nsubject is secondary to the verb and object (hence, “passive”). Often, the\nsubject is not even included in the sentence. For example, “",(0,o.kt)("em",{parentName:"p"},"The apple was eaten\nby John"),"” or just “",(0,o.kt)("em",{parentName:"p"},"The apple was eaten"),"”. Only sentences that contain direct\nobjects can be constructed in the passive voice. Thus, “",(0,o.kt)("em",{parentName:"p"},"John ate"),"” cannot be\nconstructed passively."),(0,o.kt)("p",null,"The passive voice makes for a more natural tone in certain use cases. For\nexample, if the true subject of the sentence is a system, and the human is\nsecondary, passive voice can be acceptable."),(0,o.kt)(k,{mdxType:"DoDontRow"},(0,o.kt)(y,{caption:"Do use passive voice when appropriate.",text:"The database needs to be rebooted.",aspectRatio:"1:1",mdxType:"DoDont"}),(0,o.kt)(y,{type:"dont",caption:"Don’t use active voice when passive voice is more appropriate.",text:"Someone needs to reboot the database.",aspectRatio:"1:1",mdxType:"DoDont"})))}w.isMDXComponent=!0}}]);