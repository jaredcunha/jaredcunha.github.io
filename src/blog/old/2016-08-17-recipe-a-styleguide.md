---
tags: post
layout: default
title:  "Recipe: A Styleguide"
date: "2016-08-17T06:00-06:00"
categories: Development, Design
excerpt: "Building a styleguide for Restaurants Plus"
permalink: "/blog/2016/08/recipe-a-styleguide/index.html"
---
<figure class="full">
<img src="/images/recipe-front.png" alt="Screenshot of Recipe"/>
<figcaption>It's just a screenshot. The button doesn’t actually work.</figcaption>
</figure>

At LivingSocial, we’ve been diligently working on a new experience for [Restaurants Plus](http://r.livingsoci.al/qd9njwn/04) over the past several months. The process has been encouraging for several reasons. Regarding the product, we can see that consumers have been enthusiastic. As an organization, it is our first responsive site and not hindered by legacy systems. My role has been as front-end developer.

In addition to building out the site itself, I’ve been quietly working on a styleguide behind the scenes that I’ve named _[Recipe](https://www.livingsocial.com/restaurants-plus-rewards/styleguide)_. More on that later. But first, a little context.

Something I love the most about any new project is that it presents a great opportunity to apply lessons learned from any shortcomings in the past. One glaring problem at LivingSocial was the way our code organized and applied with little attention to consistency or usability. Documentation was nonexistent and standards were ignored. We were a different company back then. Hundreds of engineers, new hires coming on board daily, all chugging away at this rapidly scaling product.

And then that trend reversed. Many engineers left or were let go, and along with them went any insight as to how anything was built. We’d spend hours digging through applications, hunting down methods and functions, and wrangling CSS specificity issues. This is not an ideal use of time for any developer, and even worse, there is little choice other than let the problem perpetuate.

User interfaces fluctuated as well. Buttons would have gradients and drop shadows. The shadows would fall out of favor. The gradients would turn flat. Yet, each iteration of the button would continue to exist alongside the other.

Having a reference document became essential – an inventory of our patterns and components, how they are built and how they are used. We needed to do better job enforcing ourselves in how we present a consistent visual language to our consumers. That is why I started Recipe.

<figure class="border">
<img src="/images/recipe.png" alt="Screenshot of Recipe"/>
<figcaption>Typical page in Recipe</figcaption>
</figure>

Preferably, we would have began with building a component library to use in crafting full page designs. However, page designs were completed long before we began front-end development. But does that mean we missed our only opportunity to build a styleguide? No! We made time to discuss with our designers how they envisioned long-term use of their components, how they could extend, and constraints upon their use.

This led to some back-and-forth between refactoring designs or initial code, but the payoff was worthwhile. We have a design system that never existed before, and created a necessary bridge between our designers and developers.

When designing the styleguide, contribution and maintenance should be as frictionless as possible. It inherits application CSS and JavaScript from the core site. _Recipe_ speaks to how we’ve built our site, which is evolving rapidly. As such, designers and developers need to take time to evaluate it together.

I wish I can write about any lasting impacts, but I will not be at the company much longer and only time will tell. [Restaurants Plus](http://r.livingsoci.al/qd9njwn/04) is a great product and I love using it.

As inside any professional kitchen, the chef cannot be the gatekeeper. The restaurant relies on a team of dedicated individuals and specialists to consistently deliver excellent meals to customers no matter who is working that day. I’m not saying I’m _the chef_ in this the analogy, but I’m saying that is precisely why we follow a _Recipe_.
