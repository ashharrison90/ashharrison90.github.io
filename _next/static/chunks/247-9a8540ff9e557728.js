(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247,492],{8601:function(e,t,n){"use strict";n.d(t,{L:function(){return a},Z:function(){return h}});var r,a,s=n(5893),i=n(4184),o=n.n(i),c=n(1664),l=n.n(c),d=n(4621),u=n.n(d);function h(e){let{ariaLabel:t,children:n,className:r,href:a,isActive:i,kind:c="primary",onClick:d,target:h}=e;return a?(0,s.jsx)(l(),{href:a,"aria-label":t,rel:h?"noreferrer":void 0,role:"link",target:h,className:o()(u().button,r,{[u().isActive]:i,[u().buttonPrimary]:"primary"===c,[u().buttonSecondary]:"secondary"===c,[u().buttonIcon]:"icon"===c}),children:n}):(0,s.jsx)("button",{"aria-label":t,disabled:i,onClick:d,className:o()(u().button,r,{[u().isActive]:i,[u().buttonPrimary]:"primary"===c,[u().buttonSecondary]:"secondary"===c,[u().buttonIcon]:"icon"===c}),children:n})}(r=a||(a={})).Primary="primary",r.Secondary="secondary",r.Icon="icon"},1458:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(5893),a=n(4184),s=n.n(a),i=n(9008),o=n.n(i),c=n(7294),l=n(650),d=n(8797),u=n(7813),h=n(2476),m=n(7390),_=n(8601),g=n(9971),p=n.n(g),f=JSON.parse('{"github":"https://www.github.com/ashharrison90","linkedin":"https://www.linkedin.com/in/ashharrison90","instagram":"https://www.instagram.com/ashharrison90","facebook":"https://www.facebook.com/ashleyharrison90","twitter":"https://twitter.com/ashharrison90"}');let x={facebook:(0,r.jsx)(l.Z,{}),github:(0,r.jsx)(d.Z,{}),instagram:(0,r.jsx)(u.Z,{}),linkedin:(0,r.jsx)(h.Z,{}),twitter:(0,r.jsx)(m.Z,{})};function b(){return(0,r.jsx)("footer",{className:p().footer,children:(0,r.jsx)("div",{className:p().socialLinks,children:Object.keys(f).map(e=>(0,r.jsx)(_.Z,{className:p().socialLink,ariaLabel:"Contact me on ".concat(e),href:f[e],kind:_.L.Icon,target:"_blank",children:x[e]},e))})})}var v=n(5152),L=n.n(v),j=n(1163),k=n(7298),y=n.n(k);let w=L()(()=>Promise.all([n.e(833),n.e(119)]).then(n.bind(n,9119)),{loadableGenerated:{webpack:()=>[9119]},ssr:!1}),C=[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Posts",href:"/posts"}],P=(0,c.forwardRef)((e,t)=>{let{show:n}=e,a=(0,j.useRouter)();return(0,r.jsxs)("header",{ref:t,className:s()(y().header,{[y().hide]:!n}),children:[(0,r.jsx)(w,{}),(0,r.jsxs)("nav",{className:y().nav,children:[C.map(e=>{let{label:t,href:n}=e;return(0,r.jsx)(_.Z,{className:y().pageLinks,href:n,isActive:a.pathname===n,kind:_.L.Secondary,children:t},n)}),a.asPath.startsWith("/posts/")&&(0,r.jsx)("div",{className:s()(y().postPageLinkContainer,{[y().hide]:!n}),children:(0,r.jsx)(_.Z,{className:y().postPageLink,href:a.asPath,isActive:!0,kind:_.L.Secondary,children:a.asPath.replace("/posts","")},a.asPath)})]})]})});P.displayName="Header";var N=n(3946),Z=n.n(N);let T=0,S=(0,c.forwardRef)((e,t)=>{let{children:n,heroContent:a,heroHeight:i=0,hideHeaderUntilScroll:l=!1,metaDescription:d,metaTitle:u}=e,[h,m]=(0,c.useState)(!l),_=(0,c.useRef)(null),g=(0,c.useRef)(null);return(0,c.useImperativeHandle)(t,()=>g.current),(0,c.useLayoutEffect)(()=>{let e=()=>m(!0),t=()=>{l?m(window.scrollY>0):(m(window.scrollY<=T),T=window.scrollY)},n=_.current;return null==n||n.addEventListener("focusin",e),document.addEventListener("scroll",t),()=>{null==n||n.removeEventListener("focusin",e),document.removeEventListener("scroll",t)}},[l]),(0,r.jsxs)("div",{ref:g,children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:u}),(0,r.jsx)("meta",{name:"description",content:d})]}),(0,r.jsx)(P,{show:h,ref:_}),(0,r.jsx)("div",{style:{height:"".concat(i,"svh")},className:Z().heroContent,children:a}),(0,r.jsx)("div",{className:Z().contentContainer,role:"main",children:(0,r.jsx)("div",{className:s()(Z().content,{[Z().padContent]:!a&&!l}),children:n})}),(0,r.jsx)(b,{})]})});S.displayName="Layout";var I=S},2247:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(5893),a=n(837),s=n(6167),i=n(9622),o=n(4636),c=n(5037),l=n(5010),d=n(7086),u=n(7294),h=n(492),m=n(9298),_=n(1458),g=n(3946),p=n.n(g),f=n(2476),x=n(482),b=n(7390),v=n(3239),L=n(8601),j=n(3412),k=n(545),y=n.n(k);let w={linkedin:{icon:(0,r.jsx)(f.Z,{}),label:"LinkedIn",getShareLink:e=>"https://www.linkedin.com/sharing/share-offsite/?url=".concat(e)},reddit:{icon:(0,r.jsx)(x.Z,{}),label:"Reddit",getShareLink:(e,t)=>"https://reddit.com/submit?url=".concat(e,"&title=").concat(t)},twitter:{icon:(0,r.jsx)(b.Z,{}),label:"Twitter",getShareLink:(e,t)=>"https://twitter.com/intent/tweet?url=".concat(e,"&text=").concat(t)}};function C(e){let{date:t,excerpt:n,tags:a,title:s}=e,[i,o]=(0,u.useState)(""),[c,l]=(0,u.useState)(!1);(0,u.useEffect)(()=>{o(window.location.href),l(!!navigator.share)},[]);let d=async()=>{await navigator.share({title:s,url:i})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:y().titleContainer,children:[(0,r.jsx)("h1",{className:y().title,children:s}),(0,r.jsxs)("div",{className:y().infoContainer,children:[(0,r.jsx)("div",{className:y().leftHandSide,children:(0,r.jsx)("div",{className:y().tags,children:a.map(e=>(0,r.jsx)(j.Z,{label:e},e))})}),(0,r.jsxs)("div",{className:y().rightHandSide,children:[(0,r.jsx)("div",{className:y().date,children:new Date(t).toLocaleDateString(void 0,{month:"long",year:"numeric"})}),(0,r.jsxs)("div",{className:y().shareLinks,children:[c&&(0,r.jsx)(L.Z,{className:y().shareLink,ariaLabel:"Share",kind:L.L.Icon,onClick:d,children:(0,r.jsx)(v.Z,{})}),Object.keys(w).map(e=>(0,r.jsx)(L.Z,{className:y().shareLink,ariaLabel:"Share to ".concat(w[e].label),href:w[e].getShareLink(encodeURIComponent(i),encodeURIComponent(s)),kind:L.L.Icon,children:w[e].icon},e))]})]})]})]}),(0,r.jsx)("p",{className:y().excerpt,children:n})]})}var P=n(4190),N=n.n(P);function Z(e){let{children:t,metadata:n}=e,{theme:s}=(0,u.useContext)(h.ThemeContext),i=(0,u.useRef)(null),o=(0,u.useRef)(null);(0,u.useLayoutEffect)(()=>{a.Z.highlightAll();let e=m.gsap.context(()=>{m.gsap.from(".".concat(p().heroContent),{duration:.5,height:"100vh",ease:"back",delay:.1}),m.gsap.to("[data-speed]",{y:(e,t)=>-(parseFloat(t.getAttribute("data-speed"))*m.ScrollTrigger.maxScroll(window)),ease:"none",scrollTrigger:{start:"0",end:"max",scrub:!0}})},o);return()=>e.revert()},[]),(0,u.useEffect)(()=>{if(i.current){i.current.innerHTML="";let e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("repo","ashharrison90/ashharrison90.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","post-comments"),e.setAttribute("theme","github-".concat(s)),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async","true"),i.current.appendChild(e)}},[s]);let{coverImage:c,date:l,excerpt:d,tags:g,title:f}=n,x=(0,r.jsx)("img",{alt:"","data-speed":"0.05",className:N().coverImage,src:c});return(0,r.jsxs)(_.Z,{heroContent:x,heroHeight:65,metaDescription:d,metaTitle:f,ref:o,children:[(0,r.jsx)(C,{date:l,excerpt:d,tags:g,title:f}),(0,r.jsx)("div",{className:N().postLayout,children:t}),(0,r.jsx)("div",{ref:i})]})}a.Z.registerLanguage("bash",s.Z),a.Z.registerLanguage("javascript",i.Z),a.Z.registerLanguage("json",o.Z),a.Z.registerLanguage("typescript",d.Z),a.Z.registerLanguage("python",c.Z),a.Z.registerLanguage("scss",l.Z)},3412:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),a=n(2023),s=n.n(a),i=n(7294),o=n(7763),c=n.n(o),l=n(492),d=n(1333),u=n.n(d);function h(e){var t;let{label:n,searchString:a}=e,{theme:o}=(0,i.useContext)(l.ThemeContext),d=s()({luminosity:"light",seed:n}),h=s()({luminosity:"dark",seed:n});return(0,r.jsx)("div",{"data-testid":"tag",style:{borderColor:o===l.Theme.DARK?d:h,backgroundColor:o===l.Theme.DARK?"".concat(d,"22"):d,color:o===l.Theme.DARK?d:"var(--text-primary)"},className:u().container,children:(0,r.jsx)(c(),{searchWords:null!==(t=null==a?void 0:a.split(" "))&&void 0!==t?t:[],textToHighlight:n})})}},492:function(e,t,n){"use strict";n.r(t),n.d(t,{Theme:function(){return a},ThemeContext:function(){return o},ThemeContextProvider:function(){return c}});var r,a,s=n(5893),i=n(7294);(r=a||(a={})).LIGHT="light",r.DARK="dark";let o=(0,i.createContext)({theme:"light",setTheme:()=>{}}),c=e=>{var t;let{children:n}=e,r=null!==(t=window.localStorage.getItem("theme"))&&void 0!==t?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";window.localStorage.setItem("theme",r),document.documentElement.setAttribute("data-theme",r);let[a,c]=(0,i.useState)({theme:r,setTheme:e=>{window.localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),c({...a,theme:e})}});return(0,s.jsx)(o.Provider,{value:a,children:n})};t.default=c},9298:function(e,t,n){"use strict";n.d(t,{gsap:function(){return r.p8}});var r=n(990),a=n(6546);n.o(a,"ScrollTrigger")&&n.d(t,{ScrollTrigger:function(){return a.ScrollTrigger}}),r.p8.registerPlugin(a.ScrollTrigger)},4621:function(e){e.exports={button:"Button_button__OFOdO",isActive:"Button_isActive__mpn4i",buttonPrimary:"Button_buttonPrimary__7ZsnV",buttonSecondary:"Button_buttonSecondary__UfdMJ",buttonIcon:"Button_buttonIcon__XerCj"}},9971:function(e){e.exports={footer:"Footer_footer__OQpsI",socialLink:"Footer_socialLink___dbNt",socialLinks:"Footer_socialLinks__BEJm6"}},7298:function(e){e.exports={header:"Header_header__1RJ5C",nav:"Header_nav__qw3Y_",pageLinks:"Header_pageLinks__s2uWB",postPageLink:"Header_postPageLink___rKhz",postPageLinkContainer:"Header_postPageLinkContainer__9TnIs",hide:"Header_hide__dQuW8"}},3946:function(e){e.exports={heroContent:"Layout_heroContent__SIpdV",contentContainer:"Layout_contentContainer__sNBGP",content:"Layout_content__pYDp6",padContent:"Layout_padContent__TLJCZ"}},4190:function(e){e.exports={postLayout:"PostLayout_postLayout__9ZgHO",coverImage:"PostLayout_coverImage__tl3pu",padder:"PostLayout_padder__P4o80"}},545:function(e){e.exports={titleContainer:"PostTitle_titleContainer__WUHxD",tags:"PostTitle_tags__v2UyU",title:"PostTitle_title__TYVYV",infoContainer:"PostTitle_infoContainer__IPP90",shareLinks:"PostTitle_shareLinks__b0hid",shareLink:"PostTitle_shareLink__nIxNP",date:"PostTitle_date__0tCH0",rightHandSide:"PostTitle_rightHandSide__t0uYO",excerpt:"PostTitle_excerpt__gjsNt"}},1333:function(e){e.exports={container:"Tag_container__PBQaW"}}}]);