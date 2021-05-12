---
title: 'Building this site'
excerpt: 'My motivations for building a personal site, and some lessons learned along the way.'
coverImage: '/assets/blog/building-this-site/code2.png'
date: '2021-05-09T15:40:07.322Z'
---

In early May, I had a week's holiday and decided to finally build the site I've been telling myself I'll do for the last 6 years.

## Why?

Because I'm extremely narcissistic.

Actually, the motivations for building this site are hopefully relatable.

Working on the same internal copyrighted project for a few years was starting to stifle my experience with other languages, frameworks, build tools, etc. Having recently gone through a round of interviews at various companies, two issues kept cropping up: a lack of TypeScript experience and a lack of publically available code examples.

So, some basic requirements. This site should:

- be written in TypeScript
- use some new bootstrap (i.e. not Create React App)
- function as a place to demonstrate **production quality** code

That last point is actually a bigger deal than it sounds, and probably overkill. I don't know many personal sites with a robust set of unit/e2e tests - but that's the intention here.

## Implementation

In terms of static site generators, there are [quite a few options](https://jamstack.org/generators). However, after deciding to stick with React, it starts to become a bit of a two horse race between [Next.js](https://nextjs.org/) and [Gatsby](https://www.gatsbyjs.com/).

```typescript
var text = 'hello'
```

<figure>
  <img src='/assets/blog/hello-world/cover.jpg' alt="my alt text"/>
  <figcaption>This is my caption text.</figcaption>
</figure>

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
