import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [online, setOnline] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //If localstorage exists go to loggedin
  const lsID = localStorage.getItem('ID');
  useEffect(() => {
    if (lsID) {
      setOnline(true);
    }
  }, []);

  // If fetched status ok - set ls and online
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        const status = res.data.status;
        const getId = res.data.result[0].id;

        if (status === 'wrong') {
          setError(true);
        } else if (status === 'ok') {
          setOnline(true);
          setError(false);
          localStorage.setItem('ID', getId);
        }
      });

    e.target.reset();
  };

  const signOut = () => {
    localStorage.removeItem('ID');
    setOnline(false);
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
  const renderOnline = (
    <div>
      <button onClick={signOut}>Sign out</button>
      <ul>
        <li>
          <Link to='/getnotes'>All Notes</Link>
        </li>
        <li>
          <Link to='/createnote'>Add New Note</Link>
        </li>
      </ul>
    </div>
  );
  return (
    <div className='maincontainer'>
      <div>{online ? renderOnline : renderForm}</div>
      <div>
        {error ? <p>Invalid username or password</p> : <p>Welcome to Log In</p>}
      </div>
    </div>
  );
};

export default Login;
