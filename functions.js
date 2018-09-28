const axios = require('axios')

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
    },
    fetchUser: function(){
        return axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
    }
}
 
module.exports = functions;