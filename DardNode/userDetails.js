const mongoose=require("mongoose");

const UserDetailsScehma=new mongoose.Schema(
    {
        fname: String,
        lname: String,
        mobile: {type: Number, unique: true},
        password: String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailsScehma);