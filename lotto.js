const generateButton = document.getElementById("lotto-generate");
const result = document.getElementById("lotto-result");

function generateLottoNumbers() {
  const numbers = new Set();

  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  return [...numbers].sort((a, b) => a - b);
}

function renderLottoNumbers() {
  const lottoNumbers = generateLottoNumbers();
  result.textContent = lottoNumbers.join(" / ");
}

if (generateButton && result) {
  generateButton.addEventListener("click", renderLottoNumbers);
}
