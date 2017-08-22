var recipes = {
  'recipe1': 'eggs',
  'recipe2': 'milk',
  'recipe3': 'flour'
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({},recipes, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key) {
  delete recipes.key;
  return recipes;
}
