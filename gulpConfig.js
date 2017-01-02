var config = {
  "js": ["./src/**/*.module.js", "./src/**/*.js"],
  "build_js": ["./build/src/**/*.module.js", "./build/src/**/*.js", "./build/templates-app.js"],
  "build": "./build",
  "html": "./src/app/**/*.tpl.html",
  "index": "./src/index.html",
  "vendor": "./vendor/**/*.js",
  "images": "./src/assets/images/**/*",
  "build_images": "./build/assets/images",
  "bower_config": {
      bowerJson: require("./bower.json"),
      directory: "./vendor",
      ignorePath: "../"
    }
};

module.exports = config;
