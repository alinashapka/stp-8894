export function initBurgerMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const isOpen = burger.dataset.state === 'open';
    burger.dataset.state = isOpen ? 'closed' : 'open';
    nav.dataset.menu = isOpen ? 'closed' : 'open';
  });
}
