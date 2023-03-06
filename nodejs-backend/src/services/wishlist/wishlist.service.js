const { Wishlist } = require('./wishlist.class');
const createModel = require('../../models/wishlist.model');
const hooks = require('./wishlist.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/wishlist', new Wishlist(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('wishlist');

  service.hooks(hooks);
};