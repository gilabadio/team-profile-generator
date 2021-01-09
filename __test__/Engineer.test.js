const Engineer = require('../lib/Engineer');

test("create an Engineer", () => {
    const engineer = new Engineer("Sandy", 1, "sdsdsdsds", "SandyJames");

    expect(engineer.name).toBe('Sandy');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    

});