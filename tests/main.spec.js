const expect = require('chai').expect;
const exec = require('child_process').exec
const pkg = require('../package');


const main = './src/main.js';

describe('Main', () => {
    it('Shuold a be version', (done) => {
        exec(`${main} --version`, (err, stdout, stderr) => {
            if(err) throw err;
            expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
            done();
        });
    });

    it('Shuold a be description', (done) => {
        exec(`${main} --help`, (err, stdout, stderr) => {
            if(err) throw err;
            expect(stdout.includes(pkg.description)).to.be.true;
            done();
        });
    });
    it('Shuold a be description', (done) => {
        exec(`${main} --help`, (err, stdout, stderr) => {
            if(err) throw err;
            expect(stdout.includes('--locale')).to.be.true;
            done();
        });
    });
});