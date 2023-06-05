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

        $cnpj = !empty($request->data->cnpj) ? $request->data->cnpj : null;
        $nome = !empty($request->data->nome) ? $request->data->nome : null;
        $cep = !empty($request->data->cep) ? $request->data->cep : null;
        $endereco = !empty($request->data->endereco) ? $request->data->endereco : null;
        $numero = !empty($request->data->numero) ? $request->data->numero : null;
        $bairro = !empty($request->data->bairro) ? $request->data->bairro : null;
        $uf = !empty($request->data->uf) ? $request->data->uf : null;
        $cidade = !empty($request->data->cidade) ? $request->data->cidade : null;

        $query = $this->db->prepare("
            INSERT INTO cliente (cnpj, nome, cep, endereco, numero, bairro, uf, cidade)
            VALUES ('$cnpj', '$nome', '$cep', '$endereco', '$numero', '$bairro', '$uf', '$cidade')
        ");

        if ($query->execute()) {
            return true;
        }

        return false;
    }

    public function buscar(int $id) {
        return $this->db->query("SELECT * FROM cliente WHERE id = $id")->fetch(PDO::FETCH_ASSOC);
    }

    public function editar(int $id, $request) {
        $cnpj = !empty($request->data->cnpj) ? $request->data->cnpj : null;
        $nome = !empty($request->data->nome) ? $request->data->nome : null;
        $cep = !empty($request->data->cep) ? $request->data->cep : null;
        $endereco = !empty($request->data->endereco) ? $request->data->endereco : null;
        $numero = !empty($request->data->numero) ? $request->data->numero : null;
        $bairro = !empty($request->data->bairro) ? $request->data->bairro : null;
        $uf = !empty($request->data->uf) ? $request->data->uf : null;
        $cidade = !empty($request->data->cidade) ? $request->data->cidade : null;

        $query = $this->db->prepare("
            UPDATE cliente
            SET cnpj = '$cnpj', nome = '$nome', cep = '$cep', endereco = '$endereco', numero = '$numero', bairro = '$bairro', uf = '$uf', cidade = '$cidade'
            WHERE id = $id
        ");

        if ($query->execute()) {
            return true;
        }

        return false;
    }

    public function excluir(int $id) {
        $query = $this->db->prepare("DELETE FROM cliente WHERE id = $id");

        if ($query->execute()) {
            return true;
        }

        return false;
    }
}
?>