function Saludar (nombre) {
    console.log ( "Hola, " + nombre);
    }
    
    Saludar ("Mariell");

    var ListaComida = ["Cheesecake", "nieve", "chocolate"]

    console.log(ListaComida[0])
    console.log(ListaComida[2])
    console.log(ListaComida[1])

    console.log(ListaComida);


    function Act4() {
        var alumnos = [];
        alumnos[0] = {
            nombre: "Mariell",
            apellido: "Gonzalez",
            edad: 21,
            sexo: "F"
        };
            
        alumnos [1] = {
            nombre: "Kevin",
            apellido: "del Campo",
            edad: 28,
            sexo: "M"

        };

           
            alumnos [2] = {
                nombre: "Ana Lucia",
                apellido: "del Campo",
                edad: 29,
                sexo: "F"
        };
    
 console.log(alumnos[0].nombre + " " + alumnos[0].apellido)
 console.log(alumnos[1].nombre + " " + alumnos[1].apellido)
 console.log(alumnos[2].nombre + " " + alumnos[2].apellido)
    }

    Act4();