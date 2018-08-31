const expect = require('chai').expect;
const exec = require('child_process').exec
const pkg = require('../package');


const main = './src/main.js';

describe('Main', () => {
    it('shuold a be version', (done) => {
        exec(`${main} --version`, (err, stdout, stderr) => {
            if(err) throw err;
            expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
            done();
        });
    });

    it('should return the description when climatempo --help', (done) => {
        exec(`${main} --help`, (err, stdout, stderr) => {
            if(err) throw err;
            expect(stdout.includes(pkg.description)).to.be.true;
            done();
        });
    });

    it('should return the locale when climatempo --help', (done) => {
        exec(`${main} --help`, (err, stdout, stderr) => {
            if(err) throw err;
            expect(stdout.includes('--locale')).to.be.true;
            done();
        });
    });
});