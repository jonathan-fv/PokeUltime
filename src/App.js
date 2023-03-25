import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


const App = () =>{
    return(
        <Router>
            <header>
                <NavBar/>
            </header>
        </Router>
    )
}

export default App;