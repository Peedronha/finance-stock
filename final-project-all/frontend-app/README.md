# Finance & Stock APP  

## Commands

### `ng`

- criando uma aplicação: `ng new users-app`  
- abrindo aplicação no navegador: `ng serve --open`  
- criando componente: `ng generate component xxx`  
- criando serviço: `ng generate service xxx`  
- criando módulo: `ng generate module xxx`  
- construir para produção: `ng build`  


#### `npm`

- intalar dependências:   

```bash
npm install -g @angular/cli
npm install --save bootstrap@5.3.0-alpha3
npm install --save jquery
npm install --save font-awesome
npm i --save-dev @types/node
```

Referenciar as dependências no arquivo "angular.json"  

"project" > "users-app" > "architect" > "build" > "options" 

```json
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]  
```

----

1. Criar app: `ng new nome-app`  
2. Instalar dependêcias: `nmp i --save xxx`  
3. Criar um módulo para o template: `ng g m template`  
4. Criar um componente navbar dentro de template: `ng g c template/navbar`  
5. Criar um componente sidebar dentro de template`ng g c template/sidebar`  
6. Criar um componente footer dentro de template`ng g c template/footer`  
7. Criar um componente home `ng g c home`  
8. criar módulo de usuários com rota: `ng g m users --routing`  
9. formulário de usuário criado dentro do módulo users: `ng g c users/userForm`  


----

## Links  

[Angular io docs](https://angular.io/docs)  
[Bootstrap](https://getbootstrap.com/)  
[cdnjs](https://cdnjs.com/)  
[Font Awesome](https://fontawesome.com/)  
[jQuery](https://jquery.com/)  

---

## Comments  

| Acronym | Description |  
|:--------|:----------|  
| `ng`    | angular   |  
| `g`     | generate  |  
| `i`     | install   |  
| `c`     | component |  
| `m`     | module    |  
| `s`     | service   |  
| `npm`   |           |  

username: julianemaran
password: R1@nSuz12023
email: julianemaran@gmail.com  


---

HEX red background = #E1010E  
HEX gray button = #464042  
HEX dark gray button = #2A2E30  

---

ROUTES  

- frontend: localhost:4200  
- backend: localhost:8080/api  

| frontend      | backend        | Page                           |  
|:--------------|:---------------|:-------------------------------|  
| /             | /              | Página inicial sem login       |  
| /home         | /home          | Página inicial com login       |    
| /login        | /auth/login    | Autenticação                   |  
| /user-form    | /user/form     | Cadastrar / atualizar usuário  |  
| /finance-form | /finance/form  | Cadastrar / atualizar finanças |  
| /stock-form   | /stock/form    | Cadastrar / atualizar estoque  |  


