---
title: HTML is super low level
slug: html-is-super-low-level
date: 2020-06-10
---

I just realized it. It should have been obvious, but I was a web dev all my career, so adding 13px as top margin was something I could do. But what about 14px? How is that different? And why would I need to make choices like that?

Yes, [Tailwind](https://tailwindcss.com/) makes it considerably better, but still. Working with something like SwitftUI is just such a different take on things. Add a VStack and put a Spacer in the middle and you're done.

I know there are cool component libraries, but the examples still look like this: `mt={2}`. Having the option to finetune things is important, but putting one component after another should work. Good defaults, that's what I'm talking about.

Every company and every small website (even this one!) creates new button styles. Starting with an empty white background and reinventing the wheel every time. The creator of [Chakra UI](https://chakra-ui.com/) talked about this in a podcast and while I agree, this shouldn't end there. It nails the accessibility, but composing components should be easier.

I can imagine a library on top of Chakra, that doesn't expect me to use low level like `<Flex>`, margin and fontweight, just things like `<Row>` and `<Headline>`. Tailwind already nails this aspect of using configuration, in my mind that could be used for more complex components too, like changing default spacing in general or the fontsize and weight for **all** `<Headline>` components, if needed.

So far what I've seen in this space are usually heavy on the design side and not composable and globally configurable enough. Probably missing something, but I might even try to make something.

And I know that one of the nicest thing on the web is that it's diverse. Keep it that way! (Just every new project shouldn't <i>always</i> start from scratch.)
