import{s as Y,e as h,t as G,a as $,c as p,b as T,d as M,f as k,g as j,m as s,z as J,i as Z,h as a,j as R,n as z,l as X}from"../chunks/scheduler.BwrNQohB.js";import{S as ee,i as te,c as A,b as S,m as I,a as L,t as V,d as O}from"../chunks/index.BXJ-9HM3.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.Dc1S2_5b.js";import{c as ae}from"../chunks/collaboration-picture-visualize-person-svgrepo-com.C3LW6n_a.js";import{g as oe}from"../chunks/graph-analytics-business-2-svgrepo-com.vbM0-BaC.js";import{n as se}from"../chunks/networking-collaboration-svgrepo-com.021AKHM1.js";import{c as ie}from"../chunks/change_without_return-svgrepo-com.kmeIaqQp.js";import{h as re}from"../chunks/host-website-se-svgrepo-com.BYVxOZu3.js";import{m as ne}from"../chunks/move-up-svgrepo-com_change.us_-l8tD.js";import"../chunks/entry.DUSxrAbd.js";function le(n){let e,i,g,w,l,C,E,t,u,f,_,y,c,q,b,B,P,W,o,v,d;return{c(){e=h("a"),i=h("div"),g=h("span"),w=h("b"),l=G(n[2]),E=$(),t=h("div"),u=h("span"),f=h("img"),y=$(),c=h("b"),q=G(n[3]),B=h("br"),P=$(),W=h("blockquote"),o=G(n[4]),this.h()},l(m){e=p(m,"A",{class:!0,href:!0,title:!0});var r=T(e);i=p(r,"DIV",{class:!0});var H=T(i);g=p(H,"SPAN",{class:!0});var K=T(g);w=p(K,"B",{});var N=T(w);l=M(N,n[2]),N.forEach(k),K.forEach(k),H.forEach(k),E=j(r),t=p(r,"DIV",{class:!0});var D=T(t);u=p(D,"SPAN",{});var Q=T(u);f=p(Q,"IMG",{src:!0,alt:!0,width:!0,class:!0}),Q.forEach(k),y=j(D),c=p(D,"B",{class:!0});var U=T(c);q=M(U,n[3]),U.forEach(k),B=p(D,"BR",{}),D.forEach(k),P=j(r),W=p(r,"BLOCKQUOTE",{class:!0});var F=T(W);o=M(F,n[4]),F.forEach(k),r.forEach(k),this.h()},h(){s(g,"class",C="chip bg-["+n[0]+"]"),s(i,"class","text-left mt-[-28px]"),J(f.src,_=n[1])||s(f,"src",_),s(f,"alt","..."),s(f,"width","40px"),s(f,"class","mt-2"),s(c,"class",b="text-lg underline underline-offset-4 decoration-["+n[0]+"] ml-2"),s(t,"class","flex"),s(W,"class","mt-1 text-sm"),s(e,"class",v="card p-4 m-2 border border-5 border-["+n[0]+"] hover:bg-surface-600"),s(e,"href",d="/work_packages/"+n[2].replaceAll(" ","").toLowerCase()),s(e,"title","click to learn more")},m(m,r){Z(m,e,r),a(e,i),a(i,g),a(g,w),a(w,l),a(e,E),a(e,t),a(t,u),a(u,f),a(t,y),a(t,c),a(c,q),a(t,B),a(e,P),a(e,W),a(W,o)},p(m,[r]){r&4&&R(l,m[2]),r&1&&C!==(C="chip bg-["+m[0]+"]")&&s(g,"class",C),r&2&&!J(f.src,_=m[1])&&s(f,"src",_),r&8&&R(q,m[3]),r&1&&b!==(b="text-lg underline underline-offset-4 decoration-["+m[0]+"] ml-2")&&s(c,"class",b),r&16&&R(o,m[4]),r&1&&v!==(v="card p-4 m-2 border border-5 border-["+m[0]+"] hover:bg-surface-600")&&s(e,"class",v),r&4&&d!==(d="/work_packages/"+m[2].replaceAll(" ","").toLowerCase())&&s(e,"href",d)},i:z,o:z,d(m){m&&k(e)}}}function ce(n,e,i){let{color:g=""}=e,{icon:w=""}=e,{wp:l=""}=e,{title:C=""}=e,{description:E=""}=e;return n.$$set=t=>{"color"in t&&i(0,g=t.color),"icon"in t&&i(1,w=t.icon),"wp"in t&&i(2,l=t.wp),"title"in t&&i(3,C=t.title),"description"in t&&i(4,E=t.description)},[g,w,l,C,E]}class x extends ee{constructor(e){super(),te(this,e,ce,le,Y,{color:0,icon:1,wp:2,title:3,description:4})}}function de(n){let e,i,g=`<h1 class="content-heading">Work Packages</h1> <img src="${se}" alt="..." width="30px"/>`,w,l,C=`The TIPPECC project is organized into five work packages (WPs) that will closely work together
		to achieve the project objectives.`,E,t,u,f,_,y,c,q,b,B,P,W;return u=new x({props:{wp:"WP 1",color:"#D17208",icon:ne,title:"Regional projections of future climate change",description:`This WP will set the data foundation that is needed to derive the climate indicators for the
        analysis of climate impacts (WP2), regional tipping points (WP4) and the web-portal based
        climate services (WP3).`}}),_=new x({props:{wp:"WP 2",color:"#B93F4A",icon:oe,title:"Synthesis of comprehensive information on climate change impacts",description:`This WP will develop a range of indicators of climate change impacts across the sectors of
        water, agriculture and biodiversity that will be used to inform engagements with various
        actors to co-develop appropriate adaptation actions.`}}),c=new x({props:{wp:"WP 3",color:"#98B1D8",icon:re,title:"Climate Services Gateway through co-production",description:`The objective of this WP is the development of a web-based Climate Service Gateway with and
        for scientists and stakeholders, which will serve as a platform for easy access to
        projections of regional climate change and climate impact indicators related to water and
        food security and biodiversity conservation.`}}),b=new x({props:{wp:"WP 4",color:"#26D7D9",icon:ie,title:"Regional Tipping Points and co-development of adaptation options",description:`The WP will analyse regional tipping points in the southern African region towards the
        provision of climate services such as informing adaptation actions and policy. This will
        be done through a series of engagements with various actors within case studies to co-develop appropriate
        adaptation actions.`}}),P=new x({props:{wp:"WP 5",color:"#6B9B2A",icon:ae,title:"Stakeholder engagements (continuos participatory co-production)",description:`This WP will ensure that the project is co-produced with stakeholders and that the project
            activities are aligned with the needs of the stakeholders.`}}),{c(){e=h("div"),i=h("div"),i.innerHTML=g,w=$(),l=h("blockquote"),l.textContent=C,E=$(),t=h("div"),A(u.$$.fragment),f=$(),A(_.$$.fragment),y=$(),A(c.$$.fragment),q=$(),A(b.$$.fragment),B=$(),A(P.$$.fragment),this.h()},l(o){e=p(o,"DIV",{class:!0});var v=T(e);i=p(v,"DIV",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-1ocqc1a"&&(i.innerHTML=g),w=j(v),l=p(v,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),X(l)!=="svelte-1fm5bcy"&&(l.textContent=C),E=j(v),t=p(v,"DIV",{class:!0});var d=T(t);S(u.$$.fragment,d),f=j(d),S(_.$$.fragment,d),y=j(d),S(c.$$.fragment,d),q=j(d),S(b.$$.fragment,d),B=j(d),S(P.$$.fragment,d),d.forEach(k),v.forEach(k),this.h()},h(){s(i,"class","flex"),s(l,"class","content-blockquote mb-4"),s(t,"class","grid md:grid-cols-2 max-md:grid-cols-1 pt-4"),s(e,"class","content-div")},m(o,v){Z(o,e,v),a(e,i),a(e,w),a(e,l),a(e,E),a(e,t),I(u,t,null),a(t,f),I(_,t,null),a(t,y),I(c,t,null),a(t,q),I(b,t,null),a(t,B),I(P,t,null),W=!0},p:z,i(o){W||(L(u.$$.fragment,o),L(_.$$.fragment,o),L(c.$$.fragment,o),L(b.$$.fragment,o),L(P.$$.fragment,o),W=!0)},o(o){V(u.$$.fragment,o),V(_.$$.fragment,o),V(c.$$.fragment,o),V(b.$$.fragment,o),V(P.$$.fragment,o),W=!1},d(o){o&&k(e),O(u),O(_),O(c),O(b),O(P)}}}class ke extends ee{constructor(e){super(),te(this,e,null,de,Y,{})}}export{ke as component};
