const checkAnagram = require('./checkAnagram')

test("checkAnagram is Defined" , () => {
    expect(checkAnagram).toBeDefined()
})


test("Check if two Strings are Anagrams" , () => {
    expect(checkAnagram("book", "ookb#")).toBeTruthy()
})