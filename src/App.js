import React, { useState } from "react";
import "./App.scss";
import Keyboard from "./keyboard";

function App() {
    const [keyLog, setKeyLog] = useState([]);
    const [hightlightLetter, setHighlightLetter] = useState();
    const [keysToPlay, setKeysToPlay] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const onKeyClicked = (letter) => {
        setKeyLog([...keyLog, letter]);
    };

    const onPlayClicked = () => {
        if (validateInputString(keysToPlay)) {
            setShowErrorMessage(false);
            const keyArray = keysToPlay.split(",");
            setHighlightLetter(keyArray[0]); // highlight first letter before interval since setInterval will wait 1sec before starting.
            let count = 1;
            let intervalId = setInterval(() => {
                if (count >= keyArray.length) {
                    clearInterval(intervalId);
                }
                setHighlightLetter(keyArray[count]);
                count++;
            }, 1000);
        } else {
            setShowErrorMessage(true);
        }
    };

    const validateInputString = (str) => {
        const regex = /([CDEFGAB]{1}\,{1})+[CDEFGAB]{1}$/;
        return regex.test(str);
    };

    return (
        <div className="App">
            <Keyboard onKeyClicked={onKeyClicked} highlightLetter={hightlightLetter} />
            <br />
            <p>{keyLog}</p>
            <br />
            {showErrorMessage && (
                <div className="error-message-div">
                    <p>Please enter a valid string of keys to play. Keys should be separated by a comma.</p>
                </div>
            )}
            <input
                value={keysToPlay}
                onChange={(e) => {
                    setKeysToPlay(e.target.value);
                }}
            />
            <button onClick={onPlayClicked}>Play</button>
        </div>
    );
}

export default App;
