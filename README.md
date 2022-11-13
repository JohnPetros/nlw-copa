<h1 align="center">
    <img alt="NLW-copa" title="" src=".github/logo-nlw-copa.svg" width="250px" />
</h1>

<div align="center">
   <a href="https://github.com/mathrb22">
      <img alt="Made by JohnPetros" src="https://img.shields.io/badge/made%20by-JohnPetros-yellow">
   </a>
   <img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/JohnPetros/nlw-copa">
   <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/JohnPetros/nlw-copa">
   <a href="https://github.com/JohnPetros/nlw-copa/commits/main">
      <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/JohnPetros/nlw-copa">
   </a>
  </a>
   </a>
   <a href="https://github.com/JohnPetros/nlw-copa/blob/main/LICENSE.md">
      <img alt="GitHub License" src="https://img.shields.io/github/license/JohnPetros/nlw-copa">
   </a>
    <img alt="Stargazers" src="https://img.shields.io/github/stars/JohnPetros/nlw-copa?style=social">
</div>

<br>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aprendizado">Aprendizado</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como Contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato">Contato</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## 🖥️ Projeto

Aplicação web/mobile com a temática da copa do mundo, que permitirá os usuários criarem seus próprios bolões da copa e compartilhá-los com seus amigos. <br> Projeto desenvolvido durante a 10ª edição da NLW na trilha ignite, evento online promovido pela **Rocketseat** 🚀. <br>
a **NLW** (Next Level Week) é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

### Web

![web-demonstration](https://user-images.githubusercontent.com/93893533/201499976-f3b78093-01f7-47e9-89db-913b2bcf256c.png)

### Mobile

![mobile-demonstration (1)](https://user-images.githubusercontent.com/93893533/201500025-8f1d83f1-773c-42a4-aa6c-e008a7a78243.png)

<hr>

## ✨ Funcionalidades

- Cadastro de usuários
- Busca de bolão por código
- Listagem de jogos da Copa do Mundo
- Criação de palpite para cada jogo
- Compartilhamento de bolão com amigos
- Criação de bolão
- Contagem de bolões, usuários e palpites cadastrados
- Acesso através da conta google do usuário

### Diagrama entidade relacionamento(ER)

![ERD](https://user-images.githubusercontent.com/93893533/201498759-e55a1c12-7270-4ad0-9208-187165b87bb9.svg)

## 📖 Aprendizado

- Conceito de CORS, que é um mecanismo que permite que sistemas direfentes tenham acesso a uma dada aplicação back-end
- Biblioteca Fastify como alternativa ao Express para gerir APIs e servidores web
- O que são e para que servem middlewares
- Como fazer Schema validation com a biblioteca Zod
- Como fazer sistema de autentificação com JWT (Json Web Token)
- Como fazer relacionamento entre entidades com Prisma
- Como incluir massa de dados para teste com Prisma
- Como fazer queries relativamente complexas com Prisma
- Como trabalhar com variáveis de ambiente
- Mais sobre configuração de ambiente TypeScript com NodeJs
- O que é o framework NextJs, por qual motivo ele surgiu e como utilizá-lo
- Como trabalhar com a biblioteca Axios da maneira certa para lidar com requisições
- Como trabalhar com várias requisições de forma simultânea
- Mais sobre a biblioteca Tailwind para estilização
- Como fazer autentificação com a conta google do usuário
- Como trabalhar com SVG no React Native
- Como criar splash icones para aplicativos
- Como implementar Navegação de abas com React Navigation
- O que é e como usar o Context API do React para gerenciar estado global e compartilhar dados entre vários componentes
- Como criar hooks personalizados
- Biblioteca Native Base para criação de componentes em React Native
- Como fazer estilização condicional com Native base
- Como herdar tipagem de componentes com TypeScript
- Como trabalhar com dados que passam de componente a outro com TypeScript

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Back-end** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[Fastify](https://www.fastify.io/)**
- **[Zod](https://github.com/colinhacks/zod)**
- **[Short-Unique-Id](https://www.npmjs.com/package/short-unique-id)**
- **[Prisma](https://www.prisma.io/)**
- **[SQLite](https://github.com/mapbox/node-sqlite3)**

#### **Front-end (Web)** ([Next](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[TailwindCSS](https://tailwindcss.com/)**
- **[PostCSS](https://postcss.org/)**
- **[Axios](https://github.com/axios/axios)**

#### **Mobile** ([React Native](http://www.reactnative.com/) + [TypeScript](https://www.typescriptlang.org/))

- **[Expo](https://expo.io/)**
- **[Expo Fonts](https://docs.expo.dev/guides/using-custom-fonts/)**
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**
- **[Expo Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/)**
- **[Expo Web Browser](https://docs.expo.dev/versions/latest/sdk/webbrowser/)**
- **[Native Base](https://nativebase.io/)**
- **[Phosphor React Native](https://github.com/duongdev/phosphor-react-native)**
- **[React Navigation](https://reactnavigation.org/)**
- **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
- **[React Native Country Flag](https://www.npmjs.com/package/react-native-country-flag)**
- **[Axios](https://github.com/axios/axios)**
- **[Country-List](https://www.npmjs.com/package/country-list)**
- **[DayJS](https://day.js.org/)**
- **[dotENV](https://www.npmjs.com/package/dotenv)**

## Instalação e execução

### Pré-requesitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 📟 Rodando o Backend (servidor)

```bash
# Clone este repositório
$ git clone  https://github.com/JohnPetros/nlw-copa.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-copa

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

#### 💻 Rodando a aplicação web (Frontend)

```bash
# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

#### 📱 Rodando a aplicação mobile (Mobile)

```bash
# Vá para a pasta da aplicação mobile
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npx expo start
```

---

## 🎨 Layout:

O layout das telas da aplicação **NLW Copa** foi desenvolvido pela equipe da **Rocketseat** através da ferramenta [**Figma**](https://www.figma.com).
![mobile-demonstration](https://user-images.githubusercontent.com/93893533/201499925-d968436b-6895-402b-91c7-f008ef735c37.png)
Você pode acessar o layout através deste link: [**NLW Copa**](https://www.figma.com/community/file/1169028343875283461). Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

## 💪 Como contribuir

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 📩 Contato

Entre em contato comigo por e-mail ou pelo meu LinkedIn:

<a href="mailto:joaopcarvalho.cds@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/></a>
<a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-carvalho-dos-santos-42a0ab222/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💜 by João Pedro 👋🏻
