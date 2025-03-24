const form = document.querySelector("form");

const checkValidity = (node) => {
	return node.validity.valid;
};

const createErrorElement = (errorMsg) => {
	const span = document.createElement("span");
	span.className = "error";
	span.textContent = errorMsg;
	return span;
};

const showError = (node) => {
	node.nextElementSibling?.remove();

	const errorEl = createErrorElement("This field is requried");
	node.after(errorEl);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const nodes = e.target.querySelectorAll("input");
	for (const node of nodes) {
		checkValidity(node) || showError(node);
	}
});
