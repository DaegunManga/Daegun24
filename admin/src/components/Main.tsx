import React from "react";
import "./Main.css";
import Nav from "./nav";
import axios from "axios";

function App() {  

  axios.post("http://localhost/api/users", { }).then((res) => {
    console.log(res.data);
  });


  return (
    <div className = 'MainPage'>
      <Nav />

      <div className = 'MainPage'>
        <div></div>
      </div>
    </div>
  );
}

export default App;
