import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const EditNote = () => {
  const [noteText, setNoteText] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [edited, setEdited] = useState(false);
  // Hook för noteInfo med alla objekt?
  //const [noteInfo, setNoteInfo] = useState({title:'', text:''});
  const editorRef = useRef();
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    getNote(id);
  }, []);

  const getNote = (id) => {
    axios(`http://localhost:3001/notes/${id}`).then((res) => {
      setNewTitle(res.data[0].title);
      setNoteText(res.data[0].text);
      // console.log(res.data[0].text);
      console.log(noteText);
    });
  };

  const updateNote = () => {
    setEdited(true);
    axios
      .put(`http://localhost:3001/notes/edit`, {
        //Skicka med i backend för att funka
        title: newTitle,
        text: noteText,
        id: id,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      {edited ? (
        <p>Successfully edited</p>
      ) : (
        <div>
          <input
            type='text'
            value={newTitle || ''}
            required
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
          <Editor
            apiKey='n93h6sbynpq3lmvrtngd2e8lrv0waecc97oi0fgqhmcid3v6'
            onEditorChange={(newText) => setNoteText(newText)}
            initialValue={noteText}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              menubar: false,
              toolbar:
                'h1 h2  | undo redo | forecolor backcolor | styleselect bold italic | alignleft alignright |code',
            }}
          />
          <button
            type='submit'
            onClick={() => {
              updateNote();
            }}
          >
            SUBMIT EDIT
          </button>
        </div>
      )}
    </div>
  );
};

export default EditNote;
