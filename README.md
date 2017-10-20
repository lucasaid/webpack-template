# Basic Webpack Template
Basic build of webpack that allows you to complile SASS and ES6 through babel and then minify css and js. Also able to extend and add React functionality  

# Setup  
`yarn install`

`yarn run build` Builds unminified files 
`yarn run server` Runs webpack dev server with watch command 
`yarn run production` Build minified files

# Add React
yarn add react react-dom babel-preset-react --dev  

add "react" to .babelrc presets  

Uncomment jsx loader in webpack.config.js  

Uncomment root div in index.html  

Uncomment React imports and React render in index.js  

Create source/app/App.jsx  

?  

Profit  
