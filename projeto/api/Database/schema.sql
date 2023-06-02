CREATE DATABASE magis;

CREATE TABLE cliente (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cnpj VARCHAR(20) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    cep VARCHAR(10),
    endereco VARCHAR(255),
    numero VARCHAR(10),
    bairro VARCHAR(255),
    uf VARCHAR(2),
    cidade VARCHAR(255)
);