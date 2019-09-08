import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
};

/*const Dictaphone = ({
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
}) => {
    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    return (
        <div>
            <span>{transcript}</span>
            {
                this.props.callback(transcript)
            }
            <button onClick={resetTranscript}>Reset</button>
        </div>
    );
};*/

class Dictaphone extends React.Component {
    render() {
        const {transcript, resetTranscript, browserSupportsSpeechRecognition} = this.props;

        if (!browserSupportsSpeechRecognition) {
            return null;
        }

        return (
            <div>
                <span>{transcript}</span>
                {
                    this.props.callback(transcript)
                }
                <button onClick={resetTranscript}>Reset</button>
            </div>
        );
    }
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);