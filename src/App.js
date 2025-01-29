import React, { useState } from 'react';
import Questions from './components/questions';
import Introduction from './components/introduction';
import quizData from "./data/quizData.json";
import Results from './components/results';

const MyApp = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [results, setResults] = useState(false);
  const [mode, setMode] = useState('easy');
  const [quizResults, setQuizResults] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleStartQuiz = () => {
    setStartQuiz(true);
    setResults(false);
    setMode('easy');
    setQuizResults([]);
    setUserAnswers([]);
  };

  const handleNextLevel = () => {
    setStartQuiz(true);
    setResults(false);
    setMode(
      mode === 'easy' ? 'medium' : mode === 'medium' ? 'hard' : 'easy'
    );
    // setQuizResults([]);
    // setUserAnswers([]);
  };

  const handleQuizCompletion = (results, answers) => {
    setQuizResults(results);
    setUserAnswers(answers);
    setStartQuiz(false);
    setResults(true);
  };

  const handleHome = () => {
    setStartQuiz(false);
    setResults(false);
    setMode('');
    setQuizResults([]);
    setUserAnswers([]);
  };

  return (
    <div className="w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 min-h-screen max-h-full w-full">
        <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">QuizApp</h1>

        {startQuiz ? (
          <Questions
            mode={mode}
            questions={quizData}
            onComplete={handleQuizCompletion}
            setMode={setMode}
          />
        ) : results ? (
          <Results
            mode={mode}
            questions={userAnswers}
            results={quizResults}
            onRestart={handleStartQuiz}
            onNextLevel={handleNextLevel}
            goHome={handleHome}
          />
        ) : (
          <Introduction startQuiz={handleStartQuiz} />
        )}
      </div>
    </div>
  );
};

export default MyApp;