/* eslint-disable */
const jest = require('jest');

const argv = process.argv.slice(2);

jest.run(['--runInBand', ...argv]);
