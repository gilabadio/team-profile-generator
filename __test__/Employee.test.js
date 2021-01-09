const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');


test("create an Employee", () => {
    const employee = new Employee("David", 1, "sdsds");

    expect(employee.name).toBe('David');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    

});