import { useEffect, useState } from 'react';
import { marked } from 'marked';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';
import defaultText from './DefaultText';
function App() {
  const [editor, setEditor] = useState(defaultText());

  return (
    <div className="App">
      <div className="container">
        <Editor editor={editor} setEditor={setEditor} />
        <div className="border">
          <Previewer editor={editor} />
        </div>
      </div>
    </div>
  );
}

export default App;
