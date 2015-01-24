---
layout: post
title:  "Make the Frame Work"
date:   2013-04-03 14:30:00
categories: development
permalink: /make-the-frame-work
excerpt: "When it comes to CSS frameworks, the best one is always your own."
---

<div class="body-copy wrap">
<p>CSS Frameworks is probably one of the most written-about and debated topics amongst web designers. And there are <a href="http://usablica.github.com/front-end-frameworks/compare.html?v=2.0">a lot</a>. From when <a href="http://www.blueprintcss.org/">blueprint.css</a> (I think that was first) was created to best practices in responsive web design, debate has been ongoing and often passionate. Are generic grids appropriate for new projects or adequate enough to get to move concepts into code? Are they a crutch or do they improve workflow? Are they too bloated or do they provide some groundwork for the years ahead? I’ve been on and off the fence a handful of times trying to determine if frameworks are friend or foe. </p>

<p>For the better part of my career, I’ve been more or less opposed to using them. Well, let me rephrase that. I’ve been opposed to taking them out of the box, slapping them on the ass, and shuffling them out into the world without much consideration for their impact throughout the lifetime of a site. In addition, frameworks are built to serve every combination. I suppose that’s been my issue. It is extremely important that each aspect is the result of careful consideration.  Yes, frameworks can improve the learning curve for burgeoning designers, but they shouldn’t have a place in production. There is one, however, that can stand up to the task: <em>your own</em>.</p>

<p>As a web designer, the websites you build are your babies in a way. You know those little details about them that nobody else knows. You know their trajectories, how they’ll grow up. You can almost anticipate odd deviations.  So only you know to build the framework that will give them their best shot in virtual life. This is especially true for in-house designers who have to work on the same site day in and day out.</p>

<p>In terms of where to start, I have a few hard rules. One is not to make every element reliant on the framework, especially larger structural components. Depending on how the site is built, a minor change can easily turn out to be an expensive, laborious task. For instance, say you need to make adjustment to the sidebar to accommodate an unforeseen change to advertising specs or custom sponsorship. Depending on how the CMS is configured, this could be a more time-consuming override (but hopefully it isn’t). Another is that it’s likely you won’t need to account for every single combination of columns and offsets, as most of which are unnecessary. Aside from that, how you go about tackling implementation is up to you.</p> 

<p>Here are a few things to think about when writing and implementing your framework. </p>

<h2>What to Include</h2>
<p>Some frameworks will use only what pertains to the design grid while others, like <a href="http://twitter.github.com/bootstrap/">bootstrap</a>, will provide nearly every asset needed for a website. From buttons, to typography, forms, lists, etc, it’s all included. While I like to have as many ready-to-use assets on hand, sometimes I wonder where the framework ends and the rest of the site CSS begins. But I think that’s another topic. If this is a route you want to take, you may want to create a style guide page you and your team. </p>

<h2>Responsive Design</h2>
<p>So many frameworks use a class structure that only describes its correspondence to the grid at the widest widest width. This may not always be accurate, given how a design may bow and flex across several breakpoints. I try to address that to some extent <a href="http://smpl.jaredcunha.com">here</a>.  But responsive grids can be a little more complicated than the fixed grids to which we were accustomed. They may not always be 12 columns. When I built <a href="https://www.politicopro.com">POLITICO Pro</a>, the grid went from 4 columns, to 8 columns, to 10 columns, to 12 columns (due to advertising units). Something with class name of <code>.span6</code> would only be accurate in 25% of those contexts.</p>

<h2>Modular Content</h2>
<p>Most websites, especially large ones, have content blocks that can be broken down into modular units. This is where frameworks really shine because much of it can be built upon reusable bits of CSS and HTML. You may want to even consider writing “micro frameworks” that pertain only to specific modules to reduce dependency. Think about how news sites display lists of stories or sidebar widgets. Building a framework to support these items will minimize the amount the amount of additional CSS you’ll need to write further down the road.</p> 

<h2>Flattened Pages</h2>
<p>Not all website will flatten pages into static HTML, but heavily-trafficked sites with aggressive publishing schedules sometimes will once a page’s publish date reaches a particular threshold. Once that occurs, any content prone to having a shelf life is permanently out in the wild and cannot be edited without a lengthy reflattening process, so the CSS selectors must remain. Reusable CSS can greatly reduce the footprint of that temporary or transient content. </p>

<h2>A/B Testing</h2>
<p>With A/B tests, seemingly minute variations in display or wording can sometimes amount to wildly different returns. With reusable CSS, phasing out the lower-performing test would be easier as nothing will need to be extracted from the stylesheet. </p>

<h2>Prototyping</h2>
<p>I enjoy prototyping sessions greatly. I find they’re more helpful than reviewing printouts of wireframes, especially when the project is responsive. With the reusable HTML and CSS that frameworks provide, it’s pretty easy to conduct a prototyping session to test various layouts with live code. For instance, back at <a href="http://www.politico.com/">POLITICO</a>, we had a framework just for story lists. We were able to swap a few class names and change the layout entirely, which became very helpful in explaining how ordering would be affected with if the site were responsive.</p>

<h2>Minor Pages</h2>
<p>Minor pages are those that never receive as much design attention as the other pages on a site. Think terms and conditions pages or the privacy policy. If basic typography is included in your framework, these pages can be created attractively with minimal effort.</p>

<p>There’s a lot to consider when building your framework. You’ll want to keep the long-term in mind without building more than you need. With the proper elements in place, you’ll be able to add sections and build pages with relative ease and speed without reinventing the wheel every time.</p>
</div>
