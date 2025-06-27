type QuestionProps = {
  question: string;
  alternative: string[];
};

function Question({ question, alternative }: QuestionProps) {
  return (
    <>
      <h1>{question}</h1>
      {alternative.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </>
  );
}

export default Question;
