document.getElementById('confirmForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nomes = document.getElementById('nomes').value.trim();

  if (!nomes) {
    alert('Por favor, digite o nome dos convidados.');
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbyMQZikPDKYI6IbHzPkK-uCeTV4gGoXrD2NU97MzGg3d5uK9puBP4zuOya8ErUhlQwgUA/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      nomes: nomes, // <-- Aqui estava o erro
    }),
  })
  .then(() => {
    alert('Presença confirmada com sucesso! 🎉');
    document.getElementById('confirmForm').reset();
  })
  .catch(error => {
    alert('Erro ao confirmar presença. Verifique a conexão.');
    console.error(error);
  });
});
