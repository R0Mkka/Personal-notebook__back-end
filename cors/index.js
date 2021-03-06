const allowedOrigins = require('./allowed-origins');

const corsOptions = {
  origin(origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(`Origin not allowed by CORS: ${origin}`));
    }
  },
};

module.exports = corsOptions;
