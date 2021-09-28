module.exports = app =>{
    const tasks = require("../controller/task.controller")
    var router = require("express").Router()

    // Saving data to server
    router.post("/saveTask", tasks.create)

    app.use("/api", router)
}