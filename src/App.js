import React from "react";
import "./App.css";
import Editor from "./components/Editor";
import exerciseData from "./data/exerciseData";

export default class App extends React.Component {
  //references to game instance and result from user inputted code
  gameInstance = React.createRef();
  resultElementRef = React.createRef();

  state = {
    exercise: 0,
    gameStarted: true,
  };

  // here we will grab specific code to evaluate the users submission, and run it
  handleCodeSubmit() {
    let correct = null;
    // grab the evaluation code for the current exercise
    const evalCode = exerciseData.solutionEvalCode[this.state.exercise];
    // in evalCode we query dom elements in our ref, check their properties, and set correct to true or false
    // eslint-disable-next-line
    eval(evalCode);
    console.log(this.gameInstance)
    this.gameInstance.current.contentWindow.postMessage(correct);
  }

  render() {
    const { codeContext, displayContext, exerciseInitialCode } = exerciseData;
    const { exercise, gameStarted } = this.state;

    return (
      <div
        className="App"
        style={{
          backgroundImage: 'url("/assets/TakeFlightWithReactPageBg.png")',
        }}
      >
        {/* instance of our godot game */}
        <iframe
          ref={this.gameInstance}
          title="game"
          src="/export"
          className="game"
        />
        <section className={gameStarted ? "" : "hidden"}>
          {codeContext && (
            <Editor
              ref={this.resultElementRef}
              code={exerciseInitialCode[exercise]}
              displayContext={displayContext[exercise]}
              context={codeContext[exercise]}
            />
          )}
          <button onClick={() => this.handleCodeSubmit()}>Manifest Code</button>
        </section>
      </div>
    );
  }
}
