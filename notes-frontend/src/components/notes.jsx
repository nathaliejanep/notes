import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const Notes = () => {
  const editorRef = useRef();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    console.log(title, text);
  }, [title, text]);

  const getNotes = () => {
    console.log(editorRef.current.getContent());

    axios('http://localhost:3000/notes').then((res) => {
      console.log(res);
    });
  };

  const newNote = () => {
    console.log(editorRef.current.getContent());

    // let saveNote = {
    //   title: title,
    //   text: editorRef.current.getContent(),
    //   author: '1',
    // };

    axios
      .post('http://localhost:3000/notes/add', {
        title: title,
        text: editorRef.current.getContent(),
        author: '1',
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Title'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          menubar: false,
          toolbar:
            'h1 h2  | undo redo | forecolor backcolor | styleselect bold italic | alignleft alignright |code',
        }}
      />
      <button type='button' onClick={newNote}>
        SUBMIT
      </button>
    </div>
  );
};

export default Notes;
