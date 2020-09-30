import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
      return (
        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">
                  <strong>(React) Google Books Search</strong>
                </h1>
                <h2 className="text-center">Your Saved Books of Interest.</h2>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Saved">
                {this.state.books.length ? (
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
                            onClick={() => this.handleBookDelete(book.id)}
                            className="btn btn-primary ml-2"
                          >
                            Delete
                          </button>
                        )}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
              </Card>
            </Col>
          </Row>
          <Footer />
        </Container>
      );
  }
}

export default Saved;
