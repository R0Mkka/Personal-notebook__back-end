const notesRouter = require('./notes');

function initRoutes(app) {
  app.use('/notes', notesRouter);
}

module.exports = initRoutes;
