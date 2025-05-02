document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    const isOpen = burger.dataset.state === 'open';
    burger.dataset.state = isOpen ? 'closed' : 'open';
    nav.dataset.menu = isOpen ? 'closed' : 'open';
  });
});
