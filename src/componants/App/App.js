import React, { Component } from 'react';
import Container from '../Container/Container';
import Scrolling from '../Scrolling/Scrolling';
import Control from '../Control/Control';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchSwapi('https://swapi.co/api/people/1')
      .then(people => {
        console.log(people); //scope
        //setState
      })
      .catch(error => console.log('bummer'));
  }

  async fetchSwapi(url) {
    const fetched = await fetch(url);
    const response = await fetched.json();
    return response;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Control />
        <Container />
        <Scrolling />
      </div>
    );
  }
}

export default App;
