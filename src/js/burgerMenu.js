export function initBurgerMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLink = document.querySelectorAll('.nav-list li a');

  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const isOpen = burger.dataset.state === 'open';
    burger.dataset.state = isOpen ? 'closed' : 'open';
    nav.dataset.menu = isOpen ? 'closed' : 'open';
  });
  nav.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    burger.dataset.state = 'closed';
    nav.dataset.menu = 'closed';
  });

  navLink.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        const headerOffset = window.innerWidth >= 1200 ? 80 : 40;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}
