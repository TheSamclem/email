const express = require('express');
const nodemailer = require('./controllers/emailcontroller');
const app = express();
const port = 3000; 

app.use(express.json()); 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/send-email-welcome', async(req, res) => {
  // console.log(req.body);
  try{
    const{to} =  req.body;
    // console.log(req);
    const sendmail = await nodemailer.send_email_welcome(to);
    return res.status(200).json({message:"successful"});
  }catch(err){
    console.log("Something went wrong ....\n "+err);
    return res.status(400).json({message:"Something went wrong"});
  }

 
  });

 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
