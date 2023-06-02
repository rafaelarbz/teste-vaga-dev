# Teste para candidatos à vaga de Programador - Magis5

O projeto consiste em uma API para cadastro de clientes, desenvolvida utilizando FlightPHP no back-end e ReactJS no front-end.

Resultado:

![Resultado](https://drive.google.com/uc?export=view&id=1vjPXZcsHroe5_t9prQCIxrNag-FhYKKo/view?usp=sharing)

## Tecnologias

- PHP 7.4
- FlightPHP
- MySQL 5.2
- ReactJS
- Node.js

## Estrutura

O projeto é constituido por dois diretórios:

- 📂 api (armazena o back-end)
- 📂 frontend (armazena o front-end)

## Instruções

Para rodar o projeto é necessário:

- Servidor web (ex.:xampp)
- BD MySQL

Para configurar o back-end em seu ambiente:

- Faça uma cópia do projeto ou apenas do diretório 📂api __dentro__ de seu servidor web
- Em 📂api>📄Connection.php edite a conexão com as credencias de seu banco de dados
- Em 📂api>📂Database>📄Schema.sql contém a estrutura da tabela utilizada no projeto, execute o script de criação da tabela em seu banco de dados

Para o front-end conectar-se com a API:

- Faça uma cópia do projeto ou apenas do diretório 📂frontend __fora__ de seu servidor web
- Em 📂frontend>📂src>📂services>📄Api.js edite o __baseURL__ de acordo com a url do diretório 📂api em seu servidor web
- Por fim, em 📂frontend acesse o terminal e execute __npm start__ para que o projeto rode em seu navegador
