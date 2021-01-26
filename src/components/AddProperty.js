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
        if(year && rate && location ){
            axios.post("/api/properties",body).then(response => this.props.getProperties()).catch(
                function (error) {
                  console.log('Show error notification!')
                  throw new Error(error)
                }
              )

        }else{
            alert("Please add details! ")
        }
        
        
    }
    render(){
       
        return(
            <div>
             
                {/* <div>
                <input name = "searchLocation" placeholder = 'Search by location'onChange={(e) => this.handleChange(e)}/>
                <button onClick={()=>this.props.getProperties(this.state.searchLocation)}><h3>Search </h3></button> 
                </div> */}

                


            <span className = 'Inputs'>
                <h3>Add Property</h3>
                <input name = "year" placeholder = 'year built'onChange={(e) => this.handleChange(e)}/>
                <input name = "rate" placeholder = 'Rate'onChange={(e) => this.handleChange(e)}/>
                <input name = "location" placeholder = 'location'onChange={(e) => this.handleChange(e)}/>
                <input name = "image" placeholder = 'image url'onChange={(e) => this.handleChange(e)}/>
                
                <button onClick={this.addProperty}><h4>Add</h4> </button>  

                 </span>
                
            </div>
        )
    }
}
export default AddProperty;
