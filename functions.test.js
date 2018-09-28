const functions = require('./functions')

test('Adds 2 + 2 to equal 4' , function(){
    expect(functions.add(2,2)).toBe(4);
})