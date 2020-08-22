import "./index.scss";
import React from "react";
import PropTypes from "prop-types";

const WhiteKey = ({ blackKeyLeft = false, blackKeyRight = false, letter, onKeyClicked }) => {
    return (
        <div
            className="white-key"
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

const KeyboardComponent = ({ onKeyClicked }) => {
    return (
        <div className="keyboard-div">
            <WhiteKey letter="C" blackKeyRight onKeyClicked={onKeyClicked} />
            <WhiteKey letter="D" blackKeyLeft blackKeyRight onKeyClicked={onKeyClicked} />
            <WhiteKey letter="E" blackKeyLeft onKeyClicked={onKeyClicked} />
            <WhiteKey letter="F" blackKeyRight onKeyClicked={onKeyClicked} />
            <WhiteKey letter="G" blackKeyLeft blackKeyRight onKeyClicked={onKeyClicked} />
            <WhiteKey letter="A" blackKeyLeft blackKeyRight onKeyClicked={onKeyClicked} />
            <WhiteKey letter="B" blackKeyLeft onKeyClicked={onKeyClicked} />
        </div>
    );
};

KeyboardComponent.propTypes = {
    onKeyClicked: PropTypes.func,
};

export default KeyboardComponent;
