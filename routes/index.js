const notesRouter = require('./notes');
const spendingsRouter = require('./spendings');

function initRoutes(app) {
  app.use('/notes', notesRouter);
  app.use('/spendings', spendingsRouter);
}

module.exports = initRoutes;
