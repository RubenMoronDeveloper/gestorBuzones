import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const AdminVecinos = () => {
    const [vecinos, setVecinos] = useState([])

    useEffect(() => {
        getAllVecinos()
    }, [])

    const getAllVecinos = async () => {
        const response = await axios.get(`${endpoint}/vecinos`)
        setVecinos(response.data);

    }
    const deleteVecino = async (id) => {
        await axios.delete(`${endpoint}/vecino/${id}`)
        getAllVecinos()
    }

    return (
        <div>
       
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success bt-lg  mb-2'><i className="fa-solid fa-square-plus fa-3x"></i></Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Piso</th>
                        <th>Mail</th>
                        <th>Editar / Borrar</th>
                    </tr>
                </thead>
                <tbody>

                    {vecinos.map((vecino) => (
                        <tr key={vecino.id}>
                            <td>{vecino.id}</td>
                            <td>{vecino.nombre}</td>
                            <td>{vecino.apellido}</td>
                            <td>{vecino.piso}</td>
                            <td>{vecino.email}</td>
                            <td>
                                <Link to={`/edit/${vecino.id}`} className='btn btn-primary mr-2'><i className="fa-solid fa-user-pen"></i></Link>
                                <button onClick={() => deleteVecino(vecino.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminVecinos