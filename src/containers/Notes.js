import React, { useRef, useState, useEffect } from 'react';
// useRef doesnot rerender while useState does
import { API, Storage } from 'aws-amplify';

export default function Notes(props) {
  const file = useRef(null);
  const [note, setNote] = useState(null);
  const [content, setContent] = useState("");

  useEffect( () => {
    function loadNote() {
      return API.get("notes", `/notes/${props.match.params.id}`);
    }

  async function onLoad() {
    try {
      const note = await loadNote();
      const { content, attachment } = note;

      if(attachment) {
        note.attachment = await Storage.vault.get(attachment);
      }

      // note is the whole note object but content is the text types for the saved note
      setContent(content);
      setNote(note);
    } catch(e) {
      alert(e);
    }
  }

  onLoad();
}, [props.match.params.id]);

return (
  <div className="Notes"></div>
);
}

