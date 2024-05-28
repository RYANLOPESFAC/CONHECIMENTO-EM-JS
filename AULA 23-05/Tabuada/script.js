document.getElementById('generate-btn').addEventListener('click', function() {
    const numberInput = document.getElementById('number').value;
    const resultDiv = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');
    resultDiv.innerHTML = '';
    errorMessage.textContent = '';

    // Verifica se a entrada é um número inteiro válido
    const number = parseInt(numberInput);
    if (isNaN(number)) {
        errorMessage.textContent = 'Por favor, insira um número inteiro válido.';
        return;
    }

    // Gera a tabuada de 1 a 10
    const ul = document.createElement('ul');
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `${number} x ${i} = ${number * i}`;
        ul.appendChild(li);
    }

    resultDiv.appendChild(ul);
});
