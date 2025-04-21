document.getElementById('uszkodzony').addEventListener('change', function() {
  const uszkodzeniaLista = document.getElementById('uszkodzenia-lista');
  uszkodzeniaLista.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('umowa-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Zbieramy dane
  const sprzedajacy = document.querySelector('input[name="sellerType"]:checked').parentElement.previousElementSibling.value;
  const kupujacy = document.querySelector('input[name="buyerType"]:checked').parentElement.previousElementSibling.value;
  const marka = document.querySelector('input[placeholder="Marka"]').value;
  const model = document.querySelector('input[placeholder="Model"]').value;
  const rokProdukcji = document.querySelector('input[placeholder="Rok produkcji"]').value;
  
  const uszkodzenia = [];
  document.querySelectorAll('input[name="uszkodzenie"]:checked').forEach(input => uszkodzenia.push(input.value));

  // Uaktualniamy treść umowy
  document.getElementById('sprzedajacy').textContent = sprzedajacy;
  document.getElementById('kupujacy').textContent = kupujacy;
  document.getElementById('marka').textContent = marka;
  document.getElementById('model').textContent = model;
  document.getElementById('rok-produkcji').textContent = rokProdukcji;
  document.getElementById('uszkodzenia').textContent = uszkodzenia.join(', ') || 'Brak';

  // Pokazujemy podgląd
  document.getElementById('umowa-podglad').style.display = 'block';
});
