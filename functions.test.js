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