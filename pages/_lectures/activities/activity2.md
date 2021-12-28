
## Do the Activity: Implementing Good Composition using HTML/CSS
Practice using some of the CSS properties to to apply good composition principles (proximity, alignment, repetition, contrast) to the <a href="https://codepen.io/vanwars/pen/BEmzNB?editors=0100" target="_blank">sample Codepen</a>.  These principles can be mixed and matched in many ways, and instantiated using size, color, margins, padding, fonts, and so forth. Please complete the following tasks:

1. Select a header and a body copy font from <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>, and apply these fonts to your page. Here is some <a href="https://codepen.io/vanwars/pen/gOpryzO?editors=0100" target="_blank">sample code</a> of how this is done.
1. Instantiate the principles of **proximity** and **alignment** to organize your content. Make sure that you have an implicit grid and group like things together.
1. Use the principle of **contrast** to make more important content stand out.

{:.blockquote-no-margin}
> ### Tips 
> * Use whitespace liberally
> * Play around with different font weights (and choose a font that supports many weights).
> * Try not to use any borders. Let the whitespace shape the sections.
> * For now, don't use color. We'll do that next week!


### Review of some relevant CSS properties

#### Text Properties
Just a reminder of a few useful text properties for creating nice, readable web pages.

```css
.body-copy
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
    font-weight: bold;
    color: #999;            // font color
    text-align: left;       // left is default
    letter-spacing: 1.5em;  // space between letters
    line-height: 120%;      // space between lines
    word-spacing: 5px;      // Space between words (usually default is good)
    font-size: 1.1em;       // for responsive design, use em units
}
```

For custom fonts, use <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>. Once you've selected one, scroll down to see suggested parings. See the CSS reference for more information on [text & fonts](../css-reference/fonts/).

#### CSS Units
See the CSS reference for more information on [browser units](../css-reference/units/).

#### The Box Model
A few quick code reminders...

```css
.page-section {
    box-sizing: border-box;     // "border-box" does not count padding / border in size calculations
    border: dotted 1px #CCC;    
    padding: 10px;              // note: also padding-right, padding-left, padding-top, padding-bottom
    margin: 10px;               // note: also margin-right, margin-left, margin-top, margin-bottom
    width: 50vh;                // vh stands for viewport height, vw stands for viewport width
}
```

See the CSS reference for more information on the [box model](../css-reference/box-model/). 