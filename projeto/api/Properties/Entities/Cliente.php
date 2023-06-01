<?php
require './Properties/Connection.php';

class Cliente {
    protected $db;
    public function __construct() {
        $this->db = Flight::db();
    }
    
    public function buscarTodos() {
        return $this->db->query("SELECT * FROM cliente")->fetchAll(PDO::FETCH_ASSOC);
    }

    public function cadastrar($request) {

        $cnpj = $request->data->cnpj ? $request->data->cnpj : null;
        $nome = $request->data->nome ? $request->data->nome : null;
        $cep = $request->data->cep;
        $endereco = $request->data->endereco;
        $numero = $request->data->numero;
        $bairro = $request->data->bairro;
        $uf = $request->data->uf;
        $cidade = $request->data->cidade;

        $query = $this->db->prepare("
            INSERT INTO cliente (cnpj, nome, cep, endereco, numero, bairro, uf, cidade)
            VALUES ('$cnpj', '$nome', '$cep', '$endereco', '$numero', '$bairro', '$uf', '$cidade')
        ");

        if ($query->execute()) {
            return true;
        }

        return false;
    }

    public function editar(int $id, $request) {
        return $this->db->query("SELECT * FROM cliente WHERE id = $id")->fetch(PDO::FETCH_ASSOC);
    }
}
?>