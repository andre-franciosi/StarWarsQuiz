type QuestionProps = {
  question: string;
  alternative: string[];
  verifyAnswer: (selected: string) => void;
};

function Question({ question, alternative, verifyAnswer }: QuestionProps) {
  return (
    <>
      <h1 className="text-purple font-orbitron font-extrabold text-5xl">
        {question}
      </h1>
      <div className="grid grid-cols-2 gap-x-40 gap-y-8 justify-items-center items-center mb-7 mt-8 max-w-md mx-auto">
        {alternative.map((answer, index) => (
          <button
            className=" bg-blue text-red border-0 rounded-4xl h-24 w-56 p-1.5 text-3xl font-orbitron font-bold cursor-pointer hover:bg-blue_hover hover:text-red_hover "
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
