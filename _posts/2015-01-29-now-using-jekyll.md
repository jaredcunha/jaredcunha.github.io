---
layout: post
title:  "Now Using Jekyll"
date:   2015-01-29 21:00:00˝
categories: Development
permalink: /now-using-jekyll
excerpt: "Moving from Wordpress to Jekyll. "
---

<div class="body-copy wrap" markdown="1">
<figure class="narrow">
	<img src="/assets/images/jekyll-logo.png" alt="Jekyll logo" />
</figure>

When I created this site, my goal was to write more consistency and put the design through constant iteration, establishing a design playground of sorts for myself. Clearly, I have fallen short. I’ve performed maybe one two design tweaks and published less than a handful of posts. I can go over the myriad of reasons why: renovating a house, laziness, but I the fact is I really started to hate Wordpress. 

I didn’t like writing in the editor. Working on my theme, though small for Wordpress, was much more tedious than it needed to be and deployments were a drag. My interest quickly waned and the site started to atrophy. 

## Enter Jekyll

[Jekyll](http://jekyllrb.com) is a parsing engine that takes a set of partials and other files and generates a blog, or any non-dynamic website for that matter, into static HTML pages compiled into the `_site` folder. No database is necessary. There are a few protocols to follow, but overall, it is highly extensible.

So why make the switch? First, Jekyll runs naturally on [GitHub](http://github.com), so deployments and version control are very straightforward. Once properly configured, publishing is as easy as pushing your master branch to your GitHub repo. And lastly, Jekyll is well-organized, making development and modification much more intuitive than Wordpress.

### Jekyll and Gulp

I love using [Gulp](http://gulpjs.com) to run my tasks. One of the issues I found quickly was devising a way to get Jekyll and Gulp to play nicely together. My first mistake was trying to crunch my Jekyll tasks into my `gulpfile.js`. Gotta strive for efficiency, right? Locally, that is fine but it will never run on GitHub because it is Jekyll that is supported, not Gulp. I should have known better but I’ll go ahead and blame our new puppy and the precious sleep he has taken away from me!

Instead, I reconfigured my `gulpfile` to more or less *precompile* my assets first and then let Jekyll build the site. Jekyll will move any folders that do not begin with an underscore into the `_site` folder, so I use Gulp to run Sass, concatenate JS, lint, compress images, etc. into an `assets` folder and Jekyll take that folder and move it into `_site`. 

### Hosting

Another contributing factor to my switching over to Jekyll was that my hosting service tripled in price this year. No bueno, but it lit the fire and got me moving on something I’ve place on the back burner for nearly a year. 

I am now hosting from my [GitHub Repo](https://github.com/jaredcunha/jaredcunha.github.io). My site is a user page, so the repository is named `jaredcunha.github.io` and I didn’t use a `gh-pages` branch. The [GitHub Pages Primer](https://pages.github.com/) has all the information that you’ll need. 

All in all, the process went pretty well. I didn’t feel the need to do a [blog migration](http://jekyllrb.com/docs/migrations/) due to so little content on the site. I’m excited with the new setup and ready to move forward. 










</div>