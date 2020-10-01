class Participante {

    constructor(nombre, hab, agi) {

        this.nombre = nombre;
        this.hab = hab;
        this.agi = agi;

    }


}


class Turno {

    static turno = 0;

    participante0;
    participante1 = new Participante('villa', 7, 1);
    participante2 = new Participante('romu', 9, 0);
    participante3 = new Participante('elif', 7, 2);
    participante4 = new Participante('navarro', 6, 2);

    participantes = [];
    numeroDeAcciones = [];
    iniciativa = [];
    contador = [];

    constructor() {

        this.turno++;

        this.añadirParticipantes();

    };

    añadirParticipantes() {

        this.participantes.push(this.participante1, this.participante2, this.participante3, this.participante4);
    }

    obtenerParticipaciones() {

        for (let i = 0; i < this.participantes.length; i++) {

            if (this.participantes[i].hab <= 6) {
                this.numeroDeAcciones.push(this.participantes[i]);
            } else if (this.participantes[i].hab == 7 || this.participantes[i].hab == 8) {
                this.numeroDeAcciones.push(this.participantes[i]);
                this.numeroDeAcciones.push(this.participantes[i]);
            } else if (this.participantes[i].hab == 9 || this.participantes[i].hab == 10) {
                this.numeroDeAcciones.push(this.participantes[i]);
                this.numeroDeAcciones.push(this.participantes[i]);
                this.numeroDeAcciones.push(this.participantes[i]);
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

turno = new Turno;
turno.obtenerParticipaciones();
turno.getIniciativa();
console.log(turno.numeroDeAcciones);
// console.log(turno.iniciativa);