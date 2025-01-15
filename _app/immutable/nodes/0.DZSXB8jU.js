import{o as ge,p as Be,a as r,b as m,s as Le,h as Ae,e as pe,d as ce,t as te,c as z}from"../chunks/disclose-version.Cfp-rwoP.js";import{h as qe,m as xe,V as be,j as Ge,o as ye,aK as He,aL as Je,aM as Ue,Y as Ve,aG as Ye,l as Fe,t as u,c,r as d,p as fe,D as B,F as Qe,a as me,f as x,s as l,g as $,G as We,z as A,b as Xe,n as F,d as ne}from"../chunks/utils.jAVDF0d8.js";import{L as Ze,s as et}from"../chunks/large.DtZ7ii7W.js";import{u as Ee,d as ve,a as tt,b as at,s as Se,f as rt,m as we,h as Pe,j as st,k as ot,l as lt,n as it,e as ke,I as C,i as Ne}from"../chunks/stores.CSiGpX_P.js";import{a as nt,b as dt,B as Oe,s as q,h as Q}from"../chunks/base.Dj21Yyoo.js";import{B as I}from"../chunks/button.CAMCZCE9.js";import{R as ct,T as ft,D as mt,C as de,a as vt}from"../chunks/index.DJkqi3PG.js";import{S as Te}from"../chunks/separator.DGJV-GDo.js";import{R as je,T as Me,a as Ke}from"../chunks/index.DYaxCyEy.js";import{i as ut}from"../chunks/legacy.Ccq7PQRh.js";import{l as Ce,p as w,o as ht,i as Ie}from"../chunks/index-client.BSQKl7cS.js";import{g as _t}from"../chunks/paths.BflsAN3w.js";function De(h,t,v,_,g){var a=h,s="",i;qe(()=>{if(s===(s=t()??"")){xe&&be();return}i!==void 0&&(Fe(i),i=void 0),s!==""&&(i=Ge(()=>{if(xe){ye.data;for(var o=be(),P=o;o!==null&&(o.nodeType!==8||o.data!=="");)P=o,o=He(o);if(o===null)throw Je(),Ue;ge(ye,P),a=Ve(o);return}var T=s+"",b=Be(T);ge(Ye(b),b.lastChild),a.before(b)}))})}const $t=!1,Zt=Object.freeze(Object.defineProperty({__proto__:null,ssr:$t},Symbol.toStringTag,{value:"Module"}));var gt=m("<h4><!></h4>");function pt(h,t){const v=Ce(t,["children","$$slots","$$events","$$legacy"]),_=Ce(v,["className"]);let g=w(t,"className",8,"");var a=gt();let s;var i=c(a);nt(i,t,"default",{}),d(a),u(()=>s=dt(a,s,{..._,class:`scroll-m-20 text-xl font-semibold tracking-normal ${g()}`})),r(h,a)}const xt={title:Oe.fullName,icon:"i-carbon-code"},bt=[{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projects",icon:"i-carbon-cube",href:"/projects"},{title:"Experience",icon:"i-carbon-development",href:"/experience"},{title:"Education",icon:"i-carbon-education",href:"/education"},{title:"Resume",icon:"i-carbon-document",href:"/resume"}],ae={left:xt,items:bt};function W(){Ee.set(_t(ve)==="dark"?"light":"dark")}function yt(h){Ee.set(h)}function St(h){tt.set(h)}function Re({defaultMode:h,themeColors:t,darkClassNames:v=["dark"],lightClassNames:_=[],defaultTheme:g=""}){const a=document.documentElement,s=localStorage.getItem("mode-watcher-mode")||h,i=localStorage.getItem("mode-watcher-theme")||g,o=s==="light"||s==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(o?(v.length&&a.classList.remove(...v),_.length&&a.classList.add(..._)):(_.length&&a.classList.remove(..._),v.length&&a.classList.add(...v)),a.style.colorScheme=o?"light":"dark",t){const P=document.querySelector('meta[name="theme-color"]');P&&P.setAttribute("content",s==="light"?t.light:t.dark)}i&&(a.setAttribute("data-theme",i),localStorage.setItem("mode-watcher-theme",i)),localStorage.setItem("mode-watcher-mode",s)}var wt=m('<meta name="theme-color">'),Pt=m("<!> <!>",1);function kt(h,t){fe(t,!1);const v=Le(),_=()=>ce(we,"$modeStorageKeyStore",v),g=()=>ce(Pe,"$themeStorageKeyStore",v),a=We();let s=w(t,"track",8,!0),i=w(t,"defaultMode",8,"system"),o=w(t,"themeColors",24,()=>{}),P=w(t,"disableTransitions",8,!0),T=w(t,"darkClassNames",24,()=>["dark"]),b=w(t,"lightClassNames",24,()=>[]),D=w(t,"defaultTheme",8,""),re=w(t,"nonce",8,""),X=w(t,"themeStorageKey",8,"mode-watcher-theme"),R=w(t,"modeStorageKey",8,"mode-watcher-mode");ht(()=>{const Z=ve.subscribe(()=>{}),L=at.subscribe(()=>{});Se.tracking(s()),Se.query();const E=localStorage.getItem(_());yt(rt(E)?E:i());const n=localStorage.getItem(g());return St(n||D()),()=>{Z(),L()}});const G={defaultMode:i(),themeColors:o(),darkClassNames:T(),lightClassNames:b(),defaultTheme:D(),modeStorageKey:R(),themeStorageKey:X()};B(()=>A(P()),()=>{st.set(P())}),B(()=>A(o()),()=>{ot.set(o())}),B(()=>A(T()),()=>{lt.set(T())}),B(()=>A(b()),()=>{it.set(b())}),B(()=>A(R()),()=>{we.set(R())}),B(()=>A(X()),()=>{Pe.set(X())}),B(()=>A(re()),()=>{Xe(a,typeof window>"u"?re():"")}),Qe(),ut(),Ae(Z=>{var L=Pt(),E=x(L);Ie(E,o,f=>{var e=wt();u(()=>q(e,"content",o().dark)),r(f,e)});var n=l(E,2);Ie(n,()=>$(a),f=>{var e=pe(),y=x(e);De(y,()=>`<script nonce=${$(a)}>(`+Re.toString()+")("+JSON.stringify(G)+");<\/script>",!1,!1),r(f,e)},f=>{var e=pe(),y=x(e);De(y,()=>"<script>("+Re.toString()+")("+JSON.stringify(G)+");<\/script>",!1,!1),r(f,e)}),r(Z,L)}),me()}var Nt=m("<!> <!>",1),Tt=m('<!> <div class="hidden lg:block"> </div>',1),jt=m("<!> <!>",1),Mt=m("<a><!></a>"),Kt=m("<!> <div> </div>",1),Ct=m('<a class="w-full"><!></a>'),It=m("<!> <div>Search</div>",1),Dt=m('<a class="w-full"><!></a>'),Rt=m("<!> <div> </div>",1),Lt=m('<div class="flex flex-col gap-2 pt-4"><!> <!> <!> <!> <!></div> <!>',1),Et=m("<!> <!>",1),Ot=m('<div class="border-1 absolute left-0 right-0 top-0 z-10 flex h-[50px] flex-row items-center border-b bg-[--bg] px-4 backdrop-blur-xl sm:px-8" style="--bg : hsl(var(--background) / 0.5)"><div class="sm:flex-1"><a class="flex flex-row items-center justify-start gap-2 text-2xl"><!> <!></a></div> <div class="hidden flex-[2] flex-row items-center justify-center gap-2 sm:flex"></div> <div class="hidden flex-row items-center justify-end gap-2 sm:flex sm:flex-1"><a><!></a> <!></div> <div class="flex flex-[2] flex-row items-center justify-center sm:hidden"><a><!></a></div> <div class="flex flex-row items-center justify-center sm:hidden"><!></div></div>');function zt(h,t){fe(t,!0);const v=Le(),_=()=>ce(ve,"$mode",v);let g=ne(()=>_()==="dark");var a=Ot(),s=c(a),i=c(s);u(()=>q(i,"href",Q("/")));var o=c(i);je(o,{children:(n,f)=>{var e=Nt(),y=x(e);Me(y,{children:(j,H)=>{C(j,{get icon(){return ae.left.icon}})},$$slots:{default:!0}});var ee=l(y,2);Ke(ee,{side:"bottom",class:"lg:hidden",children:(j,H)=>{F();var k=te();u(()=>z(k,ae.left.title)),r(j,k)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var P=l(o,2);pt(P,{className:"hidden lg:block",children:(n,f)=>{F();var e=te();u(()=>z(e,ae.left.title)),r(n,e)},$$slots:{default:!0}}),d(i),d(s);var T=l(s,2);ke(T,21,()=>ae.items,Ne,(n,f)=>{var e=Mt();u(()=>q(e,"href",Q($(f).href)));var y=c(e);je(y,{children:(ee,j)=>{var H=jt(),k=x(H);Me(k,{children:(U,se)=>{I(U,{class:"flex flex-row items-center justify-center gap-2",variant:"ghost",children:(O,ie)=>{var oe=Tt(),le=x(oe);C(le,{get icon(){return $(f).icon},className:"text-xl"});var p=l(le,2),M=c(p,!0);d(p),u(()=>z(M,$(f).title)),r(O,oe)},$$slots:{default:!0}})},$$slots:{default:!0}});var J=l(k,2);Ke(J,{side:"bottom",class:"lg:hidden",children:(U,se)=>{F();var O=te();u(()=>z(O,$(f).title)),r(U,O)},$$slots:{default:!0}}),r(ee,H)},$$slots:{default:!0}}),d(e),r(n,e)}),d(T);var b=l(T,2),D=c(b);u(()=>q(D,"href",Q("/search")));var re=c(D);I(re,{variant:"ghost",class:"text-xl",children:(n,f)=>{C(n,{icon:"i-carbon-search"})},$$slots:{default:!0}}),d(D);var X=l(D,2);I(X,{variant:"ghost",class:"text-xl",$$events:{click(...n){W==null||W.apply(this,n)}},children:(n,f)=>{var e=ne(()=>$(g)?"i-carbon-moon":"i-carbon-sun");C(n,{get icon(){return $(e)}})},$$slots:{default:!0}}),d(b);var R=l(b,2),G=c(R);u(()=>q(G,"href",Q("/")));var Z=c(G);Ze(Z,{children:(n,f)=>{F();var e=te();u(()=>z(e,Oe.fullName)),r(n,e)},$$slots:{default:!0}}),d(G),d(R);var L=l(R,2),E=c(L);ct(E,{children:(n,f)=>{var e=Et(),y=x(e);ft(y,{children:(j,H)=>{I(j,{size:"icon",variant:"ghost",children:(k,J)=>{C(k,{className:"text-xl",icon:"i-carbon-menu"})},$$slots:{default:!0}})},$$slots:{default:!0}});var ee=l(y,2);mt(ee,{children:(j,H)=>{var k=Lt(),J=x(k),U=c(J);ke(U,17,()=>ae.items,Ne,(p,M)=>{de(p,{children:(S,V)=>{var N=Ct();u(()=>q(N,"href",Q($(M).href)));var Y=c(N);I(Y,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(K,ue)=>{var he=Kt(),_e=x(he);C(_e,{get icon(){return $(M).icon},className:"text-xl"});var $e=l(_e,2),ze=c($e,!0);d($e),u(()=>z(ze,$(M).title)),r(K,he)},$$slots:{default:!0}}),d(N),r(S,N)},$$slots:{default:!0}})});var se=l(U,2);Te(se,{});var O=l(se,2);de(O,{children:(p,M)=>{var S=Dt();u(()=>q(S,"href",Q("/search")));var V=c(S);I(V,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(N,Y)=>{var K=It(),ue=x(K);C(ue,{icon:"i-carbon-search",className:"text-xl"}),F(2),r(N,K)},$$slots:{default:!0}}),d(S),r(p,S)},$$slots:{default:!0}});var ie=l(O,2);Te(ie,{});var oe=l(ie,2);I(oe,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",$$events:{click(...p){W==null||W.apply(this,p)}},children:(p,M)=>{var S=Rt(),V=x(S),N=ne(()=>$(g)?"i-carbon-moon":"i-carbon-sun");C(V,{get icon(){return $(N)},className:"text-xl"});var Y=l(V,2),K=c(Y,!0);d(Y),u(()=>z(K,$(g)?"Dark":"Light")),r(p,S)},$$slots:{default:!0}}),d(J);var le=l(J,2);vt(le,{class:"items-end",children:(p,M)=>{de(p,{children:(S,V)=>{I(S,{children:(N,Y)=>{F();var K=te("Close");r(N,K)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),r(j,k)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}}),d(L),d(a),r(h,a),me()}var Bt=m('<!> <div class="flex h-screen w-screen flex-col overflow-x-hidden"><!> <div class="mt-[50px] flex flex-1 flex-col"><!></div></div>',1);function ea(h,t){fe(t,!0);var v=Bt(),_=x(v);kt(_,{});var g=l(_,2),a=c(g);zt(a,{});var s=l(a,2),i=c(s);et(i,()=>t.children),d(s),d(g),r(h,v),me()}export{ea as component,Zt as universal};
