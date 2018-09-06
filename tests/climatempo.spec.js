const chai = require('chai');
const sinon = require('sinon');
const sinonchai = require('sinon-chai');
const nock = require('nock');

const expect = chai.expect;
const climatempo = require('../src/climatempo');

chai.use(sinonchai);


describe('ClimaTempo', () => {

    let consoleStub;
    const responseMock = {
        id: 3477,
        name: 'São Paulo',
        state: 'SP',
        country: 'BR  ',
        data:
        {
            temperature: 20,
            wind_direction: 'E',
            wind_velocity: 13,
            humidity: 53,
            condition: 'Alguma nebulosidade',
            pressure: 1024,
            icon: '2',
            sensation: 20,
            date: '2018-09-06 13:19:41'
        }
    };

    beforeEach(() => {
        consoleStub = sinon.stub(console, 'info');
    });

    afterEach(() => {
        consoleStub.restore();
    });

    it('should use locale Sao Paulo default', async () => {
        nock('http://apiadvisor.climatempo.com.br')
            .get('/api/v1/forecast/locale/3477/days/15')
            .query({ token: '1bbc72a29b8f9a44003001b3dc915598' })
            .reply(200, responseMock);

        await climatempo();
        expect(consoleStub).to.have.been.calledWith(`BTC`);
    });


});