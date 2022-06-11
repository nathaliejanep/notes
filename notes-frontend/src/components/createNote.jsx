import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const CreateNote = () => {
  const editorRef = useRef();

  const [success, setSuccess] = useState(false);

  const lsID = localStorage.getItem('ID');

  const createNote = () => {
    console.log(editorRef.current.getContent());
    setSuccess(true);
    axios
      .post('http://localhost:3001/notes/create', {
        text: editorRef.current.getContent(),
      })
      .then((res) => {
        console.log(res);
      });

    editorRef.current.setContent('');
  };

  const addNote = (
    <div>
      <Editor
        apiKey='n93h6sbynpq3lmvrtngd2e8lrv0waecc97oi0fgqhmcid3v6'
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
    <div>
      {lsID ? addNote : <p>Please log in to create a note</p>}
      {success ? <p>Successfully added note</p> : ''}
    </div>
  );
};

export default CreateNote;
