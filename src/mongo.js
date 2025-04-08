const mongoose = require("mongoose");

const dbURI = "mongodb+srv://keerthiram2612:keerthi%402003@cluster0.iqbzj.mongodb.net/myDatabase?retryWrites=true&w=majority";

mongoose.connect(dbURI)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("Connection failed:", error.message));

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", newSchema);

module.exports = User;
