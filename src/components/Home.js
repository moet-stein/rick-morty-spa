import React from 'react';
import Characters from './Characters.js';
import SearchBar from './SearchBar.js';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <SearchBar />
      <Characters />
    </div>
  );
}

export default Home;
