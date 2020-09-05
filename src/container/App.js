import React, { Component } from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import Loader from '../components/Loader';
import './App.css';

/** @jsx jsx */
import { jsx } from '@emotion/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      results: [],
      favorites: false,
      loadMore: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true, results: [], favorites: false });
    const count = 10;
    const apiKey = "DEMO_KEY";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
    const response = await fetch(apiUrl);
    const resArray = await response.json();
    this.setState({ loading: false, results: resArray, favorites: false });
  }

  render() {
    return (
      <div className="App">
      {this.state.loading ?
        <Loader />  :
        <div className="container">
          <Navigation
            loadMore1={() => this.fetchData()}
            loadMore2={() => this.fetchData()}
          />
          <div className="images-container">
          {this.state.results.map(result => {
            return (
              <Card
                key={result.url}
                url={result.url}
                imgUrl={result.hdurl}
                explanation={result.explanation}
                title={result.title}
                date={result.date}
                copyright={result.copyright}
            />
            )
          })}
          </div>
        </div>
      }
      </div>
    );
  }
}

export default App;
