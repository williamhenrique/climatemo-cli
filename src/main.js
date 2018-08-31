#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package');

const climatempo = require('./climatempo');

program
    .version(pkg.version)
    .description(pkg.description)
    .option('-L, --locale <locale>', 'ID locale. (Default 3477 - Sao Paulo')
    .parse(process.argv);

console.log(climatempo(program.locale));
    