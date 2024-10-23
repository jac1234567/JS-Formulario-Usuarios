let usuarios = [];
let indiceActual = 0;

document.getElementById('crearUsuarioBtn').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'block';
});

document.getElementById('enviarBtn').addEventListener('click', function() {

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let dni = document.getElementById('dni').value;
    let telefono = document.getElementById('telefono').value;
    let correo = document.getElementById('correo').value;

    let nuevoUsuario = { nombre, apellido, dni, telefono, correo };
    usuarios.push(nuevoUsuario);
    indiceActual = usuarios.length - 1;

    mostrarUsuario(indiceActual);
    actualizarContadores();
    actualizarBotones();

    // Limpiar campos y ocultar formulario
    document.getElementById('formulario').reset();
    document.getElementById('formulario').style.display = 'none';
});

function mostrarUsuario(indice) {
    let usuario = usuarios[indice];
    if (usuario) {
        document.getElementById('usuarioInfo').innerHTML = `
            <p><strong>Nombre:</strong> ${usuario.nombre}</p>
            <p><strong>Apellido:</strong> ${usuario.apellido}</p>
            <p><strong>DNI:</strong> ${usuario.dni}</p>
            <p><strong>Teléfono:</strong> ${usuario.telefono}</p>
            <p><strong>Correo:</strong> ${usuario.correo}</p>
        `;
    }
}

function actualizarContadores() {
    document.getElementById('cantidadUsuarios').innerText = `Cantidad de usuarios: ${usuarios.length}`;
    document.getElementById('numeroUsuario').innerText = `Usuario actual: ${indiceActual + 1}`;
}

function actualizarBotones() {
    document.getElementById('anteriorBtn').disabled = (indiceActual === 0);
    document.getElementById('siguienteBtn').disabled = (indiceActual === usuarios.length - 1);
}

document.getElementById('anteriorBtn').addEventListener('click', function() {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarUsuario(indiceActual);
        actualizarContadores();
        actualizarBotones();
    }
});

document.getElementById('siguienteBtn').addEventListener('click', function() {
    if (indiceActual < usuarios.length - 1) {
        indiceActual++;
        mostrarUsuario(indiceActual);
        actualizarContadores();
        actualizarBotones();
    }
});
