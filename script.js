// ----- تأثير الماتريكس المرعب -----
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789☠@#$%^&*()".split("");
const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}

setInterval(drawMatrix, 50);

// ----- مؤثرات الصوت المرعب -----
const audio = document.getElementById("bgSound");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  audio.play();
  animateGlow();
});

// ----- تأثير توهج مخيف متزامن مع الصوت -----
function animateGlow() {
  const avatarContainer = document.querySelector(".avatar-container");
  let i = 0;
  const interval = setInterval(() => {
    const glow = 25 + Math.sin(i) * 50;
    avatarContainer.style.boxShadow = `0 0 ${glow}px #ff0000, 0 0 ${glow*2}px #00ff00, 0 0 ${glow*3}px #ff0000`;
    i += 0.1;
    if (audio.paused) clearInterval(interval);
  }, 50);
                                    }
