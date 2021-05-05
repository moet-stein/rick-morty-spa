import { React } from 'react';
import Character from './Character.js';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Characters = (props) => {
  const { characters } = props;
  const { searchTerm } = props;
  const { loading } = props;

  const filteredCharacters = searchTerm
    ? characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : characters;

  return (
    <div>
      <Container>
        <Row className="m-3 d-flex justify-content-center align-content-center">
          {!loading ? (
            filteredCharacters.map((filteredCharacter) => {
              return (
                <Character
                  key={filteredCharacter.id}
                  filteredCharacter={filteredCharacter}
                />
              );
            })
          ) : (
            <p>Loading ...</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Characters;
