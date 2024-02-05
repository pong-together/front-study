import https from "./https.js";

//모든 http요청에 공통적으로 사용될 헤더를 정의합니다.
const HEADERS = {
	'Content-Type': 'application/json'
}
//API의 기본 URL을 정의합니다. 이것은 모든 HTTP요청의 기본경로입니다.
const BASE_URL = 'api/todos'
//할 일의 목록을 조회하는 함수
const list = () => https.get(BASE_URL)
//새로운 할일을 추가하는 함수
//할일의 텍스트를 받아 새로운 객체를 생성한 후 서버에 저장합니다.
const create = text => {
	const todo = {
		text, completed: false
	}

	return https.post(BASE_URL, todo, HEADERS)
}
//할일을 업데이트 하는 함수
const update = newTodo => {
	//할일의 객체를 인자로 받아 해당 객체의 id를 사용하여 서버에 저장
	const url = `${BASE_URL}/${newTodo.id}`
	return https.patch(url, newTodo, HEADERS)
}

//할일을 삭제하는 함수
//id를 인자로 받아와 해당 id의 할일을 삭제
const deleteTodo = id => {
	const url = `${BASE_URL}/${id}`
	return https.delete(url)
}

export default {
	list, create, update, delete: deleteTodo
}