---
layout: default
title:  "Responsive HTML Tables"
date: "2012-09-29T06:00-06:00"
categories: development
permalink: /responsive-html-tables
excerpt: "Data tables are notoriously pesky elements to wrestle down into a narrow viewport. Here's another solution that I'm throwing into the mix."
---

<div class="wrap">
<p>Data tables are notoriously pesky elements to wrestle down into a narrow viewport. They can have a large number of columns or rows. Cells may contain simple data or entire paragraphs. Let’s say for the sake of the article that it’s all appropriate, or if anything, that such a table could possibly show up on your website.  How do we proceed? Well, that really depends.</p>

<p>There are plenty of solutions already in the wild. Some are good, some are not so good. Personally, I have an aversion to anything that would irretrievably remove content from view or forgo the table element altogether. These options either exhibit bad practices in responsive design or skirt the issue entirely. </p>

<p>What makes tables more difficult than other elements in a responsive site is that you need to maintain the relationship between the data and its respective column and row headers — visually and in code. This means that you end up sacrificing some of the flexibility that you have with other types of elements. In particularly tall tables, it’s pretty easy to lose track of the column headings. </p>

<p>Depending on what type of site you have, you, the designer, might not be the person responsible for producing content. And if a data table finds its way into an article, it’s likely that you didn’t have much say over how many columns or rows it contains. Hell, you’re probably not even aware it exists. But whether or not it breaks, that’s going to fall upon you.</p>

<p>Of all the proposed ideas for how to display a responsive data table, my favorite is <a href="http://css-tricks.com/responsive-data-tables/">Chris Coyier’s example on CSS Tricks</a>. He has chosen to vertically orient the data into “card stacks.” What makes this so appealing to me is that it allows for great column flexibility and does not require the producer to manually enter class names for a javascript function. It’s also much less harrowing if that producer possesses only a working knowledge of HTML. </p>     

<p>There was one aspect of Chris’s approach that I felt could be improved upon, however: using <code>:nth-of-type</code> selectors to create pseudo elements. Browser compatibility aside, having to replicate table headers into embedded CSS leaves a lot of room for human error. I’ve written a quick script which takes the headings inside the <code>&lt;thead&gt;</code> and recreates them as labels, replicating down for each table row. </p>

[gist id=3804292]

<p>So for the table below, the web producer only needs properly formatted HTML with a <code>&lt;thead&gt;</code> and a <code>&lt;tbody&gt;</code>. Even though mine is hooked with a class name (for my own purposes), it isn’t required. For CSS and all other information, please refer back to the original <a href="http://css-tricks.com/responsive-data-tables/">post</a> on CSS  Tricks.</p>
</div>

<table class="vert-collapse">
                  <thead>
                      <tr>
                            <th>Ingredient</th>
                            <th>Minimal Soaking</th>
                            <th>PSI setting</th>
                            <th>Cooking time</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                            <th>Black Beans</th>
                            <td>4-8 hours</td>
                            <td>15 PSI</td>
                            <td>18-20 minutes</td>
                            <td>Black beans are popular in many Latin American dishes. They pair well with meat and other strong, assertive flavorings.</td>
                        </tr>
                        <tr>
                            <th>Cannellini</th>
                            <td>4 hours</td>
                            <td>15 PSI</td>
                            <td>10-12 minutes</td>
                            <td>These beans work very well with bean salads and soups. Can be served with fresh rosemary and black pepper.</td>
                        </tr>
                        <tr>
                            <th>Fava Beans</th>
                            <td>4 hours - overnight</td>
                            <td>10 PSI</td>
                            <td>6-8 minutes</td>
                            <td>Discard skins after soaking.  Use these in soups or paté. Blanch with cauliflower. Be careful about the loose skins while pressure cooking. Always use oil. Place rack on top of beans to keep them from floating up.</td>
                        </tr>
                        <tr>
                            <th>Garbanzo</th>
                            <td>8 hours - overnight</td>
                            <td>15 PSI</td>
                            <td>6-8 minutes</td>
                            <td>Use in hummus or salads. Can also be baked until crispy</td>
                        </tr>
                        <tr>
                            <th>Lentils</th>
                            <td>None</td>
                            <td>15 PSI</td>
                            <td>5-7 minutes</td>
                            <td>Great for soups. Always rinse and pick to remove stones and debris. French lentils tend to be more delicate.</td>
                        </tr>
                        <tr>
                            <th>Kidney Beans</th>
                            <td>4 hours</td>
                            <td>15 PSI</td>
                            <td>10-12 minutes</td>
                            <td>Should hold shape well during cooking. Use in chili and bean salads</td>
                        </tr>
                        <tr>
                            <th>Pinto Beans</th>
                            <td>4 hours</td>
                            <td>15 PSI</td>
                            <td>10-12 minutes</td>
                            <td>Expect them to be mushy when cooked. Used in mexican cuisine.</td>
                        </tr>
                    </tbody>
                </table>

<div class="wrap">
<p>Keep in mind that tables tend to vary. This might be a bit much for a small table, but inadequate for a complex table with colspans or rowspans. </p>
</div>