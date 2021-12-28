---
layout: assignment-two-column
title: Event Handlers and the DOM
type: lab
abbreviation: Lab 4
draft: 1
num: 4
points: 5
due_date: 2022-01-28
---

<a href="/winter2022/course-files/labs/lab04.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a> 

## Get Oriented with the Files
In this week's lab, you will be manipulating the DOM using various event handlers. Before you begin, some notes:
* Open `index.html`. Note that there is an empty unordered list with a class called `cards`. This is dynamically populated by `js/index.js`
* Open `js/index.js`. Note that the `initScreen()` function iterates through the photos in the `photos` array and renders a card for each photo, using a template. Pay attention to how each "card" is rendered, and specifically that each image is created using a div tag with an image background.
* You will only be editing `js/index.js` in today's lab. All of the instructions below should be completed in this file.

After inspecting the starter code, please complete the following tasks:

## 1. Implement the Thumbnail Click Event Handler

In the `js/index.js` file, create and attach an event handler (function) to the onclick event of each thumbnail (div element with a class of `.image`). When the thumbnail is clicked, the event handler should update the backgroundImage of the `.featured-image` element with the image of the thumbnail that was just clicked (see video below). 
  * If you need a hint to get started, take a look at `hints/index-hint-1.js`
  * Note also that you can only attach event handlers **after** they have been rendered in the DOM. In other words, you can't attach the event handlers until `initScreen()` has been invoked. Order matters.
  * To set the background image of an element, use the syntax shown below:

`destinationElement.style.backgroundImage = sourceElement.style.backgroundImage;`

## 2. Implement the Next and Previous Click Event Handlers

When you're done with Step 1, implement the "next" and "previous" click event handlers:
* When the right arrow is clicked, the next image in the thumbnail list should be displayed as the `.featured-image`. When the last thumbnail is reached, it should cycle to the first (see video below).
* When the left arrow is clicked, the previous image in the thumbnail list should be displayed as the `.featured-image`. When the first thumbnail is reached, it should cycle to the last (see video below).

### Tips
Consider using a global variable to track the index position of the image that is currently being displayed. You can detect this by accessing the `data-index` attribute of the `.image`. See `hints/index-hint-2.js` if you want a hint.

## 3. Attach the Featured Image Click Event to the "Next" Event Handler
When the `.featured-image` is clicked, invoke the same function that is invoked when `.next` is clicked.

## Demo
<img src="/winter2022/assets/images/labs/lab04-gallery.gif" />

## What to turn in
Please zip your entire lab04 folder and submit to Canvas.


