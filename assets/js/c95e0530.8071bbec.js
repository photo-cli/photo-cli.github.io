"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||s;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:5},a="Settings",i={unversionedId:"commands-verbs/settings",id:"commands-verbs/settings",title:"Settings",description:"List, save and get settings.",source:"@site/docs/commands-verbs/settings.md",sourceDirName:"commands-verbs",slug:"/commands-verbs/settings",permalink:"/docs/commands-verbs/settings",draft:!1,editUrl:"https://github.com/photo-cli/photo-cli.github.io/tree/main/docs/commands-verbs/settings.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Address",permalink:"/docs/commands-verbs/address"},next:{title:"Command Line Arguments",permalink:"/docs/command-line-arguments"}},l={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"settings"},"Settings"),(0,o.kt)("p",null,"List, save and get settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"photo-cli help settings\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -k, --key      (Optional) Setting property name to change.\n\n  -v, --value    (Optional) Setting value to set.\n\n  -r, --reset    (Optional) Reset all settings value to default ones. (no extra parameter needed)\n\n  --help         Display this help screen.\n\n  --version      Display version information.\n\nNOTES:\n- Instead of option names (for ex: DateTimeWithMinutes), you may use options values too. (for ex: 3)\n- You can use relative folder paths. If you use input folder as working directory, you don't need to use input argument.\n\nEXAMPLE USAGES:\n- List all settings\n\nExample with long argument names;\nphoto-cli settings\n\nExample with short argument names;\nphoto-cli settings\n\n- Get a setting\n\nExample with long argument names;\nphoto-cli settings --key YearFormat\n\nExample with short argument names;\nphoto-cli settings -k YearFormat\n\n- Save a setting\n\nExample with long argument names;\nphoto-cli settings --key YearFormat --value yyyy\n\nExample with short argument names;\nphoto-cli settings -k YearFormat -v yyyy\n\n- Reset all settings\n\nExample with long argument names;\nphoto-cli settings --reset\n\nExample with short argument names;\nphoto-cli settings -r\n")))}m.isMDXComponent=!0}}]);