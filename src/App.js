import React,{Component}from 'react'
import Properties from './components/Properties'
import Header from './components/Header'
import AddProperty from './components/AddProperty'
import Footer from './components/Footer'
import './App.css'
import axios from 'axios'
//import { response } from 'express'
class App extends Component {
  constructor(){
    super()
    this.state = {
    properties:[],
    componentToDisplay:""
    }
    this.setComponentToDisplay=this.setComponentToDisplay.bind(this)
  }
  setComponentToDisplay(component){
this.setState({
  componentToDisplay:component
})
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
//   getProperties = (query) => {
//     if(query){
//      // axios.get(`/api/properties?${location}=${query}|| ${year}=${year}`).then(response => {
//       axios.get(`/api/properties?year=${query}`).then(response => {
//         this.setState({
//           properties:response.data
//         })
//       })
//     }else
//     axios.get('/api/properties/').then(response => {
//   this.setState({
//     properties:response.data.reverse()
//   })
// })
//   }


deleteProperty = (id) => {
  axios.delete(`/api/property/${id}`).then(response => {
    console.log(response)
this.setState({
  properties:response.data
})
})
}

  
  render(){

  //  let displayComponent = this.state.componentToDisplay === "add" ? <AddProperty/>

let homes = this.state.properties.map(element => <Properties  data = {element} deleteProperty = {this.deleteProperty}/>)
    console.log(this.state)
    
  return (
    <div className = "Style">
      <header className = "Header">
      <Header key="header" getProperties={this.getProperties}/>
      </header>
      <section>

        {/* {displayComponent} */}
        <AddProperty getProperties={this.getProperties}  />
        
      </section>
      <article className = 'homes'> {homes}</article>
<footer>
      <Footer/>
      </footer>  
    </div>
  )
}
}

export default App
