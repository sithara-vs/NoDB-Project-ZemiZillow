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

  getProperties = () => {
    axios.get('/api/properties/').then(response => {
  this.setState({
    properties:response.data.reverse()
  })
})
  }

  
  render(){
    let homes = this.state.properties.map(element => <Properties data = {element}/>)
    console.log(this.state)
  return (
    <div>
      <section className = "Header">
      <Header />
      </section>
      <section>
        <AddProperty getProperties={this.getProperties}/>
        
      </section>
      <section> {homes}</section>
      
    </div>
  )
}
}

export default App
