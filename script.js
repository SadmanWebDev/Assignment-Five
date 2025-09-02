// heart Functionality
const cardHearts = document.getElementsByClassName("card-heart");
for (const cardHeart of cardHearts) {
  cardHeart.addEventListener("click", function () {
    const navHeart = document.getElementById("heart-number").innerText;
    const updatedHeartNumber = Number(navHeart) + 1;
    document.getElementById("heart-number").innerText = updatedHeartNumber;
  });
}

// copy Functionality
const cardCopys = document.getElementsByClassName("card-copy");
for (const cardCopy of cardCopys) {
  cardCopy.addEventListener("click", function () {
    const navCopyNumber = document.getElementById("copy-number").innerText;
    const numberToCopy = cardCopy.parentNode.parentNode.children[3].innerText;
    const updatedCopyNumber = Number(navCopyNumber) + 1;
    document.getElementById("copy-number").innerText = updatedCopyNumber;
    navigator.clipboard.writeText(numberToCopy).then(() => {
      alert("Number copied!");
    });
  });
}

// call Functionality
const callbtns = document.getElementsByClassName("call-btn");
for (const callbtn of callbtns) {
  callbtn.addEventListener("click", function () {
    // coin reduce function
    const coinNumber = document.getElementById("coin").innerText;
    if (coinNumber < 20) {
      alert(`Currency required!`);
    } else {
      updatedCoinNumber = Number(coinNumber) - 20;
      document.getElementById("coin").innerText = updatedCoinNumber;

      // add call in history function
      const cardTitle = callbtn.parentNode.parentNode.children[1].innerText;
      const cardNumber = callbtn.parentNode.parentNode.children[3].innerText;
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const historyCard = document.getElementById("history-card");
      const newCard = document.createElement("div");
      newCard.innerHTML = `
        <div class="flex justify-between items-center bg-[#fafafa] w-full p-4 m-0 mt-4 rounded-lg">
          <div>
            <h1 class="text-lg font-semibold">${cardTitle}</h1>
            <p>${cardNumber}</p>
          </div> 
          <p>${timeString}</p>
        </div>
    `;
      historyCard.append(newCard);
      alert(`Calling ${cardTitle} - ${cardNumber}`);
    }
  });
}

// history clear Functionality
document.getElementById("clear-history").addEventListener("click", function () {
  const clearHistory = document.getElementById("history-card");
  clearHistory.style.display = "none";
});
