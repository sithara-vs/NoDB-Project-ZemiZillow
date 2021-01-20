import React ,{Component} from 'react';
import './AddProperty.css'
import axios from 'axios'

class AddProperty extends Component{
    constructor(){
        super();
        this.state ={
            year:undefined,
            rate:undefined,
            location:"",
            image:"",
            favorite:false
        }
    }
    handleChange = (e)=> {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addProperty = () =>{
        const {year,rate,location,image}=this.state
        const body = {
            year,
            rate,
            location,
            image,
            favorite: this.state.favorite === 'on' ? true : false
        }
        axios.post("/api/properties",body).then(response => this.props.getProperties())
    }
    render(){
       
        return(
            <span className = 'Inputs'>
                <p>Add Property</p>
                <input name = "year" placeholder = 'year built'onChange={(e) => this.handleChange(e)}/>
                <input name = "rate" placeholder = 'Rate'onChange={(e) => this.handleChange(e)}/>
                <input name = "location" placeholder = 'location'onChange={(e) => this.handleChange(e)}/>
                <input name = "image" placeholder = 'image url'onChange={(e) => this.handleChange(e)}/>
                <p>Favorite</p>
                <input name="favorite" placeholder="favorite" onChange={(e) => this.handleChange(e)}  type="checkbox"/>
                
                <button onClick={this.addProperty}>Add </button>  

                <input name = "searchLocation" placeholder = 'Search by location'onChange={(e) => this.handleChange(e)}/>
                <button onClick={()=>this.props.getProperties(this.state.searchLocation)}>Search by Location </button> 
            </span>
        )
    }
}
export default AddProperty;
