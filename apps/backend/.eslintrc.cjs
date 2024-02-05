// prettier-ignore
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['prettier', 'google'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs, mjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'new-cap': 0,
		'object-curly-spacing': ['error', 'never'],
		'no-trailing-spaces': [
			'error',
			{skipBlankLines: true, ignoreComments: true},
		],
		'no-unused-vars': [
			'error',
			{argsIgnorePattern: 'err', varsIgnorePattern: 'notes'},
		],
		'max-len': ['error', {code: 140}],
	},
};
