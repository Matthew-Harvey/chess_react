import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Chess</h1>
      <h2>Play Chess Today!</h2>
    </div>
  );
}

import axios from "axios";

axios
  .all([
    axios.get("https://api.github.com/users/mapbox"),
    axios.get("https://api.github.com/users/phantomjs")
  ])
  .then((responseArr) => {
    //this will be executed only when all requests are complete
    console.log("Date created: ", responseArr[0].data.created_at);
    console.log("Date created: ", responseArr[1].data.created_at);
  });
