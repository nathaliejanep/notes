import { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const GetNotes = () => {
  const [online, setOnline] = useState(false);
  const [notes, setNotes] = useState([]);
  const [body, setBody] = useState('');
  const [showEdit, setShowEdit] = useState('');
  const [noteInfo, setNoteInfo] = useState({ text: '' });

  const lsID = localStorage.getItem('ID');

  useEffect(() => {
    axios('http://localhost:3001/notes').then((res) => {
      setNotes(res.data);
      console.log(notes);
      if (lsID) {
        setOnline(true);
      }
    });
  }, []);

  //   const getNote = (id) => {
  //     axios(`http://localhost:3001/notes/${id}`).then((res) => {
  //       setNoteInfo(res.data[0].text);
  //       console.log(noteInfo);
  //     });
  //   };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:3001/notes/delete/${id}`).then((res) => {
      console.log(res);
      // Filter to remove id
      setNotes(
        notes.filter((val) => {
          return val.id !== id;
        })
      );
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
            {/* <button
              onClick={() => {
                getNote(note.id);
              }}
            >
              EDIT
            </button> */}
            <Link to='/editnote' state={{ id: note.id }}>
              Edit Note
            </Link>
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
    </div>
  );
  return <div>{online ? renderNotes : <p>Log in first</p>}</div>;
};

export default GetNotes;
