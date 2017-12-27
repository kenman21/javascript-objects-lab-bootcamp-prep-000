var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = Object.assign({}, object, {[key]:value})
  return newobj
}

function destructivelyUpdateObjectWithKeyAndValue(object,key, value) {
  object[key] = value
  return object
}