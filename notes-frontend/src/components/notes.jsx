import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const Notes = () => {
  const editorRef = useRef();
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState([]);
  const [body, setBody] = useState('');
  const [showForm, setShowForm] = useState('');
  const [noteInfo, setNoteInfo] = useState({ text: '' });
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    console.log(body);
    // console.log(title, text);
  }, [body]);

  const deleteNote = (id) => {
    axios.delete(`http://localhost:3001/notes/delete/${id}`).then((res) => {
      console.log(res);
    });
  };

  const editNote = () => {
    setEdit(true);
    axios
      .put(`http://localhost:3001/notes/edit`, {
        text: noteInfo,
        id: noteInfo.id,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const getNote = (id) => {
    setEdit(true);
    axios(`http://localhost:3001/notes/${id}`).then((res) => {
      setNoteInfo(res.data[0].text);
      console.log(noteInfo);
    });
  };

  const getNotes = () => {
    console.log(editorRef.current.getContent());

    axios('http://localhost:3001/notes').then((res) => {
      setNotes(res.data);
      console.log(notes);
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
            <button
              onClick={() => {
                getNote(note.id);
              }}
            >
              EDIT
            </button>

            <button
              onClick={() => {
                deleteNote(note.id);
              }}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
      <button type='button' onClick={getNotes}>
        RENDER NOTES
      </button>
    </div>
  );

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
      {edit ? (
        ''
      ) : (
        <button type='button' onClick={createNote}>
          SUBMIT
        </button>
      )}
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
