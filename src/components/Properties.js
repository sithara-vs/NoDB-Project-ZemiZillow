import React, { Component } from "react";
import axios from 'axios';
import "./Properties.css";


class Properties extends Component {
  constructor() {
    super();
    this.state = {
        favorite:false,
      
    }
    };
  
componentDidMount() {
    this.setState({
        favorite: this.props.data.favorite
    })
}
updateFavoriteStatus = (bool)=> {
    const body = {
        favorite :bool
    }
    axios.put(`/api/property/${this.props.data.id}`, body).then( response => {
        this.setState({
            favorite: response.data.favorite
        })
    }).catch((error) => {
    
      if (error.response) {
         
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
      } else if (error.request) {
          
         
          console.log(error.request);
      } else {
      
          console.log('Error', error.message);
      }
      console.log(error.config);
  });
}
handleChange = (e)=> {
  this.setState({
      [e.target.name]:e.target.value
  })
}





  render() {
   // console.log(this.updateFavoriteStatus())
    const { year, location, image, rate } = this.props.data;
    return (
      
      <div className="Display">
        
         
         <article className="properties">
        <h4>Year Built : {year}</h4>
        <h4>Location : {location}</h4>
        <h4>Rate : {rate}</h4>
        <img src={image} alt={year} />
        
        <div className = "Check">
        {this.state.favorite ? (
                    <button onClick={() => this.updateFavoriteStatus(false)}><h4>Unfavorite</h4></button>
                ) : (
                    <button onClick={() => this.updateFavoriteStatus(true)}><h4>Favorite</h4></button>
                )}
                 <button onClick={() => this.props.deleteProperty(this.props.data.id)}> <h4>Remove Property</h4></button>
        {/* <button> Edit Rate </button> */}
        </div>
        <br>
        </br>
        {/* <button onClick={() => this.props.deleteProperty(this.props.data.id)}> <h4>Remove Property</h4></button> */}
       
      </article>
      </div>
    );
  }
}
export default Properties;
