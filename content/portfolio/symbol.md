---
priority: 70
title: Symbol Travel
---

This is an e-commerce selling managed tours in Mallorca. The interesting part was in the back-end, connecting multiple API-s - the data is stored and managed on external services. Without webhooks some of these needed to be run periodically, so I needed to manage background queues, check for changes and save the data normalized. The front-end was built with Vue.js, the payment is handled by Stripe.

Technologies used:
[Laravel](https://laravel.com/),
[Vue.js](https://vuejs.org/)

[Live site](https://test.symboltravel.com/filter)
