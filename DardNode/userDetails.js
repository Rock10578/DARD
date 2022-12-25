const mongoose=require("mongoose");

const UserDetails=new mongoose.Schema(
    {
        mobile: {type: Number, unique: true},
        password: String,
        ageRange: Number,
    },
    {
        collection: "UserDetail",
    }
)

const UserDetailsScehma1=new mongoose.Schema(
    {
        age: Number,
        mobile: {type: Number, unique: true},
        password: String,
        gender: String,
        hobby: String,
    },
    {
        collection: "Age1",
    }
);
const UserDetailsScehma2=new mongoose.Schema(
    {
        age: Number,
        mobile: {type: Number, unique: true},
        password: String,
        education: String,
        language: String,
        hobby: String,
    },
    {
        collection: "Age2",
    }
);
const UserDetailsScehma3=new mongoose.Schema(
    {
        ageRange: Number,
        fname: String,
        lname: String,
        mobile: {type: Number, unique: true},
        password: String,
    },
    {
        collection: "Age3",
    }
);
const UserDetailsScehma4=new mongoose.Schema(
    {
        ageRange: Number,
        fname: String,
        lname: String,
        mobile: {type: Number, unique: true},
        password: String,
    },
    {
        collection: "Age4",
    }
);

mongoose.model("UserDetail", UserDetails);
mongoose.model("Age1", UserDetailsScehma1);
mongoose.model("Age2", UserDetailsScehma2);
mongoose.model("Age3", UserDetailsScehma3);
mongoose.model("Age4", UserDetailsScehma4);