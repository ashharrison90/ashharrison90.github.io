(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{9594:function(e,t,n){"use strict";n.r(t),n.d(t,{metadata:function(){return r},default:function(){return p}});var o=n(6864),a=n(4730),i=(n(7294),n(3905)),s=n(2939),l=["components"],r={title:"Lighthouse",excerpt:"How to improve your site for everyone using Lighthouse CI reports.",coverImage:"/assets/blog/lighthouse/lighthouse.webp",date:"2021-07-11T17:40:07.322Z",tags:["lighthouse","accessibility","seo","performance"]},h={metadata:r},u=function(e){var t=e.children;return(0,i.kt)(s.Z,{metadata:r},t)};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(u,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"What is Lighthouse?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.")),(0,i.kt)("p",null,"This is the description over on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/lighthouse#readme"},"their README"),". Unpicking that a bit; Lighthouse is a tool developed by Google which monitors a page as it renders and calculates scores for various categories such as ",(0,i.kt)("strong",{parentName:"p"},"performance"),", ",(0,i.kt)("strong",{parentName:"p"},"accessibility"),", and ",(0,i.kt)("strong",{parentName:"p"},"SEO"),"."),(0,i.kt)("p",null,"If you're reading this in Chrome, you can run Lighthouse right now in the browser. Right click -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Inspect")," anywhere on the page to open the developer tools, and open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Lighthouse")," tab."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/assets/blog/lighthouse/chrome-dev-tools.webp",alt:"How to find Lighthouse in the Chrome dev tools."}),(0,i.kt)("figcaption",null,"How to find Lighthouse in the Chrome dev tools.")),(0,i.kt)("p",null,"Here you'll be able to generate a Lighthouse report against any site you like."),(0,i.kt)("p",null,"How the scores are calculated and weighted could be the topic of a whole article in itself. In short, scores are out of 100 and higher is better. If you're interested, you can read more about how the performance score is calculated ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/performance-scoring/"},"here"),". They also include ",(0,i.kt)("a",{parentName:"p",href:"https://googlechrome.github.io/lighthouse/scorecalc/"},"this handy calculator")," to see how improvements to various metrics can affect your overall score."),(0,i.kt)("h2",null,"So what?"),(0,i.kt)("p",null,"So why should we care? Well, these metrics are intended to evaluate how well your site performs for everyone."),(0,i.kt)("p",null,"Let's use an example. If your site isn't properly accessible, you could be excluding the ",(0,i.kt)("a",{parentName:"p",href:"https://nfb.org/resources/blindness-statistics"},"2.4% of your audience with visual disabilities"),". And when your potential audience is the entire online population, that is ",(0,i.kt)("del",null,"a metric fuckton")," ",(0,i.kt)("ins",null,"nearly 112 million people"),"."),(0,i.kt)("p",null,"If that's not enough, here's another important factor: Google performs similar audits and ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/intl/en_uk/search/howsearchworks/algorithms/"},"uses this information when deciding how to rank search results"),". If you want your site to be at the top of Google, focus on making it useful, performant and accessible for everyone first."),(0,i.kt)("h2",null,"Running an initial scan"),(0,i.kt)("p",null,"So this all ",(0,i.kt)("em",{parentName:"p"},"sounds")," great, but there's no way I'm relying on a manual process of running a scan and analysing the results each time. Well, Google provides some tools to run Lighthouse programmatically: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/lighthouse-ci"},"Lighthouse CI"),"."),(0,i.kt)("p",null,"To get started, I followed ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/lighthouse-ci/"},"this excellent tutorial")," over on web.dev. This allowed me to set up:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An npm script to run Lighthouse against my site on my machine."),(0,i.kt)("li",{parentName:"ul"},"A GitHub action to run Lighthouse as part of the existing testing on commits/pull requests."),(0,i.kt)("li",{parentName:"ul"},"Automatic pushing of the final report to temporary public storage")),(0,i.kt)("p",null,"And within half an hour or so, I had my first automated result:"),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/assets/blog/lighthouse/first-run.webp",alt:"First Lighthouse run results"}),(0,i.kt)("figcaption",null,"Results of the first Lighthouse scan.")),(0,i.kt)("p",null,"Not bad. But I couldn't help but be slightly disappointed with such a low performance score given the lightweight nature of the site. We'll come back to that later..."),(0,i.kt)("h2",null,"Fixing!"),(0,i.kt)("p",null,"Step 1 - tackle the low hanging fruit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/html-has-lang/"},(0,i.kt)("inlineCode",{parentName:"a"},"<html>")," element does not have a ",(0,i.kt)("inlineCode",{parentName:"a"},"[lang]")," attribute")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/external-anchors-use-rel-noopener/"},"Links to cross-origin destinations are unsafe")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/link-text/"},"Links do not have descriptive text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/uses-webp-images/"},"Serve images in modern formats"))),(0,i.kt)("p",null,"There's not too much to say about these. I was most surprised by the savings gained from switching to use ",(0,i.kt)("inlineCode",{parentName:"p"},".webp")," images instead of ",(0,i.kt)("inlineCode",{parentName:"p"},".png"),". ",(0,i.kt)("inlineCode",{parentName:"p"},".webp")," is now ",(0,i.kt)("a",{parentName:"p",href:"https://caniuse.com/webp"},"supported in all major browsers")," (friendly reminder that IE is not major anymore...) and ",(0,i.kt)("a",{parentName:"p",href:"https://insanelab.com/blog/web-development/webp-web-design-vs-jpeg-gif-png/"},"saves around 26% of the file size"),". I can't really find a downside other than the slight annoyance of having to run any screen captures through a conversion tool."),(0,i.kt)("p",null,"Step 2 - spend ages trying to fix the last remaining performance problem only to eventually give up."),(0,i.kt)("p",null,"Remember our low performance score from earlier? It's actually being caused by an extremely high ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/lcp/"},"largest contentful paint")," time of 7.6s. Largest contentful paint is supposed to measure the time at which the largest element containing content renders. This should include images. However, for some reason, on my site, it's not."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/assets/blog/lighthouse/largest-contentful-paint.webp",alt:"The largest contentful paint element."}),(0,i.kt)("figcaption",null,"No. Bad Lighthouse.")),(0,i.kt)("p",null,"Instead it thinks the heading is the LCP element. So it waits whilst it painstakingly types out all the characters of ",(0,i.kt)("inlineCode",{parentName:"p"},"hi i'm ash"),". Replacing this with plain text gives me a performance score of 100. That's also a bit of a false result, because it still thinks the LCP element is the heading."),(0,i.kt)("p",null,"I will eventually figure out how to make it recognise the images. I suspect it's something to do with the parallax container they're housed in, or the fact they're positioned absolutely. But for now, I've given up."),(0,i.kt)("p",null,"And so, our final results:"),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/assets/blog/lighthouse/final-results.webp",alt:"Final Lighthouse run results."}),(0,i.kt)("figcaption",null,"The final result. For now.")),(0,i.kt)("p",null,"You may notice the performance score has actually gone down even more. That's because I ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ashharrison90/ashharrison90.github.io/commit/3d6b0b7b44f652fb25f7b7c772d55ddf1f52a359"},"switched to using a library called ",(0,i.kt)("inlineCode",{parentName:"a"},"typewriter-effect")," to achieve the typewriter animation on the home page"),". It intentionally completes the animation slightly slower than before, which causes Lighthouse to return a lower score."),(0,i.kt)("h2",null,"Preventing regressions with presets"),(0,i.kt)("p",null,"Over in the README for Lighthouse CI there's a section on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#next-level"},"next steps"),". Here it advocates using the ",(0,i.kt)("inlineCode",{parentName:"p"},"lighthouse:recommended")," preset. This sets up a bunch of assertions on the collected metrics and fails the run if they dip below a certain threshold."),(0,i.kt)("p",null,"There's 2 things to note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can disable individual rules with something like this in your config file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ci": {\n    "assert": {\n      "preset": "lighthouse:recommended",\n      "assertions": {\n        "uses-webp-images": "off"\n      }\n    }\n    ...\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I would actually recommend using the ",(0,i.kt)("inlineCode",{parentName:"li"},"lighthouse:no-pwa")," preset instead. This has all the recommended settings, but without the progressive web app section which can be ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/GoogleChrome/lighthouse-ci/issues/51"},"a little strict"),".")),(0,i.kt)("h2",null,"Final thoughts"),(0,i.kt)("p",null,"Lighthouse is a good start for maintaining a baseline level of performance and accessibility, but it's not a complete solution and it definitely has its faults."))}p.isMDXComponent=!0},3046:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/lighthouse",function(){return n(9594)}])}},function(e){e.O(0,[774,29,514,737,939,888,179],(function(){return t=3046,e(e.s=t);var t}));var t=e.O();_N_E=t}]);