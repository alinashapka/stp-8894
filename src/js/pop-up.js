export function popUpCookies() {
  const popUp = document.querySelector('[data-pop-up]');
  const btnAccept = document.querySelector('[data-accept]');
  const btnDecline = document.querySelector('[pop-up-decline]');

  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted && popUp) {
    popUp.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  btnAccept?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    closePopUp();
  });

  btnDecline?.addEventListener('click', () => {
    localStorage.removeItem('cookiesAccepted');
    closePopUp();
  });

  function closePopUp() {
    popUp.classList.remove('visible');
    document.body.style.overflow = '';
  }
}
