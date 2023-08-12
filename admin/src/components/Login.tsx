import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  let [id, setId] = useState<string>("");
  let [pw, setPw] = useState<string>("");
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleInputId = (e: any) => {
    setId(e.target.value);
  };

  const handleInputPw = (e: any) => {
    setPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post("http://localhost:8000/users/login/", {
        username: setId,
        password: setPw,
      })
      .then((res) => {
        if (res.data.token) {
          navigate("/Main");
        }
      });
  };

  return (
    <div className="login_main">
      <h1 className="login_title">Daegun24 Admin page</h1>
      <div className="login_form">
        <label>ID</label>
        <input type="text" name="id" value={id} onChange={handleInputId} />
        <label className="login_pw_label">Password</label>
        <input type="text" name="pw" value={pw} onChange={handleInputPw} />
        <button className="login_btn" onClick={onClickLogin}>
          Login
        </button>
      </div>
      <div className="login_explain">
        <p>Daegun24 admin page login</p>
      </div>
    </div>
  );
}

export default App;
