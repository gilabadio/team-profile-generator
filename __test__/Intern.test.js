const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');


test("create an intern", () => {
    const intern = new Intern("Frank", 1, "sdsds", "bababbasbs");

    expect(intern.name).toBe('Frank');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
   
    

});