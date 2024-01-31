import	registry	from	'./registry.js'
import	applyDiff	from	'./applyDiff.js'
import	loginMSG	from	'./loginMSG'

registry.add('login', loginMSG)

const state = {
	outcome: ''
}

const render = () => {
	window.requestAnimationFrame(() => {
		const main = document.querySelector('.background-wrapper')
		const newMain = registry.renderRoot(main, state)
		applyDiff(document.body, main, newMain)
	})
}

const loginButton = document.querySelector('.login-btn')
loginButton.addEventListener('click', () => {
	const randomProbability = Math.random();
	if (randomProbability > 0.5) {
		state.outcome = 'success'
		// loginButton.disabled = false;
	} else {
		state.outcome = 'fail'
		// loginButton.disabled = true;
	}
	render()
})

render()