// PEDIRLE AL NAVEGADOR QUE NOS AVISE CUANDO TODO EL CODIGO HTML YA HAYA CARGADO Y AHI DISPARAR LA FUNCION CON NUESTRO CÓDIGO JAVASCRIPT
// ESO NOS AYUDA A QUE EL CÓDIGO O EL SCRIPT EL LLAMADO A NUESTRO ARCHIVO DE JAVASCRIPT PUEDA SEGUIR ARRIBA PERO EL CÓDIGO NO SE EJECUTE SI NO QUE HASTA QUE EL NAVEGADOR NOS AVISE QUE TODO ESTE HTML YA CARGO.

function startToPlay(){
    // SELECCIONAMOS ELEMENTOS
    let btnPetsPlayer = document.querySelector('#btnPets');

    // Escuchar eventos
    btnPetsPlayer.addEventListener('click', selectPetsPlayer);
}

// FUNCCION PARA PODER ESCUCHAR EL EVENTO
function selectPetsPlayer(){
    let inputSelect1 = document.querySelector('#hipodoge');
    let inputSelect2 = document.querySelector('#capipepo');
    let inputSelect3 = document.querySelector('#ratigueya');

    // VARIABLES DE NOMBRE DE JUGADORES
    let playerName = document.querySelector('#namePlayer');

    // CONDITION USER PET NAME
    if (inputSelect1.checked){
        playerName.innerHTML = 'Hipodoge';
    } else if(inputSelect2.checked){
        playerName.innerHTML = 'Capipepo';
    } else if(inputSelect3.checked){
        playerName.innerHTML = 'Ratigueya';
    } else{
        alert('No seleccionaste ninguna mascota');
    }

    // Funcion que tuvimos que mandar a llamar ala funcion de "selectPetEnemy" de otra funcion para lograr ejecutarla junto a la otra
    // Recordar que debe ser despues de mandar a llamar la funcion "selectPetsPlayer", es decir tiene que primero el jugaro selecionar su mascota y luego el enemigo
    selectPetEnemy();
}

// FUNCION SELECCIONAR MASCOTA DEL ENEMIGO
function selectPetEnemy(){
    let randomAttack = aleatorio(1,3);
    let playerNameEnemy = document.querySelector('#namePlayerEnemy');

    if(randomAttack == 1){
        // 
        playerNameEnemy.innerHTML = 'Hipodoge';
    } else if(randomAttack == 2){
        // 
        playerNameEnemy.innerHTML = 'Capipepo';
    } else{
        // 
        playerNameEnemy.innerHTML = 'Ratigueya';
    }


}

// Accion que nos diga cual es la variable la mascota que seleccionaron los enemigo

// FUNCION DE SELECCION ALEATORIO PARA EL RIVAL QUE ES LA CPU
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Load the page
window.addEventListener('load', startToPlay);