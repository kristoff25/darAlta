// Agregar el evento submit al formulario
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario
    // Obtener los valores del formulario
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const contrasenia = document.getElementById('contrasenia').value;
    const fecha = document.getElementById('fecha').value;
    // Crear un objeto con la información del formulario
    const formData = {
        id,
        nombre,
        contrasenia,
        fecha,
    };
    // Obtener las entradas guardadas en localStorage
    let entries = JSON.parse(localStorage.getItem('formEntries')) || [];
    // Agregar la nueva entrada al arreglo
    entries.push(formData);
    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem('formEntries', JSON.stringify(entries));
    // Limpiar el formulario
    form.reset();
    // Mostrar un mensaje de confirmación
    alert('¡La información del formulario ha sido guardada!');

});

// Obtener las entradas guardadas en localStorage
const entries = JSON.parse(localStorage.getItem('formEntries')) || [];

// Mostrar las entradas en la consola
console.log(entries);





// function actualizarTabla() {
//     const entriesTable = document.getElementById('entries-table');
//     entriesTable.innerHTML = '';

//     // Recorrer el arreglo entries y agregar una fila por cada objeto
//     entries.forEach(entry => {
//         const row = document.createElement('tr');
//         const idCell = document.createElement('td');
//         const nombreCell = document.createElement('td');
//         const contraseniaCell = document.createElement('td');
//         const fechaCell = document.createElement('td');

//         idCell.textContent = entry.id;
//         nombreCell.textContent = entry.nombre;
//         contraseniaCell.textContent = entry.contrasenia;
//         fechaCell.textContent = entry.fecha;

//         row.appendChild(idCell);
//         row.appendChild(nombreCell);
//         row.appendChild(contraseniaCell);
//         row.appendChild(fechaCell);

//         entriesTable.appendChild(row);
//     });
// }

// // Llama la función actualizarTabla después de cargar la página
// window.onload = actualizarTabla;

// localStorage.removeItem([3]);

function actualizarTabla() {
    const entriesTable = document.getElementById('entries-table');
    entriesTable.innerHTML = '';

    // Recorrer el arreglo entries y agregar una fila por cada objeto
    entries.forEach(entry => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        const nombreCell = document.createElement('td');
        const contraseniaCell = document.createElement('td');
        const fechaCell = document.createElement('td');
        const actionsCell = document.createElement('td'); // Agrega una celda para el botón de eliminar

        idCell.textContent = entry.id;
        nombreCell.textContent = entry.nombre;
        contraseniaCell.textContent = entry.contrasenia;
        fechaCell.textContent = entry.fecha;

        const deleteButton = document.createElement('button'); // Crea un botón para eliminar el elemento
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            eliminarEntrada(entry); // Llama a la función eliminarEntrada con el objeto que se va a eliminar
        });

        actionsCell.appendChild(deleteButton); // Agrega el botón de eliminar a la celda de acciones

        row.appendChild(idCell);
        row.appendChild(nombreCell);
        row.appendChild(contraseniaCell);
        row.appendChild(fechaCell);
        row.appendChild(actionsCell); // Agrega la celda de acciones a la fila

        entriesTable.appendChild(row);
    });
}
function eliminarEntrada(entry) {
    const entries = JSON.parse(localStorage.getItem('formEntries')) || [];
    const filteredEntries = entries.filter(e => e !== entry); // Crea un nuevo arreglo sin el objeto que se va a eliminar
    localStorage.setItem('formEntries', JSON.stringify(filteredEntries)); // Actualiza el localStorage
    actualizarTabla(); // Actualiza la tabla para reflejar los cambios
}

//localStorage.removeItem('miElemento');
//localStorage.clear();
