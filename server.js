// var fs=require('fs');
// var os=require('os');

// const user=os.userInfo();

// fs.appendFile('greetings.txt','Hii '+user.username+'!',()=>{
//     console.log("Entered");
//     }
// );

// const notes=require('./notes.js')
// var _ = require('lodash');

// var age=notes.age;
// var result=notes.addNumber(age+18,10);
// console.log(age);
// console.log("result is "+result)

// var data=["person","person",1,2,1,2,'name','age','2'];

// var filter=_.uniq(data);
// console.log(filter)

const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', function (req, res) {
  res.send('Welcome to the hotel!!');
});

const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
