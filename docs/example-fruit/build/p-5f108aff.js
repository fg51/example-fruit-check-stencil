let e,t,n,l=!1,s=!1,o=!1,r=!1,i=!1;const c="undefined"!=typeof window?window:{},a=c.CSS,f=c.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},p=(()=>(f.head.attachShadow+"").indexOf("[native")>-1)(),d=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),w=(e,t,n,l)=>{n&&(n=n.filter(l?([e])=>16&e:([e])=>!(16&e))).map(([n,l,s])=>{const o=h(e,n),r=$(t,s),i=y(n);u.ael(o,l,r,i),(t.s=t.s||[]).push(()=>u.rel(o,l,r,i))})},$=(e,t)=>n=>{256&e.t?e.o[t](n):(e.u=e.u||[]).push([t,n])},h=(e,t)=>4&t?f:8&t?c:32&t?f.body:16&t?e.parentElement:e,y=e=>0!=(2&e),b="http://www.w3.org/1999/xlink",g=new WeakMap,v=(e,t)=>"sc-"+(t?e+"-"+t:e),_=e=>_e.push(e),j=e=>me(e).p,k={},R=e=>"object"==(e=typeof e)||"function"===e,M=(e,t,...n)=>{let l=null,s=null,o=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!R(l))&&(l+=""),r&&i?c[c.length-1].$+=l:c.push(r?O(null,l):l),i=r)};if(a(n),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,U);const f=O(e,null);return f.h=t,c.length>0&&(f.g=c),f.v=s,f._=o,f},O=(e,t)=>({t:0,j:e,$:t,k:null,g:null,h:null,v:null,_:null}),S={},U={forEach:(e,t)=>e.map(L).forEach(t),map:(e,t)=>e.map(L).map(t).map(x)},L=e=>({vattrs:e.h,vchildren:e.g,vkey:e.v,vname:e._,vtag:e.j,vtext:e.$}),x=e=>{const t=O(e.vtag,e.vtext);return t.h=e.vattrs,t.g=e.vchildren,t.v=e.vkey,t._=e.vname,t},C=(e,t,n,l,s,o)=>{if(n!==l){let i=he(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=T(n),o=T(l);t.remove(...s.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!s.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=R(l);if((i||c&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(r){}let f=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,f=!0),null==l||!1===l?f?e.removeAttributeNS(b,t):e.removeAttribute(t):(!i||4&o||s)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(b,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):he(c,a)?a.slice(2):a[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)}},P=/\s/,T=e=>e?e.split(P):[],D=(e,t,n,l)=>{const s=11===t.k.nodeType&&t.k.host?t.k.host:t.k,o=e&&e.h||k,r=t.h||k;for(l in o)l in r||C(s,l,o[l],void 0,n,t.t);for(l in r)C(s,l,o[l],r[l],n,t.t)},E=(s,i,c,a)=>{let u,p,d,m=i.g[c],w=0;if(l||(o=!0,"slot"===m.j&&(e&&a.classList.add(e+"-s"),m.t|=m.g?2:1)),null!==m.$)u=m.k=f.createTextNode(m.$);else if(1&m.t)u=m.k=f.createTextNode("");else{if(r||(r="svg"===m.j),u=m.k=f.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&m.t?"slot-fb":m.j),r&&"foreignObject"===m.j&&(r=!1),D(null,m,r),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),m.g)for(w=0;w<m.g.length;++w)p=E(s,m,w,u),p&&u.appendChild(p);"svg"===m.j?r=!1:"foreignObject"===u.tagName&&(r=!0)}return u["s-hn"]=n,3&m.t&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=m._||"",d=s&&s.g&&s.g[c],d&&d.j===m.j&&s.k&&W(s.k,!1)),u},W=(e,t)=>{u.t|=1;const l=e.childNodes;for(let s=l.length-1;s>=0;s--){const e=l[s];e["s-hn"]!==n&&e["s-ol"]&&(N(e).insertBefore(e,H(e)),e["s-ol"].remove(),e["s-ol"]=void 0,o=!0),t&&W(e,t)}u.t&=-2},A=(e,t,l,s,o,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);o<=r;++o)s[o]&&(i=E(null,l,o,e),i&&(s[o].k=i,c.insertBefore(i,H(t))))},B=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.k,J(l),s=!0,o["s-ol"]?o["s-ol"].remove():W(o,!0),o.remove())},F=(e,t)=>e.j===t.j&&("slot"===e.j?e._===t._:e.v===t.v),H=e=>e&&e["s-ol"]||e,N=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,q=(e,t)=>{const n=t.k=e.k,l=e.g,s=t.g,o=t.j,i=t.$;let c;null===i?(r="svg"===o||"foreignObject"!==o&&r,"slot"===o||D(e,t,r),null!==l&&null!==s?((e,t,n,l)=>{let s,o,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],p=t[f],d=l.length-1,m=l[0],w=l[d];for(;r<=f&&i<=d;)if(null==u)u=t[++r];else if(null==p)p=t[--f];else if(null==m)m=l[++i];else if(null==w)w=l[--d];else if(F(u,m))q(u,m),u=t[++r],m=l[++i];else if(F(p,w))q(p,w),p=t[--f],w=l[--d];else if(F(u,w))"slot"!==u.j&&"slot"!==w.j||W(u.k.parentNode,!1),q(u,w),e.insertBefore(u.k,p.k.nextSibling),u=t[++r],w=l[--d];else if(F(p,m))"slot"!==u.j&&"slot"!==w.j||W(p.k.parentNode,!1),q(p,m),e.insertBefore(p.k,u.k),p=t[--f],m=l[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].v&&t[a].v===m.v){c=a;break}c>=0?(o=t[c],o.j!==m.j?s=E(t&&t[i],n,c,e):(q(o,m),t[c]=void 0,s=o.k),m=l[++i]):(s=E(t&&t[i],n,i,e),m=l[++i]),s&&N(u.k).insertBefore(s,H(u.k))}r>f?A(e,null==l[d+1]?null:l[d+1].k,n,l,i,d):i>d&&B(t,r,f)})(n,l,t,s):null!==s?(null!==e.$&&(n.textContent=""),A(n,null,t,s,0,s.length-1)):null!==l&&B(l,0,l.length-1),r&&"svg"===o&&(r=!1)):(c=n["s-cr"])?c.parentNode.textContent=i:e.$!==i&&(n.data=i)},V=e=>{let t,n,l,s,o,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<l;s++)if(i[s]["s-hn"]!==t["s-hn"])if(r=i[s].nodeType,""!==o){if(1===r&&o===i[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[s].textContent.trim()){t.hidden=!0;break}V(t)}},z=[],G=e=>{let t,n,l,o,r,i,c=0,a=e.childNodes,f=a.length;for(;c<f;c++){if(t=a[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(I(n,o)?(r=z.find(e=>e.R===n),s=!0,n["s-sn"]=n["s-sn"]||o,r?r.M=t:z.push({M:t,R:n}),n["s-sr"]&&z.map(e=>{I(e.R,n["s-sn"])&&(r=z.find(e=>e.R===n),r&&!e.M&&(e.M=r.M))})):z.some(e=>e.R===n)||z.push({R:n}));1===t.nodeType&&G(t)}},I=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,J=e=>{e.h&&e.h.ref&&e.h.ref(null),e.g&&e.g.map(J)},K=e=>me(e).O,Q=(e,t,n)=>{const l=K(e);return{emit:e=>X(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},X=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},Y=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.S=t))},Z=(e,t)=>{if(e.t|=16,!(4&e.t))return Y(e,e.U),Le(()=>ee(e,t));e.t|=512},ee=(e,t)=>{const n=e.o;let l;return t&&(e.t|=256,e.u&&(e.u.map(([e,t])=>re(n,e,t)),e.u=null),l=re(n,"componentWillLoad")),l=ie(l,()=>re(n,"componentWillRender")),ie(l,()=>te(e,n,t))},te=(r,i,c)=>{const a=r.O,d=a["s-rc"];c&&(e=>{const t=e.L,n=e.O,l=t.t,s=((e,t,n)=>{let l=v(t.C,n),s=ve.get(l);if(e=11===e.nodeType?e:f,s||(l=v(t.C),s=ve.get(l)),s)if("string"==typeof s){let t,n=g.get(e=e.head||e);n||g.set(e,n=new Set),n.has(l)||(t=f.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),n&&n.add(l))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return l})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.p);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"),2&l&&n.classList.add(s+"-s"))})(r),((r,i)=>{const c=r.O,a=r.L,d=r.P||O(null,null),m=(e=>e&&e.j===S)(i)?i:M(null,null,i);if(n=c.tagName,a.T&&(m.h=m.h||{},a.T.map(([e,t])=>m.h[t]=c[e])),m.j=null,m.t|=4,r.P=m,m.k=d.k=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=p&&0!=(1&a.t),s=!1,q(d,m),u.t|=1,o){let e,t,n,l,s,o;G(m.k);let r=0;for(;r<z.length;r++)e=z[r],t=e.R,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<z.length;r++)if(e=z[r],t=e.R,e.M){for(l=e.M.parentNode,s=e.M.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===t["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&V(m.k),u.t&=-2,z.length=0})(r,ne(i)),r.t&=-17,r.t|=2,d&&(d.map(e=>e()),a["s-rc"]=void 0);{const e=a["s-p"],t=()=>le(r);0===e.length?t():(Promise.all(e).then(t),r.t|=4,e.length=0)}},ne=e=>{try{e=e.render&&e.render()}catch(t){ye(t)}return e},le=e=>{const t=e.O,n=e.o,l=e.U;64&e.t?re(n,"componentDidUpdate"):(e.t|=64,ce(t),re(n,"componentDidLoad"),e.D(t),l||oe()),e.W(t),e.S&&(e.S(),e.S=void 0),512&e.t&&Se(()=>Z(e,!1)),e.t&=-517},se=e=>{{const t=me(e),n=t.O.isConnected;return n&&2==(18&t.t)&&Z(t,!1),n}},oe=()=>{ce(f.documentElement),Se(()=>X(c,"appload",{detail:{namespace:"app"}}))},re=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){ye(l)}},ie=(e,t)=>e&&e.then?e.then(t):t(),ce=e=>e.classList.add("hydrated"),ae=(e,t,n)=>{if(t.A){e.watchers&&(t.B=e.watchers);const l=Object.entries(t.A),s=e.prototype;if(l.map(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>me(this).F.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=me(this),o=s.F.get(t),r=s.t,i=s.o;if(n=((e,t)=>null==e||R(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.A[t][0]),!(8&r&&void 0!==o||n===o)&&(s.F.set(t,n),i)){if(l.B&&128&r){const e=l.B[t];e&&e.map(e=>{try{i[e](n,o,t)}catch(l){ye(l)}})}2==(18&r)&&Z(s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=me(this);return n.H.then(()=>n.o[e](...t))}})}),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){u.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.T.push([e,s]),s})}}return e},fe=e=>{re(e,"connectedCallback")},ue=(e,t={})=>{const n=[],l=t.exclude||[],s=c.customElements,o=f.head,r=o.querySelector("meta[charset]"),i=f.createElement("style"),a=[];let d,$=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map(e=>e[1].map(t=>{const o={t:t[0],C:t[1],A:t[2],N:t[3]};o.A=t[2],o.N=t[3],o.T=[],o.B={},!p&&1&o.t&&(o.t|=8);const r=o.C,i=class extends HTMLElement{constructor(e){super(e),$e(e=this,o),1&o.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){d&&(clearTimeout(d),d=null),$?a.push(this):u.jmp(()=>(e=>{if(0==(1&u.t)){const t=me(e),n=t.L,l=()=>{};if(w(e,t,n.N,!0),1&t.t)w(e,t,n.N,!1),fe(t.o);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Y(t,t.U=n);break}}n.A&&Object.entries(n.A).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),Se(()=>(async(e,t,n,l,s)=>{if(0==(32&t.t)){t.t|=32,null==t.p&&(t.p="string"!=typeof n.q?(e=>_e.map(t=>t(e)).find(e=>!!e))(e):"");{if((s=ge(n,t)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.B=s.watchers,ae(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(i){ye(i)}t.t&=-9,t.t|=128,e(),fe(t.o)}const l=v(n.C,t.p);if(!ve.has(l)&&s.style){const e=()=>{};let o=s.style;"string"!=typeof o&&(o=o[t.p]),8&n.t&&(o=await __sc_import_app("./p-de803772.js").then(e=>e.scopeCss(o,l,!1))),((e,t,n)=>{let l=ve.get(e);m&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ve.set(e,l)})(l,o,!!(1&n.t)),e()}}const o=t.U,r=()=>Z(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(e,t,n))}l()}})(this))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const e=me(this),t=e.o;e.s&&(e.s.map(e=>e()),e.s=void 0),re(t,"disconnectedCallback"),re(t,"componentDidUnload")}})())}forceUpdate(){se(this)}componentOnReady(){return me(this).V}};o.q=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,ae(i,o,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),$=!1,a.length?a.map(e=>e.connectedCallback()):u.jmp(()=>d=setTimeout(oe,30))},pe=e=>{const t=new URL(e,u.l);return t.origin!==c.location.origin?t.href:t.pathname},de=new WeakMap,me=e=>de.get(e),we=(e,t)=>de.set(t.o=e,t),$e=(e,t)=>{const n={t:0,O:e,L:t,F:new Map};return n.H=new Promise(e=>n.W=e),n.V=new Promise(e=>n.D=e),e["s-p"]=[],e["s-rc"]=[],w(e,n,t.N,!1),de.set(e,n)},he=(e,t)=>t in e,ye=e=>console.error(e),be=new Map,ge=(e,t)=>{const n=e.C.replace(/-/g,"_"),l="string"!=typeof e.q?e.q[t.p]:e.q,s=be.get(l);return s?s[n]:__sc_import_app(`./${l}.entry.js`).then(e=>(be.set(l,e),e[n]),ye)},ve=new Map,_e=[],je=[],ke=[],Re=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&u.t?Se(Oe):u.raf(Oe))},Me=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){ye(t)}e.length=0},Oe=()=>{Me(je),Me(ke),(i=je.length>0)&&u.raf(Oe)},Se=e=>d().then(e),Ue=Re(je,!1),Le=Re(ke,!0),xe={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1},Ce=()=>a&&a.supports&&a.supports("color","var(--c)")?d():__sc_import_app("./p-9f8c4bca.js").then(()=>(u.G=c.__cssshim)?(!1).i():0),Pe=()=>{u.G=c.__cssshim;const e=Array.from(f.querySelectorAll("script")).find(e=>/\/app(\.esm)?\.js($|\?|#)/.test(e.src)||"app"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href,Te(t.resourcesUrl,e),c.customElements?d(t):__sc_import_app("./p-2b669725.js").then(()=>t))},Te=(e,t)=>{try{c.__sc_import_app=Function("w","return import(w);//"+Math.random())}catch(n){const l=new Map;c.__sc_import_app=n=>{const s=new URL(n,e).href;let o=l.get(s);if(!o){const e=f.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.__sc_import_app.m = m;`],{type:"application/javascript"})),o=new Promise(t=>{e.onload=()=>{t(c.__sc_import_app.m),e.remove()}}),l.set(s,o),f.head.appendChild(e)}return o}}};export{xe as B,S as H,Ce as a,ue as b,K as c,Q as d,Ue as e,se as f,j as g,M as h,pe as i,Pe as p,we as r,_ as s,Le as w}