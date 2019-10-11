1. What problem does the context API help solve?

Context API gets around the problem of prop drilling. Instead of having to pass props down through each component, you can import them into the component that will be using them.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are kind of like kind of like directors to different "functions". When an event happens you can trigger an action and pass a type into it. Based on this type, the reducer will perform certain operations on the state. This state lives in the store. This store is the place where all of the state will live.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to state that is either in a context api or a store. This state does not live on any component but instead gets "called" into a component that uses it. Component state would be where you are defining, storing, or managing state inside of the component that it is being used in.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is a term that describes returning a function inside of a function. This allows us turn a normaly sycronous process into an asynchronous process. A good use of this is when you want a series of actions to run in a specific order. Without this, our action creators whould run when they are declared.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like using context API for now because it involves much less code than implimenting a complete react cycle. Its very simple to conceptualize and easy to implement with a few lines of code.
