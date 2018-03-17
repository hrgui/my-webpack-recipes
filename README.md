# my-webpack-recipes
my webpack recipes, cuz webpack is tough, too hard.

# Create React App
Last Updated: 3/17

## `bare-cra-min`:  instructions on adding `create-react-app` to your own app
1. Add `react-scripts` as a devDependencies.
2. Create the following: src/index.js and public/index.html.
3. (Optional, only if you are doing React) Add `react` and `react-dom` as a dependency.
4. Add to package.json:
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
```

//TODO: What about unit tests?


# Webpack 4
Last updated: 3/17 <br/>

**Dev Server**
- webpack-serve

**Notes:**
- webpack-dev-server doesn't like `mode`
- All the examples that use `webpack-serve` JS - doesn't work with hot reloading, even though it tries to.

## The `bare-minimum`
- No webpack config; so it defaults to `production`
- src/index.js and index.html
- run `webpack-serve` in the `bare-minimum` folder.

**cons**
- `webpack-serve` requires a config if it needs to be in prod mode.

## The `starter-webapp`
- Inspired by `create-react-app`, but doesn't do the React stuff!
- CSS: it works with hot reloading.
- JS: Plain jane JavaScript, no loader
- Files: It loads the files, nuff said.


**Plugins**
- `MiniCSSExtractPlugin`: Extracts CSS out from the bundle. (only used during dev `webpack-serve`)
- `HtmlWebpackPlugin`: Injects JavaScript and CSS into the HTML! All ze bundles, in the entry-specified order.