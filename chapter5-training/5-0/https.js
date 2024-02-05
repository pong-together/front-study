//이 함수는 2개의 매개변수를 받습니다.
//모든 xhr(XMLHttpRequest)객체에 HTTP요청 헤더를 설정하는 역할을 합니다.
//headers에는 키와 value로 헤더의 이름과 값이 쌍을 이루는 객체입니다.
const setHeaders = (xhr, headers) => {
	Object.entries(headers).forEach(entry => {
		//Object.entries를 이용해 header객체를 [키, 값]으로 이루어진 배열로 변환힙니다.
		const [ name, value ] = entry
		//XMLHttpRequest 객체의 setRequestHeader 메서드를 이용하여 요청의 헤더를 설정합니다.
		//첫번째 매개변수로 헤더의 이름, 두번쨰로 값을 전달.
		xhr.setRequestHeader(name, value)
	})
}

//XMLHttpRequest에 들어있는 값들을 파싱
const parseResponse = xhr => {
	const {
		status,
		responseText
	} = xhr

	let data
	if (status !== 204) {
		data = JSON.parse(responseText)
	}

	return {
		status,
		data
	}
}

const request = params => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()

		const {
			method = 'GET',
			url,
			headers = {},
			body
		} = params

		//XMLHttpRequest 객체를 사용하여 HTTP 요청을 초기화합니다. 요청 메소드와 URL을 설정
		xhr.open(method, url)

		setHeaders(xhr, headers)
		//요청 본문을 JSON문자열로 변환해서 전송합니다. GET요청의 경우 body는 사용되지 않습니다.
		xhr.send(JSON.stringify(body))
		//HTTP요청중에 오류가 발생할 경우, reject 함수를 호출하여 Promise를 실패상태로 만듭니다.
		xhr.onerror = () => {
			reject(new Error('HTTP Error'))
		}

		xhr.ontimeout = () => {
			reject(new Error('Timeout Error'))
		}
		//http요청이 성공적으로 완료되었을 떄 호출.
		//parseResponse 함수를 호출하여 응답을 처리하고, 이를 resolve 함수에 전달하여 Promise를 성공 상태로 만듭니다.
		xhr.onload = () => resolve(parseResponse(xhr))
	})
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