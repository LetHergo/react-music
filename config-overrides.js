const {
	override,
	addWebpackResolve,
	fixBabelImports,
	addPostcssPlugins,
	adjustStyleLoaders
} = require('customize-cra');
const path = require('path');
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
		}
	}),
	adjustStyleLoaders(loader => {
		if (loader.test.toString().includes('scss')) {
			loader.use.push({
				loader: 'sass-resources-loader',
				options: {
					resources: path.resolve(__dirname, './src/styles/index.scss') //全局引入公共的scss 文件
				}
			});
		}
	})
);
