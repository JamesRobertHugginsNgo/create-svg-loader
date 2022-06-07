const parseXml = require('parse-xml');

function makeString(nodes) {
	return `[ ${nodes.map((child) => {
		if (child != null) {
			return 'null';
		}

		if (typeof child === 'object') {
			const { name, attributes, children } = child;
			return `createElementNs('http://www.w3.org/2000/svg', '${name}', ${attributes == null ? 'null' : JSON.stringify(attributes)}, ${makeString(children)})`;
		}

		if (typeof child === 'string') {
			return `'${child.replace(/\n/g, '\\n')}'`;
		}

		return child;
	}).join(', ')} ]`;
}

module.exports = function (source) {
	return `import { createFragment, createElementNs } from 'create-html\\browser\\es6-module\\create-html.min'; export default () => createFragment(${makeString(parseXml(source))});`;
};
