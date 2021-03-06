const {
	addLessLoader, override, fixBabelImports, addWebpackAlias
} = require('customize-cra')
const path = require('path')
function resolve(dir){
	return path.join(__dirname,dir)
}

module.exports = override(
	fixBabelImports('import',{
		library: 'antd',
		libraryDirectory: 'es',
		style: true
	}),

	addLessLoader({
		javascriptEnabled: true,
		modifyVars: { "@primary-color": "#1DA57A" },
	}),

	addWebpackAlias({
		"@": resolve('src')
	})
)
