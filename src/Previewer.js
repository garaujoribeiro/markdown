import React, { useEffect } from 'react';
import { marked } from 'marked';
function Previewer({ editor }) {
  useEffect(() => {
    document.getElementById('previewer').innerHTML = marked.parse(editor);
  }, [editor]);
  return <div id="previewer"></div>;
}

export default Previewer;
