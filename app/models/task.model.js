module.exports = mongoose =>{
    var schema = mongoose.Schema({
        taskName: String,
        taskDescription : String,
        user: {
            type:mongoose.Schema.Types.ObjectId, ref:"User"
        }
    })

    const Task = mongoose.model("task", schema)
    return Task
}