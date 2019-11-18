// Write your solution in this file!
driver = {}

updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = {...driver}
  newDriver[key] = value
  return newDriver
}
