import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

const getPost = (fileName) => {
	//import json from `./static/albums/${fileName}.json`
	// console.log(json)
	// return fs.readFileSync(path.resolve('static/albums/', `${fileName}.md`), 'utf-8');
	let module = import.meta.globEager(`/static/albums/*json`);
	console.log(
		module[`/static/albums/${fileName}.json`].default
		// [`static/albums/${fileName}.json`]
	);
	return module[`/static/albums/${fileName}.json`].default;
};

export function get({ params }) {
	const { slug } = params;

	const data = getPost(slug);

	return {
		head: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
}
