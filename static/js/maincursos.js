function obtenerDatos() {
fetch('https://pd-api-firebase-default-rtdb.firebaseio.com/Cursos.json')
    .then(response => response.json())
    .then(data => {
    const cardDeck = document.getElementById('card-deck');

    for (let key in data) {
        const objeto = data[key];

        const card = document.createElement('div');

        const imagen = document.createElement('img');
        imagen.classList.add('card-img-top');
        imagen.src = objeto.Pic;

        const cardBody = document.createElement('div');

        const titulo = document.createElement('h5');
        titulo.classList.add('title');
        titulo.textContent = objeto.Nombre;

        const thumb = document.createElement('div');
        thumb.classList.add('thumb');

        const box = document.createElement('div');
        box.classList.add('box');

        const boxcontainer = document.createElement('div');
        boxcontainer.classList.add('box-container');

        const botonDetalle = document.createElement('button'); // Crear el botón de detalle
        botonDetalle.classList.add('btn', 'btn-primary');
        botonDetalle.textContent = 'Detalle';
        // Agregar el evento de clic al botón para redirigir a otra página
        botonDetalle.addEventListener('click', function() {
        const id = key; // Obtener el ID del bucle

        // Realizar una solicitud GET al servidor para redirigir con el ID
        window.location.href = "detailpage?id=" + id;
      });

        cardBody.appendChild(titulo);
        cardBody.appendChild(botonDetalle); // Agregar el botón al cuerpo de la card
        thumb.appendChild(imagen);

        card.appendChild(thumb);
        card.appendChild(cardBody);

        box.appendChild(card);

        boxcontainer.appendChild(box)

        cardDeck.appendChild(boxcontainer);
    }
    });
}

obtenerDatos();

// Página de detalle de la materia

// Obtener el parámetro 'id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const cursoId = urlParams.get('id');

// Realizar una petición a la API para obtener los detalles del curso con el 'id' proporcionado
fetch('https://pd-api-firebase-default-rtdb.firebaseio.com/Cursos/' + cursoId + '.json')

.then(response => response.json())
.then(data => {
    curso = data;

    const botonAtras = document.querySelector('#btnatras');
        botonAtras.classList.add('btn-small-left');
        botonAtras.addEventListener('click', function() {
        window.location.href = "courses";
      });
      
    const descripcionContainer = document.querySelector('.descripcion-container');

    const portada = document.createElement('img');
    portada.src = curso.Portada;
    portada.classList.add('portada');

    // Crear elementos HTML para mostrar los detalles del curso
    const nombreTitulo = document.querySelector('h3');
    nombreTitulo.textContent = curso.Nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = curso.Descripcion;

    const cursomaterias = document.querySelector('.cursomaterias');
    cursomaterias.textContent = 'Materias: ' + curso.Materias;

    const cursoduracion = document.querySelector('.cursoduracion');
    cursoduracion.textContent = 'Duración: ' + curso.Duracion + " años";


    descripcionContainer.appendChild(portada);
    descripcionContainer.appendChild(nombreTitulo);
    descripcionContainer.appendChild(descripcion);

    const botonDetalle = document.createElement('button'); // Crear el botón de detalle
        botonDetalle.classList.add('btn', 'btn-primary');
        botonDetalle.textContent = 'Detalle';
        // Agregar el evento de clic al botón para redirigir a otra página
        botonDetalle.addEventListener('click', function() {
        const id = key; // Obtener el ID del bucle

        // Realizar una solicitud GET al servidor para redirigir con el ID
        window.location.href = "detailpage?id=" + id;
      });

  });
