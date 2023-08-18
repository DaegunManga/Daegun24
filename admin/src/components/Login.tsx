import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, KeyboardEvent } from "react";

import logo from "./img/logo_rectangle.png";

function App() {
  let [id, setId] = useState<string>("");
  let [pw, setPw] = useState<string>("");
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  const onClickLogin = () => {
    axios
      .post("http://localhost:8000/users/login/", {
        username: id,
        password: pw,
      })
      .then((res) => {
        if (res.data.token) {
          navigate("/Main");
        }
      });
  };

  return (
    <div className="login_back">
      <div className="login_container">
        <div className="login_logo">
          <img src={logo} alt="logo" className="login_logo_dg24" />
        </div>
        <div className="login_main">
          <h1 className="login_title">Admin page</h1>
          <form>
            <div className="login_form">
              <label className="login_label">ID</label>
              <input
                type="text"
                name="id"
                value={id}
                onChange={handleId}
                placeholder="ID"
                className="login_input"
              />
              <label className="login_label">Password</label>
              <input
                type="text"
                name="pw"
                value={pw}
                onChange={handlePw}
                placeholder="Password"
                onKeyDown={handleKeyPress}
                className="login_input"
              />
              <button className="login_btn" onClick={onClickLogin}>
                Login
              </button>
            </div>
          </form>
          <div className="login_explain">
            <p>Daegun24 admin page</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
