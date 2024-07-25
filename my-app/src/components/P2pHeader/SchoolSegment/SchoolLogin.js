// SchoolLogin.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../popups/LoginPopup.css'; // Update the path as necessary

const SchoolLogin = () => {
    let navigate = useNavigate();

    function handleLogin() {
        navigate('/p2pheader'); // Adjust the path as needed
    }

    return (
        <div className="loginPopup">
            <div className="loginPopupContainer">
                <div className='widget-container'>
                    <div className="loginHeader">
                        <h2 style={{marginLeft:'0%'}}>SCHOOL LOGIN</h2>
                    </div>
                    <div className="loginBody">
                        <div className="inputGroup inputIcon">
                            <h4 className='space widget-align-left'>USER ID</h4>
                            <i className="fas fa-user widget-align-left"></i>
                            <input type="text" placeholder="" />
                        </div>
                        <div className="inputGroup inputIcon">
                            <h4 className='space widget-align-left'>PASSWORD</h4>
                            <i className="fas fa-lock widget-align-left"></i>
                            <input type="password" placeholder="" />
                        </div>
                        <div className="button-grid">
                            <button className="forgotPassword widget-align-left">forgot password</button>
                            <button className="loginButton widget-align-right" onClick={handleLogin}>LOGIN</button>
                        </div>
                    </div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                </div>
            </div> 
        </div>
    );
};

export default SchoolLogin;