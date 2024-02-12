import Component from './Component.js';

export default class extends Component {
	setEvent() {}

	template() {
		const { postList } = this.$props;
		return `
		<ul>
		${postList
			.map(
				({ id, title, thumbnail }) => `
		<li class="card" key=${id} style="width:20rem;">
		<div class="card-body">
			<img class="card-image-top" style="width:100%;" src="${thumbnail}" />
			<h5 class="card-title">${title}</h5>
			<button class="btn btn-primary">제품 보러가기</button>
			</div>
		</li>
		`,
			)
			.join('')}
		</ul>
		`;
	}
}
