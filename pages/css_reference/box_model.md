---
layout: two-column-resources
title: The Box Model
parent: CSS Resources
nav_order: 5
permalink: /css-reference/box-model/
---

Every element in web design is a rectangular box. The box model refers to some of the properties that control the layout of these boxes (width, height, margin, padding, border, and box-sizing). The <a href="https://css-tricks.com/the-css-box-model/" target="_blank">CSS Tricks</a> website has a nice description of it.

<img class="medium" src="{{ site.baseurl }}/assets/images/reference/box_model.png" /> 

## Common Box Model properties

```css
.page-section {
    box-sizing: border-box;     // "border-box" does not count padding / border in size calculations
    border: dotted 1px #CCC;    
    padding: 10px;              // note: also padding-right, padding-left, padding-top, padding-bottom
    margin: 10px;               // note: also margin-right, margin-left, margin-top, margin-bottom
    width: 50vh;                // vh stands for viewport height, vw stands for viewport width
}
```

## Recommended LinkedIn Learning Videos

{:.medium}
| <a href="https://www.linkedin.com/learning/css-essential-training-3/introduction-to-the-box-model" target="_blank">Intro to the box model</a> | 1:07 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/inline-block-and-display" target="_blank">Inline, block, and display</a> | 3:06 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/the-box-model-properties" target="_blank">The box model properties</a> | 2:06 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/the-box-properties-syntax-and-usage" target="_blank">The box properties syntax and usage</a> | 4:07 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/debugging-the-box-model" target="_blank">Debugging the box model</a> | 3:28 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/padding-margin-and-border" target="_blank">Padding, margin, & border</a> | 5:34 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/margin-and-layouts" target="_blank">Margins and layouts</a> | 3:03 |


