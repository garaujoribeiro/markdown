import React from 'react';
import defaultText from './DefaultText';
function Editor({ editor, setEditor }) {
  return (
    <textarea
      value={editor}
      onChange={({ target }) => setEditor(target.value)}
      id="textarea"
    ></textarea>
  );
}

export default Editor;
