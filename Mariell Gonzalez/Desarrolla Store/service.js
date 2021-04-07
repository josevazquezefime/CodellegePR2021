const express = requires ('express');
const express = requires ('mongoose');
const PORT = 666; 

const uri = 'mongodb+srv://MariellGzz:Pachon99@cluster0.0drkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(uri, {
    useNewUrlParser: true, 
    newUnfiedTopology: true 
}, error => {
        if (error) {
            console.log ('Error connecting to the database');
            console.log (error); 
        } else {
            console.log ('Succesfully connected to the mongo database server (Cluster) ');
            console.log('Server cluster: ' + mongoose.connection.host );
            console.log('Server cluster: ' + mongoose.connection.port );
        }
    }); 

const app = express (); 

var routerUsers = require ('routers/user')
app.use ('/users', routerUsers);

app.listen (PORT);
