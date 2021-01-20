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
    })
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
      
      <div>
        
         
         <article className="properties">
        <h4>{year}</h4>
        <h4>{location}</h4>
        <h4>{rate}</h4>
        <img src={image} alt={year} />
        
        <div className = "Check">
        {this.state.favorite ? (
                    <button onClick={() => this.updateFavoriteStatus(false)}>Unfavorite</button>
                ) : (
                    <button onClick={() => this.updateFavoriteStatus(true)}>Favorite</button>
                )}
        <button> Edit Rate </button>
        </div>
        <br>
        </br>
        <button onClick={() => this.props.deleteProperty(this.props.data.id)}> Remove Property</button>
       
      </article>
      </div>
    );
  }
}
export default Properties;
