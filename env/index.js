'use strict';

const
    loadEnv = require('./load'),
    getenv = require('getenv');

loadEnv('.env');

module.exports = {
    ui: {
        backOfficeBaseUrl: getenv('BACK_OFFICE_BASE_URL', '/api/v1/pos'),
        eJournalBaseUrl: getenv('E_JOURNAL_BASE_URL', '/api/v1/pos/css_proxy')
    },
    webpackServer: {
        host: getenv('WEBPACK_SERVER_HOST', 'localhost'),
        port: getenv.int('WEBPACK_SERVER_PORT', 9002)
    },
    fakeApiServer: {
        port: getenv.int('FAKE_API_SERVER_PORT', 9003)
    }
};