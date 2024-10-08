document.getElementById("flipButton").addEventListener("click", () => {
  playGame();
});

function flipCoin() {
  return new Promise((resolve, reject) => {
    const coinFlip = Math.random() > 0.5;
    setTimeout(() => {
      if (coinFlip) {
        resolve("You win! It's heads!");
      } else {
        reject("You lose! It's tails!");
      }
    }, 1000);
  });
}

function getAdvice() {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch advice");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("advice").innerText = "Advice: " + data.slip.advice;
    })
    .catch((error) => {
      document.getElementById("advice").innerText = "Error fetching advice.";
    });
}

function playGame() {
  document.getElementById("result").innerText = "Flipping...";
  flipCoin()
    .then((message) => {
      document.getElementById("result").innerText = message;
      return getAdvice();
    })
    .catch((error) => {
      document.getElementById("result").innerText = error;
    });
}