import{w as D}from"./index.Ckv1nRIc.js";import{A as T}from"./app.config.BO6XNHuD.js";import{s as V,e as _,c as m,b as g,f,m as d,i as w,h,n as p,p as x,T as N,t as R,d as q,r as A,a as b,g as y,q as v}from"./scheduler.LNXBLT3m.js";import{e as E}from"./each.D6YF6ztN.js";import{S as L,i as O}from"./index.DuRI3OYL.js";var z,I;{const n=localStorage.content;z=D(n||"HELLO WORLD!"),I=D(JSON.parse(localStorage.getItem("tempresult_selection"))),I.subscribe(e=>localStorage.tempresult_selection=JSON.stringify(e)),z.subscribe(e=>localStorage.content=e)}async function P(n,e=!1){var r=T+"/climate/get_content?type="+n;e&&(r+="&convertable=true");const t=await fetch(r,{method:"GET"});let s=[];if(!t.ok){var i=await t.text();throw new Error(`${t.status} ${t.statusText}
Reason: ${i}`)}return s=await t.json(),s.content.sort(),s}function k(n,e,r){const a=n.slice();return a[5]=e[r],a}function S(n){let e,r=n[5]+"",a,t,s,i;function o(){return n[3](n[5])}return{c(){e=_("button"),a=R(r),this.h()},l(l){e=m(l,"BUTTON",{type:!0,class:!0});var c=g(e);a=q(c,r),c.forEach(f),this.h()},h(){d(e,"type","button"),d(e,"class",t="btn bg-[#D17208] m-2 rounded-md "+(n[0]==n[5]?"font-bold bg-[#D17208] text-white":""))},m(l,c){w(l,e,c),h(e,a),s||(i=A(e,"click",o),s=!0)},p(l,c){n=l,c&1&&t!==(t="btn bg-[#D17208] m-2 rounded-md "+(n[0]==n[5]?"font-bold bg-[#D17208] text-white":""))&&d(e,"class",t)},d(l){l&&f(e),s=!1,i()}}}function F(n){let e,r,a=E(n[1]),t=[];for(let s=0;s<a.length;s+=1)t[s]=S(k(n,a,s));return{c(){e=_("div"),r=_("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0});var i=g(e);r=m(i,"DIV",{class:!0});var o=g(r);for(let l=0;l<t.length;l+=1)t[l].l(o);o.forEach(f),i.forEach(f),this.h()},h(){d(r,"class","flex gap-2 items-center"),d(e,"class","h-14")},m(s,i){w(s,e,i),h(e,r);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,null)},p(s,[i]){if(i&7){a=E(s[1]);let o;for(o=0;o<a.length;o+=1){const l=k(s,a,o);t[o]?t[o].p(l,i):(t[o]=S(l),t[o].c(),t[o].m(r,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=a.length}},i:p,o:p,d(s){s&&f(e),x(t,s)}}}function J(n,e,r){let{foldertype:a="water_budget"}=e;var t=["water_budget","water_budget_bias","kariba","vaal","cmip6","paper","luanginga","ind_full","ind_slices20","ind_slices30"];const s=N();function i(l){for(let c=0;c<t.length;c++)if(l==t[c]){console.log("NEW: ",l," ftype: ",t[c]),r(0,a=l),s("foldertype_changed",a);return}r(0,a=t[0]),s("foldertype_changed",a)}const o=l=>i(l);return n.$$set=l=>{"foldertype"in l&&r(0,a=l.foldertype)},[a,t,i,o]}class K extends L{constructor(e){super(),O(this,e,J,F,V,{foldertype:0})}}function U(n){let e,r,a,t,s,i,o,l;return{c(){e=_("div"),r=_("div"),a=b(),t=_("div"),s=b(),i=_("div"),o=b(),l=_("div"),this.h()},l(c){e=m(c,"DIV",{class:!0,style:!0});var u=g(e);r=m(u,"DIV",{class:!0}),g(r).forEach(f),a=y(u),t=m(u,"DIV",{class:!0}),g(t).forEach(f),s=y(u),i=m(u,"DIV",{class:!0}),g(i).forEach(f),o=y(u),l=m(u,"DIV",{class:!0}),g(l).forEach(f),u.forEach(f),this.h()},h(){d(r,"class","svelte-10umw5z"),d(t,"class","svelte-10umw5z"),d(i,"class","svelte-10umw5z"),d(l,"class","svelte-10umw5z"),d(e,"class","ring svelte-10umw5z"),v(e,"--color",n[1]),v(e,"--size",n[0])},m(c,u){w(c,e,u),h(e,r),h(e,a),h(e,t),h(e,s),h(e,i),h(e,o),h(e,l)},p(c,[u]){u&2&&v(e,"--color",c[1]),u&1&&v(e,"--size",c[0])},i:p,o:p,d(c){c&&f(e)}}}function W(n,e,r){let{size:a="64px"}=e,{color:t="#10b981"}=e;return n.$$set=s=>{"size"in s&&r(0,a=s.size),"color"in s&&r(1,t=s.color)},[a,t]}class M extends L{constructor(e){super(),O(this,e,W,U,V,{size:0,color:1})}}export{K as F,M as L,P as _,I as t};
