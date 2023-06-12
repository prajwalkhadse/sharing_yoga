import React from 'react';
import './Login-Register.css'
import { useLocation, Link } from 'react-router-dom';
const Poster = () => {
    const location = useLocation()
    return (
        <>
            <section className="poster">
                <Link to="/">
                    <h1>Tuner</h1>
                </Link>
                <div>Enjoy Multiple videos <br></br>at one place</div>
                {location.pathname === "/register" ?
                    <Link to="/sign">
                        <p style={{ color: "white", fontSize: "1.9rem", marginTop: "20%", marginLeft: "8%" }}>Sign In</p>
                    </Link>
                    :
                    <Link to="/register">
                        <p style={{ color: "white", fontSize: "1.9rem", marginTop: "20%", marginLeft: "8%" }}>Register</p>
                    </Link>
                }
            </section>
        </>
    )
}

export default Poster