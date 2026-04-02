const user = {
    name : "jerry",
    seccondName : "john",
    Profile :{
        age : 53,
        address :{
            state :"lagos",
            country :"nigeria"
        }
    }
}
const user2 = {
    name : "jax",
    Profile :{
        age : 55,
        address :{
            state :"oyo",
            country :"nigeria"
        }
    }
}
const user3 = {
    name : "james",
    Profile :{
        age : 54,
        address :{
            state :"photacourt",
            country :"nigeria"
        }
    }
}
console.log( user.Profile?.address?.state)
console.log(user.seccondName)
console.log (user.Profile?.age)
console.log(user.name)
console.log (user2.Profile?.address?.country)
console.log (user2.Profile?.age)
console.log(user3.name)
console.log(user3.Profile?.address?.state)