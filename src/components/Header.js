import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      location:"",
      year:undefined
    };
    this.handleChange=this.handleChange.bind(this)
  }
  
  handleChange(e){
 this.setState({
   [e.target.name]:e.target.value
 })
  }

  render() {
    return (
      <div className="header">
        <div className="title">
          <h1>Zemi Zillow</h1>
        </div>
        <div className="Search">
         
        <input name="location" placeholder="Location" onChange={this.handleChange}/>
        <button onClick={()=>this.props.getProperties(this.state.location)} ><h3>Search </h3></button> 
               
       
        <input name="year" placeholder="Year" onChange={this.handleChange}/>

        <button onClick={()=>this.props.getProperties(this.state.year)}  ><h3>Search </h3></button> 
    
        </div> 
               
       
      </div>
    );
  }
}
export default Header;
