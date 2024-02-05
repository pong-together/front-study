const getBoolRandom = (state, newNode) => {
	const successLogin = state.bool

	if (successLogin === false) {
		newNode.style.color="red"
		return '로그인이 실패했습니다.'
	}
	else if (successLogin === true) {
		newNode.style.color="black"
		return '로그인이 성공하였습니다.'
	}
	return "";
}

export default class Login extends HTMLElement {
	
}