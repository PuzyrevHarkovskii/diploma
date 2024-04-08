import './App.css';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import "@uiw/codemirror-theme-dracula"
import {dracula} from "@uiw/codemirror-theme-dracula"
import {sublime} from "@uiw/codemirror-theme-sublime"

const code = "const a = 0;"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <div className='absolute top-20 bottom-40 left-10 right-10'>
        <CodeMirror
        value={code}
        theme={dracula}
        keymap={sublime}
        options={{
          theme: "dracula",
          keymap: "sublime",
          mode: "jsx",
        }}
        />
        </div>
      </header>
    </div>
  );

}
export default App;