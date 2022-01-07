---
layout: assignment-two-column
title: HTML & CSS Practice
type: lab
abbreviation: Lab 1
draft: 0
num: 1
points: 5
due_date: 2022-01-07
---

<style>
    blockquote h2 {
        margin: auto !important;
        padding: 0px !important;
    }
</style>

## 1. Introduction
The goal of today's lab is to help you get you started using GitHub (if you're new to using it), and to give you a little exposure to HTML and CSS. We will be covering HTML and CSS in much more detail next week, so this lab precedes the lecture. As we will discuss on Monday:

* **HTML files** are for presenting **content** using various build-in interface elements (e.g., paragraphs, lists, tables, images, sections, etc.).
* **CSS files** are for styling HTML elements (e.g., fonts, colors, positioning, etc.) by (a) *targeting* them using ***selectors***, and (b) setting a various style *properties*.


{:.blockquote-no-margin}
> ## 2. Background Readings
> Please read / watch the following references ***before*** coming to lab.
>
> ### 1. GitHub
> If you have not used GitHub before, please complete the GitHub tutorial before coming to lab this week:
> * <a href="https://guides.github.com/activities/hello-world/">GitHub Tutorial</a> and <a href="https://www.git-tower.com/blog/git-cheat-sheet/" target="_blank">Git Cheat Sheet</a>
>
> ### 2. HTML & CSS
> Please read (or at least skim) the following:
> 1. [HTML Reference](/winter2022/html-reference/)
> 2. [CSS Reference](/winter2022/css-reference/), and particularly:
>    * [Rules of thumb](/winter2022/css-reference/rules-of-thumb/)
>    * [Selectors](/winter2022/css-reference/selectors/)
>    * [The Box Model](/winter2022/css-reference/box-model/)
>    * [Media Queries](/winter2022/css-reference/media-queries/)
> 3. <a href="https://flexboxfroggy.com/" target="blank">Flexbox Froggy</a> (recommended)


## 3. Set Up your IDE, Git, and GitHub
We recommend that you use Visual Studio Code as your code editor. We will also be using git to manage versions of your code and to interact with GitHub (and later Heroku).

### 1. Install Visual Studio Code
Download and install Visual Studio Code: <a href="https://code.visualstudio.com" target="_blank">https://code.visualstudio.com/</a>
* We also recommend that you install the <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server" extension</a> (click the green "Install" button).


### 2. Install Git / Register for GitHub
If you haven't already:
1. Install git on your computer: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>
2. Register for GitHub: <a href="https://github.com/join" target="_blank">https://github.com/join</a>

### 3. Configure Your GitHub Repository
Many of you already have a process for doing this, so feel free to do your own thing here. That said, if you're relatively new to this, here are some instructions:

