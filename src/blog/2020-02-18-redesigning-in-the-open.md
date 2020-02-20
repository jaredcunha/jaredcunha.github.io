---
layout: default
tags: post
title: "Redesigning in the open"
categories: personal
---

I’ve noticed a recent trend on a few designers’ personal sites where most of the work is being done out in the open. In the beginning, a site will appear mostly unstyled or somewhat broken. Over time, you will see increasing levels of fidelity until a finalized product takes shape.

Some examples of this are [Rob Weychert](https://v7.robweychert.com/) and [Frank Chimero](https://frankchimero.com/blog/2019/redesign/). I have decided to take a similar approach. Some of goals for this year include redeveloping my site and publishing content more often. I haven’t written anything here since 2016.

This will be more than a redesign. I’ve been wanting to rearchitect the entire thing, moving from Jekyll to [Eleventy](https://www.11ty.dev/), updating the build and deployment process, and so on. You can see the work being done in the [GitHub repo for this site](https://github.com/jaredcunha/jaredcunha.github.io).

I will post updates here to document notable updates as I move forward.

---
## February 20, 2020

**Spacing units!!**

Today I have added my [spacing unit function](https://github.com/jaredcunha/jaredcunha.github.io/blob/master/src/assets/stylesheets/functions/_spacing-units.scss). This function is used in place of hardcoded margins and padding to enforce a consistent horizontal and vertical rhythm with a multiple of 8. At some point, I’m going to refactor that function so that the `$units` [Sass map](https://github.com/jaredcunha/jaredcunha.github.io/blob/master/src/assets/stylesheets/settings/_variables.scss) isn’t such a mess. But it’s snippet I’ve used in other projects and it works.

Back to the spacing units. Why multiples of 8? There are many reasons, but I’d recommend reading the [8-pt Grid](https://spec.fm/specifics/8-pt-grid) for the entire rationale.

---
## February 19, 2020

This is the first push I’ve made on this. Generally, the goal here was to get everything out of Jekyll, scrap the old design, and put it into Eleventy without breaking URLs for any of the old posts. What I've done so far includes:

- Migrated from Jekyll to Eleventy. I don’t think I made any significant changes to the Jekyll build since 2015, so I just started from scratch here. The old configuration was also set up so that GitHub pages can run Jekyll on commits to master. Nice to be without that constraint now.
- Running all build process through `npm` and `gulp`. It took some tinkering to set up the build and watch tasks for development.
- Set up a basic build process
- First pass at type selection. I’m digging **Playfair** on the headings, but not so settled on **Raleway** for the body text.
- For the type scale, I'm using a combination of sizes from [Type-scale](https://type-scale.com/) on Major Third scale and [Fluid type](https://css-tricks.com/snippets/css/fluid-typography/) for handling responsive font sizes. Fonts go from a minimal base size of 16px to a maximum size of 20px
- Added [stylelint](https://stylelint.io/) to enforce CSS conventions.
- I’ve always used Normalize for my CSS resets, but this time I am kicking the tires on [Andy Bell’s css reset](https://dev.to/hankchizljaw/a-modern-css-reset-6p3)

Nothing here is set in stone at this point, but expect many changes to come. Netlify is as easy as advertised.
