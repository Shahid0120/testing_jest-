const reverseString = require('./reversestring')


// reverstring test

// doest it exist?
test('reversestring function exist', () => {
    expect(reverseString).toBeDefined();
});

// does it rever?

test("reversing the string `hello`", () => {
    expect(reverseString('hello')).toEqual('olleh');
})