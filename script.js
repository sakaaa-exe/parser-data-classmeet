document.getElementById("processButton").addEventListener("click", () => {
  const input = document.getElementById("inputArea").value;
  const output = parseData(input);
  document.getElementById("outputArea").textContent = output;
  document.getElementById("outputContainer").classList.remove("hidden");
});

document.getElementById("copyButton").addEventListener("click", () => {
  const output = document.getElementById("outputArea").textContent;
  navigator.clipboard.writeText(output)
    .then(() => showNeonPopup("Data berhasil disalin!"))
    .catch(() => showNeonPopup("Gagal menyalin data."));
});

document.getElementById("backButton").addEventListener("click", () => {
  document.getElementById("inputArea").value = '';
  document.getElementById("outputContainer").classList.add("hidden");
});

function showNeonPopup(message) {
  const popup = document.createElement("div");
  popup.classList.add("neon-popup");
  popup.textContent = message;
  document.body.appendChild(popup);
  
  setTimeout(() => {
    popup.remove();
  }, 2000);
}
