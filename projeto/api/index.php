<?php
require 'vendor/autoload.php';
require 'Properties/Controllers/ClienteController.php';

Flight::route('GET /clientes', function () {
    $controller = new ClienteController();
    $controller->buscarClientes();
});

Flight::route('POST /cadastrar', function () {
    $controller = new ClienteController();
    $controller->cadastrarCliente(Flight::request());
});

Flight::start();
?>