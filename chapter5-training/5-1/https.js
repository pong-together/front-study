const parseResponse = async response => {
	const { status } = response
	let data
	if (status !== 204)
	{
		data = await response.json()
	}

	return {status, data}
}

const request = async params => {
	const {
		method = 'GET', url, headers = {}, body
	} = params

	const config = {
		method, headers: new window.Headers(headers) //Headers 객체를 사용하여 인스턴스를 생성
	}	//window.Headers 생성자는 fetch API의 일부로 제공되며 요청 또는 응답과 함꼐 전송될 수 있는
	//HTTP헤더들을 쉽게 조작할 수 있도록 도와줍니다.

	if (body) {
		config.body = JSON.stringify(body)
	}
	//Fetch API를 사용하여 비동기적으로 서버에 요청을 보내고, 응답을 대기합니다.
	const response = await window.fetch(url, config)
	return parseResponse(response)
}

const get = async(url, headers) => {
	const response = await request({
		url, headers, method: 'GET'
	})

	return response.data
}

const post = async (url, body, headers) => {
	const response = await request({
		url, headers, method: 'POST', body
	})

	return response.data
}

const put = async (url, body, headers) => {
	const response = await request ({
		url, headers, method: 'PUT', body
	})
	return response.data
}

const patch = async (url, body, headers) => {
	const response = await request ({
		url, headers, method: 'PATCH', body
	})
	return response.data
}

const deleteRequest = async (url, headers) => {
	const response = await request({
		url, headers, method: 'DELETE'
	})

	return response.data
}

export default {
	get, post, put, patch, delete: deleteRequest
}