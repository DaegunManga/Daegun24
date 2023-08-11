import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import user_icon from "./img/user-solid.svg";
import button_icon from "./img/bullhorn-solid.svg";

function App() {
  return (

      <div className = 'LeftBar'>

        <div className ='Text'>
          <span className='MainText'> <br /> &nbsp; &nbsp; &nbsp; &nbsp; Admin Page </span>
        </div>
        <br />
        <hr className="bold_line"/>
        <br />

        <Link to="/Main/members" className="Nav_Link">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className='icon' src={user_icon} alt='icon'></img><span className="Nav_Text"> &nbsp;Members</span></Link><br/>
        <br />
        <hr />
        <br />
        <Link to="/Main/notions" className="Nav_Link">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className='icon' src={button_icon} alt='icon'></img><span className="Nav_Text"> &nbsp;공지사항</span></Link><br/>
      </div>

  );
}

export default App;
