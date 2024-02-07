import notice from './notice.js'

const Post = (result, property) => {
	const newNode = document.createElement('p')
	newNode.textContent = `${property}`
	document.querySelector('.notice-list').appendChild(newNode)
}

const Posting = (result) => {
	const title = `title : ${JSON.stringify(result.title)}`
	const description = `description : ${JSON.stringify(result.description)}`
	const created = `created : ${JSON.stringify(result.created)}`
	const views = `view : ${JSON.stringify(result.views)}`

	Post(result, title)
	Post(result, description)
	Post(result, created)
	Post(result, views)
}

const output = (foreword, result) => {
	const Node = document.querySelector('div')
	Node.classList.add('notice-list')
	Node.textContent = `${foreword}`
	
	for (let i = 0 ; i < result.length ; i++) {
		Posting(result[i])
	}
}

const ClickList = async () => {
	const result = await notice.list()
	output('notice list', result)
}

document.querySelector('button[data-list').addEventListener('click', ClickList)