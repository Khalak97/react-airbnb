import React from 'react';

import './SearchPage.css';

import SearchResult from './SearchResult';

import { Button } from '@material-ui/core';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>50 stays * 26 august to 30 august * 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>

      <SearchResult
        img="https://a0.muscache.com/im/pictures/2091e5b8-062c-4f17-9794-3defca2e2fe3.jpg"
        location="Private room in Kiev"
        title="Perfect room in center of Kiev"
        description="2 guests - 1 bedroom - 1 bed - Wifi - Kitchen - Free parking"
        star={4.7}
        price="$30 / night"
        total="$127 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/2091e5b8-062c-4f17-9794-3defca2e2fe3.jpg"
        location="Private room in Kiev"
        title="Perfect room in center of Kiev"
        description="2 guests - 1 bedroom - 1 bed - Wifi - Kitchen - Free parking"
        star={4.7}
        price="$30 / night"
        total="$127 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/2091e5b8-062c-4f17-9794-3defca2e2fe3.jpg"
        location="Private room in Kiev"
        title="Perfect room in center of Kiev"
        description="2 guests - 1 bedroom - 1 bed - Wifi - Kitchen - Free parking"
        star={4.7}
        price="$30 / night"
        total="$127 total"
      />
    </div>
  );
}

export default SearchPage;
