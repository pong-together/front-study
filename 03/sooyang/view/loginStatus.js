const checkLoginStatus = ({loginStatus}) => {
	const childNode = document.createElement('span');
	if (loginStatus === 'fail') {
		childNode.textContent = '로그인에 실패했습니다';
		childNode.style.color = 'red';
		childNode.style.display = 'flex';
		childNode.style.justifyContent = 'center';
	}
	return childNode;
}

export default (targetElement, state, events) => {
	const element = targetElement.cloneNode(true);
	element.innerHTML = '';
	element.appendChild(checkLoginStatus(state));
	return element;
}