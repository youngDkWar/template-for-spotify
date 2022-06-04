const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
	// Other rules...
	plugins: [
		new NodePolyfillPlugin()
	],
    resolve: {
        fallback: {
          util: require.resolve("util/"),
          "path": require.resolve("path-browserify"),
          "os": require.resolve("os-browserify/browser"),
        }
    }
}
