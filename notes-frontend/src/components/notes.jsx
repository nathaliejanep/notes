import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Notes = () => {
  const editorRef = useRef();

  const onSubmit = () => {
    console.log(editorRef.current.getContent());
  };

  return (
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          menubar: false,
          toolbar:
            'undo redo | forecolor backcolor | styleselect bold italic | alignleft alignright |code',
        }}
      />
      <button type='button' onClick={onSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default Notes;
