// Search function
document.getElementById('searchButton').addEventListener('click', () => {
  const field = document.getElementById('userInput');
  const q = (field.value || '').trim();
  const url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
  window.open(url, '_blank');
});

// Clear button
const clearBtn = document.getElementById('clearButton');
clearBtn.addEventListener('click', () => {
  const field = document.getElementById('userInput');
  field.value = '';
  field.focus();
});
