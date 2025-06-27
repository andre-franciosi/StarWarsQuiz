import { useState } from "react";
import Question from "./Question";
import "../styles/Quiz.css";

type QuestionData = {
  question: string;
  alternatives: string[];
};

const questions: QuestionData[] = [
  {
    question: "Qual o nome do planeta natal do Luke Skywalker?",
    alternatives: ["Tatooine", "Naboo", "Alderaan", "Hoth"],
  },
  {
    question: "Quem é o pai de Luke?",
    alternatives: ["Obi-Wan", "Yoda", "Anakin", "Han Solo"],
  },
  {
    question: "Qual o nome da nave do Han Solo?",
    alternatives: [
      "X-Wing",
      "Millennium Falcon",
      "TIE Fighter",
      "Star Destroyer",
    ],
  },
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const isQuizFinished = currentQuestionIndex >= questions.length;

  return (
    <>
      <div className="question">
        {!isQuizFinished ? (
          <>
            <Question
              question={questions[currentQuestionIndex].question}
              alternative={questions[currentQuestionIndex].alternatives}
            />
            <button onClick={handleNext}>Next</button>
          </>
        ) : (
          <h1>Quiz finalizado!</h1>
        )}
      </div>
    </>
  );
}

export default Quiz;
