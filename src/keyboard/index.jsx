import "./index.scss";
import React from "react";
import PropTypes from "prop-types";

const WhiteKey = ({ blackKeyLeft = false, blackKeyRight = false, letter, onKeyClicked, highlightLetter }) => {
    return (
        <div
            className={`white-key ${highlightLetter === letter && "highlighted"}`}
            onClick={() => {
                onKeyClicked(letter);
            }}
        >
            {blackKeyRight && <span className="black-key-right"></span>}
            {blackKeyLeft && <span className="black-key-left"></span>}
            {letter}
        </div>
    );
};

const KeyboardComponent = ({ highlightLetter, onKeyClicked }) => {
    return (
        <div className="keyboard-div">
            <WhiteKey letter="C" blackKeyRight onKeyClicked={onKeyClicked} highlightLetter={highlightLetter} />
            <WhiteKey letter="D" blackKeyLeft blackKeyRight onKeyClicked={onKeyClicked} highlightLetter={highlightLetter} />
            <WhiteKey letter="E" blackKeyLeft onKeyClicked={onKeyClicked} highlightLetter={highlightLetter} />
            <WhiteKey letter="F" blackKeyRight onKeyClicked={onKeyClicked} highlightLetter={highlightLetter} />
            <WhiteKey letter="G" blackKeyLeft blackKeyRight onKeyClicked={onKeyClicked} highlightLetter={highlightLetter} />
            <WhiteKey letter="A" blackKeyLeft blackKeyRight onKeyClicked={onKeyClicked} highlightLetter={highlightLetter} />
            <WhiteKey letter="B" blackKeyLeft onKeyClicked={onKeyClicked} highlightLetter={highlightLetter} />
        </div>
    );
};

KeyboardComponent.propTypes = {
    onKeyClicked: PropTypes.func,
};

export default KeyboardComponent;
