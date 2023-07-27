function calcularPrecio() {
    const colorSeleccionado = document.getElementById('color').value;
    const cantidadSeleccionada = parseInt(document.getElementById('cantidad').value);
  
    const precios = {
      Rojo: 10,
      Azul: 12,
      Amarillo: 8,
    };
  
    const precioTotal = precios[colorSeleccionado] * cantidadSeleccionada;
  
    const facturaHTML = `
      <h2>Factura de Compra</h2>
      <p>Color seleccionado: ${colorSeleccionado}</p>
      <p>Cantidad seleccionada: ${cantidadSeleccionada}</p>
      <p>Precio unitario: $${precios[colorSeleccionado]}</p>
      <p>Precio total: $${precioTotal}</p>
      <br>
      <button onclick="realizarCompra()">Realizar Compra</button>
    `;
  
    document.getElementById('factura').innerHTML = facturaHTML;
  }
  
  function realizarCompra() {
    alert('Compra realizada. Gracias por su compra.');
  }
  