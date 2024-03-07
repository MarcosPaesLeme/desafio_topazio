/**
 * Represents a person object.
 * @typedef {Object} Person
 * @property {string} name - The name of the person.
 * @property {string[]} rooms - An array of room numbers associated with the person.
 * @property {string} age - The age of the person.
 * @property {string} gender - The gender of the person ('M' for male, 'F' for female).
 * @property {Object} companies - Information about the companies associated with the person.
 * @property {string} companies.name - The company name.
 * @property {string} companies.document - The company document.
 */

/**
 * This function has the goal to remove empty fields and specific characters
 * @param {Person} payload - The payload contains information
 * @param {string[]} charactersToRemove - The characters thsat should be removed from the payload
 * @returns {Person} - Returns the object without the empty fields
 */
const removeFields = (payload, charactersToRemove) => {
  const newData = {};

  const containsSpecialCharacters = (value) => {
    return charactersToRemove.includes(value);
  };

  for (const [key, value] of Object.entries(payload)) {
    if (!containsSpecialCharacters(value)) {
      if (Array.isArray(value)) {
        const filteredArray = value.filter((item) =>
          !containsSpecialCharacters(item),
        );
        if (filteredArray.length > 0) {
          newData[key] = filteredArray;
        }
      } else if (typeof value === "object") {
        const nestedObject = removeFields(value, charactersToRemove);
        if (Object.keys(nestedObject).length > 0) {
          newData[key] = nestedObject;
        }
      } else {
        newData[key] = value;
      }
    }
  }

  return newData;
};

module.exports = {
  removeFields,
};
