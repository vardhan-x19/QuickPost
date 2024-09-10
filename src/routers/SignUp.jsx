import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (email === '' || password === '' || confirmPassword === '') {
            setError('Please fill in all fields.');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            setError('');
            // Handle successful sign-up here
            console.log('Signing up with', email, password);
        }
    };

    return (
        <div className="signup-component">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <style jsx>{`
                .signup-component {
                    width: 100%;
                    max-width: 400px;
                    margin: 0 auto;
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    margin-block:5vh;
                }
                .signup-component h2 {
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
                .signup-button {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #28a745;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .signup-button:hover {
                    background-color: #218838;
                }
            `}</style>
        </div>
    );
};

export default SignUp;
