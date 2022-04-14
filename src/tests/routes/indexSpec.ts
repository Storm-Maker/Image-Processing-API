import supertest from 'supertest';
import app from '../../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Should test the API endpoint responses', () => {
  afterEach((done) => {
    done();
  });

  it('gets the api endpoint redirect & render to the guide page', () => {
    request.get(`/api/`).then((res) => expect(res.redirect).toBeTrue);
  });
});
