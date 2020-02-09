import React, { useState, useRef } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';
import config from '../config';
import './NewNote.css';
import { API } from 'aws-amplify';

export default function NewNote(props) {
  // useRef hook does not cause the component to rerender
  //the browser will handle the state of the file rather than the component
  const file = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    // We can set/get the current value of a ref by using its current property.
    file.current = event.target.files[0]
  }

  function createNote(note) {
    // "notes" is the name the I chose for these set of APIs when configuring AWS Amplify >> check it in src/index.js
    return API.post("notes", "/notes", {
      body: note
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE / 1000000} MB.`
      );
      return;
    }
    setIsLoading(true);

    try {
      await createNote({ content });
      // redirects the user to the home page after creating a note
      props.history.push("/");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="NewNote">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
          <FormControl
          value={content}
          componentClass="textarea"
          onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl
          onChange={handleFileChange} type="file"
          />
        </FormGroup>
        <LoaderButton
        block
        bsSize="large"
        type="submit"
        bsStyle="primary"
        isLoading={isLoading}
        disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </form>
    </div>
  );
}