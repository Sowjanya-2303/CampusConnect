import React from "react";
import { FaBell, FaQuestionCircle } from "react-icons/fa"; // Importing icons
import logo from "../assets/logo.png"; // Import your logo
import collegeImage from "../assets/college.jpg"; // Import a college image
import "../styles.css"; // Importing styles

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar Menu */}
            <div className="sidebar">
                <h2>Campus Connect</h2>
                <ul>
                    <li>Student Profile</li>
                    <li>About Campus Connect</li>
                    <li>Contact Us</li>
                    <li>Logout</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="content">
                {/* Header */}
                <div className="header">
                    <h2>Dashboard</h2>
                    <img src={logo} alt="Campus Connect Logo" className="logo" />
    
                    <div className="header-icons">
                        <FaBell className="icon" title="Notifications" />
                        <FaQuestionCircle className="icon" title="Help Center" />
                    </div>
                </div>

                {/* Main Dashboard Content */}
                <div className="dashboard-content">
                    <h2>Welcome to Campus Connect</h2>
                    <img src={collegeImage} alt="College Campus" className="college-image" />
                </div>

                {/* Footer */}
                <div className="footer">
                    &copy; 2025 Campus Connect. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
