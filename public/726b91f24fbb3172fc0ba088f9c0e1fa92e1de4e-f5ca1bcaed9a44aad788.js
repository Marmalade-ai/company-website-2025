"use strict";(self.webpackChunkcompany_website_2023=self.webpackChunkcompany_website_2023||[]).push([[560],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=r(c)===c&&n(c)!==c,i=s,s=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return N},P:function(){return w},S:function(){return F},_:function(){return i},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=i(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,f);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var E;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,v);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],L=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:l().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],_=new Set;let O,q;const A=function(e){let{as:t="div",image:n,style:l,backgroundColor:d,className:u,class:m,onStartLoad:g,onLoad:p,onError:h}=e,f=i(e,T);const{width:y,height:b,layout:E}=n,v=c(y,b,E),{style:w,className:N}=v,k=i(v,I),C=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,y,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return q=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(L);if(q&&_.has(L))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:_.has(L),image:n},f)),_.has(L)||(t=requestAnimationFrame((()=>{C.current&&(r=i(C.current,L,_,l,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(L)&&q&&(C.current.innerHTML=q(s({isLoading:_.has(L),isLoaded:_.has(L),image:n},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},w,l,{backgroundColor:d}),className:N+(u?" "+u:""),ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(A,e):null}));j.propTypes=S,j.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=i(t,R);return l&&console.warn(l),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=M((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:m="lazy",imgClassName:g,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,E=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=s({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:v,height:x,layout:S,images:T,placeholder:I,backgroundColor:_}=o,O=c(v,x,S),{style:q,className:A}=O,j=i(O,C),R={fallback:void 0,sources:[]};return T.fallback&&(R.fallback=s({},T.fallback,{srcSet:T.fallback.srcSet?L(T.fallback.srcSet):void 0})),T.sources&&(R.sources=T.sources.map((e=>s({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,s({},j,{style:s({},q,l,{backgroundColor:f}),className:A+(a?" "+a:"")}),r.createElement(p,{layout:S,width:v,height:x},r.createElement(w,s({},u(I,!1,S,v,x,_,y,b))),r.createElement(N,s({"data-gatsby-image-ssr":"",className:g},E,d("eager"===m,!1,R,m,h)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:x,width:z,height:z,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=W;const F=M(j);F.displayName="StaticImage",F.propTypes=W},57:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(1883),l="layout-module--nav-link-item--a5f0a",s="layout-module--nav-link-text--69cda";var i=()=>r.createElement("header",null,r.createElement("nav",null,r.createElement("div",{className:"text-xl"},r.createElement("span",{class:"text-[#ff7f00] font-bold"},"Marmalade AI")," - effortless networks",r.createElement("button",{className:"w-30 bg-[#ff7f00] bg-opacity-100 border border-width-1 hover:underline px-1 py-0 rounded-lg text-black float-right",onClick:()=>{(0,n.c4)("https://docs.google.com/forms/d/1eu_w17ssDesxl9iYB2DYgmg_sldKc3q_qBu0EuSAz1g/")}},"Try for free"))));var o=()=>r.createElement("footer",null,r.createElement("br",null),r.createElement("div",{className:"grid grid-cols-2 gap-5 bg-marmalade-300 gray-border p-4"},r.createElement("div",null,r.createElement("ul",null,r.createElement("li",{className:l},r.createElement(n.rU,{to:"/",className:s},"Home")),r.createElement("li",{className:l},r.createElement(n.rU,{to:"/products",className:s},"Beta app")),r.createElement("li",{className:l},r.createElement(n.rU,{to:"/faq",className:s},"FAQ")),r.createElement("li",{className:l},r.createElement(n.rU,{to:"/about",className:s},"About")))),r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(n.rU,{to:"/code-of-conduct",className:s},"Code of Conduct")),r.createElement("li",null,r.createElement(n.rU,{to:"/privacy-policy",className:s},"Privacy Policy")),r.createElement("li",null,r.createElement(n.rU,{to:"/terms-and-conditions",className:s},"Terms and Conditions"))))),r.createElement("br",null),r.createElement("h4",null,"Copyright © 2021-2025 Marmalade AI, Inc."));var c=e=>{let{pageTitle:t,children:a}=e;const l=(0,n.K2)("3159585216");return console.log("data is: "+JSON.stringify(l)),console.log("data.site.siteMetadata is: "+JSON.stringify(l.site.siteMetadata)),r.createElement("div",{className:"layout-module--container--78b04"},r.createElement(i,null,"className=","layout-module--site-title--e4dea",l.site.siteMetadata.title),r.createElement("main",null,r.createElement("div",{className:"layout-module--heading--f158c"},t),a),r.createElement(o,null))}}}]);
//# sourceMappingURL=726b91f24fbb3172fc0ba088f9c0e1fa92e1de4e-f5ca1bcaed9a44aad788.js.map