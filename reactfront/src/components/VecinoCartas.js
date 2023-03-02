import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';


const endpoint = 'http://localhost:8000/api/vecino/';
const endpointCartas = 'http://localhost:8000/api/vecinoCartas/';
const endpointCartaDelete = 'http://localhost:8000/api/carta/';

const VecinoCartas = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [piso, setPiso] = useState('');
  const [cartas, setCartas] = useState([]);
  const { id } = useParams();



  useEffect(() => {
    getCartasById();
    getVecinoById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getVecinoById = async () => {
    const response = await axios.get(`${endpoint}${id}`)
    setNombre(response.data.nombre)
    setApellido(response.data.apellido)
    setPiso(response.data.piso)
  }
  const getCartasById = async () => {
    const response = await axios.get(`${endpointCartas}${id}`)
    setCartas(response.data)
    
  }
  const deleteCarta = async (id) => {
    await axios.delete(`${endpointCartaDelete}${id}`)
    getCartasById();
  }
  
  return (

    <div>
      <h1>Vecino : {nombre}</h1>
      <p>Apellido : {apellido}</p>
      <p>piso : {piso}</p>
      <table className='table'>
        <thead className=''>
          <tr>
            <th>Id</th>
            <th>Remitente</th>
            <th>Contenido</th>
            <th>Id_piso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>

          {cartas.map((carta) => (
            <tr key={carta.id}>
              <td>{carta.id}</td>
              <td>{carta.remitente}</td>
              <td>{carta.contenido}</td>
              <td>{carta.id_piso}</td>
              <td>
                {/* <Link to={`/edit/${carta.id}`} className='btn btn-primary mr-2'> EDIT </Link> */}
                <button onClick={() => deleteCarta(carta.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VecinoCartas