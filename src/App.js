import React from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Travels</h1>
      </header>
      <Travel
        travelData={{
          destination: "Tokyo",
          country: "Japan",
          photo: "https://cdn.welcometothejungle.co/uploads/article/image/5685/154538/bohdan-maylove-1206995-unsplash.jpg",
          distance: 9717
        }}
      />
      <Travel
        travelData={{
          destination: "New York",
          country: "United States of America",
          photo: "https://hospitality-on.com/sites/default/files/2019-01/times_square_new_york_city_hdr.jpg",
          distance: 5836
        }}
      />
    </div>
  );
}

export default App;
