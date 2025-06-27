import "../styles/Question.css";

type QuestionProps = {
  question: string;
  alternative: string[];
};

function Question({ question, alternative }: QuestionProps) {
  return (
    <>
      <h1>{question}</h1>
      <div className="alternatives">
        {alternative.map((answer, index) => (
          <button className="alternative-button" key={index}>
            {answer}
          </button>
        ))}
      </div>
    </>
  );
}

export default Question;
