const getAllPosts = () => {
	let modules = import.meta.globEager('/static/albums/*.json');

	try {
		return Object.keys(modules).map((key) => {
			//get all paths
			obj = modules[key];
			data = Object.assign(
				//combine arr of obj into single obj
				{},
				...Object.keys(obj)
					.filter((key) => key !== 'default' && key !== 'body') //obj has getters so get list of 'fields' to extract value
					.map((prop) => {
						return { [prop]: modules[key][prop] }; //use getters to make an object with basic datatypes
					})
			);

			return { ...data, slug: key.split('/').pop().split('.').shift() };
		});
	} catch (e) {
		return [];
	}
};

export function get(_, res) {
	const posts = getAllPosts();
	return {
		head: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(posts)
	};
}
