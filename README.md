# PetCare.APP

## Descrição

O PetCare.APP é um aplicativo desenvolvido para permitir que os usuários façam login, criem contas, registrem seus pets e gerenciem o calendário de vacinas dos seus animais de estimação. O projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.0.4 e Node versão 20.x.x.

## Funcionalidades

- Login de usuário
- Criação de conta
- Registro de pets
- Gerenciamento do calendário de vacinas dos pets

## APIs utilizadas

 ### API privada
  
  PetCare.API - Python + Flask

 ### APIs Públicas

  API que retorna imagens randômicas de animais - GET https://random.dog/woof.json?ref=public_apis

  API que retorna curiosidades sobre pets - GET https://meowfacts.herokuapp.com/?lang=por

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Docker](https://www.docker.com/)

## Servidor de Desenvolvimento

Para rodar o servidor de desenvolvimento, utilize o comando:

```sh
ng serve
```

Acesse http://localhost:4200/ no seu navegador. A aplicação será recarregada automaticamente quando você modificar qualquer arquivo fonte.

## Criação de Componentes
Para gerar um novo componente, utilize o comando:

```sh
ng generate component nome-do-componente
```

Você também pode usar ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build
Para compilar o projeto, utilize o comando:

```sh
ng build
```
Os artefatos de build serão armazenados no diretório dist/.

## Executando Testes Unitários
Para executar os testes unitários, utilize o comando:

```sh
ng test
```
Os testes serão executados via Karma.

## Executando Testes End-to-End
Para executar testes end-to-end, utilize o comando:

```sh
ng e2e
```
Para utilizar este comando, é necessário adicionar um pacote que implemente capacidades de testes end-to-end.

## Ajuda Adicional
Para obter mais ajuda sobre o Angular CLI, utilize o comando ng help ou confira a Visão Geral e Referência de Comandos do Angular CLI.

## Executando com Docker
Para facilitar o processo de configuração e execução do projeto, você pode usar o Docker. Siga os passos abaixo para rodar a aplicação com Docker:

### Passo 1: Criar imagem
Execute o seguinte comando na raiz do projeto:

```sh
docker build -t angular-docker .
```

### Passo 2: Execute o container docker utilizando a imagem criada anteriormente

```sh
docker run -p 4200:4200 angular-docker
```

### Acesse  a aplicação no endereço disponibilizado

http://localhost:4200
