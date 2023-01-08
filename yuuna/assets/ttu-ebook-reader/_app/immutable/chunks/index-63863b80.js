import{l as z,m as V,O as q,j as D,n as F}from"./dialog-manager-6307dd27.js";import{m as G,p as J,a2 as K,b as $,a3 as U,l as R,o as X,e as Q}from"./format-page-title-24d86e72.js";var Z=Array.isArray;function Y(t,e){return Z(e)?t.apply(void 0,z([],V(e))):t(e)}function ee(t){return G(function(e){return Y(t,e)})}var re=Array.isArray,te=Object.getPrototypeOf,ne=Object.prototype,ae=Object.keys;function ie(t){if(t.length===1){var e=t[0];if(re(e))return{args:e,keys:null};if(oe(e)){var r=ae(e);return{args:r.map(function(n){return e[n]}),keys:r}}}return{args:t,keys:null}}function oe(t){return t&&typeof t=="object"&&te(t)===ne}function se(t,e){return t.reduce(function(r,n,i){return r[n]=e[i],r},{})}function Se(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=J(t),n=K(t),i=ie(t),s=i.args,a=i.keys;if(s.length===0)return $([],r);var o=new q(fe(s,r,a?function(f){return se(a,f)}:D));return n?o.pipe(ee(n)):o}function fe(t,e,r){return r===void 0&&(r=D),function(n){_(e,function(){for(var i=t.length,s=new Array(i),a=i,o=i,f=function(u){_(e,function(){var l=$(t[u],e),p=!1;l.subscribe(R(n,function(C){s[u]=C,p||(p=!0,o--),o||n.next(r(s.slice()))},function(){--a||n.complete()}))},n)},c=0;c<i;c++)f(c)},n)}}function _(t,e,r){t?U(r,t,e):e()}function Te(t){return X(function(e,r){Q(t).subscribe(R(r,function(){return r.complete()},F)),!r.closed&&e.subscribe(r)})}function A(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function B(t,e){for(var r="",n=0,i=-1,s=0,a,o=0;o<=t.length;++o){if(o<t.length)a=t.charCodeAt(o);else{if(a===47)break;a=47}if(a===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var f=r.lastIndexOf("/");if(f!==r.length-1){f===-1?(r="",n=0):(r=r.slice(0,f),n=r.length-1-r.lastIndexOf("/")),i=o,s=0;continue}}else if(r.length===2||r.length===1){r="",n=0,i=o,s=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(i+1,o):r=t.slice(i+1,o),n=o-i-1;i=o,s=0}else a===46&&s!==-1?++s:s=-1}return r}function le(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var E={resolve:function(){for(var e="",r=!1,n,i=arguments.length-1;i>=-1&&!r;i--){var s;i>=0?s=arguments[i]:(n===void 0&&(n=process.cwd()),s=n),A(s),s.length!==0&&(e=s+"/"+e,r=s.charCodeAt(0)===47)}return e=B(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(A(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=B(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return A(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];A(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":E.normalize(e)},relative:function(e,r){if(A(e),A(r),e===r||(e=E.resolve(e),r=E.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var i=e.length,s=i-n,a=1;a<r.length&&r.charCodeAt(a)===47;++a);for(var o=r.length,f=o-a,c=s<f?s:f,u=-1,l=0;l<=c;++l){if(l===c){if(f>c){if(r.charCodeAt(a+l)===47)return r.slice(a+l+1);if(l===0)return r.slice(a+l)}else s>c&&(e.charCodeAt(n+l)===47?u=l:l===0&&(u=0));break}var p=e.charCodeAt(n+l),C=r.charCodeAt(a+l);if(p!==C)break;p===47&&(u=l)}var y="";for(l=n+u+1;l<=i;++l)(l===i||e.charCodeAt(l)===47)&&(y.length===0?y+="..":y+="/..");return y.length>0?y+r.slice(a+u):(a+=u,r.charCodeAt(a)===47&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(A(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,i=-1,s=!0,a=e.length-1;a>=1;--a)if(r=e.charCodeAt(a),r===47){if(!s){i=a;break}}else s=!1;return i===-1?n?"/":".":n&&i===1?"//":e.slice(0,i)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');A(e);var n=0,i=-1,s=!0,a;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var o=r.length-1,f=-1;for(a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(c===47){if(!s){n=a+1;break}}else f===-1&&(s=!1,f=a+1),o>=0&&(c===r.charCodeAt(o)?--o===-1&&(i=a):(o=-1,i=f))}return n===i?i=f:i===-1&&(i=e.length),e.slice(n,i)}else{for(a=e.length-1;a>=0;--a)if(e.charCodeAt(a)===47){if(!s){n=a+1;break}}else i===-1&&(s=!1,i=a+1);return i===-1?"":e.slice(n,i)}},extname:function(e){A(e);for(var r=-1,n=0,i=-1,s=!0,a=0,o=e.length-1;o>=0;--o){var f=e.charCodeAt(o);if(f===47){if(!s){n=o+1;break}continue}i===-1&&(s=!1,i=o+1),f===46?r===-1?r=o:a!==1&&(a=1):r!==-1&&(a=-1)}return r===-1||i===-1||a===0||a===1&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return le("/",e)},parse:function(e){A(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),i=n===47,s;i?(r.root="/",s=1):s=0;for(var a=-1,o=0,f=-1,c=!0,u=e.length-1,l=0;u>=s;--u){if(n=e.charCodeAt(u),n===47){if(!c){o=u+1;break}continue}f===-1&&(c=!1,f=u+1),n===46?a===-1?a=u:l!==1&&(l=1):a!==-1&&(l=-1)}return a===-1||f===-1||l===0||l===1&&a===f-1&&a===o+1?f!==-1&&(o===0&&i?r.base=r.name=e.slice(1,f):r.base=r.name=e.slice(o,f)):(o===0&&i?(r.name=e.slice(1,a),r.base=e.slice(1,f)):(r.name=e.slice(o,a),r.base=e.slice(o,f)),r.ext=e.slice(a,f)),o>0?r.dir=e.slice(0,o-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};E.posix=E;var b=E;function ce(t){return`data:image/gif;ttu:${t};base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`}function ue(t){const e=(r,n)=>{const i=r.getAttribute(n);i&&!(i.startsWith("ttu:")||i.startsWith("data:image/gif;ttu:"))&&(r.setAttribute(`data-ttu-${n}`,i),r.removeAttribute(n))};Array.from(t.getElementsByTagName("image")).forEach(r=>{e(r,"href")}),Array.from(t.getElementsByTagName("img")).forEach(r=>{e(r,"src")})}function de(t){Array.from(t.getElementsByTagName("image")).filter(e=>!e.getAttributeNames().some(r=>r==="href")).forEach(e=>{const r=Array.from(e.attributes).find(n=>n.name.endsWith("href"));!r||e.setAttribute("href",r.value)})}function ge(t){return Array.from(t.classList).some(e=>e.includes("gaiji"))}function L(t){return t instanceof HTMLImageElement?ge(t):!1}function me(t){return L(t)?1:ve(t)}const he=/[^0-9A-Z○◯々-〇〻ぁ-ゖゝ-ゞァ-ヺー０-９Ａ-Ｚｦ-ﾝ\p{Radical}\p{Unified_Ideograph}]+/gimu;function ve(t){return t.textContent?Ae(t.textContent.replace(he,"")):0}function Ae(t){return Array.from(t).length}function ye(t){return W(t,e=>!(e.nodeName==="RT"||e instanceof HTMLElement&&(e.attributes.getNamedItem("aria-hidden")||e.attributes.getNamedItem("hidden")))).filter(e=>{var r;return!!(L(e)||(r=e.textContent)!=null&&r.replace(/\s/g,"").length)})}function W(t,e){return!t.hasChildNodes()||!e(t)?[]:Array.from(t.childNodes).flatMap(r=>r.nodeType===Node.TEXT_NODE?[r]:L(r)?[r]:W(r,e)).filter(e)}const S="ttu-";function xe(t,e,r){let n={type:3,content:""},i="";const s=e.package.manifest.item.reduce((g,d)=>(d["@_media-type"]==="application/xhtml+xml"&&(g[d["@_id"]]=d["@_href"],d["@_properties"]==="nav"&&(i=d["@_href"])),g),{}),a=Object.entries(t).reduce((g,[d,h])=>{const m=d.endsWith(".ncx")&&!n.content;return(m||i===d)&&(n={type:m?2:3,content:h}),h instanceof Blob&&g.push(d),g},[]),o=new DOMParser,f=Array.isArray(e.package.spine.itemref)?e.package.spine.itemref:[e.package.spine.itemref],c=[],u=r.createElement("div");let l=[],p=-1;if(n.type&&n.content){let g=o.parseFromString(n.content,"text/html");if(n.type===3){let d=g.querySelector('nav[epub\\:type="toc"],nav#toc');d||(g=o.parseFromString(n.content,"text/xml")),d=g.querySelector('nav[epub\\:type="toc"],nav#toc'),d&&(l=[...d.querySelectorAll("a")].map(h=>{const m=h;return{reference:m.href,charactersWeight:1,label:m.innerText}}))}else l=[...g.querySelectorAll("navPoint")].map(d=>{const h=d.querySelector("navLabel text");return{reference:d.querySelector("content").getAttribute("src"),charactersWeight:1,label:h.innerText}})}l.length&&(p=f.findIndex(g=>l[0].reference.includes(s[g["@_idref"].split("/").pop()||""])),p!==0&&l.unshift({reference:s[f[0]["@_idref"]],charactersWeight:1,label:"Preface",startCharacter:0}));let C=l[0],y=C?`${S}${f[0]["@_idref"]}`:"",T=0,N=0,O=0;return f.forEach(g=>{var H,P;const d=g["@_idref"],h=s[d],m=/.*<body(?:[^>]*id="(?<id>.+?)")*[^>]*>(?<body>(.|\s)+)<\/body>.*/.exec(t[h]),j=((H=m==null?void 0:m.groups)==null?void 0:H.id)||"";let I=((P=m==null?void 0:m.groups)==null?void 0:P.body)||"";a.forEach(v=>{I=I.replaceAll(be(h,v),ce(v))});const k=r.createElement("div");if(k.innerHTML=I,k.id=`${S}${d}`,j){const v=r.createElement("span");v.id=j,k.prepend(v)}u.appendChild(k),O+=pe(k);const M=l.findIndex(v=>v.reference.includes(h.split("/").pop()||"")),w=M>-1?l[M]:void 0,x=O-N;if(w){const v=T;C=w,T=c.length,y=`${S}${d}`,c.push({reference:y,charactersWeight:x||1,label:C.label,startCharacter:T?c[v].startCharacter+c[v].characters:0,characters:x})}else C&&(c[T].characters+=x,c.push({reference:`${S}${d}`,charactersWeight:x||1,parentChapter:y}));N=O}),ue(u),de(u),Ce(u),{element:u,sections:c.filter(g=>g.reference.startsWith(S))}}function pe(t){const e=ye(t);let r=0;return e.forEach(n=>{r+=me(n)}),r}function Ce(t){Array.from(t.getElementsByTagName("a")).forEach(e=>{const r=e.getAttribute("href");!r||e.setAttribute("href",`#${r.replace(/.+#/,"")}`)})}function be(t,e){const r=b.dirname(t),n=b.dirname(e),i=b.basename(e);if(r===n)return i;const s=r==="."?[]:r.split("/"),a=n==="."?[]:n.split("/");if(s.length>=a.length){for(let o=0;o<s.length;o+=1)if(s[o]!==a[o])return b.join("../".repeat(s.length-o)+a.slice(o).join("/"),i)}for(let o=0;o<s.length;o+=1)if(s[o]!==a[o])return b.join("../".repeat(s.length-o)+a.slice(o).join("/"),i);return b.join(a.slice(s.length-a.length).join("/"),i)}var Oe={prefix:"far",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"]},Ie={prefix:"far",iconName:"image",icon:[512,512,[],"f03e","M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"]};export{me as a,ce as b,Se as c,Ie as d,b as e,Oe as f,ye as g,xe as h,ge as i,ue as j,de as k,ee as m,S as p,Te as t};
