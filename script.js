/* =====================================================
   ❤️ PREGUNTAS
===================================================== */


const preguntas = [

    {
        pregunta:
            "¿Que haremos cuando tengamos dinerito?",

        respuestas: [
            "Viajar por todo el mundo",
            "Ahorrar noma",
            "Ir por mucho sushi jeje"
        ],

        correcta: 0
    },


    {
        pregunta:
            "¿Cuál fue nuestr primer viaje",

        respuestas: [
            "Asturias, Gijón",
            "Portugal, Oporto",
            "País Vasco, Donosti"
        ],

        correcta: 2
    }

];


let preguntaActual = 0;



/* =====================================================
   ELEMENTOS DEL QUIZ
===================================================== */


const preguntaElemento =
    document.getElementById("pregunta");


const respuestasElemento =
    document.getElementById("respuestas");


const mensajeElemento =
    document.getElementById("mensaje");



/* =====================================================
   MOSTRAR PREGUNTA
===================================================== */


function mostrarPregunta() {


    const pregunta =
        preguntas[preguntaActual];


    preguntaElemento.textContent =
        pregunta.pregunta;


    respuestasElemento.innerHTML =
        "";


    mensajeElemento.textContent =
        "";


    pregunta.respuestas.forEach(
        function(respuesta, indice) {


            const boton =
                document.createElement("button");


            boton.textContent =
                respuesta;


            boton.onclick =
                function() {

                    comprobarRespuesta(
                        indice
                    );

                };


            respuestasElemento.appendChild(
                boton
            );

        }
    );

}



/* =====================================================
   COMPROBAR RESPUESTA
===================================================== */


function comprobarRespuesta(indice) {


    const pregunta =
        preguntas[preguntaActual];


    if (
        indice === pregunta.correcta
    ) {


        preguntaActual++;


        if (
            preguntaActual >=
            preguntas.length
        ) {


            document.getElementById("quiz")
                .style.display =
                "none";


            document.getElementById(
                "bienvenida"
            ).style.display =
                "flex";


        } else {


            mostrarPregunta();

        }


    } else {


        mensajeElemento.textContent =
            "Mmm... esa no era 😌 Inténtalo otra vez.";

    }

}



/* =====================================================
   📅 LOS 17 DÍAS
===================================================== */


const dias = [


    {
        dia: 1,

        foto: "fotos/dia1.jpg",

        mensaje:
            "Amo cada uno de tus besos y abrazos ❤️"
    },


    {
        dia: 2,

        foto: "fotos/dia2.jpg",

        mensaje:
            "Cualquier plan es el mejor mientras sea a tu lado❤️"
    },


    {
        dia: 3,

        foto: "fotos/dia3.jpg",

        mensaje:
            "Despertar junto a ti es un regalo de los angeles ❤️"
    },


    {
        dia: 4,

        foto: "fotos/dia4.jpg",

        mensaje:
            "Me encanta descubrir el mundo de tu mano❤️"
    },


    {
        dia: 5,

        foto: "fotos/dia5.jpg",

        mensaje:
            "Siempre descubriendo cosas a tu lado babe ❤️"
    },


    {
        dia: 6,

        foto: "fotos/dia6.jpg",

        mensaje:
            "Rezo por entrar año tras año juntitos hasa el final ❤️"
    },


    {
        dia: 7,

        foto: "fotos/dia7.jpg",

        mensaje:
            "Lo mas hermoso del mundo, el mar y el amor de mi vida ❤️"
    },


    {
        dia: 8,

        foto: "fotos/dia8.jpg",

        mensaje:
            "Que rico es poder estar piel con piel ❤️"
    },


    {
        dia: 9,

        foto: "fotos/dia9.jpg",

        mensaje:
            "Tienes la sonrisa mas alegre y contagiosa del mundo ❤️"
    },


    {
        dia: 10,

        foto: "fotos/dia10.jpg",

        mensaje:
            "Que feliz me hace ser tu pololo ❤️"
    },


    {
        dia: 11,

        foto: "fotos/dia11.jpg",

        mensaje:
            "Me encanta que theito apareciera en tu vida para asi poder sonreir mas veces ❤️"
    },


    {
        dia: 12,

        foto: "fotos/dia12.jpg",

        mensaje:
            "Siempre cuidare de ti, en la salud y la enfermedad ❤️"
    },


    {
        dia: 13,

        foto: "fotos/dia13.jpg",

        mensaje:
            "Siento que contigo podria ser feliz en cualquier lugar del mundo ❤️"
    },


    {
        dia: 14,

        foto: "fotos/dia14.jpg",

        mensaje:
            "Otro añito mas que pasamos juntitos❤️"
    },


    {
        dia: 15,

        foto: "fotos/dia15.jpg",

        mensaje:
            "Amo lo bien que vistes y lo bien que te queda todo amorcin ❤️"
    },


    {
        dia: 16,

        foto: "fotos/dia16.jpg",

        mensaje:
            "Una foto para toda una vida... ❤️"
    },


    {
        dia: 17,

        foto: "fotos/dia17.jpg",

        mensaje:
            "Juntos, siempre el mejor equipo ❤️"
    }

];



