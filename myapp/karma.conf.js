// karma.conf.js
module.exports = function(config) {
    config.set({
      basePath: '**/*.js',
      frameworks: ['jasmine'],
      singleRun: true,
      reporters: ['dots', 'mocha'],
      junitReporter: {outputFile: 'test-results.xml'},
      //...
    });
  };