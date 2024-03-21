const reverseString = function(string) {
    return string.split('').reverse().join('');
};

while (true) {
    let inputString = prompt("Insira uma string para reverter, ou digite 'exit' para sair.");

    if (inputString.toLowerCase() === 'exit') {
        break;
    }

    let reversedString = reverseString(inputString);

    alert(`A string revertida é: ${reversedString}`);
}
