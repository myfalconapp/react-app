import React, { Component } from "react";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Content from "../content/content";
 
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <Content />
      </React.Fragment>        
    );
  }
}
 
export default Main;