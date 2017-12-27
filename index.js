var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = Object.assign({}, object, {key:value})
  return newobj
}
