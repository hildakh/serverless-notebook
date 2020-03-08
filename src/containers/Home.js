import React, { useState, useEffect, Fragment } from "react";
import "./Home.css";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [notes, setNotes] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  function loadNotes(notes) {
    return API.get("notes", "/notes");
  }

  useEffect(() => {
    async function onLoad() {
      if (!props.isAuthenticated) {
        return;
      }
      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        alert(e);
      }
      setisLoading(false);
    }

    onLoad();
  }, [props.isAuthenticated]);

  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
        <div>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
        </div>
      </div>
    );
  }

  function renderNotesList(notes) {
    return (
      <div>
        <LinkContainer key="new" to="/notes/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new note!
            </h4>
          </ListGroupItem>
        </LinkContainer>

        <Fragment>
          {notes.map(note => (
            <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
              {/* trim removed the dead space and split breaks down the message based on line breaks. index 0 takes the first line of the message and sets it to the header */}
              <ListGroupItem header={note.content.trim().split("\n")[0]}>
                {"Created: " + new Date(note.createdAt).toLocaleString()}
              </ListGroupItem>
            </LinkContainer>
          ))}
        </Fragment>

      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>{!isLoading && renderNotesList(notes)}</ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      <div className="lander">
        {props.isAuthenticated ? renderNotes() : renderLander()}
      </div>
    </div>
  );
}

