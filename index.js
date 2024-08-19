// Code your solution here
// Function to find drivers with an exact match on the name
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

// Function to find drivers whose names start with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// Function to find drivers whose `name` property matches the provided name
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}
