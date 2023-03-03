import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/vecino'

const LoginVecino = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const response = await axios.get(endpoint, { email: email, password: password })
    console.log(response)
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={login}>

        <div className='mb-3'>
          <label className='form-label'>email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>contraseña</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>
    </div>
  )
}

export default LoginVecino