import React, { useState, useEffect } from 'react';
import api from './services/Api';

function Formulario() {
    const [cnpj, setCnpj] = useState("");
    const [nome, setNome] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");

    const cancelar = () => {
        setCnpj("");
        setNome("");
        setCep("");
        setEndereco("");
        setNumero("");
        setBairro("");
        setUf("");
        setCidade("");
    }

    const cliente = {
        cnpj: cnpj,
        nome: nome,
        cep: cep,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        uf: uf,
        cidade: cidade
    };

    const salvar = () => {

        api.post('/cadastrar', cliente, {
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
            Formulário de Cadastro
        </div>
        <div className="card-body">
            <form id="formulario" onSubmit={salvar}>
                <div className="row px-3 mb-3 mt-4">
                    <div className="col-4">
                        <label htmlFor="cnpj">CNPJ:</label>
                        <input value={cnpj} onChange={e => setCnpj(e.target.value)} type="text" maxLength={18} className="form-control" name="cnpj" id="cnpj" required/>
                    </div>
                    <div className="col-8">
                        <label htmlFor="nome">Nome:</label>
                        <input value={nome} onChange={e => setNome(e.target.value)} type="text" className="form-control" name="nome" id="nome" required/>
                    </div>
                </div>
                <div className="row px-3 mb-3">
                    <div className="col-3">
                        <label htmlFor="cep">CEP:</label>
                        <input value={cep} onChange={e => setCep(e.target.value)} type="text" maxLength={9} className="form-control" name="cep" id="cep"/>
                    </div>
                    <div className="col-7">
                        <label htmlFor="endereco">Endereço</label>
                        <input value={endereco} onChange={e => setEndereco(e.target.value)} type="text" className="form-control" name="endereco" id="endereco"/>
                    </div>
                    <div className="col-2">
                        <label htmlFor="numero">Número:</label>
                        <input value={numero} onChange={e => setNumero(e.target.value)} type="text" maxLength={10} className="form-control" name="numero" id="numero"/>
                    </div>
                </div>
                <div className="row px-3 mb-3">
                    <div className="col-6">
                        <label htmlFor="bairro">Bairro</label>
                        <input value={bairro} onChange={e => setBairro(e.target.value)} type="text" className="form-control" name="bairro" id="bairro"/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="uf">UF:</label>
                        <select value={uf} onChange={e => setUf(e.target.value)} className="form-select" name="uf" id="uf">
                            <option value="">---</option>
                            <option value="SP">SP</option>
                            <option value="PA">PA</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <label htmlFor="cidade">Cidade:</label>
                        <select value={cidade} onChange={e => setCidade(e.target.value)} className="form-select" name="cidade" id="cidade">
                            <option value="">---</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Belém">Belém</option>
                        </select>
                    </div>
                </div>
                <div className="col px-3 text-end mb-2">
                    <button type="button" className="btn btn-secondary mx-2" onClick={cancelar}>Cancelar</button>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
            </form>
        </div>
    </div>
);

}

export default Formulario;