---
layout: assignment-two-column
title: React
type: lab
abbreviation: Lab 9
draft: 0
num: 9
points: 5
due_date: 2022-03-14
---

<style>
    .two-column table th:first-child, 
    .two-column table td:first-child {
        min-width: auto !important;
        width: auto !important;
    }

    .two-column table th:nth-child(2), 
    .two-column table td:nth-child(2) {
        min-width: 200px; !important;
        width: auto !important;
    }
</style>

<a class="nu-button" href="/winter2022/course-files/labs/lab09.zip">lab09.zip<i class="fas fa-download" aria-hidden="true"></i></a>

> ## Update
> Sarah has created a video walkthrough if it's helpful!
> * <a href="https://northwestern.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2a57e77b-7baa-49b1-97bb-ae550144a73a" target="_blank">Lab 09 Video Walkthrough</a>

> ## Required Readings
> Before beginning this week's lab, please complete the <a href="https://reactjs.org/docs/hello-world.html" target="_blank">React Step-by-Step Guide</a>. It will take you and hour, but if you're new to React it's an hour well spent. It will be impossible for you to work effectively in React without understanding the core conventions and workflow, including:
> * <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank">JSX</a>
> * <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">Components and props</a>
> * <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank">State and lifecycle</a>
> * <a href="https://reactjs.org/docs/conditional-rendering.html" target="_blank">Conditional rendering</a>
> * <a href="https://reactjs.org/docs/handling-events.html" target="_blank">Handling events</a>
> * <a href="https://reactjs.org/docs/forms.html" target="_blank">Forms</a>
> * <a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank">Lifting up state</a>
> * <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">Thinking in React</a>

## Instructions
In this week's lab, you will be re-implementing a subset of your Photo App UI using React. The following 5 tasks are required in order for you to get full credit for the lab:

