(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"0oBi":function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},a.useDarkMode=function(){var e=o.default.useState(!1),a=(0,c.default)(e,2),t=a[0],n=a[1];return(0,s.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),a=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),function(){e.removeListener(a)}}),[]),t};var c=n(t("nxTg")),o=n(t("mXGw")),s=n(t("YO29"))},"63Ad":function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t("RiSW")),o=n(t("mXGw")),s=n(t("9fEB")),m=t("GDok"),d=t("nZpd"),r=t("AFBu"),p=t("0oBi");a.default=function(){return function(e){var a=e.children,t=(0,c.default)(e,["children"]),n=o.default.useState(!1);o.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var l=(0,p.useDarkMode)();return o.default.createElement(d.MobileMenuContext.Provider,{value:t.menuState||n},o.default.createElement(s.default,null,o.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,r.formatPath)(l?"favicon-dark.png":"favicon.png")})),o.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},o.default.createElement(m.NavBar,{sections:["docs","blog"],hasHomePage:!0}),a))}}},AFBu:function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.formatPath=function(e){return c.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))};var c=n(t("R8iU"))},C3pV:function(e,a,t){"use strict";(function(e){var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.Sidebar=a.SidebarActiveItem=void 0;var c=n(t("OvAC")),o=n(t("RiSW")),s=n(t("nxTg")),m=n(t("mXGw")),d=n(t("5dyF")),r=n(t("9fEB")),p=n(t("R8iU")),l=n(t("PDtE")),u=t("/FXl"),i=t("bBV7"),b=t("nZpd"),O=t("AFBu");function j(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?j(Object(t),!0).forEach((function(a){(0,c.default)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var x=m.default.createContext({pathname:"",sidebarFileLocation:""});a.SidebarActiveItem=x;var f=function(e){var a=e.href,t=e.children,n=m.default.useContext(x),c=(0,u.useMDXComponents)().SidebarLink,o=p.default.join("/auto",n.sidebarFileLocation,a),s=a;return n.sidebarFileLocation&&((s=o).endsWith("/index")&&(s=s.replace("/index","")),s.endsWith("/")&&(s=s.slice(0,-1))),m.default.createElement(d.default,{passHref:!0,href:s},m.default.createElement(c,{isActive:n.pathname.replace("/index","")===s},t))};a.Sidebar=function(a){var n=a.links,c=a.folder,d=m.default.useContext(b.MobileMenuContext),j=(0,s.default)(d,1)[0],k="/".concat(c),g=function(e){try{return t("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(a){try{return t("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(a){}}}(k),h=function(a){var t=(0,i.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&t.pathname.includes("/auto")?p.default.relative("/auto",t.pathname):p.default.relative("/",t.pathname),c=a.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return c||(c=a.find((function(e){var a=e.__resourcePath.replace(".mdx","");return a.endsWith("index")&&t.pathname.includes(a.replace("/index",""))}))),{title:c.title||"auto",pathname:(0,O.formatPath)(c.__resourcePath)}}(n),v=(0,u.useMDXComponents)(),E=v.SidebarItemWrapper,y=(v.SidebarLink,v.SidebarTitle),w=v.SidebarDivider,_=v.SidebarList,M=v.Sidebar,P=(0,o.default)(v,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return m.default.createElement(x.Provider,{value:N({},h,{sidebarFileLocation:g?k:""})},m.default.createElement(u.MDXProvider,{components:N({},P,{li:E,ul:_,a:f,p:y,hr:w})},m.default.createElement(r.default,null,m.default.createElement("title",null,h.title.replace(/\\`/g,"`"))),m.default.createElement(M,{className:(0,l.default)(!j&&"hidden","lg:block")},g?m.default.createElement(g,null):m.default.createElement(_,null,n.map((function(e){return m.default.createElement(E,{key:e.__resourcePath},m.default.createElement(f,{href:(0,O.formatPath)(e.__resourcePath)},e.title))}))))))}}).call(this,t("5IsQ"))},Dz1l:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/s3",function(){return t("IJF1")}])},GDok:function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.NavBar=void 0;var c=n(t("nxTg")),o=n(t("8VmE")),s=n(t("RiSW")),m=n(t("mXGw")),d=n(t("5dyF")),r=t("V5Fo"),p=t("/FXl"),l=n(t("PDtE")),u=t("AFBu"),i=t("nZpd"),b=function(e){var a=e.className,t=(0,s.default)(e,["className"]);return m.default.createElement("svg",(0,o.default)({className:(0,l.default)("fill-current w-5 h-5",a),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),m.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},O=function(){var e=(0,p.useMDXComponents)().SearchInput;return m.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},m.default.createElement(e,null))};a.NavBar=function(e){var a=e.sections,t=e.hasHomePage,n=m.default.useContext(i.MobileMenuContext),o=(0,c.default)(n,2),s=o[0],l=o[1],j=(0,p.useMDXComponents)(),N=j.Logo,x=j.NavBarWrapper,f=j.NavBar,k=j.NavBarItem,g=j.MobileMenuButton;return m.default.createElement(m.default.Fragment,null,m.default.createElement(x,null,m.default.createElement(f,null,t?m.default.createElement(d.default,{passHref:!0,href:"/"},m.default.createElement(N,null)):m.default.createElement(N,null),m.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},m.default.createElement(O,null),m.default.createElement(g,{open:s,setOpen:l,className:"lg:hidden"}),m.default.createElement("div",{className:"hidden lg:flex h-full"},a.map((function(e){return m.default.createElement(d.default,{passHref:!0,key:e,href:(0,u.formatPath)("/".concat(e))},m.default.createElement(k,null,(0,r.titleCase)(e)))})),m.default.createElement(k,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},m.default.createElement(b,null)))))),s&&m.default.createElement("div",{className:"lg:hidden"},a.map((function(e){return m.default.createElement(d.default,{passHref:!0,key:e,href:(0,u.formatPath)("/".concat(e))},m.default.createElement(k,null,(0,r.titleCase)(e)))})),m.default.createElement(k,{href:"https://github.com/intuit/auto",target:"_blank"},m.default.createElement(b,{className:"mr-2"}),"Open on GitHub")))}},IJF1:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t("Fcif"),c=t("dV/x"),o=t("mXGw"),s=t.n(o),m=t("/FXl"),d=t("pu0P"),r=t.n(d);for(var p in d)["default","default"].indexOf(p)<0&&function(e){t.d(a,e,(function(){return d[e]}))}(p);s.a.createElement;var l={},u=r()({title:"S3 Plugin",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/generated/s3.mdx",__scans:{}});function i(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(m.mdx)(u,Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Post your built artifacts to s3."),Object(m.mdx)("h2",{id:"prerequisites"},Object(m.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#prerequisites"}),"Prerequisites")),Object(m.mdx)("p",null,"Must have the ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/index.html"}),"aws-cli")," on your machine and all of the following environment variables set:"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"AWS_SECRET_KEY")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"AWS_SESSION_TOKEN"))),Object(m.mdx)("h2",{id:"installation"},Object(m.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(m.mdx)("p",null,"This plugin is not included with the ",Object(m.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(m.mdx)("pre",{className:"language-bash"},Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," i --save-dev @auto-it/s3\n",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# or"),"\n",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"yarn")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"add")," -D @auto-it/s3\n")),Object(m.mdx)("h2",{id:"usage"},Object(m.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(m.mdx)("p",null,"Publish a single asset to s3."),Object(m.mdx)("p",null,Object(m.mdx)("inlineCode",{parentName:"p"},"bucket"),": Bucket to deploy to\n",Object(m.mdx)("inlineCode",{parentName:"p"},"region"),": Region to deploy to\n",Object(m.mdx)("inlineCode",{parentName:"p"},"files"),": An array of tuples mapping local build files to remote deploy paths."),Object(m.mdx)("pre",{className:"language-txt"},Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-txt"}),'EX:\n\ngiven: `[["components/button/dist", "components/button"]]`\n\n=> Deploy the files in "components/button/dist" to s3://bucket/components/button on `region`\n')),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Full"),":"),Object(m.mdx)("pre",{className:"language-json"},Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"s3"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"bucket"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"BUCKET_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"region"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"REGION_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"files"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/button/dist"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/button"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// other plugins"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(m.mdx)("h3",{id:"versioning-deploys"},Object(m.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#versioning-deploys"}),"Versioning Deploys")),Object(m.mdx)("p",null,"To version your deployed assets simply add ",Object(m.mdx)("inlineCode",{parentName:"p"},"$VERSION")," in the ",Object(m.mdx)("inlineCode",{parentName:"p"},"remote")," path. This will be replaced with the new version being released."),Object(m.mdx)("pre",{className:"language-json"},Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"s3"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"bucket"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"BUCKET_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"region"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"REGION_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"files"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/button/dist"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"$VERSION/components/button"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// other plugins"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(m.mdx)("h3",{id:"multiple-files"},Object(m.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#multiple-files"}),"Multiple Files")),Object(m.mdx)("p",null,"Publish multiple assets to s3."),Object(m.mdx)("pre",{className:"language-json"},Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"s3"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"bucket"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"BUCKET_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"region"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"REGION_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"files"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n          ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/button/dist"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/button"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/card/dist"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/card"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/select/dist"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/select"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(m.mdx)("h3",{id:"multiple-buckets"},Object(m.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#multiple-buckets"}),"Multiple Buckets")),Object(m.mdx)("p",null,"Publish assets to multiple s3 buckets."),Object(m.mdx)("pre",{className:"language-json"},Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"s3"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"bucket"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"BUCKET_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"region"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"REGION_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"files"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/button/dist"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/button"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"bucket"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"ANOTHER_BUCKET_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"region"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"REGION_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n          ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"files"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/card/dist"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"components/card"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(m.mdx)("h3",{id:"overwrite"},Object(m.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#overwrite"}),"Overwrite")),Object(m.mdx)("p",null,"By default this plugin will overwrite any bucket path you give it. To prevent it from overwriting your bucket path if it already exists set ",Object(m.mdx)("inlineCode",{parentName:"p"},"overwrite")," to false"),Object(m.mdx)("pre",{className:"language-json"},Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"plugins"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"s3"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"bucket"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"BUCKET_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"region"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"REGION_NAME"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"overwrite"'),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"false"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ...\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}i.isMDXComponent=!0},nZpd:function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.MobileMenuContext=void 0;var c=n(t("mXGw")).default.createContext([!1,function(){}]);a.MobileMenuContext=c},pu0P:function(e,a,t){"use strict";var n=t("63Ad");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t("nxTg")),o=n(t("mXGw")),s=n(t("R8iU")),m=t("/FXl"),d=n(t("PDtE")),r=t("C3pV"),p=n(t("6f/q")),l=n(t("x3GE")),u=(0,p.default)(),i=/([^`]*)`([^`]*)`(.*)/m;a.default=function(e){return function(a){var t=a.children,n=o.default.useState(!1),p=(0,c.default)(n,2),b=p[0],O=p[1],j=(0,m.useMDXComponents)(),N=e.__resourcePath.split("/")[0],x=(0,l.default)(),f=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return s.default.relative("./",e)})).filter((function(e){return e.startsWith(N)})).map((function(e){return x.find((function(a){return a.__resourcePath===e}))}));return o.default.createElement(u,{menuState:[b,O]},o.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},o.default.createElement(r.Sidebar,{links:f,folder:N}),o.default.createElement("main",{className:(0,d.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",b&&"hidden")},o.default.createElement(j.h1,null,function(e,a){if(a){for(var t=[],n=a.replace(/\\`/g,"`");i.test(n);){var s=n.match(i),m=(0,c.default)(s,4),d=m[1],r=m[2],p=m[3];t.push(d),t.push(o.default.createElement(e.inlineCode,null,r)),n=p}return t.push(n),o.default.createElement("div",null,t)}}(j,e.title)),t)))}}},x3GE:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t("jmz1");a.default=function(){try{return n.keys().map(n)}catch(e){return[]}}}},[["Dz1l",0,1,2,3,4]]]);