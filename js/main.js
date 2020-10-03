class Participante {

    constructor(nombre, hab, agi) {

        this.nombre = nombre;
        this.hab = hab;
        this.agi = agi;

    }


}


class Turno {

    static _estres = 0;

    participantes = [
        new Participante('Taro Korosu ', 7, 1),
        new Participante('Dunia ', 8, 2),
        new Participante('Hid Mortom ', 8, 1),
        new Participante('Ruh Crawfort ', 7, 0),
        // new Participante('enemigo 1 ', 7, 1),
        // new Participante('enemigo 2 ', 7, 1),
        // new Participante('enemigo 3 ', 7, 1),
        // new Participante('enemigo 4 ', 7, 1),
        // new Participante('enemigo 5 ', 7, 1),
        // new Participante('jefe final ', 10, 2)
    ];
    numeroDeAcciones = [];
    iniciativa = [];


    constructor() {



        this.obtenerParticipaciones();
        this.getIniciativa();


    }

    obtenerParticipaciones() {

        for (let i = 0; i < this.participantes.length; i++) {

            if (this.participantes[i].hab <= 6) {
                this.numeroDeAcciones.push(this.participantes[i].nombre);
            } else if (this.participantes[i].hab == 7 || this.participantes[i].hab == 8) {
                this.numeroDeAcciones.push(this.participantes[i].nombre);
                this.numeroDeAcciones.push(this.participantes[i].nombre);
            } else if (this.participantes[i].hab == 9 || this.participantes[i].hab == 10) {
                this.numeroDeAcciones.push(this.participantes[i].nombre);
                this.numeroDeAcciones.push(this.participantes[i].nombre);
                this.numeroDeAcciones.push(this.participantes[i].nombre);
            } else {
                console.log('hubo un error')
            }
        };

    }

    getIniciativa() {

        function barajar(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        barajar(this.numeroDeAcciones);

        for (let i = 0; i < this.numeroDeAcciones.length - 1; i++) {
            if (this.numeroDeAcciones[i].hab == this.numeroDeAcciones[i + 1].hab && this.numeroDeAcciones[i].agi < this.numeroDeAcciones[i + 1].agi) {
                let memoria = this.numeroDeAcciones[i];
                this.numeroDeAcciones[i] = this.numeroDeAcciones[i + 1];
                this.numeroDeAcciones[i + 1] = memoria;
            };
        }


    }
}

let contadorTurnos = -1;
let turno = new Turno();


$(document).ready(function() {

    $('#aumentarEstres').click(function() {

        contadorTurnos++;
        document.getElementById("display").innerHTML = contadorTurnos;

    });

    $('#botonIniciativa').click(function() {

        contadorTurnos++;
        document.getElementById("display").innerHTML = contadorTurnos;
        turno = new Turno();
        console.log(turno.numeroDeAcciones);
        document.getElementById("iniciativa").innerHTML = turno.numeroDeAcciones;

    });

});