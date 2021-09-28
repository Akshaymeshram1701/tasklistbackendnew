const db = require("../models")

const User = db.users

// Saving data to database

exports.create = (req, res)=>{
    // console.log(req.body);
    let {name, email, password} = req.body;

    const user = new User({
        name : name,
        email : email,
        password : password,
    })

    // saving data to database
    user.save(user)
        .then(data=>{
            res.send(data)
        })
        .catch((errMsg)=>{
            res.send(errMsg)
    })
}

exports.findByUserNameAndPassword = (req, res)=>{
    const {userName, password} = req.body
    User.findOne({userName:userName, password:password})
        .then(data=>{
            res.send(data)
        })
}

// Fetch all data from database and return to client
exports.findAll = (req, res)=>{
    User.find()
        .then(data=>{
            res.send(data)
        })
}

// find by id
exports.getById = (req,res)=>{
    const id = req.params.id

    User.findById(id)
        .then(data =>{
            res.send(data)
        })
}

// Update task based on id
exports.updateTask=(req, res)=>{
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data=>{
            res.send({message: "Task updated successfully !!"})
        })
}

// Delete Task based on id
exports.deleteTask=(req, res)=>{
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then(data=>{
            res.send({message: "Task delete successfully !!"})
        })
}