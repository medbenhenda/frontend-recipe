/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

    app.import('bower_components/animate.css/animate.min.css');
    app.import('vendor/icomoon.css');
    app.import('bower_components/themify-icons/css/themify-icons.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    app.import('bower_components/magnific-popup/dist/magnific-popup.css');
    app.import('bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');
    app.import('bower_components/owl.carousel/dist/assets/owl.carousel.min.css');
    app.import('bower_components/owl.carousel/dist/assets/owl.theme.default.css');
    app.import('vendor/style.css');

    app.import('bower_components/jquery/dist/jquery.min.js');
    app.import('bower_components/jquery.easing/jquery.easing.min.js');
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    app.import('bower_components/waypoints/lib/jquery.waypoints.min.js');
    app.import('bower_components/owl.carousel/dist/owl.carousel.min.js');
    app.import('vendor/jquery.countTo.js');
    app.import('bower_components/jquery.stellar/src/jquery.stellar.js');
    app.import('bower_components/magnific-popup/dist/jquery.magnific-popup.min.js');
    app.import('bower_components/moment/min/moment.min.js');
    app.import('bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js');
    app.import('vendor/main.js');

    var semanticIcons = pickFiles('vendor/fonts', {
        srcDir: '/',
        destDir: '/fonts'
    });
  return app.toTree([semanticIcons]);
};
