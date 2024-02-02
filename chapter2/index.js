import registry from "./registry.js";
import messageView from "./message.js";
import applyDiff from "./applyDiff.js";

registry.add('message', messageView)

const state = {
    bool: true,
}

const render = () => {
    window.requestAnimationFrame(() => {
		const msg = document.querySelector('.container');
    	const newMsg = registry.renderRoot(msg, {state})
		applyDiff(document.body, msg, newMsg);
	})
}

const loginButton = document.querySelector(".login");
loginButton.addEventListener("click", () => {
	const randomBoolean = Math.random() < 0.5; // 50% 확률로 true 또는 false 반환
    state.bool = randomBoolean;
	render()
})

render()