const botonEnviarDatos = document.querySelector("#enviar-informacion");


botonEnviarDatos.onlcik = function(){
    
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const segundoNombre = document.querySelector('#segundo-nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
    const informacionPersonal = `El nombre completo de usuario es ${nombreUsuario}, ${segundoNombre}, ${apellido} y su edad es ${edad}` 
    document.querySelector('#info').innerText = informacionPersonal;
    const titulo = document.querySelector('h1');

    document.querySelector('#info').innerText = informacionPersonal;
    titulo.innerText = `Bienvenido ${nombreUsuario}!`;

    return false;
}


