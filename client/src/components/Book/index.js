import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({children}) {
  return (
    <div>
      <Row>
        <Col>
          <ListItem>{children}</ListItem>
        </Col>
      </Row>
    </div>
  );
}

export default Book;
