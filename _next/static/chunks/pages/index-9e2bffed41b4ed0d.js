(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,902],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2627)}])},9893:function(e,t,n){"use strict";n.d(t,{L:function(){return a},Z:function(){return h}});var r,a,o=n(5893),s=n(4184),i=n.n(s),c=n(1664),l=n.n(c),d=n(5702),u=n.n(d);function h(e){let{ariaLabel:t,children:n,className:r,href:a,isActive:s,kind:c="primary",onClick:d,target:h}=e;return a?(0,o.jsx)(l(),{href:a,"aria-label":t,rel:h?"noreferrer":void 0,role:"link",target:h,className:i()(u().button,r,{[u().isActive]:s,[u().buttonPrimary]:"primary"===c,[u().buttonSecondary]:"secondary"===c,[u().buttonIcon]:"icon"===c}),children:n}):(0,o.jsx)("button",{"aria-label":t,disabled:s,onClick:d,className:i()(u().button,r,{[u().isActive]:s,[u().buttonPrimary]:"primary"===c,[u().buttonSecondary]:"secondary"===c,[u().buttonIcon]:"icon"===c}),children:n})}(r=a||(a={})).Primary="primary",r.Secondary="secondary",r.Icon="icon"},7637:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(5893),a=n(4184),o=n.n(a),s=n(9008),i=n.n(s),c=n(7294),l=n(650),d=n(8797),u=n(7813),h=n(2476),m=n(7390),_=n(9893),p=n(5112),g=n.n(p),f=JSON.parse('{"github":"https://www.github.com/ashharrison90","linkedin":"https://www.linkedin.com/in/ashharrison90","instagram":"https://www.instagram.com/ashharrison90","facebook":"https://www.facebook.com/ashleyharrison90","twitter":"https://twitter.com/ashharrison90"}');let x={facebook:(0,r.jsx)(l.Z,{}),github:(0,r.jsx)(d.Z,{}),instagram:(0,r.jsx)(u.Z,{}),linkedin:(0,r.jsx)(h.Z,{}),twitter:(0,r.jsx)(m.Z,{})};function b(){return(0,r.jsx)("footer",{className:g().footer,children:(0,r.jsx)("div",{className:g().socialLinks,children:Object.keys(f).map(e=>(0,r.jsx)(_.Z,{className:g().socialLink,ariaLabel:"Contact me on ".concat(e),href:f[e],kind:_.L.Icon,target:"_blank",children:x[e]},e))})})}var v=n(5152),j=n.n(v),k=n(1163),C=n(6004),y=n.n(C);let w=j()(()=>n.e(981).then(n.bind(n,8981)),{loadableGenerated:{webpack:()=>[8981]},ssr:!1}),N=[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Posts",href:"/posts"}],L=(0,c.forwardRef)((e,t)=>{let{show:n}=e,a=(0,k.useRouter)();return(0,r.jsxs)("header",{ref:t,className:o()(y().header,{[y().hide]:!n}),children:[(0,r.jsx)(w,{}),(0,r.jsxs)("nav",{className:y().nav,children:[N.map(e=>{let{label:t,href:n}=e;return(0,r.jsx)(_.Z,{className:y().pageLinks,href:n,isActive:a.pathname===n,kind:_.L.Secondary,children:t},n)}),a.asPath.startsWith("/posts/")&&(0,r.jsx)("div",{className:o()(y().postPageLinkContainer,{[y().hide]:!n}),children:(0,r.jsx)(_.Z,{className:y().postPageLink,href:a.asPath,isActive:!0,kind:_.L.Secondary,children:a.asPath.replace("/posts","")},a.asPath)})]})]})});L.displayName="Header";var P=n(552),H=n.n(P);let T=0,I=(0,c.forwardRef)((e,t)=>{let{children:n,heroContent:a,heroHeight:s=0,hideHeaderUntilScroll:l=!1,metaDescription:d,metaTitle:u}=e,[h,m]=(0,c.useState)(!l),_=(0,c.useRef)(null),p=(0,c.useRef)(null);return(0,c.useImperativeHandle)(t,()=>p.current),(0,c.useLayoutEffect)(()=>{let e=()=>m(!0),t=()=>{l?m(window.scrollY>0):(m(window.scrollY<=T),T=window.scrollY)},n=_.current;return null==n||n.addEventListener("focusin",e),document.addEventListener("scroll",t),()=>{null==n||n.removeEventListener("focusin",e),document.removeEventListener("scroll",t)}},[l]),(0,r.jsxs)("div",{ref:p,children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:u}),(0,r.jsx)("meta",{name:"description",content:d})]}),(0,r.jsx)(L,{show:h,ref:_}),(0,r.jsx)("div",{style:{height:"".concat(s,"vh")},className:H().heroContent,children:a}),(0,r.jsx)("div",{className:H().contentContainer,role:"main",children:(0,r.jsx)("div",{className:o()(H().content,{[H().padContent]:!a&&!l}),children:n})}),(0,r.jsx)(b,{})]})});I.displayName="Layout";var S=I},3173:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),a=n(1664),o=n.n(a),s=n(2054),i=n.n(s),c=n(3713),l=n(8280),d=n.n(l);function u(e){var t,n;let{coverImage:a,excerpt:s,searchString:l,slug:u,tags:h,title:m}=e;return(0,r.jsxs)(o(),{as:"/posts/".concat(u),href:"/posts/[slug]","aria-label":m,className:d().card,"data-testid":"PostCard",children:[(0,r.jsx)("div",{"data-testid":"PostCard-image",style:{backgroundImage:"url(".concat(a,")")},className:d().backgroundImage}),(0,r.jsxs)("div",{className:d().titleContainer,children:[(0,r.jsx)("div",{className:d().title,children:(0,r.jsx)(i(),{searchWords:null!==(t=null==l?void 0:l.split(" "))&&void 0!==t?t:[],textToHighlight:m})}),(0,r.jsx)("div",{className:d().tags,children:h.map(e=>(0,r.jsx)(c.Z,{label:e,searchString:l},e))}),(0,r.jsx)("div",{className:d().excerpt,children:(0,r.jsx)(i(),{searchWords:null!==(n=null==l?void 0:l.split(" "))&&void 0!==n?n:[],textToHighlight:s})})]})]})}},6976:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(4184),o=n.n(a),s=n(6646),i=n.n(s);function c(e){let{children:t,className:n}=e;return(0,r.jsx)("div",{className:o()(i().gridContainer,n),children:t})}},3713:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),a=n(2023),o=n.n(a),s=n(7294),i=n(2054),c=n.n(i),l=n(6902),d=n(293),u=n.n(d);function h(e){var t;let{label:n,searchString:a}=e,{theme:i}=(0,s.useContext)(l.ThemeContext),d=o()({luminosity:"light",seed:n}),h=o()({luminosity:"dark",seed:n});return(0,r.jsx)("div",{"data-testid":"tag",style:{borderColor:i===l.Theme.DARK?d:h,backgroundColor:i===l.Theme.DARK?"".concat(d,"22"):d,color:i===l.Theme.DARK?d:"var(--text-primary)"},className:u().container,children:(0,r.jsx)(c(),{searchWords:null!==(t=null==a?void 0:a.split(" "))&&void 0!==t?t:[],textToHighlight:n})})}},6902:function(e,t,n){"use strict";n.r(t),n.d(t,{Theme:function(){return a},ThemeContext:function(){return i},ThemeContextProvider:function(){return c}});var r,a,o=n(5893),s=n(7294);(r=a||(a={})).LIGHT="light",r.DARK="dark";let i=(0,s.createContext)({theme:"light",setTheme:()=>{}}),c=e=>{var t;let{children:n}=e,r=null!==(t=window.localStorage.getItem("theme"))&&void 0!==t?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";window.localStorage.setItem("theme",r),document.documentElement.setAttribute("data-theme",r);let[a,c]=(0,s.useState)({theme:r,setTheme:e=>{window.localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),c({...a,theme:e})}});return(0,o.jsx)(i.Provider,{value:a,children:n})};t.default=c},8676:function(e,t,n){"use strict";n.d(t,{gsap:function(){return r.p8}});var r=n(990),a=n(6546);n.o(a,"ScrollTrigger")&&n.d(t,{ScrollTrigger:function(){return a.ScrollTrigger}}),r.p8.registerPlugin(a.ScrollTrigger)},2627:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return f}});var r=n(5893),a=n(4184),o=n.n(a),s=n(7294),i=n(5459),c=n.n(i),l=n(9893),d=n(7637),u=n(3173),h=n(6976),m=n(8676),_=n(6718),p=n.n(_),g=!0;function f(e){let{allPosts:t}=e,[n,a]=(0,s.useState)(!1),i=(0,s.useRef)(null);(0,s.useLayoutEffect)(()=>{let e=m.gsap.context(()=>{m.gsap.to("[data-speed]",{y:(e,t)=>-(parseFloat(t.getAttribute("data-speed"))*m.ScrollTrigger.maxScroll(window)),ease:"none",scrollTrigger:{start:"0",end:"max",scrub:!0}})},i);return()=>{e.revert()}},[]);let _=(0,r.jsxs)(r.Fragment,{children:[!n&&(0,r.jsx)("img",{"data-speed":"0.05",alt:"",src:"/assets/home/hero-fallback.webp","data-testid":"heroFallback",className:o()(p().fallback)}),(0,r.jsx)("img",{"data-speed":"0.05",onLoad:()=>a(!0),alt:"A nice background",src:"/assets/home/hero-background.webp","data-testid":"heroBackground",className:o()(p().heroBackground,{[p().hide]:!n})}),(0,r.jsx)("img",{"data-speed":"0.15",alt:"Me",src:"/assets/home/hero-cutout.webp","data-testid":"heroCutout",className:o()(p().heroCutout,{[p().hide]:!n})}),(0,r.jsx)("div",{"data-speed":"1",className:p().heroTitleContainer,children:(0,r.jsx)("h1",{children:(0,r.jsx)(c(),{options:{cursor:""},onInit:e=>{e.typeString("hi").pauseFor(1e3).typeString("<br />i'm ash").start()}})})})]});return(0,r.jsx)(d.Z,{hideHeaderUntilScroll:!0,heroContent:_,heroHeight:100,metaDescription:"Hi, I'm Ash. I'm a frontend software developer based in the UK.",metaTitle:"Ashley Harrison - Frontend developer",ref:i,children:(0,r.jsxs)("main",{children:[(0,r.jsxs)("div",{className:p().about,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"about"}),(0,r.jsx)("p",{children:"I'm a frontend software developer based in the UK."}),(0,r.jsxs)("p",{children:["When I'm not typing on a keyboard, you can find me"," ",(0,r.jsx)("s",{children:"typing on a keyboard"})," gaming, playing football and hanging out with friends. Gym or mountain biking if I'm feeling motivated. Music and films if I'm not."]})]}),(0,r.jsx)(l.Z,{className:p().aboutButton,href:"/about",kind:l.L.Primary,children:"More about me"})]}),(0,r.jsxs)("div",{className:p().posts,children:[(0,r.jsx)("h2",{children:"latest posts"}),(0,r.jsx)(h.Z,{className:p().postGrid,children:t.map(e=>(0,r.jsx)(u.Z,{coverImage:e.coverImage,excerpt:e.excerpt,slug:e.slug,tags:e.tags,title:e.title},e.slug))}),(0,r.jsx)(l.Z,{className:p().postsButton,href:"/posts",kind:l.L.Primary,children:"View all posts"})]})]})})}},5702:function(e){e.exports={button:"Button_button__OFOdO",isActive:"Button_isActive__mpn4i",buttonPrimary:"Button_buttonPrimary__7ZsnV",buttonSecondary:"Button_buttonSecondary__UfdMJ",buttonIcon:"Button_buttonIcon__XerCj"}},5112:function(e){e.exports={footer:"Footer_footer__OQpsI",socialLink:"Footer_socialLink___dbNt",socialLinks:"Footer_socialLinks__BEJm6"}},6004:function(e){e.exports={header:"Header_header__1RJ5C",nav:"Header_nav__qw3Y_",pageLinks:"Header_pageLinks__s2uWB",postPageLink:"Header_postPageLink___rKhz",postPageLinkContainer:"Header_postPageLinkContainer__9TnIs",hide:"Header_hide__dQuW8"}},552:function(e){e.exports={heroContent:"Layout_heroContent__SIpdV",contentContainer:"Layout_contentContainer__sNBGP",content:"Layout_content__pYDp6",padContent:"Layout_padContent__TLJCZ"}},8280:function(e){e.exports={backgroundImage:"PostCard_backgroundImage__xCElx",card:"PostCard_card__HzuDs",titleContainer:"PostCard_titleContainer__xYTfy",title:"PostCard_title__d88Gu",excerpt:"PostCard_excerpt__x3mWb",date:"PostCard_date__Z7jkU",tags:"PostCard_tags__n_uxY"}},6646:function(e){e.exports={gridContainer:"PostGrid_gridContainer__gPOKj"}},293:function(e){e.exports={container:"Tag_container__PBQaW"}},6718:function(e){e.exports={about:"Home_about__M4HIH",posts:"Home_posts__AT3rf",aboutButton:"Home_aboutButton__Se5bc",postsButton:"Home_postsButton__24fXA",postGrid:"Home_postGrid__1L4Xl",fallback:"Home_fallback__b5VhX",heroBackground:"Home_heroBackground__DXsrr",heroCutout:"Home_heroCutout__sVPqG",hide:"Home_hide__VaCze",heroTitleContainer:"Home_heroTitleContainer__xHHG1"}}},function(e){e.O(0,[802,325,137,514,459,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);