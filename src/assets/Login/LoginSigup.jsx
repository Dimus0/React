import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import './LoginSignup.css';

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext);

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Log In</h2>
                <form onSubmit={loginUser}>
                    <input type="text" name="username" placeholder="Enter Username" required />
                    <input type="password" name="password" placeholder="Enter Password" required />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;