---
layout: assignment-two-column
title: React
type: lab
abbreviation: Lab 8
draft: 1
num: 8
points: 10
due_date: 2022-02-25
---
<a class="nu-button" href="/winter2022/course-files/labs/lab08.zip">lab08.zip<i class="fas fa-download" aria-hidden="true"></i></a>

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

<!-- > * Redux: https://www.smashingmagazine.com/2018/07/redux-designers-guide/ -->

## Instructions
In this week's lab, you will be re-implementing a subset of your Doctor Who UI using React. The following 5 tasks are required in order for you to get full credit for the lab:
1. [Create a component hierarchy](#step1)
2. [Create stubs for each component](#step2)
3. [Implement the doctors list](#step3)
4. [Implement the doctor "detail view"](#step4)
5. [Implement the companions list](#step5)

We'll just be grading you on #3, #4, and #5.

> ### Update: Video Walkthroughs
> Here are some video walkthroughs if you want to see me solve this challenge. They're by no means professional quality, but hopefully they are of some value to you all!
> * <a href="https://northwestern.zoom.us/rec/share/zHFrGiAPu_I4x9z_4X7HNNi47sYAb4Qx3sDkbf6A8kaccQEppqBDUKPBwFzAmyyq.HgcwKGLll7i5I5X7" target="_blank">Part 1 (Wednesday's Lecture)</a>
> * <a href="https://northwestern.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9a714ad3-2ffb-423c-b24a-ad2f0013346a" target="_blank">Part 2: Selecting a Doctor</a>
> * <a href="https://northwestern.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4c1025c1-b17b-4793-94ca-ad2f0018d535" target="_blank">Part 3: Displaying a Doctor</a>
> * <a href="https://northwestern.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4223e29c-e642-4158-9295-ad2f001e2fd2" target="_blank">Part 4: Displaying the Companions</a>

## Required Tasks
Download `lab08.zip`, unzip it, and open the folder in VSCode.

From your command line, navigate to the `lab08` directory and install the required packages with `npm install` and run the server locally using `npm start`. 

> **Note:** Although we are using Node to build and run our React app, we will ultimately be compiling our React app to HTML, CSS, and JavaScript so that the browser can download these files from our website and run them client-side. It's confusing, but the final output of our React App is client-side code that our browser will run.

{:#step1}
### Step 1: Component Hierarchy
As described in the <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">Thinking in React</a> piece, it is important to be able to look at a wireframe / mockup and consider what might constitute a component (keeping in mind that components can have child components).

Given (a) the starter `App.js` file we have given you and (b) what you already know about the "Doctor Who" app you made in Homework 3, think about how you might break up this web app into different components, where each one does a small job within the larger application:

```jsx
import React from 'react';

class App extends React.Component {  

    render () {
        return (
            <div className="container">

                <header className="header">
                    <h1>Doctor Who Editor</h1>
                </header>

                <aside className="aside">
                    List of doctors goes here.
                </aside>

                <main className="main">

                    <div className="doctor">
                        <h2>Current Doctor</h2>
                        <p>Current doctor goes here</p>
                    </div>

                    <section className="companions">
                        <h2>Companions</h2>
                        <p>Companions go here</p>
                    </section>

                </main>

            </div>
        );
    }
}

export default App;
```

One potential strategy (though there could certainly be others) might involve splitting up your functionality into 4 components, where each component has 1 job:

| **Header component** | Responsible for displaying the header (and perhaps a menu down the line). |
| **DoctorList component** | Responsible for displaying a list of doctors (that a user can click on to get more detail). | 
| **DoctorDetail component** | Responsible for displaying the selected doctor. | 
| **CompanionList component** | Responsible for displaying the companions that travel with the selected doctor. | 

Think about what your render() function might look like for each component, and which of your components might issue fetch requests.

{:#step2}
### Step 2: Create stubs for each component
Once you've decided on your components, create a JavaScript file for each component in your `src` directory. In each JavaScript file, create a react component, and a simple render function that renders only the JSX elements associated with it. So, for instance, the DoctorList would render the `aside` element (and eventually the list of doctors):

```jsx
import React from 'react';

class DoctorList extends React.Component {
  
    render () {
        return (
            <aside className="aside">
                List of doctors goes here.
            </aside>
        );
    }
}

export default DoctorList;
```

When you're done creating all of your components, refactor your `App.js` so that the render function is using your React components (don't forget to import them all). Note that in the sample code shown below, the `Header` component is accepting a custom property called "title." Please review <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">components and props</a> if you have any questions about how that works.

```jsx
render () {
    return (
        <div className="container">
            <Header title="Doctor Who Editor" />
            <DoctorList />

            <main className="main">
                <DoctorDetail />
                <CompanionList />
            </main>  

        </div>
    );
}
```

If you get stuck, please take a look at `hints/hint-1`.

{:#step3}
### Step 3. Implement the "Doctor List" Functionality
Next, modify the logic of your `DoctorList` component to display all of the doctors in the list. Recall that in the React model, your fetch logic and your rendering logic are decoupled. In other words, you'll probably want to:
  
* Fetch the doctors from a working "Doctor Who" endpoint (we recommend running your HW3 node instance and accessing this endpoint: <a href="http://localhost:8081/doctors">http://localhost:8081/doctors</a>.
* Save the doctors in your state object.
* Render the doctors (recall that each time you issue a call to the built-in `this.setState()` method, React automatically re-renders your component -- like magic).

{:#step4}
### Step 4. Implement the "Doctor Detail" Functionality
When the user clicks on one of the doctors, display a panel showing the doctor’s name, picture, and seasons. To do this, you're going to have to figure out how to communicate between your components. When you click on a doctor in your `DoctorList` component, how can notify your `DoctorDetail` component to render? To learn how this might be done, re-read the <a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank">lifting up state</a> page, which provides guidance. The strategy discussed involves:

1. Creating an event handler in the component that is a parent of both the `DoctorDetail` and the `DoctorList` component (the `App` component)
1. Making the event handler available to the `DoctorList` component by passing it in as a property.
1. Assigning the event handler to the click event of each doctor in the list.

When a doctor in the list is clicked, the event handler is fired. And, because the event handler belongs to the `App` component, it will be able to pass data (the selected doctor) to the `DoctorDetail` component.

{:#step5}
### Step 5. Implement the "Companions List" Functionality
When the user clicks on one of the doctors, also display a panel showing all of the companions that traveled with that selected doctor. See if you can figure out how to do this.

## Recommended Tasks
While not required, we strongly encourage you to also try implementing the "create," "update," and "delete" doctor functionality. By doing this part of the lab, you will be able to experience some of the challenges of coordinating state across your components (which is not as easy to appreciate when building smaller interfaces). It will also provide the motivation behind why people who build complex SPAs (single page applications) use tools like <a href="https://www.smashingmagazine.com/2018/07/redux-designers-guide/" target="_blank">Redux</a> to manage state across an application.

Recommended additional tasks to complete:
1. Implement the create doctor
2. Implement the edit doctor
3. Implement the delete doctor

When implementing the create / edit / delete functionality, please draw heavily on the HTML template literals you made in Homework 3. Please also refer back to the <a href="https://reactjs.org/docs/forms.html" target="_blank">forms</a> tutorial, which provides a suggestion around how to use the component's state to manage form updates.

## What to Turn In
When you're done, zip your `src` and `public` directories and submit your zip file to Canvas.
