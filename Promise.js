document.getElementById("flipButton").addEventListener("click", () => {
  playGame();
});

const flipCoin = async () => {
  const coinFlip = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (coinFlip) {
        resolve("You win! It's heads!");
      } else {
        reject("You lose! It's tails!");
      }
    }, 1000);
  });
};

const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("Failed to fetch advice");
    }
    const data = await response.json();
    document.getElementById("advice").innerText = "Advice: " + data.slip.advice;
  } catch (error) {
    document.getElementById("advice").innerText = "Error fetching advice.";
  }
};

const playGame = async () => {
  document.getElementById("result").innerText = "Flipping...";
  try {
    const message = await flipCoin();
    document.getElementById("result").innerText = message;
    await getAdvice();
  } catch (error) {
    document.getElementById("result").innerText = error;
  }
};
