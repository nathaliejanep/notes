import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [online, setOnline] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const lsID = localStorage.getItem('ID');

  useEffect(() => {
    if (lsID) {
      setOnline(true);
    }
  }, []);

  const signOut = () => {
    localStorage.removeItem('ID');
    navigate('/');
    setOnline(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        const status = res.data.status;

        if (status === 'wrong') {
          setError(true);
        } else if (status === 'ok') {
          setOnline(true);
          setError(false);

          const getId = res.data.result[0].id;
          localStorage.setItem('ID', getId);
        }
      });

    e.target.reset();
  };

  const renderForm = (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleLogin} className='login-form'>
        <div className='container'>
          <label htmlFor='username'>Username:</label>
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
    <nav>
      <button onClick={signOut} className='logout-btn'>
        Sign out
      </button>
      <br />
      <Link to='/getnotes'>All Notes</Link>
      <br />
      <Link to='/createnote'>Add New Note</Link>
    </nav>
  );

  return (
    <div>
      <div>{online ? renderOnline : renderForm}</div>
      <div>{error ? <p>Invalid username or password</p> : null}</div>
    </div>
  );
};

export default Login;
