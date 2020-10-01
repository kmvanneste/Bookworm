import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./style.css"

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
  return (
      <Form>
        <FormGroup>
          <Input
            type="text"
            name="q"
            id="UserSearch"
            onChange={handleInputChange}
            placeholder="Let's find your next page-turner"
          />
          <Button className={"btn"} color="primary" type="submit" onClick={handleFormSubmit}>
            Search
          </Button>
        </FormGroup>
      </Form>
  );
}

export default SearchForm;
