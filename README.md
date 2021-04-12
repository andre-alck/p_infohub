# InfoHub

<img src="src/logo.png">

InfoHub é uma aplicação que possui uma interface simples e intuitiva, onde é possível informar o nome de um usuário do GitHub e rapidamente conseguir informações sobre o mesmo, como: **nome de usuário**, **foto de perfil** e seu próprio **link do GitHub**. O projeto foi desenvolvido utilizando `React (versão 17.0.2)`, `Boostrap (versão 5.0)`, e a `API` de cada usuário fornecida pelo GitHub. A aplicação foi desenvolvida como atividade avaliativa do Curso Livre de Desenvolvimento Web - Stack MERN - Fatec Itu.

## Como Funciona

Em suma, a base da coleta dos dados é realizada da seguinte forma:

1. Uma estrutura de useState gravará o nome de usuário digitado numa variável chamada "usuario".
2. Ao pesquisar o usuário, uma função assíncrona obtemUsuario será executada, adicionando o valor de "usuario" ao link da API. `(let url = https://api.github.com/users/${usuario};)`
3. A função obtemUsuario realizará o processamento dos dados recebidos da API e, depois de tratados, uma estrutura useState gravará estes dados numa variável chamada "dados".
4. As informações do usuário são apresentadas dentro de um Card (importado do Bootstrap).

## Contato

O projeto foi realizado por **André Santos Alckmin de Carvalho**.
E-mail para contato: andrealck1@gmail.com
