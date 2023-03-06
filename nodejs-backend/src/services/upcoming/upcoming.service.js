const { Upcoming } = require('./upcoming.class');
const createModel = require('../../models/upcoming.model');
const hooks = require('./upcoming.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/upcoming', new Upcoming(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('upcoming');

  service.hooks(hooks);
};