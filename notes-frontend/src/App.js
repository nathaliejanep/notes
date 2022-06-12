import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import GetNotes from './components/getNotes';
import CreateNote from './components/createNote';
import EditNote from './components/editnote';
import Home from './components/home';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Notes</h1>
      </header>
      <Login />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/getnotes' element={<GetNotes />}></Route>
        <Route path='/createnote' element={<CreateNote />}></Route>
        <Route path='/editnote' element={<EditNote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
