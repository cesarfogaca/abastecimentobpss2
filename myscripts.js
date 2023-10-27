

// Função Check Arla 32
function yesnoCheck() {
    if (document.getElementById('yesCheckA').checked) {
       document.getElementById('ifYesArla').style.display = 'block';
    } else {
       document.getElementById('ifYesArla').style.display = 'none';
    }
}



// Função Outros veículos
function yesnoCheckV() {
   if (document.getElementById('yesCheckV').checked) {
      document.getElementById('ifYesV').style.display = 'block';
   } else {
      document.getElementById('ifYesV').style.display = 'none';
   }
}



// Função Check Arla 32 no veículo 2
function yesnoCheckA2() {
   if (document.getElementById('yesCheckA2').checked) {
      document.getElementById('ifYesA2').style.display = 'block';
   } else {
      document.getElementById('ifYesA2').style.display = 'none';
   }
}



const url = 'https://script.google.com/macros/s/AKfycbwMg2_hapdSfQNfAe2SQxDYmGkK1a4nalqjWBD3VTtT/dev'

document.getElementById('form').action = url;

