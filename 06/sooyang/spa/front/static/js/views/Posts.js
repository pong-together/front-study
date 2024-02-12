import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle('Posts');
	}

	async getHtml() {
		return `
		<h1>Post</h1>
		<p>
		show new posts!
        </p>
		`;
	}
}
