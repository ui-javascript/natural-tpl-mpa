const webpackMerge = require('webpack-merge')
const jsLoader = require('./babel-loader.config')
const cssLoader = require('./css-loader.config')
const sassLoader = require('./sass-loader.config')
const urlLoader = require('./url-loader.config')

module.exports = webpackMerge(jsLoader, cssLoader, sassLoader, urlLoader)