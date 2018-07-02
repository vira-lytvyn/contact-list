export {qs, qsa}

function qs(selector, context) {
  return (context || document).querySelector(selector);
}

function qsa(selector, context) {
  return (context || document).querySelectorAll(selector);
}
