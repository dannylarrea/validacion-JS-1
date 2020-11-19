function validarFormulario() {

}

function addInput() {
    var inputs = document.getElementsByClassName('num').length + 1;
    var div = document.createElement('div');
    div.innerHTML = '<label for="">Valor ' + inputs + ':</label> <input type="number" name="valor-' + inputs + '" id="valor-' + inputs + '" class="num">';
    document.getElementById('values').append(div);
    //alert(document.getElementById('form-values').innerHTML)
    return false;

}