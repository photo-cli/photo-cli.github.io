"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="4. Naming With Address, Date in Same Folder Hierarchy",s={unversionedId:"usages/naming-with-address-date-in-same-folder-hierarchy",id:"usages/naming-with-address-date-in-same-folder-hierarchy",title:"4. Naming With Address, Date in Same Folder Hierarchy",description:"Preserve same folder hierarchy, copy photos with a file name as photo taken date, time and address. Possible file name will have number suffix. Photos that don't have any coordinate or photo taken date will be copied in a relative subfolder.",source:"@site/docs/usages/naming-with-address-date-in-same-folder-hierarchy.md",sourceDirName:"usages",slug:"/usages/naming-with-address-date-in-same-folder-hierarchy",permalink:"/docs/usages/naming-with-address-date-in-same-folder-hierarchy",draft:!1,editUrl:"https://github.com/photo-cli/photo-cli.github.io/tree/main/docs/usages/naming-with-address-date-in-same-folder-hierarchy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. Folders Prefixed With Date Range, Names as Address & Date",permalink:"/docs/usages/folders-prefixed-with-date-range-names-as-address-date"},next:{title:"5. Grouped Into Country/City/Town Folders, Names as Taken Date and Address",permalink:"/docs/usages/grouped-into-country-city-town-folders-names-as-taken-date-and-address"}},l={},d=[],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"4-naming-with-address-date-in-same-folder-hierarchy"},"4. Naming With Address, Date in Same Folder Hierarchy"),(0,a.kt)("p",null,"Preserve same folder hierarchy, copy photos with a file name as photo taken date, time and address. Possible file name will have number suffix. Photos that don't have any coordinate or photo taken date will be copied in a relative subfolder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli copy --process-type SubFoldersPreserveFolderHierarchy --naming-style AddressDateTimeWithSeconds  --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city town suburb --number-style AllNamesAreSameLength --no-taken-date InSubFolder --no-coordinate InSubFolder --input photos --output organized-albums\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Original Folder Hierarchy"),(0,a.kt)("th",null,"After ",(0,a.kt)("b",null,(0,a.kt)("i",null,"photo-cli")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("p",null,"\u251c\u2500\u2500 DSC",(0,a.kt)("em",{parentName:"p"},"5727.jpg\n\u251c\u2500\u2500 GOPR6742.jpg\n\u251c\u2500\u2500 Italy album\n\u2502\xa0\xa0 \u251c\u2500\u2500 DJI_01732.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 DJI_01733.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC00001.JPG\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC03467.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC_1769.JPG\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC_1770.JPG\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC_1770"),"(same).jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 DSC_1771.JPG\n\u2502\xa0\xa0 \u251c\u2500\u2500 GOPR7496.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 GOPR7497.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 IMG_0747.JPG\n\u2502\xa0\xa0 \u2514\u2500\u2500 IMG_2371.jpg\n\u2514\u2500\u2500 Spain Journey\n\u251c\u2500\u2500 DSC_1807.jpg\n\u251c\u2500\u2500 DSC_1808.jpg\n\u2514\u2500\u2500 IMG_5397.jpg"),(0,a.kt)("p",null,"2 directories, 17 files"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("p",null,"\u251c\u2500\u2500 Italy album\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_16.28.39.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_16.29.49.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_16.38.20.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_16.43.21.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_16.44.01.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_16.46.53.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_16.52.15.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_16.55.37.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_17.00.07-1.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Arezzo-2008.10.22_17.00.07-2.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Italia-Firenze-Quartiere 1-2005.12.14_14.39.47.jpg\n\u2502\xa0\xa0 \u2514\u2500\u2500 no-address\n\u2502\xa0\xa0     \u2514\u2500\u2500 IMG_2371.jpg\n\u251c\u2500\u2500 Kenya-2005.08.13_09.47.23.jpg\n\u251c\u2500\u2500 photo-cli-report.csv\n\u251c\u2500\u2500 Spain Journey\n\u2502\xa0\xa0 \u251c\u2500\u2500 Espa\xf1a-Madrid-2015.04.10_20.12.23-1.jpg\n\u2502\xa0\xa0 \u251c\u2500\u2500 Espa\xf1a-Madrid-2015.04.10_20.12.23-2.jpg\n\u2502\xa0\xa0 \u2514\u2500\u2500 no-address-and-no-photo-taken-date\n\u2502\xa0\xa0     \u2514\u2500\u2500 IMG_5397.jpg\n\u2514\u2500\u2500 United Kingdom-Ascot-Sunninghill and Ascot-2012.06.22_19.52.31.jpg"),(0,a.kt)("p",null,"4 directories, 18 files"))))))}c.isMDXComponent=!0}}]);