import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('jwtToken')) {
            navigate('/login');
        }
    }, []);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleContent = (event) => {
        setContent(event.target.value);
    };

    const handleFormData = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(
                'http://localhost:3000/posts',
                {
                    title: title,
                    content: content,
                },
                {
                    headers: {
                        authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
                    },
                }
            );
            if (response.status === 201) {
                navigate('/posts');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleVideoRedirect = () => {
        const videoUrl = 'https://drive.google.com/file/d/1-m443Oo_itaymSh--Ox3TqRhF7VrnBRp/view?usp=drive_link';
        window.location.href = videoUrl;
    };

    return (
        <div style={styles.container}>
            <button onClick={handleVideoRedirect} style={styles.videoButton}>
                About
            </button>
            <div style={styles.background}>
                <div style={styles.boxContainer}>
                    <h1 style={styles.heading}>Create Post</h1>
                    <form onSubmit={handleFormData} style={styles.form}>
                        <div style={styles.inputRow}>
                            <label style={styles.label}>Title:</label>
                            <input type="text" value={title} onChange={handleTitle} style={styles.input} />
                        </div>
                        <div style={styles.inputRow}>
                            <label style={styles.label}>Content:</label>
                            <input type="text" value={content} onChange={handleContent} style={styles.input} />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button type="submit" style={styles.button}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    background: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    boxContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    label: {
        width: '100px',
        marginBottom: '10px',
    },
    inputRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
    },
    input: {
        padding: '5px',
        width: '300px',
    },
    button: {
        padding: '8px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    videoButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        padding: '8px 20px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};
