# step1:
npm install faker html-webpack-plugin webpack webpack-cli webpack-dev-server

## note

  the entry point of your project is ```src/index.js``` and will output the result in ```dist/main.js```

# step2: 
  > in products folder:
  >
  > > webpack.config.js

  > > >  ```
  > > >    plugins: [
  > > >      new HtmlWebpackPlugin({
  > > >        template: './public/index.html'
  > > >      })
  > > >    ]
  > > >   ```
