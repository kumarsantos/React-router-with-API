const express = require('express')
const app = express()
const port = 3005
const cors = require('cors')
const bodyParser = require('body-parser')
const { json } = require('body-parser')


// app.use(bodyParser.json())
app.use(cors())
app.use(express.json());


let Userdata=[
    {
        _id: 1,
        fullName: "Abc Abc",
        email: "Ssah@gmail.com",
        isActive: true,
        createdDt: "2021-08-02T05:26:59.000Z",
        
      },
    {
        _id: 2,
        fullName: "Abc Abc",
        email: "abc@gmail.com",
        isActive: false,
        createdDt: "2021-08-02T05:26:59.000Z",
        
      },
    {
        _id: 3,
        fullName: "Abc Abc",
        email: "abc@gmail.com",
        isActive: false,
        createdDt: "2021-08-02T05:26:59.000Z",
        
      }
]

let result=[]

app.get('/viewUsers', (req, res) => {
    if(result[0]==null){
       return res.status(200).send({data:[...Userdata]})
    }    
     res.status(200).send({data:[...result]})
})



app.post('/registration', (req, res) => {
    
const {fullName,email,password,conPassword}=req.body;

if(!fullName||!email||!password||!conPassword){
    return res.json({message:"Please Enter all the Required dat !",success:false})
}

if(! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
{
    return res.json({message:"Please Enter Valid Email Format !",success:false})
    
}
if(password!==conPassword){
    
    return res.json({message:"Invalid Password !",success:false})
    
}

Userdata.map((user)=>{
    if(user.email===email){
        return res.json({message:"User Already Exist !",success:false})

    }
})

let _id=Math.floor(Math.random()*1000)

let time=new Date().toString()
let datetime=time.split(' ')
let curtime=datetime[4].split(':')

let createdDt=`${datetime[1]} ${datetime[2]}, ${datetime[3]}, ${curtime[0]}:${curtime[1]} ${curtime[0]>=12 ? "PM":"AM"}}  `
const newUser={fullName, email, password,conPassword,_id,createdDt};
Userdata.push(newUser)
res.json({message:"User Successfully Added !",success:true})
})

app.put('/update/:id', (req, res) => {
    let id=req.params;     
    let updateduser = Userdata.filter(user=>{
        if(user._id==id.id){
            return user;
        }        
    })
    updateduser.map(user=>{
        if(user.isActive==true){
                user.isActive=false;
            }
            else{
                user.isActive=true;
            }
    })
    Userdata.map(user=>{
        if(user._id===id.id){
            Userdata.pop(user)
            Userdata.push(...updateduser)
        }
    })
    res.json(Userdata)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})