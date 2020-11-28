import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

function Home() {
  const [state, setState] = useState ({
    books: [],
    q: "",
    message: "Let the search begin!"
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState({...state,
      [name]: value
    });
  };

  const getBooks = () => {
    API.getBooks(state.q)
      .then(res => {
        setState({
          books: res.data
        });
        console.log(res.data);
        console.log(state.books.length);
      })
      .catch(() =>
        setState({
          ...state,
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    getBooks();
  };

  const handleBookSave = id => {
    const book = state.books.find(book => book.id === id);
    console.log(book);
    console.log(id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => getBooks());
  };

    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1 className="text-center">
                <strong>Bookworm</strong>
            </h1>
              <br></br>
            <h2 className="text-center">
                <strong>Cozy up with a good book and avoid that early bird</strong>
            </h2>
              <h4 className="text-center">Search and Save Books of Interest.</h4>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search">
              <Form
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                q={state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }

export default Home;
