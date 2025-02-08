let score = 0;
let clickPower = 1;
let upgradeCost = 10;

const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("clickButton");
const upgradeButton = document.getElementById("upgradeButton");
const upgradeCostDisplay = document.getElementById("upgradeCost");

clickButton.addEventListener("click", () => {
    score += clickPower;
    scoreDisplay.textContent = score;
});

upgradeButton.addEventListener("click", () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickPower++;
        upgradeCost *= 2;
        scoreDisplay.textContent = score;
        upgradeCostDisplay.textContent = upgradeCost;
    }
});
