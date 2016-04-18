# csjs-loader
Webpack loader to extract csjs into an external css bundle.

```
npm install --save-dev csjs-loader
```

### Usage

To use this plugin, create a seperate files for each CSJS module. For example:

**main.csjs.js**
```javascript
const csjs = require('csjs');

module.exports = csjs`

.foo {
  color: red;
}

`;
```

### Webpack

```javascript
loaders: [
  { test: /\.csjs.js$/, loader: ExtractTextPlugin.extract("style-loader", 'css!csjs!babel!') }
],
plugins: [
  new ExtractTextPlugin('bundle.css', {allChunks: true})
]
```


### Limitations

* Your CSJS files must export the result of a CSJS tagged template string
* Your CSJS files (and any dependencies) must be executable natively on your version of Node without any transpilation or browserify transforms
