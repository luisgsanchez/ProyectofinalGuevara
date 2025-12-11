// ===========================================
// Cargar las opciones del select (combustibles)
// ===========================================
function cargarOpcionesSelect(gasolinas) {
    const select = document.getElementById("selectCombustible");

    gasolinas.forEach(gas => {
        const option = document.createElement("option");
        option.value = gas.tipo;
        option.textContent = `${gas.tipo} - $${gas.precio} por litro`;
        select.appendChild(option);
    });
}


// ===========================================
// Mostrar el resultado en pantalla
// ===========================================
function mostrarResultado(tipo, litros, total) {
    const texto = document.getElementById("textoResultado");

    texto.innerHTML = `
        Compraste <strong>${litros} litros</strong> de 
        <strong>${tipo}</strong><br><br>
        Total a pagar: <strong>$${total.toFixed(2)}</strong>
    `;

    Swal.fire({
        icon: "success",
        title: "Cálculo realizado",
        text: `Total a pagar: $${total.toFixed(2)}`,
        confirmButtonColor: "#004aad"
    });
}
