const sign = prompt('Введіть дію (+, -, *, /)');
const num1 = +prompt('Введіть перше число');
const num2 = +prompt('Введіть друге число');
let result;
switch (sign) {
    case '+':
        result = num1 + num2;
        alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result);
        break;
    case '-':
        result = num1 - num2;
        alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result);
        break;
    case '*':
        result = num1 * num2;
        alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result);
        break;
    case '/':
        result = num1 / num2;
        alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result);
        break;
    default:
        alert('Обрано не корректну дію');
}


