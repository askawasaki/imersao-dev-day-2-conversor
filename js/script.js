function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
    var elementValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementValorConvertido.innerHTML = valorConvertido;
  }