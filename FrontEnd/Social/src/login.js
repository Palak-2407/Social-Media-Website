import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post('http://localhost:3000/login', {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem('jwtToken', response.data.token);
        navigate('/posts');
      }
    } catch (error) {
      setLoginError('Invalid Username or Password');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={headingStyle}>Login</h1>
        <form onSubmit={handleForm} style={formStyle}>
          <div style={inputRowStyle}>
            <label style={labelStyle}>Username :</label>
            <input type="text" value={username} onChange={handleUsername} style={inputStyle} />
          </div>
          <div style={inputRowStyle}>
            <label style={labelStyle}>Password :</label>
            <input type="password" value={password} onChange={handlePassword} style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
        <h2>{loginError}</h2>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const boxStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
};

const headingStyle = {
  marginBottom: '20px',
  color: '#ffffff'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#ffffff'
};

const inputRowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const labelStyle = {
  paddingRight: '10px',
};

const inputStyle = {
  padding: '8px',
  width: '200px', 
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
};
