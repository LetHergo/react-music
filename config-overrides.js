const { override, addWebpackResolve, fixBabelImports, addPostcssPlugins } = require('customize-cra')
const path = require('path')
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd-mobile',
		style: 'css'
	}),
	addPostcssPlugins([
		require('postcss-pxtorem')({
			rootValue: 37.5,
			propList: ['*']
			// propWhiteList: []
		})
	]),
	addWebpackResolve({
		extensions: ['.css', 'module.scss', '.scss', '.js', '.jsx', 'json'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@comp': path.resolve(__dirname, 'src/components'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@views': path.resolve(__dirname, 'src/views'),
			'@api': path.resolve(__dirname, 'src/api'),
			'@utils': path.resolve(__dirname, 'src/utils')
		}
	})
)
