let numOrStr = prompt('input number or string');


    switch(numOrStr){
        case  null:
            alert('ви скасували');
            break;
        case '' :
            alert('Empty String');
            break;
        case !isNaN(numOrStr) || numOrStr:
            alert(' number is Ba_NaN');
            break;
    }