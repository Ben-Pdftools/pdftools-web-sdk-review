"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3053],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,v=c["".concat(p,".").concat(u)]||c[u]||f[u]||a;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(25773),i=(n(27378),n(35318));const a={id:"Pdf.SaveOptions",title:"Interface: SaveOptions",sidebar_label:"SaveOptions",custom_edit_url:null},l=void 0,o={unversionedId:"web-sdk/api/interfaces/Pdf.SaveOptions",id:"web-sdk/api/interfaces/Pdf.SaveOptions",title:"Interface: SaveOptions",description:"Pdf.SaveOptions",source:"@site/docs/web-sdk/api/interfaces/Pdf.SaveOptions.md",sourceDirName:"web-sdk/api/interfaces",slug:"/web-sdk/api/interfaces/Pdf.SaveOptions",permalink:"/pdftools-web-sdk-review/web-sdk/api/interfaces/Pdf.SaveOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Pdf.SaveOptions",title:"Interface: SaveOptions",sidebar_label:"SaveOptions",custom_edit_url:null},sidebar:"sidebars",previous:{title:"Event",permalink:"/pdftools-web-sdk-review/web-sdk/api/interfaces/Pdf.Event"},next:{title:"LicenseFeature",permalink:"/pdftools-web-sdk-review/web-sdk/api/enums/LicenseFeature"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"annotationFilter",id:"annotationfilter",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"fileType",id:"filetype",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"optionalContentFilter",id:"optionalcontentfilter",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-2",level:4}],s={toc:d},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pdftools-web-sdk-review/web-sdk/api/namespaces/Pdf"},"Pdf"),".SaveOptions"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"annotationfilter"},"annotationFilter"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"annotationFilter"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"Pdf/SaveOptions.ts:13"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"filetype"},"fileType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fileType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"Pdf"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Fdf"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"Pdf/SaveOptions.ts:8"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"optionalcontentfilter"},"optionalContentFilter"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"optionalContentFilter"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"Pdf/SaveOptions.ts:18"))}f.isMDXComponent=!0}}]);