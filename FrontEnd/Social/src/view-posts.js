import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ViewPosts() {
    const [apiData, setApiData] = useState([]);
    const [loading, isLoading] = useState(true);
    const [apiError, setApiError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('jwtToken')) {
            (async () => {
                try {
                    const response = await axios.get('http://localhost:3000/posts', {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
                        }
                    });
                    setApiData(response.data);
                    isLoading(false);
                } catch (error) {
                    setApiError(true);
                }
            })();
        } else {
            navigate('/login');
        }
    }, []);

    const displayData = apiData.map(data => (
        <div key={data.id} style={postStyle}>
            <p style={contentStyle}><span style={postIdStyle}>ID:</span> {data.id}</p>
            <p style={contentStyle}><span style={postIdStyle}>Title:</span> {data.title}</p>
            <p style={contentStyle}><span style={postIdStyle}>Content:</span> {data.content}</p>
        </div>
    ));

    if (apiError) {
        return <h1 style={errorStyle}>Something Went Wrong....</h1>;
    }
    if (loading) {
        return <h1 style={loadingStyle}>Loading....</h1>;
    }

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <a href="/createpost" style={buttonStyle}>Create Post</a>
                <h1 style={titleStyle}>Posts:</h1>
                {displayData}
            </div>
        </div>
    );
}

const pageStyle = {
    backgroundColor: '#000',
    minHeight: '100vh',
};

const containerStyle = {
    textAlign: 'center',
    marginTop: '100px',
    border: '1px solid #e1e4e8',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#333',
};

const buttonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#1da1f2',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
};

const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '20px',
};

const postStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
};

const contentStyle = {
    fontSize: '18px',
    color: '#555',
    marginBottom: '10px',
};

const postIdStyle = {
    color: '#777',
};

const loadingStyle = {
    textAlign: 'center',
    marginTop: '50px',
};

const errorStyle = {
    textAlign: 'center',
    marginTop: '50px',
    color: '#ff6347',
};

