var recipes = new Object();

fuction updateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign({}, object, {[key]: value})
}