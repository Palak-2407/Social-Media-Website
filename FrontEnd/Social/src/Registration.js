import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registeration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleForm = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post("http://localhost:3000/register", {
                username: username,
                password: password
            });
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                <h1 style={headingStyle}>Registration:</h1>
                <form onSubmit={handleForm} style={formStyle}>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Username:</label>
                        <input type='text' value={username} onChange={handleUsername} style={usernameInputStyle} />
                    </div>
                    <div style={inputRowStyle}>
                        <label style={labelStyle}>Password:</label>
                        <input type='password' value={password} onChange={handlePassword} style={passwordInputStyle} />
                    </div>
                    <div style={buttonContainerStyle}>
                        <button style={buttonStyle}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
};

const boxStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: '20px',
    borderRadius: '8px',
};

const headingStyle = {
    textAlign: 'center',
    color: '#fff'
};

const formStyle = {
    textAlign: 'center',
    color: '#fff'
};

const inputRowStyle = {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
};

const labelStyle = {
    marginRight: '10px',
    width: '100px',
};

const usernameInputStyle = {
    padding: '5px',
    width: '300px',
};

const passwordInputStyle = {
    padding: '5px',
    width: '300px',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};
