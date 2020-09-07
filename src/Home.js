import React from 'react';

import './Home.css';

import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entrie homes"
          description="Private place, with friends or family"
          price="$70/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entrie homes"
          description="Private place, with friends or family"
          price="$70/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entrie homes"
          description="Private place, with friends or family"
          price="$70/night"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entrie homes"
          description="Private place, with friends or family"
          price="$70/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entrie homes"
          description="Private place, with friends or family"
          price="$70/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entrie homes"
          description="Private place, with friends or family"
          price="$70/night"
        />
      </div>
    </div>
  );
}

export default Home;
