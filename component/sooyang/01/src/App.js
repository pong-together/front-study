import Component from './components/Component.js';
import createPages from './pages/pages.js';
import Router from './pages/Router.js';

export default class App extends Component {
	setup() {
		this.$state = {
			routes: [],
		};
	}

	template() {
		return `
		<header>
			<a href="#/">Home</a>
			<a href="#/fetch">Fetch</a>
		</header>
		<main></main>
		`;
	}

	mounted() {
		const $main = this.$target.querySelector('main');
		const pages = createPages($main);

		const router = new Router($main);
		router.addRoute('#/', pages.home);
		router.addRoute('#/fetch', pages.fetch);
		router.start();
	}
}
