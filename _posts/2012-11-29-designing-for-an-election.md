---
layout: post
title:  "Designing for an Election"
date:   2012-11-29 17:08:00
categories: work
permalink: /designing-for-an-election
excerpt: "The 2012 election was my third election working at POLITICO. I'd like to describe some of the process that goes into creating our election material."
---

<div class="body-copy wrap">
<p>This year, 2012, has been my third election with POLITICO (if you count the midterms). Elections are one of my favorite parts of the job and one of the contributing factors to why I came here in the first place. But this time around, I sat out on leading the design effort to focus on relaunching POLITICO Pro. Though I did contribute to our homepage wireframes, overall concepts, and front-end dev for the mobile app and our homepage, I want to talk about what my team did as a whole. First, I suppose I should mention that the real design credit should go to <a href="https://twitter.com/redhandeddesign">Michael Marcialis</a>, <a href="https://twitter.com/cbud">Chris Buddie</a>, and <a href="http://qnotemedia.com">Chris Guirreri</a>. </p>

<p>As with many news organizations, elections tend to be a make-or-break ordeal. They are the end-result of the combined efforts put forth by multiple teams: designers, developers, editorial, reporters, sysadmins, project managers, team managers, product managers, web producers, video producers (if applicable), etc. To quote Joe Biden, it’s “a big fuckin’ deal.” Our election night was exactly that—a big fuckin’ deal—and I’ll explain why it was, by all accounts,  a hugely successful night.</p>

<figure class="narrow">
<a href="http://instagram.com/p/Rtwqa7BmJU/"><img src="http://distilleryimage8.s3.amazonaws.com/0a2577c2289411e2a73522000a1faf50_7.jpg" alt="Our traffic spike"/></a>
<figcaption>This was our traffic today as of 11:30 PM. The bar directly to the left of it was our previous all-time record.</figcaption>
</figure>
<p>Take everyone’s favorite metric, the pageview: The day before, we set our all-time record at 8.1M, smashing our previous record by about 1M pageviews. On November 6th, we did 54M pageviews. That’s a 2,100% jump in normal daily traffic. There was even one hour when we did 8.2M pageviews. We beat our daily record in an hour!  For uniques, we had 9.4M on November, beating our previous record of 2.1M. That was 1,500% over normal. We peaked our concurrent visitors at 725,00 when our previous record was 35,000. It was big night. Check out this <a href="http://vimeo.com/53360859">video</a> from the nice folks at <a href="http://chartbeat.com">Chartbeat</a>.</p>

<p>I’m not sure a traffic spike like that is normal, even on the Super Bowl of news days. So what happened? And why? Well, I’m not sure I have a complete answer to that. What really worked in our favor was that our election map was extremely search-friendly. Because of Mitch Schuler’s wizardry, our map was the top Google search result for “election results.” That did us very well. We also built separate pages for each state, making it easy to search for election results for, say, Florida days after Barack Obama was declared winner. As elementary as it sounds, this was a first for us and a big priority. On top of search traffic, we made sure that our content was easy to share. Our homepage had buttons for users to tweet the results of any battleground state at any particular moment. I wrote a small script to glean the results from the state and publish them to a tweet using <a href="https://dev.twitter.com/docs/intents">web intents</a>. </p>

<figure class="narrow">
<img src="/assets/images/hp-results.jpg" alt="homepage" />
<figcaption>Tweet results directly from the homepage.</figcaption>
</figure>

<p>In addition to publishing results on our website, <a href="http://www.linkedin.com/in/mgerl">Mark Gerl</a> and his team also baked them front-and-center into our apps for iPad, iPhone, and Android Phone. However our users prefer to consume our content, we wanted to make sure they weren’t neglected.  The experience we created for our iPhone app was the same experience that our visitors to our mobile site viewed. I wrote the markup to be somewhat responsive on mobile devices and even created some custom icon fonts. That was fun!</p>

<h2>About the design</h2>

<p>Elections are complicated, and we’ve always been fully committed to providing as much information as possible - especially with respect to areas that many maps tend to ignore. We get our data from AP, and they give us a lot of useful stuff – often more than we’ll use, but we do our best to get the most out of it.  We’ve always felt that it’s crucial to display candidates running on independent party tickets. While these candidates rarely win, they can, and sometimes do, have an impact on the result of a county, district, or state. We have received some criticism that we do not indicate when a candidate is leading a state. This decision was intentional. We find that this type of indication creates a bit of confusion. Let’s say that one rural county in CA declared a Republican. If that is the only county reporting at the time, then technically, the Republican Party is leading that state when we all know that it will undoubtedly go to the Democratic Party at the end of the night. </p>

<p>Simply having the information on the page won’t necessarily cut it. It must be organized! There has to be a well-defined architecture, navigation has to be easy, and text must properly guide the user. This is where redundancy can do a little good. We’re tracking the Presidential race in every county in every state along with electoral votes, Senate races in 33 states, House races in 435 districts, Gubernatorial races in 11 states, ballot measures, seating shifts, historical comparisons, marking incumbents, highlighting battleground races, and the list goes on.</p>

<figure class="narrow">
<img src="/assets/images/state-page.jpg" alt="state page" />
<figcaption>Screen shot of the Florida results page. <a href="http://www.politico.com/2012-election/results/president/florida/">Link</a></figcaption>
</figure>

<p>2012 was the first year in which we were able to free ourselves from Flash. The same can be said by all other news organizations. I’m afraid to ask <a href="http://www.qnotemedia.com">Chris</a> how many hours he spent building the maps, but I’d imagine they were many. <a href="http://www.politico.com/2012-election/map/">Our map</a> was built with <a href="http://raphaeljs.com">raphael.js</a>. While the Flash maps performed well for their time, it’s no longer proper technology to use today. For one, a flash movie forces you into using fixed height and widths. Because of sheer number of items we’re tracking, we used to have to cram everything into a series of rollovers and flyout boxes, which really isn’t ideal. It's annoying to find something on a map, click a weird shape, and then scroll through hundreds of boxes of visually-repetitive information. As I mentioned before, we built separate pages for each state (<a href="http://www.politico.com/2012-election/results/president/florida/">example</a>).  While the information within them is reflected on the main map, these were both search-friendly and targeted. They provided very granular-level details about each race. We wanted to make things really easy for users to get to what they want, and be able to dig around from there.</p>

<figure class="narrow">
<img src="/assets/images/big-map.jpg" alt="The Big Map" />
<figcaption>The big map. <a href="http://www.politico.com/2012-election/map/">Link</a></figcaption>
</figure>

<p>Overall, we were very proud of what we done. We had a talented team of people who really put their all into making our election results everything they were: Chris Buddie, Michael Marcialis, Chris Guirerri, Jen Dreyer, Ryan Mannion, Liz Kaplan, Kris Jones, Mike Devich, Megan Chan, Hemal Jhaveri, Danielle Jones, Charles Mahtesian, Chris Behm, Paul Frederiksen, Mitch Schuler, Mark Gerl, and anyone I forgot, great work!</p>
</div>