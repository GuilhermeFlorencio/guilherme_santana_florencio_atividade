//Contador de Palavras
var inp = document.getElementById('exampleFormControlTextarea1'),
    out = document.getElementById('out');
     
inp.addEventListener('keyup', function () {
    out.innerHTML = inp.value.split(/\s/).length;
    resultPala.innerHTML = inp.value.split(/\s/).length;
});

//Abrir o segundo painel
var btn = document.getElementById('btn-div');
var container = document.querySelector('.container');
btn.addEventListener('click', function() {
  if(container.style.display === 'block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'block';
  }
});

//Exibir dados no Modal
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
    document.getElementById('restulArea').innerHTML = area;    
}

//Validar Idade
function validarIdade(){
    var idadeInformada = parseInt(document.getElementById("floatingInput2").value);
    var idadeDefault = 1;
    
    if(idadeInformada) {
      if(idadeInformada === idadeDefault) {
        return true;
      } else if(idadeInformada > idadeDefault){ 
        return true;
      } else {        
        alert("Por favor, adicione uma idade válida!"); //Alerta para informar que a idade é inválida
        document.getElementById('floatingInput2').value=''; //Limpa campo idade
        return false;
      }
    }    
}


//Bloquear digitação no campo data
$('[type="date"]').on("keydown", function() {
  event.preventDefault();
  return false;
});

$('input').on("input", function(e) {
  $(this).val($(this).val().replace(/,/g, ""));
});

//Bloquear caracteres especiais no TEXTAREA

function maskCharacters() {
  
  var regex = new RegExp('[^ 0-9a-zA-Zàèìòùáéíóúâêîôûãõ\b@,.]', 'g');            
$(this).val($(this).val().replace(regex, ''));
}

$('textarea').keyup(maskCharacters);
