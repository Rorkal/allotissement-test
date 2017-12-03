//Variable d'environnement pour test
process.env.NODE_ENV = 'test';

//dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

var compterLots = function(lots) {
return lots.split('/').length;
}

/*
 * Test de la route /allotissement/123456789
 */
describe('Allotissement du lot 123456789', () => {
    it('Doit retourner 5 lots', (done) => {
        chai.request('http://localhost:3000')
            .get('/allotissement/123456789')
            .end((err, res) => {
                res.should.have.status(200);
                compterLots(res.body).should.be.equal(5);
                done();
            });
    });
});

/*
 * Test de la route /allotissement/163841689525773
 */
describe('Allotissement du lot 163841689525773', () => {
    it('Doit retourner 8 lots', (done) => {
        chai.request('http://localhost:3000')
            .get('/allotissement/163841689525773')
            .end((err, res) => {
                res.should.have.status(200);
                compterLots(res.body).should.be.equal(8);
                done();
            });
    });
});

/*
 * Test de la route /allotissement/163841689525773a
 */
describe('Allotissement du lot 163841689525773', () => {
    it('Doit retourner une erreur', (done) => {
        chai.request('http://localhost:3000')
            .get('/allotissement/163841689525773a')
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});