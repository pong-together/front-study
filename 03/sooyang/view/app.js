let template;

const getAppTemplate = () => {
	if (!template) {
		template = document.getElementById('app-login');
	}
	return template.content.firstElementChild.cloneNode(true);
}

export default (targetElement,state , events) => {
	const element = targetElement.cloneNode(true);
	element.innerHTML='';
	element.appendChild(getAppTemplate());

	return element;
}