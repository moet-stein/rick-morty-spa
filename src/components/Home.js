import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import Characters from './Characters.js';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import './Home.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [info, setInfo] = useState([]);

  // const fetchApi = () => {
  //   fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCharacters(data.results);
  //       setInfo(data.info);
  //       setLoading(false);
  //     });
  // };

  const onchange = (data) => {
    setSearchTerm(data);
    console.log('Form>', data);
  };

  const changePage = (direction) => {
    direction === 'right' ? setPageNum(pageNum + 1) : setPageNum(pageNum - 1);
    // return fetchApi();
  };

  useEffect(() => {
    const fetchApi = () => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results);
          setInfo(data.info);
          setLoading(false);
        });
    };
    fetchApi();
  }, [pageNum]);

  return (
    <React.Fragment>
      <SearchBar
        onchange={(e) => {
          onchange(e);
        }}
      />
      <Characters
        characters={characters}
        searchTerm={searchTerm}
        loading={loading}
      />

      <Container className="mb-3">
        {info.prev === null ? (
          <Button variant="link" disabled>
            <ArrowLeft className="m-3" color="grey" size={50} />
          </Button>
        ) : (
          <Button variant="link" onClick={() => changePage('left')}>
            <ArrowLeft className="m-3" color="teal" size={50} />
          </Button>
        )}
        {info.next === null ? (
          <Button variant="link" disabled>
            <ArrowRight className="m-3" color="grey" size={50} />
          </Button>
        ) : (
          <Button variant="link" onClick={() => changePage('right')}>
            <ArrowRight className="m-3" color="teal" size={50} />
          </Button>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Home;
