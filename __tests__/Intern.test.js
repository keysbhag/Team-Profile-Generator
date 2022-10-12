const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

test("Can make a Intern object", () => {
    const intern = new Intern()
    
    expect(typeof (intern)).toBe("object");
});

test("Can make an intern object with properties", () => {
    const intern = new Intern('keys', 1, 'keyshawn@hotmail.com', 'york')
    
    expect(intern.name).toBe('keys');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("keyshawn@hotmail.com")
    expect(intern.school).toBe('york');
});

test("Can get intern school with getSchool", () => {
    const intern = new Intern('keys', 1, 'keyshawn@hotmail.com', 'york')
    
    expect(intern.getSchool()).toBe('york');
})

test("Can get 'intern' role with getRole", () => {
    const intern = new Intern('keys', 1, 'keyshawn@hotmail.com', 'york')
    
    expect(intern.getRole()).toBe('Intern');
})