document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    const total = value * (1 + fee)**time;

    const numeroFormatado = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2});

    document.getElementById('total').innerHTML = ("R$ " + numeroFormatado);
});