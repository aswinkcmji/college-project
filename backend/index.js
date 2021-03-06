import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



mongoose.connect("mongodb+srv://root:akhilakhi815007@emergency.06wcw.mongodb.net/emergency?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, () =>{
    console.log("Db connected successfully")
})

const userSchema = new mongoose.Schema({
    name: String,
    email:{
         type: String,
    // match: [
    //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //   'Please add a valid email address.',
    // ],
    required: [true, 'Please enter Email Address'],
    unique: true,
    lowercase: true,
  },
    password: String
})

const serviceSchema = new mongoose.Schema({
    sname: String,
    fname: String,
    phone: String,
    email:{
         type: String,
    // match: [
    //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //   'Please add a valid email address.',
    // ],
    required: [true, 'Please enter Email Address'],
    unique: true,
    lowercase: true,
  },
    district: String,
    
  blood: String,
  service: String,
    
})


const Service = new mongoose.model("Service",  serviceSchema)


const User = new mongoose.model("Users", userSchema)


app.post("/Signup", async (req, res)=> {
    
    const { name, email, password} = req.body
   await User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


app.post("/Registration",async (req, res)=> {
    
    const { sname, fname, phone , email, district,blood, service} = req.body
        await Service.findOne({ service: service }&&{email: email}, (err, user) => {
        if(user){
            res.send({message: "Service already added"})
        } else {
            const user = new Service({
                sname,
                fname,
                phone,
                email,
                district,                
                blood,
                service,
                
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Thank you for providing your service" })
                }
            })
        }
    })
    
}) 



app.post("/Login", async (req, res)=> {
    const { email, password} = req.body

    
    await User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.get("/ReadCount",async (req, res) => {

        const totalCount = {
            service : "",
            users : ""
        }
    
    await  Service.count().then((count1) => {
        const service = count1;
        
        totalCount.service = service
        User.count().then((count) => {
            const user = count;
            
            totalCount.users = user;
            console.log(totalCount)

            res.send(totalCount)
        
        })
        
    })  
})

//Reading users details

app.get('/readUser',async (req, res) => {
    await User.find( {}, (err, result) =>{
        if(err) {res.send( err)}
        res.send(result)
    })
    

})

app.put('updateUser',async (req, res) => {
    const  id = req.body.id
    const { name, email, password} = req.body

   await User.findById( id, (err, result) =>{
        if(err) {console.log(err)}

        result.name = name;
        result.email = email;
        result.password = password;
        result.save();
        res.send( "updated")

    })
})




//Displaying details during emergency
app.get('/emergency', (req, res) => {
    Service.find({}).then(
        items => res.json(items)
    ).catch(err => res.send( err))
})





app.listen(5000, () =>{
    console.log("on port"+5000 )
})
