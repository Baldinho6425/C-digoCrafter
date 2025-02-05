### Desafio de Desenvolvimento Full Stack: Sistema de Gerenciamento de Tarefas (To-Do List)

#### Objetivo:
Desenvolver uma aplicação full stack de gerenciamento de tarefas (To-Do List) com funcionalidades básicas de CRUD (Create, Read, Update, Delete). A aplicação deve ser composta por um backend em Java (utilizando Eclipse), um frontend em React (utilizando VSCode) e um banco de dados MySQL para armazenamento dos dados.

#### Requisitos Técnicos:
1. **Backend (Java - Eclipse):**
   - Utilizar Spring Boot para criar a API RESTful.
   - Criar endpoints para as operações de CRUD:
     - `GET /tasks` - Listar todas as tarefas.
     - `GET /tasks/{id}` - Obter uma tarefa específica por ID.
     - `POST /tasks` - Criar uma nova tarefa.
     - `PUT /tasks/{id}` - Atualizar uma tarefa existente.
     - `DELETE /tasks/{id}` - Excluir uma tarefa.
   - Utilizar JPA (Java Persistence API) para a persistência dos dados no banco de dados MySQL.
   - Configurar o arquivo `application.properties` para conexão com o banco de dados MySQL.

2. **Frontend (React - VSCode):**
   - Criar uma interface de usuário simples e responsiva utilizando React.
   - Utilizar componentes funcionais e hooks (useState, useEffect) para gerenciar o estado da aplicação.
   - Implementar as seguintes funcionalidades:
     - Listar todas as tarefas.
     - Adicionar uma nova tarefa.
     - Editar uma tarefa existente.
     - Excluir uma tarefa.
   - Utilizar Axios ou Fetch API para consumir a API do backend.
   - Estilizar a aplicação utilizando CSS ou uma biblioteca como Bootstrap ou Material-UI.

3. **Banco de Dados (MySQL):**
   - Criar uma tabela `tasks` com os seguintes campos:
     - `id` (INT, PRIMARY KEY, AUTO_INCREMENT)
     - `title` (VARCHAR(255), NOT NULL)
     - `description` (TEXT, NULLABLE)
     - `completed` (BOOLEAN, DEFAULT FALSE)
     - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
     - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
   - Configurar o banco de dados para aceitar conexões do backend.

#### Funcionalidades Esperadas:
1. **Listagem de Tarefas:**
   - A aplicação deve exibir uma lista de todas as tarefas cadastradas, mostrando o título, descrição e status (concluída ou não).

2. **Adicionar Tarefa:**
   - O usuário deve poder adicionar uma nova tarefa, informando o título e a descrição.

3. **Editar Tarefa:**
   - O usuário deve poder editar o título, a descrição e o status de uma tarefa existente.

4. **Excluir Tarefa:**
   - O usuário deve poder excluir uma tarefa da lista.

5. **Marcar Tarefa como Concluída:**
   - O usuário deve poder marcar uma tarefa como concluída ou desmarcá-la.

#### Entrega:
- **Backend:** Código fonte do projeto Spring Boot, incluindo o arquivo `application.properties` configurado para conexão com o banco de dados.
- **Frontend:** Código fonte do projeto React, incluindo os componentes e a lógica de consumo da API.
- **Banco de Dados:** Script SQL para criação da tabela `tasks` e qualquer outra configuração necessária.
- **Documentação:** Um README.md explicando como configurar e executar o projeto, tanto localmente quanto em um ambiente de desenvolvimento.

#### Bônus:
- Implementar autenticação e autorização (JWT, OAuth2, etc.) para proteger os endpoints da API.
- Adicionar testes unitários e de integração para o backend e frontend.
- Implementar paginação e filtros na listagem de tarefas.
- Deploy da aplicação em um serviço de nuvem (Heroku, AWS, etc.).

#### Avaliação:
- **Qualidade do Código:** Organização, legibilidade, boas práticas de programação.
- **Funcionalidades:** Todas as funcionalidades devem estar implementadas e funcionando corretamente.
- **Usabilidade:** Interface de usuário intuitiva e responsiva.
- **Documentação:** Clareza e completude da documentação fornecida.

#### Prazo:
- O prazo para entrega do desafio é de **7 dias** a partir da data de recebimento.

Boa sorte! 🚀