import React,{Component}from 'react'
import Properties from './components/Properties'
import Header from './components/Header'
import AddProperty from './components/AddProperty'
import './App.css'
import axios from 'axios'
//import { response } from 'express'
class App extends Component {
  constructor(){
    super()
    this.state = {
    properties:[]
    }
  }
componentDidMount(){
  this.getProperties()
}

  getProperties = (query) => {
    if(query){
     // axios.get(`/api/properties?${location}=${query}|| ${year}=${year}`).then(response => {
      axios.get(`/api/properties?location=${query}`).then(response => {
        this.setState({
          properties:response.data
        })
      })
    }else
    axios.get('/api/properties/').then(response => {
  this.setState({
    properties:response.data.reverse()
  })
})
  }


deleteProperty = (id) => {
  axios.delete(`/api/property/${id}`).then(response => {
    console.log(response)
this.setState({
  properties:response.data
})
})
}

  
  render(){
    let homes = this.state.properties.map(element => <Properties data = {element} deleteProperty = {this.deleteProperty}/>)
    console.log(this.state)
  return (
    <div className = "Style">
      <section className = "Header">
      <Header />
      </section>
      <section>
        <AddProperty getProperties={this.getProperties} />
        
      </section>
      <section className = 'homes'> {homes}</section>
      
    </div>
  )
}
}

export default App
