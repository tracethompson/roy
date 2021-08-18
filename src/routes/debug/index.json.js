export async function get(req) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	let modules = import.meta.glob('/static/posts/*.md');

	let modulesRoot = import.meta.glob('/posts/*.md');

	for (const path in modules) {
		modules[path]().then((mod) => {});
	}
	return {
		body: JSON.stringify(modules[0])
	};
}
