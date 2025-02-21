import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Faculty');
    const [error, setError] = useState(null);

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const uri = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = { email, password, role };

        try {
            const response = await fetch(`${uri}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Login Successful!');
                console.log(result);

                // Redirect to the home page
                navigate('/home');
            } else {
                setError(result.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('Something went wrong. Please try again later.');
        }
    };

    // Internal CSS styles
    const styles = {
        loginText: {
            color: "black",
            fontFamily: '"Inter", sans-serif',
        },
        loginContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#001a4d",
        },
        loginForm: {
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
            textAlign: "center",
        },
        loginDropdown: {
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
        },
        inputField: {
            width: "95%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
        },
        forgotPassword: {
            display: "block",
            marginBottom: "15px",
            fontSize: "12px",
            color: "#007BFF",
            textDecoration: "none",
        },
        loginButton: {
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
        loginButtonHover: {
            backgroundColor: "#0056b3",
        },
        errorMessage: {
            color: "red",
            fontSize: "14px",
        },
    };

    return (
        <div style={styles.loginContainer}>
            <form onSubmit={handleSubmit} style={styles.loginForm}>
                <h2 style={styles.loginText}>LOGIN</h2>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={styles.loginDropdown}
                >
                    <option value="Faculty">Faculty</option>
                    <option value="Student">Student</option>
                </select>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.inputField}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.inputField}
                />
                <a href="/forgot-password" style={styles.forgotPassword}>
                    Forgot Password??
                </a>
                {error && <p style={styles.errorMessage}>{error}</p>}
                <button
                    type="submit"
                    style={styles.loginButton}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.loginButtonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.loginButton.backgroundColor)}
                >
                    LOGIN
                </button>
            </form>
        </div>
    );
};

export default Login;
