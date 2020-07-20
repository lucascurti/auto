(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+sNv":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("Fcif"),o=a("dV/x"),c=a("mXGw"),r=a.n(c),s=a("/FXl"),i=a("sQxV"),l=a.n(i);for(var m in i)["default","default"].indexOf(m)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(m);r.a.createElement;var p={},d=l()({image:"https://images.unsplash.com/photo-1566386087068-55645996b234?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1950",title:"npm: More Secure Canary Publishing",author:"Andrew Lisowski",email:"lisowski54@gmail.com",date:"Thu, 12 Mar 2020 23:00:02 -0700",layout:"blog",__resourcePath:"blog/npm-canary-scope.mdx",__scans:{}});function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.mdx)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Publishing canary versions comes with some security risks.\nIf your project is private you have nothing to worry about, but if your project is open source there are some security holes."),Object(s.mdx)("h2",{id:"attack-vectors"},Object(s.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#attack-vectors"}),"Attack Vectors")),Object(s.mdx)("p",null,"Depending on the build platform you might be able to pass secrets to PR builds for forked repos.\nWhile this makes the developer experience of your project nice, in ",Object(s.mdx)("inlineCode",{parentName:"p"},"auto"),"'s case publishing canary versions, it exposes your keys."),Object(s.mdx)("p",null,"An attacker could:"),Object(s.mdx)("ol",null,Object(s.mdx)("li",{parentName:"ol"},"print secrets"),Object(s.mdx)("li",{parentName:"ol"},"send secrets to some server"),Object(s.mdx)("li",{parentName:"ol"},"modify ",Object(s.mdx)("inlineCode",{parentName:"li"},"auto")," to publish to the latest tag instead of ",Object(s.mdx)("inlineCode",{parentName:"li"},"canary"))),Object(s.mdx)("p",null,"No amount of code can fix these problems.\nIf your release keys are in everyone's CI builds an attacker can do any number of things to modify what you intend for ",Object(s.mdx)("inlineCode",{parentName:"p"},"auto")," to do (or any other release method run in the CI)."),Object(s.mdx)("h2",{id:"solution"},Object(s.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#solution"}),"Solution")),Object(s.mdx)("p",null,"The solution for this is actually quite simple:"),Object(s.mdx)("ol",null,Object(s.mdx)("li",{parentName:"ol"},"Create a test scope that you publish canaries under (ex: ",Object(s.mdx)("inlineCode",{parentName:"li"},"@auto-canary")," or ",Object(s.mdx)("inlineCode",{parentName:"li"},"@auto-test"),")"),Object(s.mdx)("li",{parentName:"ol"},"Create a user that only has access to that scope"),Object(s.mdx)("li",{parentName:"ol"},"Set the default ",Object(s.mdx)("inlineCode",{parentName:"li"},"NPM_TOKEN")," to a token that can publish to that scope (this is used for any pull request)"),Object(s.mdx)("li",{parentName:"ol"},"Set up a ",Object(s.mdx)("inlineCode",{parentName:"li"},"secure")," token that is only accessible on the main fork (still named ",Object(s.mdx)("inlineCode",{parentName:"li"},"NPM_TOKEN"),")")),Object(s.mdx)("p",null,"Step 3 might not be possible on your build platform."),Object(s.mdx)("p",null,"The following are the ways the ",Object(s.mdx)("inlineCode",{parentName:"p"},"auto")," team knows how to do it.\nIf you do not see the method for you build platform, please make a pull request!"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://circleci.com/docs/2.0/contexts/"}),"CircleCI Context")," - Contexts provide a mechanism for securing and sharing environment variables across projects. The environment variables are defined as name/value pairs and are injected at runtime.")),Object(s.mdx)("h2",{id:"usage"},Object(s.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(s.mdx)("p",null,"To use this work flow in ",Object(s.mdx)("inlineCode",{parentName:"p"},"auto"),", supply the following configuration to the ",Object(s.mdx)("inlineCode",{parentName:"p"},"npm")," plugin."),Object(s.mdx)("pre",{className:"language-json"},Object(s.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"npm"'),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"canaryScope"'),Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"@auto-canary"'),"\n      ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(s.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(s.mdx)("p",null,"Now when people make pull requests to your repos:"),Object(s.mdx)("ol",null,Object(s.mdx)("li",{parentName:"ol"},"your CI can run ",Object(s.mdx)("inlineCode",{parentName:"li"},"auto shipit")),Object(s.mdx)("li",{parentName:"ol"},"the canary versions will get published under your ",Object(s.mdx)("inlineCode",{parentName:"li"},"canaryScope"))))}u.isMDXComponent=!0},JTf2:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/npm-canary-scope",function(){return a("+sNv")}])}},[["JTf2",0,1,2,3,5]]]);