const functions = require('./functions')


// beforeEach( () => initDatabase());
// afterEach( () => closeDatabase());

// beforeAll( () => initDatabase());
// afterAll( () => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...")
// const closeDatabase = () => console.log("Database Closed...")



describe('Checking Users Name' , () => {
    const nameCheck = () => console.log("Checking Name...")
    beforeEach( () => 
        nameCheck()
    )

    test("Check if user is Jeff" , () => {
        const user = "Jeff"
        expect(user).toBe("Jeff")
    })
    
    test("Check if user is Rohito" , () => {
        const user = "Rohito"
        expect(user).toBe("Rohito")
    })
})



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

// Working with Async Data 

// Needed To Work With Async Data : 
// expect.assertions(1);
// return


// Promise 
test("User Fetched Name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

// Async Await 
test("User Fetched Name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})