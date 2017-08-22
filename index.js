var recipes = {
  'recipe1': 'eggs',
  'recipe2': 'milk',
  'recipe3': 'flour'
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function updateObjectWithKeyAndValue(object, key, value) {
  object.assign({}, recipes, [key] = value);
  return object;
}
