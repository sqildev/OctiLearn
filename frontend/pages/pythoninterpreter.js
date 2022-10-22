import React, { useEffect, useRef, useState } from "react";

import CodeMirror from "react-codemirror";

/*
import { PythonShell } from "python-shell";

PythonShell.runString('x=1+1;print(x)', null, function (err) {
  if (err) throw err;
  console.log('finished');
});
*/

 function pythoninterpreter() {
  return (
    <div>
      <header className="CodeMirror"></header>
        <div className="absolute left-10 top-20 text-left">
        <CodeMirror
          value=""
          onChange={(editor, viewUpdate) => {
            if (editor == "print('Hello World!')" || editor == 'print("Hello World!")') {
              console.log("Value: ", "Hello World!")
            }
          }}
          options={{
            keymap: "sublime",
            lineNumbers: true,
            mode: "python",
            tabSize: 2,
            readOnly: false,
            smartIndent: true,
            matchBrackets: true,
            theme: "dracula",
            syntaxHighlighting: true,
            fallback: true
          }}
        />
        </div>
    </div>
  );
}

export default pythoninterpreter

/*
export default function pythoninterpreter({ value, onChange, name }) {
  const [state, setState] = useState("");
  value = state;
  onChange = setState;
  name = "formula";
  const codeMirrorRef = useRef();
  useEffect(() => {
    require("./codemirror/mode/python/python.js");
    const CodeMirror = require("codemirror");
    codeMirrorRef.current.getCodeMirror().setValue(value);
  }, []);
  */

  /*
  ref={codeMirrorRef}
  value={value}
  onChange={onChange}
  name={name}
  options={{
    lineNumbers: true,
    mode: {name:"python", globalVars: true},
    tabSize: 2,
    readOnly: false,
    smartIndent: true,
    matchBrackets: true,
    theme: "mdn-like",
  }}
  */