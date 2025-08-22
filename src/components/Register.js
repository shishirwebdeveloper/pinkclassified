import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submit = async (e) => {
        e.preventDefault();
        const obj = {
            name: name,
            email: email,
            password: password
        }
        console.log(obj);
        const response = await axios.post('http://localhost:8000/api/users/create', obj);
        console.log(response);

    }

     return <>
        <h1>Register</h1>   
        <form>
            <label htmlFor="name">Name:</label>         
            <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} />
            <br />  
            <label htmlFor="email">Email:</label>                   
            <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} />    
            <br />      
            <button type="submit" onClick={submit}>Register</button>
        </form>
     </>
}

export default Register;