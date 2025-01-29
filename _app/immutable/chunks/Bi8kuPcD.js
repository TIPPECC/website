import{w as G}from"./BipJ1eo2.js";import{A as U}from"./BO6XNHuD.js";import{s as W,e as b,a as I,t as x,c as E,b as C,f,g as w,d as N,m as p,i as R,h as y,j as L,n as S,p as Y,T as Z,r as $,q as V}from"./DnuOA_7m.js";import{e as F}from"./D6YF6ztN.js";import{S as H,i as Q}from"./DgiIZP4i.js";var q,A;{const i=localStorage.content;q=G(i||"HELLO WORLD!"),A=G(JSON.parse(localStorage.getItem("tempresult_selection"))),A.subscribe(e=>localStorage.tempresult_selection=JSON.stringify(e)),q.subscribe(e=>localStorage.content=e)}async function ce(i,e=!1){var r=U+"/climate/get_content?type="+i;e&&(r+="&convertable=true");const t=await fetch(r,{method:"GET"});let n=[];if(!t.ok){var d=await t.text();throw new Error(`${t.status} ${t.statusText}
Reason: ${d}`)}return n=await t.json(),n.content.sort(),n}async function fe(i,e=!1){var r=U+"/climate/get_content?type="+i;e&&(r+="&convertable=true"),r+="&force_update=true";const t=await fetch(r,{method:"GET"});let n=[];if(!t.ok){var d=await t.text();throw new Error(`${t.status} ${t.statusText}
Reason: ${d}`)}return n=await t.json(),n.content.sort(),n}const ee=[{key:"water_budget",display_name:"CORDEX-CORE Raw Indicator",description:"Indicator based on CORDEX-CORE data",citation:"tbd",header_regex:"",lineage:"Derived from CORDEX-CORE data"},{key:"water_budget_bias",display_name:"CORDEX-CORE Bias Indicator",description:"Indicator with bias adjusted CORDEX-CORE data",citation:"tbd",header_regex:"",lineage:"Derived from CORDEX-CORE data with bias adjustment"},{key:"kariba",display_name:"CORDEX-CORE Kariba",description:"CORDEX-CORE data for Kariba dam catchment",citation:"tbd",header_regex:"",lineage:"Derived from CORDEX-CORE data for Kariba dam catchment"},{key:"vaal",display_name:"CORDEX-CORE Vaal",description:"CORDEX-CORE data for Vaal dam catchment",citation:"tbd",header_regex:"",lineage:"Derived from CORDEX-CORE data for Vaal dam catchment"},{key:"luanginga",display_name:"CORDEX-CORE Luanginga",description:"CORDEX-CORE data for Luanginga dam catchment",citation:"tbd",header_regex:"",lineage:"Derived from CORDEX-CORE data for Luanginga dam catchment"},{key:"cmip6_raw",display_name:"CMIP6 Raw",description:"CMIP6 raw data for TIPPECC area",citation:"tbd",header_regex:"",lineage:"Derived from CMIP6 data"},{key:"cmip6_raw_ind",display_name:"CMIP6 Raw Indicator",description:"CMIP6 indicator data",citation:"tbd",header_regex:"",lineage:"Derived from CMIP6 data"},{key:"paper",display_name:"Paper",description:"Research papers and articles",citation:"tbd",header_regex:"",lineage:""},{key:"ind_full",display_name:"Indicator Full",description:"Full indicator data (only TIPPECC area). Data description: https://landsurf.geo.uni-halle.de/docs-page_en.html#section-3",citation:"Original Data: https://doi.org/10.58160/gGzexcbDikobkyvK",header_regex:"(^(.*?)(?=\\d{4}-\\d{4}))",lineage:"Derived from full indicator data for TIPPECC area"},{key:"ind_slices20",display_name:"Indicator Slices 20",description:"Indicator slices at 20 years intervals (only TIPPECC area). Data description: https://landsurf.geo.uni-halle.de/docs-page_en.html#section-3",citation:"Original Data: https://doi.org/10.58160/gGzexcbDikobkyvK",header_regex:"(^(.*?\\d{4}-\\d{4}.*?)(?=\\d{4}-\\d{4}))",lineage:"Derived from indicator data slices at 20 years intervals for TIPPECC area"},{key:"ind_slices30",display_name:"Indicator Slices 30",description:"Indicator slices at 30 years intervals (only TIPPECC area). Data description: https://landsurf.geo.uni-halle.de/docs-page_en.html#section-3",citation:"Original Data: https://doi.org/10.58160/gGzexcbDikobkyvK",header_regex:"(^(.*?\\d{4}-\\d{4}.*?)(?=\\d{4}-\\d{4}))",lineage:"Derived from indicator data slices at 30 years intervals for TIPPECC area"}];function B(i,e,r){const s=i.slice();return s[8]=e[r],s}function J(i){let e,r=i[8].display_name+"",s,t,n,d;function g(){return i[3](i[8])}return{c(){e=b("button"),s=x(r),this.h()},l(l){e=E(l,"BUTTON",{type:!0,class:!0});var o=C(e);s=N(o,r),o.forEach(f),this.h()},h(){p(e,"type","button"),p(e,"class",t="btn bg-[#D17208] m-2 rounded-md "+(i[0]==i[8].key?"font-bold bg-[#D17208] text-white":""))},m(l,o){R(l,e,o),y(e,s),n||(d=$(e,"click",g),n=!0)},p(l,o){i=l,o&1&&t!==(t="btn bg-[#D17208] m-2 rounded-md "+(i[0]==i[8].key?"font-bold bg-[#D17208] text-white":""))&&p(e,"class",t)},d(l){l&&f(e),n=!1,d()}}}function te(i){var K,M,j;let e,r,s,t,n=(((K=i[1].find(i[4]))==null?void 0:K.description)??"No description available")+"",d,g,l,o=(((M=i[1].find(i[5]))==null?void 0:M.lineage)??"No lineage available")+"",c,u,v,P=(((j=i[1].find(i[6]))==null?void 0:j.citation)??"No citation available")+"",T,O=F(i[1]),_=[];for(let a=0;a<O.length;a+=1)_[a]=J(B(i,O,a));return{c(){e=b("div"),r=b("div");for(let a=0;a<_.length;a+=1)_[a].c();s=I(),t=b("div"),d=x(n),g=I(),l=b("div"),c=x(o),u=I(),v=b("div"),T=x(P),this.h()},l(a){e=E(a,"DIV",{class:!0});var h=C(e);r=E(h,"DIV",{class:!0});var D=C(r);for(let k=0;k<_.length;k+=1)_[k].l(D);D.forEach(f),h.forEach(f),s=w(a),t=E(a,"DIV",{class:!0});var X=C(t);d=N(X,n),X.forEach(f),g=w(a),l=E(a,"DIV",{class:!0});var z=C(l);c=N(z,o),z.forEach(f),u=w(a),v=E(a,"DIV",{class:!0});var m=C(v);T=N(m,P),m.forEach(f),this.h()},h(){p(r,"class","flow gap-2 items-center"),p(e,"class",""),p(t,"class","text-sm m-2"),p(l,"class","text-sm m-2"),p(v,"class","text-sm m-2")},m(a,h){R(a,e,h),y(e,r);for(let D=0;D<_.length;D+=1)_[D]&&_[D].m(r,null);R(a,s,h),R(a,t,h),y(t,d),R(a,g,h),R(a,l,h),y(l,c),R(a,u,h),R(a,v,h),y(v,T)},p(a,[h]){var D,X,z;if(h&7){O=F(a[1]);let m;for(m=0;m<O.length;m+=1){const k=B(a,O,m);_[m]?_[m].p(k,h):(_[m]=J(k),_[m].c(),_[m].m(r,null))}for(;m<_.length;m+=1)_[m].d(1);_.length=O.length}h&1&&n!==(n=(((D=a[1].find(a[4]))==null?void 0:D.description)??"No description available")+"")&&L(d,n),h&1&&o!==(o=(((X=a[1].find(a[5]))==null?void 0:X.lineage)??"No lineage available")+"")&&L(c,o),h&1&&P!==(P=(((z=a[1].find(a[6]))==null?void 0:z.citation)??"No citation available")+"")&&L(T,P)},i:S,o:S,d(a){a&&(f(e),f(s),f(t),f(g),f(l),f(u),f(v)),Y(_,a)}}}function ae(i,e,r){let{foldertype:s="water_budget"}=e;var t=ee;const n=Z();function d(u){for(let v=0;v<t.length;v++)if(u==t[v].key){console.log("NEW: ",u," ftype: ",t[v].key),r(0,s=u),n("foldertype_changed",s);return}r(0,s=t[0].key),n("foldertype_changed",s)}const g=u=>d(u.key),l=u=>u.key==s,o=u=>u.key==s,c=u=>u.key==s;return i.$$set=u=>{"foldertype"in u&&r(0,s=u.foldertype)},[s,t,d,g,l,o,c]}class ue extends H{constructor(e){super(),Q(this,e,ae,te,W,{foldertype:0})}}function ie(i){let e,r,s,t,n,d,g,l;return{c(){e=b("div"),r=b("div"),s=I(),t=b("div"),n=I(),d=b("div"),g=I(),l=b("div"),this.h()},l(o){e=E(o,"DIV",{class:!0,style:!0});var c=C(e);r=E(c,"DIV",{class:!0}),C(r).forEach(f),s=w(c),t=E(c,"DIV",{class:!0}),C(t).forEach(f),n=w(c),d=E(c,"DIV",{class:!0}),C(d).forEach(f),g=w(c),l=E(c,"DIV",{class:!0}),C(l).forEach(f),c.forEach(f),this.h()},h(){p(r,"class","svelte-10umw5z"),p(t,"class","svelte-10umw5z"),p(d,"class","svelte-10umw5z"),p(l,"class","svelte-10umw5z"),p(e,"class","ring svelte-10umw5z"),V(e,"--color",i[1]),V(e,"--size",i[0])},m(o,c){R(o,e,c),y(e,r),y(e,s),y(e,t),y(e,n),y(e,d),y(e,g),y(e,l)},p(o,[c]){c&2&&V(e,"--color",o[1]),c&1&&V(e,"--size",o[0])},i:S,o:S,d(o){o&&f(e)}}}function re(i,e,r){let{size:s="64px"}=e,{color:t="#10b981"}=e;return i.$$set=n=>{"size"in n&&r(0,s=n.size),"color"in n&&r(1,t=n.color)},[s,t]}class _e extends H{constructor(e){super(),Q(this,e,re,ie,W,{size:0,color:1})}}export{ue as F,_e as L,fe as _,ce as a,ee as f,A as t};