/* =====================================================
   📅 FECHA DE INICIO
===================================================== */


/*

   1 SEPTIEMBRE 2026 = DÍA 1

   En JavaScript:
   enero = 0
   febrero = 1
   ...
   septiembre = 8

*/

const fechaInicio =
    new Date(2026, 8, 1);



/* =====================================================
   ❤️ BOTÓN ENTRAR
===================================================== */


const botonEntrar =
    document.getElementById(
        "botonEntrar"
    );


botonEntrar.onclick =
    function() {

        mostrarSorpresa();

    };



/* =====================================================
   📅 CALCULAR DÍA ACTUAL
===================================================== */


function obtenerDiaActual() {


    const hoy =
        new Date();


    /*
       Quitamos las horas para
       comparar solamente fechas.
    */

    const inicio =
        new Date(
            fechaInicio.getFullYear(),
            fechaInicio.getMonth(),
            fechaInicio.getDate()
        );


    const fechaHoy =
        new Date(
            hoy.getFullYear(),
            hoy.getMonth(),
            hoy.getDate()
        );


    const diferencia =
        Math.floor(
            (
                fechaHoy - inicio
            )
            /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    /*
       Antes del 1 de septiembre.
    */

    if (
        diferencia < 0
    ) {

        return 0;

    }


    /*
       Del día 17 en adelante,
       mantenemos el Día 17.
    */

    if (
        diferencia >= 16
    ) {

        return 17;

    }


    /*
       Convertimos la diferencia
       en número de día.

       0 = Día 1
       1 = Día 2
       2 = Día 3
       etc.
    */

    return diferencia + 1;

}



/* =====================================================
   🌹 MOSTRAR SORPRESA
===================================================== */


function mostrarSorpresa() {


    document.getElementById(
        "bienvenida"
    ).style.display =
        "none";


    document.getElementById(
        "sorpresa"
    ).style.display =
        "block";


    prepararSorpresa();

}



/* =====================================================
   🌸 PREPARAR SORPRESA
===================================================== */


function prepararSorpresa() {


    const diaActual =
        obtenerDiaActual();


    crearBotonesDias(
        diaActual
    );


    /*
       Todavía no ha comenzado.
    */

    if (
        diaActual === 0
    ) {

        mostrarAntesDeEmpezar();

        return;

    }


    /*
       Abrimos automáticamente
       el día de hoy.
    */

    mostrarDia(
        diaActual,
        diaActual
    );

}



/* =====================================================
   🔢 CREAR BOTONES DE LOS DÍAS
===================================================== */


function crearBotonesDias(
    diaActual
) {


    const selector =
        document.getElementById(
            "selectorDias"
        );


    selector.innerHTML =
        "";


    for (
        let numero = 1;
        numero <= 17;
        numero++
    ) {


        const boton =
            document.createElement(
                "button"
            );


        boton.classList.add(
            "boton-dia"
        );


        /*
           DÍA DISPONIBLE
        */

        if (
            diaActual > 0 &&
            numero <= diaActual
        ) {


            boton.classList.add(
                "disponible"
            );


            /*
               DÍA ACTUAL
            */

            if (
                numero === diaActual
            ) {

                boton.classList.add(
                    "hoy"
                );

            }


            boton.textContent =
                numero;


            boton.onclick =
                function() {

                    mostrarDia(
                        numero,
                        diaActual
                    );

                };


        }


        /*
           DÍA BLOQUEADO
        */

        else {


            boton.classList.add(
                "bloqueado"
            );


            boton.textContent =
                "🔒";


            boton.disabled =
                true;

        }


        selector.appendChild(
            boton
        );

    }

}



/* =====================================================
   📸 MOSTRAR DÍA
===================================================== */


function mostrarDia(
    numero,
    diaActual
) {


    /*
       No permitir días futuros.
    */

    if (
        numero > diaActual ||
        numero < 1
    ) {

        return;

    }


    const informacion =
        dias[numero - 1];


    const tarjeta =
        document.getElementById(
            "tarjetaDia"
        );


    /*
       Volver a la cara de la foto.
    */

    tarjeta.classList.remove(
        "girada"
    );


    /*
       Título.
    */

    document.getElementById(
        "tituloDia"
    ).textContent =
        "Día " + numero;


    /*
       Foto.
    */

    document.getElementById(
        "fotoDia"
    ).src =
        informacion.foto;


    /*
       Texto.
    */

    document.getElementById(
        "mensajeDia"
    ).textContent =
        informacion.mensaje;


    /*
       Contador.
    */

    actualizarContador(
        numero,
        diaActual
    );


    /*
       Mostrar carta únicamente
       cuando se está viendo
       el Día 17.
    */

    if (
        numero === 17
    ) {


        document.getElementById(
            "sobreFinal"
        ).style.display =
            "block";


    } else {


        document.getElementById(
            "sobreFinal"
        ).style.display =
            "none";

    }

}



/* =====================================================
   ⏳ CONTADOR
===================================================== */


function actualizarContador(
    numero,
    diaActual
) {


    const contador =
        document.getElementById(
            "contador"
        );


    /*
       Si estamos viendo HOY.
    */

    if (
        numero === diaActual
    ) {


        const restantes =
            17 - diaActual;


        if (
            restantes > 0
        ) {


            contador.textContent =
                "Hoy es el día " +
                diaActual +
                " de 17 ❤️ · Faltan " +
                restantes +
                " días para el final.";


        } else {


            contador.textContent =
                "Hoy es el último día ❤️";

        }


    } else {


        contador.textContent =
            "Este es el Día " +
            numero +
            " de nuestra sorpresa ❤️";

    }

}



/* =====================================================
   🌙 ANTES DEL 1 DE SEPTIEMBRE
===================================================== */


function mostrarAntesDeEmpezar() {


    const hoy =
        new Date();


    const inicio =
        new Date(
            2026,
            8,
            1
        );


    const diferencia =
        Math.ceil(
            (
                inicio - hoy
            )
            /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    document.getElementById(
        "tituloDia"
    ).textContent =
        "Nuestra sorpresa está por comenzar ❤️";


    document.getElementById(
        "contador"
    ).textContent =
        "Faltan " +
        diferencia +
        " días para el Día 1.";


    document.getElementById(
        "tarjetaDia"
    ).style.display =
        "none";


    document.querySelector(
        ".indicacion"
    ).style.display =
        "none";

}



/* =====================================================
   🔄 GIRAR TARJETA
===================================================== */


const tarjeta =
    document.getElementById(
        "tarjetaDia"
    );


tarjeta.onclick =
    function() {

        tarjeta.classList.toggle(
            "girada"
        );

    };



/* =====================================================
   💌 ABRIR SOBRE
===================================================== */


const sobre =
    document.getElementById(
        "sobre"
    );


sobre.onclick =
    function() {

        sobre.classList.toggle(
            "abierto"
        );

    };



/* =====================================================
   🚀 INICIAR
===================================================== */


mostrarPregunta();