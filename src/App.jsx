// In App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link } from 'react-router-dom'; // Import Link

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello Harith, this is the main page...</h1>
        <Link to="/login">Login</Link> {/* Use Link instead of <a> */}
      </div>
    </>
  );
}

export default App;