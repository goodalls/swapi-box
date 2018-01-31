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
      crawl: {},
      favorites: [],
      errorStatus: ''
    };
  }

  async componentDidMount() {
    this.fetchScrollingText();
  }

  async fetchSwapi(url) {
    try {
      const fetched = await fetch(url);
      const response = await fetched.json();
      return response;
    } catch (error) {
      this.setState({ errorStatus: 'fetchSwapi Error' });
    }
  }

  async fetchScrollingText() {
    const random = Math.round(Math.random() * 7);
    const crawl = await this.fetchSwapi(`https://swapi.co/api/films/${random}`);
    const object = { 
      title: crawl.title,
      episodeId: crawl.episode_id,
      openingCrawl: crawl.opening_crawl,
      releaseDate: crawl.release_date
    };
    this.setState({crawl: object});
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
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Control
          favorites={this.state.favorites.length}
          people={this.fetchPeopleCards}
        />
        <Container favorite={this.addToFavorites} />
        <Scrolling text={this.state.crawl}/>
      </div>
    );
  }
}

export default App;
