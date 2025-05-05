import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('[data-accordion]');

export function AccordionInIt() {
  const trigger = document.querySelector('[data-accordion]');

  trigger.addEventListener('click', () => {
    const item = evt.target.closest('li');
    if (item === null) {
      return;
    }

    panel.dataset.panel = 'open';
  });
}
