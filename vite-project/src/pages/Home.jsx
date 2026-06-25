import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="menu">
  <h1>🌸 Cozy Quest</h1>

  <div className="button-area">
    <Link to="/game">
      <button className="pulse">Start Game</button>
    </Link>
  </div>
</div>
  );
}

export default Home;