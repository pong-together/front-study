const parseResponse = async response => {
	let data
	const { status } = response
	if (status !== 204) {
		data = await response.json()
	}

	return {
		status,
		data
	}
}

const request = async params => {
	const {
		url,
		headers = {},
		method = 'GET',
		body
	} = params

	const config = {
		method,
		headers: new window.Headers(headers)
	}

	if (body) {
		config.body = JSON.stringify(body)
	}

	const response = await window.fetch(url, config)

	return parseResponse(response)
}

const get = async (url, headers) => {
	const response = await request({
		url,
		headers,
		method: 'GET'
	})
	return response.data
}

export default {
	get
}