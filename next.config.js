const { join } = require("path")

module.exports = {
	webpack(config, option) {
		config.resolve.alias["react"] = "preact/compat"
		config.resolve.alias["react-dom"] = "preact/compat"
		config.resolve.alias["react-render-to-string"] =
			"preact-render-to-string"

		config.resolve.alias["pages"] = join(__dirname, "pages")
		config.resolve.alias["components"] = join(__dirname, "components")
		config.resolve.alias["~"] = __dirname
		config.resolve.alias["libs"] = join(__dirname, "libs")
		config.resolve.alias["pageTypes"] = join(__dirname, "pageTypes")

		config.resolve.alias["stores"] = join(__dirname, "stores")
		config.resolve.alias["layouts"] = join(__dirname, "layouts")

		return config
	}
}