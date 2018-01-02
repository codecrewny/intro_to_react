# Intro to React


## Basics
* library purpose

## What is React?
* view layer
* Think Angular Directives/Vue.js



## create-react-app 
* create-react-app test 
* explain directory structure
* explain what create-react-app gives you (react-scripts) 
* explain hot reloading
* edit a component 
* get dev server and produciton build script for free


## Webpack + Babel
* basics


## ReactDOM
* what is it


# Virutal DOM Explained 
* 


## Components 
* class component 
* stateless functional component 


## Component Lifecycle
* Mounting vs Unmounting
* componentWillMount -- component is about to mount (have state and props but no DOM element)
- can make AJAX calls here
* componentDidMount -- fires after component is added to DOM (have access to the element)
 - good to clean up processes
* componentWillUnmount -- first right before the comoponent leaves the DOM 


## Component Update Methods
* componentWillReceiveProps -- new properties are coming in (parent state updated)
* shouldComponentUpdate -- allows us to have control if element should rerender
* componentDidUpdate -- runs after the component has rerendered


## JSX
* what is it -- shortuct for React.createElement
* what it compiles to (JSX playground)


## Styling Components 
* style objects
* className
* CSS Properties


## State  
* only available in class components 
* can be updated via "setState" method
* on setState, "render" method is executed


## Props 
* immutable


## Proptypes
* show examples (pull up docs)


## Events
* explain synthetic events 
* onKeyPress
* onCopy
* onCut
* onPaste 
* onFocus 
* onBlur 
* onClick 
* onDoubleClick


## Rendering Multiple Components 
* Array.prototype.map


## Flux
* basics


## Where to Go From Here 
* Learn Flux
* Learn Redux, MobX, etc.
* 


## What We Didn't Cover 
* Higher Order Components 
* State management libraries 
* Smart vs Dumb Components (Redux specific)
* All the ways to interact with children
* All of the React and ReactDOM methods 
* Routing
* Testing
* Refs
* React Fiber (will be a separate meetup)


## Resources
* create-react-app 
* React Docs


## Helpful Projects/Utilities
* Redux 
* MobX
* Reselect
* React Router 
* Styled Components 
* Immmutable
* Jest

