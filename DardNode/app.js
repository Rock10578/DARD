const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET= "hsahfjhaslfnanbjsq2384083138w4098xhasfh4wuhsnsf"

const mongoUrl="mongodb+srv://Shreyansh:Shreyansh1234@cluster0.lfpqlaw.mongodb.net/Gr_Age?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connected to Database");
}).catch((e)=>console.log(e));

require("./userDetails");
const User1=mongoose.model("Age1");
const User2=mongoose.model("Age2");
const User3=mongoose.model("Age3");
const User4=mongoose.model("Age4");


app.post("/register", async (req,res) => {
    const {ageRange, age, mobile, password  } = req.body;
    
    const encryptedPassword = await bcrypt.hash(password, 10);
    
    try{
        if (ageRange==1){
            const {gender, hobby } = req.body;
            const oldUser = await User1.findOne({mobile});

            if (oldUser) {
                return res.send({ error: "User Exists"});
            }
            await User1.create ({
                age,
                mobile,
                password: encryptedPassword,
                gender,
                hobby,
            });
        }
        else if (ageRange==2){
            const oldUser = await User2.findOne({mobile});

            if (oldUser) {
                return res.send({ error: "User Exists"});
            }
            await User2.create ({
                ageRange,
                mobile,
                password: encryptedPassword,
            });
        }
        else if(ageRange==3){
            const oldUser = await User3.findOne({mobile});

            if (oldUser) {
                return res.send({ error: "User Exists"});
            }
            await User3.create ({
                ageRange,
                mobile,
                password: encryptedPassword,
            });
        }
        else if (ageRange==4){
            const oldUser = await User4.findOne({mobile});

            if (oldUser) {
                return res.send({ error: "User Exists"});
            }
            await User4.create ({
                ageRange,
                mobile,
                password: encryptedPassword,
            });
        }
        res.send({ status: "ok" });
    } catch (error) {
        res.send({ status: "error" });
    }
});

app.post("/login-user", async (req, res) => {
    const {mobile, password} = req.body;

    const user = await User.findOne({ mobile });
    if (!user) {
        return res.json({ error: "User Not Found "});
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({mobile: user.mobile}, JWT_SECRET);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error "});
        }
    }
    res.json({ status: "error", error: "Invalid Password" });
});

app.post("/userData", async(req,res)=>{
    const {token} = req.body;
    try{
        const user=jwt.verify(token, JWT_SECRET);
        const usermobile = user.mobile;
        User.findOne({ mobile: usermobile })
        .then((data) => {
            res.send({ status: "ok", data: data });
        }).catch((error) => {
            res.send({ status: "error", data: error });
        });
    } catch (error) {}
});

// app.post("/(courseAvailable)", async(req,res)=>{
//     const {token} = req.body;
//     try{
//         const user=jwt.verify(token, JWT_SECRET);
//         const usermobile = user.mobile;
//         User.findOne({ mobile: usermobile })
//         .then((data) => {
//             res.send({ status: "ok", data: data });
//         }).catch((error) => {
//             res.send({ status: "error", data: error });
//         });
//     } catch (error) {}
// });



app.listen(4000, () => {
    console.log("Server Started at http://localhost:4000");
})