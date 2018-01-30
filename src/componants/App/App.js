import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(people => {
        this.fetchSwapi(people.species[0])
          .then(species => {
            console.log(species);
            console.log(people);
            //setState
          })
          .catch(error => console.log('bummer'));
      });
  }

  fetchSwapi(url) {
    return fetch(url).then(response => response.json());
  }

  render() {
    return <div className="App">testing 1, 2, 3</div>;
  }
}

export default App;
