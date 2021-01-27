import React, { Component } from "react";
import Properties from "./components/Properties";
import Header from "./components/Header";
import AddProperty from "./components/AddProperty";
import Footer from "./components/Footer";
import "./App.css";
import axios from "axios";
//import { response } from 'express'
class App extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      showHomes: true,
    };
    this.toggleShowHomes = this.toggleShowHomes.bind(this);
  }
  toggleShowHomes() {
    console.log("hit toggleShowHomes");
    this.setState({
      showHomes: !this.state.showHomes,
    });
    console.log("hit the end of toggleShowHomes", this.state);
  }

  componentDidMount() {
    this.getProperties();
  }

  getProperties = (query, searchType) => {
    if (searchType === "location") {
      // axios.get(`/api/properties?${location}=${query}|| ${year}=${year}`).then(response => {
      axios.get(`/api/properties?location=${query}`).then((response) => {
        this.setState({
          properties: response.data,
        });
      });
    } else if (searchType === "year") {
      axios.get(`/api/properties?year=${query}`).then((response) => {
        this.setState({
          properties: response.data,
        });
      });
    } else {
      axios
        .get("/api/properties/")
        .then((response) => {
          this.setState({
            properties: response.data.reverse(),
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  };
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
    axios
      .delete(`/api/property/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          properties: response.data,
        });
      })
      .catch((error) => {
        // Error
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  render() {
    let homes = this.state.properties.map((element) => (
      <Properties data={element} deleteProperty={this.deleteProperty} />
    ));
    // console.log(this.state);
    let displayComponent =
      this.state.showHomes === true ? (
        <article className="homes"> {homes}</article>
      ) : (
        <AddProperty getProperties={this.getProperties} />
      );

    return (
      <div className="Style">
        <header className="Header">
          <Header key="header" getProperties={this.getProperties} />
        </header>
        <section>
          <button onClick={() => this.toggleShowHomes()}>
            {this.state.showHomes === true ? (
              <h3>Add Property</h3>
            ) : (
              <h3>Show Homes</h3>
            )}
          </button>
          <br></br>
          <br></br>
          <br></br>
        </section>
        {displayComponent}

        {/* <AddProperty key="addProp" getProperties={this.getProperties} setComponentToDisplay={this.setComponentToDisplay}/> */}

        {/* </section> */}

        {/* <article className="homes"> {homes}</article> */}
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
