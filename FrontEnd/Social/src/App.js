import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login'; // Import your Login component
import App from './App'; // Import your App component

function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/app" element={<App />} />
                {/* Other routes */}
            </Routes>
        </Router>
    );
}

export default MainRouter;
