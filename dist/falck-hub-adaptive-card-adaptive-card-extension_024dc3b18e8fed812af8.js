define("a0f1e9df-2a6a-4bfc-9ae4-a754276edc25_1.0.7",["FalckHubAdaptiveCardAdaptiveCardExtensionStrings","@microsoft/sp-loader","@microsoft/sp-adaptive-card-extension-base","@microsoft/sp-http"],function(n,a,i,r){return function(e){function t(t){for(var n,i,r=t[0],o=t[1],s=0,c=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()()}var n={},a={1:0};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){for(var n=[],o=function(e){return{0:[{i:"f9e737b7-f0df-4597-ba8c-3060f82380db",v:"1.18.2",m:"26ea"}]}[e]||[]}(t),s=0;s<o.length;s++)e[o[s].m]||function(t){n.push(r.SPComponentLoader.loadComponentById(t.i,t.v).then(function(n){e[t.m]=function(e){e.exports=n}}))}(o[s]);var c=a[t];if(0!==c)if(c)n.push(c[2]);else{var d=new Promise(function(e,n){c=a[t]=[e,n]});n.push(c[2]=d);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"chunk."+({0:"FalckHubAdaptiveCard-property-pane"}[e]||e)+"_"+{0:"4c2fa34f167c27c4f855"}[e]+".js"}(t),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous");var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=i("I6O9");i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonpa0f1e9df_2a6a_4bfc_9ae4_a754276edc25_1_0_7=window.webpackJsonpa0f1e9df_2a6a_4bfc_9ae4_a754276edc25_1_0_7||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;return function(){var e,t=document.getElementsByTagName("script"),n=/falck\-hub\-adaptive\-card\-adaptive\-card\-extension_024dc3b18e8fed812af8\.js/i;if(t&&t.length)for(var a=0;a<t.length;a++)if(t[a]){var r=t[a].getAttribute("src");if(r&&r.match(n)){e=r.substring(0,r.lastIndexOf("/")+1);break}}if(!e)for(var o in window.__setWebpackPublicPathLoaderSrcRegistry__)if(o&&o.match(n)){e=o.substring(0,o.lastIndexOf("/")+1);break}i.p=e}(),i(i.s="p4Uz")}({"657h":function(e,t){e.exports=n},I6O9:function(e,t){e.exports=a},jGdz:function(e,t,n){e.exports=n.p+"falck-read_96150fd2d03b6b54b93db1ccbcbf028e.png"},"lz/E":function(e,t){e.exports=i},p4Uz:function(e,t,n){"use strict";n.r(t),n.d(t,"QUICK_VIEW_REGISTRY_ID",function(){return f});var a,i=n("lz/E"),r=(a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{imageUrl:this.properties.imageUrl,title:this.properties.title,primaryText:this.properties.description}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onCardSelection",{get:function(){return{type:"ExternalLink",parameters:{target:this.getLink()}}},enumerable:!1,configurable:!0}),t.prototype.getLink=function(){return'https://teams.microsoft.com/l/entity/e75368a0-9db4-48d8-8dc7-da40898980b8/DeepLinkApp?context={""subEntityId"":""2""}'},t}(i.BaseImageCardView),s=n("vlQI"),c=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),d=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})},l=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},u="FalckHubAdaptiveCard_CARD_VIEW",f="FalckHubAdaptiveCard_QUICK_VIEW",p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.onInit=function(){return this.state={currentIndex:0,imageUrl:"",sharePointList:"",mobileApps:[]},this.cardNavigator.register(u,function(){return new o}),this.fetchData()},Object.defineProperty(t.prototype,"title",{get:function(){return this.properties.title},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"iconProperty",{get:function(){return n("jGdz")},enumerable:!1,configurable:!0}),t.prototype.loadPropertyPaneResources=function(){var e=this;return n.e(0).then(n.bind(null,"lOoM")).then(function(t){e._deferredPropertyPane=new t.FalckHubAdaptiveCardPropertyPane})},t.prototype.renderCard=function(){return u},t.prototype.getPropertyPaneConfiguration=function(){var e;return null===(e=this._deferredPropertyPane)||void 0===e?void 0:e.getPropertyPaneConfiguration(this.state.mobileApps)},t.prototype.fetchData=function(){var e;return d(this,void 0,void 0,function(){var t,n,a;return l(this,function(i){switch(i.label){case 0:return this.properties.sharePointList&&this.context?(t=this.properties.sharePointList,[4,this.context.spHttpClient.get(t,s.SPHttpClient.configurations.v1)]):[3,3];case 1:return[4,i.sent().json()];case 2:return n=i.sent(),a=null===(e=n.value)||void 0===e?void 0:e.map(function(e){return{key:e.ID,text:e.AppName}}),[2,this.setState({mobileApps:a})];case 3:return[2,Promise.resolve()]}})})},t.prototype.onPropertyPaneFieldChanged=function(e,t,n){return d(this,void 0,void 0,function(){return l(this,function(a){switch(a.label){case 0:if(n===t)return[3,5];switch(e){case"imageUrl":return[3,1];case"sharePointList":return[3,2];case"appId":return[3,4]}return[3,5];case 1:return this.properties.imageUrl=n,[3,5];case 2:return[4,this.fetchData()];case 3:return a.sent(),[3,5];case 4:return this.properties.appID=n,[3,5];case 5:return[2]}})})},t}(i.BaseAdaptiveCardExtension);t.default=p},vlQI:function(e,t){e.exports=r}})});