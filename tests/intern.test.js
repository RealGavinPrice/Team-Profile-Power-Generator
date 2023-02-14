// using Intern constructor 
const Intern = require('../lib/Intern');

// Creates the Intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Eli', 30, 'test@test.com', 'CU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// Gets school from getSchool() method
test('gets employee school', () => {
    const intern = new Intern('Eli', 30, 'test@test.com', 'CU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role from getRole() Method
test('gets role of employee', () => {
    const intern = new Intern('Eli', 30, 'test@test.com', 'CU');

    expect(intern.getRole()).toEqual("Intern");
}); 
