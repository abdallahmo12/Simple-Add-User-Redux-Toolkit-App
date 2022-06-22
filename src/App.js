import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  // const [ name , setName ] = useState('');
  // const [ email , setEmail ] = useState('');
  // const [ flag , setFlag ] = useState(false);


  // const addUser = (e) =>{
  //   e.preventDefault();
  //   setFlag(true);
  // }

  return (
    <div className="App">
      <Header />
      <div className='main'>
      <Sidebar  />
      <Form  />
      </div>
    </div>
  );
}

export default App;
