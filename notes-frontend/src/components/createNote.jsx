import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const CreateNote = () => {
  const editorRef = useRef();
  const clearTitle = useRef(null);

  const [success, setSuccess] = useState(false);
  const [title, setTitle] = useState('');

  const lsID = localStorage.getItem('ID');

  const createNote = (e) => {
    e.preventDefault();

    console.log(editorRef.current.getContent());
    setSuccess(true);
    axios
      .post('http://localhost:3001/notes/create', {
        title: title,
        text: editorRef.current.getContent(),
      })
      .then((res) => {
        console.log(res);
      });

    clearTitle.current.value = '';
    editorRef.current.setContent('');
  };

  const addNote = (
    <div>
      <form onSubmit={createNote}>
        <label htmlFor='title'></label>
        <input
          ref={clearTitle}
          type='text'
          name='title'
          placeholder='Enter your title here...'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Editor
          apiKey='n93h6sbynpq3lmvrtngd2e8lrv0waecc97oi0fgqhmcid3v6'
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            menubar: false,
            toolbar:
              'undo redo | forecolor backcolor | styleselect bold italic | alignleft alignright |code',
          }}
        />

        <input type='submit' placeholder='Submit' value='SUBMIT' />
      </form>
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
