var recipes = new Object();

Function updateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign({}, object, {[key]: value})
}