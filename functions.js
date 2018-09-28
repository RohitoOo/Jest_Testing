const functions = { 
    add: (num1,num2) => num1 + num2,
    isNull: () => undefined,
    checkValue: (x) => x,
    checkUser: () => {
        let User = {
        firstName : "Rohito", 
        };
        User['lastName'] = 'Bhambhani'
        return User
    }
}
 
module.exports = functions;