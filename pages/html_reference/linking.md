---
layout: two-column-resources
title: Hyperlinks
nav_order: 3
parent: HTML Resources
permalink: /html-reference/links/
linkedin_learning: 1
---

> **Overview Resources**
>
> * LinkedIn Learning video: [Exploring the anchor element](https://www.linkedin.com/learning/html-essential-training/exploring-the-anchor-element?u=75814418) (2:58)
> * [Absolute versus relative paths](http://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/)

## 1. Navigating Relative File Paths
Given the image below, the following relative paths are from the perspective of the index.html file.

![](/winter2022/assets/images/file_paths.png)
```shell
../test.html # go up one directory and access the test.html file
../files/blah.html # go up one directory and then into the files directory, and access the blah.html file
../images/dogs/a1.png # go up one directory, then into the images directory, then into the dogs directory, and access the a1.png image
styles/my_style.css # go into the styles directory and access the my_style.css file
styles/dark/new.css # go into the styles directory, then into the dark directory, and access the new.css file
```
<a href="/winter2022/assets/paths.zip">Download the sample files</a> to experiment with relative file paths (and view the home/index.html).

## 2. Linking to pages within your own site
* LinkedIn Learning Video: [Linking to pages within your own site](https://www.linkedin.com/learning/html-essential-training/linking-to-pages-within-your-site?u=75814418) (10:21)

## 3. Linking to external pages
<iframe src="//codepen.io/vanwars/embed/mERgZY/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>

> **Additional Resources**
* LinkedIn Learning Video: [Linking to external pages](https://www.linkedin.com/learning/html-essential-training/linking-to-external-pages?u=75814418) (4:18)


## 4. Linking to page regions
<iframe src="//codepen.io/vanwars/embed/rLjbXG/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>


> **Additional Resources**
* LinkedIn Learning Video: [Linking to page regions](https://www.linkedin.com/learning/html-essential-training/linking-to-page-regions?u=75814418) (9:46)


## 5. Organizing links into a menu
The links in this example don't link to anything (yet), but is meant to show that div and span tags can be useful for grouping links into conceptual widgets (like menus)
<iframe src="//codepen.io/vanwars/embed/YMWqoO/?height=300&theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>