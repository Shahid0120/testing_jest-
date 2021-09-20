const anagram = require("./anagram");

// check if the functions ir wokring
test("check if the functions exist", () => {
  expect(anagram).toBeDefined();
});

beforeAll(() => {
  console.log("Checking test...");
});

afterAll(() => {
  console.log("Completed this test...");
});

// check if anagram is working
describe("anagram test", () => {
  // check if anagru is wokring truth?
  test("check if `iceman` is comming back as `manice`", () => {
    expect(anagram("iceman", "manice")).toBeTruthy();
  });

  // check if it is false
  test("check if `shahid` does not return `shahid1`", () => {
    expect(anagram("shahid", "Shahid1")).toBeFalsy();
  });

  // check anagoram works with non-symbols
  test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(anagram("Dormitory", "dirty room##")).toBeTruthy();
  });
});
