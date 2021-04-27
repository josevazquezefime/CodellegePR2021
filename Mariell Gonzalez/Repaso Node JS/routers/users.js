const express = require('express'); 
const router = express.Router();

//Definir los endpoints 
//localhost:888/users/getUser
app.post ('/register', async function (req, res){
    var userInfo = req.body; 

    res.send(userInfo); 

});

module.exports = router; 
