const db = require("../models")

const Task = db.tasks

// Saving data to database

exports.create = (req, res)=>{
    // console.log(req.body);
    let {taskName, taskDescription, user} = req.body;

    const task = new Task({
        taskName : taskName,
        taskDescription : taskDescription,
        user:user
    })

    // saving data to database
    task.save(task)
        .then(data=>{
            res.send(data)
        })
        .catch((errMsg)=>{
            res.send(errMsg)
    })
}