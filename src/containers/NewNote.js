import React, { useState, useRef } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';
import config from '../config';
import '../NewNote.css';

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
    console.log(event.target)
    file.current = event.target.files[0]
  }

  async function handleSubmit(event) {
    event.preventDefault();

  }
}