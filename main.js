window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-22ELZMKVN7');

setInterval(() => {
  gtag('event', 'heartbeat', {
    event_category: 'engagement',
    event_label: 'heartbeat',
    send_to: 'G-22ELZMKVN7',
  });
}, 10000);

function showTab(tabId, tabButton) {
  const tabs = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.tab');

  tabs.forEach((tab) => {
    tab.style.display = 'none';
  });
  buttons.forEach((btn) => btn.classList.remove('active'));

  document.getElementById(tabId).style.display = 'block';
  if (tabButton) {
    tabButton.classList.add('active');
  }
}

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let columns = Math.floor(canvas.width / 20);
let drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#043f02';
  ctx.font = '16px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = Math.random() > 0.5 ? '0' : '1';
    ctx.fillText(text, i * 20, drops[i] * 20);

    if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / 20);
  drops = Array(columns).fill(1);
});

function runQuery(tabId) {
  const results = document.getElementById('results-' + tabId);
  results.style.display = 'block';
}
