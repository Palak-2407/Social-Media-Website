import React from 'react';
import './App.css';
import imageSrc from './Logo.png'; 

export default function SocialMediaApp() {
    return (
        <div className="App" style={styles.pageBackground}>
            <div className="popup-container">
                <div className="popup-content">
                    <div className="photo-container">
                        <img src={imageSrc} alt="Your Photo" className="photo" />
                    </div>
                    <div className="text-container">
                    <h1 className="happening-now">Happening now</h1>
                        <h3>Join today</h3>
                        <a href="/register">
                        <button className="create-account-button">Create Account</button>
                        </a>
                        <p>Already have an account?</p>
                        <a href="/login">
                        <button className="sign-in-button">Sign In</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}                                   

const styles = {
    pageBackground: {
        backgroundColor: 'black', 
    },
};