#### On GitHub
In your web browser, navigate to GitHub and create a new **public** repository called `webdev-labs` (see tutorial above if you don't know how). Please make sure that you mark your repo "public." 

#### On your laptop
On your computer, create a folder called `webdev-labs` (create it somewhere that you can find it later). Next, download `lab01.zip` (below), unzip it, and move your `lab01` folder inside of your `webdev-labs` folder. 

<a class="nu-button" href="/winter2022/course-files/labs/lab01.zip">lab01.zip<i class="fas fa-download" aria-hidden="true"></i></a>

Your directory structure should look like this:

```bash
webdev-labs
└──lab01
    ├── exercise01
    └── exercise02
```

When you're done, open your command line (on your local computer), navigate to your `webdev-labs` directory, and issue the following commands (one at a time, in the order shown):

```shell
git init
git remote add origin ???         # replace ??? w/your repo address, using either in HTTPS or SSH protocol 
git add .
git status
git commit -am 'My first commit'  # any message you want
git branch -M main
git push origin main
```

{:.git}
| | Command | What it does | When to you use it |
|--|--|--|--|
| 1. | `git init` | Initializes a brand new git repo on your local machine. | **Just once** (when you're first setting up your repo) |
| 2. | `git remote add origin ???` | Connects the local repo you just created (on your computer) to your GitHub repo (in the cloud). Replace `???` with the address of the GitHub repo you just made, using either in HTTPS or SSH protocol. For more information, see <a href="https://docs.google.com/document/d/197WNBtEZ36qUztPAEp8uz_R6NdGvNbMjqVLmzBE2H_Y/edit#" target="_blank">this post</a> | **Just once** (when you're first setting up your repo) |
| 3. | `git add .` | Tells your local repo to watch all of the files in the folder. The dot (.) indicates that you want to add "all" your files. | **Often:** Anytime you create a new file and want to ensure that file is under version control. |
| 4. | `git status` | Shows you all of the files that have changed since you last committed. Also tells you which files are tracked and which are not. | **Often:** Anytime you want to check the status of your files. |
| 5. | `git commit -am 'My first commit'` | Committing is like "saving" a version of all of your tracked files (if you ever needed to later revert to a previous version of your code). | **Often:** Anytime you want to save a version of your work. |
| 6. | `git branch -M main"` | Creates a new branch called `main` and switches to it. A branch is a unique collection of code changes with a unique name). | **Occasionally:** Anytime you want to create a new named branch of your work. |
| 7. | `git push origin main` | "Pushing" copies all of your committed files to your GitHub repo (on the cloud). | **Often:** Anytime you want to save a version of your files to the cloud (or submit your homework)! |

To continue saving and tracking your changes using git / GitHub, repeat steps 3, 4, 5, and 7 as needed.

## 4. HTML & CSS Introduction
Once you've set up your git repository, try the following three HTML / CSS Exercises.

### 1. Box Model Practice
1. Open the `lab01/exercise01` folder.
1. Open `index.html` and uncomment the stylesheet link. 
    * Note that in order for a stylesheet to be applied to an HTML file, you have to explicitly link to it in the `<head></head>` section.
1. Change out the photo to another photo that you find on the Internet.
    * Hint: [image reference](/winter2022/html-reference/images/)
1. Make your card look like the one shown below by using various selectors:
    * Hint: [box model reference](/winter2022/css-reference/box-model/)

<img class="small" src="/winter2022/assets/images/labs/lab01/card.png" />

### 2. Layout Practice
Using any approach you want, please create the following screens for desktop, tablet, and mobile (pictured below). To do this:

1. Open the `lab01/exercise02` folder.
1. You will need to use media queries, which have been set up for you in the `exercise02/style.css` file.
    * Hint: [media queries reference](/winter2022/css-reference/media-queries/)
1. You will also need to uncomment the viewport meta tag in the `<head></head>` section of your HTML file.
    * Read more about the viewport meta tag on <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag" target="_blank">MDN</a>. In the context of mobile web design, this tag tells the browser to honor the dimensions of the device (versus assuming that the website was designed for a desktop screen).

#### Desktop

<img class="large" src="/winter2022/assets/images/labs/lab01/desktop.png" />

#### Tablet

<img class="medium" align="top" src="/winter2022/assets/images/labs/lab01/tablet1.png" />
<img class="medium" align="top" src="/winter2022/assets/images/labs/lab01/tablet2.png" />

#### Mobile

<img class="small" src="/winter2022/assets/images/labs/lab01/mobile.png" />


### 3. Jazz it Up
If you have time, please experiment with one or more of the following enhancements:
1. Try changing the font of the Card header (H2 tag) to use a Google Font.
    * Hint: Give <a href="https://www.freecodecamp.org/news/how-to-use-google-fonts-in-your-next-web-design-project-e1ad48f1adfa/" target="_blank">this tutorial</a> a shot (or find one you like better)
1. Change out one of the images for an embedded video (from YouTube of Vimeo).
    * Hint: [Embedding media](/winter2022/html-reference/media-tags/)
1. Try modifying your HTML and CSS files however you want. 

## 5. What to Turn In
Note: if you weren't able to complete all three of the exercises in the time alotted, that's fine. This was just a warm-up and you are being assessed on evidence of a good-faith effort. The most important thing is that you set up your GitHub

To submit Lab 1:

### 1. Push all of your files to GitHub
Please copy the latest version of your files to GitHub by issuing the following commands:

```shell
git add .    # in case you created any new files
git commit -am 'Committing all of my files'
git status   # to make sure that all of your files are being tracked
git push     # sends your files to GitHub
```

### 2. Paste a link to your repo on Canvas
Paste a link to your `webdev-labs` GitHub repository into the Canvas textbox for <a href="https://canvas.northwestern.edu/courses/157233/assignments/1007942" target="_blank">Lab 1</a>.

### 3. Answer the following question on Canvas
**Below the link to your repo**, in a brief reflective response (about 4-8 sentences total), please consider the following questions:
- Why, and to whom, is accessibility important?
- How might you make a site (or app) like Instagram more accessible?
