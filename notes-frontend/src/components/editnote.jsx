import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const EditNote = () => {
  const [noteInfo, setNoteInfo] = useState({ text: '', title: '' });

  const editorRef = useRef();
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    axios.get(`http://localhost:3001/notes/${id}`).then((res) => {
      let getNoteInfo = {
        title: res.data[0].title,
        text: res.data[0].text,
      };
      setNoteInfo(res.data[0].text);
      //console.log(res.data[0].text);
      console.log(noteInfo);
    });
  }, []);

  // const editNote = () => {
  //   axios
  //     .put(`http://localhost:3001/notes/edit`, {
  //       text: noteInfo,
  //       id: id,
  //     })
  //     .then((res) => {
  //       // console.log(res);
  //     });
  // };

  return (
    <div>
      {/* <Editor
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
      /> */}
      {/* <button onClick={editNote()}>EDIT</button> */}
    </div>
  );
};

export default EditNote;
