import { useEffect, useState } from "react";
import Question from "./Question";
import axios from "axios";

type QuestionData = {
  question: string;
  alternatives: string[];
  answer: string;
};

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function Quiz() {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/questions")
      .then((response) => {
        const shuffled: QuestionData[] = shuffleArray(response.data);
        setQuestions(shuffled);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const verifyAnswer = (selected: string) => {
    const correct = questions[currentQuestionIndex].answer;
    if (selected === correct) {
      setScore((prev) => prev + 1);
    }
    handleNext();
  };

  const restartQuiz = () => {
    const reshuffled = shuffleArray(questions);
    setQuestions(reshuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const isQuizFinished = currentQuestionIndex >= questions.length;

  if (loading) {
    return <h1>Loading questions...</h1>;
  }

  return (
    <>
      <div className="question">
        {!isQuizFinished ? (
          <Question
            question={questions[currentQuestionIndex].question}
            alternative={questions[currentQuestionIndex].alternatives}
            verifyAnswer={verifyAnswer}
          />
        ) : (
          <div>
            <h1 className="text-purple font-orbitron font-extrabold text-5xl">
              Quiz Finished!
            </h1>
            <h1 className="text-purple font-orbitron font-extrabold text-5xl mt-4">
              Correct Answers: {score}
            </h1>
            <button
              className="bg-blue text-red border-0 rounded-4xl h-16 w-48 p-1.5 text-3xl font-orbitron font-bold cursor-pointer hover:bg-blue_hover hover:text-red_hover mt-4"
              onClick={restartQuiz}
            >
              Reiniciar
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Quiz;
