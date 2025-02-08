let stimulation = 0;
let level = 1;
let nextLevel = 500;
let doubleClickActive = false;
let autoClicker = null;

const items = [
    { id: "dvd", cost: 100, name: "DVD", effect: () => {} },
    { id: "double-click", cost: 120, name: "Double Click", effect: () => { doubleClickActive = true; } },
    { id: "auto-click", cost: 500, name: "Auto Click", effect: () => { 
        if (!autoClicker) {
            autoClicker = setInterval(() => {
                stimulation++;
                updateUI();
            }, 1000);
        }
    }},
    { id: "bouncing-dvd", cost: 1000, name: "Bouncing DVD", effect: disableButton },
    { id: "raindrop", cost: 2000, name: "Raindrop", effect: disableButton }
];

function createItems() {
    const container = document.getElementById("items-container");
    items.forEach(item => {
        const button = document.createElement("button");
        button.id = item.id;
        button.dataset.cost = item.cost;
        button.textContent = item.name;
        button.classList.add("hidden", "item");
        button.addEventListener("click", () => purchaseItem(item, button));
        container.appendChild(button);
    });
}

function purchaseItem(item, button) {
    if (stimulation >= item.cost) {
        stimulation -= item.cost;
        item.effect(button);
        updateUI();
    }
}

function disableButton(button) {
    button.disabled = true;
}

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

createItems();
