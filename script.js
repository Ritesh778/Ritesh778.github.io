const button = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-navigation');
const main = document.querySelector('main');

['news', 'about', 'experience', 'education', 'skills', 'research', 'honors', 'projects', 'service', 'credentials', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean)
  .forEach(section => main.appendChild(section));

if (window.location.hash) {
  requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
}

function closeMenu() {
  navigation?.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

button?.addEventListener('click', () => {
  const open = !navigation?.classList.contains('open');
  navigation?.classList.toggle('open', open);
  button.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
document.addEventListener('click', event => {
  if (navigation?.classList.contains('open') && !event.target.closest('.nav-wrap')) closeMenu();
});
