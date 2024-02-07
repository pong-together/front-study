import notice from './notice.js'

const output = (foreword, result) => {
	for (let i = 0 ; i < result.length ; i++)
	{
		const newNode = document.createElement('p')
		newNode.textContent = `${foreword} : ${JSON.stringify(result[i])}`
		document.querySelector('div').appendChild(newNode)
	}
}

const ClickList = async () => {
	const result = await notice.list()
	output('notice list', result)
}

document.querySelector('button[data-list').addEventListener('click', ClickList)