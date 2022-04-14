import supertest from 'supertest';
import app from 'express';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Should test the PROCESSED endpoint responses', () => {
  afterEach((done) => {
    done();
  });

  it('gets the api endpoint response redirect and render cuz file not found & missing ext', () => {
    request
      .get(`/processed/fjord`)
      .then((res) => expect(res.redirect).toBeTrue);
  });

  it('gets the api endpoint response redirect and render cuz file not found', () => {
    request
      .get(`/processed/fjord.jpg`)
      .then((res) => expect(res.redirect).toBeTrue);
  });
});
