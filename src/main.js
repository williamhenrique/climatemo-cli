#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package');

program
    .version(pkg.version)
    .description(pkg.description)
    .option('-C, --city <city-id>', 'ID City. (Default: USD)')
    .parse(process.argv);
    