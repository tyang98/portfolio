(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"16l3":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var r=a("q1tI"),n=a.n(r),l=a("Kvkj"),i=a("7Qib"),c=a("7vrA");t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges||[],r=t.allFile.edges||[],u=i.b.getImageMap(r,/\/[projects].*\/|$/);return n.a.createElement(l.a,null,n.a.createElement(i.a,{title:"Projects"}),n.a.createElement(l.b,{title:"Projects"}," "),n.a.createElement(c.a,{className:"mt-5 pt-3",fluid:!0},a.map((function(e){var t=e.node;return n.a.createElement("div",{key:t.id},n.a.createElement(l.c,{frontmatter:t.frontmatter,image:u[t.fields.slug],html:t.html}),n.a.createElement("hr",{className:"w-75"}))}))))};var u="2581845108"},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return r.a})),a.d(t,"b",(function(){return n}));var r=a("ElpU"),n=(a("BYIe"),a("SRfc"),{getImageMap:function(e,t,a,r){return void 0===a&&(a=!1),void 0===r&&(r=3),e.reduce((function(e,n){var l=n.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(l))e[l].length<=r&&e[l].push(n.node.childImageSharp.fluid);else{var i=[];i.push(n.node.childImageSharp.fluid),e[l]=i}else e[l]=n.node.childImageSharp.fluid;return e}),{})}})}}]);
//# sourceMappingURL=component---src-pages-projects-js-d5b75312aeef35d5d6f7.js.map