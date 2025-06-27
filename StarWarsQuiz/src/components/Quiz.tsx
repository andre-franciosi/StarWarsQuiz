import Question from "./Question";

function Quiz() {
  const answers = ["teste1", "teste2", "teste3", "teste4"];
  return (
    <>
      <Question question="Teste1?" alternative={answers}></Question>
    </>
  );
}

export default Quiz;
