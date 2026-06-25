import { useState } from "react";
import lucky from "../assets/lucky.gif";
import bgMusic from "../assets/bg-music.mp3";

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
      yes: "happy_end",
      no: "sad_end"
    }
  },

  happy_end: {
    text: "I know... Do you like my new place?",
    choices: {
      yes: "thanks",
      no: "sad_end"
    }
  },

  sad_end: {
    text: "Shady.. I love you too"
  },

  thanks: {
    text: "Thank you oh and by the way I love you!"
  }
};


function Game() {
  const [scene, setScene] = useState("intro");

  const current = dialogue[scene];

  return (
    <div className="game">
      <img src={lucky} alt="Cat" className="character" />
<audio
  src={bgMusic}
  autoPlay
  loop
  muted={false}
/>

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