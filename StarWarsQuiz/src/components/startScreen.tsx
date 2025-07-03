type StartScreenProps = {
  onStart: () => void;
};

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <>
      <h1 className="text-purple font-orbitron font-extrabold text-5xl">
        Welcome to the Star Wars Quiz
      </h1>
      <h2 className="text-purple font-orbitron font-extrabold text-3xl">
        Click on the button to start!
      </h2>
      <button
        className="bg-blue text-red border-0 rounded-4xl h-16 w-48 p-1.5 text-3xl font-orbitron font-bold cursor-pointer hover:bg-blue_hover hover:text-red_hover"
        onClick={onStart}
      >
        CLICK ME
      </button>
    </>
  );
}

export default StartScreen;
