// ===========================================
// GUARDAR HISTORIAL EN LOCALSTORAGE
// ===========================================
function guardarHistorial(tipo, litros, total) {
    const registro = {
        tipo,
        litros,
        total,
        fecha: new Date().toLocaleString()
    };

    // Obtener historial previo
    let historial = JSON.parse(localStorage.getItem("historialGasolina")) || [];

    // Agregar nuevo registro
    historial.push(registro);

    // Guardar nuevamente
    localStorage.setItem("historialGasolina", JSON.stringify(historial));
}
