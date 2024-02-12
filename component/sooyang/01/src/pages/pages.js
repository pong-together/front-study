import FetchPage from '../components/Fetch.js';
import HomePage from '../components/Home.js';

export default (main) => {
	const home = () => new HomePage(main);
	const fetch = () => new FetchPage(main);

	return {
		home,
		fetch,
	};
};
