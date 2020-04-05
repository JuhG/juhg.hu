---
priority: 75
title: Forum
---

This is a work in progress project for building my custom forum system.
Part of the motivation was playing around with data fetching and testing in Next.js.
I can safely say I like it a lot. I've used FaunaDB for storing the data and build a quick wrapper around it.

For testing I've made a mock version of the wrapper for super quick integration tests, but on commit I always run the actual version of it (in a test database) to check if there's a regression in the mock version. Now that the api endpoints are stable I'm in the process of building the UI with "Cypress Driven Development".

Other notable parts of the front-end are SWR for making refetching data real easy and Framer Motion for super simple animations.

Technologies used:
[Next.js](https://nextjs.org/),
[FaunaDB](https://fauna.com/),
[Jest](https://jestjs.io/),
[Cypress](https://www.cypress.io/),
[SWR](https://swr.now.sh/),
[Framer Motion](https://www.framer.com/motion/)

[Source on Github](https://github.com/dromedar-design/forum)
