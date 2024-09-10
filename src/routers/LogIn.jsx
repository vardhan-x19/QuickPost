import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform validation or call an authentication service here
        if (email === '' || password === '') {
            setError('Please fill in all fields.');
        } else {
            setError('');
            // Handle successful login here
            console.log('Logging in with', email, password);
        }
    };

    return (
        <div className="login-component">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
            <style jsx>{`
                .login-component {
                    
                    width: 100%;
                    max-width: 400px;
                    margin: 0 auto;
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    padding-block:5vh;
                    margin-block:5vh;
                }
                .login-component h2 {
                    font-size: 24px;
                    margin-bottom: 20px;
                    color: #333;
                    text-align: center;
                }
                .form-group {
                    margin-bottom: 15px;
                }
                .form-group label {
                    display: block;
                    font-size: 14px;
                    margin-bottom: 5px;
                    color: #555;
                }
                .form-group input {
                    width: 100%;
                    padding: 8px;
                    font-size: 14px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                .error-message {
                    color: red;
                    font-size: 14px;
                    margin-bottom: 10px;
                    text-align: center;
                }
                .login-button {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #007bff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .login-button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
};

export default Login;
