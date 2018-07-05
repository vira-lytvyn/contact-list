export {qs, qsa, ga, sca, tc}

function qs(selector, context) {
  return (context || document).querySelector(selector);
}

function qsa(selector, context) {
  return (context || document).querySelectorAll(selector);
}

// get attribute value
function ga(el, attrName = 'data-contact-id') {
  return el.getAttribute(attrName);
}

// set contenteditable attribute
function sca(el, attrVal) {
  el.setAttribute('contenteditable', attrVal);
}

// toggle class fpr an element
function tc(el, className = 'etitable') {
	el.classList.toggle(className);
}
