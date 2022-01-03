---
layout: two-column-resources
title: Rules of Thumb
nav_order: 1
show_outline: true
parent: HTML Resources
permalink: /html-reference/rules-of-thumb/
linkedin_learning: 1
---

> **References**:
> For more information, watch the LinkedIn Learning video tutorials:
* [The Importance of HTML](https://www.linkedin.com/learning/html-essential-training/the-importance-of-html?u=75814418) (3:19)
* [Basic HTML Syntax](https://www.linkedin.com/learning/html-essential-training/basic-html-syntax?u=75814418) (8:42)
* [Exploring an HTML Document](https://www.linkedin.com/learning/html-essential-training/exploring-an-html-document?u=75814418) (5:27)

Most of the HTML language is best learned through practice, however below are ten rules of thumb that can help you learn how to use the tags to create the desired result.


## 1. Avoid spaces, capital letters, and special characters when naming files
When creating new HTML files, it is important to follow the **naming conventions** listed below:

1. No whitespace<br>
Rename `page 1.html` → `page_1.html` or `page1.html`
2. No capitalization; all lowercase<br>
Rename `Page1.html` → `page1.html`
3. No special characters (‘,*!^%#). Dashes & underscores are OK<br>
Rename `Jenny's Page!.html` → `jennys_page.html`
In addition, all HTML files end with either the **.htm** or **.html** file extension.

## 2. Most tags have an opening tag and a closing tag
For instance:
```html
<h1>My Title</h1>
```
But some don't:

```html
Images: <img src="dog.png">
Line Breaks:	<br>
Horizontal Rules: <hr>
Stylesheet Links: <link rel="stylesheet" href="my_style.css">
```

You'll eventually figure out the rules as you continue building web pages. You can also consult the [HTML Reference](http://www.w3schools.com/html/default.asp) to learn more about the rules of each individual tag.

## 3. The browser ignores white space
The browser ignores white space, which means that the following line of code:
```html
<h1>My Heading</h1>
```
is interpreted the same way as:


```html
<h1> My
Heading</h1>
```
or:
```html
<h1> 
    
    
    My Heading
    
    
</h1>
```
## 4. Make your code readable by indenting and using line breaks

Please don't do this:

```html
<div><p>Welcome, <strong>Leonard</strong></p><ol><li>item 1</li><li>item2</li><li>item 3</li>
</ol></div>
```
Instead, do this:
```html
<div>
    <p>
        Welcome, <strong>Leonard</strong>
    </p>
    <ol>
        <li>item 1</li>
        <li>item2</li>
        <li>item 3</li>
    </ol>
</div>
```
## 5. Attribute syntax
Attributes are always followed by an equals sign and values are surrounded by quotation marks. In the example below, **src** is the attribute, and **my_image** is the value. Note that **my_image** is surrounded by quotes.

```html
<img src="my_image.jpg">
```

## 6. Last in, first out (LIFO)
Last in, first out (LIFO) means that you close tags in the opposite order that you opened them in. So, if the last tag you opened was the **&lt;strong&gt;** tag, make sure you close the strong tag before you close out any other tags.

So do this:

```html
    <p>Welcome,
        <strong>Leonard</strong>
    </p>
```
Not this:
```html
    <p>Welcome,
        <strong>Leonard</p>
    </strong>
```

## 7. Use comments to help you understand your code
Note that the phrase "Welcome section" is ignored by the browser, but is useful if you're trying to keep track of which section is which in your HTML.

```html
<!-- Welcome Section -->
<section>
    <p>
        Welcome, <strong>Leonard</strong>
    </p>
    <ol>
        <li>item 1</li>
        <li>item 2</li>
    </ol>
</section>
```

## 8. Links to CSS files go inside the &lt;head&gt; tag
In the HTML code block below, that the link to the style sheet is specified within the **&lt;head&gt;** tag:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My first web page</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <!-- YOUR HTML CODE GOES INSIDE THE BODY TAG -->
        <h1>Welcome, Maria!</h1>
        <img src="profile.png" alt="A profile picture">
    </body>
</html>
```

## 9. All visible content goes inside the &lt;body&gt; tag
In the HTML code block below (same as above), all of the visible content -- including headers, images, paragraphs, videos, audio, etc. -- goes in the **&lt;body&gt;** tag:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My first web page</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <!-- YOUR HTML CODE GOES INSIDE THE BODY TAG -->
        <h1>Welcome, Maria!</h1>
        <img src="profile.png" alt="A profile picture">
    </body>
</html>
```

## 10. Use the Browser Inspector
The browser inspector helps you to inspect HTML, CSS, and JavaScript code from within the browser. This is useful for finding bugs in your code, tinkering with existing code, or exploring others' code. To learn more about using the Browser Inspector here: [https://developer.chrome.com/devtools](https://developer.chrome.com/devtools).
