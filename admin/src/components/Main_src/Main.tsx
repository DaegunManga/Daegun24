import React from "react";
import "./Main.css";
import Nav from "../nav";
import axios from "axios";

function App() {  

  axios.get("http://localhost:8000/api/users", { }).then((res) => { 
    console.log(res.data);
    
  }); 


  return (
    <div className = 'MainPage'>
      <Nav />
adsadsadsa
    </div>
  );
}

export default App;
