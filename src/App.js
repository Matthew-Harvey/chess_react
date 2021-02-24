import "./css/main.css";
import "./css/noscript.css";
import logo from "./img/icon.png";

export default function App() {
  function pracboard() {}

  return (
    <div className="App">
      <nav>
        <a href="#">Practice Board</a>
        <a href="#">2 Player</a>
        <a href="#">Vs Computer</a>
        <a href="#">Variations</a>
        <a href="#">Puzzles</a>
      </nav>
      <h2 id="main">Chess</h2>
      <img
        src={logo}
        width="10%"
        height="10%"
        style={{
          display: "block",
          margin: "auto"
        }}
      />
      <h3>test</h3>
    </div>
  );
}
