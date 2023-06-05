<?php
require './Properties/Entities/Cliente.php';

class ClienteController {

    protected $entity;
    public function __construct() {
        $this->entity = new Cliente();
    }
    
    public function buscarClientes() {
        $dados = $this->entity->buscarTodos();
        return Flight::json($dados);
    }

    public function cadastrarCliente($request) {
        $dados = $this->entity->cadastrar($request);
        if (!$dados) {
            return Flight::json([
                "status" => "error", 
                "message" => "Falha ao cadastrar cliente!"
            ]);
        }
        return Flight::json([
            "status" => "success",
            "message" => "Cliente cadastrado com sucesso!"
        ]);
    }

    public function buscarCliente($id) {
        $dados = $this->entity->buscar($id);
        return Flight::json($dados);
    }

    public function editarCliente($id, $request) {
        $dados = $this->entity->editar($id, $request);
        if (!$dados) {
            return Flight::json([
                "status" => "error", 
                "message" => "Falha ao editar cliente!"
            ]);
        }
        return Flight::json([
            "status" => "success",
            "message" => "Cliente editado com sucesso!"
        ]);
    }
}
?>