import request from 'supertest';
import app from '../server';

describe('Recipes route', () => {
  it('Default Request', async done => {
    request(app)
      .get('/recipes/?i=water,onion,tomato')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.keywords = ['onion', 'tomato', 'water'];
      })
      .expect(200, done);
  }, 10000);

  it('requisition with more than 3 items', async done => {
    request(app)
      .get('/recipes/?i=onion,tomato,water,potato')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.errors[0].msg = 'must have up to 3 items';
      })
      .expect(422, done);
  });

  it('Empty i', async done => {
    request(app)
      .get('/recipes/?i=')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.errors[0].msg = 'Invalid value';
      })
      .expect(422, done);
  });

  it('Without query param i', async done => {
    request(app)
      .get('/recipes/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.errors[0].msg = 'Invalid value';
      })
      .expect(422, done);
  });
});
