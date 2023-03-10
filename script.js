var numberToFind = 0;
var attempts = 0;

function refresh() {
  numberToFind = parseInt(Math.random() * 100);

}

function verifyNumber() {

  var bet = document.getElementById('bet').value;

  if (bet > 100 || bet < 1) {
    alert('Aposta inválida');
    return;
  } else if (bet > numberToFind) {
    attempts++;
    document.getElementById('response').innerHTML = ("O número para ser econtrado é Menor!!!");
  } else if (bet < numberToFind) {
    attempts++;
    document.getElementById('response').innerHTML = ("O número para ser econtrado é Maior!!!");
  } else {
    attempts++;
    document.getElementById('response').innerHTML = ("Parabéns, você acertou!!!! Com " + attempts + " tentativas.");
  }
}

var betInput = document.getElementById('bet');

betInput.addEventListener('input', function() {
  document.getElementById('response').innerHTML = "";
});

refresh();