const { requestsArr, requestsObj, maxTime } = require('../data/dataFile')

function shiftTasks(index) {
    for(let i = index + 1; i < requestsArr.length; i++) {
        requestsArr[i - 1] = requestsArr[i]
    }
    requestsArr.pop()
    console.log('User left: ', requestsArr);
}

function updateTask(userID) {
    requestsObj[userID].counter--
    console.log(`Task completed: ${userID} count: ${requestsObj[userID].counter}`);
    if(requestsObj[userID].counter == 0) {
        delete requestsObj[userID]
        shiftTasks(requestsArr.indexOf(userID))
    }
}

exports.createTask = (userID) => {
    if(requestsArr.includes(userID)) {
        requestsObj[userID].counter++
    }
    else {
        requestsArr.push(userID)
        requestsObj[userID] = {
            counter: 1
        }
    }
    console.log(`created user: ${userID} count: ${requestsObj[userID].counter}`);
    setTimeout(updateTask.bind(this, userID), maxTime)
}