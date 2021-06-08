import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { QuestionCard } from "./components/QuestionCard";

function App() {
  const [questions, setQuestions] = useState([
    {
      q: "How many seasons of The Office starred Steve Carell?",
      o1: 5,
      o2: 7,
      o3: 9,
      o4: 11,
    },
    {
      q: "The Office is set in a fictitious paper company named ________.",
      o1: "Paper-Max",
      o2: "Sabre",
      o3: "Prince Paper",
      o4: "Dunder-Mifflin",
    },
  ]);

  const [rightAnswer, setRightAnswer] = useState(["o2", "o4"]);
  const [scores, setScores] = useState(0);
  const [userAnswer, setuserAnswer] = useState([]);

  const checkAnswers = (e) => {
    e.target.checked = false;

    rightAnswer.forEach((answer, index) => {
      if (answer === userAnswer[index]) {
        setScores(scores + 1);
      }
    });
    showRes();
  };

  const showRes = () => {
    alert(`your Score is :${scores} `);
    setScores(0);
  };
  return (
    <div className="App">
      <Navbar />
      {questions.map((question, index) => (
        <QuestionCard
          q={question}
          index={index}
          setuserAnswer={setuserAnswer}
          userAnswer={userAnswer}
        />
      ))}
      <button
        type="submit"
        onClick={(e) => checkAnswers(e)}
        className="btn btn-primary"
      >
        Submit
      </button>
    </div>
  );
}

export default App;
