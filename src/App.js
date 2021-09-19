import React from "react";
import "./App.css";
import Editor from "./components/Editor";

export default class App extends React.Component {
  //keep track of our current exercise/solutions
  state = {
    exercise: 0,
    exerciseDataArrays: [],
    resultElementRef: React.createRef()
  };
  async componentDidMount() {
    const response = await fetch("exercise_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const exerciseDataArrays = await response.json();
    this.setState({ exerciseDataArrays });
  }

  render() {
    const { codeContext, displayContext, exerciseInitialCode } =
      this.state.exerciseDataArrays;
    const { exercise, resultElementRef } = this.state;
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
      </div>
    );
  }
}
