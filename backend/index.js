const express = require('express')
const nodemailer = require('nodemailer')
const cors =require('cors')
const app = express()

app.use(express.json())
app.use(cors({
    origin:"*"
}))

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

    const html = `<div><h2>From ${data.name}</h2>
     <h4>Client email id : ${data.email}</h4>
     <p> client comments that  ${data.message}</p>
    </div>`
    
    const mailOptions = {
        from: 'vinothpukal6580@gmail.com',
        to: 'kumar.nov07@gmail.com',
        subject: data.subject,
        html:html
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