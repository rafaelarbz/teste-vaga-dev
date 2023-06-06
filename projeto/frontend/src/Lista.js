import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from "./services/Api"

function Lista() {

  const [clientes, setClientes] = useState([]);

  const getClientes = () => {
    api.get("/clientes")
    .then((response) => setClientes(response.data))
    .catch((err) => {
      console.error("Erro: " + err);
    });
  }

  useEffect(() => {
    getClientes();
  }, []);

  return(
    <div>
      <span>Empresas Cadastradas</span>
      <table className='table table-light text-center'>
        <thead className='table-secondary'>
          <tr>
            <th>CNPJ</th>
            <th>Nome</th>
            <th>Acoes</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente)=>{
            return (
              <tr key={cliente.id}>
                <td>{cliente.cnpj}</td>
                <td>{cliente.nome}</td>
                <td><Link to={`${cliente.id}/editar`}>Edit</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )

}

export default Lista;