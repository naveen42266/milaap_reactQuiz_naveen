import React, { useState, useEffect } from 'react';
import Question from '../question';
import { Tooltip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Level from '../level';

const Questions = ({ mode, questions, onComplete, setMode }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds for testing
  const [startTime, setStartTime] = useState(Date.now()); // Track when the quiz starts

  // Timer logic
  useEffect(() => {
    if (timeLeft === 0) {
      handleQuizCompletion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle quiz completion when all questions are answered
  useEffect(() => {
    if (currentQuestion === questions[mode].length) {
      handleQuizCompletion();
    }
  }, [currentQuestion, mode, questions]);

  const handleNextQuestion = (isCorrect, userAnswer) => {
    // Update userAnswers with the latest answer
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: questions[mode][currentQuestion].question, userAnswer },
    ]);

    // Update correctAnswers if the answer is correct
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    // Move to the next question
    setCurrentQuestion((prev) => prev + 1);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600); // 1 hour = 3600 seconds
    const minutes = Math.floor((time % 3600) / 60); // Minutes are the remainder after removing hours
    const seconds = time % 60; // Seconds are the remainder after removing minutes

    return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  };

  const handleQuizCompletion = () => {
    // Calculate the total time taken
    const endTime = Date.now();
    const totalTimeTaken = Math.floor((endTime - startTime) / 1000); // Convert milliseconds to seconds
    const formattedTime = formatTime(totalTimeTaken);

    const results = {
      mode,
      total: questions[mode].length,
      correct: correctAnswers,
      completedTime: formattedTime, // Add formatted time to results
    };

    // Pass results and userAnswers to the parent component
    onComplete([results], userAnswers);
  };

  return (
    <div>
      <Level mode={mode} />
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0">
        <span className="text-xl font-medium border border-gray-300 p-3 bg-[#f3f4f5]">
          Question {currentQuestion + 1} of {questions[mode].length}
        </span>
        <div className="flex text-xl">
          {/* Display the formatted hours, minutes, and seconds */}
          <Tooltip title="Hours">
            <div className="border border-gray-300 p-3 bg-[#f3f4f5] px-4">
              {formatTime(timeLeft).split(' ')[0]}
            </div>
          </Tooltip>
          <Tooltip title="Minutes">
            <div className="border border-gray-300 p-3 bg-[#f3f4f5] px-4">
              {formatTime(timeLeft).split(' ')[1]}
            </div>
          </Tooltip>
          <Tooltip title="Seconds">
            <div className="border border-gray-300 p-3 bg-[#f3f4f5] px-4">
              {formatTime(timeLeft).split(' ')[2]}
            </div>
          </Tooltip>
        </div>
      </div>

      {currentQuestion < questions[mode].length ? (
        <Question
          question={questions[mode][currentQuestion]}
          onNext={handleNextQuestion}
        />
      ) : (
        <p className="text-xl font-semibold text-center">Quiz Completed!</p>
      )}
    </div>
  );
};

export default Questions;