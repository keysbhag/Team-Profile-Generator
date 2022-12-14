// Tests for the Engineer Class
const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer')

test("Can make an Engineer object", () => {
    const engineer = new Engineer()
    
    expect(typeof (engineer)).toBe("object");
});

test("Can make an Engineer object with properties", () => {
    const engineer = new Engineer('keys', 1, 'keyshawn@hotmail.com', 'keysbhag')

    expect(engineer.name).toBe('keys');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("keyshawn@hotmail.com")
    expect(engineer.github).toBe('keysbhag');
});

test("Can get Engineer github username with getGitHub", () => {
    const engineer = new Engineer('keys', 1, 'keyshawn@hotmail.com', 'keysbhag')
    
    expect(engineer.getGitHub()).toBe('keysbhag');
})

test("Can get 'Engineer' role username with getRole", () => {
    const engineer = new Engineer('keys', 1, 'keyshawn@hotmail.com', 'keysbhag')
    
    expect(engineer.getRole()).toBe('Engineer');
})

