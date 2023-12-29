module.exports = {
	extends: require.resolve('@umijs/max/eslint'),
	rules: {
		'@typescript-eslint/no-unused-expressions': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'no-param-reassign': 0,
		'@typescript-eslint/ban-types': 0, // 禁止使用特定类型
		'@typescript-eslint/no-empty-interface': 0,
		'no-async-promise-executor': 0
	}
}
