window.onload = function() {
    document.getElementById('add-input').addEventListener("click", addInput);
}

/* addInput */
function addInput(event) {
    if (document.getElementsByClassName('num').length != 10) {
        var numAux = 'valor-' + (document.getElementsByClassName('num').length + 1);
        var div = document.createElement('div');
        var label = document.createElement('label');
        var input = document.createElement('input');

        /* label */
        label.setAttribute('for', numAux)
        label.innerHTML = 'Valor ' + (document.getElementsByClassName('num').length + 1) + ': ';
        /* input */
        input.setAttribute('type', 'number');
        input.setAttribute('name', numAux);
        input.setAttribute('id', numAux);
        input.setAttribute('class', 'num');

        /* anidamos etiquetas */
        div.appendChild(label)
        div.appendChild(input)

        //div.innerHTML = '<label for="">Valor ' + inputs + ':</label> <input type="number" name="valor-' + inputs + '" id="valor-' + inputs + '" class="num">';
        document.getElementById('values').appendChild(div);
    }
    event.preventDefault();
}


/* delInput */

/* validarForm */

/* validarDNI */

/* Mostrar categoría a partir de la fecha de nacimiento */