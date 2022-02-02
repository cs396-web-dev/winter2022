---
layout: assignment-two-column
title: JavaScript Practice
type: lab
abbreviation: Lab 5
draft: 0
points: 5
num: 5
due_date: 2022-02-04
---

## Introduction 
The goal of today's lab is to:
1. Help you practice using JavaScript to target and modify HTML elements in your DOM Tree.
2. Continue practicing your CSS skills.
2. Encourage you to keep thinking about improving the accessibility of your website.

We have created a cheatsheet (below) with examples of different selector methods and approaches to updating the DOM.

### Selector Methods 

| Method | Example |
|--|--|
| getElementById() | document.getElementById("my_element") |
| querySelector() | document.querySelector("#my_element")<br>document.querySelector("p")<br>document.querySelector(“.my-announcements") |
| querySelectorAll() | document.querySelectorAll("p") |
| getElementsByTagName() | document.getElementsByTagName("div") |
| getElementsByClassName() | document.getElementsByClassName(".panel") |

### Some examples of HTML attributes you can modify

| Attribute | Example |
|--|--|
| className | document.querySelector("div").className = "panel"; |
| innerHTML | document.querySelector("div").innerHTML = "&lt;p&gt;hi&lt;/p&gt;"; |
| src (for images) | document.querySelector(".my_image").src = "sponge_bob.png"; |
| href (for links) | document.querySelector(".my_link").href = 'https://www.wikipedia.org'; |


### Some examples of style properties you can modify

| Property | Example |
|--|--|
| width | document.querySelector("div").style.width = "200px"; |
| height | document.querySelector("div").style.width = "200px"; |
| background-color | document.querySelector("div").style.backgroundColor = "hotpink"; |
| border-width | document.querySelector("div").style.borderWidth = "5px"; |
| padding | document.querySelector("div").style.padding = "10px"; |
| display | document.querySelector("div").style.display = "none"; |

## Your Tasks

<a href="/winter2022/course-files/labs/lab05.zip" class="nu-button">Download Lab 5 <i class="fas fa-download"></i></a> 

Please download the lab05.zip file, unzip it, and move the lab05 folder inside of your webdev-labs folder. Then complete the tasks below.

### 1. Font Size Adjuster
Open font-switcher/index.html in VS Code, and note the HTML tags. Also note that within the header tag there is a script tag that links to your JavaScript file:

```html
<script src="index.js" defer></script>
```

The keyword `defer` means that the script won't run until your entire web page is loaded.


Open `01-font-switcher/index.js` in Atom, and uncomment the section at the bottom by deleting the /* and */ symbols:

```js
/*
document.querySelector(???).addEventListener('click', makeBigger);
document.querySelector(???).addEventListener('click', makeSmaller);
*/
```

Replace the `???` with the correct selector, so that your makeBigger function and makeSmaller function get attached to the correct DOM elements.

Finally, modify the makeBigger and makeSmaller functions so that they modify the font size of the `div.content` element and the `h1` element. When you're done, your web page should look like this:

<img class="large frame" src="/winter2022/assets/images/labs/lab05/font-switcher.gif" />


### 2. Theme Switcher
Another way to make your site more accessible is to create a "high-contrast" stylesheet or CSS class. For this exercise, please do the following:

1. Open `02-theme-switcher/index.js` and attach a click event handler to each of the four of the buttons in the nav bar. 
2. Each event handler should modify the class of the `body` tag to match the theme of the button that was clicked. 
    * The available theme classes are: `ocean`, `desert` and `high-contrast`. To see the themes, open the `style.css` file and scroll to the bottom.
3. If the `default` button is clicked, just unset the class on the body tag.

When you're done, your web page should look like this:

<img class="large frame" src="/winter2022/assets/images/labs/lab05/theme-switcher.gif" />

### 3. Dyslexia Mode
In part 3, you will use JavaScript to create a method for people with dyslexia to more easily read your web page. This technique is based on this artice: <a href="https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/" target="_blank">Adding A Dyslexia-Friendly Mode To A Website</a>. Please complete the following tasks:

1. In `style.css`, create a new class called `.dyslexia-mode`. 
2. Following the recommendations from the Smashing Magazine article above, ensure that your class does the following:
    * Adjust the letter and word spacing to the recommended settings
    * Disables ligatures
    * Modify the line spacing
    * Modify either the font weight (to be bolder) or the color (to be darker)
    * Make the font-size bigger
    * Narrow the line width (lines that are too long in the horizontal direction are hard to read)
3. When you're done, create a button and add the needed functionality to enabled the user to toggle the "Dyslexia Mode" on and off.
4. Note that the Smashing Magazine also makes use of localStorage so that the site "remembers" the users' preferences for the next time.

When you're done, your web page should look like this:

<img class="large frame" src="/winter2022/assets/images/labs/lab05/dyslexia.gif" />

## What to Turn In
To submit Lab 5:

### 1. Push all of your files to GitHub
Please copy the latest version of your files to GitHub by issuing the following commands:
Please commit and push the latest version of your files to GitHub by issuing the following commands:

```shell
git add .    # in case you created any new files
git commit -m 'Commiting my completed lab05 files'
git status   # to make sure that all of your files are being tracked
git push     # sends your files to GitHub
```

### 2. Paste a link to your repo on Canvas
Paste a link to your `webdev-labs` GitHub repository into the Canvas textbox for Lab 5.
