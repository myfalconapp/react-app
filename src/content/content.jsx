import React, { Component } from "react";
import { Route, HashRouter, Redirect } from "react-router-dom";
import Login from "../login/login";
import Register from "../register/register";
import Home from "../home/home";

class Content extends Component{
    styles = {
        width:"80%",
        float:"right"
    }
    render(){
        return(
            <HashRouter>
                <div className="content">
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={Home}/>
                    <Redirect exact from="/" to="home" />
                </div>
            </HashRouter>
        )
    }
}

export default Content;