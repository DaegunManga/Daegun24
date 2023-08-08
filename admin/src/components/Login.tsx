import React from "react";
import "./Login.css";

function App() {
  return (
    <div className="login_main">
      <h1 className="login_title">Daegun24 Admin page</h1>
      <div className="login_form">
        <label>ID</label>
        <input type="text" />
        <label className="login_pw_label">Password</label>
        <input type="password" />
      </div>
      <div className="login_explain">
        <p>Daegun24 admin page login</p>
      </div>
    </div>
  );
}

export default App;
