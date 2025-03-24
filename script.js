const form = document.querySelector("form");
const email = document.querySelector("#email");

const checkValidity = (node, state) => {
	return node.validity[state];
};

const createErrorElement = (msg) => {
	const span = document.createElement("span");
	span.className = "error";
	span.textContent = msg;
	return span;
};

const showError = (node, msg) => {
	node.nextElementSibling?.remove();

	const errorEl = createErrorElement(msg);
	node.after(errorEl);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const nodes = e.target.querySelectorAll("input");
	for (const node of nodes) {
		if (!checkValidity(node, "valid")) {
			showError(node, node.validationMessage);
		}
	}
});

form.addEventListener("focusout", (e) => {
	if (!e.target.matches("input")) return;

	if (!checkValidity(e.target, "valid")) {
		showError(e.target, e.target.validationMessage);
	}
});

form.addEventListener("focusin", (e) => {
	if (!e.target.matches("input")) return;
	e.target.nextElementSibling?.remove();
});
