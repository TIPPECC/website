import{w as h,r as v}from"./index.DQYNAbbn.js";import{F as L}from"./scheduler.BDHzqLTT.js";const i={};function w(e){return e==="local"?localStorage:sessionStorage}function u(e,n,r){const a=(r==null?void 0:r.serializer)??JSON,l=(r==null?void 0:r.storage)??"local";function f(o,c){w(l).setItem(o,a.stringify(c))}if(!i[e]){const o=h(n,t=>{const s=w(l).getItem(e);s&&t(a.parse(s));{const g=d=>{d.key===e&&t(d.newValue?a.parse(d.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:c,set:m}=o;i[e]={set(t){f(e,t),m(t)},update(t){const s=t(L(o));f(e,s),m(s)},subscribe:c}}return i[e]}u("modeOsPrefers",!1);u("modeUserPrefers",void 0);u("modeCurrent",!1);const S="(prefers-reduced-motion: reduce)";function M(){return window.matchMedia(S).matches}v(M(),e=>{{const n=a=>{e(a.matches)},r=window.matchMedia(S);return r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}}});
