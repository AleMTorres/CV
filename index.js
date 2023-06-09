const formularioContacto = document.getElementById("contactForm");

formularioContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    const tablaDatos = document.getElementById("tableSection");

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const sueldo = document.getElementById("sueldo").value;
    const asunto = document.getElementById("asunto").value;
    const cotDolar = 484;
    const cotEuro = 526;
    console.log(typeof telefono)

    if (/^\d+$/.test(nombre)) {
        alert("No puede ingresar un número como nombre")(sueldo <= 0)
    } else if (sueldo <= 0) {
        alert("Ingrese un valor mayor a 0")
    } else {
        const inputData = [{
            "nombre": nombre,
            "email": email,
            "telefono": telefono,
            "sueldoPesos": sueldo,
            "sueldoDolares": sueldo / cotDolar,
            "sueldoEuros": sueldo / cotEuro,
            "asunto": asunto
        }];

        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("sueldo").value = "";
        document.getElementById("asunto").value = "";

        if (tablaDatos.innerHTML.trim() == "") {
            tablaDatos.innerHTML = showTableElement(inputData);
        } else {
            const tbody = document.getElementById("tbody");
            const tableTr = dataTable(inputData);
            tbody.innerHTML += tableTr;
        }
    }

})

function showTableElement(data) {
    const { nombre, email, telefono, sueldoPesos, sueldoDolares, sueldoEuros, asunto } = data[0];

    const tableElement = `<table class="table table-secondary">
        <thead>
            <tr>
                <th>Nombre y apellido</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Sueldo ofrecido en pesos</th>
                <th>Sueldo ofrecido en dolares</th>
                <th>Sueldo ofrecido en euros</th>
                <th>Asunto</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr>
                <td>${nombre}</td>
                <td>${email}</td>
                <td>${telefono}</td>
                <td>${sueldoPesos}</td>
                <td>${sueldoDolares.toFixed(2)}</td>
                <td>${sueldoEuros.toFixed(2)}</td>
                <td>${asunto}</td>
            </tr>
        </tbody>
    </table>`;

    return tableElement;
}

function dataTable(data) {
    const { nombre, email, telefono, sueldoPesos, sueldoDolares, sueldoEuros, asunto } = data[0];

    let tr = ""

    tr = `<tr>
        <td>${nombre}</td>
        <td>${email}</td>
        <td>${telefono}</td>
        <td>${sueldoPesos}</td>
        <td>${sueldoDolares.toFixed(2)}</td>
        <td>${sueldoEuros.toFixed(2)}</td>
        <td>${asunto}</td>
    </tr>`

    return tr;
}