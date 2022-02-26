(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),c=(r(0),r(314)),o={id:"release-summary",title:"Release Summary"},l={id:"release-summary",title:"Release Summary",description:"## Versioning",source:"@site/../docs/release-summary.md",permalink:"/docs/release-summary",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/release-summary.md",lastUpdatedBy:"Rodrigo Cebri\xe1n Gonz\xe1lez",lastUpdatedAt:1645153740,sidebar:"docs",previous:{title:"Swagger Codegen Fork: Q&A",permalink:"/docs/fork-qna"},next:{title:"Release Notes: 3.0.0",permalink:"/docs/release-3-0-0"}},i=[{value:"Versioning",id:"versioning",children:[]},{value:"Cadence",id:"cadence",children:[]}],b={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"versioning"},"Versioning"),Object(c.b)("p",null,"We version artifacts in the common ",Object(c.b)("inlineCode",{parentName:"p"},"major.minor.patch")," strategy."),Object(c.b)("p",null,"We decided versions should be incremented according to the following rules. The examples provided below are not exhaustive."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Part"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Breaking Changes?"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Rule"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Examples"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"major"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"YES"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"breaking changes without fallback"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("ul",null,Object(c.b)("li",null,"New Features"),Object(c.b)("li",null,"Large refactors"),Object(c.b)("li",null,"Removal of deprecated code"),Object(c.b)("li",null,"Changes to coding interfaces"),Object(c.b)("li",null,"Large changes to template bound variables")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"minor"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ALLOWED"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"breaking changes with fallback"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("ul",null,Object(c.b)("li",null,"Adding new generator behavior which doesn't affect custom templates (or does, with config option for old behavior)"),Object(c.b)("li",null,"Changing generator templates in a way in which switching to custom templates results in old behavior"),Object(c.b)("li",null,"Introducing deprecated methods in generators or other shared code")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"patch"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"NO"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"new features without breaking changes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.b)("ul",null,Object(c.b)("li",null,"New generators"),Object(c.b)("li",null,"Bug fixes in template or generators")))))),Object(c.b)("h2",{id:"cadence"},"Cadence"),Object(c.b)("p",null,"For patch release (e.g. 3.0.5 to 3.0.6), we plan to do it on a ",Object(c.b)("em",{parentName:"p"},"weekly basis"),"."),Object(c.b)("p",null,"For minor release (e.g. 3.1.6 to 3.2.0), we plan to do it on a ",Object(c.b)("em",{parentName:"p"},"monthly basis"),"."),Object(c.b)("p",null,"For major releases (e.g. 3.3.6 to 4.0.0), we plan to do it on a ",Object(c.b)("em",{parentName:"p"},"quarterly basis"),"."))}p.isMDXComponent=!0},314:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return r?a.a.createElement(m,l({ref:t},b,{components:r})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);