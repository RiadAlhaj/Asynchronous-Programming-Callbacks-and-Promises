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