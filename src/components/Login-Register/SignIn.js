import { useState } from 'react';
import Poster from './Poster';
import axios from 'axios';
import './Login-Register.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const handelSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", Password);
        axios.post("https://tuner.onrender.com/login", formData)
        .then((res) => {
                console.log(res);
                localStorage.setItem("loginToken", res.data.token)
                window.alert("login Sucessful");
                navigate("/");
            }).catch((err) => {
                console.log(err)
                window.alert("invalid credential")
            })
    }
    return (<>
        <main className="sr_main">
            <Poster />
            <section className="signin">
                <form style={{marginTop:"230px"}} onSubmit={handelSubmit}>
                    <h1 style={{margin:"10%" ,marginBottom:"50px",fontSize:"3rem"}}>Sign In</h1>
                    <div style={{ margin: "3%" , fontSize:"1rem" }}>sign in to continue access pages</div><br />
                    <input type="text" placeholder="username" name='username' onChange={(e) => { SetUsername(e.target.value) }} value={username} /><br />
                    <input type="password" placeholder="Password" name='password' onChange={(e) => { SetPassword(e.target.value) }} value={Password} /><br />
                    <button id="signin_btn" type="submit">Sign in</button>
                </form>
            </section>
        </main>
    </>);
}
export default SignIn;