//import React from 'react';
import './Options.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className="options">
      <button onClick={() => updateFeedback('good')} className="option-button">
        Good
      </button>
      <button onClick={() => updateFeedback('neutral')} className="option-button">
        Neutral
      </button>
      <button onClick={() => updateFeedback('bad')} className="option-button">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className="reset-button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
