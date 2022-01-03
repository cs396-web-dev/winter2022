---
layout: two-column-resources
title: Semantic Tags
nav_order: 7
parent: HTML Resources
permalink: /html-reference/semantic-tags/
linkedin_learning: 1
---

> **Reference Videos & Readings**
* Suggested LinkedIn Learning Videos:
  * [The value of structure](https://www.linkedin.com/learning/html-essential-training/the-value-of-structure?u=75814418) (2:48)
  * [Controlling document outlines](https://www.linkedin.com/learning/html-essential-training/controlling-document-outlines?u=75814418) (10:40)
* Optional LinkedIn Learning Videos
  * [The nav element](https://www.linkedin.com/learning/html-essential-training/the-nav-element?u=75814418) (5:32)
  * [The article element](https://www.linkedin.com/learning/html-essential-training/the-article-element?u=75814418) (5:19)
  * [The section element](https://www.linkedin.com/learning/html-essential-training/the-section-element?u=75814418) (5:12)
  * [The div element](https://www.linkedin.com/learning/html-essential-training/the-div-element?u=75814418) (6:04)
* W3Schools Reference:
  * [http://www.w3schools.com/html/html5_semantic_elements.asp](http://www.w3schools.com/html/html5_semantic_elements.asp)
  * [http://www.w3schools.com/html/html_layout.asp](http://www.w3schools.com/html/html_layout.asp)

Semantic elements clearly describe the purpose of the tag in the tag itself, and are new in HTML5. &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;, &lt;aside&gt;, etc. are examples of semantic tags. Semantic tags are useful for grouping your page into logical sections that are easy for a screen reader or web crawler to interpret.

## Example 1: Simple
```
|---------------------------------|
|             <header>            |
|-----------|---------------------|
| <nav>     | <section>           |
|-----------|---------------------|
|             <footer>            |
|---------------------------------|
```
<iframe src="//codepen.io/vanwars/embed/zBYeRm/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>

## Example 2: More Complicated
```
|---------------------------------|
|             <header>            |
|---------------------------------|
|               <nav>             |
|-----------------|---------------|
| <section>       |               |
|-----------------| <aside>       |
| <article>       |               |
|-----------------|---------------|
|             <footer>            |
|---------------------------------|
```
<iframe src="//codepen.io/vanwars/embed/rLNPoq/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>
