export default (targetElement, { outcome }) => {
	
	const newMSGNode = targetElement.cloneNode(true)
	
	if (outcome === 'success') {
		newMSGNode.style.color = "green"
		newMSGNode.textContent = "로그인에 성공했습니다."
	} else if (outcome === 'fail') {
		newMSGNode.style.color = "red"
		newMSGNode.textContent = "로그인에 실패했습니다."
	}
	
	return newMSGNode
}