1. [Create a component hierarchy](#step1)
2. [Create stubs for each component](#step2)
3. [Implement the "Posts" and "Post" components](#step3)
4. [Implement the "LikeButton" component](#step4)
5. [Implement the "BookmarkButton" component](#step5)
6. [Fill out the accessibility questionnaire](#step6)


## Set Up
Download `lab09.zip`, unzip it, and open the folder in VSCode.

From your command line, navigate to the `lab09` directory and install the required packages with `npm install`. Then, run the server locally using `npm start`. 

> ### Tips
> * If you're running into any errors with fetch requests, you may have a few minor bugs in your REST API Endpoint. To verify (*Is the bug in my React code or in my API?*), try running your code using the course API by updating your React app's `proxy` url address in `package.json` to: <a href="https://photo-app-secured.herokuapp.com/" target="_blank">https://photo-app-secured.herokuapp.com/</a>.
> * If you're switching between the course API and your API to debug, note that you'll either have to clear out your `access_token_cookie` manually (by physically deleting it using the Application panel of your browswer's developer tools) or else use the same JWT_SECRET as the course application (set in your `.env` file), which is **MY_SECRET** (e.g., `JWT_SECRET=MY_SECRET`).
> * By default, your JWT token will time out every 15 minutes. To make your life easier, consider extending the life of your JWT token by adding the code below to your `app.py` file: 

```python
# Import timedelta at the top:
from datetime import timedelta

# Put this setting with all of your other JWT settings:
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=30)
```


### Deployment Notes
Although we are using Node to build and run our React app, we will ultimately be compiling our React app to HTML, CSS, and JavaScript so that the browser can download these files from our website and run them client-side. It's confusing, but the final output of our React App is client-side code that our browser will run.

Try building your React App by issuing `npm run build` on the command line. The resulting build folder will have "vanilla" HTML, CSS, and JavaScript that your browser understands.


## Your Tasks

{:#step1}
### Step 1: Component Hierarchy
As described in the <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">Thinking in React</a> piece, it is important to be able to look at a wireframe / mockup and consider what might constitute a component (keeping in mind that components can have child components).

Given (a) the starter `App.js` file we have given you and (b) what you already know about the "Photo App" app you made in Homework 4, think about how you might break up this web app into different components, where each one does a small job within the larger application:

```jsx
import React from 'react';

class App extends React.Component {  

    render () {
        return (
            <div>

            <nav className="main-nav">
                <h1>Photo App</h1>
                {/* Navigation Links */}
            </nav>

            <aside>
                <header>
                    Profile
                    {/* Navigation Links */}
                </header>
                <div className="suggestions">
                    <p className="suggestion-text">Suggestions for you</p>
                    <div>
                        Suggestions
                        {/* Suggestions */}
                    </div>
                </div>
            </aside>

            <main className="content">
                <header className="stories">
                    Stories
                    {/* Stories */}
                </header>
                <div id="posts">
                    Posts
                    {/* Posts */}
                </div>
            </main>

            </div>
        );
    }
}

export default App;

```

One potential strategy (though there could certainly be others) might involve splitting up your functionality into 5 top-level components, where each component has 1 job:

| 1. | **NavBar component** | Responsible for displaying the name of the logged in user, and perhaps a menu down the line. |
| 2. | **Profile component** | Responsible for displaying a profile of the logged in user. | 
| 3. | **Suggestions component** | Responsible for displaying suggested users to follow. | 
| 4. | **Stories component** | Responsible for displaying recent stories of people you're following. | 
| 5. | **Posts component** | Responsible for displaying the posts in your news feed. | 

Note that each of these top-level components may also have sub-components. For instance, `Posts` will probably be comprised of `Post` components, and each `Post` component will be comprised of, say, `Comments`, a `LikeButton`, a `BookmarkButton`, and potentially others. Here's one way of visualizing this heirarchy:

<img style="width:100%;margin:20px 0px;" src="/winter2022/assets/images/homework/hw06/react-diagram.svg" />


Think about what your `render()` function might look like for each component, and which of your components might issue fetch requests.

{:#step2}
### Step 2: Create stubs for each component
Once you've decided on your components, create a JavaScript file for each of the 5 components listed above -- `NavBar`, `Profile`, `Suggestions`, `Stories`, `Posts` -- in your `src` directory. In each JavaScript file, create a react component and a simple render function that renders only the JSX elements associated with it. So, for instance, the `Posts` component would render a `div` element (and eventually the list of posts):

```jsx
import React from 'react';

class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

     render () {
        if (!this.state.posts) {
            return (
                <div>Before posts fetched from server</div>  
            );
        }
        return (
            <div>
                <div>List of Posts goes here...</div>
                {/*
                this.state.posts.map(post => {
                    return <Post post={post} key={'post-' + post.id} />
                }
                */}
            </div>
        );     
    }
}

export default Posts;
```

When you're done creating all of your components, refactor your `App.js` so that the render function is using your React components (don't forget to import them all). Note that in the sample code shown below, the `NavBar` component is accepting two custom properties: "title" and "username." Please review <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">components and props</a> if you have any questions about how that works.

```jsx
import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';

class App extends React.Component {  

    render () {
        return (
            <div>
                <NavBar title="Photo App" username="test_user" />
                
                <aside>
                    <Profile />
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>

            </div>
        );
    }
}

export default App;
```

If you get stuck, please take a look at `hints/hint-1`.

{:#step3}
### Step 3. Implement the "Posts" and "Post" Components
Next, modify the logic of your `Posts` component to display all of the posts in the news feed. Recall that in the React model, your fetch logic and your rendering logic are decoupled. In other words, you'll probably want to:
  
* Fetch the posts from a working "Photo App" endpoint (we recommend running your HW5 Flask instance and accessing this endpoint: <a href="/api/posts">/api/posts</a>.
* Save the fetched posts in your state object.
* Render the posts (recall that each time you issue a call to the built-in `this.setState()` method, React automatically re-renders your component -- like magic).
* Because each post is complex, and will likely be refactored into several different subcomponents, go ahead and create a new `Post.js` component. It can be simple for now (just display the username, photo, and caption). Take a look at `hints/hint-2` if you get stuck.

#### Handling Authentication / Interaction with your REST API
Given that your Flask Server now requires your JWT token, we have created a helper function that will request and store an access token in your cookies before running your React app. See `src/index.js` for more information. 

In order to issue requests with the required credentials, you will need to pass the JWT token in the header of your fetch requests. We have created a convenience function in the `src/utils.js` file called `getHeaders()`. See `hints/hint-2` for an example of how to use this function.

On line 5 of `package.json`, is a "proxy server" instruction:

```json
{
  "name": "photo-app-react",
  "version": "0.1.0",
  "homepage": "./",
  "proxy": "http://127.0.0.1:5000",
  "private": true
  ...
}
```

This instruction tells React that when you issue a request to, say, `/api/posts`, your request will be directed to use `http://127.0.0.1:5000`. If you prefer to interact with a different REST API server, just switch out the proxy address in `package.json` and re-run your react server. Feel free to use the class server if your HW5 is still in flux: <a href="https://photo-app-secured.herokuapp.com" target="_blank">https://photo-app-secured.herokuapp.com</a>

{:#step4}
### Step 4. Implement the LikeButton Components
Recall from HW4 that when the user clicks the "like button," a request is issued to the `/api/posts/<post_id>/likes` endpoint to either create or delete a like entry in the `likes_posts` table. This update causes a change to the post's information (# of likes), which needs to be re-fetched from the server and re-displayed. In this exercise, you will create a brand new `LikeButton` component, whose job it will be to issue Like/Unlike requests to the server, and to draw the heart.

The `LikeButton` also needs to notify the `Post` component to redraw after it fetches data from the server. Therefore, you're going to have to figure out how to communicate between your components. When you click on the heart in your `LikeButton` component, how can notify your `Post` component to requery the server and re-render? To learn how this might be done, re-read the <a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank">lifting up state</a> page, which provides guidance. The strategy discussed involves:

1. Creating a method in the parent (`Post`) component to requery for the Post and set the Post component's state.
1. Making this method is available to the `LikeButton` component (by passing it in as a property).
1. Ensuring that this method is called by the `LikeButton` component after the like/unlike functionality completes.


{:#step5}
### Step 5. Implement the BookmarkButton Component
Following the same strategy you used in Step 4, create a `BookmarkButton` component. This component's job is to draw the bookmark icon, issue bookmark/unbookmark requests to the `/api/bookmarks` endpoint, and to notify the `Post` component that it needs to re-fetch and redraw the post.

{:#step6}
### Step 6. Fill Out the Accessibility Questionnaire
#### A. Accessibility Questionnaire 
This quarter, we assigned a few accessibility activities -- to encourage you to think about how people might interact with your applications without mouse or using a screen reader. To reflect on this process, please fill out the <a href="https://t.ly/SK2i" target="_blank">Accessibility Questionnaire</a>.

#### B. Accessibility Research Study
We also wanted to invite you to participate in a research study -- to examine and reflect on how to better teach students about accessibility within the software development process. Please fill out this <a href="https://t.ly/x5M7" target="_blank">Consent to participate in research form</a> to let us know whether or not you are willing participate in this study. Participation is **totally optional.** 

## What to Turn In
When you're done, zip your `lab09` directory and submit your zip file to Canvas. Please **DO NOT** include your `node_modules` in the zip file (which will add hundreds of megabytes to your zip file).

> ### Appreciations
> And while you're at it, please take a moment to thank  / write a note to a peer mentor who helped you in some way (even if you just take 30 seconds to do it). Peer mentors are students too, and most of them do waaaay more than what is officially asked of them in order to support you. This form is completely anonymous.
> 
> <a href="https://forms.gle/39oWerrVYaasgNd28" target="_blank">https://forms.gle/39oWerrVYaasgNd28</a>
