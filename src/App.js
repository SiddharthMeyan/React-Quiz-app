import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { QuestionCard } from "./components/QuestionCard";

function App() {
  const [questions] = useState([
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
    {
      q: "How many copies of The Ultimate Guide to Throwing a Garden Party by James Trickington did Jim sell?",
      o1: 1,
      o2: 8,
      o3: 0,
      o4: 29,
    },
    {
      q: "What political position did Angela’s first husband hold?",
      o1: "State senator",
      o2: "U.S. senator",
      o3: "Congressman",
      o4: "Dancer",
    },
    {
      q: "In the episode `Back From Vacation,` Michael returns to the office from a trip to Jamaica with:",
      o1: "New Haircut",
      o2: "DreadLocks",
      o3: "Beads in his hairs",
      o4: "Tom Hanks tattoo",
    },
  ]);

  const [rightAnswer] = useState(["o2", "o4", "o1", "o1", "o3"]);
  const [userAnswer, setuserAnswer] = useState([]);

  const handleSubmit = () => {
    checkAnswers();
  };

  const checkAnswers = async () => {
    // e.target.checked = false;
    let myinc = 0;
    rightAnswer.forEach((answer, index) => {
      if (answer === userAnswer[index]) {
        myinc = myinc + 1;

        console.log(myinc);
      } else {
        console.log("wrong");
      }
    });
    alert(`Your Score is ${myinc}/${rightAnswer.length}`);
  };

  return (
    <div className="App">
      <Navbar />
      {questions.map((question, index) => (
        <QuestionCard
          key={index}
          q={question}
          index={index}
          setuserAnswer={setuserAnswer}
          userAnswer={userAnswer}
        />
      ))}
      <button
        type="submit"
        onClick={handleSubmit}
        className="btn btn-primary mb-4"
      >
        Submit
      </button>
    </div>
  );
}

export default App;
