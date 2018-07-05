export {qs, qsa, getId}

function qs(selector, context) {
  return (context || document).querySelector(selector);
}

function qsa(selector, context) {
  return (context || document).querySelectorAll(selector);
}

function getId(el) {
  return el.getAttribute('data-contact-id');
}