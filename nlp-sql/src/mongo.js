const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://keerthanarajaram2003:keerthuraja@cluster0.chiqw.mongodb.net/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("Connection failed:", error.message);
    });

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
