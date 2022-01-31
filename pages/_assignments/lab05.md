---
layout: assignment-two-column
title: JavaScript Practice
type: lab
abbreviation: Lab 5
draft: 1
points: 5
num: 5
due_date: 2022-02-04
---

> Font size & DOM manipulation:
> * Buttons to increase font size
> * Button to put things into high-contrast mode
> * Dyslexia-friendly mode: 
>     * https://codepen.io/smashingmag/pen/dyzwqXm. 
>     * https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/


<a href="/spring2021/course-files/tutorials/tutorial05.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a> 


Please download the tutorial05 files and save them to your repo folder. Then, open the entire tutorial05 folder in Atom. To view how each of the projects should work upon completion, please see this screencast.

## Part 1: Font Switcher
Open font-switcher/index.html in Atom, and note the HTML tags. Also note, right before the close of the body tag, the script tag that links to your JavaScript file:

```html
<script src="js/index.js"></script>
```


Open `font-switcher/js/index.js` in Atom, and uncomment the section at the bottom by deleting the /* and */ symbols:

```js
/*
document.querySelector(???).onclick = makeBigger;
document.querySelector(???).onclick = makeSmaller;
*/
```

Replace the ??? with the correct selector, so that your makeBigger function and makeSmaller function get attached to the correct DOM elements.


Finally, modify both the body of the makeBigger and makeSmaller functions so that they modify the font size of the div that is assigned the class of “content”.


## Part 2: Theme Switcher
Repeat the same general process with theme-switcher, by:
1. Opening `theme-switcher/js/index.js`, uncommenting the event handler code at the bottom, and replacing the ??? with the correct selectors, and
2. Modifying the bodies of the defaultTheme, oceanTheme, and desertTheme functions so that the theme of the div tag with the class of “container” gets updated with the correct class. To see the themes, open the `theme-switcher/css/style.css` file and scroll to the bottom.

## Part 3: Page Turner
Repeat the same general process with page-turner, by:
1. Opening `page-turner/js/index.js`, uncommenting the event handler code at the bottom, and replacing the ??? with the correct selectors, and
2. Modifying the bodies of the chapter1, chapter2, and chapter3 functions so that they modify the contents of the div that is assigned the class of “content.”

## Turn in your files via GitHub
1. Move your `tutorial05` folder into your repo folder (if it's not there already).
2. Check the status of your repo:<br>`$ git status`<br>It should say that your tutorial05 files are “untracked”
3. Add all of your tutorial05 files to the list of files that are tracked by the repo:<br>`$ git add tutorial05`
4. Check the status of your repo again:<br>`$ git status`<br>It should now say that you tutorial05 files are being tracked.
5. Now, commit your new tutorial05 files to the repo:<br>`$ git commit -m "Adding my tutorial05 to the repo"`
6. Finally, “push” your files to GitHub:<br>`$ git push`
7. Paste a link to your GitHub repo and to your GitHub pages 

## Cheat Sheet
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
| innerHTML | document.querySelector("div").innerHTML = "hi"; |
| src (for images) | document.getElementsByTagName("div") |
| href (for links) | document.getElementsByClassName(".panel") |


### Some examples of style properties you can modify

| Property | Example |
|--|--|
| width | document.querySelector("div").style.width = "200px"; |
| height | document.querySelector("div").style.width = "200px"; |
| background-color | document.querySelector("div").style.backgroundColor = "hotpink"; |
| border-width | document.querySelector("div").style.borderWidth = "5px"; |
| padding | document.querySelector("div").style.padding = "10px"; |
| display | document.querySelector("div").style.display = "none"; |