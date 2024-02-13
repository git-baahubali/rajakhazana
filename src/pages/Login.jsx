import React, { useState } from 'react';
import { supabase } from '../../supabaseClient'; // Adjust the import path as necessary
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";


function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn({ email });
    if (error) console.error('Error signing in:', error.message);
    else alert('Check your email for the login link!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Raja Khazana</h2>
        {/* <p>Enter your email below to create  account</p>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign In with Email</button>
        </form>
        <div style={styles.divider}>OR CONTINUE WITH</div> */}
        <SignInButton><button style={styles.buttonSocial} className='button'>
          {/* <img src="github-icon.svg" alt="GitHub" style={styles.icon} /> GitHub */}
            Sign In 
        </button></SignInButton>
        {/* <small>
          By clicking continue, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
        </small> */}
      </div>
    </div>
  );
}

// Add proper paths for terms and privacy policy routes

export default Login;

// Add proper styling based on your application's theme

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0c0a0a', // Adjust background color as needed
  },
  card: {
    background: 'black',
    padding: '40px',
    borderRadius: '8px',
    width: '400px', // Adjust width as needed
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '16px',
    fontSize:'2rem',
    fontWeight:'bold'
  },
  form: {
    margin: '20px 0',
  },
  input: {
    padding: '10px',
    marginBottom: '20px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #4f4e4e',
  },
  button: {
    padding: '10px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #4f4e4e',
    backgroundColor: '#040303', // Adjust button color as needed
    color: 'white',
    cursor: 'pointer',
  },
  buttonSocial: {
    padding: '10px',
    width: '100%',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#040303', // Adjust button color as needed
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8px',
  },
  icon: {
    marginRight: '8px',
  },
  divider: {
    margin: '20px 0',
    color: '#ccc',
  },
};
