<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

require 'vendor/autoload.php';
require 'Properties/Controllers/ClienteController.php';

Flight::route('GET /clientes', function () {
    $controller = new ClienteController();
    $controller->buscarClientes();
});

Flight::route('GET /cliente/@id', function ($id) {
    $controller = new ClienteController();
    $controller->buscarCliente($id);
});

Flight::route('POST /cliente', function () {
    $controller = new ClienteController();
    $controller->cadastrarCliente(Flight::request());
});

Flight::route('PUT /cliente/@id', function ($id) {
    $controller = new ClienteController();
    $controller->editarCliente($id, Flight::request());
});

Flight::start();
?>