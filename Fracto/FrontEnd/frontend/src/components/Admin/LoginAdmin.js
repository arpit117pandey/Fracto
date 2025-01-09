import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/Admin/LoginAdmin.css';

function LoginAdmin() {
  let navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn,setLoggedIn] =useState(0);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // make a POST request to the Spring Boot API with the username and password
    fetch('http://localhost:8082/admin/verifyAdmin/'+username, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          // redirect to another page if the credentials are correct
          return navigate('/adminDashboard');
        } else {
          alert("Invali Id And Password");
        }
      });
  };

  return (
    <>
    <div className="back">
      <div className="main">
        <div className="overlay">
          <p className="sign" align="center">
            Login
          </p>
    
    <form onSubmit={handleSubmit} className='form2'>
      <label>
        
        Username:
        <input type="text" id="username"
              className="un "
              
              align="center" value={username} placeholder="Username" onChange={handleUsernameChange} />
      </label><br></br><br></br>
      <label>
      
        Password:
        <input type="password" id="password"
              className="pass"
               value={password} placeholder="Password" onChange={handlePasswordChange} />
      </label><br></br><br></br>
      <button type="submit" className="submit" align="center">Log In</button>
      {loggedIn===1 && (
      <div>
        <h2>
          Invalid Credentials.
        </h2>
      </div>
      )}
    </form>
    </div>
      </div>
    </div>
    </>
  );
}

export default LoginAdmin;
