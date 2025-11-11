const scriptURL = 'https://script.google.com/macros/s/AKfycbxFPZv5T8TRMYkoCx35_l9R5a0_qVBnSN2XC4wUksYe4Ou-ib55k7AopPAcozczWFcI1w/exec';
    const form = document.getElementById('confirmForm');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
          mensagem.textContent = 'Presença confirmada com sucesso! 🎉';
          form.reset();
        })
        .catch(error => {
          mensagem.textContent = 'Ocorreu um erro ao enviar. Tente novamente.';
        });
    });