function B(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(O)}function R(t){return typeof t=="function"}function ft(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function _t(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function W(t){return Object.keys(t).length===0}function dt(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function mt(t,n,e,i,r,u){if(r){const c=P(n,e,i,u);t.p(c,r)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function yt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let E=!1;function Q(){E=!0}function U(){E=!1}function V(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<n.length;o++){const f=n[o];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const o=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=o?r+1:V(1,r,y=>n[e[y]].claim_order,o))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const u=[],c=[];let s=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<u.length&&c[l].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(c[l],f)}}function Y(t,n){if(E){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Z(t,n,e){t.insertBefore(n,e||null)}function tt(t,n,e){E&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function D(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function gt(){return T(" ")}function xt(){return T("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function et(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function it(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function $t(t,n,e){return it(t,n,e,D)}function rt(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>T(n),!0)}function Et(t){return rt(t," ")}function C(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function At(t,n){const e=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",e);if(e===i)return new H(void 0,n);G(t);const r=t.splice(e,i-e+1);$(r[0]),$(r[r.length-1]);const u=r.slice(1,r.length-1);for(const c of u)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(u,n)}function Nt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Tt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=nt(e.nodeName):this.e=D(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Z(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach($)}}class H extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}}let m;function h(t){m=t}function k(){if(!m)throw new Error("Function called outside component initialization");return m}function kt(t){k().$$.on_mount.push(t)}function St(t){k().$$.after_update.push(t)}function jt(t,n){return k().$$.context.set(t,n),n}const d=[],L=[],b=[],q=[],F=Promise.resolve();let N=!1;function I(){N||(N=!0,F.then(J))}function Mt(){return I(),F}function v(t){b.push(t)}const A=new Set;let x=0;function J(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),ct(n.$$)}for(h(null),d.length=0,x=0;L.length;)L.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];A.has(e)||(A.add(e),e())}b.length=0}while(d.length);for(;q.length;)q.pop()();N=!1,A.clear(),h(t)}function ct(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const w=new Set;let _;function Ct(){_={r:0,c:[],p:_}}function Ht(){_.r||p(_.c),_=_.p}function st(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function qt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],s=n[u];if(s){for(const l in c)l in s||(i[l]=1);for(const l in s)r[l]||(e[l]=s[l],r[l]=1);t[u]=s}else for(const l in c)r[l]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t){t&&t.c()}function Pt(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:s}=t.$$;r&&r.m(n,e),i||v(()=>{const l=u.map(O).filter(R);c?c.push(...l):p(l),t.$$.on_mount=[]}),s.forEach(v)}function ut(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){t.$$.dirty[0]===-1&&(d.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,r,u,c,s=[-1]){const l=m;h(t);const o=t.$$={fragment:null,ctx:null,props:u,update:B,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||l.$$.root};c&&c(o.root);let f=!1;if(o.ctx=e?e(t,n.props||{},(a,y,...S)=>{const j=S.length?S[0]:y;return o.ctx&&r(o.ctx[a],o.ctx[a]=j)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](j),f&&at(t,a)),y}):[],o.update(),f=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){Q();const a=et(n.target);o.fragment&&o.fragment.l(a),a.forEach($)}else o.fragment&&o.fragment.c();n.intro&&st(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),U(),J()}h(l)}class Gt{$destroy(){ut(this,1),this.$destroy=B}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as A,Bt as B,ut as C,K as D,Mt as E,dt as F,mt as G,pt as H,ht as I,Y as J,H as K,At as L,_t as M,bt as N,Tt as O,yt as P,Gt as S,et as a,wt as b,$t as c,$ as d,D as e,vt as f,tt as g,rt as h,Dt as i,Nt as j,gt as k,xt as l,Et as m,B as n,Ct as o,Lt as p,Ht as q,st as r,ft as s,T as t,jt as u,St as v,kt as w,Ot as x,Pt as y,ot as z};
