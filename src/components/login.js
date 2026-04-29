import React, { useState } from 'react';

export default function Login({ loggedIn }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
            loggedIn();
        } else {
            setError(true);
            setPassword('');
        }
    };

    return (
        <div className="main-section">
            <div className="sub-section">
                <div className="text-area">
                    <h3>Admin Login</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>
                            <div>Password</div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                        </label>
                        { error && <p style={{ color: 'red' }}>Incorrect password</p> }
                        <input className="submit-button" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
}
