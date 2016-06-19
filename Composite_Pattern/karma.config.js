'use strict';

module.exports = function (config) {
    var browsers = ['PhantomJS'];
    var reporters = ['mocha'];
    var preprocessors = ['webpack', 'sourcemap'];
    var webpack = {
        devtool: 'inline-source-map',
        module: {
            loaders: [
                {
                    test: /(\.js)$/,
                    exclude: /(node_modules)/,
                    loader: ['babel-loader'],
                    query: {
                        presets: ['es2015']
                    }
                }
            ]
        }
    };

    config.set({
        "browsers": browsers,
        "reporters": reporters,
        "webpack": webpack,
        frameworks: ['mocha'],
        files: [
            "./test/*-test.js"
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-mocha-reporter',
            'karma-coverage',
            'karma-phantomjs-launcher'
        ],
        preprocessors: {
            "./test/*-test.js": preprocessors
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage'
        },
        webpackMiddleware: {
            noInfo: true //please don't spam the console when running in karma!
        },
        singleRun: config.coverage
    });
};