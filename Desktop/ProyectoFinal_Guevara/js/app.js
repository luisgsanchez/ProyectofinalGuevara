// ========================= 
// CARGAR DATOS DESDE JSON
// =========================
async function cargarGasolinas() {
    try {
        // 🔥 RUTA CORRECTA DESDE index.html → data/gasolina.json
        const respuesta = await fetch("data/gasolina.json");
        const data = await respuesta.json();
        return data;  // <- data contiene { gasolinas: [...] }
    } catch (error) {
        console.error("Error cargando el JSON:", error);
    }
}

// =========================
// INICIALIZAR APP
// =========================
document.addEventListener("DOMContentLoaded", async () => {

    // Cargar los combustibles
    const data = await cargarGasolinas();  // data = { gasolinas: [...] }
    const gasolinas = data.gasolinas;      // EXTRAER EL ARRAY REAL

    // Rellenar el select
    cargarOpcionesSelect(gasolinas);

    // Botón de cálculo
    document.getElementById("btnCalcular").addEventListener("click", () => {
        const tipo = document.getElementById("selectCombustible").value;
        const litros = parseFloat(document.getElementById("inputLitros").value);

        if (!tipo || litros <= 0) {
            Swal.fire({
                icon: "warning",
                title: "Datos incompletos",
                text: "Selecciona un combustible e ingresa los litros.",
            });
            return;
        }

        const precio = obtenerPrecio(gasolinas, tipo);
        const total = calcularTotal(precio, litros);

        mostrarResultado(tipo, litros, total);
        guardarHistorial(tipo, litros, total);
    });
});
