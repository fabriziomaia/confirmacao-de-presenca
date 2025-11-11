document.getElementById('confirmForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nomes = document.getElementById('nomes').value.trim();

  if (!nomes) {
    alert('Por favor, digite o nome dos convidados.');
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbyVx.../exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      nomes: nomeDigitado,
    }),
  })
  .then(response => response.text())
  .then(data => {
    alert('Presença confirmada com sucesso! 🎉');
    document.getElementById('confirmForm').reset();
  })
  .catch(error => {
    alert('Erro ao confirmar presença. Verifique a conexão.');
    console.error(error);
  });
});
