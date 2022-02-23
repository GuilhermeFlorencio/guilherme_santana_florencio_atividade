//abrir o caixa de texto
var btn = document.getElementById('btn-div');
var container = document.querySelector('.container');
btn.addEventListener('click', function() {
    
  if(container.style.display === 'block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'block';
  }
});

function teste() {
    var name = document.getElementById('floatingInput').value;
    var idade = document.getElementById('floatingInput2').value;
    var sexo = document.getElementById('flexRadioDefault1').value;
    var data = document.getElementById('data').value;
    var area = document.getElementById('exampleFormControlTextarea1').value;

    document.getElementById('restulNome').innerHTML = name;
    document.getElementById('restulIdade').innerHTML = idade;
    document.getElementById('restulSexo').innerHTML = sexo;
    document.getElementById('restulData').innerHTML = data;
    document.getElementById('resultArea').innerHTML = area;
}

$(document).on("input keyup", "#exampleFormControlTextarea1", function () {
    var limite = 10000;
    var caracteresDigitados = $(this).val().length;
    var caracteresRestantes = limite - caracteresDigitados;
    $(".caracteres").text(caracteresRestantes);
});