let stimulation = 0;
let level = 1;
let nextLevel = 500;
let doubleClickActive = false;
let autoClicker = null;

document.getElementById("click-button").addEventListener("click", () => {
    stimulation += doubleClickActive ? 2 : 1;
    updateUI();
});

document.getElementById("collect-bonus").addEventListener("click", () => {
    stimulation += 1000;
    document.getElementById("collect-bonus").classList.add("hidden");
    updateUI();
});

setInterval(() => {
    document.getElementById("collect-bonus").classList.remove("hidden");
}, 20000);

document.querySelectorAll(".item").forEach(button => {
    button.addEventListener("click", () => {
        const cost = parseInt(button.dataset.cost);
        if (stimulation >= cost) {
            stimulation -= cost;
            if (button.id === "double-click") doubleClickActive = true;
            if (button.id === "auto-click" && !autoClicker) {
                autoClicker = setInterval(() => {
                    stimulation++;
                    updateUI();
                }, 1000);
            }
            if (button.id === "bouncing-dvd" || button.id === "raindrop") {
                button.disabled = true;
            }
            updateUI();
        }
    });
});

function updateUI() {
    document.getElementById("stimulation-count").textContent = `${stimulation} stimulation`;

    document.querySelectorAll(".item").forEach(button => {
        if (stimulation >= parseInt(button.dataset.cost)) {
            button.classList.remove("hidden");
        }
    });

    if (stimulation >= nextLevel) {
        level++;
        nextLevel += 500;
        document.getElementById("level-text").textContent = `Level ${level}`;
        document.getElementById("level-bar").max = nextLevel;
    }
    document.getElementById("level-bar").value = stimulation;
}
