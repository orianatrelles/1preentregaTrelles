function calcular() {
	var numero = parseFloat(document.getElementById("numero").value);
	var porcentaje = parseFloat(document.getElementById("porcentaje").value);
	var resultado = (numero * porcentaje) / 100;
	document.getElementById("resultado").innerHTML = "El " + porcentaje + "% de " + numero + " es " + resultado;
}
