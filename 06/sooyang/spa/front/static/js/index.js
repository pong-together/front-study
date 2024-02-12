import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';

const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
		{
			path: '/',
			view: Dashboard,
		},
		{
			path: '/posts',
			view: Posts,
		},
		{
			path: '/settings',
			view: Settings,
		},
	];

	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});

	let match = potentialMatches.find(
		(potentialMatches) => potentialMatches.isMatch,
	);

	// match 결과가 존재하지 않는 경우 홈으로 설정(404)
	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		};
	}

	const view = new match.route.view();

	document.querySelector('#app').innerHTML = await view.getHtml();
};

// 이벤트 위임을 이용한 네비게이터 설정
document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', (e) => {
		if (e.target.matches('[data-link]')) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});
	router();
});

// 뒤로가기, 앞으로가기 등의 상황에서도 리로딩되도록 설정함
window.addEventListener('popstate', router);
