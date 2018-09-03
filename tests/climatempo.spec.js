const chai = require('chai');
const expect = chai.expect;
const climatempo = require('../src/climatempo');

describe('ClimaTempo', () => {
    it('should use id locale sao paulo default', () => {
        expect(climatempo()).to.be.equal('today the expectation is from 3477 to 123');
    });

    it('should use id locale', () => {
        expect(climatempo(12, 14)).to.be.equal('today the expectation is from 12 to 123');
    });
});