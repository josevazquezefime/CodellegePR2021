//Importar nuestro modelo de datos
const User = Require('../models/users');

module.exports = {
    isAdmin: function( req, res) {
        var sessionID = req.cookies["SESSIONID"];

        if(!sessionID) {
            res.status(400).send({
                message: "Debes inicar sesion para utilizar estos recursos"
            });
            return false;
        }

        var user = await User.findOne({ nickname: sessionID });
        if(user.userType === "admin") {
            return true;
        }
        
        res.status(403).send({
                error: "El usuario no tiene privilegios para realizar esta operacion"
            });
        return false;
    }
};