export function initBurgerMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  if (!burger || !nav) return;

  console.log('init', burger, nav);
  burger.addEventListener('click', () => {
    console.log('click', burger.dataset.state);
  });

  burger.addEventListener('click', () => {
    const isOpen = burger.dataset.state === 'open';
    burger.dataset.state = isOpen ? 'closed' : 'open';
    nav.dataset.menu = isOpen ? 'closed' : 'open';
  });
}
