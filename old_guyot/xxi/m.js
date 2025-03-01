(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const gr=!1;var bt=Array.isArray,wt=Array.from,br=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,wr=Object.getOwnPropertyDescriptors,yr=Object.prototype,kr=Array.prototype,Vt=Object.getPrototypeOf;function Er(e){return typeof e=="function"}const pe=()=>{};function xr(e){for(var t=0;t<e.length;t++)e[t]()}const te=2,Kt=4,Be=8,Qe=16,re=32,qe=64,ot=128,ke=256,Ue=512,U=1024,ge=2048,Ge=4096,se=8192,Oe=16384,Wt=32768,Ve=65536,zt=1<<19,Ht=1<<20,Pe=Symbol("$state"),Sr=Symbol("legacy props"),Nr=Symbol("");function Ut(e){return e===this.v}function Tr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ar(e){return!Tr(e,this.v)}function Mr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Cr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Or(e){throw new Error("https://svelte.dev/e/effect_orphan")}function jr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Fr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ir(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Lr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Pr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Dr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Yt=!1;function Z(e){return{f:0,v:e,reactions:null,equals:Ut,version:0}}function ve(e){return Rr(Z(e))}function Xt(e,t=!1){const r=Z(e);return t||(r.equals=Ar),r}function Rr(e){return C!==null&&C.f&te&&(ie===null?an([e]):ie.push(e)),e}function j(e,t){return C!==null&&ln()&&C.f&(te|Qe)&&(ie===null||!ie.includes(e))&&Dr(),ut(e,t)}function ut(e,t){return e.equals(t)||(e.v=t,e.version=vr(),Zt(e,ge),x!==null&&x.f&U&&!(x.f&re)&&(G!==null&&G.includes(e)?(oe(x,ge),st(x)):me===null?sn([e]):me.push(e))),t}function Zt(e,t){var r=e.reactions;if(r!==null)for(var a=r.length,n=0;n<a;n++){var s=r[n],l=s.f;l&ge||(oe(s,t),l&(U|ke)&&(l&te?Zt(s,Ge):st(s)))}}const yt=1,kt=2,Jt=4,Br=8,qr=16,Gr=8,Vr=4,Kr=1,Wr=2,z=Symbol();let zr=!1;function ee(e,t=null,r){if(typeof e!="object"||e===null||Pe in e)return e;const a=Vt(e);if(a!==yr&&a!==kr)return e;var n=new Map,s=bt(e),l=Z(0);s&&n.set("length",Z(e.length));var d;return new Proxy(e,{defineProperty(u,o,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Ir();var c=n.get(o);return c===void 0?(c=Z(f.value),n.set(o,c)):j(c,ee(f.value,d)),!0},deleteProperty(u,o){var f=n.get(o);if(f===void 0)o in u&&n.set(o,Z(z));else{if(s&&typeof o=="string"){var c=n.get("length"),i=Number(o);Number.isInteger(i)&&i<c.v&&j(c,i)}j(f,z),Mt(l)}return!0},get(u,o,f){var h;if(o===Pe)return e;var c=n.get(o),i=o in u;if(c===void 0&&(!i||(h=Ne(u,o))!=null&&h.writable)&&(c=Z(ee(i?u[o]:z,d)),n.set(o,c)),c!==void 0){var v=_(c);return v===z?void 0:v}return Reflect.get(u,o,f)},getOwnPropertyDescriptor(u,o){var f=Reflect.getOwnPropertyDescriptor(u,o);if(f&&"value"in f){var c=n.get(o);c&&(f.value=_(c))}else if(f===void 0){var i=n.get(o),v=i==null?void 0:i.v;if(i!==void 0&&v!==z)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return f},has(u,o){var v;if(o===Pe)return!0;var f=n.get(o),c=f!==void 0&&f.v!==z||Reflect.has(u,o);if(f!==void 0||x!==null&&(!c||(v=Ne(u,o))!=null&&v.writable)){f===void 0&&(f=Z(c?ee(u[o],d):z),n.set(o,f));var i=_(f);if(i===z)return!1}return c},set(u,o,f,c){var T;var i=n.get(o),v=o in u;if(s&&o==="length")for(var h=f;h<i.v;h+=1){var g=n.get(h+"");g!==void 0?j(g,z):h in u&&(g=Z(z),n.set(h+"",g))}i===void 0?(!v||(T=Ne(u,o))!=null&&T.writable)&&(i=Z(void 0),j(i,ee(f,d)),n.set(o,i)):(v=i.v!==z,j(i,ee(f,d)));var S=Reflect.getOwnPropertyDescriptor(u,o);if(S!=null&&S.set&&S.set.call(c,f),!v){if(s&&typeof o=="string"){var y=n.get("length"),E=Number(o);Number.isInteger(E)&&E>=y.v&&j(y,E+1)}Mt(l)}return!0},ownKeys(u){_(l);var o=Reflect.ownKeys(u).filter(i=>{var v=n.get(i);return v===void 0||v.v!==z});for(var[f,c]of n)c.v!==z&&!(f in u)&&o.push(f);return o},setPrototypeOf(){Lr()}})}function Mt(e,t=1){j(e,e.v+t)}var Ct,Qt,$t,er;function Hr(){if(Ct===void 0){Ct=window,Qt=document;var e=Element.prototype,t=Node.prototype;$t=Ne(t,"firstChild").get,er=Ne(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function $e(e=""){return document.createTextNode(e)}function Ye(e){return $t.call(e)}function et(e){return er.call(e)}function N(e,t){return Ye(e)}function M(e,t){{var r=Ye(e);return r instanceof Comment&&r.data===""?et(r):r}}function k(e,t=1,r=!1){let a=e;for(;t--;)a=et(a);return a}function Ur(e){e.textContent=""}function Yr(e){var t=te|ge;x===null?t|=ke:x.f|=Ht;var r=C!==null&&C.f&te?C:null;const a={children:null,ctx:K,deps:null,equals:Ut,f:t,fn:e,reactions:null,v:null,version:0,parent:r??x};return r!==null&&(r.children??(r.children=[])).push(a),a}function tr(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var a=t[r];a.f&te?Et(a):be(a)}}}function Xr(e){for(var t=e.parent;t!==null;){if(!(t.f&te))return t;t=t.parent}return null}function rr(e){var t,r=x;J(Xr(e));try{tr(e),t=dr(e)}finally{J(r)}return t}function nr(e){var t=rr(e),r=(Se||e.f&ke)&&e.deps!==null?Ge:U;oe(e,r),e.equals(t)||(e.v=t,e.version=vr())}function Et(e){tr(e),Re(e,0),oe(e,Oe),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Zr(e){x===null&&C===null&&Or(),C!==null&&C.f&ke&&Cr(),St&&Mr()}function Jr(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function je(e,t,r,a=!0){var n=(e&qe)!==0,s=x,l={ctx:K,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|ge,first:null,fn:t,last:null,next:null,parent:n?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var d=Te;try{Ot(!0),at(l),l.f|=Wt}catch(f){throw be(l),f}finally{Ot(d)}}else t!==null&&st(l);var u=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Ht)===0;if(!u&&!n&&a&&(s!==null&&Jr(l,s),C!==null&&C.f&te)){var o=C;(o.children??(o.children=[])).push(l)}return l}function Qr(e){const t=je(Be,null,!1);return oe(t,U),t.teardown=e,t}function ar(e){Zr();var t=x!==null&&(x.f&re)!==0&&K!==null&&!K.m;if(t){var r=K;(r.e??(r.e=[])).push({fn:e,effect:x,reaction:C})}else{var a=tt(e);return a}}function $r(e){const t=je(qe,e,!0);return()=>{be(t)}}function tt(e){return je(Kt,e,!1)}function en(e){return je(Be,e,!0)}function I(e){return Ke(e)}function Ke(e,t=0){return je(Be|Qe|t,e,!0)}function Ce(e,t=!0){return je(Be|re,e,!0,t)}function sr(e){var t=e.teardown;if(t!==null){const r=St,a=C;jt(!0),le(null);try{t.call(null)}finally{jt(r),le(a)}}}function ir(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)Et(t[r])}}function lr(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var a=r.next;be(r,t),r=a}}function tn(e){for(var t=e.first;t!==null;){var r=t.next;t.f&re||be(t),t=r}}function be(e,t=!0){var r=!1;if((t||e.f&zt)&&e.nodes_start!==null){for(var a=e.nodes_start,n=e.nodes_end;a!==null;){var s=a===n?null:et(a);a.remove(),a=s}r=!0}lr(e,t&&!r),ir(e),Re(e,0),oe(e,Oe);var l=e.transitions;if(l!==null)for(const u of l)u.stop();sr(e);var d=e.parent;d!==null&&d.first!==null&&or(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function or(e){var t=e.parent,r=e.prev,a=e.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),t!==null&&(t.first===e&&(t.first=a),t.last===e&&(t.last=r))}function ft(e,t){var r=[];xt(e,r,!0),ur(r,()=>{be(e),t&&t()})}function ur(e,t){var r=e.length;if(r>0){var a=()=>--r||t();for(var n of e)n.out(a)}else t()}function xt(e,t,r){if(!(e.f&se)){if(e.f^=se,e.transitions!==null)for(const l of e.transitions)(l.is_global||r)&&t.push(l);for(var a=e.first;a!==null;){var n=a.next,s=(a.f&Ve)!==0||(a.f&re)!==0;xt(a,t,s?r:!1),a=n}}}function Xe(e){fr(e,!0)}function fr(e,t){if(e.f&se){We(e)&&at(e),e.f^=se;for(var r=e.first;r!==null;){var a=r.next,n=(r.f&Ve)!==0||(r.f&re)!==0;fr(r,n?t:!1),r=a}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let ct=!1,vt=[];function rn(){ct=!1;const e=vt.slice();vt=[],xr(e)}function rt(e){ct||(ct=!0,queueMicrotask(rn)),vt.push(e)}function nn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let He=!1,Ze=!1,Je=null,Te=!1,St=!1;function Ot(e){Te=e}function jt(e){St=e}let dt=[],De=0;let C=null;function le(e){C=e}let x=null;function J(e){x=e}let ie=null;function an(e){ie=e}let G=null,Y=0,me=null;function sn(e){me=e}let cr=0,Se=!1,K=null;function vr(){return++cr}function ln(){return!Yt}function We(e){var l,d;var t=e.f;if(t&ge)return!0;if(t&Ge){var r=e.deps,a=(t&ke)!==0;if(r!==null){var n;if(t&Ue){for(n=0;n<r.length;n++)((l=r[n]).reactions??(l.reactions=[])).push(e);e.f^=Ue}for(n=0;n<r.length;n++){var s=r[n];if(We(s)&&nr(s),a&&x!==null&&!Se&&!((d=s==null?void 0:s.reactions)!=null&&d.includes(e))&&(s.reactions??(s.reactions=[])).push(e),s.version>e.version)return!0}}a||oe(e,U)}return!1}function on(e,t){for(var r=t;r!==null;){if(r.f&ot)try{r.fn(e);return}catch{r.f^=ot}r=r.parent}throw He=!1,e}function un(e){return(e.f&Oe)===0&&(e.parent===null||(e.parent.f&ot)===0)}function nt(e,t,r,a){if(He){if(r===null&&(He=!1),un(t))throw e;return}r!==null&&(He=!0);{on(e,t);return}}function dr(e){var i;var t=G,r=Y,a=me,n=C,s=Se,l=ie,d=K,u=e.f;G=null,Y=0,me=null,C=u&(re|qe)?null:e,Se=!Te&&(u&ke)!==0,ie=null,K=e.ctx;try{var o=(0,e.fn)(),f=e.deps;if(G!==null){var c;if(Re(e,Y),f!==null&&Y>0)for(f.length=Y+G.length,c=0;c<G.length;c++)f[Y+c]=G[c];else e.deps=f=G;if(!Se)for(c=Y;c<f.length;c++)((i=f[c]).reactions??(i.reactions=[])).push(e)}else f!==null&&Y<f.length&&(Re(e,Y),f.length=Y);return o}finally{G=t,Y=r,me=a,C=n,Se=s,ie=l,K=d}}function fn(e,t){let r=t.reactions;if(r!==null){var a=r.indexOf(e);if(a!==-1){var n=r.length-1;n===0?r=t.reactions=null:(r[a]=r[n],r.pop())}}r===null&&t.f&te&&(G===null||!G.includes(t))&&(oe(t,Ge),t.f&(ke|Ue)||(t.f^=Ue),Re(t,0))}function Re(e,t){var r=e.deps;if(r!==null)for(var a=t;a<r.length;a++)fn(e,r[a])}function at(e){var t=e.f;if(!(t&Oe)){oe(e,U);var r=x,a=K;x=e;try{t&Qe?tn(e):lr(e),ir(e),sr(e);var n=dr(e);e.teardown=typeof n=="function"?n:null,e.version=cr}catch(s){nt(s,e,r,a||e.ctx)}finally{x=r}}}function cn(){if(De>1e3){De=0;try{jr()}catch(e){if(Je!==null)nt(e,Je,null);else throw e}}De++}function vn(e){var t=e.length;if(t!==0){cn();var r=Te;Te=!0;try{for(var a=0;a<t;a++){var n=e[a];n.f&U||(n.f^=U);var s=[];hr(n,s),dn(s)}}finally{Te=r}}}function dn(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var a=e[r];if(!(a.f&(Oe|se)))try{We(a)&&(at(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null?or(a):a.fn=null))}catch(n){nt(n,a,null,a.ctx)}}}function hn(){if(Ze=!1,De>1001)return;const e=dt;dt=[],vn(e),Ze||(De=0,Je=null)}function st(e){Ze||(Ze=!0,queueMicrotask(hn)),Je=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(qe|re)){if(!(r&U))return;t.f^=U}}dt.push(t)}function hr(e,t){var r=e.first,a=[];e:for(;r!==null;){var n=r.f,s=(n&re)!==0,l=s&&(n&U)!==0,d=r.next;if(!l&&!(n&se))if(n&Be){if(s)r.f^=U;else try{We(r)&&at(r)}catch(c){nt(c,r,null,r.ctx)}var u=r.first;if(u!==null){r=u;continue}}else n&Kt&&a.push(r);if(d===null){let c=r.parent;for(;c!==null;){if(e===c)break e;var o=c.next;if(o!==null){r=o;continue e}c=c.parent}}r=d}for(var f=0;f<a.length;f++)u=a[f],t.push(u),hr(u,t)}function _(e){var f;var t=e.f,r=(t&te)!==0;if(r&&t&Oe){var a=rr(e);return Et(e),a}if(C!==null){ie!==null&&ie.includes(e)&&Pr();var n=C.deps;G===null&&n!==null&&n[Y]===e?Y++:G===null?G=[e]:G.push(e),me!==null&&x!==null&&x.f&U&&!(x.f&re)&&me.includes(e)&&(oe(x,ge),st(x))}else if(r&&e.deps===null)for(var s=e,l=s.parent,d=s;l!==null;)if(l.f&te){var u=l;d=u,l=u.parent}else{var o=l;(f=o.deriveds)!=null&&f.includes(d)||(o.deriveds??(o.deriveds=[])).push(d);break}return r&&(s=e,We(s)&&nr(s)),e.v}function it(e){const t=C;try{return C=null,e()}finally{C=t}}const _n=~(ge|Ge|U);function oe(e,t){e.f=e.f&_n|t}function Nt(e,t=!1,r){K={p:K,c:null,e:null,m:!1,s:e,x:null,l:null}}function Tt(e){const t=K;if(t!==null){const l=t.e;if(l!==null){var r=x,a=C;t.e=null;try{for(var n=0;n<l.length;n++){var s=l[n];J(s.effect),le(s.reaction),tt(s.fn)}}finally{J(r),le(a)}}K=t.p,t.m=!0}return{}}function pn(e){var t=C,r=x;le(null),J(null);try{return e()}finally{le(t),J(r)}}const _r=new Set,ht=new Set;function mn(e,t,r,a){function n(s){if(a.capture||Le.call(t,s),!s.cancelBubble)return pn(()=>r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?rt(()=>{t.addEventListener(e,n,a)}):t.addEventListener(e,n,a),n}function gn(e,t,r,a,n){var s={capture:a,passive:n},l=mn(e,t,r,s);(t===document.body||t===window||t===document)&&Qr(()=>{t.removeEventListener(e,l,s)})}function At(e){for(var t=0;t<e.length;t++)_r.add(e[t]);for(var r of ht)r(e)}function Le(e){var E;var t=this,r=t.ownerDocument,a=e.type,n=((E=e.composedPath)==null?void 0:E.call(e))||[],s=n[0]||e.target,l=0,d=e.__root;if(d){var u=n.indexOf(d);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var o=n.indexOf(t);if(o===-1)return;u<=o&&(l=u)}if(s=n[l]||e.target,s!==t){br(e,"currentTarget",{configurable:!0,get(){return s||r}});var f=C,c=x;le(null),J(null);try{for(var i,v=[];s!==null;){var h=s.assignedSlot||s.parentNode||s.host||null;try{var g=s["__"+a];if(g!==void 0&&!s.disabled)if(bt(g)){var[S,...y]=g;S.apply(s,[e,...y])}else g.call(s,e)}catch(T){i?v.push(T):i=T}if(e.cancelBubble||h===t||h===null)break;s=h}if(i){for(let T of v)queueMicrotask(()=>{throw T});throw i}}finally{e.__root=t,delete e.currentTarget,le(f),J(c)}}}function bn(e){var t;t=document.head.appendChild($e());try{Ke(()=>e(t),zt)}finally{}}function wn(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function _t(e,t){var r=x;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function O(e,t){var r=(t&Kr)!==0,a=(t&Wr)!==0,n,s=!e.startsWith("<!>");return()=>{n===void 0&&(n=wn(s?e:"<!>"+e),r||(n=Ye(n)));var l=a?document.importNode(n,!0):n.cloneNode(!0);if(r){var d=Ye(l),u=l.lastChild;_t(d,u)}else _t(l,l);return l}}function X(){var e=document.createDocumentFragment(),t=document.createComment(""),r=$e();return e.append(t,r),_t(t,r),e}function w(e,t){e!==null&&e.before(t)}const yn=["touchstart","touchmove"];function kn(e){return yn.includes(e)}let pt=!0;function V(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function En(e,t){return xn(e,t)}const xe=new Map;function xn(e,{target:t,anchor:r,props:a={},events:n,context:s,intro:l=!0}){Hr();var d=new Set,u=c=>{for(var i=0;i<c.length;i++){var v=c[i];if(!d.has(v)){d.add(v);var h=kn(v);t.addEventListener(v,Le,{passive:h});var g=xe.get(v);g===void 0?(document.addEventListener(v,Le,{passive:h}),xe.set(v,1)):xe.set(v,g+1)}}};u(wt(_r)),ht.add(u);var o=void 0,f=$r(()=>{var c=r??t.appendChild($e());return Ce(()=>{if(s){Nt({});var i=K;i.c=s}n&&(a.$$events=n),pt=l,o=e(c,a)||{},pt=!0,s&&Tt()}),()=>{var h;for(var i of d){t.removeEventListener(i,Le);var v=xe.get(i);--v===0?(document.removeEventListener(i,Le),xe.delete(i)):xe.set(i,v)}ht.delete(u),Ft.delete(o),c!==r&&((h=c.parentNode)==null||h.removeChild(c))}});return Ft.set(o,f),o}let Ft=new WeakMap;function H(e,t,r=!1){var a=e,n=null,s=null,l=z,d=r?Ve:0,u=!1;const o=(c,i=!0)=>{u=!0,f(i,c)},f=(c,i)=>{l!==(l=c)&&(l?(n?Xe(n):i&&(n=Ce(()=>i(a))),s&&ft(s,()=>{s=null})):(s?Xe(s):i&&(s=Ce(()=>i(a))),n&&ft(n,()=>{n=null})))};Ke(()=>{u=!1,t(o),u||f(null,null)},d)}function Ae(e,t){return t}function Sn(e,t,r,a){for(var n=[],s=t.length,l=0;l<s;l++)xt(t[l].e,n,!0);var d=s>0&&n.length===0&&r!==null;if(d){var u=r.parentNode;Ur(u),u.append(r),a.clear(),_e(e,t[0].prev,t[s-1].next)}ur(n,()=>{for(var o=0;o<s;o++){var f=t[o];d||(a.delete(f.k),_e(e,f.prev,f.next)),be(f.e,!d)}})}function Me(e,t,r,a,n,s=null){var l=e,d={flags:t,items:new Map,first:null},u=(t&Jt)!==0;if(u){var o=e;l=o.appendChild($e())}var f=null,c=!1;Ke(()=>{var i=r(),v=bt(i)?i:i==null?[]:wt(i),h=v.length;if(!(c&&h===0)){c=h===0;{var g=C;Nn(v,d,l,n,t,(g.f&se)!==0,a)}s!==null&&(h===0?f?Xe(f):f=Ce(()=>s(l)):f!==null&&ft(f,()=>{f=null})),r()}})}function Nn(e,t,r,a,n,s,l){var he,R,W,q;var d=(n&Br)!==0,u=(n&(yt|kt))!==0,o=e.length,f=t.items,c=t.first,i=c,v,h=null,g,S=[],y=[],E,T,b,m;if(d)for(m=0;m<o;m+=1)E=e[m],T=l(E,m),b=f.get(T),b!==void 0&&((he=b.a)==null||he.measure(),(g??(g=new Set)).add(b));for(m=0;m<o;m+=1){if(E=e[m],T=l(E,m),b=f.get(T),b===void 0){var L=i?i.e.nodes_start:r;h=An(L,t,h,h===null?t.first:h.next,E,T,m,a,n),f.set(T,h),S=[],y=[],i=h.next;continue}if(u&&Tn(b,E,m,n),b.e.f&se&&(Xe(b.e),d&&((R=b.a)==null||R.unfix(),(g??(g=new Set)).delete(b))),b!==i){if(v!==void 0&&v.has(b)){if(S.length<y.length){var A=y[0],P;h=A.prev;var Q=S[0],D=S[S.length-1];for(P=0;P<S.length;P+=1)It(S[P],A,r);for(P=0;P<y.length;P+=1)v.delete(y[P]);_e(t,Q.prev,D.next),_e(t,h,Q),_e(t,D,A),i=A,h=D,m-=1,S=[],y=[]}else v.delete(b),It(b,i,r),_e(t,b.prev,b.next),_e(t,b,h===null?t.first:h.next),_e(t,h,b),h=b;continue}for(S=[],y=[];i!==null&&i.k!==T;)(s||!(i.e.f&se))&&(v??(v=new Set)).add(i),y.push(i),i=i.next;if(i===null)continue;b=i}S.push(b),h=b,i=b.next}if(i!==null||v!==void 0){for(var F=v===void 0?[]:wt(v);i!==null;)(s||!(i.e.f&se))&&F.push(i),i=i.next;var B=F.length;if(B>0){var ue=n&Jt&&o===0?r:null;if(d){for(m=0;m<B;m+=1)(W=F[m].a)==null||W.measure();for(m=0;m<B;m+=1)(q=F[m].a)==null||q.fix()}Sn(t,F,ue,f)}}d&&rt(()=>{var ne;if(g!==void 0)for(b of g)(ne=b.a)==null||ne.apply()}),x.first=t.first&&t.first.e,x.last=h&&h.e}function Tn(e,t,r,a){a&yt&&ut(e.v,t),a&kt?ut(e.i,r):e.i=r}function An(e,t,r,a,n,s,l,d,u){var o=(u&yt)!==0,f=(u&qr)===0,c=o?f?Xt(n):Z(n):n,i=u&kt?Z(l):l,v={i,v:c,k:s,a:null,e:null,prev:r,next:a};try{return v.e=Ce(()=>d(e,c,i),zr),v.e.prev=r&&r.e,v.e.next=a&&a.e,r===null?t.first=v:(r.next=v,r.e.next=v.e),a!==null&&(a.prev=v,a.e.prev=v.e),v}finally{}}function It(e,t,r){for(var a=e.next?e.next.e.nodes_start:r,n=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==a;){var l=et(s);n.before(s),s=l}}function _e(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function Lt(e,t,...r){var a=e,n=pe,s;Ke(()=>{n!==(n=t())&&(s&&(be(s),s=null),s=Ce(()=>n(a,...r)))},Ve)}function ae(e,t,r,a){var n=e.__attributes??(e.__attributes={});n[t]!==(n[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Nr]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Mn(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var Pt=new Map;function Mn(e){var t=Pt.get(e.nodeName);if(t)return t;Pt.set(e.nodeName,t=[]);for(var r,a=e,n=Element.prototype;n!==a;){r=wr(a);for(var s in r)r[s].set&&t.push(s);a=Vt(a)}return t}function p(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}const Cn=()=>performance.now(),de={tick:e=>requestAnimationFrame(e),now:()=>Cn(),tasks:new Set};function pr(){const e=de.now();de.tasks.forEach(t=>{t.c(e)||(de.tasks.delete(t),t.f())}),de.tasks.size!==0&&de.tick(pr)}function On(e){let t;return de.tasks.size===0&&de.tick(pr),{promise:new Promise(r=>{de.tasks.add(t={c:e,f:r})}),abort(){de.tasks.delete(t)}}}function Dt(e,t){e.dispatchEvent(new CustomEvent(t))}function jn(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Rt(e){const t={},r=e.split(";");for(const a of r){const[n,s]=a.split(":");if(!n||s===void 0)break;const l=jn(n.trim());t[l]=s.trim()}return t}const Fn=e=>e;function mt(e,t,r,a){var n=(e&Vr)!==0,s="in",l,d=t.inert,u,o;function f(){var g=C,S=x;le(null),J(null);try{return l??(l=r()(t,(a==null?void 0:a())??{},{direction:s}))}finally{le(g),J(S)}}var c={is_global:n,in(){t.inert=d,u==null||u.abort(),Dt(t,"introstart"),u=mr(t,f(),o,1,()=>{Dt(t,"introend"),u==null||u.abort(),u=l=void 0})},out(g){{g==null||g(),l=void 0;return}},stop:()=>{u==null||u.abort()}},i=x;if((i.transitions??(i.transitions=[])).push(c),pt){var v=n;if(!v){for(var h=i.parent;h&&h.f&Ve;)for(;(h=h.parent)&&!(h.f&Qe););v=!h||(h.f&Wt)!==0}v&&tt(()=>{it(()=>c.in())})}}function mr(e,t,r,a,n){if(Er(t)){var s,l=!1;return rt(()=>{if(!l){var g=t({direction:"in"});s=mr(e,g,r,a,n)}}),{abort:()=>{l=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(!(t!=null&&t.duration))return n(),{abort:pe,deactivate:pe,reset:pe,t:()=>a};const{delay:d=0,css:u,tick:o,easing:f=Fn}=t;var c=[];if(o&&o(0,1),u){var i=Rt(u(0,1));c.push(i,i)}var v=()=>1-a,h=e.animate(c,{duration:d});return h.onfinish=()=>{var g=1-a,S=a-g,y=t.duration*Math.abs(S),E=[];if(y>0){if(u)for(var T=Math.ceil(y/16.666666666666668),b=0;b<=T;b+=1){var m=g+S*f(b/T),L=u(m,1-m);E.push(Rt(L))}v=()=>{var A=h.currentTime;return g+S*f(A/y)},o&&On(()=>{if(h.playState!=="running")return!1;var A=v();return o(A,1-A),!0})}h=e.animate(E,{duration:y,fill:"forwards"}),h.onfinish=()=>{v=()=>a,o==null||o(a,1-a),n()}},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=pe)},deactivate:()=>{n=pe},reset:()=>{},t:()=>v()}}function Bt(e,t){return e===t||(e==null?void 0:e[Pe])===t}function In(e={},t,r,a){return tt(()=>{var n,s;return en(()=>{n=s,s=[],it(()=>{e!==r(...s)&&(t(e,...s),n&&Bt(r(...n),e)&&t(null,...n))})}),()=>{rt(()=>{s&&Bt(r(...s),e)&&t(null,...s)})}}),e}let ze=!1;function Ln(e){var t=ze;try{return ze=!1,[e(),ze]}finally{ze=t}}function Pn(e){for(var t=x,r=x;t!==null&&!(t.f&(re|qe));)t=t.parent;try{return J(t),e()}finally{J(r)}}function Dn(e,t,r,a){var b;var n=!Yt,s=(r&Gr)!==0,l=!1,d;[d,l]=Ln(()=>e[t]);var u=Pe in e||Sr in e,o=((b=Ne(e,t))==null?void 0:b.set)??(u&&s&&t in e?m=>e[t]=m:void 0),f=a,c=!0,i=!1,v=()=>(i=!0,c&&(c=!1,f=a),f);d===void 0&&a!==void 0&&(o&&n&&Fr(),d=v(),o&&o(d));var h;if(h=()=>{var m=e[t];return m===void 0?v():(c=!0,i=!1,m)},o){var g=e.$$legacy;return function(m,L){return arguments.length>0?((!L||g||l)&&o(L?h():m),m):h()}}var S=!1,y=!1,E=Xt(d),T=Pn(()=>Yr(()=>{var m=h(),L=_(E);return S?(S=!1,y=!0,L):(y=!1,E.v=m)}));return function(m,L){if(arguments.length>0){const A=L?_(T):ee(m);return T.equals(A)||(S=!0,j(E,A),i&&f!==void 0&&(f=A),it(()=>_(T))),m}return _(T)}}function Rn(e){K===null&&nn(),ar(()=>{const t=it(e);if(typeof t=="function")return t})}const Bn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bn);const qn=e=>e;function gt(e,{delay:t=0,duration:r=400,easing:a=qn}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:a,css:s=>`opacity: ${s*n}`}}var Gn=O('<span class="svelte-6mcloa"> </span>'),Vn=O('<span class="svelte-6mcloa"> </span>'),Kn=O('<link rel="stylesheet" href="https://guyotjs.github.io/bcss/bc.css"> <div class="text-center f-xxl pt-xl svelte-6mcloa"><!> <br> <!></div>',1);function Wn(e,t){var r=Kn(),a=k(M(r),2),n=N(a);Me(n,16,()=>"GUYOT",Ae,(l,d,u)=>{var o=X(),f=M(o);{var c=i=>{var v=Gn(),h=N(v);I(()=>{p(v,"white",t.dark),V(h,d)}),mt(1,v,()=>gt,()=>({delay:500+u*150,duration:800})),w(i,v)};H(f,i=>{t.visable&&i(c)})}w(l,o)});var s=k(n,4);Me(s,17,()=>t.version,Ae,(l,d,u)=>{var o=X(),f=M(o);{var c=i=>{var v=Vn(),h=N(v);I(()=>{p(v,"white",t.dark),V(h,_(d))}),mt(1,v,()=>gt,()=>({delay:1e3+u*150,duration:800})),w(i,v)};H(f,i=>{t.visable&&i(c)})}w(l,o)}),w(e,r)}var zn=O('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <div class="text-center icons svelte-pu1xpr"><a href="https://github.com/guyotJs" class="svelte-pu1xpr"><i class="fa fa-github svelte-pu1xpr"></i><span class="opacity svelte-pu1xpr">Github</span></a> &nbsp;&nbsp; <a href="https://classicmc-studios.github.io" class="svelte-pu1xpr"><i class="fa fa-cube svelte-pu1xpr"></i><span class="opacity svelte-pu1xpr">Website</span></a> &nbsp;&nbsp; <a href="mailto: classicmclive+guyot@gmail.com" class="svelte-pu1xpr"><i class="fa fa-envelope svelte-pu1xpr"></i><span class="opacity svelte-pu1xpr">Email</span></a> &nbsp;&nbsp; <a href="https://snojs.github.io" class="svelte-pu1xpr"><i class="fa fa-snowflake-o svelte-pu1xpr"></i><span class="opacity svelte-pu1xpr">snojs</span></a> &nbsp;<hr class="svelte-pu1xpr"></div>',1);function Hn(e,t){var r=zn(),a=k(M(r),2),n=N(a),s=N(n),l=k(n,2),d=N(l),u=k(l,2),o=N(u),f=k(u,2),c=N(f);I(()=>{p(s,"white",t.dark),p(d,"white",t.dark),p(o,"white",t.dark),p(c,"white",t.dark)}),w(e,r)}var Un=O('<link rel="stylesheet" href="https://guyotjs.github.io/bcss/bc.css"> <div class="text-center"><b>Card of the Week</b><br> <hr class="svelte-7yemf0"> <span class="italic underline held svelte-7yemf0"><span class="word svelte-7yemf0"> </span> <img class="holder r border svelte-7yemf0" alt="Marchalnd"></span></div>',1);function Yn(e,t){let r="Stronghold",a="https://wiki.dominionstrategy.com/images/5/50/Stronghold.jpg";var n=Un(),s=k(M(n),2),l=N(s),d=k(l,5),u=N(d),o=N(u),f=k(u,2);I(()=>{p(l,"gray",!t.dark),p(l,"white",t.dark),p(d,"nue-calm",t.dark),p(d,"calm",!t.dark),V(o,r),ae(f,"src",a)}),w(e,n)}function Xn(e,t){j(t,"GBA")}function Zn(e,t){j(t,"NONE")}function Jn(e,t){j(t,"SNES")}function Qn(e,t){j(t,"N64")}var $n=O('<p style="font-size:12px;" class="no-border">Start <b>Playing</b> Fronds!<br> Load your own ROM <a href="https://nueot-437a9.web.app/emulate" class="nue-calm no-m svelte-9y9sjo">Here</a>!</p>'),ea=O('<a class="no-underline svelte-9y9sjo"> </a><br>',1),ta=O('<a class="no-underline svelte-9y9sjo"> </a>&emsp;',1),ra=O('<a class="no-underline svelte-9y9sjo"> </a><br>',1),na=O('<a class="no-underline svelte-9y9sjo"> </a>&emsp;',1),aa=O('<a class="no-underline svelte-9y9sjo"> </a><br>',1),sa=O('<a class="no-underline svelte-9y9sjo"> </a>&emsp;',1),ia=O('<link rel="stylesheet" href="https://guyotjs.github.io/bcss/bc.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <div class="text-center p w-react m-m blur svelte-9y9sjo"><div style="display:inline-block"><i class="fa fa-gamepad"></i> <button class="f fake-button svelte-9y9sjo">Fronds</button></div> <hr class="svelte-9y9sjo"> <div><button class="svelte-9y9sjo">GBA</button> <button class="svelte-9y9sjo">SNES</button> <button class="svelte-9y9sjo">N64</button><br> <hr class="svelte-9y9sjo"> <!></div></div>',1);function la(e,t){let r=ve("NONE"),a=ee([["Doom","./games/doom.html"],["FF 1&2 Advance","https://nueot-437a9.web.app/games/ff12.html"],["FFV Advance","https://nueot-437a9.web.app/games/ffv.html",!0],["Leafgreen","https://nueot-437a9.web.app/games/lg.html"],["FFIV Advance","https://nueot-437a9.web.app/games/ffivadv.html"],["Mario Kart Super Circut","https://nueot-437a9.web.app/games/mksc.html",!0],["Emerald","https://nueot-437a9.web.app/games/emerald.html"],["Minish Cap","https://nueot-437a9.web.app/games/mc.html"],["Spyro","https://nueot-437a9.web.app/games/spyro.html",!0],["FFVI Adv","https://nueot-437a9.web.app/games/ffvien.html"],["Kirby Nightmare","https://nueot-437a9.web.app/games/nightmare.html"]]),n=ee([["FFIV","https://nueot-437a9.web.app/games/ffiv-snes.html"],["FFVI (3)","https://nueot-437a9.web.app/games/ffvi-snes.html"],["Link to the Past","https://nueot-437a9.web.app/games/lttp.html",!0],["Super Mario Kart","https://nueot-437a9.web.app/games/smk.html"],["Yoshi's Island","https://nueot-437a9.web.app/games/yo.html"],["Yoshi's Island ROM Hack","https://nueot-437a9.web.app/games/yoshi.html",!0],["Mario World","https://nueot-437a9.web.app/games/smw.html"],["Earthbound","https://nueot-437a9.web.app/games/eb.html"],["Street Fighter 2","https://nueot-437a9.web.app/games/sf2t.html",!0],["Donkey Kong Country","https://nueot-437a9.web.app/games/dkc.html"],["Super Meteroid","https://nueot-437a9.web.app/games/sm.html"],["F-Zero","https://nueot-437a9.web.app/games/f0.html",!0],["Star Fox","https://nueot-437a9.web.app/games/sf.html"],["Kirby Superstar","https://nueot-437a9.web.app/games/superkirby.html"],["Pilotwings","https://nueot-437a9.web.app/games/pilot.html",!0],["Secret of Mana","https://nueot-437a9.web.app/games/secretom.html"],["Super Ghouls and Ghosts","https://nueot-437a9.web.app/games/ghouls.html"],["Megaman X","https://nueot-437a9.web.app/games/megamanx.html",!0],["Contra 3","https://nueot-437a9.web.app/games/contra3.html"],["Kirby Dreamland","https://nueot-437a9.web.app/games/dreamland.html"],["Super Mario RPG","https://nueot-437a9.web.app/games/mariorpg.html",!0],["Terranigma","https://nueot-437a9.web.app/games/terranigma.html"],["Super Mario World","https://nueot-437a9.web.app/games/smw.html"]]),s=ee([["Mario Kart 64","https://nueot-437a9.web.app/games/mk64.html"],["Super Smash Bros 64","https://nueot-437a9.web.app/games/ssb.html"],["Paper Mario","https://nueot-437a9.web.app/games/pm.html",!0],["Super Mario 64","https://nueot-437a9.web.app/games/sm64.html"],["Mario Tennis 64","https://nueot-437a9.web.app/games/mt.html"],["Star Fox 64","https://nueot-437a9.web.app/games/sf64.html",!0],["Donkey Kong 64","https://nueot-437a9.web.app/games/dk64.html"],["Harvest Moon 64","https://nueot-437a9.web.app/games/hm64.html"],["Ocarina of Time","https://nueot-437a9.web.app/games/tlozoc.html",!0],["Banjo Kazooie","https://nueot-437a9.web.app/games/bk64.html"],["Quake 64","https://nueot-437a9.web.app/games/quake64.html"],["Kirby 64","https://nueot-437a9.web.app/games/kirby64.html"]]);var l=ia(),d=k(M(l),4),u=N(d),o=k(N(u),2);o.__click=[Zn,r];var f=k(u,4),c=N(f);c.__click=[Xn,r];var i=k(c,2);i.__click=[Jn,r];var v=k(i,2);v.__click=[Qn,r];var h=k(v,5);{var g=y=>{var E=$n();I(()=>{p(E,"gray",!t.dark),p(E,"white",t.dark)}),w(y,E)},S=y=>{var E=X(),T=M(E);{var b=L=>{var A=X(),P=M(A);Me(P,17,()=>a,Ae,(Q,D)=>{var F=X(),B=M(F);{var ue=R=>{var W=ea(),q=M(W),ne=N(q);I(()=>{ae(q,"href",_(D)[1]),p(q,"nue-calm",t.dark),p(q,"calm",!t.dark),V(ne,_(D)[0])}),w(R,W)},he=R=>{var W=ta(),q=M(W),ne=N(q);I(()=>{ae(q,"href",_(D)[1]),p(q,"nue-calm",t.dark),p(q,"calm",!t.dark),V(ne,_(D)[0])}),w(R,W)};H(B,R=>{_(D)[2]?R(ue):R(he,!1)})}w(Q,F)}),w(L,A)},m=L=>{var A=X(),P=M(A);{var Q=F=>{var B=X(),ue=M(B);Me(ue,17,()=>n,Ae,(he,R)=>{var W=X(),q=M(W);{var ne=fe=>{var ye=ra(),$=M(ye),Fe=N($);I(()=>{ae($,"href",_(R)[1]),p($,"nue-calm",t.dark),p($,"calm",!t.dark),V(Fe,_(R)[0])}),w(fe,ye)},we=fe=>{var ye=na(),$=M(ye),Fe=N($);I(()=>{ae($,"href",_(R)[1]),p($,"nue-calm",t.dark),p($,"calm",!t.dark),V(Fe,_(R)[0])}),w(fe,ye)};H(q,fe=>{_(R)[2]?fe(ne):fe(we,!1)})}w(he,W)}),w(F,B)},D=F=>{var B=X(),ue=M(B);{var he=R=>{var W=X(),q=M(W);Me(q,17,()=>s,Ae,(ne,we)=>{var fe=X(),ye=M(fe);{var $=Ee=>{var Ie=aa(),ce=M(Ie),lt=N(ce);I(()=>{ae(ce,"href",_(we)[1]),p(ce,"nue-calm",t.dark),p(ce,"calm",!t.dark),V(lt,_(we)[0])}),w(Ee,Ie)},Fe=Ee=>{var Ie=sa(),ce=M(Ie),lt=N(ce);I(()=>{ae(ce,"href",_(we)[1]),p(ce,"nue-calm",t.dark),p(ce,"calm",!t.dark),V(lt,_(we)[0])}),w(Ee,Ie)};H(ye,Ee=>{_(we)[2]?Ee($):Ee(Fe,!1)})}w(ne,fe)}),w(R,W)};H(ue,R=>{_(r)=="N64"&&R(he)},!0)}w(F,B)};H(P,F=>{_(r)=="SNES"?F(Q):F(D,!1)},!0)}w(L,A)};H(T,L=>{_(r)=="GBA"?L(b):L(m,!1)},!0)}w(y,E)};H(h,y=>{_(r)=="NONE"?y(g):y(S,!1)})}I(()=>{p(d,"white-border",t.dark),p(d,"dark",!t.dark),p(d,"white",t.dark),p(o,"white",t.dark),p(c,"white",t.dark),p(i,"white",t.dark),p(v,"white",t.dark)}),w(e,l)}At(["click"]);var oa=O('<a class="no-underline svelte-zzv77n"> </a><br>',1),ua=O('<a class="no-underline svelte-zzv77n"> </a>&emsp;',1),fa=O('<link rel="stylesheet" href="https://guyotjs.github.io/bcss/bc.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <div class="text-center p w-react m-m blur svelte-zzv77n"><div style="display:inline-block"><i class="fa fa-laptop"></i> Sites</div> <hr class="svelte-zzv77n"> <div class="text-center"></div></div>',1);function ca(e,t){let r=ee([["Books","https://guyotjs.github.io/books"],["Credits","https://guyotjs.github.io/credits"],["Time","https://guyotjs.github.io/tm",!0],["Tusky Time","https://tuskytime.org"],["Weston","https://classicmc-studios.github.io/Westonism/snowstorm/"],["Boyce VA","https://guyotjs.github.io/boyce/",!0],["Sno","https://snojs.github.io"],["Polycarp","https://guyotjs.github.io/Polycarp"],["Bible","https://classicmc-studios.github.io/bible/",!0]]);var a=fa(),n=k(M(a),4),s=k(N(n),4);Me(s,21,()=>r,Ae,(l,d)=>{var u=X(),o=M(u);{var f=i=>{var v=oa(),h=M(v),g=N(h);I(()=>{ae(h,"href",_(d)[1]),p(h,"nue-calm",t.dark),p(h,"calm",!t.dark),V(g,_(d)[0])}),w(i,v)},c=i=>{var v=ua(),h=M(v),g=N(h);I(()=>{ae(h,"href",_(d)[1]),p(h,"nue-calm",t.dark),p(h,"calm",!t.dark),V(g,_(d)[0])}),w(i,v)};H(o,i=>{_(d)[2]?i(f):i(c,!1)})}w(l,u)}),I(()=>{p(n,"white",t.dark),p(n,"dark",!t.dark)}),w(e,a)}function qt(e,t){j(t,!_(t))}var va=O('<button class="fake-button f svelte-1voesg5">↓ <i class="fa fa-wrench"></i> Extras ↓</button>'),da=O('<button class="fake-button f svelte-1voesg5">↑ <i class="fa fa-wrench"></i> Extras ↑</button>'),ha=O('<span>Dark mode</span> <button class="svelte-1voesg5"><i class="fa fa-moon-o"></i> <span style="display:none;">a</span></button>',1),_a=O('<span class="white">Light mode</span> <button class="svelte-1voesg5"><i class="fa fa-sun-o white"></i> <span style="display:none;">a</span></button>',1),pa=O('<div class="text-center"><!><br> <p>Release <b class="true-serif"> </b>, <em> </em><br> Made by, <span class="hover svelte-1voesg5">Weston</span><br> <button class="svelte-1voesg5">Legal + Info</button></p></div>'),ma=O('<link rel="stylesheet" href="https://guyotjs.github.io/bcss/bc.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <div class="text-center p w-react m-m blur svelte-1voesg5"><div style="display:inline-block"><!></div> <hr class="svelte-1voesg5"> <!></div>',1);function ga(e,t){let r=ve(!1);var a=ma(),n=k(M(a),4),s=N(n),l=N(s);{var d=c=>{var i=va();i.__click=[qt,r],I(()=>p(i,"white",t.dark)),w(c,i)},u=c=>{var i=da();i.__click=[qt,r],I(()=>p(i,"white",t.dark)),w(c,i)};H(l,c=>{_(r)?c(u,!1):c(d)})}var o=k(s,4);{var f=c=>{var i=pa(),v=N(i);{var h=A=>{var P=ha(),Q=k(M(P),2);Q.__click=function(...D){var F;(F=t.swapMode)==null||F.apply(this,D)},w(A,P)},g=A=>{var P=_a(),Q=k(M(P),2);Q.__click=function(...D){var F;(F=t.swapMode)==null||F.apply(this,D)},w(A,P)};H(v,A=>{t.dark?A(g,!1):A(h)})}var S=k(v,3),y=k(N(S)),E=N(y),T=k(y,2),b=N(T),m=k(T,3),L=k(m,3);L.__click=function(...A){var P;(P=t.swapVisibility)==null||P.apply(this,A)},I(()=>{p(S,"white",t.dark),p(y,"white",t.dark),V(E,t.version),p(T,"white",t.dark),V(b,t.date),p(m,"white",t.dark),p(L,"white",t.dark)}),w(c,i)};H(o,c=>{_(r)&&c(f)})}I(()=>{p(n,"white-border",t.dark),p(n,"dark",!t.dark)}),w(e,a)}At(["click"]);var ba=(e,t)=>{e.target===_(t)&&_(t).close()},wa=O('<dialog class="p-m r  svelte-1bv2de7"><div><!> <hr class="svelte-1bv2de7"> <!></div></dialog>');function ya(e,t){Nt(t,!0);let r=Dn(t,"showModal",15),a=ve(void 0);ar(()=>{r()&&_(a).showModal()});var n=wa();n.__click=[ba,a];var s=N(n),l=N(s);Lt(l,()=>t.header??pe);var d=k(l,2),u=k(d,2);Lt(u,()=>t.children??pe),In(n,o=>j(a,o),()=>_(a)),I(()=>{p(n,"border-white",!t.dark),p(n,"border-dark",t.dark),p(n,"white",t.dark),p(d,"hr-white",!t.dark),p(d,"hr-dark",t.dark)}),gn("close",n,()=>r(!1)),w(e,n),Tt()}At(["click"]);function Gt(e,t,r){const a=new Date;a.setTime(a.getTime()+r*24*60*60*1e3);let n="expires="+a.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}function ka(e){let t=e+"=",a=decodeURIComponent(document.cookie).split(";");for(let n=0;n<a.length;n++){let s=a[n];for(;s.charAt(0)==" ";)s=s.substring(1);if(s.indexOf(t)==0)return s.substring(t.length,s.length)}return""}var Ea=O('<link rel="shortcut icon" href="https://guyotjs.github.io/duckclear.png" type="image/x-icon">'),xa=O("<h2> </h2>"),Sa=O('<div style="float: right;"><img src="https://nueot-437a9.web.app/duckclear2.png" width="100px" alt="Guyot"></div> The Guyot Project is an open source unblocked emulator<br> The Guyot Project ©2025 is liscensed with <u>MIT</u>.<br> <br> All games are owned by Nintendo.<br>',1),Na=O("<div><!> <!> <!> <!> <!> <!></div>"),Ta=O('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <div class="img svelte-2betpe"></div> <!> <!>',1);function Aa(e,t){Nt(t,!0);let r=ve(!1),a="XXI",n="01/16/2025",s=ve(!1),l=ve("url(https://tuskytime.org/gbaLight.png)"),d=ve("rgba(255,255,255,0.8)"),u=ve("lighten"),o=ve(!1);function f(){j(o,!_(o))}function c(){_(s)?(Gt("dark","false",365),j(s,!1),j(u,"lighten"),j(l,"url(https://tuskytime.org/gbaLight.png)"),j(d,"rgba(255,255,255,0.8)")):(Gt("dark","true",365),j(s,!0),j(u,"darken"),j(l,"url(https://tuskytime.org/gbaDark.png)"),j(d,"rgba(36,36,36,0.9)"))}ka("dark")=="true"&&c(),Rn(async()=>{j(r,!0)});var i=Ta();bn(y=>{var E=Ea();I(()=>Qt.title=`Guyot ${a??""}`),w(y,E)});var v=k(M(i),2),h=k(v,2);Wn(h,{get visable(){return _(r)},get version(){return a},get dark(){return _(s)}});var g=k(h,2);{var S=y=>{var E=Na(),T=N(E);Hn(T,{get dark(){return _(s)}});var b=k(T,2);Yn(b,{get dark(){return _(s)}});var m=k(b,2);la(m,{get dark(){return _(s)}});var L=k(m,2);ca(L,{get dark(){return _(s)}});var A=k(L,2);ga(A,{get dark(){return _(s)},swapMode:c,get version(){return a},get date(){return n},swapVisibility:f});var P=k(A,2);ya(P,{get dark(){return _(s)},get showModal(){return _(o)},set showModal(D){j(o,ee(D))},header:D=>{var F=xa(),B=N(F);I(()=>V(B,`Guyot ${a}`)),w(D,F)},children:(D,F)=>{var B=Sa(),ue=k(M(B),7);I(()=>V(ue,` Guyot ${a} includes GBA SNES, and N64 titles.`)),w(D,B)},$$slots:{header:!0,default:!0}}),mt(1,E,()=>gt,()=>({delay:1850,duration:800})),w(y,E)};H(g,y=>{_(r)&&y(S)})}I(()=>ae(v,"style",`--currentbg: ${_(l)??""};--color:${_(d)??""};--blender:${_(u)??""};`)),w(e,i),Tt()}En(Aa,{target:document.getElementById("app")});
