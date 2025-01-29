import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const Introduction = ({startQuiz}) => {

    return(
        <div className="rounded-xl "> 
        {/* bg-gray-100 p-4 shadow-lg */}
          {/* Introduction */}
          <p className="text-base text-gray-700 mb-6">
            A quiz is a short test that assesses a person's knowledge of a topic or topics. Quizzes can be used for education, entertainment, or as a hobby.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-blue-800">What are quizzes used for?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <strong>Education:</strong> Quizzes can help teachers assess student progress and identify knowledge gaps. They can also be used to evaluate a student's comprehension of course material.
            </li>
            <li>
              <strong>Entertainment:</strong> Quizzes can be televised as game shows, such as <i>Who Wants to Be a Millionaire</i>, for entertainment purposes.
            </li>
            <li>
              <strong>Hobby:</strong> Quizzes can be a fun way to test knowledge, skills, or abilities.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-800">What are the different types of quizzes?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>Trivia quizzes:</strong> Test a person's knowledge of a topic.</li>
            <li><strong>Personality quizzes:</strong> Assess a person's personality traits.</li>
            <li><strong>Weekly quizzes:</strong> Quizzes held at a local pub, where participants compete for prizes.</li>
            <li><strong>Television game shows:</strong> Quizzes broadcast on television, where participants compete for cash prizes.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-800">What are the different formats for quizzes?</h2>
          <p className="text-gray-700">
            Multiple choice, Fill in the blanks, True or false, and Short answer.
          </p>

          <div className='mt-4'>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors shadow-md overflow-hidden" onClick={()=>{startQuiz(true)}}>
              <span className="bg-blue-500 py-3 px-4 flex items-center rounded-l-md">
                <PlayArrowIcon />
              </span>
              <span className="py-3 px-6">Play Now</span>
            </button>
          </div>
        </div>
    )

};

export default Introduction;

