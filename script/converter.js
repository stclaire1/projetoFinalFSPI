function convertDecimal(){
    var decimalInput = document.getElementById("decimal");
    var binaryInput = document.getElementById("binary");
    var hexadecimalInput = document.getElementById("hexadecimal");

    var decimal = parseFloat(decimalInput.value);

    var binary = decimal.toString(2);
    binaryInput.value = binary;

    var hexadecimal = decimal.toString(16);
    hexadecimalInput.value = hexadecimal.toUpperCase();
}

function copyToClipboard(elementId){
    var element = document.getElementById(elementId);
    element.select();
    element.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert("Número copiado para a área de transferência!");
}