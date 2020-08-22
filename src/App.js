import React, { useState } from "react";
import "./App.scss";
import Keyboard from "./keyboard";

function App() {
    const [keyLog, setKeyLog] = useState([]);

    const onKeyClicked = (letter) => {
        setKeyLog([...keyLog, letter]);
    };

    return (
        <div className="App">
            <Keyboard onKeyClicked={onKeyClicked} />
            <br />
            <p>{keyLog}</p>
        </div>
    );
}

export default App;
