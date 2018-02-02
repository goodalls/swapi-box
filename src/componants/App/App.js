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
      fetchedArray: [],
      crawl: {},
      favorites: [],
      errorStatus: '',
      isActive: ''
    };
  }

  componentDidMount() {
    this.scrollingText();
  }

  async scrollingText() {
    const crawl = await api.fetchScrollingText();
    this.setState({ crawl });
  }

  fetchCards = async event => {
    const { name } = event.target;
    let cards;
    if (name === 'people') {
      cards = await api.peopleCards();
    }
    if (name === 'planets') {
      cards = await api.planetCards();
    }
    if (name === 'vehicles') {
      cards = await api.vehicleCards();
    }
    const unresolvedPromises = await Promise.all(cards);
    this.setState({
      fetchedArray: unresolvedPromises,
      isActive: name
    });
  };

  addToFavorites = selected => {
    const findFavorite = this.state.fetchedArray.find(elem => {
      return selected.name === elem.name;
    });
    const favoriteTest = this.testForFavorite(findFavorite, selected);
    // const stringify = JSON.stringify(findFavorite)
    // const setItem = localStorage.setItem(selected.name, stringify);
    this.setState({ favorites: favoriteTest });
  };

  testForFavorite = (findFavorite, selected) => {
    const findExists = this.state.favorites.find(elem => {
      return selected.name === elem.name;
    });
    if (findExists) {
      return this.state.favorites.filter(elem => {
        return selected.name !== elem.name;
      });
    } else {
      return [...this.state.favorites, findFavorite];
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Control
          favorites={this.state.favorites.length}
          cards={this.fetchCards}
          active={this.state.isActive}
        />
        <Container
          favorite={this.addToFavorites}
          dataArray={this.state.fetchedArray}
        />
        <Scrolling text={this.state.crawl} />
      </div>
    );
  }
}

export default App;
