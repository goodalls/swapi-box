import React, { Component } from 'react';
import Container from '../Container/Container';
import Scrolling from '../Scrolling/Scrolling';
import Control from '../Control/Control';
import Header from '../Header/Header';
import './App.css';
import api from '../../api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      crawl: {},
      favorites: [],
      errorStatus: '',
      isActive: ''
    };
  }

  async componentDidMount() {
    // this.fetchScrollingText();
  }

 

  async fetchScrollingText() {
    const random = Math.round(Math.random() * 7);
    const crawl = await api.fetchSwapi(`https://swapi.co/api/films/${random}`);
    const object = {
      title: crawl.title,
      episodeId: crawl.episode_id,
      openingCrawl: crawl.opening_crawl,
      releaseDate: crawl.release_date
    };
    this.setState({ crawl: object });
  }

  fetchPeopleCards = async event => {
    const { name } = event.target;
    if (name === 'people') {
      const people = await api.fetchSwapi('https://swapi.co/api/people/');
      const peopleCards = people.results.map(async person => {
        let homeworldFetch = await api.fetchSwapi(person.homeworld);
        let speciesFetch = await api.fetchSwapi(person.species);
        return {
          name: person.name,
          species: speciesFetch.name,
          homeworld: homeworldFetch.name,
          population: homeworldFetch.population
        };
      });
      const unresolvedPromises = await Promise.all(peopleCards);
      this.setState({
        people: unresolvedPromises,
        isActive: 'people'
      });
    }
    
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
          active={this.state.isActive}
        />
        <Container favorite={this.addToFavorites} people={this.state.people} />
        <Scrolling text={this.state.crawl} />
      </div>
    );
  }
}

export default App;
