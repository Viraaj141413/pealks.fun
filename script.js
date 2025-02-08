const canvas = document.getElementById("circleCanvas");
const ctx = canvas.getContext("2d");
const scoreDiv = document.getElementById("score");
let drawing = false;
let points = [];
let highScore = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const minDistance = 50; // Minimum distance from the center

function drawCenterDot() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
}

canvas.addEventListener("mousedown", (e) => {
    const distFromCenter = Math.sqrt((e.clientX - centerX) ** 2 + (e.clientY - centerY) ** 2);
    if (distFromCenter < minDistance) {
        scoreDiv.innerText = "Too close to the dot!";
        return;
    }
    drawing = true;
    points = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCenterDot();
});

canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    points.push({ x: e.clientX, y: e.clientY });
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    evaluateCircle();
});

function evaluateCircle() {
    if (points.length < 10) return;
    let minX = Math.min(...points.map(p => p.x));
    let maxX = Math.max(...points.map(p => p.x));
    let minY = Math.min(...points.map(p => p.y));
    let maxY = Math.max(...points.map(p => p.y));
    let width = maxX - minX;
    let height = maxY - minY;
    let avgRadius = (width + height) / 4;
    
    let deviations = points.map(p => {
        let dist = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
        return Math.abs(dist - avgRadius);
    });
    let avgDeviation = deviations.reduce((sum, d) => sum + d, 0) / deviations.length;
    
    let stability = Math.max(0, 100 - avgDeviation * 1.5); // Made less strict
    let score = Math.round(stability + 5); // Increased score to be more forgiving
    
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, avgRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    if (score > 90) {
        scoreDiv.style.backgroundColor = "green";
        scoreDiv.style.color = "white";
    } else if (score > 70) {
        scoreDiv.style.backgroundColor = "yellow";
        scoreDiv.style.color = "black";
    } else {
        scoreDiv.style.backgroundColor = "red";
        scoreDiv.style.color = "white";
    }
    
    if (score > highScore) {
        highScore = score;
        scoreDiv.innerText = `Score: ${score}% - NEW HIGH SCORE!`;
    } else {
        scoreDiv.innerText = `Score: ${score}%`;
    }
}

drawCenterDot();
