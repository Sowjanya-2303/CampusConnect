import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Import styles

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        branch: "DS",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Branch:</label>
                    <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                    >
                        <option value="IT">IT</option>
                        <option value="DS">DS</option>
                        <option value="IOT">IOT</option>
                        <option value="AIML">AIML</option>
                        <option value="CSE">CSE</option>
                    </select>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
