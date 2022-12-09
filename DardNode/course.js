const mongoose=require("mongoose");

const CourseDetailsScehma1=new mongoose.Schema(
    {
        name: String,
        link: {
            type: String,
            required: true
        },
        Provider: String,
        Rating: Number,
        Price: Number
    },
    {
        collection: "CourseKid",
    }
);
const CourseDetailsScehma2=new mongoose.Schema(
    {
        name: String,
        link: {
            type: String,
            required: true
        },
        Provider: String,
        Rating: Number,
        Price: Number
    },
    {
        collection: "CourseYoung",
    }
);
const CourseDetailsScehma3=new mongoose.Schema(
    {
        name: String,
        link: {
            type: String,
            required: true
        },
        Provider: String,
        Rating: Number,
        Price: Number
    },
    {
        collection: "CourseAdult",
    }
);
const CourseDetailsScehma4=new mongoose.Schema(
    {
        name: String,
        link: {
            type: String,
            required: true
        },
        Provider: String,
        Rating: Number,
        Price: Number
    },
    {
        collection: "CourseSenior",
    }
);

mongoose.model("CourseKid", CourseDetailsScehma1);
mongoose.model("CourseYoung", CourseDetailsScehma2);
mongoose.model("CourseAdult", CourseDetailsScehma3);
mongoose.model("CourseSenior", CourseDetailsScehma4);