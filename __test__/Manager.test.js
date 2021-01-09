const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("create a Manager", () => {
    const manager = new Manager("Bob", 2, "hdeuhdue", 65656565);

    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

})