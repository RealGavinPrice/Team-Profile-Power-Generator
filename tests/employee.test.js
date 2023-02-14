// Using Employee constructor 
const Employee = require('../lib/Employee');

// Creates the Employee Object
test('creates an employee object', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Gets name from getName() method
test('gets employee name', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets ID from getID() method
test('gets employee ID', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Gets email from getEmail() method
test('gets employee email', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets role from getRole() method
test('gets role of employee', () => {
    const employee = new Employee('Eli', 30, 'test@test.com');

    expect(employee.getRole()).toEqual("Employee");
}); 