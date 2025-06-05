const bgCanvas = document.getElementById("bg-animation");
const ctx = bgCanvas.getContext("2d");

let starsArray = [];

function resize() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}

function makeStars(num) {
  starsArray = [];
  for (let i = 0; i < num; i++) {
    starsArray.push({
      x: Math.random() * bgCanvas.width,
      y: Math.random() * bgCanvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  for (let star of starsArray) {
    star.alpha += star.speed;
    if (star.alpha <= 0 || star.alpha >= 1) star.speed = -star.speed;

    ctx.beginPath();
    ctx.globalAlpha = star.alpha;
    ctx.fillStyle = "#fff";
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
  resize();
  makeStars(150);
});

resize();
makeStars(150);
draw();

const msgs = {
  Potion: "A healing elixir is in your path.",
  SpellBook: "Knowledge is your greatest ally.",
  MagicWand: "You are destined to shape reality.",
  Treasure: "Wealth comes to those who wait.",
};

function showMessage(item) {
  const msgBox = document.getElementById("mystic-message");
  msgBox.textContent = msgs[item] || "The warlock whispers secrets...";
  msgBox.style.opacity = 1;

  setTimeout(() => {
    msgBox.style.opacity = 0;
  }, 6000);
}

const items = ["Potion", "SpellBook", "MagicWand", "Treasure"];
const modelMap = {
  SpellBook: "model2",
  Potion: "model3",
  MagicWand: "model4",
  Treasure: "model5",
};

document.getElementById("magic-btn").addEventListener("click", () => {
  const btn = document.getElementById("magic-btn");
  btn.disabled = true;
  btn.style.cursor = "not-allowed";
  btn.classList.add("glowing");

  const picked = items[Math.floor(Math.random() * items.length)];
  const pickedModel = modelMap[picked];

  runHighlightSequence(pickedModel, () => {
    showMessage(picked);

    btn.disabled = false;
    btn.style.cursor = "pointer";
    btn.classList.remove("glowing");

    setTimeout(() => {
      document.getElementById(pickedModel).classList.remove("highlight-bg");
    }, 3000);
  });
});

const highlightTime = 1000;
const cornerModels = ["model2", "model3", "model4", "model5"];

function runHighlightSequence(finalId, done) {
  let i = 0;

  function next() {
    cornerModels.forEach((id) => {
      document.getElementById(id).classList.remove("highlight-bg");
    });

    if (i < cornerModels.length) {
      document.getElementById(cornerModels[i]).classList.add("highlight-bg");
      i++;
      setTimeout(next, highlightTime);
    } else {
      cornerModels.forEach((id) => {
        document.getElementById(id).classList.remove("highlight-bg");
      });
      document.getElementById(finalId).classList.add("highlight-bg");

      setTimeout(() => {
        if (done) done();
      }, highlightTime);
    }
  }

  next();
}
