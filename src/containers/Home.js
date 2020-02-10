import React, { useState, useEffect } from "react";
import "./Home.css";
import { PageHeader, ListGroup } from "react-bootstrap";
// import { getBsProps } from "react-bootstrap/lib/utils/bootstrapUtils";

export default function Home(props) {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function renderLander() {
    return (
      <div className="lander">
        <p>A simple note taking app created by Hilda</p>
      </div>
    );
  }

  function renderNotesList(notes) {
    return null;
  }


  function renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          { !isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      <div className="lander">
        { props.isAuthenticated ? renderNotes() : renderLander()}
      </div>
    </div>
  );
}