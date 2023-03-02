import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const endpoint = 'http://localhost:8000/api/vecino/';

const EditVecino = () => {
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [piso, setPiso] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	const update = async (e) => {
		e.preventDefault();
		await axios.put(`${endpoint}${id}`,{
			nombre:nombre,
			apellido:apellido,
			piso:piso
		})
		navigate('/admin')
	}
	useEffect(()=>{
		const getVecinoById = async () =>{
			const response = await axios.get(`${endpoint}${id}`)
			setNombre(response.data.nombre)
			setApellido(response.data.apellido)
			setPiso(response.data.piso)
		}
		getVecinoById();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		
		<div>
			
			<form onSubmit={update}>
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
				<button type='submit' className='btn btn-primary'>Enviar</button>
			</form>
		</div>
	)
}

export default EditVecino