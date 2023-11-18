(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{8909:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/building-this-site",function(){return s(2478)}])},5075:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var n=s(5893),i=s(1664),r=s.n(i),o=s(7763),a=s.n(o),l=s(9837),c=s(771),h=s.n(c);function d(e){var t,s;let{coverImage:i,excerpt:o,searchString:c,slug:d,tags:g,title:p}=e;return(0,n.jsxs)(r(),{as:"/posts/".concat(d),href:"/posts/[slug]","aria-label":p,className:h().card,"data-testid":"PostCard",children:[(0,n.jsx)("div",{"data-testid":"PostCard-image",style:{backgroundImage:"url(".concat(i,")")},className:h().backgroundImage}),(0,n.jsxs)("div",{className:h().titleContainer,children:[(0,n.jsx)("div",{className:h().title,children:(0,n.jsx)(a(),{searchWords:null!==(t=null==c?void 0:c.split(" "))&&void 0!==t?t:[],textToHighlight:p})}),(0,n.jsx)("div",{className:h().tags,children:g.map(e=>(0,n.jsx)(l.Z,{label:e,searchString:c},e))}),(0,n.jsx)("div",{className:h().excerpt,children:(0,n.jsx)(a(),{searchWords:null!==(s=null==c?void 0:c.split(" "))&&void 0!==s?s:[],textToHighlight:o})})]})]})}},2478:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h},metadata:function(){return a}});var n=s(5893),i=s(1151),r=s(7042),o=s(5075);let a={title:"Building this site",excerpt:"I had a week's holiday and decided to finally build the site I've been telling myself I'll do for the last 6 years.",coverImage:"/assets/blog/building-this-site/code.webp",date:"2021-05-09T15:40:07.322Z",tags:["javascript","typescript","react","nextjs"]},l=e=>{let{children:t}=e;return(0,n.jsx)(r.Z,{metadata:a,children:t})};function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Why?"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Narcissism."})}),"\n",(0,n.jsx)(t.p,{children:"Actually, the motivations for building this site are hopefully relatable."}),"\n",(0,n.jsx)(t.p,{children:"Working on the same internal copyrighted project for a few years was starting to stifle my experience with other languages, frameworks, build tools, etc. Having recently gone through a round of interviews at various companies, two issues kept cropping up: a lack of TypeScript experience and a lack of publically available code examples."}),"\n",(0,n.jsx)(t.p,{children:"So, some basic requirements to attempt to address that. This site should:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"be written in TypeScript"}),"\n",(0,n.jsx)(t.li,{children:"use some new bootstrap (i.e. not Create React App)"}),"\n",(0,n.jsx)(t.li,{children:"should have a mobile first design"}),"\n",(0,n.jsxs)(t.li,{children:["function as a place to demonstrate ",(0,n.jsx)(t.strong,{children:"production quality"})," code"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"I'll probably regret that last point."}),"\n",(0,n.jsx)(t.h2,{children:"Implementation"}),"\n",(0,n.jsx)(t.p,{children:"As with most blogs or portfolio sites, there isn't really a need for a backend server to be running to dynamically generate pages. The content lends itself to being statically generated."}),"\n",(0,n.jsx)(t.p,{children:"This has a couple of advantages:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["It's ",(0,n.jsx)(t.strong,{children:"fast"}),". Being statically generated means that all we're serving up to the end user is the exact same chunk of html and javascript every time. This allows for improved caching, and faster load times as a result."]}),"\n",(0,n.jsxs)(t.li,{children:["It's ",(0,n.jsx)(t.strong,{children:"cheap"}),". Not having to run a backend server reduces costs dramatically. This site is currently hosted using ",(0,n.jsx)(t.a,{href:"https://pages.github.com/",children:"GitHub Pages"})," for free."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In terms of static site generators, there are ",(0,n.jsx)(t.a,{href:"https://jamstack.org/generators",children:"quite a few options"}),". However, after deciding to stick with React, it starts to become a bit of a two horse race between ",(0,n.jsx)(t.a,{href:"https://nextjs.org/",children:"Next.js"})," and ",(0,n.jsx)(t.a,{href:"https://www.gatsbyjs.com/",children:"Gatsby"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["I ended up choosing Next.js, primarily because of it's flexibility. Whilst Gatsby is designed purely as a static site generator, the main focus of Next.js is server side rendering. It just so happens to ",(0,n.jsx)(t.em,{children:"also"})," offer static site generation."]}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:"/assets/blog/building-this-site/people-using-next.webp",alt:"Lots of commerical companies have adopted Next.js"}),(0,n.jsx)("figcaption",{children:"Lots of commerical companies have adopted Next.js"})]}),"\n",(0,n.jsx)(t.p,{children:"So if this site ever evolves to the point where it needs a dynamic backend, it can! At the same time, I also gain experience with a framework that a lot of companies are now using. Win-win."}),"\n",(0,n.jsx)(t.h2,{children:"Design"}),"\n",(0,n.jsx)(t.p,{children:"Didn't have one."}),"\n",(0,n.jsx)(t.p,{children:"This will probably come as no surprise to anyone, but I'm not a designer. I ended up playing around with most things in the browser until I was happy. The optimal solution is probably to use wireframes up front."}),"\n",(0,n.jsx)(t.p,{children:"The only thing I'm not quite happy with is the card design for each post. But that's ok - it's good enough for now, and I'm sure it'll be tweaked in the future:"}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:"/assets/blog/building-this-site/card-design.webp",alt:"The initial card design."}),(0,n.jsx)("figcaption",{children:"The initial card design."})]}),"\n",(0,n.jsx)(t.p,{children:"Compared to the current design:"}),"\n",(0,n.jsx)(o.Z,{coverImage:a.coverImage,excerpt:a.excerpt,slug:"building-this-site",tags:a.tags,title:a.title}),"\n",(0,n.jsx)(t.h2,{children:"Colours"}),"\n",(0,n.jsxs)(t.p,{children:["One thing I wanted for the site was a theme toggle or dark mode toggle. There are ",(0,n.jsx)(t.a,{href:"https://blog.weekdone.com/why-you-should-switch-on-dark-mode/",children:"various benefits"})," to this, but I find the biggest one is that it forces you to pare back and structure your styles properly. Simplicity is key. A few different background shades, a couple of choices for text, a splash of colour for interactive elements, etc."]}),"\n",(0,n.jsxs)(t.p,{children:["What I've ended up with is a ",(0,n.jsx)(t.code,{children:"globals.scss"})," file at the root of the project that looks something like:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scss",children:":root[data-theme='light'] {\n  --background: #fff;\n  --border: #e0e0e0;\n  --card-brightness: 5;\n  --container: #f4f4f4;\n  --container-alt: #a8a8a8;\n  --container--rgb: 244, 244, 244;\n  --interactive: #0f9bfe;\n  --hero-background-rgb: 0, 0, 0;\n  --hero-text-primary: #fff;\n  --icon-primary: #000;\n  --icon-secondary: #525252;\n  --logo-durham-primary: #002337;\n  --logo-durham-secondary: #702567;\n  --logo-ibm: #1f70c1;\n  --logo-qinetiq: #002744;\n  --text-primary: #000;\n  --text-secondary: #525252;\n}\n\n:root[data-theme='dark'] {\n  --background: #262626;\n  --border: #525252;\n  --card-brightness: 0.6;\n  --container: #393939;\n  --container-alt: #6f6f6f;\n  --container--rgb: 57, 57, 57;\n  --interactive: #60bdff;\n  --hero-background-rgb: 244, 244, 244;\n  --hero-text-primary: #262626;\n  --icon-primary: #f4f4f4;\n  --icon-secondary: #c6c6c6;\n  --logo-durham-primary: #f4f4f4;\n  --logo-durham-secondary: #f4f4f4;\n  --logo-ibm: #1f70c1;\n  --logo-qinetiq: #f4f4f4;\n  --text-primary: #f4f4f4;\n  --text-secondary: #c6c6c6;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"This is nice as it makes changes to the theme extremely easy. In less than a minute I can change the site from a fairly muted modern colour palette to a kaleidoscopic nightmare."}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:"/assets/blog/building-this-site/kaleidoscopic-nightmare.webp",alt:"A kaleidoscopic nightmare."}),(0,n.jsx)("figcaption",{children:"A kaleidoscopic nightmare."})]}),"\n",(0,n.jsxs)(t.p,{children:["Originally I was intending to use a CSS-in-JS library, something like ",(0,n.jsx)(t.a,{href:"https://styled-components.com/",children:"styled components"})," or ",(0,n.jsx)(t.a,{href:"https://emotion.sh/docs/introduction",children:"Emotion"}),". But Next.js ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css",children:"supports css modules"})," out of the box, so I've stuck with that and been pleasantly suprised."]}),"\n",(0,n.jsx)(t.h2,{children:"Next steps"}),"\n",(0,n.jsx)(t.p,{children:"There's a few things I haven't gotten to yet."}),"\n",(0,n.jsx)(t.p,{children:"Firstly, testing. Turns out it's very easy to postpone testing when there's no real requirement and only one person working on the code. Who knew?"}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:"/assets/blog/building-this-site/no-tests.webp",alt:"Whoops!"}),(0,n.jsx)("figcaption",{children:"Whoops!"})]}),"\n",(0,n.jsxs)(t.p,{children:["Nevertheless, I'm still committed to adding tests. In the real world, good tests are one of the most important aspects of a project. I'm also going to use it as an opportunity to experiment with some more new frameworks I haven't had chance to use yet, e.g. ",(0,n.jsx)(t.a,{href:"https://playwright.dev/",children:"Playwright"})," instead of ",(0,n.jsx)(t.a,{href:"https://www.cypress.io/",children:"Cypress"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Secondly, performance and SEO. Given how lightweight the site currently is, I don't foresee many problems. But it's just an excuse to play around with ",(0,n.jsx)(t.a,{href:"https://developers.google.com/web/tools/lighthouse",children:"Lighthouse"})," a bit more."]}),"\n",(0,n.jsxs)(t.p,{children:["And finally, grab myself a nice domain to host it on! Although that might mean ",(0,n.jsx)(t.a,{href:"https://domains.google.com/registrar/search?searchTerm=ash&tab=1",children:"a lot of searching"}),"."]}),"\n",(0,n.jsx)(t.h2,{children:"Code"}),"\n",(0,n.jsxs)(t.p,{children:["If you're curious about anything, feel free to check it all out on ",(0,n.jsx)(t.a,{href:"https://github.com/ashharrison90/ashharrison90.github.io",children:"GitHub"}),"."]})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(l,{...e,children:(0,n.jsx)(c,{...e})})}},771:function(e){e.exports={backgroundImage:"PostCard_backgroundImage__Fn_2R",card:"PostCard_card__Hk_bu",titleContainer:"PostCard_titleContainer__qvCw5",title:"PostCard_title__2Ad9c",excerpt:"PostCard_excerpt__GgbBT",date:"PostCard_date__9VIkR",tags:"PostCard_tags___JVz6"}},1151:function(e,t,s){"use strict";s.d(t,{a:function(){return r}});var n=s(7294);let i=n.createContext({});function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}}},function(e){e.O(0,[325,514,381,42,774,888,179],function(){return e(e.s=8909)}),_N_E=e.O()}]);