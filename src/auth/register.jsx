import React, { useState } from 'react';
import '../styles/css/tabler.min.css';
import '../styles/css/tabler-flags.min.css';
import '../styles/css/tabler-socials.min.css';
import '../styles/css/tabler-payments.min.css';
import '../styles/css/tabler-vendors.min.css';
import '../styles/css/tabler-marketing.min.css';
import '../styles/css/demo.min.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://subend.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Removed email
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed due to a server error.');
      }

      const data = await response.json();

      if (data.message) {
        alert(data.message);
        window.location.href = '/login';
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration: ' + error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="d-flex flex-column">
      <div className="page">
        <div className="container container-tight py-4">
          <div className="text-center mb-4">
            <a href="." className="navbar-brand navbar-brand-autodark">
              {/* Add your logo here if needed */}
            </a>
          </div>
          <div className="card card-md">
            <div className="card-body">
              <h2 className="h2 text-center mb-4">Create an account</h2>
              <form id="registerForm" onSubmit={handleRegister} autoComplete="off" noValidate>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Password</label>
                  <div className="input-group input-group-flat">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      id="password"
                      className="form-control"
                      placeholder="Your password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="input-group-text">
                      <a
                        href="#"
                        className="link-secondary"
                        title="Show password"
                        data-bs-toggle="tooltip"
                        onClick={togglePasswordVisibility}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-1"
                        >
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="form-footer">
                  <button type="submit" className="btn btn-primary w-100">
                    Create new account
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center text-secondary mt-3">
              Already have an account? <a href="/login" tabIndex="-1">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;