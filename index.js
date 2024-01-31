// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


//Deliverable #1_____
// const findMatching = (arr, query) => {
//     return arr.filter(item =>
//         item.indexOf(query) !== -1)
// }

// console.log(findMatching(drivers, 'Bobby'));


//Deliverable #2_____

//  item[0] && item[1] ???????
// query[0] & query[1] ???????
//findMatching() should bring everything to lower case



const findMatching = (drivers, name) => {
    return drivers.filter(item => {
        return item.toLowerCase() === name.toLowerCase()
    });
}

// console.log(findMatching(drivers, 'Bobby'));


const fuzzyMatch = (arr, name) => {
    return arr.filter((item) => {
        return item.startsWith(name);
    })
}

const matchName = (arr, passedName) => {
    return arr.filter((item) => {
        return item.name.toLowerCase() === passedName.toLowerCase();
    })
}







// function findMatching(drivers, name) {
//     return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
// }

// function fuzzyMatch(drivers, partialName) {
//     return drivers.filter(driver => driver.toLowerCase().startsWith(partialName.toLowerCase()));
// }

// function matchName(drivers, partialName) {
//     return drivers.filter(driver => driver.name.toLowerCase() === partialName.toLowerCase());
// }







// function fuzzyMatch(drivers, partialName) {
//     return drivers.filter(driver => driver.startsWith(partialName));
// }