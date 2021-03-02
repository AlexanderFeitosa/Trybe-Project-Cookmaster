const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (id, name, ingredients, preparation) => {
  const { insertedId } = await connection().then((db) => db.collection('recipes')
    .insertOne({
      name,
      ingredients,
      preparation,
      userId: id,
    }));

  return {
    recipe: {
      name,
      ingredients,
      preparation,
      userId: id,
      _id: ObjectId(insertedId),
    },
  };
};

const getAll = async () => {
  const recipesList = await connection().then((db) => db.collection('recipes')
    .find().toArray());

  return recipesList;
};

const findById = async (id) => {
  const recipe = await connection().then((db) => db.collection('recipes')
    .findOne({ _id: ObjectId(id) }));

  return recipe;
};

module.exports = {
  create,
  getAll,
  findById,
};