import { useState } from "react";
import lucky from "../assets/lucky.gif";

const dialogue = {
  intro: {
    text: "Hi! Long time no see",
    choices: {
      yes: "missed",
      no: "angry"
    }
  },

  missed: {
    text: "I missed you so much, did you miss me?",
    choices: {
      yes: "happy_end",
      no: "sad_end"
    }
  },

  angry: {
    text: "Liar, it's been ages!",
    choices: {
      yes: "apology",
      no: "ignore"
    }
  },

  happy_end: {
    text: "Yay! Let's search the garden together!"
  },

  sad_end: {
    text: "Aww... maybe another time."
  },

  apology: {
    text: "Hmm... I forgive you, but don't disappear again!"
  },

  ignore: {
    text: "..."
  }
};

function Game() {
  const [scene, setScene] = useState("intro");

  const current = dialogue[scene];

  return (
    <div className="game">
      <img src={lucky} alt="Cat" className="character" />

      <div className="dialogue-box">
        <h2>Lucky</h2>
        <p>{current.text}</p>

        <div className="choices">
          {current.choices?.yes && (
            <button onClick={() => setScene(current.choices.yes)}>
              Yes
            </button>
          )}

          {current.choices?.no && (
            <button onClick={() => setScene(current.choices.no)}>
              No
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;