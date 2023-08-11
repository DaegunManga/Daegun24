import "./Members.css";
import Nav from '../../nav';

function App() {

    return (
        <div className ='MainPage'>
            <Nav/>

            <div className="MembersMain">
                <div className='MembersBorderBox'>
                    <div className='MembersNameBox'>
                        <span className='MembersUsername_title'> UserName</span>
                        <br />
                        <span className='MembersUsername'> LeeDowon </span>
                    </div>
                    <div className='MembersNameBox'>
                        <span className='MembersUsername_title'> UserInfo </span>
                        <br />
                        <span className='MembersUsername'> LeeDowon </span>
                    </div>
                    <div className='MembersNameBox'>
                        <span className='MembersUsername_title'> Delete </span>
                        <br />
                        <span className='MembersUsername'> LeeDowon </span>
                    </div>
                    
                    <hr className="MembersBorderLine"/>
                </div>
            </div>
        </div>
    )
}

export default App;