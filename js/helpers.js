export {qs}

function qs(selector, context) {
	return (context || document).querySelector(selector);
}
