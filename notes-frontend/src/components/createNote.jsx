import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const CreateNote = () => {
  const editorRef = useRef();
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState([]);
  const [body, setBody] = useState('');
  const [noteInfo, setNoteInfo] = useState({ text: '' });

  const createNote = () => {
    console.log(editorRef.current.getContent());

    axios
      .post('http://localhost:3001/notes/create', {
        title: title,
        text: editorRef.current.getContent(),
        // lägg in id i ls efter inloggning och skicka hit
        author: '1',
      })
      .then((res) => {
        console.log(res);
      });

    editorRef.current.setContent('');
  };

  const addNote = (
    <div>
      {/* Skapa Form och lägg till required */}
      <input
        type='text'
        placeholder='Title'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Editor
        // Vilket sätt är bäst onEditorChange / onInit
        apiKey='n93h6sbynpq3lmvrtngd2e8lrv0waecc97oi0fgqhmcid3v6'
        onEditorChange={(newText) => setBody(newText)}
        initialValue={noteInfo}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          menubar: false,
          toolbar:
            'h1 h2  | undo redo | forecolor backcolor | styleselect bold italic | alignleft alignright |code',
        }}
      />

      <button type='button' onClick={createNote}>
        SUBMIT
      </button>
    </div>
  );

  return (
    // Meddelande NOTE ADDED
    <div>{addNote}</div>
  );
};

export default CreateNote;
