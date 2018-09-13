import React, { Component } from "react";
import "./App.css";
import InsertForm from "components/InsertForm";
import ProblemList from "components/ProblemList";

class App extends Component {
  state = {
    problems: []
  };

  componentDidMount() {
    let localStorageProblems = JSON.parse(localStorage.getItem("problems"));
    if (!localStorage.getItem("problems")) {
      this.setState({
        problems: []
      });
      return;
    }
    this.setState({
      problems: localStorageProblems
    });
  }

  handleSubmit = problem => {
    let problems = this.state.problems.concat(problem);

    localStorage.setItem("problems", JSON.stringify(problems));

    this.setState({
      problems: this.state.problems.concat(problem)
    });
  };

  handleRemoveProblems = () => {
    localStorage.setItem("problems", JSON.stringify([]));
    window.location.reload();
  };

  handleShuffleSelections = () => {
    const { handleShuffle } = this;
    const { problems } = this.state;

    let newProblems = problems.map((problem, i) => {
      return {
        title: problem.title,
        selections: handleShuffle(problem.selections)
      };
    });

    // console.log(newProblems);

    localStorage.setItem("problems", JSON.stringify(newProblems));

    this.setState({
      problems: newProblems
    });
    // window.location.reload()
  };

  handleShuffle = selections => {
    for (let i = selections.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selections[i], selections[j]] = [selections[j], selections[i]];
    }
    return selections;
  };

  handleShuffle = problems => {
    for (let i = problems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [problems[i], problems[j]] = [problems[j], problems[i]];
    }
    return problems;
  };

  render() {
    const { problems } = this.state;
    const {
      handleSubmit,
      handleRemoveProblems,
      handleShuffleSelections
    } = this;
    return (
      <div className="wrapper">
        <button className="clearButton" onClick={handleRemoveProblems}>
          모든 문제 지우기
        </button>
        <button className="clearButton" onClick={handleShuffleSelections}>
          사지선다 랜덤
        </button>
        <InsertForm onSubmit={handleSubmit} />
        <ProblemList problems={problems} />
      </div>
    );
  }
}

export default App;
