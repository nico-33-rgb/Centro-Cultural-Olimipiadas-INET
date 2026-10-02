const fechaActual = new Date();

const formPreinscripcion = document.getElementById("formularioPreinscripcion");
const textoEstadoPreinscripcion = document.getElementById(
  "textoEstadoPreinscripcion",
);

// Formulario de la página preinscripcion

if (formPreinscripcion) formPreinscripcion.addEventListener("submit", (e) => {
    textoEstadoPreinscripcion.textContent = "";
    textoEstadoPreinscripcion.className = "";
    e.preventDefault(); // Evita que se recargue la página

    // Variables para el valor del formulario
    const nombrePreinscripcion = document
      .getElementById("nombrePreinscripcion")
      .value.trim();
    const dniPreinscripcion = document
      .getElementById("dniPreinscripcion")
      .value.trim();
    const emailPreinscripcion = document
      .getElementById("emailPreinscripcion")
      .value.trim();
    const telefonoPreinscripcion = document
      .getElementById("telefonoPreinscripcion")
      .value.trim();
    const fechaNacimientoPreinscripcion = document.getElementById(
      "fechaNacimientoPreinscripcion",
    ).value;
    const actividadPreinscripcion = document.getElementById(
      "actividadPreinscripcion",
    ).value;

    let valido = true; // Variable para validar los datos

    // Variables para los campos del formulario

    const nombreCampoPreinscripcion = document.getElementById(
      "nombrePreinscripcion",
    );
    const dniCampoPreinscripcion = document.getElementById("dniPreinscripcion");
    const emailCampoPreinscripcion = document.getElementById(
      "emailPreinscripcion",
    );
    const telefonoCampoPreinscripcion = document.getElementById(
      "telefonoPreinscripcion",
    );
    const fechaNacimientoCampoPreinscripcion = document.getElementById(
      "fechaNacimientoPreinscripcion",
    );
    const actividadCampoPreinscripcion = document.getElementById(
      "actividadPreinscripcion",
    );

    // Comprobar nombre
    if (nombrePreinscripcion === "") {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent = "Todos los campos son necesarios";
      valido = false;
      nombreCampoPreinscripcion.classList.add("campoinvalido");
    } else if (nombrePreinscripcion.lenght < 3) {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent =
        "El nombre debe tener mínimo 3 caracteres";
      valido = false;
      nombreCampoPreinscripcion.classList.add("campoinvalido");
    } else {
      nombreCampoPreinscripcion.classList.remove("campoinvalido");
    }

    // Comprobar DNI
    if (dniPreinscripcion === "") {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent = "Todos los campos son necesarios";
      valido = false;
      dniCampoPreinscripcion.classList.add("campoinvalido");
    } else if (
      dniPreinscripcion.toString().length < 7 ||
      dniPreinscripcion.toString().length > 8
    ) {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent = "El DNI ingresado no es válido";
      valido = false;
      dniCampoPreinscripcion.classList.add("campoinvalido");
    } else {
      dniCampoPreinscripcion.classList.remove("campoinvalido");
    }

    // Comprobar email
    if (emailPreinscripcion === "") {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent = "Todos los campos son necesarios";
      valido = false;
      emailCampoPreinscripcion.classList.add("campoinvalido");
    } else if (
      !emailPreinscripcion.includes("@") ||
      !emailPreinscripcion.includes(".")
    ) {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent =
        "El correo ingresado no es válido";
      valido = false;
      emailCampoPreinscripcion.classList.add("campoinvalido");
    } else {
      emailCampoPreinscripcion.classList.remove("campoinvalido");
    }

    // Comprobar telefono
    if (telefonoPreinscripcion === "") {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent = "Todos los campos son necesarios";
      valido = false;
      telefonoCampoPreinscripcion.classList.add("campoinvalido");
    } else if (telefonoPreinscripcion.toString().length !== 10) {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent =
        "El telefono ingresado no es válido";
      valido = false;
      telefonoCampoPreinscripcion.classList.add("campoinvalido");
    } else {
      telefonoCampoPreinscripcion.classList.remove("campoinvalido");
    }

    // Comprobar fecha de nacimiento
    const fechaNacimientoFormato = new Date(fechaNacimientoPreinscripcion); // Variable para leer la fecha de nacimiento con formato de fecha
    if (fechaNacimientoPreinscripcion === "") {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent = "Todos los campos son necesarios";
      valido = false;
      fechaNacimientoCampoPreinscripcion.classList.add("campoinvalido");
    } else if (
      fechaNacimientoFormato > fechaActual ||
      fechaNacimientoFormato.getFullYear() < 1900
    ) {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent =
        "La fecha de nacimiento ingresada no es válida";
      valido = false;
      fechaNacimientoCampoPreinscripcion.classList.add("campoinvalido");
    } else {
      fechaNacimientoCampoPreinscripcion.classList.remove("campoinvalido");
    }

    // Comprobar actividad
    if (actividadPreinscripcion === "") {
      textoEstadoPreinscripcion.className = "error";
      textoEstadoPreinscripcion.textContent = "Todos los campos son necesarios";
      valido = false;
      actividadCampoPreinscripcion.classList.add("campoinvalido");
    } else {
      actividadCampoPreinscripcion.classList.remove("campoinvalido");
    }

    if (valido === true) {
      textoEstadoPreinscripcion.textContent = "Formulario enviado con éxito";
      textoEstadoPreinscripcion.className = "exito";
      formInicio.reset();
    }
  });

// Menú para celulares
const botonHamburguesa = document.getElementById("hamburger");
const listaNavegacion = document.getElementById("navegacion");

function cerrarMenu() {
  listaNavegacion.classList.remove("abierto");
  botonHamburguesa.classList.remove("activo");
  botonHamburguesa.setAttribute("aria-expanded", "false");
  botonHamburguesa.setAttribute("aria-label", "Abrir menú");
}

if (botonHamburguesa && listaNavegacion) {
  botonHamburguesa.addEventListener("click", () => {
    const abierto = listaNavegacion.classList.toggle("abierto");
    botonHamburguesa.classList.toggle("activo", abierto);
    botonHamburguesa.setAttribute("aria-expanded", abierto);
    botonHamburguesa.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú" : "Abrir menú",
    );
  });
  // Cierra el menú al tocar un enlace, al tocar afuera o con Escape
  listaNavegacion
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", cerrarMenu));
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) cerrarMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarMenu();
  });
  window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
    if (e.matches) cerrarMenu();
  });
}