import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('[data-accordion]');

export function AccordionInIt() {
  const triggers = document.querySelectorAll('[data-accordion-trigger]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panel = trigger.lastElementChild;
      const questionText = trigger.querySelector('[data-text]');
      const plus = trigger.querySelector('[data-icon="plus"]');
      const minus = trigger.querySelector('[data-icon="minus"]');

      const isOpen = panel.style.display === 'block';

      if (isOpen) {
        panel.style.display = 'none';
        questionText.classList.remove('active');
        plus.style.display = 'inline';
        minus.style.display = 'none';
      } else {
        panel.style.display = 'block';
        questionText.classList.add('active');
        minus.style.display = 'inline';
        plus.style.display = 'none';
      }
    });
  });
}
