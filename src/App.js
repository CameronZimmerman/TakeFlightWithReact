import React from "react";
import "./App.css";
import Editor from "./components/Editor";
import exerciseData from "./data/exerciseData"

export default class App extends React.Component {
  //keep track of our current exercise/solutions
  state = {
    exercise: 0,
    exerciseData: exerciseData,
    resultElementRef: React.createRef()
  };
  
  render() {
    const { codeContext, displayContext, exerciseInitialCode } =
      this.state.exerciseData;
    const { exercise, resultElementRef } = this.state;
    console.log(codeContext, displayContext, exerciseInitialCode)
    return (
      <div
        className="App"
        style={{
          backgroundImage: 'url("/assets/TakeFlightWithReactPageBg.png")',
        }}
      >
        {/* instance of our godot game */}
        <iframe title="game" src="/export" className="game" />
        {
          codeContext && <Editor
            ref={resultElementRef}
            code={exerciseInitialCode[exercise]}
            displayContext={displayContext[exercise]}
            context={codeContext[exercise]}
          />
        }
        <button>Submit Code</button>
      </div>
    );
  }
}
