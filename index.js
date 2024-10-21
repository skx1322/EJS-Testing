import express from "express"
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const port = 5000;

app.use(express.static(`public`))
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render(`index.ejs`)
})

app.get("/send-mail", (req,)=>{
    const {
        Username,
        Email,
        Message
    } = req.body;

    const transporter = nodemailer.createTransport({
        service: `gmail`,
        auth:{
            user: ``, // I must not upload this to Git 💫
            pass: ``
        }
    }); // will update soon

    const mailOptions ={
        from: Email,
        to: `kaixing636@gmail.com`,
        subject: `Message from ${Username}`,
        text: Message
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if (error){
            return res.status(500).send(error.toString());
        }
        res.send(`Email sent: ` + info.response)
    });
})

app.listen(port, ()=>{
    console.log(`Port Opened ${port}`)
})