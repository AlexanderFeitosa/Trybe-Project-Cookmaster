const models = require('../Models/recipeModels');

const create = async (id, name, ingredients, preparation) => models
  .create(id, name, ingredients, preparation);

const getAll = async () => models.getAll();

const findById = async (id) => {
  const recipe = await models.findById(id);

  return recipe;
};

module.exports = {
  create,
  getAll,
  findById,
};