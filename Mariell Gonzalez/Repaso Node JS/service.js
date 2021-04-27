const express = require ('express');
const bodyParser = require ('body-parser'); 

const app = express();
const PORT = 888; 

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({
    extended: true
}));

const Database = 'Repaso'; 
const url = "mongdb+srv://kmcf:spgg2021@cluster0.Ih9dp"
//Definir routers 
const routerUsers= require ('./routers/users');
app.use('/users', routerUsers);

const routerUsers= require ('./routers/users');
app.use('/posts', router);

console.log ('Servidor iniciando...');
app.listen(PORT);