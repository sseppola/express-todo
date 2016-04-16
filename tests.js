import test from 'ava';
import request from 'supertest';
import app from './app';


test.cb('GET /test', t => {
  request(app)
    .get('/test')
    .end(function(err, res){
      if (err) {
        t.fail('Error making call GET /test');
        t.fail(err.toString())
        console.error(err);
      }

      t.truthy(res.headers['content-type'].indexOf('application/json') !== -1)
      t.deepEqual(res.statusCode, 200);
      t.deepEqual(res.body, { status: 'Ok' })
      t.end();
    });
});
