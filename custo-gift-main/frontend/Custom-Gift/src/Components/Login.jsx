import React, { useState, useEffect } from 'react';
import '../Asserts/css/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [log, setLog] = useState({ email: "", password: "" });
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [auth, setAuth] = useState(true);
  const [error, setError] = useState({ email: "", password: "", empty: "" });
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/users");
        console.log("Fetched users:", response.data);
        setUserData(response.data);
        setFetchError("");
      } catch (error) {
        setFetchError("Error fetching user data.");
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLog((prevLog) => ({ ...prevLog, [name]: value }));
  };

  const handleSignup = async () => {
    try {
      const response = {
        name: user.name,
        email: user.email,
        password: user.password,
      };
      await axios.post("http://localhost:8080/user", response, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("User added");
      alert("Signup successful! Please login.");
      handleToggle();
    } catch (exception) {
      console.error("Error during signup:", exception);
    }
  };

  const validate = () => {
    let hasError = false;
    let newError = { email: "", password: "", empty: "" };

    if (!user.name || !user.email || !user.password) {
      hasError = true;
      newError.empty = "Please fill all the fields.";
    }

    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!user.email.match(validEmailRegex)) {
      hasError = true;
      newError.email = "Invalid email address!";
    }

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/;
    if (!passwordRegex.test(user.password)) {
      hasError = true;
      newError.password = "Password should be 6-16 characters long and include at least one number and one special character.";
    }

    setError(newError);
    if (!hasError) {
      handleSignup();
    }
  };

  const handleLogin = () => {
    const userExists = userData.some((u) => u.email === log.email && u.password === log.password);
    if (userExists) {
      navigate('/home', { state: userData.find(u => u.email === log.email) });
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleToggle = () => {
    setAuth(!auth);
    setError({ email: "", password: "", empty: "" });
  };

  return (
    <div className='bg'>
      <div className='Log'>
        <h1>{auth ? "Signup" : "Login"}</h1>
        {auth ? (
          <>
            <label>Name</label>
            <input type='text' name='name' onChange={handleInputChange} />
            {error.empty && <p className='error'>{error.empty}</p>}
            <label>Email</label>
            <input type='email' name='email' onChange={handleInputChange} />
            {error.email && <p className='error'>{error.email}</p>}
            <label>Password</label>
            <input type='password' name='password' onChange={handleInputChange} />
            {error.password && <p className='error'>{error.password}</p>}
            <button onClick={validate}>Signup</button>
           <p>Admin login</p> <button className='li' style={{fontSize:'15px',backgroundColor:'white'}} onClick={()=>navigate('/al')}>admin login
        </button>
            <p>Existing user? <a onClick={handleToggle}>Login</a></p>
          </>
        ) : (
          <>
            <label>Email</label>
            <input type='email' name='email' onChange={handleLoginChange} />
            <label>Password</label>
            <input type='password' name='password' onChange={handleLoginChange} />
            <button onClick={handleLogin}>Login</button>
            <p>New user? <a onClick={handleToggle}>Signup</a></p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
