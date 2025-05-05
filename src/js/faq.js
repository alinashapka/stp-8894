import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('[data-accordion]');

export function AccordionInIt() {
  const triggers = document.querySelectorAll('[data-accordion-trigger]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panel = trigger.lastElementChild;
      const questionText = trigger.querySelector('[data-text]');
      const icon = trigger.querySelector('[data-icon]');
      const button = trigger.querySelector('[data-button]');

      if (panel.style.display === 'block') {
        panel.style.display = 'none';
        questionText.classList.remove('active');
        icon.setAttribute('href', '/img/sprite.svg#icon-plus');
        button.style.marginTop = '0';
      } else {
        panel.style.display = 'block';
        questionText.classList.add('active');
        icon.setAttribute('href', '/img/sprite.svg#icon-minus');
        button.style.marginTop = '55.5px';
      }
    });
  });
}
