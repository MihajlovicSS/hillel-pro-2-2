function calc() {
    let operand = prompt('Please, enter an operand');
    let firstNum = Number(prompt('Please, enter first number'));
    let secondNum = Number(prompt('Please, enter second number'));
    return alert(`${firstNum} ${operand} ${secondNum} = ${calculation(firstNum, secondNum, operand)}`);
}

function calculation(firstNum, secondNum, operand) {
    let result;
    switch (operand) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
    }
    return result;
}

calc();