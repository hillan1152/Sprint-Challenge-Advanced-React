- [ ] Why would you use class component over function components (removing hooks from the question)?
       
        Class components have their own state by using the constructor method which can help us render data and manipulate the DOM. It also allows us to use the React lifecycle, which gives us access to hooks. Also, it allows us to compartmentalize bits of code. 

- [ ] Name three lifecycle methods and their purposes.

        Render: this allows all of our JSX in our component to work.
        ComponentDidMount: Happens after our initial render. This is used to load data through axios/fetch calls.
        ComponentWillUnmount: is the cleanup phase where it can tidy up any of our component that will not be used in the future. 

- [ ] What is the purpose of a custom hook?

        It allows us to reuse stateful logic to prevent repetitive code. The return values can match up with our multiple variables and cause the custom hook to restructure every time. 

- [ ] Why is it important to test our apps?

        It’s important to test our apps because it helps our users don’t experience bugs, it gives us confidence in our code because it is specifically reviewed, and reminds you of the exact code you expect to be put through. 