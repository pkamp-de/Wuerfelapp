document.getElementById('rollBtn').addEventListener('click', function () {
    const count = parseInt(document.getElementById('diceCount').value, 10);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (isNaN(count) || count < 1 || count > 7) {
        resultsDiv.textContent = 'Bitte eine Zahl zwischen 1 und 7 eingeben.';
        return;
    }

    for (let i = 0; i < count; i++) {
        const result = Math.floor(Math.random() * 6) + 1;
        const dieDiv = document.createElement('div');
        dieDiv.className = 'die';
        dieDiv.textContent = result;
        resultsDiv.appendChild(dieDiv);
    }
});
