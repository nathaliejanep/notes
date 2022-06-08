import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Notes from './components/notes';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Notes</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/notes'>Notes</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/notes' element={<Notes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
