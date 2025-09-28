const button = document.getElementById("searchButton");
const input = document.getElementById("userInput");

button.addEventListener("click", () => {
  const query = input.value.trim();
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

// Allow pressing Enter to search too
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});

