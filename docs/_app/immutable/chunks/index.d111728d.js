function g(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function K(){return Object.create(null)}function N(t){t.forEach(tt)}function D(t){return typeof t=="function"}function Ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Vt(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function pt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t,e,n){t.$$.on_destroy.push(yt(e,n))}function Yt(t,e,n,i){if(t){const s=et(t,e,n,i);return t[0](s)}}function et(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Zt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function te(t,e,n,i,s,l){if(s){const r=et(e,n,i,l);t.p(r,s)}}function ee(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ne(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ie(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function se(t,e,n){return t.set(n),e}const gt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);function re(t){return t&&D(t.destroy)?t.destroy:g}const nt=typeof window<"u";let xt=nt?()=>window.performance.now():()=>Date.now(),I=nt?t=>requestAnimationFrame(t):g;const $=new Set;function it(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&I(it)}function wt(t){let e;return $.size===0&&I(it),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let H=!1;function bt(){H=!0}function $t(){H=!1}function vt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:vt(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,s=Math.max(a,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(r[c],_)}}function st(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=z("style");return Tt(rt(t),e),e.sheet}function Tt(t,e){return st(t.head||t,e),e.sheet}function At(t,e){if(H){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){t.insertBefore(e,n||null)}function Ct(t,e,n){H&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function oe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function ce(t,e){const n={};for(const i in t)gt(t,i)&&e.indexOf(i)===-1&&(n[i]=t[i]);return n}function ot(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function le(){return J(" ")}function ue(){return J("")}function Q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const St=["width","height"];function ae(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&St.indexOf(i)===-1?t[i]=e[i]:Mt(t,i,e[i])}function Ot(t){return Array.from(t.childNodes)}function ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,s=!1){ct(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ut(t,e,n,i){return lt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function fe(t,e,n){return ut(t,e,n,z)}function _e(t,e,n){return ut(t,e,n,ot)}function jt(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function de(t){return jt(t," ")}function U(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function he(t,e){const n=U(t,"HTML_TAG_START",0),i=U(t,"HTML_TAG_END",n);if(n===i)return new V(void 0,e);ct(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(l,e)}function me(t,e){e=""+e,t.data!==e&&(t.data=e)}function pe(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let S;function Lt(){if(S===void 0){S=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{S=!0}}return S}function ye(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=z("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Lt();let l;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=Q(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=Q(i.contentWindow,"resize",e),e()}),st(t,i),()=>{(s||l&&i.contentWindow)&&l(),E(i)}}function ge(t,e,n){t.classList[n?"add":"remove"](e)}function Pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function xe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ot(n.nodeName):this.e=z(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class V extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ct(this.t,this.n[n],e)}}function we(t,e){return new t(e)}const j=new Map;let L=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:Nt(e),rules:{}};return j.set(t,n),n}function X(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const x=e+(n-e)*l(y);u+=y*100+`%{${r(x,1-x)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Ht(_)}_${o}`,h=rt(t),{stylesheet:f,rules:d}=j.get(h)||zt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,L+=1,a}function Rt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),L-=s,L||qt())}function qt(){I(()=>{L||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),j.clear())})}let k;function A(t){k=t}function R(){if(!k)throw new Error("Function called outside component initialization");return k}function be(t){R().$$.on_mount.push(t)}function $e(t){R().$$.after_update.push(t)}function ve(t,e){return R().$$.context.set(t,e),e}function Ee(t){return R().$$.context.get(t)}const b=[],Y=[];let v=[];const Z=[],at=Promise.resolve();let G=!1;function ft(){G||(G=!0,at.then(_t))}function Ne(){return ft(),at}function P(t){v.push(t)}const W=new Set;let w=0;function _t(){if(w!==0)return;const t=k;do{try{for(;w<b.length;){const e=b[w];w++,A(e),Bt(e.$$)}}catch(e){throw b.length=0,w=0,e}for(A(null),b.length=0,w=0;Y.length;)Y.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];W.has(n)||(W.add(n),n())}v.length=0}while(b.length);for(;Z.length;)Z.pop()();G=!1,W.clear(),A(t)}function Bt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function Wt(t){const e=[],n=[];v.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),v=e}let T;function Ft(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function F(t,e,n){t.dispatchEvent(Pt(`${e?"intro":"outro"}${n}`))}const O=new Set;let p;function Te(){p={r:0,c:[],p}}function Ae(){p.r||N(p.c),p=p.p}function Gt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function ke(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),p.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const It={duration:0};function Ce(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function _(){u&&Rt(t,u)}function a(f,d){const m=f.b-r;return d*=Math.abs(m),{a:r,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=ht,tick:x=g,css:q}=l||It,B={start:xt()+d,b:f};f||(B.group=p,p.r+=1),o||c?c=B:(q&&(_(),u=X(t,r,f,m,d,y,q)),f&&x(0,1),o=a(B,m),P(()=>F(t,f,"start")),wt(C=>{if(c&&C>c.start&&(o=a(c,m),c=null,F(t,o.b,"start"),q&&(_(),u=X(t,r,o.b,o.duration,0,y,l.css))),o){if(C>=o.end)x(r=o.b,1-r),F(t,o.b,"end"),c||(o.b?_():--o.group.r||N(o.group.c)),o=null;else if(C>=o.start){const dt=C-o.start;r=o.a+o.d*y(dt/o.duration),x(r,1-r)}}return!!(o||c)}))}return{run(f){D(l)?Ft().then(()=>{l=l(s),h(f)}):h(f)},end(){_(),o=c=null}}}function Me(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Se(t){return typeof t=="object"&&t!==null?t:{}}function Oe(t){t&&t.c()}function je(t,e){t&&t.l(e)}function Jt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||P(()=>{const r=t.$$.on_mount.map(tt).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),l.forEach(P)}function Kt(t,e){const n=t.$$;n.fragment!==null&&(Wt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Le(t,e,n,i,s,l,r,o=[-1]){const c=k;A(t);const u=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:s,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:K(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&s(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Qt(t,a)),h}):[],u.update(),_=!0,N(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){bt();const a=Ot(e.target);u.fragment&&u.fragment.l(a),a.forEach(E)}else u.fragment&&u.fragment.c();e.intro&&Gt(t.$$.fragment),Jt(t,e.target,e.anchor,e.customElement),$t(),_t()}A(c)}class Pe{$destroy(){Kt(this,1),this.$destroy=g}$on(e,n){if(!D(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ve as $,Jt as A,Kt as B,ht as C,Ee as D,Xt as E,mt as F,ot as G,_e as H,ae as I,ge as J,At as K,Q as L,re as M,Me as N,P as O,Ce as P,N as Q,se as R,Pe as S,g as T,V as U,he as V,Vt as W,Yt as X,te as Y,ee as Z,Zt as _,le as a,Se as a0,ne as a1,ie as a2,ye as a3,oe as a4,ce as a5,xe as a6,Ct as b,de as c,ke as d,ue as e,Ae as f,Gt as g,E as h,Le as i,$e as j,z as k,fe as l,Ot as m,Mt as n,be as o,pe as p,J as q,jt as r,Ut as s,Ne as t,me as u,Te as v,Y as w,we as x,Oe as y,je as z};