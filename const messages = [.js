const messages = [
  "No",
  "Are you sure? 😭",
  "Think again 🥺",
  "Pleaseeee 💔",
  "I will be very sad...",
  "Last chance 😤",
  "Plss maanja naah bugguu 🥺",
   "Okay… but why 😢",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Change "No" text through messages
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Grow the Yes button each time
  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  const card = document.querySelector(".card");
  card.innerHTML = `
    <h1 style="font-size:34px;margin:0 0 10px;">YAYYY!! 💖</h1>
    <p style="opacity:.85;margin:0 0 18px;">Best decision ever 😌</p>
    <div style="font-size:44px;padding:14px 18px;background:#f2f2f2;border-radius:14px;display:inline-block;">
      (づ｡◕‿‿◕｡)づ
    </div>
  `;
}


document.getElementById("noBtn").addEventListener("click", handleNoClick);
document.getElementById("yesBtn").addEventListener("click", handleYesClick);
