import React, { useState } from 'react';
import './Form.css';
import {useSelector,useDispatch} from 'react-redux';
import { addUsser } from '../redux/api';
// import {addUsser} from '../redux/userSlice';

function Form() {
    const [ name , setName ] = useState('');
    const [ email , setEmail ] = useState('');

    const {loading , error} = useSelector(state => state.user)

    const dispatch = useDispatch();

    const handleChange = (e) => {
        [e.target.name] == 'name' ? setName(e.target.value) : setEmail(e.target.value);
    }

    const addUser = (e) =>{
        e.preventDefault();
        // setFlag(true);
        addUsser({name,email},dispatch);
        // console.log(name,email);
    }

  return (
    <div className='form'>
        {loading ? <div className='load'>loading .. </div>: 
        <form onSubmit={addUser}>
            <input type='text' name='name' placeholder='USERNAME' onChange={handleChange} />
            <input type='text' name='email' placeholder='EMAIL' onChange={handleChange} />
            <input type='submit' value='Add User' />
            {error && <span className='error'>Something went wrong please try again !!</span>}
        </form>}
    </div>
  )
}

export default Form