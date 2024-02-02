let template
let template2

const getTemplate = () => {
	if (!template)
		template = document.getElementById('tem1')

	return template.content.firstElementChild.cloneNode(true)
}

const getTemplate2 = () => {
	if (!template2)
		template2 = document.getElementById('tem2')

	return template2.content.firstElementChild.cloneNode(true)
}

const addEvents2 = (targetElement, state, events) => {
	targetElement.querySelector('.select').addEventListener('click', () => {
		events.select()
	})
}

const addEvents = (targetElement, state, events) => {
	targetElement.querySelector('.login').addEventListener('click', () => {
		events.login();
	})
}

export default (targetElement, state, events) => {
	const newApp = targetElement.cloneNode(true)
	const selectAngle = targetElement.cloneNode(true)

	newApp.innerHTML = ''
	newApp.appendChild(getTemplate())

	addEvents(newApp, state, events)
	if (state.state.bool === true) {

		selectAngle.innerHTML = ''
		selectAngle.appendChild(getTemplate2())
		console.log(targetElement)

		addEvents2(selectAngle, state, events)
		return selectAngle
	}

	return newApp
}