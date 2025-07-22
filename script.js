const boton= document.getElementById('botonJugador')
boton.addEventListener('click', function(event) {
    console.log('se dio click al boton')
    const input= document.getElementById('inputJugador')
    console.log(input.value)
    // Si el campo no está vacío, creá un nuevo li con ese nombre
    if (input.value) {
        const nuevoli= document.createElement('li')
        nuevoli.classList.add('list-group-item')
        nuevoli.textContent=input.value
        const lista= document.getElementById('listaJugadores')
        lista.appendChild(nuevoli)
    }
})