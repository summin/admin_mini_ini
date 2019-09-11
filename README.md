# mini-ini-backend

A project that will help to manage backend ini files configuration and organise the workflowof a project, where backend uses ini config files to store data. The code can be used and manipulated to connect to relational or no sql databases. 

## Getting Started

Download or clone the project and follow the instructions below

### Prerequisites

PHP and MySQL enabled server. React.js

### Configuration

for development change .htaccess file inside admin folder to Header set Access-Control-Allow-Origin "*". In production allowing this is forbidden. 

### Installing

1. Install Apache with PHP, Node.js and npm to your computer/server

2. Change the paths: "$rel_path_prefix" in /admin/index.php and "const DevPath" in /admin/app/webpack.config.js

3. npm install
    npm run-script build
    npm run-script watch

4. to run development environment type: npm run-script start
    the development preview will be available at localhost:8080 or other address, specified in the command line vebrose, following start command

    if the webpack-dev-server generates error you may need to erase it from ./node_modules and reinstall as npm install webpack-dev-server from being in /app folder

5. 

