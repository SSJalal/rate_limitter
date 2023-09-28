const { Router } = require('express')
const { createTask } = require('../utils/task')

const { requestsArr, requestsObj, limit } = require('../data/dataFile')

const routes = Router()

routes.post('/send_request', async (req, res) => {
    const userID = req.body.userID
    const obj = { msg: 'Request Successful' }
    if(requestsArr.includes(userID) && requestsObj[userID].counter >= limit) {
        obj.msg = `Failed to process as the current count is ${requestsObj[userID].counter}`
    }
    else {
        createTask(userID)
    }
    res.send(obj)
});

module.exports = routes;