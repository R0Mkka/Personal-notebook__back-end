const idGenerationService = require('../services/id-generation-service');
const Spending = require('../schemas/spending.schema');

class SpendingsService {
  getAllSpendings() {
    return Spending.find()
      .catch((error) => {
        console.error('ERROR WHILE GETTING ALL SPENDINGS!', error);
        return error;
      });
  }

  getSpendingsByCategory(categoryId) {
    return Spending.find({ categoryId })
      .catch((error) => {
        console.error('ERROR WHILE GETTING SPENDINGS BY CATEGORY!', error);
        return error;
      });
  }

  createSpending(spendingData) {
    const id = idGenerationService.generate();
    const spending = new Spending({ id, ...spendingData });
    return spending.save()
      .catch((error) => {
        console.error('ERROR WHILE SPENDING CREATION!', error);
        return error;
      });
  }
}

module.exports = new SpendingsService();
