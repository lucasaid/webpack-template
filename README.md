# Basic Webpack Template
Basic build of webpack that allows you to complile SASS and ES6 through babel and then minify css and js. Also able to extend and add React functionality  

# Setup  
`yarn install`

`yarn run build` Builds unminified files  
`yarn run server` Runs webpack dev server with watch command  
`yarn run production` Build minified files  

# Add React
1. yarn add react react-dom babel-preset-react --dev  

2. add "react" to .babelrc presets  

3. Uncomment jsx loader in webpack.config.js  

4. Uncomment root div in index.html  

5. Uncomment React imports and React render in index.js  

6. Create source/app/App.jsx  

7. ?  

8. Profit  
