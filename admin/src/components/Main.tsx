import React from "react";
import "./Main.css";
import logo from "./img/logo_rectangle.png";
import { Link } from "react-router-dom";
import user_icon from "./img/user-solid.svg";
import button_icon from "./img/bullhorn-solid.svg";

function App() {
  return (
    <div className = 'MainPage'>
      <div className = 'LeftBar'>

        <div className ='Text'>
          <span className='MainText'> <br /> &nbsp; &nbsp; &nbsp; &nbsp; Admin Page </span>
        </div>
        <br />
        <hr className="bold_line"/>
        <br />

        <Link to="/from" className="Nav_Link">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className='icon' src={user_icon} alt='icon'></img><span className="Nav_Text"> &nbsp;Members</span></Link><br/>
        <br />
        <hr />
        <br />
        <Link to="/from" className="Nav_Link">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className='icon' src={button_icon} alt='icon'></img><span className="Nav_Text"> &nbsp;공지사항</span></Link><br/>
      </div>

      <div className = 'MainPage'>

      </div>
    </div>
  );
}

export default App;
