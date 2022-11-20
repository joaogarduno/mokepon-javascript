// PEDIRLE AL NAVEGADOR QUE NOS AVISE CUANDO TODO EL CODIGO HTML YA HAYA CARGADO Y AHI DISPARAR LA FUNCION CON NUESTRO CÓDIGO JAVASCRIPT
// ESO NOS AYUDA A QUE EL CÓDIGO O EL SCRIPT EL LLAMADO A NUESTRO ARCHIVO DE JAVASCRIPT PUEDA SEGUIR ARRIBA PERO EL CÓDIGO NO SE EJECUTE SI NO QUE HASTA QUE EL NAVEGADOR NOS AVISE QUE TODO ESTE HTML YA CARGO.
window.addEventListener('load', startToPlay);
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

    // CONDITION
    if (inputSelect1.checked){
        alert('seleccionaste a Hipodoge');
    } else if(inputSelect2.checked){
        alert('seleccionaste a Capipepo');
    } else if(inputSelect3.checked){
        alert('Seleccionaste a Ratigueya');
    } else{
        alert('No seleccionaste ninguna mascota');
    }
}