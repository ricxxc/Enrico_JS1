// let number =0;
let number = 1;
// let number = 2;

switch (number) {

    case 0:
        number = 'zero';
        break;
    case 1:
        number = 'one';
        break;
    default:
        number = 'other number';
        break;
}
console.log(`The value is ${number}`);