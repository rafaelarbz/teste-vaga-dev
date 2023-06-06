import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import api from './services/Api';

function FormularioEditar() {
    const {id} = useParams();
    const [cliente, setCliente] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCliente(values => ({...values, [name]: value}));
    }

    const getCliente = () => {
        api.get(`/cliente/${id}`)
        .then((response) => 
            setCliente(response.data)
        )
        .catch((err) => {
          console.error("Erro: " + err);
        });
    }
    
    useEffect(() => {
        getCliente();
    }, []);

    const permitirApenasNumeros = (value) => {
        return value
          .replace(/\D+/g, '')
    }

    const cnpjMask = (value) => {
        return value
          .replace(/\D+/g, '')
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
          .replace(/(\d{4})(\d)/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1')
    }

    const cepMask = (value) => {
        return value
          .replace(/\D+/g, '')
          .replace(/(\d{5})(\d)/, '$1-$2') 
    }

    const salvar = () => {

        api.post(`/cliente/${id}`, cliente, {
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        })
        .then((response) => console.log(response))
        .catch((err) => {
          console.error("Erro: " + err);
        });
    }
  
    return (
    <div className="card">
        <div className="card-header">
            Editar Cliente
        </div>
        <div className="card-body">
            <form id="formulario" onSubmit={salvar}>
                <div className="row px-3 mb-3 mt-4">
                    <div className="col-4">
                        <label htmlFor="cnpj">CNPJ:</label>
                        <input value={cliente.cnpj != undefined ? cnpjMask(cliente.cnpj) : ''} onChange={handleChange} type="text" maxLength={18} className="form-control" name="cnpj" id="cnpj" required/>
                    </div>
                    <div className="col-8">
                        <label htmlFor="nome">Nome:</label>
                        <input value={cliente.nome  != undefined ? cliente.nome.toUpperCase() : ''} onChange={handleChange} type="text" className="form-control" name="nome" id="nome" required/>
                    </div>
                </div>
                <div className="row px-3 mb-3">
                    <div className="col-3">
                        <label htmlFor="cep">CEP:</label>
                        <input value={cliente.cep != undefined ? cepMask(cliente.cep) : ''} onChange={handleChange} type="text" maxLength={9} className="form-control" name="cep" id="cep"/>
                    </div>
                    <div className="col-7">
                        <label htmlFor="endereco">Endereço</label>
                        <input value={cliente.endereco != undefined ? cliente.endereco.toUpperCase() : ''} onChange={handleChange} type="text" className="form-control" name="endereco" id="endereco"/>
                    </div>
                    <div className="col-2">
                        <label htmlFor="numero">Número:</label>
                        <input value={cliente.numero != undefined ? permitirApenasNumeros(cliente.numero) : ''} onChange={handleChange} type="text" maxLength={10} className="form-control" name="numero" id="numero"/>
                    </div>
                </div>
                <div className="row px-3 mb-3">
                    <div className="col-6">
                        <label htmlFor="bairro">Bairro</label>
                        <input value={cliente.bairro != undefined ? cliente.bairro.toUpperCase() : ''} onChange={handleChange} type="text" className="form-control" name="bairro" id="bairro"/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="uf">UF:</label>
                        <select value={cliente.uf} onChange={handleChange} className="form-select" name="uf" id="uf">
                            <option value="">---</option>
                            <option value="SP">SP</option>
                            <option value="PA">PA</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <label htmlFor="cidade">Cidade:</label>
                        <select value={cliente.cidade} onChange={handleChange} className="form-select" name="cidade" id="cidade">
                            <option value="">---</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Belém">Belém</option>
                        </select>
                    </div>
                </div>
                <div className="col px-3 text-end mb-2">
                    <Link to={'/'} className="btn btn-secondary mx-2">Cancelar</Link>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default FormularioEditar;