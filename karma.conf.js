module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'chai'],
    files: [
        './tests/*.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['spec','progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
};
