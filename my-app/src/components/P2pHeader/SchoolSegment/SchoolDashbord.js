import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SchoolDashboard.css'; // Create and import a CSS file for styling

const SchoolDashboard = () => {
    const navigate = useNavigate();
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    const schoolName = userDetails ? userDetails.data.SCHOOL_NAME : '';
    const schoolLogo = userDetails ? userDetails.data.SCHOOL_LOGO : '';

    return (
        <div className="school-dashboard">
            <nav className="navbar">
                <div className="navbar-column logo">
                    <img src={schoolLogo} alt="School Logo" style={{ width: '50px', height: '50px' }} />
                </div>
                <div className="navbar-column school-name">
                    {schoolName}
                </div>
                <div className="navbar-column register-teacher">
                    <button onClick={() => navigate('/teacher_registration')}>
                        REGISTER TEACHER
                    </button>
                </div>
                <div className="navbar-column register-student">
                    <button onClick={() => navigate('/student_registration')}>
                        REGISTER STUDENT
                    </button>
                </div>
            </nav>
            {/* Add more content for the dashboard here */}
        </div>
    );
};

export default SchoolDashboard;