const request = async params => {
	const {
		method = 'GET', url, headers = {}, body
	} = params

	const config = {
		url, method, headers, data: body //요소들을 재배치
	}

	return axios(config) //이 함수에서는 axios 서명을 공공 계약과 일치하도록 매개변수를 재배치하여 넘긴다.
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