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
  const englishLabel = document.createElement('span');
  englishLabel.lang = 'en';
  englishLabel.className = 'en-inline';
  englishLabel.textContent = 'Find PUAI on GitHub';
  link.append('GitHub에서 PUAI 보기', englishLabel);
  contact.replaceChildren(link);
}
