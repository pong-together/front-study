const getLanguage = (state, newNode) => {
	const lang = state.language

	if (lang == 'ko')
		return '시작하기'
	else if (lang == 'en')
		return 'start'
	return 'スタート'
}

export default (target, { state }) => {
	const newNode = target.cloneNode(true)
	newNode.textContent = getLanguage(state, newNode)
	return newNode
}