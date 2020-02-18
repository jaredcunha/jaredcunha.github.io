---
layout: default
title:  "It’s So Simpl"
date: "2013-02-04T06:00-06:00"
categories: development
excerpt: "About two weeks ago, I created a small SASS-powered CSS Framework called SMPL. This post explains the thinking behind it"
---

<div class="body-copy wrap">
<p class="intro">About two weeks ago, I created a small SASS-powered CSS Framework called <a href="http://smpl.jaredcunha.com/">SMPL</a>. This post explains the thinking behind it.</p>

<p>When I launched this site, it was always my intention to do it in a way that I allows me to iterate constantly rather than redesign it every few years or so. To do that, the overall design had be sparse enough to allow for such flexibility. I knew if I had worked out every single detail up front, I’d never get the damned thing done so I just built the minimum of what I needed for that initial push. My next step after that was going to be to create a system that allowed flexibility in building layouts, especially for blog text.</p>

<p>I didn’t need anything too robust, just a few column combinations that can be altered at different breakpoints. Crazy, edge case stuff, right? No. So I got thinking. Can I give this a broader application? </p>

<p>I went in with the approach that I really don’t like using CSS frameworks directly out of the box. Most of them are either too bloated with unnecessary crap or don’t quite do exactly what I need. I never liked using predefined grids and I was never a fan of <code>.span6</code> or <code>.last</code>. With responsive design, those selectors become even more useless because layouts change at different breakpoints (aside from the fact they are non-semantic). You can have some boxes of content arranged in a single column on mobile, then expand to 2 columns, to 3, to 6. What I decided might be more appropriate would be class name that describes how a particular group of content behaves. </p>

<p>“But framework selectors suck!”</p>

<p>And I agree! As I said, I’m not a huge fan, but I’m not 100% dogmatic about it either. I think they do have time and place, especially when reusable code is required. If you still have strong opinions, then that’s where SASS comes in. All the properties come from SASS mixins, so you can use them with framework selectors, or you can use them on your own. </p>

<p>For the grid, I wanted to make something that would fit websites a little more universally. Typically with responsive sites, you’ll have blocks of content in a few equal divisions: halves, thirds, and quarters (you might have a some 60/40 divisions, which are not in the framework but might be later). What I’ve seen in many responsive frameworks is that they only include two layouts, single-column and on the grid. They rarely account for multiple breakpoints. </p>

<p>I made SMPL out to be intentionally small. I don’t want it to become a crutch because I think designers should make their own decisions. This is a starting point, a building block. I hope it serves as a nice tool get web projects moving. The whole thing is up on <a href="https://github.com/jaredcunha/smpl">GitHub</a>. I look forward to hearing any feedback. </p>
</div>
