import React, { Component } from "react";
import axios from 'axios';
import "./Properties.css";


class Properties extends Component {
  constructor() {
    super();
    this.state = {
        favorite:false,
        properties:[]
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


deleteProperty = (id) => {
    axios.delete(`/api/property/${this.props.data.id}`).then(response => {
  this.setState({
    properties:response.data.reverse()
  })
})
  }




  render() {
   // console.log(this.updateFavoriteStatus())
    const { year, location, image, rate } = this.props.data;
    return (
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
        <button onClick={() => this.deleteProperty()}> Remove Property</button>
       
      </article>
    );
  }
}
export default Properties;
