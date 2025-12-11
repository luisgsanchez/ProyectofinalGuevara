// ===================================
// OBTENER PRECIO SEGÚN EL TIPO
// ===================================
function obtenerPrecio(gasolinas, tipoSeleccionado) {
    const encontrado = gasolinas.find(g => g.tipo === tipoSeleccionado);
    return encontrado ? encontrado.precio : 0;
}

// ===================================
// CALCULAR TOTAL A PAGAR
// ===================================
function calcularTotal(precio, litros) {
    return precio * litros;
}
