const users = require("./users/users.service.js");
const movies = require("./movies/movies.service.js");
const wishlist = require("./wishlist/wishlist.service.js");
const upcoming = require("./upcoming/upcoming.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(movies);
  app.configure(wishlist);
  app.configure(upcoming);
  // ~cb-add-configure-service-name~
};
