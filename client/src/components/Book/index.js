import React from "react";
import { ListItem } from "../List";
import { Row } from "../Grid";
import "./style.css";

function Book({children}) {
  return (
    <div>
      <Row>
        <div className="col">
          <ListItem>{children}</ListItem>
        </div>
      </Row>
    </div>
  );
}

export default Book;
