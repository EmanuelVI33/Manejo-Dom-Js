const titulo = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#resultado');

// Solo enviamos el nombre de la funcion a ejecutar, el metodo ya se encarga de llamarla
btn.addEventListener('click', sumar);

function sumar() {
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = "Resultado: " + resultado;
}
