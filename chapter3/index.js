import registry from "./registry.js";
import messageView from "./message.js";
import applyDiff from "./applyDiff.js";
import languageView from "./language.js";
import appView from "./app.js";

registry.add('app', appView)
registry.add('message', messageView)
registry.add('start', languageView)

const getSelect = () => {
	const lan = document.getElementById('lang')
	const value = (lan.options[lan.selectedIndex].value)

	return value
}

const state = {
    bool: "",
	language: "ko",
}

const events = {
	login: () => {
		const randomBoolean = Math.random() < 0.5; // 50% 확률로 true 또는 false 반환
		state.bool = randomBoolean;
		render()
	},
	select: () => {
		const newValue = getSelect();
		state.language = newValue;
		render()
	}
}

const render = () => {
    window.requestAnimationFrame(() => {
		const msg = document.querySelector('#root');
    	const newMsg = registry.renderRoot(msg, {state}, events)
		applyDiff(document.body, msg, newMsg);
	})
}

render()