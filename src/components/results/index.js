import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import quizData from "../../data/quizData.json";
import BadgeCompletionAnimation from '../animation';

const Results = ({ mode, questions, results, onRestart, onNextLevel, goHome }) => {
    const handleNextLevel = () => {
        onNextLevel(mode);
    };

    const filterResults = quizData[mode];

    // const sa = "SSS".toLowerCase()

    console.log(questions);

    return (
        // <div className="overflow-x-auto p-4 rounded-lg shadow-md bg-white">
        //     <h2 className="text-2xl font-bold text-blue-800 mb-4">Quiz Results</h2>
        //     <table className="table-auto w-full border-collapse border border-gray-300">
        //         <thead>
        //             <tr className="bg-gray-100 text-gray-800">
        //                 <th className="border border-gray-300 px-4 py-2">No.</th>
        //                 <th className="border border-gray-300 px-4 py-2">Questions</th>
        //                 <th className="border border-gray-300 px-4 py-2">Your Answers</th>
        //                 <th className="border border-gray-300 px-4 py-2">Correct Answers</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {questions.map((question, index) => (
        //                 <tr key={index} className="text-center">
        //                     <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
        //                     <td className="border border-gray-300 px-4 py-2">{question.question}</td>
        //                     <td className="border border-gray-300 px-4 py-2">{question.userAnswer}</td>
        //                     <td className="border border-gray-300 px-4 py-2">{question.correctAnswer}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>

        //     <div className="flex justify-start items-center mt-8 space-x-4">
        //         <button
        //             className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors shadow-md overflow-hidden"
        //             onClick={onRestart}
        //         >
        //             <span className="bg-blue-500 py-3 px-4 flex items-center rounded-l-md">
        //                 <ReplayIcon />
        //             </span>
        //             <span className="py-3 px-6">Play Again</span>
        //         </button>

        //         {results[0].correct >= 2 && mode !== 'hard' && (
        //             <button
        //                 className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors shadow-md overflow-hidden"
        //                 onClick={handleNextLevel}
        //             >
        //                 <span className="bg-green-500 py-3 px-4 flex items-center rounded-l-md">
        //                     <TrendingUpIcon />
        //                 </span>
        //                 <span className="py-3 px-6">Next Level</span>
        //             </button>
        //         )}

        //         <button
        //             className="flex items-center bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md transition-colors shadow-md overflow-hidden"
        //             onClick={onRestart}
        //         >
        //             <span className="bg-gray-400 py-3 px-4 flex items-center rounded-l-md">
        //                 <HomeIcon />
        //             </span>
        //             <span className="py-3 px-6">Back to Home</span>
        //         </button>
        //     </div>
        // </div>
        <div className="overflow-x-auto p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Quiz Results</h2>
            {filterResults.length > 0 ? (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-gray-800">
                            <th className="border border-gray-300 px-4 py-2">No.</th>
                            <th className="border border-gray-300 px-4 py-2">Questions</th>
                            <th className="border border-gray-300 px-4 py-2">Your Answers</th>
                            <th className="border border-gray-300 px-4 py-2">Correct Answers</th>
                            <th className="border border-gray-300 px-4 py-2">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterResults.map((question, index) => {
                            return (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{question.question || "N/A"}</td>
                                    <td className="border border-gray-300 px-4 py-2 capitalize">{questions[index]?.userAnswer || "N/A"}</td>
                                    <td className="border border-gray-300 px-4 py-2 capitalize">{filterResults.find((ele) => ele.question === question?.question)?.correctAnswer || "N/A"}</td>
                                    <td className="border border-gray-300 px-4 py-2">{filterResults.find((ele) => ele.question.toLowerCase() === question?.question.toLowerCase())?.correctAnswer.toLowerCase() === questions[index]?.userAnswer.toLowerCase() ? 1 : 0}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-500">No results available yet.</p>
            )}
            <h2 className="text-2xl font-bold text-blue-800 my-4">Quiz Stats</h2>

            {
                results.length > 0 ? (
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100 text-gray-800">
                                <th className="border border-gray-300 px-4 py-2">No.</th>
                                <th className="border border-gray-300 px-4 py-2">Total Questions</th>
                                <th className="border border-gray-300 px-4 py-2">Correct Answers</th>
                                <th className="border border-gray-300 px-4 py-2">Your Score</th>
                                <th className="border border-gray-300 px-4 py-2">Passing Score</th>
                                <th className="border border-gray-300 px-4 py-2">Time Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((question, index) => {
                                return (
                                    <tr key={index} className="text-center">
                                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                        <td className="border border-gray-300 px-4 py-2">{filterResults?.length || "N/A"}</td>
                                        <td className="border border-gray-300 px-4 py-2">{question.correct || "N/A"}</td>
                                        <td className="border border-gray-300 px-4 py-2">{question.correct === 3 ? 100 + "%" : question.correct ? question.correct * 33.3 + "%" : "0%"}</td>
                                        <td className="border border-gray-300 px-4 py-2">60%</td>
                                        <td className="border border-gray-300 px-4 py-2">0h 0m 23s</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )
                    : null
            }

            {/* Play Again - Keep Blue as it's a standard retry color */}
            <div className="flex justify-start items-center mt-8 space-x-4">
                {
                    results[0]?.correct && results[0]?.correct >= 2 ? (
                        < button
                            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors shadow-md overflow-hidden"
                            onClick={onRestart}
                        >
                            <span className="bg-blue-500 py-3 px-4 flex items-center rounded-l-md">
                                <ReplayIcon className="rotate-[-180]" />
                            </span>
                            <span className="py-3 px-6">Play Again</span>
                        </button>
                    ) : (
                        <button
                            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors shadow-md overflow-hidden"
                            onClick={onRestart}
                        >
                            <span className="bg-blue-500 py-3 px-4 flex items-center rounded-l-md">
                                <ReplayIcon className="rotate-[-180]" />
                            </span>
                            <span className="py-3 px-6">Try Again</span>
                        </button>

                    )
                }
                {/* Play Again - Keep Blue as it's a standard retry color */}



                {/* Next Level - Use Green for Progression */}
                {results[0].correct >= 2 && mode !== "hard" && (
                    <button
                        className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors shadow-md overflow-hidden"
                        onClick={handleNextLevel}
                    >
                        <span className="bg-green-500 py-3 px-4 flex items-center rounded-l-md">
                            <TrendingUpIcon />
                        </span>
                        <span className="py-3 px-6">Next Level</span>
                    </button>
                )}

                {/* Back to Home - Use a Softer Gray/Teal for Neutral Action */}
                <button
                    className="flex items-center bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md transition-colors shadow-md overflow-hidden"
                    onClick={goHome}
                >
                    <span className="bg-gray-400 py-3 px-4 flex items-center rounded-l-md">
                        <HomeIcon />
                    </span>
                    <span className="py-3 px-6">Back to Home</span>
                </button>
            </div>
            {results[0].correct >= 2 && (<BadgeCompletionAnimation />)}
        </div>

    );
};

export default Results;


