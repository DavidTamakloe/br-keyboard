import React, { useState } from "react";
import "./App.scss";
import Keyboard from "./keyboard";

function App() {
    const [keyLog, setKeyLog] = useState([]);
    const [hightlightLetter, setHighlightLetter] = useState();
    const [keysToPlay, setKeysToPlay] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [numberOfKeyboards, setNumberOfKeyboards] = useState(1);

    const onKeyClicked = (letter) => {
        setKeyLog([...keyLog, letter]);
    };

    const onPlayClicked = () => {
        if (validateInputString(keysToPlay.toUpperCase())) {
            setShowErrorMessage(false);
            const keyArray = keysToPlay.toUpperCase().split(",");
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
        const regex = /([CDEFGAB]{1},{1})+[CDEFGAB]{1}$/;
        return regex.test(str);
    };

    const addKeyboard = () => {
        setNumberOfKeyboards(numberOfKeyboards + 1);
    };
    const removeKeyboard = () => {
        setNumberOfKeyboards(numberOfKeyboards - 1);
    };

    let keyboards = [];
    for (let i = 0; i < numberOfKeyboards; i++) {
        keyboards.push(<Keyboard key={i} onKeyClicked={onKeyClicked} highlightLetter={hightlightLetter} />);
    }

    return (
        <div className="App">
            <h3>B/R Keyboard</h3>

            <div className="keyboard-counter">
                <button onClick={removeKeyboard}>-</button>
                &nbsp;<span>{numberOfKeyboards}</span>&nbsp;
                <button onClick={addKeyboard}>+</button>
            </div>

            {keyboards}

            <p className="keylog-text">{keyLog.length > 0 ? keyLog : "Play Something"}</p>

            <input
                className="play-input"
                placeholder="Enter sequence to play"
                value={keysToPlay}
                onChange={(e) => {
                    setKeysToPlay(e.target.value);
                }}
            />
            <button className="play-btn" onClick={onPlayClicked}>
                Play
            </button>
            <br />
            {showErrorMessage && (
                <div className="error-message-div">
                    <p>
                        Please enter a valid string of keys to play.
                        <br /> Keys should be separated by a comma.
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;
