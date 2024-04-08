import './App.css';
import axios from "axios"
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import "@uiw/codemirror-theme-dracula"
import {dracula} from "@uiw/codemirror-theme-dracula"
import {sublime} from "@uiw/codemirror-theme-sublime"
import { useState } from 'react';




function App() {

  const [code, setCode] = useState('a = 0');

  const submitCode = () => {
    axios
    .post('http://localhost:80/python', {code}) // Решена проблема с адресом
    .then(({ data }) => console.log(data))
  };

  

  return (
    <div className='App'>
      <header className='App-header'>
      <div className='absolute top-20 bottom-40 left-10 right-10 text-left'>
      <div>Создайте функцию которая складывает два числа в python</div>
        <CodeMirror
        value={code}
        theme={dracula}
        keymap={sublime}
        mode={python}
        options={{
          theme: "dracula",
          keymap: "sublime",
          mode: "python",
        }}
        onChange={(editor, change) => {
          setCode(editor); //Ошибка с getValue()
        }}
        />
        <div className='border-2 bg-green-500' onClick={submitCode}>Submit</div>
        </div>
      </header>
    </div>
  );

}
export default App;