(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),l=(n(0),n(90)),o=n(95),c=n(87),s={id:"soundjack",title:"Soundjack",sidebar_label:"Soundjack",hide_title:!0},i={unversionedId:"audio/soundjack",id:"audio/soundjack",isDocsHomePage:!1,title:"Soundjack",description:"<WikiEntry",source:"@site/docs/audio/soundjack.mdx",slug:"/audio/soundjack",permalink:"/canyouhearme/docs/audio/soundjack",editUrl:"https://github.com/jacksonmgoode/canyouhearme/edit/master/docs/audio/soundjack.mdx",version:"current",sidebar_label:"Soundjack",sidebar:"wiki",previous:{title:"NINJAM",permalink:"/canyouhearme/docs/audio/ninjam"},next:{title:"Source-Connect Now",permalink:"/canyouhearme/docs/audio/source-connect"}},u=[],p={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",null,Object(l.b)(o.a,{title:"Soundjack",pic_url:Object(c.a)("img/soundjack-logo.jpg"),description:"SoundJack is a browser-based low-latency communications system that provides quality and latency relevant control to the user. SoundJack is surprisingly easy to use and has an overwhelming amount of documentation which continues to grow.",developer:"Alexander Car\xf4t with the Fast Research Project, among others.",website:"https://soundjack.eu/index.php",support:"https://www.soundjack.eu/index.php/problems",protocol:"Audio",os_support:"Windows and macOS",pricing:"Free",sign_up:"Yes",hosting:"P2P",rec_speed:"",req_speed:"None",max_qual:"Unknown",latency:"60 - 250ms (depending on audio and network buffer)",last_update:"April, 20th 2020",open_source:"No",repo:"",ease:"SoundJack is very easy to use. You can use the browser as an interface by downloading a small client program or use it as a standalone application. The website features multiple instructional videos, guides, and relevant faq, as well as a realtime chat which is great for troubleshooting.",issues:"",info:["Please see the ",Object(l.b)("a",{href:"https://www.soundjack.eu/index.php/problems"},"FAQ")," on the official site for more information."],caution:"Throughout our experimentation, we experienced numerous crashes and highly unstable audio quality despite utilizing various audio and video settings.",mdxType:"WikiEntry"})))}d.isMDXComponent=!0},86:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},87:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var a=n(86),r=n(89);function l(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var l=void 0===a?{}:a,o=l.forcePrependBaseUrl,c=void 0!==o&&o,s=l.absolute,i=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+u:u}(l,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},88:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},89:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?r.a.createElement(h,c(c({ref:t},i),{},{components:n})):r.a.createElement(h,c({ref:t},i))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},92:function(e,t,n){"use strict";var a=n(0),r=n(91);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(92),o=n(88),c=n(47),s=n.n(c),i=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,d=e.groupId,m=Object(l.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,E=Object(a.useState)(c),v=E[0],b=E[1],g=Object(a.useState)(!1),w=g[0],y=g[1];if(null!=d){var j=h[d];null!=j&&j!==v&&p.some((function(e){return e.value===j}))&&b(j)}var _=function(e){b(e),null!=d&&f(d,e)},O=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},x=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",x)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e),k(e)},onFocus:function(){return _(t)},onClick:function(){_(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},94:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},95:function(e,t,n){"use strict";var a=n(3),r=n(0),l=n.n(r),o=(n(87),n(93)),c=n(94),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",{class:"rendered"},l.a.createElement("div",{class:"avatar avatar--vertical"},this.props.pic_url.length>0&&l.a.createElement("img",{class:"avatar__photo avatar__photo--xl",src:this.props.pic_url}),l.a.createElement("div",{class:"avatar__intro"},l.a.createElement("h1",{class:"avatar__name"},this.props.title),l.a.createElement("h4",{class:"avatar_links"},l.a.createElement("a",{href:this.props.website},"Official website"),this.props.support.length>0&&l.a.createElement("span",null," - ",l.a.createElement("a",{href:this.props.support},"Support link"))),l.a.createElement("medium",{class:"avatar__subtitle"},this.props.description))),l.a.createElement("hr",null),l.a.createElement(o.a,{defaultValue:"column",values:[{label:"Column",value:"column"},{label:"Table",value:"table"}]},l.a.createElement(c.a,{value:"column"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col"},l.a.createElement("h2",null,"Basic information"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Developer: "),this.props.developer),l.a.createElement("p",null,l.a.createElement("strong",null,"Protocol: "),this.props.protocol),l.a.createElement("p",null,l.a.createElement("strong",null,"OS Supported: ")," ",this.props.os_support),l.a.createElement("p",null,l.a.createElement("strong",null,"Pricing: "),this.props.pricing),l.a.createElement("p",null,l.a.createElement("strong",null,"Requires sign-up?: "),this.props.sign_up),l.a.createElement("p",null,l.a.createElement("strong",null,"Website: "),l.a.createElement("a",{href:this.props.website},this.props.website))),l.a.createElement("div",{class:"col"},l.a.createElement("h2",null,"Detailed information"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Self-hosted?: "),this.props.hosting),l.a.createElement("p",null,l.a.createElement("strong",null,"Recommended net-speed: "),this.props.rec_speed),l.a.createElement("p",null,l.a.createElement("strong",null,"Required net-speed: "),this.props.req_speed),l.a.createElement("p",null,l.a.createElement("strong",null,"Max quality: "),this.props.max_qual),l.a.createElement("p",null,l.a.createElement("strong",null,"Latency (estimate): "),this.props.latency),l.a.createElement("p",null,l.a.createElement("strong",null,"Last update: "),this.props.last_update),l.a.createElement("p",null,l.a.createElement("strong",null,"Open source?: "),this.props.open_source),this.props.repo.length>0&&l.a.createElement("p",null,l.a.createElement("strong",null,"Repo: "),l.a.createElement("a",{href:this.props.repo},this.props.repo)))))),l.a.createElement(c.a,{value:"table"},l.a.createElement("div",{class:"spec-table"},l.a.createElement("h2",null,"Overview of technical specifications"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Detail"),l.a.createElement("th",null,"Value")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Developer:")),l.a.createElement("td",null,this.props.developer)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Protocol:")),l.a.createElement("td",null,this.props.protocol)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"OS Supported:")),l.a.createElement("td",null,this.props.os_support)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Self-hosted?:")),l.a.createElement("td",null,this.props.hosting)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Recommended net-speed:")),l.a.createElement("td",null,this.props.rec_speed)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Required net-speed:")),l.a.createElement("td",null,this.props.req_speed)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Max quality:")),l.a.createElement("td",null,this.props.max_qual)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Latency (estimate):")),l.a.createElement("td",null,this.props.latency)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Last update:")),l.a.createElement("td",null,this.props.last_update)))))),l.a.createElement("hr",null),l.a.createElement("div",{class:"card-demo"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("h3",null,"Ease of use")),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,this.props.ease)))),l.a.createElement("br",null),this.props.issues.length>0&&l.a.createElement("div",{class:"card-demo"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("h3",null,"Issues")),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,this.props.issues)))),l.a.createElement("br",null),this.props.info.length>0&&l.a.createElement("div",{class:"admonition admonition-info alert alert--info"},l.a.createElement("div",{class:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement("span",{class:"admonition-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),l.a.createElement("div",{class:"admonition-content"},l.a.createElement("p",null,this.props.info))),this.props.caution.length>0&&l.a.createElement("div",{class:"admonition admonition-caution alert alert--warning"},l.a.createElement("div",{class:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement("span",{class:"admonition-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),l.a.createElement("div",{class:"admonition-content"},l.a.createElement("p",null,this.props.caution))))},t}(l.a.Component);s.defaultProps={title:"",pic_url:"",description:"",developer:"",website:"",support:"",protocol:"Unknown",os_support:"",pricing:"",sign_up:"",hosting:"",rec_speed:"Flexible",req_speed:"Unknown",max_qual:"Unknown",latency:"Unknown",last_update:"Unknown",open_source:"",repo:"",ease:["This service has not been documented by the CYHM community - yet \ud83e\udd13"],issues:"",info:"",caution:""},t.a=s}}]);