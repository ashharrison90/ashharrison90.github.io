(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{7611:function(e,t,n){"use strict";n.r(t),n.d(t,{metadata:function(){return l},default:function(){return c}});var a=n(7462),o=n(91),s=(n(7294),n(3905)),i=n(2939),r=["components"],l={title:"Building this site",excerpt:"I had a week's holiday and decided to finally build the site I've been telling myself I'll do for the last 6 years.",coverImage:"/assets/blog/building-this-site/code.webp",date:"2021-05-09T15:40:07.322Z",tags:["javascript","typescript","react","nextjs","design"]},p={metadata:l},h=function(e){var t=e.children;return(0,s.kt)(i.Z,{metadata:l},t)};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",null,"Why?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Narcissism.")),(0,s.kt)("p",null,"Actually, the motivations for building this site are hopefully relatable."),(0,s.kt)("p",null,"Working on the same internal copyrighted project for a few years was starting to stifle my experience with other languages, frameworks, build tools, etc. Having recently gone through a round of interviews at various companies, two issues kept cropping up: a lack of TypeScript experience and a lack of publically available code examples."),(0,s.kt)("p",null,"So, some basic requirements to attempt to address that. This site should:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"be written in TypeScript"),(0,s.kt)("li",{parentName:"ul"},"use some new bootstrap (i.e. not Create React App)"),(0,s.kt)("li",{parentName:"ul"},"should have a mobile first design"),(0,s.kt)("li",{parentName:"ul"},"function as a place to demonstrate ",(0,s.kt)("strong",{parentName:"li"},"production quality")," code")),(0,s.kt)("p",null,"I'll probably regret that last point."),(0,s.kt)("h2",null,"Implementation"),(0,s.kt)("p",null,"As with most blogs or portfolio sites, there isn't really a need for a backend server to be running to dynamically generate pages. The content lends itself to being statically generated."),(0,s.kt)("p",null,"This has a couple of advantages:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"It's ",(0,s.kt)("strong",{parentName:"li"},"fast"),". Being statically generated means that all we're serving up to the end user is the exact same chunk of html and javascript every time. This allows for improved caching, and faster load times as a result."),(0,s.kt)("li",{parentName:"ol"},"It's ",(0,s.kt)("strong",{parentName:"li"},"cheap"),". Not having to run a backend server reduces costs dramatically. This site is currently hosted using ",(0,s.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"GitHub Pages")," for free.")),(0,s.kt)("p",null,"In terms of static site generators, there are ",(0,s.kt)("a",{parentName:"p",href:"https://jamstack.org/generators"},"quite a few options"),". However, after deciding to stick with React, it starts to become a bit of a two horse race between ",(0,s.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/"},"Gatsby"),"."),(0,s.kt)("p",null,"I ended up choosing Next.js, primarily because of it's flexibility. Whilst Gatsby is designed purely as a static site generator, the main focus of Next.js is server side rendering. It just so happens to ",(0,s.kt)("em",{parentName:"p"},"also")," offer static site generation."),(0,s.kt)("figure",null,(0,s.kt)("img",{src:"/assets/blog/building-this-site/people-using-next.webp",alt:"Lots of companies are starting to adopt Next.js"}),(0,s.kt)("figcaption",null,"Lots of companies are starting to adopt Next.js")),(0,s.kt)("p",null,"So if this site ever evolves to the point where it needs a dynamic backend, it can! At the same time, I also gain experience with a framework that a lot of companies are now using. Win-win."),(0,s.kt)("h2",null,"Design"),(0,s.kt)("p",null,"Didn't have one."),(0,s.kt)("p",null,"This will probably come as no surprise to anyone, but I'm not a designer. I ended up playing around with most things in the browser until I was happy. The optimal solution is probably to use wireframes up front."),(0,s.kt)("p",null,"The only thing I'm not quite happy with is the card design for each post. But that's ok - it's good enough for now, and I'm sure it'll be tweaked in the future."),(0,s.kt)("figure",null,(0,s.kt)("img",{src:"/assets/blog/building-this-site/card-design.webp",alt:"The current card design."}),(0,s.kt)("figcaption",null,"The current card design.")),(0,s.kt)("h2",null,"Colours"),(0,s.kt)("p",null,"One thing I wanted for the site was a theme toggle or dark mode toggle. There are ",(0,s.kt)("a",{parentName:"p",href:"https://blog.weekdone.com/why-you-should-switch-on-dark-mode/"},"various benefits")," to this, but I find the biggest one is that it forces you to pare back and structure your styles properly. Simplicity is key. A few different background shades, a couple of choices for text, a splash of colour for interactive elements, etc."),(0,s.kt)("p",null,"What I've ended up with is a ",(0,s.kt)("inlineCode",{parentName:"p"},"globals.scss")," file at the root of the project that looks something like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},":root[data-theme='light'] {\n  --background: #fff;\n  --border: #e0e0e0;\n  --card-brightness: 5;\n  --container: #f4f4f4;\n  --container-alt: #a8a8a8;\n  --container--rgb: 244, 244, 244;\n  --interactive: #0f9bfe;\n  --hero-background-rgb: 0, 0, 0;\n  --hero-text-primary: #fff;\n  --icon-primary: #000;\n  --icon-secondary: #525252;\n  --logo-durham-primary: #002337;\n  --logo-durham-secondary: #702567;\n  --logo-ibm: #1f70c1;\n  --logo-qinetiq: #002744;\n  --text-primary: #000;\n  --text-secondary: #525252;\n}\n\n:root[data-theme='dark'] {\n  --background: #262626;\n  --border: #525252;\n  --card-brightness: 0.6;\n  --container: #393939;\n  --container-alt: #6f6f6f;\n  --container--rgb: 57, 57, 57;\n  --interactive: #60bdff;\n  --hero-background-rgb: 244, 244, 244;\n  --hero-text-primary: #262626;\n  --icon-primary: #f4f4f4;\n  --icon-secondary: #c6c6c6;\n  --logo-durham-primary: #f4f4f4;\n  --logo-durham-secondary: #f4f4f4;\n  --logo-ibm: #1f70c1;\n  --logo-qinetiq: #f4f4f4;\n  --text-primary: #f4f4f4;\n  --text-secondary: #c6c6c6;\n}\n")),(0,s.kt)("p",null,"This is nice as it makes changes to the theme extremely easy. In less than a minute I can change the site from a fairly muted modern colour palette to a kaleidoscopic nightmare."),(0,s.kt)("figure",null,(0,s.kt)("img",{src:"/assets/blog/building-this-site/kaleidoscopic-nightmare.webp",alt:"A kaleidoscopic nightmare."}),(0,s.kt)("figcaption",null,"A kaleidoscopic nightmare.")),(0,s.kt)("p",null,"Originally I was intending to use a CSS-in-JS library, something like ",(0,s.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled components")," or ",(0,s.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),". But Next.js ",(0,s.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css"},"supports css modules")," out of the box, so I've stuck with that and been pleasantly suprised."),(0,s.kt)("h2",null,"Next steps"),(0,s.kt)("p",null,"There's a few things I haven't gotten to yet."),(0,s.kt)("p",null,"Firstly, testing. Turns out it's very easy to postpone testing when there's no real requirement and only one person working on the code. Who knew?"),(0,s.kt)("figure",null,(0,s.kt)("img",{src:"/assets/blog/building-this-site/no-tests.webp",alt:"Whoops!"}),(0,s.kt)("figcaption",null,"Whoops!")),(0,s.kt)("p",null,"Nevertheless, I'm still committed to adding tests. In the real world, good tests are one of the most important aspects of a project. I'm also going to use it as an opportunity to experiment with some more new frameworks I haven't had chance to use yet, e.g. ",(0,s.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," instead of ",(0,s.kt)("a",{parentName:"p",href:"https://www.cypress.io/"},"Cypress"),"."),(0,s.kt)("p",null,"Secondly, performance and SEO. Given how lightweight the site currently is, I don't foresee many problems. But it's just an excuse to play around with ",(0,s.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/lighthouse"},"Lighthouse")," a bit more."),(0,s.kt)("p",null,"And finally, grab myself a nice domain to host it on! Although that might mean ",(0,s.kt)("a",{parentName:"p",href:"https://domains.google.com/registrar/search?searchTerm=ash&tab=1"},"a lot of searching"),"."),(0,s.kt)("h2",null,"Code"),(0,s.kt)("p",null,"If you're curious about anything, feel free to check it all out on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ashharrison90/ashharrison90.github.io"},"GitHub"),"."))}c.isMDXComponent=!0},6003:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/building-this-site",function(){return n(7611)}])}},function(e){e.O(0,[774,29,23,939,888,179],(function(){return t=6003,e(e.s=t);var t}));var t=e.O();_N_E=t}]);