import React, { Component } from "react";
import "./Header.css";
import Logo from './Logo'
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
      <header className="header">
        
        <span className="title">
          <Logo/>
          <div className="Zillow">
          <h1>Zemi Zillow</h1>
          </div>
        </span>
        <div className="Search">
         
        <input name="location" placeholder="Location" onChange={this.handleChange}/>
        <button onClick={()=>this.props.getProperties(this.state.location,"location")} ><h3>Search </h3></button> 
               
       
        <input name="year" placeholder="Year" onChange={this.handleChange}/>

        <button onClick={()=>this.props.getProperties(this.state.year,"year")}  ><h3>Search </h3></button> 
        
        
       


    
        </div> 
           
       
      </header>
    );
  }
}
export default Header;
