import StartScreen from "./components/startScreen";
import Quiz from "./components/Quiz";
import { useState } from "react";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <>
      {quizStarted ? (
        <Quiz />
      ) : (
        <StartScreen onStart={() => setQuizStarted(true)} />
      )}
    </>
  );
}

export default App;
