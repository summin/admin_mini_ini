# php-react-mini-backend

1. Install Apache with PHP, Node.js and npm to your computer/server

2. Change the paths: "$rel_path_prefix" in /admin/index.php and "const DevPath" in /admin/app/webpack.config.js

3. npm install
    npm run-script build
    npm run-script watch

4. to run development environment type: npm run-script start
    the development preview will be available at localhost:8080 or other address, specified in the command line vebrose, following start command

    if the webpack-dev-server generates error you may need to erase it from ./node_modules and reinstall as npm install webpack-dev-server from being in /app folder

5. 
