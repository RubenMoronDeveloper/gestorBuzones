import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/vecino'

const CreateVecino = () => {
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [piso, setPiso] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const store = async (e) => {
		e.preventDefault();
		await axios.post(endpoint, { nombre: nombre, apellido: apellido, piso: piso, email: email, password:password })
		navigate('/admin')
	}
	return (
		<div>
			<form onSubmit={store}>
				
				<div className='mb-3'>
					<label className='form-label'>nombre</label>
					<input
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						type='text'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'>apellido</label>
					<input
						value={apellido}
						onChange={(e) => setApellido(e.target.value)}
						type='text'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'>piso</label>
					<input
						value={piso}
						onChange={(e) => setPiso(e.target.value)}
						type='text'
						className='form-control'
					/>
				</div>
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

export default CreateVecino