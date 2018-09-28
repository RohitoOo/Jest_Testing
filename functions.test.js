const functions = require('./functions')

test('Adds 2 + 2 to equal 4' , function(){
    expect(functions.isNull()).toBeUndefined();
})

test('Should Be Falsy' , function(){
    expect(functions.checkValue(2)).toBeTruthy();
})

test("User Should have firstName of Rohito" , function(){
    expect(functions.checkUser()).toEqual({
        firstName: "Rohito",
        lastName: "Bhambhani"
    })
})


// Less Than
test("Result should be less than 1600" , function(){
    const val1 = 500;
    const val2 = 800;
    expect(val1 + val2 ).toBeLessThan(1600)
})


// Regex Test
test("There is no I in team" , function(){
    expect('team').not.toMatch(/I/gi)
})

// Check Arrays
test("Admin Should be In Usernames" , () => {
let usernames = ["Adam", "John", "Admin"]
expect(usernames).toContain('Admin')
})