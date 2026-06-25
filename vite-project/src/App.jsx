import { useState } from "react";
import "./App.css";
function App() {
  const [xp, setXp] = useState(0); //stores points

  // Level system
  const level = Math.floor(xp / 30); //every level goes up by 50

  
  const plants = ["🌱", "🌿", "🌳"]; //what it changes to every level
  const plant = plants[Math.min(level, plants.length - 1)]; //length as in index(emojis)

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>🌸 Cozy Quest</h1>

      <h2 style={{ fontSize: "60px" }}>{plant}</h2>

      <p>XP: {xp}</p>
      <p>Level: {level}</p>

      <button
        onClick={() => setXp(xp + 10)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        🌟 Earn XP
      </button>
    <br/>
    <br/>
    <br/>

    <button
      >
        Start Game ?
      </button>
    </div>
  );
}

export default App;