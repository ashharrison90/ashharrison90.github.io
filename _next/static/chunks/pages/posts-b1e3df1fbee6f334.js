(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679,690],{1945:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(3924)}])},9479:function(e,t,n){"use strict";n.d(t,{L:function(){return a},Z:function(){return h}});var r,a,s=n(5893),o=n(4184),i=n.n(o),c=n(1664),l=n.n(c),d=n(6405),u=n.n(d);function h(e){let{ariaLabel:t,children:n,className:r,href:a,isActive:o,kind:c="primary",onClick:d,target:h}=e;return a?(0,s.jsx)(l(),{href:a,"aria-label":t,rel:h?"noreferrer":void 0,role:"link",target:h,className:i()(u().button,r,{[u().isActive]:o,[u().buttonPrimary]:"primary"===c,[u().buttonSecondary]:"secondary"===c,[u().buttonIcon]:"icon"===c}),children:n}):(0,s.jsx)("button",{"aria-label":t,disabled:o,onClick:d,className:i()(u().button,r,{[u().isActive]:o,[u().buttonPrimary]:"primary"===c,[u().buttonSecondary]:"secondary"===c,[u().buttonIcon]:"icon"===c}),children:n})}(r=a||(a={})).Primary="primary",r.Secondary="secondary",r.Icon="icon"},7122:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(5893),a=n(4184),s=n.n(a),o=n(9008),i=n.n(o),c=n(7294),l=n(650),d=n(8797),u=n(7813),h=n(2476),_=n(7390),m=n(9479),p=n(2923),x=n.n(p),f=JSON.parse('{"github":"https://www.github.com/ashharrison90","linkedin":"https://www.linkedin.com/in/ashharrison90","instagram":"https://www.instagram.com/ashharrison90","facebook":"https://www.facebook.com/ashleyharrison90","twitter":"https://twitter.com/ashharrison90"}');let g={facebook:(0,r.jsx)(l.Z,{}),github:(0,r.jsx)(d.Z,{}),instagram:(0,r.jsx)(u.Z,{}),linkedin:(0,r.jsx)(h.Z,{}),twitter:(0,r.jsx)(_.Z,{})};function v(){return(0,r.jsx)("footer",{className:x().footer,children:(0,r.jsx)("div",{className:x().socialLinks,children:Object.keys(f).map(e=>(0,r.jsx)(m.Z,{className:x().socialLink,ariaLabel:"Contact me on ".concat(e),href:f[e],kind:m.L.Icon,target:"_blank",children:g[e]},e))})})}var b=n(5152),j=n.n(b),w=n(1163),C=n(7080),y=n.n(C);let N=j()(()=>n.e(247).then(n.bind(n,7247)),{loadableGenerated:{webpack:()=>[7247]},ssr:!1}),k=[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Posts",href:"/posts"}],L=(0,c.forwardRef)((e,t)=>{let{show:n}=e,a=(0,w.useRouter)();return(0,r.jsxs)("header",{ref:t,className:s()(y().header,{[y().hide]:!n}),children:[(0,r.jsx)(N,{}),(0,r.jsxs)("nav",{className:y().nav,children:[k.map(e=>{let{label:t,href:n}=e;return(0,r.jsx)(m.Z,{className:y().pageLinks,href:n,isActive:a.pathname===n,kind:m.L.Secondary,children:t},n)}),a.asPath.startsWith("/posts/")&&(0,r.jsx)("div",{className:s()(y().postPageLinkContainer,{[y().hide]:!n}),children:(0,r.jsx)(m.Z,{className:y().postPageLink,href:a.asPath,isActive:!0,kind:m.L.Secondary,children:a.asPath.replace("/posts","")},a.asPath)})]})]})});L.displayName="Header";var P=n(3857),S=n.n(P);let I=0,E=(0,c.forwardRef)((e,t)=>{let{children:n,heroContent:a,heroHeight:o=0,hideHeaderUntilScroll:l=!1,metaDescription:d,metaTitle:u}=e,[h,_]=(0,c.useState)(!l),m=(0,c.useRef)(null),p=(0,c.useRef)(null);return(0,c.useImperativeHandle)(t,()=>p.current),(0,c.useLayoutEffect)(()=>{let e=()=>_(!0),t=()=>{l?_(window.scrollY>0):(_(window.scrollY<=I),I=window.scrollY)},n=m.current;return null==n||n.addEventListener("focusin",e),document.addEventListener("scroll",t),()=>{null==n||n.removeEventListener("focusin",e),document.removeEventListener("scroll",t)}},[l]),(0,r.jsxs)("div",{ref:p,children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:u}),(0,r.jsx)("meta",{name:"description",content:d})]}),(0,r.jsx)(L,{show:h,ref:m}),(0,r.jsx)("div",{style:{height:"".concat(o,"svh")},className:S().heroContent,children:a}),(0,r.jsx)("div",{className:S().contentContainer,role:"main",children:(0,r.jsx)("div",{className:s()(S().content,{[S().padContent]:!a&&!l}),children:n})}),(0,r.jsx)(v,{})]})});E.displayName="Layout";var T=E},7543:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),a=n(1664),s=n.n(a),o=n(7763),i=n.n(o),c=n(174),l=n(9796),d=n.n(l);function u(e){var t,n;let{coverImage:a,excerpt:o,searchString:l,slug:u,tags:h,title:_}=e;return(0,r.jsxs)(s(),{as:"/posts/".concat(u),href:"/posts/[slug]","aria-label":_,className:d().card,"data-testid":"PostCard",children:[(0,r.jsx)("div",{"data-testid":"PostCard-image",style:{backgroundImage:"url(".concat(a,")")},className:d().backgroundImage}),(0,r.jsxs)("div",{className:d().titleContainer,children:[(0,r.jsx)("div",{className:d().title,children:(0,r.jsx)(i(),{searchWords:null!==(t=null==l?void 0:l.split(" "))&&void 0!==t?t:[],textToHighlight:_})}),(0,r.jsx)("div",{className:d().tags,children:h.map(e=>(0,r.jsx)(c.Z,{label:e,searchString:l},e))}),(0,r.jsx)("div",{className:d().excerpt,children:(0,r.jsx)(i(),{searchWords:null!==(n=null==l?void 0:l.split(" "))&&void 0!==n?n:[],textToHighlight:o})})]})]})}},5814:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(4184),s=n.n(a),o=n(4643),i=n.n(o);function c(e){let{children:t,className:n}=e;return(0,r.jsx)("div",{className:s()(i().gridContainer,n),children:t})}},174:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),a=n(2023),s=n.n(a),o=n(7294),i=n(7763),c=n.n(i),l=n(7690),d=n(9118),u=n.n(d);function h(e){var t;let{label:n,searchString:a}=e,{theme:i}=(0,o.useContext)(l.ThemeContext),d=s()({luminosity:"light",seed:n}),h=s()({luminosity:"dark",seed:n});return(0,r.jsx)("div",{"data-testid":"tag",style:{borderColor:i===l.Theme.DARK?d:h,backgroundColor:i===l.Theme.DARK?"".concat(d,"22"):d,color:i===l.Theme.DARK?d:"var(--text-primary)"},className:u().container,children:(0,r.jsx)(c(),{searchWords:null!==(t=null==a?void 0:a.split(" "))&&void 0!==t?t:[],textToHighlight:n})})}},7690:function(e,t,n){"use strict";n.r(t),n.d(t,{Theme:function(){return a},ThemeContext:function(){return i},ThemeContextProvider:function(){return c}});var r,a,s=n(5893),o=n(7294);(r=a||(a={})).LIGHT="light",r.DARK="dark";let i=(0,o.createContext)({theme:"light",setTheme:()=>{}}),c=e=>{var t;let{children:n}=e,r=null!==(t=window.localStorage.getItem("theme"))&&void 0!==t?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";window.localStorage.setItem("theme",r),document.documentElement.setAttribute("data-theme",r);let[a,c]=(0,o.useState)({theme:r,setTheme:e=>{window.localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),c({...a,theme:e})}});return(0,s.jsx)(i.Provider,{value:a,children:n})};t.default=c},3924:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return w}});var r,a=n(5893),s=n(7294),o=n(4184),i=n.n(o),c=n(297),l=n.n(c);function d(e){let{className:t,message:n}=e;return(0,a.jsxs)("div",{className:i()(l().container,t),children:[(0,a.jsx)("div",{className:l().icon,children:"\uD83E\uDDD0"}),(0,a.jsx)("div",{className:l().message,children:n})]})}var u=n(7122),h=n(7543),_=n(5814);function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){return s.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),r||(r=s.createElement("path",{d:"M500.3 443.7 380.6 324c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723 99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9 53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0 15.606-15.64 15.606-41.04.006-56.64zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128-57.42 128-128 128-128-57.4-128-128z"})))},x=n(5015),f=n.n(x);function g(e){let{className:t,onChange:n,placeholder:r}=e;return(0,a.jsxs)("div",{className:f().container,children:[(0,a.jsx)("input",{type:"search",className:i()(t,f().input),onChange:n,placeholder:r}),(0,a.jsx)(p,{className:f().icon})]})}var v=n(2496),b=n.n(v),j=!0;function w(e){let{allPosts:t}=e,[n,r]=(0,s.useState)(""),o=t.filter(e=>e.title.toLowerCase().includes(n.toLowerCase())||e.excerpt.toLowerCase().includes(n.toLowerCase())||e.tags.some(e=>e.toLowerCase().includes(n.toLowerCase())));return(0,a.jsxs)(u.Z,{metaDescription:"A dumping ground for my ramblings. New posts whenever I can be bothered.",metaTitle:"Posts",children:[(0,a.jsx)("h1",{children:"posts"}),(0,a.jsx)("p",{children:"A dumping ground for my ramblings. New posts whenever I can be bothered."}),(0,a.jsx)("div",{className:b().searchContainer,children:(0,a.jsx)(g,{className:b().search,onChange:e=>r(e.target.value),placeholder:"Search posts"})}),(0,a.jsx)(_.Z,{className:b().postGrid,children:o.map(e=>(0,a.jsx)(h.Z,{coverImage:e.coverImage,excerpt:e.excerpt,searchString:n,slug:e.slug,tags:e.tags,title:e.title},e.slug))}),!o.length&&(0,a.jsx)(d,{className:b().emptySearch,message:"Nothing found"})]})}},6405:function(e){e.exports={button:"Button_button__OFOdO",isActive:"Button_isActive__mpn4i",buttonPrimary:"Button_buttonPrimary__7ZsnV",buttonSecondary:"Button_buttonSecondary__UfdMJ",buttonIcon:"Button_buttonIcon__XerCj"}},297:function(e){e.exports={container:"EmptyState_container__CgzC1",icon:"EmptyState_icon__8EsDx",message:"EmptyState_message__oSLsx"}},2923:function(e){e.exports={footer:"Footer_footer__OQpsI",socialLink:"Footer_socialLink___dbNt",socialLinks:"Footer_socialLinks__BEJm6"}},7080:function(e){e.exports={header:"Header_header__1RJ5C",nav:"Header_nav__qw3Y_",pageLinks:"Header_pageLinks__s2uWB",postPageLink:"Header_postPageLink___rKhz",postPageLinkContainer:"Header_postPageLinkContainer__9TnIs",hide:"Header_hide__dQuW8"}},3857:function(e){e.exports={heroContent:"Layout_heroContent__SIpdV",contentContainer:"Layout_contentContainer__sNBGP",content:"Layout_content__pYDp6",padContent:"Layout_padContent__TLJCZ"}},9796:function(e){e.exports={backgroundImage:"PostCard_backgroundImage__xCElx",card:"PostCard_card__HzuDs",titleContainer:"PostCard_titleContainer__xYTfy",title:"PostCard_title__d88Gu",excerpt:"PostCard_excerpt__x3mWb",date:"PostCard_date__Z7jkU",tags:"PostCard_tags__n_uxY"}},4643:function(e){e.exports={gridContainer:"PostGrid_gridContainer__gPOKj"}},5015:function(e){e.exports={container:"Search_container__7GDBx",icon:"Search_icon__1j_yz",input:"Search_input__TR21k"}},9118:function(e){e.exports={container:"Tag_container__PBQaW"}},2496:function(e){e.exports={searchContainer:"Posts_searchContainer__M3L_Y",search:"Posts_search__71m__",emptySearch:"Posts_emptySearch__ZQGGq"}}},function(e){e.O(0,[325,514,888,774,179],function(){return e(e.s=1945)}),_N_E=e.O()}]);