import "../styles/Question.css";

type QuestionProps = {
  question: string;
  alternative: string[];
  verifyAnswer: (selected: string) => void;
};

function Question({ question, alternative, verifyAnswer }: QuestionProps) {
  return (
    <>
      <h1>{question}</h1>
      <div className="alternatives">
        {alternative.map((answer, index) => (
          <button
            className="alternative-button"
            key={index}
            onClick={() => verifyAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </>
  );
}

export default Question;
