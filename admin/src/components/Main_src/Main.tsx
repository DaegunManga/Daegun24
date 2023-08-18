import React from "react";
import "./Main.css";
import Nav from "../nav";
import axios from "axios";

function App() {
  // axios.get("http://localhost:8000/api/users", { }).then((res) => {
  //   console.log(res.data);

  // });

  return (
    <div className="MainPage">
      <Nav />
      <h1 className="Main_title">Daegun24 Admin page</h1>
    </div>
  );
}

export default App;
