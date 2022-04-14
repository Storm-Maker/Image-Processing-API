import supertest from 'supertest';
import app from '../../../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Should test the IMAGE endpoint responses', () => {
  afterEach((done) => {
    done();
  });

  it('gets the api endpoint redirect and render cuz no name', () => {
    request
      .get(`/images?filename=fjord&width=210&height=802/`)
      .then((res) => expect(res.redirect).toBeTrue);
  });

  it('gets the api endpoint redirect and render cuz no name', () => {
    request
      .get(`/api/images?filename=&width=210&height=803/`)
      .then((res) => expect(res.redirect).toBeTrue);
  });
});
