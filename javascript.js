
let numOrStr = prompt('input number or string');
alert(numOrStr)

switch (numOrStr) {
    case (numOrStr === null):
        alert('ви скасували');
        break;
    case "numOrStr.trim() === ''":
        alert('Empty String');
        break;
    case (isNaN( +numOrStr )):
        alert('number is Ba_NaN');
        break;
    default:
        alert('OK!');
}
