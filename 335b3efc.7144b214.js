(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{103:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=n(3),o=n(0),i=n.n(o),s=(n(87),n(93),n(94),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={current:0,step_num:n.props.steps.length},n.handleNext=n.handleNext.bind(r(n)),n.handlePrev=n.handlePrev.bind(r(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.handleNext=function(){var e=this.state.current;e<this.state.step_num-1&&(e+=1,this.setState({current:e}))},n.handlePrev=function(){var e=this.state.current;this.state.step_num;e>0&&(e-=1,this.setState({current:e}))},n.render=function(){var e=this.state.current,t=this.state.step_num,n=this.props.steps[e].title,r=this.props.steps[e].points,a=this.props.steps[e].media,o=this.props.steps[e].descs;return i.a.createElement("div",{class:"rendered"},i.a.createElement("h1",{id:"guide_title"}," ",this.props.title," "),i.a.createElement("div",{class:"step_container"},i.a.createElement("div",{class:"row_step step_title"},i.a.createElement("h2",null," ",Array.isArray(n)?n[0]:n," "),i.a.createElement("span",{class:"step_subtitle"},i.a.createElement("em",null," ",Array.isArray(n)&&n[1]," "))),i.a.createElement("div",{class:"row_step scrollbox"},i.a.createElement("section",{class:"column_text"},r.length>1&&i.a.createElement("div",{class:"step_points"},i.a.createElement("ol",null,r.map((function(e,t){return Array.isArray(e)?i.a.createElement("ol",null," ",e.map((function(e){return i.a.createElement("li",null," ",e," ")}))," "):i.a.createElement("li",{class:"step_point"}," ",e," ")})))),r.length>1&&o[0].length>2&&i.a.createElement("hr",null),o[0].length>2&&i.a.createElement("div",{class:"step_desc"},o.map((function(e){return i.a.createElement("p",null," ",e," ")})))),a[0].length>2&&i.a.createElement("section",{class:"column_media"},i.a.createElement("div",{class:"step_image"},i.a.createElement("figure",null,i.a.createElement("img",{src:a[0]}),i.a.createElement("figcaption",null,i.a.createElement("em",null," ",a[1]," "))))))),i.a.createElement("div",{class:"button_bar"},e>0&&i.a.createElement("button",{class:"button_guide",type:"button",id:"prevBtn",onClick:this.handlePrev}," \u2190 "),e<t-1&&i.a.createElement("button",{class:"button_guide",type:"button",id:"nextBtn",onClick:this.handleNext}," \u2192 ")))},t}(i.a.Component));s.defaultProps={title:"",description:"",developer:"",website:"",support:"",os_support:"",pricing:"",repo:"",ease:"",issues:"",caution:""};t.a=s},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var r=n(2),a=n(6),o=(n(0),n(90)),i=n(103),s=n(87),c={id:"livestream",title:"A Livestream Tutorial",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Livestream"},u={unversionedId:"video/livestream",id:"video/livestream",isDocsHomePage:!1,title:"A Livestream Tutorial",description:"<GuideEntry",source:"@site/guides/video/livestream.mdx",slug:"/video/livestream",permalink:"/canyouhearme/guides/video/livestream",editUrl:"https://github.com/jacksonmgoode/canyouhearme/edit/master/guides/video/livestream.mdx",version:"current",sidebar_label:"Livestream",sidebar:"guides",previous:{title:"An Overview of the Guides Section",permalink:"/canyouhearme/guides/"},next:{title:"Creating your first wiki entry",permalink:"/canyouhearme/guides/tools/wiki-entry"}},l=[],d={rightToc:l};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{title:"A Livestream Tutorial",description:"Some basics on how to do a livestream",steps:[{title:["Intro","Some basic information"],points:[""],media:["",""],descs:["Building on the experience derived from having concerts in a very controlled environment, such as the portal and the experience we have from photography and live-shows, we have done several streaming concerts to help artists reach their audience during lockdown. COVID-19 presented society with a host of challenges, and continuing to have concerts is one of them.","We have put together a quick guide for those who want to put together their own streaming-concerts and developed routines and techniques that can be used for concerts in the portal, when the campus opens up.",["After doing some research, we came to the conclusion that ",Object(o.b)("a",{href:Object(s.a)("docs/video/obs")},"OBS Studio")," is the best solution if you want to do streaming. OBS is open source, very well maintained and has an intuitive, modern and feature packed interface."]]},{title:["Lighting","Part 1"],points:["Have good lighting on stands","3-point lighting with soft-boxes are preferred","LED lights are the most reasonable type of lights for this task"],media:["https://picsum.photos/400?random=2","Stuff!"],descs:["When utilizing lamp bulbs, they are very hot and if you don\u2019t have a proper dimmer it is overpowering, being even uncomfortable to the artist in the scene. If you don\u2019t have proper material, like a diffuser for example, you are gonna deal with harsh lighting, which is not aesthetically appealing and it doesn\u2019t look professional at all.","By the other hand, when it comes to LED lights, in most models you have much more control of the intensity and other features of the light. Even in the cheapest models, you can find temperature control, intensity (dimming) and some of them come with a soft-box for diffusing the lights. The LED lights are also much lighter and portable, requiring cheaper stands and less effort to transport it and set it up."]},{title:["Lighting","Part 2"],points:[""],media:["https://picsum.photos/400?random=2","Whoa!"],descs:["We have used 2 spot lights, but they were too big and too heavy for the task. No need to overkill with lighting and melt the artists during the performance. On the other hand, they were very useful, especially because we had a dimmer to control the power of the lights. They were well used when the face and other details of the subject in the scene were a bit in the shadow."]},{title:["Audio and Video processing"],points:[""],media:["https://picsum.photos/400?random=3","Stuff again!"],descs:["OBS provides support for utilizing audio and video processing, you can use native plugins or 3rd party plugins of your choice.","To find these options you have to right click on the video device listed, to find the option Filters on the menu that pops up. We have used it to pop up the musicians and give contrast to the scene when we were using a webcam, that despite having quality, had a bit of a washed picture."]},{title:["Basic Video processing","Clean up your video stream"],points:["Gamma",["It is a very sensitive parameter, small changes make a big difference. Don\u2019t overdo it. Gamma makes the bright areas of the image brighter, while the dark areas will be darker when increased.","It is similar to Contrast, but affects more the middle range or grays of the image."],"Contrast",["In case your picture is a bit \u201cwashed\u201d, and you need to make the subject and objects of the scenario stand out, increase contrast.","Bear in mind that increasing it too much can make certain regions of the image too dark, or too bright, and also can lead you to have a picture that feels amateur."],"Brightness",["Similar to Gamma, it is better used for small corrections.","If your video is dark, slowly increase it, but don\u2019t try to fix a lighting problem that should be done by a correct light placement and natural environment lighting.","Sometimes the subject can be too exposed too, in this case you should decrease subtly the value of this parameter."]],media:[""],descs:[""]},{title:["Basic Audio processing","Tips for audio"],points:["Compressor",["Use the compressors the same way as you would in any other mix (try to be tasteful), but keep in mind that the audience you are mixing for will probably not hear your mix in an optimal environment","Your mix will be played through anything from earbuds to a large HIFI, so try to master your tracks accordingly. Most importantly, set a limiter before the signal reaches OBS.","Think that you should aim at reducing the peaks by 3 to 6db and keep a steady signal at -8 to 12 and you will make sure that your work is heard in all situations."],"Monitoring",["When doing a stream, good monitoring is key. The most difficult thing is to separate yourself from the acoustic output of the band, since this will make it very hard to have a correct perception of what the remote audience will hear."],"Microphones",["Streaming a concert through a camera is a very different thing than a live concert. Since cameras often zoom close to the face of the people singing or the instrument being played and the audience does not have the distractions they do at a concert, you have to keep in mind that the microphones can become obstructive in the image.","Try as best as you can to select discrete or visually pleasing microphones and it will look a lot better than using regular stage-mics.","A USB mic can greatly reduce the complexity of a setup. You can find good condenser USB microphones for a good price, and it takes out the need of a sound card, since the USB microphones are plug-and-play, meaning you just need to plug it directly to your computer's USB port."]],media:[""],descs:[""]},{title:["That's it!"],points:[""],media:["https://picsum.photos/400?random=3"],descs:["Thanks for following along. We hope this helped you in setting up your livestream!"]}],ease:"",issues:"",info:"",caution:"",mdxType:"GuideEntry"}))}h.isMDXComponent=!0},86:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},87:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(86),a=n(89);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},88:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},89:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||h[p]||o;return n?a.a.createElement(m,s(s({ref:t},u),{},{components:n})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},92:function(e,t,n){"use strict";var r=n(0),a=n(91);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(92),i=n(88),s=n(47),c=n.n(s),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,d=e.values,h=e.groupId,p=Object(o.a)(),m=p.tabGroupChoices,f=p.setTabGroupChoices,g=Object(r.useState)(s),v=g[0],y=g[1],b=Object(r.useState)(!1),w=b[0],O=b[1];if(null!=h){var E=m[h];null!=E&&E!==v&&d.some((function(e){return e.value===E}))&&y(E)}var k=function(e){y(e),null!=h&&f(h,e)},j=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||O(!0)},_=function(){O(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",_)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e),x(e)},onFocus:function(){return k(t)},onClick:function(){k(t),O(!1)},onPointerDown:function(){return O(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},94:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);