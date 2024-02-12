import Component from './Component.js';
import http from '../util/http.js';
import Post from './Post.js';

export default class extends Component {
	setup() {
		this.$state = {
			postList: [],
			isClick: false,
		};
	}

	setEvent() {
		this.addEvent('click', '.appBtn', () => {
			console.log(this.$state.isClick);
			this.setState({ isClick: !this.$state.isClick });
		});
	}

	template() {
		return `
			<div>
			<p>버튼을 클릭해보세요!</p>
			<button class="btn-primary btn appBtn" data-link >click!</button>
			<div data-component="post-list"></id>
			</div>
		`;
	}

	mounted() {
		const fetchRally = async () => {
			const dummyPost = await http.get('https://dummyjson.com/products');
			this.setState({ postList: [...dummyPost.products] });
		};
		if (this.$state.postList.length === 0) {
			fetchRally();
		}

		const $post = this.$target.querySelector(`[data-component="post-list"]`);

		if (this.$state.isClick === false) {
			$post.innerHtml = '';
		} else {
			new Post($post, this.$state);
		}
	}
}
