// Tests for the Manager Class
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

test("Can make a Manager object", () => {
    const manager = new Manager()
    
    expect(typeof (manager)).toBe("object");
});

test("Can make an Manager object with properties", () => {
    const manager = new Manager('keys', 1, 'keyshawn@hotmail.com', 1)
    
    expect(manager.name).toBe('keys');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("keyshawn@hotmail.com")
    expect(manager.officeNumber).toBe(1);
});

test("Can get Manager office number with getOfficeNum", () => {
    const manager = new Manager('keys', 1, 'keyshawn@hotmail.com', 1)
    
    expect(manager.getOfficeNum()).toBe(1);
})

test("Can get 'Manager' role with getRole", () => {
    const manager = new Manager('keys', 1, 'keyshawn@hotmail.com', 1)
    
    expect(manager.getRole()).toBe('Manager');
})