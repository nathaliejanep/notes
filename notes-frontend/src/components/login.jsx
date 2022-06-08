import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [online, setOnline] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // If localstorage exists go to loggedin
  // const lsID = localStorage.getItem('ID');
  //   if (lsID) {
  //     return <LoggedIn />;
  //   }

  // If fetched status ok - set ls and online
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data.status);
        if (res.data.status === 'wrong') {
          setError(true);
        } else if (res.data.status === 'ok') {
          setOnline(true);
          setError(false);
        }
      });

    e.target.reset();
  };

  const renderForm = (
    <div className='wrapper'>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <label htmlFor='username'>Email:</label>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input type='submit' placeholder='Submit' value='LOG IN' />
        </div>
      </form>
    </div>
  );

  return (
    <div className='maincontainer'>
      <div>{online ? 'Hi you are online' : renderForm}</div>
      <div>
        {error ? <p>Invalid username or password</p> : <p>Welcome to Log In</p>}
      </div>
    </div>
  );
};

export default Login;
