const userCache = new Map ();
 addUser = (id, userData) =>
    userCache.set(id, { ...userData,cachedAt : Date.now()});


function getUser (id) {
    return userCache.get(id);
}
const removeUser = (id) =>
     userCache.delete(id);

addUser(1, {name : "jerry", email : "jeesms@gmail.com"})
addUser(2, {name : "james", email : "jamesynfkdl@gmail.com"})
console.log(getUser(2));


// phonebook creating a contact list 

const phoneBook = new Map ();

phoneBook.set ("jerry", {
    pnoheNumber : "070 0654 0393 ",
    address : "lagos"
})
phoneBook.set ("tom", {
    pnoheNumber : "080 9392 0393 ",
    address : "lagos"
})

// to check if it has it 
phoneBook.has("tom")

console.log(phoneBook.get("tom"))


// removing duplicates
const removeDuplicates =(array) =>
    [...new Set (array)];


const numbers = [1,2,3,4,5,6,7,4,3,6,6,3,2,5,1]
console.log(removeDuplicates(numbers))


// this is for 
// union = joining all 
//interception = selecting what is common
// difference

const firstSet = new Set ([1,2,3,4,5,6]);
const secondSet = new Set ([4,5,6,7,8,9]);

// union = joining all 
 john = (firstSet,secondSet) =>
     new Set([...firstSet, ...secondSet])

 const forUnion = john (firstSet,secondSet);
console.log(forUnion)

//interception = selecting what is common
 interception = (firstSet,secondSet) =>
    new Set ( [...firstSet].filter(x => secondSet.has(x)))

 const forInterception = interception (firstSet, secondSet)
 console.log(forInterception)


 //for difference 
 difference = (firstSet,secondSet) =>
    new Set ( [...firstSet].filter(x => !secondSet.has(x)))
 
 const forDifference = difference (firstSet, secondSet)
 console.log (forDifference)
 
 const forDifference2 = difference (secondSet, firstSet)
 console.log (forDifference2)