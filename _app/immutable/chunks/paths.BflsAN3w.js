import{B as k,k as l,y as m,C as q}from"./utils.jAVDF0d8.js";const a=[];function x(s,t){return{subscribe:z(s,t).subscribe}}function z(s,t=l){let n=null;const o=new Set;function u(r){if(q(s,r)&&(s=r,n)){const i=!a.length;for(const e of o)e[1](),a.push(e,s);if(i){for(let e=0;e<a.length;e+=2)a[e][0](a[e+1]);a.length=0}}}function b(r){u(r(s))}function f(r,i=l){const e=[r,i];return o.add(e),o.size===1&&(n=t(u,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:u,update:b,subscribe:f}}function T(s,t,n){const o=!Array.isArray(s),u=o?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return x(n,(f,r)=>{let i=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const c=t(o?e[0]:e,f,r);b?f(c):p=typeof c=="function"?c:l},v=u.map((c,_)=>k(c,w=>{e[_]=w,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){m(v),p(),i=!1}})}function C(s){return{subscribe:s.subscribe.bind(s)}}function E(s){let t;return k(s,n=>t=n)(),t}var y;const A=((y=globalThis.__sveltekit_dynet1)==null?void 0:y.base)??"/slick-portfolio-svelte-5";var h;const S=((h=globalThis.__sveltekit_dynet1)==null?void 0:h.assets)??A;export{x as a,A as b,S as c,T as d,E as g,C as r,z as w};
