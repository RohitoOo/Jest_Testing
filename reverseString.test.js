const reverseString = require('./reverseString')

test("String is Defined" , () => {
    expect(reverseString).toBeDefined()
})


test("String must be reversed" , () => {
    
    expect(reverseString('hellO')).toEqual('olleh')
})