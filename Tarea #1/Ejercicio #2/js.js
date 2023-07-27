function aplicarDescuento() {
    const precioOriginal = parseFloat(document.getElementById("precioOriginal").value);
    let precioConDescuento;

    if (precioOriginal >= 10000 && precioOriginal <= 20000) {
      precioConDescuento = precioOriginal * 0.95;
    } else if (precioOriginal >= 20001 && precioOriginal <= 30000) {
      precioConDescuento = precioOriginal * 0.9;
    } else if (precioOriginal > 30000) {
      precioConDescuento = precioOriginal * 0.85;
    } else {
      precioConDescuento = precioOriginal;
    }

    document.getElementById("resultado").innerHTML = "Precio con descuento: " + precioConDescuento.toFixed(2) + " colones";
  }