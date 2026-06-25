import { useState } from "react";

function App() {
  const [xp, setXp] = useState(0);

  // Level system
  const level = Math.floor(xp / 50);

  // Plant growth
  const plants = ["🌱", "🌿", "🌳"];
  const plant = plants[Math.min(level, plants.length - 1)];

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
    </div>
  );
}

export default App;