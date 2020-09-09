import React, { Component } from 'react';
import Card from '../components/Card';
import NavigationContainer from '../components/NavigationContainer';
import Navigation from '../components/Navigation';
import Clickable from '../components/Clickable';
import Loader from '../components/Loader';
import Saved from '../components/Saved';
import CardList from '../components/CardList';
import './App.css';
import API_KEY from '../secret';


/** @jsx jsx */
import { jsx } from '@emotion/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 'results',
      resultsArr: [],
      favorites: {},
      isActive: false,
    };
  }

  componentDidMount() {
    try {
      this.fetchData();
    } catch (err) {

    }
  }

  async fetchData() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    this.setState({ loading: true, page: 'results', resultsArr: []
    });
    const count = 10;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`;
    const response = await fetch(apiUrl);
    const resArray = await response.json();
    this.setState({ loading: false, page: 'results', resultsArr: resArray });
  }

  handleAddToFavoritesClick(i) {
    let newFavorites = {...this.state.favorites}
    this.state.resultsArr.forEach(item => {
      if (item.url.includes(i) && !newFavorites[i]) {
        newFavorites[i] = item;
        // Render Added to Favorites timed popup message
        this.setState({ favorites: newFavorites, isActive: true });
        setTimeout(() => {
          this.setState({ isActive: false });
        }, 2000);
        // Set item to localStorage
        localStorage.setItem('nasaFavorites', JSON.stringify(newFavorites));
      }
    });
  }

  handleRemoveFromFavoritesClick(i) {
    let newFavorites = {...this.state.favorites};
    if (newFavorites[i]) {
      delete newFavorites[i];
      this.setState({ favorites: newFavorites });
      // Remove item from localStorage
      localStorage.setItem('nasaFavorites', JSON.stringify(newFavorites));
    }

  }

  renderCard(i) {
    return (
      <Card
        key={i.url}
        url={i.url}
        imgUrl={i.hdurl}
        explanation={i.explanation}
        title={i.title}
        date={i.date}
        copyright={i.copyright === undefined ? '' : i.copyright}
        addToFavorites={() => {
          this.state.page === 'results' ?
            this.handleAddToFavoritesClick(i.url) :
            this.handleRemoveFromFavoritesClick(i.url);
        }}
        favoritesClick={this.state.page === 'results' ? 'Add to Favorites' : 'Remove Favorite'}
      />
    );
  }

  renderFavorites() {
    let newFavorites;
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Get favorites from localStorage
    if (localStorage.getItem('nasaFavorites')) {
      newFavorites = JSON.parse(localStorage.getItem('nasaFavorites'));
    }
    this.setState({ page: 'favorites', favorites: newFavorites });
  }

  render() {
    return (
      <div className="App">
      {this.state.loading ?
        <Loader />  :
        <div className="container">
          <NavigationContainer>
            {this.state.page === 'results' ?
              <Navigation name="resultsNav">
                <Clickable click={() => this.renderFavorites()}>Favorites</Clickable>
                <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                <Clickable click={() => this.fetchData()}>Load More</Clickable>
              </Navigation> :
              <Navigation name="favoritesNav">
                  <Clickable click={() => this.fetchData()}>Load More NASA Images</Clickable>
              </Navigation>
            }
          </NavigationContainer>
          <CardList>
            {this.state.page === 'results' ?
              this.state.resultsArr.map(result => this.renderCard(result)) :
              Object.values(this.state.favorites).map(result => this.renderCard(result))
            }
          </CardList>
        </div>
      }
      {this.state.isActive ? <Saved/> : null}
      </div>
    );
  }
}

export default App;
