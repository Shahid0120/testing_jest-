const functions = require("./functions");

test("Adds 2 plus 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 plus 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Retrurns a null value", () => {
  expect(functions.isNull()).toBeNull();
});

test("Return the user first name and last name", () => {
  expect(functions.createUser()).toMatchObject({
    firstName: "Shahid",
    lastName: "Hussain",
  });
});

// testing for the weight of the container to be below 1600

test("Weight of container is < 1600", () => {
  expect(functions.containerWeight()).toBeLessThanOrEqual(1600);
});

test("there should not be a z in Shahid", () => {
  expect("Shahidz").not.toMatch(/Z/);
});
//asyncrynours calls
// api test  for asyncrynours calls
// test("Userfetched name should be leanne Graham", () => {
//   // this make sure that the api is fetched
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.username).toEqual("Bret");
//   });
// });

// Async Await
test("Userfetched name should be leanne Graham", async () => {
  // this make sure that the api is fetched
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.username).toEqual("Bret");
    
});