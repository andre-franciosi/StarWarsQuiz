import "../styles/startScreen.css";

type StartScreenProps = {
  onStart: () => void;
};

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <>
      <h1>Welcome to the Star Wars Quiz</h1>
      <h2>Press the button to start!</h2>
      <button className="start-button" onClick={onStart}>
        CLICK ME
      </button>
    </>
  );
}

export default StartScreen;
