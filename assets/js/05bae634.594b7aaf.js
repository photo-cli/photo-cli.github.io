"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||n;return r?o.createElement(g,i(i({ref:t},d),{},{components:r})):o.createElement(g,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:3},i="3. Understanding Reverse Geocode Response",s={unversionedId:"address-building-reverse-geocoding/understanding-reverse-geocode-response",id:"address-building-reverse-geocoding/understanding-reverse-geocode-response",title:"3. Understanding Reverse Geocode Response",description:"Every reverse geocode provider has its data and they also represent it very differently. The information returned from reverse geocode provider is different or may differ in the level of detail. As there is no way to generalize every reverse geocode provider's response into the same address administrative level, users must understand the response returned from their selected reverse geocode provider.",source:"@site/docs/address-building-reverse-geocoding/understanding-reverse-geocode-response.md",sourceDirName:"address-building-reverse-geocoding",slug:"/address-building-reverse-geocoding/understanding-reverse-geocode-response",permalink:"/docs/address-building-reverse-geocoding/understanding-reverse-geocode-response",draft:!1,editUrl:"https://github.com/photo-cli/photo-cli.github.io/tree/main/docs/address-building-reverse-geocoding/understanding-reverse-geocode-response.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Setting API Key",permalink:"/docs/address-building-reverse-geocoding/setting-api-key"},next:{title:"4. Building Your Own Address With Selected Properties",permalink:"/docs/address-building-reverse-geocoding/building-your-own-address-with-selected-properties"}},p={},l=[{value:"Easy Way To Inspect Reserve Geocode Response",id:"easy-way-to-inspect-reserve-geocode-response",level:4},{value:"Big Data Cloud",id:"big-data-cloud",level:5},{value:"Open Street Map - Nominatim",id:"open-street-map---nominatim",level:5},{value:"Google Maps",id:"google-maps",level:5},{value:"Map Quest",id:"map-quest",level:5},{value:"Location Iq",id:"location-iq",level:5},{value:"Power User Way To Inspect Reserve Geocode Response",id:"power-user-way-to-inspect-reserve-geocode-response",level:4},{value:"Using HTTP Files",id:"using-http-files",level:5},{value:"Using Postman",id:"using-postman",level:5},{value:"Sample Responses",id:"sample-responses",level:5}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-understanding-reverse-geocode-response"},"3. Understanding Reverse Geocode Response"),(0,a.kt)("p",null,"Every reverse geocode provider has its data and they also represent it very differently. The information returned from reverse geocode provider is different or may differ in the level of detail. As there is no way to generalize every reverse geocode provider's response into the same address administrative level, users must understand the response returned from their selected reverse geocode provider."),(0,a.kt)("p",null,"There is two way to understand the reverse geocoding response."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#easy-way-to-inspect-reserve-geocode-response"},"Easy Way To Inspect Reserve Geocode Response")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#power-user-way-to-inspect-reserve-geocode-response"},"Power User Way To Inspect Reserve Geocode Response"))),(0,a.kt)("h4",{id:"easy-way-to-inspect-reserve-geocode-response"},"Easy Way To Inspect Reserve Geocode Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"photo-cli")," has a feature to extract and list the response of each reverse geocode provider. If you are using a reverse geocode provider that needs an API key, first you need to get it from the provider and ",(0,a.kt)("a",{parentName:"p",href:"/docs/settings#setting-a-single-value"},"set API key"),"."),(0,a.kt)("p",null,"Listing Reverse Geocode Response. Ref: ",(0,a.kt)("a",{parentName:"p",href:"/docs/address-building-reverse-geocoding/intro"},"reverse geocode provider command line arguments")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli address --input [input-file.jpg] --reverse-geocode [selected-reverse-geocode-provider]`\n")),(0,a.kt)("p",null,"For example, a photo was taken on An\u0131tkabir(place), \xc7ankaya(town), Ankara(city), Turkey(country) with coordinate as ",(0,a.kt)("inlineCode",{parentName:"p"},"39.925054")," and longitude\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"32.8347552")," (",(0,a.kt)("a",{parentName:"p",href:"https://goo.gl/maps/p5mrL54A2k7PnEQv6"},"Coordinate in Google Maps"),") responses should be like the following."),(0,a.kt)("h5",{id:"big-data-cloud"},"Big Data Cloud"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli address -i DSC_7082.jpg -e 1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AdminLevel2: Turkey\nAdminLevel3: Central Anatolia Region\nAdminLevel4: Ankara Province\nAdminLevel6: \xc7ankaya\nAdminLevel8: Mebusevleri Mahallesi\n")),(0,a.kt)("h5",{id:"open-street-map---nominatim"},"Open Street Map - Nominatim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli address -i DSC_7082.jpg -e 2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CountryCode: tr\nCountry: T\xfcrkiye\nRegion: \u0130\xe7 Anadolu B\xf6lgesi\nProvince: Ankara\nCity: Ankara\nTown: \xc7ankaya\nPostcode: 06430\nSuburb: Y\xfccetepe Mahallesi\nRoad: \u0130lk Sokak\nMilitary: An\u0131tkabir\n")),(0,a.kt)("h5",{id:"google-maps"},"Google Maps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli address -i DSC_7082.jpg -e 3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"plus_code: WRGM+2W\nadministrative_area_level_2: \xc7ankaya\nadministrative_area_level_1: Ankara\ncountry: Turkey\nroute: An\u0131tkabir\nadministrative_area_level_4: Mebusevleri\npostal_code: 06570\nstreet_number: 108\n")),(0,a.kt)("h5",{id:"map-quest"},"Map Quest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli address -i DSC_7082.jpg -e 4\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CountryCode: tr\nCountry: T\xfcrkiye\nCity: Ankara\nPostcode: 06580\nSuburb: Mebusevleri Mahallesi\n")),(0,a.kt)("h5",{id:"location-iq"},"Location Iq"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"photo-cli address -i DSC_7082.jpg -e 5\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CountryCode: tr\nCountry: Turkey\nRegion: Central Anatolia Region\nProvince: Ankara\nCity: Ankara\nTown: \xc7ankaya\nPostcode: 06570\nSuburb: Y\xfccetepe Mahallesi\nRoad: Ata Sokak\nBarracks: An\u0131tkabir\n")),(0,a.kt)("h4",{id:"power-user-way-to-inspect-reserve-geocode-response"},"Power User Way To Inspect Reserve Geocode Response"),(0,a.kt)("p",null,"You should inspect the reverse geocode provider's response with the locations you occasionally take photographs. After getting the response, you can send the properties as an argument of your choice\nof the administrative level you want to build an address for each photograph."),(0,a.kt)("h5",{id:"using-http-files"},"Using HTTP Files"),(0,a.kt)("p",null,"To trigger HTTP files you may use ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," with the extension ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client"},"REST Client")," or any IntelliJ IDE's."),(0,a.kt)("p",null,"You may replace ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ApiKey}}")," in the address with your API key or you can use the IntelliJ environment variable file."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Reverse Geocode Provider"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP File"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/"},"BigDataCloud")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/http/big-data-cloud.http"},"big-data-cloud.http"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://nominatim.org/release-docs/latest/api/Reverse/"},"Open Street Map Foundation - Nominatim")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/http/open-street-map.http"},"open-street-map.http"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developers.google.com/maps/documentation/geocoding/overview/"},"GoogleMaps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/http/google-maps.http"},"google-maps.http"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.mapquest.com/documentation/open/nominatim-search/reverse/"},"MapQuest")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/http/map-quest.http"},"map-quest.http"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://locationiq.com/sandbox/geocoding/reverse/"},"LocationIq")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/http/location-iq.http"},"location-iq.http"))))),(0,a.kt)("h5",{id:"using-postman"},"Using Postman"),(0,a.kt)("p",null,"You may import ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/postman/photo-cli_reverse_geocode.postman_collection.json"},"photo-cli | Reverse Geocode")," collection into ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),"."),(0,a.kt)("p",null,"You should prepare the following environment variables on Postman."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Reverse Geocode Provider"),(0,a.kt)("th",{parentName:"tr",align:null},"Postman Environment Variable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/"},"BigDataCloud")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"BigDataCloud-ApiKey"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://nominatim.org/release-docs/latest/api/Reverse/"},"Open Street Map Foundation - Nominatim")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developers.google.com/maps/documentation/geocoding/overview/"},"GoogleMaps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GoogleMaps-ApiKey"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.mapquest.com/documentation/open/nominatim-search/reverse/"},"MapQuest")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MapQuest-ApiKey"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://locationiq.com/sandbox/geocoding/reverse/"},"LocationIq")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"LocationIq-ApiKey"))))),(0,a.kt)("h5",{id:"sample-responses"},"Sample Responses"),(0,a.kt)("p",null,"Sample responses in JSON format are listed below from each reverse geocode for the coordinate with latitude as ",(0,a.kt)("inlineCode",{parentName:"p"},"39.925054")," and longitude as ",(0,a.kt)("inlineCode",{parentName:"p"},"32.8347552")," (",(0,a.kt)("a",{parentName:"p",href:"https://goo.gl/maps/p5mrL54A2k7PnEQv6"},"Coordinate in Google Maps"),")."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Reverse Geocode Provider"),(0,a.kt)("th",{parentName:"tr",align:null},"Sample Response"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/"},"BigDataCloud")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/sample-responses/big-data-cloud.json"},"big-data-cloud.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://nominatim.org/release-docs/latest/api/Reverse/"},"Open Street Map Foundation - Nominatim")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/sample-responses/open-street-map.json"},"open-street-map.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developers.google.com/maps/documentation/geocoding/overview/"},"GoogleMaps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/sample-responses/google-maps.json"},"google-maps.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.mapquest.com/documentation/open/nominatim-search/reverse/"},"MapQuest")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/sample-responses/map-quest.json"},"map-quest.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://locationiq.com/sandbox/geocoding/reverse/"},"LocationIq")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/sample-responses//location-iq.json"},"location-iq.json"))))))}c.isMDXComponent=!0}}]);