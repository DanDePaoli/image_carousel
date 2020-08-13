/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Images from './Images.jsx';
import Listing from './Listing.jsx';
import NightlyRate from './NightlyRate.jsx';
import Rating from './Rating.jsx';
import Carousel from './Carousel.jsx';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedListings: [],
      isLoading: true,
    };
    this.getListings = this.getListings.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  // TODO try to figure out why the db keeps automatically adding data to db
  // eslint-disable-next-line class-methods-use-this
  getListings() {
    axios.get('/suggestedListings')
      .then((response) => {
        const suggestedListings = response.data;
        this.setState({ suggestedListings, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (<div> . . .</div>);
    }
    return (
      <Wrapper>
        <Header />
        <Carousel carousel={this.state.suggestedListings} />
        {/*
        <Images image={this.state.suggestedListings[0]} />
        <Rating rating={this.state.suggestedListings[0]} />
        <Listing listing={this.state.suggestedListings[0]} />
        <Description description={this.state.suggestedListings[0]} />
        <NightlyRate rate={this.state.suggestedListings[0]} /> */}
      </Wrapper>
    );
  }
}

export default App;
