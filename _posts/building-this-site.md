---
title: 'Building this site'
excerpt: 'My motivations for building a personal site, and some lessons learned along the way.'
coverImage: '/assets/blog/building-this-site/code.png'
date: '2021-05-09T15:40:07.322Z'
---

In early May, I had a week's holiday and decided to finally build the site I've been telling myself I'll do for the last 6 years.

## Why?

**Narcissism.**

Actually, the motivations for building this site are hopefully relatable.

Working on the same internal copyrighted project for a few years was starting to stifle my experience with other languages, frameworks, build tools, etc. Having recently gone through a round of interviews at various companies, two issues kept cropping up: a lack of TypeScript experience and a lack of publically available code examples.

So, some basic requirements to attempt to address that. This site should:

- be written in TypeScript
- use some new bootstrap (i.e. not Create React App)
- function as a place to demonstrate **production quality** code

That last point is probably overkill. I don't know many personal sites with a robust set of unit and end-to-end tests, but that's my intention here.

## Implementation

That brings us on to some implementation decisions.

In terms of static site generators, there are [quite a few options](https://jamstack.org/generators). However, after deciding to stick with React, it starts to become a bit of a two horse race between [Next.js](https://nextjs.org/) and [Gatsby](https://www.gatsbyjs.com/).

I ended up choosing Next.js, primarily because of it's flexibility. Whilst Gatsby is designed purely as a static site generator, the main focus of Next.js is server side rendering. It just so happens to _also_ offer static site generation.

<figure>
  <img src='/assets/blog/building-this-site/peopleUsingNext.png' alt="Companies using Next.js"/>
  <figcaption>Lots of companies are starting to adopt Next.js</figcaption>
</figure>

So if this site ever evolves to the point where it needs a dynamic backend, it can! At the same time, I also gain experience with a framework that [a lot of companies are now using.](https://nextjs.org/showcase) Win-win.
