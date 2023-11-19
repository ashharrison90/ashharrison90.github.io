(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{3427:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/lighthouse",function(){return s(4599)}])},4599:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a},metadata:function(){return r}});var n=s(5893),i=s(1151),o=s(1080);let r={title:"Lighthouse",excerpt:"How to improve your site for everyone using Lighthouse CI reports.",coverImage:"/assets/blog/lighthouse/lighthouse.webp",date:"2021-07-11T17:40:07.322Z",tags:["accessibility","seo","performance"]},h=e=>{let{children:t}=e;return(0,n.jsx)(o.Z,{metadata:r,children:t})};function l(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"What is Lighthouse?"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This is the description over on ",(0,n.jsx)(t.a,{href:"https://github.com/GoogleChrome/lighthouse#readme",children:"their README"}),". Unpicking that a bit; Lighthouse is a tool developed by Google which monitors a page as it renders and calculates scores for various categories such as ",(0,n.jsx)(t.strong,{children:"performance"}),", ",(0,n.jsx)(t.strong,{children:"accessibility"}),", and ",(0,n.jsx)(t.strong,{children:"SEO"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you're reading this in Chrome, you can run Lighthouse right now in the browser. Right click -> ",(0,n.jsx)(t.code,{children:"Inspect"})," anywhere on the page to open the developer tools, and open the ",(0,n.jsx)(t.code,{children:"Lighthouse"})," tab."]}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:"/assets/blog/lighthouse/chrome-dev-tools.webp",alt:"How to find Lighthouse in the Chrome dev tools."}),(0,n.jsx)("figcaption",{children:"How to find Lighthouse in the Chrome dev tools."})]}),"\n",(0,n.jsx)(t.p,{children:"Here you'll be able to generate a Lighthouse report against any site you like."}),"\n",(0,n.jsxs)(t.p,{children:["How the scores are calculated and weighted could be the topic of a whole article in itself. In short, scores are out of 100 and higher is better. If you're interested, you can read more about how the performance score is calculated ",(0,n.jsx)(t.a,{href:"https://web.dev/performance-scoring/",children:"here"}),". They also include ",(0,n.jsx)(t.a,{href:"https://googlechrome.github.io/lighthouse/scorecalc/",children:"this handy calculator"})," to see how improvements to various metrics can affect your overall score."]}),"\n",(0,n.jsx)(t.h2,{children:"So what?"}),"\n",(0,n.jsx)(t.p,{children:"So why should we care? Well, these metrics are intended to evaluate how well your site performs for everyone."}),"\n",(0,n.jsxs)(t.p,{children:["Let's use an example. If your site isn't properly accessible, you could be excluding the ",(0,n.jsx)(t.a,{href:"https://nfb.org/resources/blindness-statistics",children:"2.4% of your audience with visual disabilities"}),". And when your potential audience is the entire online population, that is ",(0,n.jsx)("del",{children:"a metric fuckton"})," ",(0,n.jsx)("ins",{children:"nearly 112 million people"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If that's not enough, here's another important factor: Google performs similar audits and ",(0,n.jsx)(t.a,{href:"https://www.google.com/intl/en_uk/search/howsearchworks/algorithms/",children:"uses this information when deciding how to rank search results"}),". If you want your site to be at the top of Google, focus on making it useful, performant and accessible for everyone first."]}),"\n",(0,n.jsx)(t.h2,{children:"Running an initial scan"}),"\n",(0,n.jsxs)(t.p,{children:["So this all ",(0,n.jsx)(t.em,{children:"sounds"})," great, but there's no way I'm relying on a manual process of running a scan and analysing the results each time. Well, Google provides some tools to run Lighthouse programmatically: ",(0,n.jsx)(t.a,{href:"https://github.com/GoogleChrome/lighthouse-ci",children:"Lighthouse CI"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To get started, I followed ",(0,n.jsx)(t.a,{href:"https://web.dev/lighthouse-ci/",children:"this excellent tutorial"})," over on web.dev. This allowed me to set up:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"An npm script to run Lighthouse against my site on my machine."}),"\n",(0,n.jsx)(t.li,{children:"A GitHub action to run Lighthouse as part of the existing testing on commits/pull requests."}),"\n",(0,n.jsx)(t.li,{children:"Automatic pushing of the final report to temporary public storage"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"And within half an hour or so, I had my first automated result:"}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:"/assets/blog/lighthouse/first-run.webp",alt:"First Lighthouse run results"}),(0,n.jsx)("figcaption",{children:"Results of the first Lighthouse scan."})]}),"\n",(0,n.jsx)(t.p,{children:"Not bad. But I couldn't help but be slightly disappointed with such a low performance score given the lightweight nature of the site. We'll come back to that later..."}),"\n",(0,n.jsx)(t.h2,{children:"Fixing!"}),"\n",(0,n.jsx)(t.p,{children:"Step 1 - tackle the low hanging fruit:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.a,{href:"https://web.dev/html-has-lang/",children:[(0,n.jsx)(t.code,{children:"<html>"})," element does not have a ",(0,n.jsx)(t.code,{children:"[lang]"})," attribute"]})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://web.dev/external-anchors-use-rel-noopener/",children:"Links to cross-origin destinations are unsafe"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://web.dev/link-text/",children:"Links do not have descriptive text"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://web.dev/uses-webp-images/",children:"Serve images in modern formats"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["There's not too much to say about these. I was most surprised by the savings gained from switching to use ",(0,n.jsx)(t.code,{children:".webp"})," images instead of ",(0,n.jsx)(t.code,{children:".png"}),". ",(0,n.jsx)(t.code,{children:".webp"})," is now ",(0,n.jsx)(t.a,{href:"https://caniuse.com/webp",children:"supported in all major browsers"})," (friendly reminder that IE is not major anymore...) and ",(0,n.jsx)(t.a,{href:"https://insanelab.com/blog/web-development/webp-web-design-vs-jpeg-gif-png/",children:"saves around 26% of the file size"}),". I can't really find a downside other than the slight annoyance of having to run any screen captures through a conversion tool."]}),"\n",(0,n.jsx)(t.p,{children:"Step 2 - spend ages trying to fix the last remaining performance problem only to eventually give up."}),"\n",(0,n.jsxs)(t.p,{children:["Remember our low performance score from earlier? It's actually being caused by an extremely high ",(0,n.jsx)(t.a,{href:"https://web.dev/lcp/",children:"largest contentful paint"})," time of 7.6s. Largest contentful paint is supposed to measure the time at which the largest element containing content renders. This should include images. However, for some reason, on my site, it's not."]}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:"/assets/blog/lighthouse/largest-contentful-paint.webp",alt:"The largest contentful paint element."}),(0,n.jsx)("figcaption",{children:"No. Bad Lighthouse."})]}),"\n",(0,n.jsxs)(t.p,{children:["Instead it thinks the heading is the LCP element. So it waits whilst it painstakingly types out all the characters of ",(0,n.jsx)(t.code,{children:"hi i'm ash"}),". Replacing this with plain text gives me a performance score of 100. That's also a bit of a false result, because it still thinks the LCP element is the heading."]}),"\n",(0,n.jsx)(t.p,{children:"I will eventually figure out how to make it recognise the images. I suspect it's something to do with the parallax container they're housed in, or the fact they're positioned absolutely. But for now, I've given up."}),"\n",(0,n.jsx)(t.p,{children:"And so, our final results:"}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:"/assets/blog/lighthouse/final-results.webp",alt:"Final Lighthouse run results."}),(0,n.jsx)("figcaption",{children:"The final result. For now."})]}),"\n",(0,n.jsxs)(t.p,{children:["You may notice the performance score has actually gone down even more. That's because I ",(0,n.jsxs)(t.a,{href:"https://github.com/ashharrison90/ashharrison90.github.io/commit/3d6b0b7b44f652fb25f7b7c772d55ddf1f52a359",children:["switched to using a library called ",(0,n.jsx)(t.code,{children:"typewriter-effect"})," to achieve the typewriter animation on the home page"]}),". It intentionally completes the animation slightly slower than before, which causes Lighthouse to return a lower score."]}),"\n",(0,n.jsx)(t.h2,{children:"Preventing regressions with presets"}),"\n",(0,n.jsxs)(t.p,{children:["Over in the README for Lighthouse CI there's a section on ",(0,n.jsx)(t.a,{href:"https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#next-level",children:"next steps"}),". Here it advocates using the ",(0,n.jsx)(t.code,{children:"lighthouse:recommended"})," preset. This sets up a bunch of assertions on the collected metrics and fails the run if they dip below a certain threshold."]}),"\n",(0,n.jsx)(t.p,{children:"There's 2 things to note:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You can disable individual rules with something like this in your config file:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "ci": {\n    "assert": {\n      "preset": "lighthouse:recommended",\n      "assertions": {\n        "uses-webp-images": "off"\n      }\n    }\n    ...\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["I would actually recommend using the ",(0,n.jsx)(t.code,{children:"lighthouse:no-pwa"})," preset instead. This has all the recommended settings, but without the progressive web app section which can be ",(0,n.jsx)(t.a,{href:"https://github.com/GoogleChrome/lighthouse-ci/issues/51",children:"a little strict"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{children:"Final thoughts"}),"\n",(0,n.jsx)(t.p,{children:"Lighthouse is a good start for maintaining a baseline level of performance and accessibility, but it's not a complete solution and it definitely has its faults."})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(h,{...e,children:(0,n.jsx)(l,{...e})})}},1151:function(e,t,s){"use strict";s.d(t,{a:function(){return o}});var n=s(7294);let i=n.createContext({});function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}}},function(e){e.O(0,[802,325,137,514,381,80,774,888,179],function(){return e(e.s=3427)}),_N_E=e.O()}]);