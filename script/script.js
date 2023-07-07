function convertfromDecimal(fromId, toBinaryId, toHexadecimalId){
    var fromInput = document.getElementById(fromId);
    var toBinaryInput = document.getElementById(toBinaryId);
    var toHexadecimalInput = document.getElementById(toHexadecimalId);
  
    var decimal = parseInt(fromInput.value);
    var binary = decimal.toString(2);
    toBinaryInput.value = binary;
  
    var hexadecimal = decimal.toString(16);
    toHexadecimalInput.value = hexadecimal.toUpperCase();
}
  
function convertFromBinary(fromId, toDecimalId, toHexadecimalId){
    var fromInput = document.getElementById(fromId);
    var toDecimalInput = document.getElementById(toDecimalId);
    var toHexadecimalInput = document.getElementById(toHexadecimalId);
  
    var binary = fromInput.value;
  
    var decimal = parseInt(binary, 2);
    toDecimalInput.value = decimal;
  
    var hexadecimal = decimal.toString(16);
    toHexadecimalInput.value = hexadecimal.toUpperCase();
}
  
function convertFromHexadecimal(fromId, toDecimalId, toBinaryId){
    var fromInput = document.getElementById(fromId);
    var toDecimalInput = document.getElementById(toDecimalId);
    var toBinaryInput = document.getElementById(toBinaryId);
  
    var hexadecimal = fromInput.value;
  
    var decimal = parseInt(hexadecimal, 16);
    toDecimalInput.value = decimal;
  
    var binary = decimal.toString(2);
    toBinaryInput.value = binary;
}
  
function copyToClipboard(elementId){
    var element = document.getElementById(elementId);
    element.select();
    element.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
    alert("Número copiado com sucesso!");
}