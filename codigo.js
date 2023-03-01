


//Dark-mode

document.getElementById('check-item').addEventListener('click', function enableDarkMode() {
    let contenido_body = document.body;
    contenido_body.classList.toggle("dark-mode");
})

document.getElementById('mostrarForm').addEventListener('click', function(){
    document.getElementById('ocultarForm').style.display = 'block';
    document.getElementById('mostrarForm').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
})

document.getElementById('ocultarForm').addEventListener('click', function(){
    document.getElementById('mostrarForm').style.display = 'block';
    document.getElementById('ocultarForm').style.display = 'none';
    document.getElementById('formulario').style.display = 'none';
})











