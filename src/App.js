import React, { Component } from 'react';
import './App.css';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

//Creating a new Component
//With a prop and render
class WeatherDisplay extends Component {
  render() {
      return (
        <h1>Hello World {this.props.zip}</h1>
      );
  }
}

class HelloWorld extends Component {
  render () {
    return (
      <h1 style={{color: "blue"}}>Oh heck Hello World</h1>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <WeatherDisplay zip={PLACES[activePlace].zip}/>
        <HelloWorld />
        {PLACES.map((place, index) => (
           <button
             key={index}
             onClick={() => {
               this.setState({activePlace: index  });
               console.log('Clicked index '+index);
             }}
           >
               {place.name}
           </button>
         ))}
      </div>
    );
  }
}

export default App;
