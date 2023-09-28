const { requestsObj, maxTime } = require('../data/dataFile')

function updateTask(userID) {
    requestsObj[userID].counter--
    console.log(`Task completed: ${userID} count: ${requestsObj[userID].counter}`);
    if(requestsObj[userID].counter == 0) {
        delete requestsObj[userID]
    }
}

exports.createTask = (userID) => {
    if(Object.keys(requestsObj).includes(userID)) {
        requestsObj[userID].counter++
    }
    else {
        requestsObj[userID] = {
            counter: 1
        }
    }
    console.log(`created user: ${userID} count: ${requestsObj[userID].counter}`);
    setTimeout(updateTask.bind(this, userID), maxTime)
}