import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const GetNotes = () => {
  const [notes, setNotes] = useState([]);

  const lsID = localStorage.getItem('ID');
  console.log(lsID);
  useEffect(() => {
    axios('http://localhost:3001/notes').then((res) => {
      setNotes(res.data);
      console.log(notes);
    });
  }, []);

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
            <h2>{note.title}</h2>
            <p
              className='text-box'
              dangerouslySetInnerHTML={{ __html: note.text }}
            />

            <button className='edit-btn'>
              <Link to='/editnote' state={{ id: note.id }}>
                EDIT
              </Link>
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
    </div>
  );
  return <div>{lsID ? renderNotes : <p>Please log in to access notes</p>}</div>;
};

export default GetNotes;
