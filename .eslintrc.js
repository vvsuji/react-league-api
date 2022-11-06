module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		indent: 0,
		'react/prop-types': 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'react/react-in-jsx-scope': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'import/order': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'react/jsx-no-bind': 0,
		'react/no-unescaped-entities': 0,
		'no-console': 0,
	},
};
