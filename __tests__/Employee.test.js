const Employee = require('../lib/Employee.js')

test("Can make an employee object for now", () => {
    const employee = new Employee()
    
    expect(typeof (employee)).toBe("object");
});

test("Can construct variables", () => {
    const employee = new Employee('keyshawn', 1, "keyshawn@hotmail.com")

    expect(employee.name).toBe('keyshawn');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("keyshawn@hotmail.com")
});

test("Gets name using getName()", () => {
    const employee = new Employee('keyshawn', 1, "keyshawn@hotmail.com")

    expect(employee.getName()).toBe('keyshawn');
});

test("Gets ID using getId()", () => {
    const employee = new Employee('keyshawn', 1, "keyshawn@hotmail.com")

    expect(employee.getId()).toBe(1);
});

test("Gets email using getEmail()", () => {
    const employee = new Employee('keyshawn', 1, "keyshawn@hotmail.com")

    expect(employee.getEmail()).toBe('keyshawn@hotmail.com');
});

test("Gets role using getRole()", () => {
    const employee = new Employee('keyshawn', 1, "keyshawn@hotmail.com")

    expect(employee.getRole()).toBe('Employee');
});

