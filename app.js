//In React this function will create the element (React is write a wrapper function to create Element on web browser)
const heading = React.createElement("h1", { id: "heading" }, "Hello Word from React");

//{} - is object where we can pass attribute like id:heading

//if you enkect anything on browser they used REACT DOM libary  and render the element on React 



const divElements = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "heading" }, "Hi My name is kisan"),React.createElement("h2", { id: "h2e" }, "Hi My name is kp"),])

)

const root = ReactDOM.createRoot(document.getElementById("root"));

//Root will create the method to 

root.render(divElements) //  it converts object into the HTML;