import{B as m,k as l,y as k,C as q}from"./utils.6KhQ9vBw.js";const c=[];function v(s,t){return{subscribe:j(s,t).subscribe}}function j(s,t=l){let n=null;const o=new Set;function u(r){if(q(s,r)&&(s=r,n)){const i=!c.length;for(const e of o)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){u(r(s))}function f(r,i=l){const e=[r,i];return o.add(e),o.size===1&&(n=t(u,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:u,update:b,subscribe:f}}function B(s,t,n){const o=!Array.isArray(s),u=o?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return v(n,(f,r)=>{let i=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=t(o?e[0]:e,f,r);b?f(a):p=typeof a=="function"?a:l},w=u.map((a,_)=>m(a,z=>{e[_]=z,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){k(w),p(),i=!1}})}function T(s){return{subscribe:s.subscribe.bind(s)}}function C(s){let t;return m(s,n=>t=n)(),t}var y;const x=((y=globalThis.__sveltekit_mzyf4j)==null?void 0:y.base)??"";var h;const E=((h=globalThis.__sveltekit_mzyf4j)==null?void 0:h.assets)??x;export{v as a,x as b,E as c,B as d,C as g,T as r,j as w};
