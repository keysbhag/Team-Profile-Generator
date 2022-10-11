const Engineer = require('../lib/Engineer')

test("Can make an engineer object", () => {
    const engineer = new Engineer()
    
    expect(typeof (engineer)).toBe("object");
});

test("Can make an engineer object with properties", () => {
    const engineer = new Engineer('keys', 1, 'keyshawn@hotmail.com', 'keysbhag')
    
    expect(engineer.github).toBe('keysbhag');
});

test("Can get github username with getGitHub", () => {
    const engineer = new Engineer('keys', 1, 'keyshawn@hotmail.com', 'keysbhag')
    
    expect(engineer.getGitHub()).toBe('keysbhag');
})

test("")

test("Can get 'engineer' role username with getRole", () => {
    const engineer = new Engineer('keys', 1, 'keyshawn@hotmail.com', 'keysbhag')
    
    expect(engineer.getRole()).toBe('Engineer');
})

