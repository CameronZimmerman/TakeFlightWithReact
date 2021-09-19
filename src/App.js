import React from "react";
import "./App.css";

export default class App extends React.Component {
  //keep track of our current exercise/solutions
  state = {
    exercise: 0,
    exerciseData: null
  };

  async componentDidMount() {
    const response = await fetch("exercise_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const exerciseData = await response.json();
    this.setState({ exerciseData });
    console.log(exerciseData)
  }

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: 'url("/assets/TakeFlightWithReactPageBg.png")',
        }}
      >
        {/* instance of our godot game */}
        <iframe title="game" src="/export" className="game" />
      </div>
    );
  }
}
