
<h2 align="center">
Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack.
</h1>

<h1 align="center">
<img src="https://raw.githubusercontent.com/pedropjr/fastfeet/master/mobile/src/assets/fastfeet-logo%402x.png" width="70%" heigth="70%" />
</h1>

---

## :eye_speech_bubble: Preview Frontend

<img src="https://raw.githubusercontent.com/pedropjr/fastfeet/master/mobile/src/assets/orders3.png" width="100%" heigth="100%" />

## :eye_speech_bubble: Preview Mobile

<img src="https://raw.githubusercontent.com/pedropjr/fastfeet/master/mobile/src/assets/dashboard.png" width="40%" heigth="40%" />

## :sunglasses: Iniciando a aplicação :nerd_face:

### :exclamation: Requerimentos

_Para rodar a aplicação é necessário que você possua esses dois programas:_
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)


### Também foram utilizados dois bancos de dados da aplicação
- [Postgres](https://github.com/postgres/postgres)
- [Redis](https://redis.io/)

### Porém, para facilitar, usamos o [Docker](https://www.docker.com/) para rodar os bancos de dados facilmente. Dentro dele siga estes passos:
### Alguns computadores podem ter dificuldade de rodar o Docker Destop e emuladores de Android como o Genymotion, o motivo se dá ao conflito entre os dois e a tecnologia Hyper-V. Por favor, utilize de um dispositivo físico Android ou utilize do emulador para Android Studio.
```bash
# Instale uma imagem do Redis
docker run --name redisfastfeet -p 6379:6379 -d -t redis:alpine

# Instale uma imagem do Postgres
docker run --name fastfeetpg -e POSTGRES_PASSWORD=fastfeet -p 5432:5432 -d postgres
(Neste caso, seu login e senha será: fastfeet)

# Inicie o Redis
docker start redisfastfeet

# Inicie o Postgres
docker start fastfeetpg

```
### :open_file_folder: Iniciando o Backend
Agora clone este repositório e instale suas dependências
```bash
# clonando o repositório
git clone https://github.com/pedropjr/fastfeet.git

# entrando na pasta do backend
cd backend

#instalando as dependências
yarn

```
Para que haja a conexão do backend com o banco de dados, você precisará colocar suas informações no arquivo .env. Em "APP_URL", altere o IP de "192.168.15.100" para o IP de sua máquina. Nas configurações do banco, altere o DB_USER, DB_PASS e DB_NAME para os que foram utilizados para criação.

Após isto, no terminal é necessário enviar as migrations para o banco de dados:

```bash
# rodando as migrations para o banco
yarn sequelize db:migrate

# permitindo que haja o administrador no banco
yarn sequelize db:seed:all

# iniciando a aplicação
yarn dev & yarn queue -> em terminais diferentes.
```

Após estes passos, você poderá iniciar o frontend ou o mobile!

---

### :computer: Frontend do Fastfeet

_Abra um terminal na pasta do frontend e digite:_
```bash
yarn
yarn start
```
_Use estes dados para realizar login na aplicação:_
<blockquote><strong>Email:</strong> admin@fastfeet.com</blockquote>
<blockquote> <strong>Senha:</strong> 123456</blockquote>


<h1 align="center">

___

### :iphone: Aplicativo mobile do Fastfeet

```bash
# para instalar as dependências
cd mobile
yarn
```

_Após isto, você precisa mudar para o ip de sua máquina neste arquivo:_
[api.js](https://github.com/pedropjr/fastfeet/blob/master/mobile/src/services/api.js)
```javascript
  baseURL: 'http://192.168.15.100:3333',
```

_Substitua 192.168.15.100 com o ip de sua máquina caso queira utilizar o Reactotron._
[ReactotronConfig](https://github.com/pedropjr/fastfeet/blob/master/mobile/src/config/ReactotronConfig.js)
```javascript
  .configure({ host: '192.168.15.100' })
```

_Agora basta rodar a aplicação, basta estar com o emulador de Android aberto._
```bash

# para rodar a aplicação

npx react-native run-android

```

> A aplicação foi desenvolvida em um Zenfone 4 e emulador do Pixel 2 do Android Studio.
