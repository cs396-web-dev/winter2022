---
layout: two-column-resources
title: Rules of Thumb
parent: CSS Resources
nav_order: 1
show_outline: true
permalink: /css-reference/rules-of-thumb/
---

### 1. Follow the CSS naming conventions

When creating new CSS files, it is important to follow the naming conventions listed below:
* No whitespace<br>Rename `my styles.css` → `my_styles.css` or `mystyles.css`
* No capitalization; all lowercase<br>
Rename `MyStyles.css` → `mystyles.css`
* No special characters (‘,\*!^%#). Dashes & underscores are OK
Rename `Juana's Styles.css` → `juanas-styles.css`

In addition, all CSS files must have the `.css` file extension.

### 2. Know the anatomy of a style block
The image below diagrams a CSS **rule set**. Each **rule set** consists of a **selector**, followed by one or more **declarations**, and each **declaration** is made up of a **property** and a **value**, followed by a semicolon.

![](/winter2022/assets/images/selector-schematic.gif)<br>
Image Source: [W3Schools](http://www.w3schools.com/css/css_syntax.asp)

| -- | -- |
| **rule set** | The entire style definition for the selector(s). For example, the entire code below is the rule set<br>```h1 { color: blue; font-size: 12px; }``` |
| **selector** | Selectors are patterns used to select the element(s) you want to style. To understand how selectors work, use the [W3Schools selector tester](http://www.w3schools.com/cssref/trysel.asp). Please also refer to the more detailed selector guide in [this eBook](/css/selectors.html). |
| **declaration block** | everything that falls within the curly braces. For example:<br>```color: blue; font-size: 12px;```|
| **declaration** | Any single property / value specification. Note that a colon separates the property and value, and each declaration ends in a semi-colon. One example of a declaration is:<br>```color: blue;``` |
| **property** | Properties refer to ***what you want to change***. A list of the legal properties that your web browser allows you to modify can be found in the [CSS property reference](http://www.w3schools.com/cssref/default.asp). Examples of properties include font and background colors, widths, heights, borders, etc. In the example above, **`color`** and **`font-size`** are properties that allow us to change the text color and text size of the selector. |
| **value** | Values refer to ***how you want to change*** the property. In the example above, **`blue`** and **`12px`** are example of valid values (given the property they're modifying). Consult the [CSS property reference](http://www.w3schools.com/cssref/default.asp) to understand the legal values for the particular property. |

Table Source: https://www.impressivewebs.com/css-terms-definitions/

### 3. Define styles using external style sheets, internal style sheets, or inline styles

> See W3Schools Explanation: [http://www.w3schools.com/css/css_howto.asp](http://www.w3schools.com/css/css_howto.asp)

#### External Style Sheet (recommended)
External style sheets link to another CSS file.

```html
    <head>
        <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>
```
#### Internal Style Sheet (only for testing / convenience)

```html
<head>
    <style>
        body {
            background-color: linen;
        }
        h1 {
            color: maroon;
            margin-left: 40px;
        }
    </style>
</head>
```

#### Inline Style (not recommended)
```html
<h1 style="color:blue;margin-left:30px;">This is a heading.</h1>
```

### 4. Make your code readable using indents and line breaks

Please don't do this:

```css
body {background-color:linen;} h1 {color: maroon; margin-left: 40px;}
```
Instead to this:
```css
body {
    background-color: linen;
}
h1 {
    color: maroon;
    margin-left: 40px;
}
```

### 5. Avoid common syntax mistakes
#### Don't forget the semicolon
If you forget to put the semicolon after each style declaration, your whole style sheet will break. The code block below will end in tears. Why?

```css
h1 {
    color: maroon
    margin-left: 40px;
}
```

#### No HTML tags in the CSS
CSS files should never have HTML tags inside of them. No angle brackets &lt;&gt; in a style sheet, ever. Don't do this:

```css
<h1>Hello World!</h1>
h1 {
    color: maroon;
    margin-left: 40px;
}
```

### 6. Use comments to help you understand your code
Style sheets can get really long, and so it's helpful to group your styles into coherent groups, with comments. For example:

```css
/* These styles are for the top menu bar */
h1 {
    color: maroon
    margin-left: 40px;
}
/* These styles are for the main content area */
.content {
    line-height: 1.2em;
}
```

### 7. Understand Selectors
As defined in Rule #2, selectors indicate which parts of the HTML you would want to style. For more information, refer to the selector section of [this eBook](../selectors/).


### 8. Understand the Cascade

** LinkedIn Learning Videos**

{:.medium}
| <a href="https://www.linkedin.com/learning/css-essential-training-3/inheritance-and-specificity" target="_blank">Inheritance and specificity</a> | 4:33 |
| <a href="https://www.linkedin.com/learning/css-essential-training-3/the-cascade-and-importance" target="_blank">The cascade and importance</a> | 1:43 |


* The "cascade" refers to the way that CSS styles are applied to HTML elements. Styles applied to elements cascade down to their descendants, unless they are overridden.
* **Specificity** is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.
* You can think of the cascade as a layering of styling rules, in order of specificity.
* More specific style declarations take precedence over more "distant" ones:
* If one rule is more specific than another one, the more specific rule wins.
* If two rules share the same specificity, then then the more "recent" rule takes precedence.

Note: Some properties are not inherited (because it wouldn't make sense if they did). A table of properties that are / are not inherited can be found at the [W3C specification site](https://www.w3.org/TR/CSS21/propidx.html).

### 9. Know some common CSS properties & values
The [CSS property reference](http://www.w3schools.com/cssref/default.asp) lists the properties available in the CSS language, however we want you to know a few of them very well:
* [color](../color/)
* background-color
* border-color
* specificy color by hexadecimal value, RGB, RGBA, or color name
* [Text](../fonts/)
* [text-align](../fonts/)
* [letter-spacing](../fonts/)
* [font-family](../fonts/)
* [font-weight](../fonts/)
* [word-spacing](../fonts/)
* [line-height](../fonts/)
* [CSS Box Model](../box-model/)
* CSS Animation

### 10. Use as many CSS files as you want
Many modern web designers combine fonts from multiple sources. Although there may be slight performance issues with this approach (load time), combining styles sheets can be a good way to (1) organize your code, and (2) take advantage of third-party style sheets.

```html
<head>
    <!-- external style sheets -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <!-- your custom style sheets -->
    <link rel="stylesheet" type="text/css" href="css/positions.css">
    <link rel="stylesheet" type="text/css" href="css/buttons.css">
    <link rel="stylesheet" type="text/css" href="css/tables.css">
    <link rel="stylesheet" type="text/css" href="css/copy.css">
</head>
```
