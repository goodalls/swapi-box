import React, { Component } from 'react';
import Container from '../Container/Container';
import Scrolling from '../Scrolling/Scrolling';
import Control from '../Control/Control';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  async componentDidMount() {
    const people1 = await this.fetchSwapi('https://swapi.co/api/people/1');
    const ship = await this.fetchSwapi(people1.starships[0]);
    console.log(people1); //scope
    console.log(ship);
    //setState
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
        <Control favorites={this.state.favorites.length}/>
        <Container />
        <Scrolling />
      </div>
    );
  }
}

export default App;
