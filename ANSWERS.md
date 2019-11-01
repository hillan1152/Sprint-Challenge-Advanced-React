- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components have a state management system already in place without the need for the 'useState' hook. It also allows full control of a components lifecycle within one parent component. With ComponentDidMount, data can be collected and used throughout the component and inserted into any other child component imported. 

- [ ] Name three lifecycle methods and their purposes.

    ComponentDidMount: Allows the user to access outside data and use it throughout the component(s).
    
    Render: Needs to be used in order for class components to work and display something onto the DOM. It can render more than once: once to initiate the component, then whenever data manipulation occurs. 

    ComponentWillMount: cleans up the component. 

- [ ] What is the purpose of a custom hook?

    Custom hooks are used to prevent repetitive code that may confuse other developers. Especially when there are mulitple 'useState' hooks involved in state management. Instead, one hook may be used for it. 

- [ ] Why is it important to test our apps?

    Much larger apps cannot be manually tested on a consistent basis. Tests are used to make sure developers are getting exact results. It helps pick up bugs and provide a 'confidence' test for our application.