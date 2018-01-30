import React, { Component } from 'react';
import Container from '../Container/Container';
import Scrolling from '../Scrolling/Scrolling';
import Control from '../Control/Control';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.fetchSwapi('https://swapi.co/api/people/1')
    //   .then(people => {
    //     this.fetchSwapi(people.species[0]).then(species => {
    //       console.log(species);
    //       console.log(people);//scope
    //       //setState
    //     });
    //   })
    //   .catch(error => console.log('bummer'));
  }

  fetchSwapi(url) {
    return fetch(url).then(response => response.json());
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
