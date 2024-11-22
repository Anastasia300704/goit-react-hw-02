import React from 'react';
import './Feedback.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className="feedback">
      <h2>Feedback Statistics</h2>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total Feedback: {totalFeedback}</li>
        <li>Positive Feedback: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
