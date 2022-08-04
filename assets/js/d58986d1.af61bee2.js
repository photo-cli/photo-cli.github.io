"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[818],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||s;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<s;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1230:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const s={sidebar_position:4},a="Address",p={unversionedId:"commands-verbs/address",id:"commands-verbs/address",title:"Address",description:"Get address (reverse geocode) of single photo.",source:"@site/docs/commands-verbs/address.md",sourceDirName:"commands-verbs",slug:"/commands-verbs/address",permalink:"/docs/commands-verbs/address",draft:!1,editUrl:"https://github.com/photo-cli/photo-cli.github.io/tree/main/docs/commands-verbs/address.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Copy",permalink:"/docs/commands-verbs/copy"},next:{title:"Settings",permalink:"/docs/commands-verbs/settings"}},i={},l=[],d={toc:l};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"address"},"Address"),(0,r.kt)("p",null,"Get address (reverse geocode) of single photo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"photo-cli help address\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -i, --input                       (Default current executing folder) File system path to read & copy photos from. ( there will be no modification on the input path )\n\n  -e, --reverse-geocode             (Optional) Third-party provider to resolve photo taken address by photo's coordinates. ( Disabled: 0 [default], BigDataCloud: 1, OpenStreetMapFoundation: 2, GoogleMaps: 3, MapQuest: 4, LocationIq: 5 )\n\n  -t, --type                        (MUST) Response list detail level. ( AllAvailableProperties: 0, SelectedProperties: 1, FullResponse: 2 )\n\n  -b, --bigdatacloud-key            (Optional) API key needed to use BigDataCloud. https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/ (Instead of using this option, environment name: PHOTO_CLI_BIG_DATA_CLOUD_API_KEY can be used. )\n\n  -v, --bigdatacloud-levels         (Optional) Admin levels separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full response returned from BigDataCloud. )\n\n  -m, --googlemaps-types            (Optional) GoogleMaps address types separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full response returned from GoogleMaps. )\n\n  -k, --googlemaps-key              (Optional) API key needed to use GoogleMaps. https://developers.google.com/maps/documentation/geocoding/overview/ (Instead of using this option, environment name: PHOTO_CLI_GOOGLE_MAPS_API_KEY can be used. )\n\n  -r, --openstreetmap-properties    (Optional) OpenStreetMap properties separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full response returned from OpenStreetMap provider. )\n\n  -u, --mapquest-key                (Optional) API key needed to use MapQuest. https://developer.mapquest.com/documentation/open/nominatim-search/reverse/ (Instead of using this option, environment name: PHOTO_CLI_MAPQUEST_API_KEY can be used. )\n\n  -q, --locationiq-key              (Optional) API key needed to use LocationIq. https://locationiq.com/docs/ (Instead of using this option, environment name: PHOTO_CLI_LOCATIONIQ_API_KEY can be used. )\n\n  -h, --has-paid-license            (Optional) Bypass rate limit if you have paid license. ( For MapQuest and LocationIq. )\n\n  -l, --language                    (Optional) Language/culture value to get localized address result for BigDataCloud ( https://www.bigdatacloud.com/supported-languages/ ) and GoogleMaps (https://developers.google.com/maps/faq#languagesupport ).\n\n  --help                            Display this help screen.\n\n  --version                         Display version information.\n\nNOTES:\n- Instead of option names (for ex: DateTimeWithMinutes), you may use options values too. (for ex: 3)\n- You can use relative folder paths. If you use the input folder as the working directory, you don't need to use the input argument.\n\nEXAMPLE USAGES:\n- All properties\n\nExample with long argument names;\nphoto-cli address --reverse-geocode OpenStreetMapFoundation --input [photo-path].jpg\n\nExample with short argument names;\nphoto-cli address -e OpenStreetMapFoundation -i [photo-path].jpg\n\n- Selected properties\n\nExample with long argument names;\nphoto-cli address --reverse-geocode OpenStreetMapFoundation --input [photo-path].jpg --openstreetmap-properties country city town suburb --type SelectedProperties\n\nExample with short argument names;\nphoto-cli address -e OpenStreetMapFoundation -i [photo-path].jpg -r country city town suburb -t SelectedProperties\n\n- Show full response\n\nExample with long argument names;\nphoto-cli address --reverse-geocode OpenStreetMapFoundation --input [photo-path].jpg --type FullResponse\n\nExample with short argument names;\nphoto-cli address -e OpenStreetMapFoundation -i [photo-path].jpg -t FullResponse\n")))}c.isMDXComponent=!0}}]);