# step1:
npm install faker html-webpack-plugin webpack webpack-cli webpack-dev-server

# step2: 
  ## in products folder:
    + create public/index.html
    ```
      <script src="../src/index.js"></script>
    ```
    + webpack.config.js
    ```
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html'
        })
      ]
    ```

