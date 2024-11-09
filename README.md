# Livraria API

Este projeto é uma API para gerenciamento de usuários e livros, desenvolvida em Node.js utilizando Express e PostgreSQL. A API permite registrar e autenticar usuários, além de gerenciar uma coleção de livros.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints](#endpoints)
- [Validações](#validações)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **pg**: Cliente PostgreSQL para Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.


## Validações

A API inclui validações para garantir que os dados inseridos sejam corretos:
- **Email**: Deve ser um formato válido.
- **Nome**: Deve conter apenas letras e espaços.
- **Título do Livro**: Deve ter mais de 3 caracteres.
- **Preço**: Deve ser um número positivo.
  
## Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes. Sinta-se à vontade para explorar e modificar este projeto! Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato.
