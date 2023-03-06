const assert = require('assert');
const app = require('../../src/app');

describe('\'upcoming\' service', () => {
  it('registered the service', () => {
    const service = app.service('upcoming');

    assert.ok(service, 'Registered the service (upcoming)');
  });
});
