import React from "react"
import ReactDOM  from "react-dom"; // this is to hook our application to respective div eg id = "root"
import App from "./App" // main component

// first parameter is our main component and second is element we want to hook onto
ReactDOM.render(<App />, document.getElementById("root")) 

// here the App component is linked to the root DOM of index.js file