const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

app.use(express.json())


app.post('/sendMail',(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'vinothpukal6580@gmail.com',
            pass: 'bxzuzvoxbyoxsazx'
        }
    })
    const data = req.body

    console.log(data)
    
    const mailOptions = {
        from: 'vinothpukal6580@gmail.com',
        to: 'kumar.nov07@gmail.com',
        subject: "subject",
        text:'hi'
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.json({
                success: 0,
                message: "Mail not Send"
            })
        }
        else {
            return res.json({
                success: 1,
                message: "Mail sent succesfully !"
            })
        }
    })

})

app.get('/',(req,res)=>{
    res.send({message:"home lithi"})
})

app.listen(3001,()=>{
    console.log(`port is running on the server 3001`)
})