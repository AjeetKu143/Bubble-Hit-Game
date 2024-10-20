let scoreVal = 0;
let hitVal = 0;
let timeInt = 60;

function createBubble() {
  let bubbleNum = "";

  for (let i = 1; i <= 119; i++) {
    let randNum = Number(Math.floor(Math.random() * 10) + 1);
    bubbleNum += `<div class="bubble">${randNum}</div>`;
  }

  document.querySelector(".p-btm").innerHTML = bubbleNum;
}

function getNewHit() {
  hitVal = Number(Math.floor(Math.random() * 10) + 1);
  document.querySelector("#hit").innerHTML = hitVal;
}

function increaseVal() {
  scoreVal += 10;
  document.querySelector("#score").innerHTML = scoreVal;
}

document.querySelector(".p-btm").addEventListener("click", function (event) {
  let clickedValue = Number(event.target.textContent);
  if (hitVal === clickedValue) {
    increaseVal();
    createBubble();
    getNewHit();
  }
});

function runTimer() {
  const finalTimer = setInterval(function () {
    if (timeInt > 0) {
      timeInt--;
      document.querySelector("#time").textContent = timeInt;
    } else {
      // Display the Game Over message and the refresh button
      document.querySelector(".p-btm").innerHTML = `
          <div>
            <h2>Game Over!</h2>
            <button id="refreshButton" class="refresh">
              <h3>Play Again!</h3>
            </button>
          </div>
        `;
      clearInterval(finalTimer);

      // Set up the event listener for the newly added refresh button
      const refreshButton = document.getElementById("refreshButton");
      refreshButton.addEventListener("click", function () {
        location.reload();
      });
    }
  }, 1000);
}

createBubble();
getNewHit();
runTimer();
