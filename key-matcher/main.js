const circle = document.getElementById("circle");
const letterSpan = document.getElementById("letter");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let currentLetter = getRandomLetter(null);

letterSpan.textContent = currentLetter;

function getRandomLetter(prev) {
  let newLetter;

  do {
    newLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  } while (newLetter === prev);

  return newLetter;
}

function flashColor(className) {
  circle.classList.remove("correct", "incorrect");
  circle.classList.add(className);

  setTimeout(() => {
    circle.classList.remove(className);
  }, 500);
}

function handleKeyPress(key) {
  key = key.toLowerCase();

  if (!key.match(/^[a-z]$/)) {
    flashColor("incorrect");
    return;
  }

  if (key === currentLetter.toLowerCase()) {
    flashColor("correct");
    const newLatter = getRandomLetter(currentLetter);
    currentLetter = newLatter;
    letterSpan.textContent = currentLetter;
  } else {
    flashColor("incorrect");
  }
}

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  handleKeyPress(e.key);
});
