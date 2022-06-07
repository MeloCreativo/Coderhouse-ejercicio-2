alert("Ejercicio Nº 2: Simulador interactivo\nMelo, Francisco")

// Variables para categorías a consultar
const ARTE = 1
const CULTURA = 2
const ESPECTACULOS = 3

// Ingreso de nombre y validación del mismo
function validateName() {
    let nameEntering = prompt("¡Bienvenidos a QuizScript!\nPor favor ingresa tu nombre:")
    while(nameEntering === "" || !isNaN(nameEntering)) {
        nameEntering = prompt("Lo sentimos, no puedes proceder sin un nombre de usuario y no se permiten caracteres numéricos.\nPor favor ingresa un nombre compuesto de letras:")
    }
    return nameEntering;
}

// Selección de la categoría deseada
function chooseCategory(nameEntering) {
    let categorySelection = parseInt(prompt("Muy bien " + nameEntering + " " + "para jugar elige una categoría, introduciendo el número de índice a la izquierda de la opción que decidas:\n1) Arte\n2) Cultura general\n3) Espectáculos"))
    while (categorySelection !== ARTE && categorySelection !== CULTURA && categorySelection !== ESPECTACULOS) {
        categorySelection = parseInt(prompt("Hubo un error en tu selección " + nameEntering + ". " + "\nPor favor elige una categoría:\n1) Arte\n2) Cultura General\n3) Espectáculos"))
    };
    return categorySelection;
}

// Categoría elegida y comienzo del Quiz
function askQuestion(categorySelection) {
    if (categorySelection === ARTE) {
        alert("Muy bien haz elegido la categoría Arte.\n!Responde las siguientes preguntas y acumula puntos para ganar!")
        result = artQuiz()
    } else if (categorySelection === CULTURA) {
        alert("Muy bien haz elegido la categoría Cultura General.\n!Responde las siguientes preguntas y acumula puntos para ganar!")
        result = cultureQuiz()
    } else if (categorySelection === ESPECTACULOS) {
        alert("Muy bien haz elegido la categoría Espectáculos.\n!Responde las siguientes preguntas y acumula puntos para ganar!")
        result = entretainmentQuiz()
    }
    return result
}

// Preguntas, opciones y counter start para categoría "Arte"
function artQuiz() {
    let counter = 0;
    if (prompt("¿Quién pintó la Mona Lisa?:\n1) Leonardo da Vinci\n2) Miguel Angel\n3) Juan Román Riquelme") == 1){
        counter += 1;
    }
    if (prompt("¿Quién fue el encargado de pintar el techo de la Capilla Sixtina?:\n1) Donatello\n2) Neil Amstrong\n3) Miguel Angel") == 3){
        counter += 1;
    }
    if (prompt("¿Quién fue el reconocido autor de El Guernica?\n1) Ricardo Mollo\n2) Santos Biasatti\n3) Pablo Picasso") == 3){
        counter += 1;
    }
    return counter;
}

// Preguntas, opciones y counter start para categoría "Cultura General"
function cultureQuiz() {
    let counter = 0;
    if (prompt("¿Dónde se originaron los Juegos Olímpicos?\n1) Roma\n2) Grecia\n3) Inglaterra") == 2){
        counter += 1;
    }
    if (prompt("¿Quién fue el autor del famoso libro El Quijote?:\n1) Miguel Cervantes\n2) Juan Domingo Perón\n3) Alejandro Dolina") == 1){
        counter += 1;
    }
    if (prompt("¿Cuál es el disco más vendido de la historia?:\n1) Thriller - Michael Jackson\n2) Arrival - Abba\n3) Back in black - AC/DC") == 1){
        counter += 1;
    }
    return counter;
}

// Preguntas, opciones y counter start para categoría "Entretenimiento"
function entretainmentQuiz() {
    let counter = 0;
    if (prompt("¿Quién fue el director del famoso film E.T?:\n1) Sammuel Jackson\n2) Steven Seagul\n3) Steven Spielberg") == 3){
        counter += 1;
    }
    if (prompt("¿Cuál es el nombre del film más taquillero de la historia?:\n1) Avatar\n2) Titanic\n3) Esperado la carroza") == 1){
        counter += 1;
    }
    if (prompt("¿Cuáles son las siglas del canal de noticias más famoso de Reino Unido?:\n1) CNN\n2) BBC\n3) TNT") == 2){
        counter += 1;
    }
    return counter;
}

// Resultado final
function showReuslt(finalResult, nameEntering) {
    if(finalResult == 3){
        alert("¡Genial " + nameEntering + ", tu puntaje fue de " + finalResult + " ,un puntaje perfecto!.\nGracias por participar." )
    } else if(finalResult < 3){
        alert("Buen intento, tu puntaje fue de " + finalResult + ". No obtuviste un puntaje perfecto. ¡Mejor suerte la próxima!\nHaz click en aceptar o refresca para volver a intentarlo.")
    }
}

// Función para intentarlo de vuelta en caso de no obtener un puntaje perfecto
function tryAgain(result) {
    if (result < 3) {
        mainWorkflow()
    }
}

//** Flujo principal del programa **//
function mainWorkflow() {
    const nameEntering = validateName();
    const categorySelection = chooseCategory(nameEntering)
    const result = askQuestion(categorySelection)
    showReuslt(result, nameEntering);
    tryAgain(result)
}

//*** Llamada a la función principal (mainWorkflow) ***//
mainWorkflow();