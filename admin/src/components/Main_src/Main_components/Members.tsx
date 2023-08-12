import React, { useEffect, useState } from "react";
import "./Members.css";
import Nav from '../../nav';
import axios from "axios";

function App() {

    let [UserList, setUserList] = useState<string[]>([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/users", { }).then((res) => { 
        console.log(res.data.UserIdList);
        setUserList(res.data.UserIdList);
        }); 
    }, []);
    return (
        <div className ='MainPage'>
            <Nav/>

            <div className="MembersMain">
                <div className='MembersBorderBox'>
                    <div className='MembersNameBox'>
                        <span className='MembersUsername_title'> Admin</span>
                        <hr className="MembersBorderLine"/>
                        <br />
                        {UserList.map((it)=>(
                        <div>
                            <span className='MembersUsername'> {it} </span>
                            <hr className="MembersBorderLine_small"/>
                        </div>
                        ))}
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default App;