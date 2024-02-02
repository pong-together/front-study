const getBoolRandom = (state, newNode) => {
	const successLogin = state.bool

	if (successLogin === false) {
		newNode.style.color="red"
		return '로그인이 실패했습니다.'
	}
	newNode.style.color="black"
	return '로그인이 성공하였습니다.'
}

export default (target, { state }) => {
	const newNode = target.cloneNode(true)
	newNode.textContent = getBoolRandom(state, newNode)
	return newNode
}