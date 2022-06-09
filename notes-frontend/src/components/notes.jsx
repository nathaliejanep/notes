import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const Notes = () => {
  const editorRef = useRef();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  // const [author, setAuthor] = useState('');
  const [notes, setNotes] = useState([]);
  const [body, setBody] = useState('');
  const [showForm, setShowForm] = useState('');
  const [noteInfo, setNoteInfo] = useState({ title: '', text: '', author: '' });

  useEffect(() => {
    // console.log(title, text);
  }, [title, text]);

  const getNotes = () => {
    console.log(editorRef.current.getContent());

    axios('http://localhost:3001/notes').then((res) => {
      console.log(res.data);

      setNotes(res.data);
      console.log(notes);
      // notes.forEach((note) => {
      //   console.log(note.author);
      // });
    });
  };

  const renderNotes = (
    <div>
      <div>
        {notes.map((note) => (
          <div key={note.id} className='note-box'>
            <p>{note.title}</p>
            <p>{note.time}</p>
            <p dangerouslySetInnerHTML={{ __html: note.text }} />
            <p>{note.author}</p>
            <button>EDIT</button>
          </div>
        ))}
      </div>
      <button type='button' onClick={getNotes}>
        RENDER NOTES
      </button>
    </div>
  );

  const newNote = () => {
    console.log(editorRef.current.getContent());

    axios
      .post('http://localhost:3001/notes/add', {
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
        apiKey='n93h6sbynpq3lmvrtngd2e8lrv0waecc97oi0fgqhmcid3v6'
        onEditorChange={(newText) => setBody(newText)}
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
  return (
    <div>
      {addNote}
      {renderNotes}
    </div>
  );
};

export default Notes;
