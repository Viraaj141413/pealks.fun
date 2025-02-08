// script.js
let stimulation = 0;
const clickBtn = document.getElementById("clickBtn");
const clickCount = document.getElementById("clickCount");
const upgrades = document.getElementById("upgrades");

const upgradeLevels = [20, 50, 100, 500, 1000, 1500, 3000, 5000];
const backgrounds = ["#f0f0f0", "#e0e0ff", "#d0ffd0", "#ffe0e0", "#ffffd0", "#d0d0ff", "#ffd0ff", "#d0ffff"];

clickBtn.addEventListener("click", () => {
    stimulation++;
    clickCount.textContent = `Stimulation: ${stimulation}`;
    checkUpgrades();
});

function checkUpgrades() {
    upgradeLevels.forEach((level, index) => {
        if (stimulation === level) {
            let upgradeBtn = document.createElement("button");
            upgradeBtn.textContent = `Upgrade (Cost: ${level})`;
            upgradeBtn.addEventListener("click", () => {
                document.body.style.background = backgrounds[index];
                upgradeBtn.remove();
            });
            upgrades.appendChild(upgradeBtn);
        }
    });
}
