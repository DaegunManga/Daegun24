import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

function App() {
  let [id, setId] = useState<string>("");
  let [pw, setPw] = useState<string>("");
  const [button, setButton] = useState(true);

  axios.post("http://localhost:3001/login", { setId, setPw }).then((res) => {
    console.log(res.data);
  });

  return (
    <div className="login_main">
      <h1 className="login_title">Daegun24 Admin page</h1>
      <div className="login_form">
        <label>ID</label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label className="login_pw_label">Password</label>
        <input
          type="text"
          name="pw"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <button className="login_btn">Login</button>
      </div>
      <div className="login_explain">
        <p>Daegun24 admin page login</p>
      </div>
    </div>
  );
}

export default App;
