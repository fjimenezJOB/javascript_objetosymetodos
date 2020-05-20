/*
    Ejercicio para practicar la creación de objetos en javascript.

    1. Crear objetos con todas sus propiedades.
    2. Crear uno o mas métodos para cada uno de los objetos.
*/

//  Objetos

var botella = {
    // Propiedades
    medida : 1.5,
    color : 'Transparente',
    maca : 'Font Vella',
    abierta : false,

    // Metodos
    abrirBotella : function () {
        if (this.abierta == false) {
            // Si la botella esta cerrada la abrimos.
            this.abierta = true;
        }else if(this.abierta == true) {
            // Si ya estaba abierta, la dejamos abierta y se lo decimos al usuario.
            console.log('La botella ya està abierta');
        }
    },
    cerrarBotella: function () {
        if(this.abierta === true) {
            console.log('Has cerrado la botella');
        } else if (this.abuerta === false) {
            console.log('La botella ya està cerrada');
        }
    }
}

var moto = {
    // Propiedades
    marca : 'Suzuki',
    modelo : 'A31',
    color : 'Negro',
    anchuraRuedas: '22\'',
    gasolina : 3,
    luces : false,
    encendida : false,

    // Métodos
    encenderMoto : function(){

        if (this.encendida === false && this.gasolina > 0){
            // Si la moto esta apagada y tiene gasolina, la encendemos y le quitamos 1L de gasolina, así por la cara que ahora está barata.
            console.log('Has encendido la Moto');
            this.encendida = true;
            this.gasolina = this.gasolina -1;

        }else if(this.gasolina < 0){
            // Si la moto no tiene gasolina se lo decimos al usuario y la moto no se enciende;
            console.log('La moto no se enciende porque no tiene gasolina, ves a la chofera');

        }else if(this.encendida === true){
            // Si la moto ya estaba encendida le decimos que es tonto y no la vuelva a encender.
            console.log('La moto ya está encendida !!!');
        }
    },
    encenderLuces : function () {
        if (this.luces === false && this.encendida === true) {
            // Si las luces están apagadas y la moto está encendida, encendemos luces.
            console.log('Has encendido las luces');
            this.luces = true;

        } else if(this.encendida === false){
            // Si la moto está apagada le decimos que la encienda primero.
            console.log('Las luces no se encienden porque la moto está apagada, enciende la moto primero !!!');
        }
    },
    apagarLuces : function () {
        if(this.luces === true){
            // Si las luces estaban encendidas, las apagamos.
            console.log('Has apagado las luces');
            this.luces = false;

        } else if (this.luces === false){
            // Si ya estaban apagadas se lo decimos al usuario.
            console.log('Las luces ya están apagadas !!!');
        }
    },
    apagarMoto : function () {
        if (this.encendida === true){
            // Si la moto estaba encendida apagamos la moto y las luces (por si acaso, no se vaya a quedar sin batería).
            console.log('Has apagado la moto');
            this.encendida = false;
            this.luces = false;

        } else if(this.encendida === false){
            // Si la moto estaba apagada le decimos que ya estaba apagada.
            console.log('La moto ya está apagada !!!');
        }
    },
    hecharGasolina : function (litrosGasolina) {
        // Sumamos la gasolina que hay con la que quiere hechar para que no se pase del máximo de litros que caben en el tanque.
        var totalGasolina = this.gasolina + litrosGasolina;

        if (totalGasolina > 15){
            // Si se pasa, le decimos los litros que hay, los que quiere hechar y el máximo que caben en la moto.
            console.log(`Te pasas de litros, en el deposito hay ${this.gasolina}L, tu quieres hecharle ${litrosGasolina}L, el máximo es 15L.`);

        } else if(totalGasolina <= 15 ){
            // Si la suma de los dos es menor o igual a 15 L ( el máximo del deposito ), sumamos los litros a lo que ya habia en el tanque.
            console.log('Has rellenado el tanque de gasolina');
            this.gasolina = this.gasolina + litrosGasolina;
        }
    }

}

var lampara = {
    // Propiedades
    marca : 'Xiaomi',
    modelo : 'Mi Lamp',
    color : 'Blanco',
    encendido : false,
    coloresLed : ['Blanco', 'Naranja', 'Azul'],
    colorActual : '',

    // Métodos
    encender : function () {
        if (this.encendido == false){
            // Si la lampara estaba apagada la encendemos.
            console.log('La lampara se ha encendido.')
            this.encendido == true;

        } else if (this.encendido === true){
            // Si ya estaba encendida se lo decimos al usuario.
            console.log('La lampara está encendida');
        }
    },
    apagar : function(){
        if (this.encendido === true){
            console.log('Has apagado la lampara');
            this.encendido = false;
        } else {
            console.log('La lampara está encendida !!');
        }
    },
    cambiarColor : function (color) {
        if (this.encendido === true && color <= 2){
            // Si la lampara estaba encendida y el color que quiere el usuario no supera el 2 ( en el array de coloresLed hay 3 colores 0,1 y 2 ), ponemos el color deseado.
            console.log('Color BLANCO -> 0 \n Color NARANJA -> 1 \n Color AZUL -> 2');
            this.colorActual = this.coloresLed[color];

        } else if(this.encendido === false) {
            // Si la lampra esta apagada le pedimos al usuario que la encienda.
            console.log('Primero tienes que encender la lampara !!!');

        } else if(color > 2){
            // Si el color supera el 2 que es el array de coloresLed, le decimos que el color no lo tiene la lampara
            console.log('Este color no existe para tu lampara, por favor introduce 0, 1 ó 2 !!!');
        }
    }
}