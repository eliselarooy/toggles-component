import React, { useState } from 'react';
import { sampleQuestion } from './sampleQuestion';
import Toggle from './Toggle';

const TogglesContainer = () => {
  const { question, toggles } = sampleQuestion;
  const [correctCount, setCorrectCount] = useState(0);

  console.log('number of toggles:', toggles.length, 'correct:', correctCount);

  const areAllCorrect = () => {
    if (toggles.length === correctCount) {
      return true;
    }
    return false;
  };

  return (
    <div className="question-container">
      <h4 className="question">{question}</h4>
      <div className="toggles-container">
        {toggles.map((toggle, index) => {
          return <Toggle key={index} options={toggle} />;
        })}
      </div>
      <p className="result">
        {areAllCorrect() ? 'The answer is correct!' : 'The answer is incorrect'}
      </p>
    </div>
  );
};

export default TogglesContainer;
