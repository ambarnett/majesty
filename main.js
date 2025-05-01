/* 
    Define a function with a single parameter. When the function
    is invoked, an argument is required. 
*/
const {database} = require("./data.js")

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    database.queens.push(queenObject)
}

const payTribute = (tributeId, tributeDiscription, queenId) => {
    const tributeObject = {
        id: tributeId,
        description: tributeDiscription,
        queenId: queenId
    }

    database.tributeChest.push(tributeObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Jane Smith")
createQueen(3, "Lisa Stark")
payTribute(1, "gold", 2)
payTribute(2, "jewels", 3)
payTribute(3, "prisoners", 1)

const hailTheQueen = (nameString) => {
    return `hail her majesty, ${nameString}.` //This function returns a string
}

for (const queen of database.queens) {
    
    const hailMessage = hailTheQueen(queen.name) //What should be the argument?
    console.log(hailMessage)
}

// interate the queen objects to show tribute for each one
for (const queen of database.queens) {
    for (const tribute of database.tributeChest) {
        if (tribute.queenId === queen.id) {
            
            console.log(`${queen.name} has tribute ${tribute.description}`)
        }
    }
}


