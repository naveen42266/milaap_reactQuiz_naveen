import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Question = ({ question, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleNext = () => {
    let isCorrect = false;

    if (question.type === 'multiple-choice' || question.type === 'true-false') {
      isCorrect = selectedOption === question.correctAnswer;
    } else if (question.type === 'text-input') {
      isCorrect = textInput.trim().toLowerCase() === question.correctAnswer.toLowerCase();
    }

    setFeedback(isCorrect ? 'Correct!' : 'Incorrect!');
    setTimeout(() => {
      setFeedback(null);
    }, 500);

    // Pass the result to the parent component
    onNext(isCorrect, selectedOption || textInput);

    // Reset state for the next question
    setSelectedOption(null);
    setTextInput('');
  };

  return (
    <div>
      <p className="text-xl font-semibold mb-8 text-gray-800">Q. {question.question}</p>

      {question.type === 'multiple-choice' && (
        <div className="space-y-4 mb-10">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`w-full flex items-center text-left p-5 rounded-xl border-2 transition-all cursor-pointer ${
                selectedOption === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <input
                type="radio"
                name="quiz-option"
                value={option}
                onChange={() => setSelectedOption(option)}
                checked={selectedOption === option}
                className="mr-4 accent-blue-500 cursor-pointer"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === 'true-false' && (
        <div className="space-x-4 mb-10">
          {['true', 'false'].map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`py-3 px-6 rounded-md border-2 transition-all ${
                selectedOption === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {question.type === 'text-input' && (
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="w-full p-3 border rounded-md mb-10"
          placeholder="Type your answer here..."
        />
      )}


       {/* Feedback */}
       {feedback && <p className={`text-lg font-bold mb-4 ${feedback === 'Correct!' ? 'text-green-500' : 'text-red-500'}`}>{feedback}</p>}

      <div className="flex justify-end">
        <button
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors shadow-md overflow-hidden"
          onClick={handleNext}
          disabled={!selectedOption && !textInput.trim()}
        >
          <span className="py-3 px-6">Next</span>
          <span className="bg-blue-500 py-3 px-4 flex items-center rounded-r-md">
            <ArrowForwardIosIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Question;