---
layout: two-column-resources
title: Selectors
parent: CSS Resources
nav_order: 2
permalink: /css-reference/selectors/
linkedin_learning: 1
---

## Recommended Resources

In order to apply styling to one or more of an HTML element's style properties, you have to tell your web browser which element you want to style (using a selector). The videos and code samples below describe how selectors work, as well as the various types of selectors.

### LinkedIn Learning Videos

{:.medium}
| <a href="https://www.linkedin.com/learning/css-essential-training-3/type-and-universal-selectors" target="_blank">Type and universal selectors</a> | 3:20 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/class-and-id-selectors" target="_blank">Class and id selectors</a> | 3:05 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/class-and-id-selector-exercise" target="_blank">Class and id selector exercise</a> | 3:28 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/descendant-selectors" target="_blank">Descendant selectors</a> | 3:48 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/grouping-selectors" target="_blank">Grouping selectore</a> | 1:38 |

### W3Schools Reference
* [http://www.w3schools.com/css/css_syntax.asp](http://www.w3schools.com/css/css_syntax.asp)
* [http://www.w3schools.com/cssref/css_selectors.asp](http://www.w3schools.com/cssref/css_selectors.asp)

## Overview

|--|--|--|
| Selector | Example | Example description |
|.class	| .intro | Selects all elements with class="intro" |
|\#id | #firstname | Selects the element with id="firstname" |
| *	| *	| Selects all elements |
| element | p | Selects all &lt;p&gt; elements |
| element, element | div, p | Selects all &lt;div&gt; elements and all &lt;p&gt; elements|
|element element | div p| Selects all &lt;p&gt; elements inside &lt;div&gt; elements |
| element > element | div > p | Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element |
| element + element | div + p | Selects all &lt;p&gt; elements that are placed immediately after &lt;div&gt; elements |
| element~element | p ~ ul | Selects every &lt;ul&gt; element that is preceded by a &lt;p&gt; element |

There is an excellent [selector tester](http://www.w3schools.com/cssref/trysel.asp) available on the W3Schools website that does a deeper dive into some of the more complex selectors.

## Basic Selector Examples

### Element Selector
Selects elements based on the element name

**Example:** `h1 { color: red; }`
<iframe src="//codepen.io/vanwars/embed/BzWQPL/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>

### ID Selector
Uses the id attribute of an HTML element to select a specific element, using the hash character (#):

**Example:** `#my_tag { color: red; }`
<iframe src="//codepen.io/vanwars/embed/MepbzV/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>


### Class Selector
Selects elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the name of the class.

**Example:** `.heading { color: red; }`
<iframe src="//codepen.io/vanwars/embed/BzWQGQ/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>

### Grouping Selectors
When you want to apply the same rule to many selectors, separate them with a comma:

**Example:** `h1, h2, h3 { color: red; }`
<iframe src="//codepen.io/vanwars/embed/Vjpmqw/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>
