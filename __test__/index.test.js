const { removeFields } = require("../index");
const {
  personWithKeys,
  personWithoutKeysRemaning,
  resultPersonWithKeys,
  resultPersonWithoutKeysRemaning,
} = require("./mocks");

const { charactersToRemove } = require("../constants");

describe("Test removeFields method", () => {
  test("should remove fields from nested objects", () => {
    expect(removeFields(personWithKeys, charactersToRemove)).toStrictEqual(
      resultPersonWithKeys,
    );
  });

  it("should remove nested objects when no keys remaining", () => {
    expect(
      removeFields(personWithoutKeysRemaning, charactersToRemove),
    ).toStrictEqual(resultPersonWithoutKeysRemaning);
  });
});
