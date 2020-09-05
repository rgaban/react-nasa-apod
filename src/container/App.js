import React, { Component } from 'react';
import Card from '../components/Card';
import NavigationContainer from '../components/NavigationContainer';
import Navigation from '../components/Navigation';
import Clickable from '../components/Clickable';
import Loader from '../components/Loader';
import Saved from '../components/Saved';
import './App.css';

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
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    this.setState({ loading: true, page: 'results', resultsArr: []
    });
    const count = 10;
    const apiKey = "DEMO_KEY";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
    const response = await fetch(apiUrl);
    const resArray = await response.json();
    this.setState({ loading: false, page: 'results', resultsArr: resArray });
  }

  handleFavoritesClick(i) {
    let newFavorites = {...this.state.favorites}
    this.state.resultsArr.forEach(item => {
      if (item.url.includes(i) && !newFavorites[i]) {
        newFavorites[i] = item;
      }
      this.setState({ favorites: newFavorites });
    });
  }

  removeFavorite(i) {
    let newFavorites = {...this.state.favorites};
    if (newFavorites[i]) {
      delete this.state.favorites[i];
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
        addToFavorites={() => this.handleFavoritesClick(i.url)}
      />
    );
  }

  renderFavorites() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    let newFavorites = {...this.state.favorites}
    this.setState({ page: 'favorites', favorites: newFavorites });
  }

  render() {
    return (
      <div className="App">
      {this.state.loading ?
        <Loader />  :
        <div className="container">
          <NavigationContainer>
            <Navigation name="resultsNav">
              <Clickable click={() => this.renderFavorites()}>Favorites</Clickable>
              <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
              <Clickable click={() => this.fetchData()}>Load More</Clickable>
            </Navigation>
            <Navigation name="favoritesNav">
                <Clickable click={() => this.fetchData()}>Load More NASA Images</Clickable>
            </Navigation>
          </NavigationContainer>
          <div className="images-container">
          {this.state.page === 'results' ?
            this.state.resultsArr.map(result => this.renderCard(result)) :
            Object.values(this.state.favorites).map(result => this.renderCard(result))
          }
          </div>
        </div>
      }
      <Saved hidden/>
      </div>
    );
  }
}

export default App;
