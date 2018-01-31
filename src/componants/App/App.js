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
    // this.fetchScrollingText()
  }

  async fetchSwapi(url) {
    const fetched = await fetch(url);
    const response = await fetched.json();
    return response;
  }

  fetchScrollingText() {

  }

  fetchPeopleCards = async () => {
    const people = await this.fetchSwapi('https://swapi.co/api/people');
    const ship = await this.fetchSwapi(people.starships[0]);
    console.log(people); //scope
    console.log(ship);
    //setState
  };

  addToFavorites = () => {
    //get card object clicked on/selected 
    //add object to state
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Control
          favorites={this.state.favorites.length}
          people={this.fetchPeopleCards}
        />
        <Container favorite={this.addToFavorites}/>
        <Scrolling />
      </div>
    );
  }
}

export default App;
