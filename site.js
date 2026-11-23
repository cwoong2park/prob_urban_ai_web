const canvas = document.querySelector('#distribution');
const slider = document.querySelector('#spread');
const level = document.querySelector('#level');
const context = canvas.getContext('2d');

function drawDistribution() {
  const width = canvas.width;
  const height = canvas.height;
  const spread = Number(slider.value);
  const points = Array.from({ length: 121 }, (_, index) => {
    const t = index / 120;
    return {
      x: 22 + t * (width - 44),
      mean: 205 - 62 * t + 24 * Math.sin(2 * Math.PI * t),
      halfInterval: (18 + 11 * spread) * (0.45 + 0.55 * t + 0.22 * Math.sin(Math.PI * t)),
    };
  });

  context.clearRect(0, 0, width, height);
  context.strokeStyle = '#294248';
  context.lineWidth = 1;
  context.beginPath();
  for (let y = 28; y <= 340; y += 52) {
    context.moveTo(22, y);
    context.lineTo(width - 22, y);
  }
  for (let x = 22; x <= width - 22; x += (width - 44) / 8) {
    context.moveTo(x, 28);
    context.lineTo(x, 340);
  }
  context.stroke();

  const gradient = context.createLinearGradient(22, 0, width - 22, 0);
  gradient.addColorStop(0, 'rgba(129,244,208,.13)');
  gradient.addColorStop(1, 'rgba(129,244,208,.40)');
  context.fillStyle = gradient;
  context.beginPath();
  context.moveTo(points[0].x, points[0].mean - points[0].halfInterval);
  for (const point of points) context.lineTo(point.x, point.mean - point.halfInterval);
  for (const point of [...points].reverse()) context.lineTo(point.x, point.mean + point.halfInterval);
  context.closePath();
  context.fill();

  context.beginPath();
  context.moveTo(points[0].x, points[0].mean);
  for (const point of points) context.lineTo(point.x, point.mean);
  context.strokeStyle = '#81f4d0';
  context.lineWidth = 3;
  context.stroke();
  context.fillStyle = '#a8bab9';
  context.font = '18px monospace';
  context.fillText('Time', width / 2 - 22, 371);
  level.value = spread + ' / 5';
  slider.setAttribute('aria-valuetext', 'Spread level ' + spread + ' of 5');
}

if (context) {
  drawDistribution();
  slider.closest('.control').hidden = false;
  slider.addEventListener('input', drawDistribution);
}

const contact = document.querySelector('#contact-channel');
const email = contact.dataset.email.trim();
if (email) {
  const link = document.createElement('a');
  link.href = 'mailto:' + email;
  link.textContent = email;
  contact.replaceChildren(link);
} else if (location.hostname.endsWith('.github.io')) {
  const owner = location.hostname.slice(0, -'.github.io'.length);
  const link = document.createElement('a');
  link.href = 'https://github.com/' + encodeURIComponent(owner);
  link.textContent = 'Find IPI on GitHub';
  contact.replaceChildren(link);
}
