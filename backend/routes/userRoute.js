const express = require("express");
const router = express.Router();
const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("./auth");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isemail = await userSchema.findOne({ email });
    if (isemail) {
      return res.status(400).send({ message: "this email is alredy exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userSchema.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({userId:user.id},process.env.SECRET_TOKEN)
    res.status(201).json({ message: "User created!", user ,token});
  } catch (e) {
    res.send({ message: e.message });
  }
});
router.post('/login',async(req,res)=>{
try{ 
   const {email,password}=req.body
  const user=await userSchema.findOne({email})
  if(!user){
    return res.status(404).send('Invalid Email or Password')
  }
  const isMatch= await bcrypt.compare(password,user.password)
  if (!isMatch) {
    return res.status(400).send('Invalid Email or Password');
  }
  const token = jwt.sign({userId:user.id}, process.env.SECRET_TOKEN,{expiresIn:'7 days'})
  res.status(200).send({user,token})}
  catch(e){
    res.status(500).send({message:e.message})
  }
})
router.get('/profile',isAuth,(req,res)=>{
try {
  res.status(200).send({user:req.user})
} catch (e) {
  res.status(500).send({message:e.message})
}
})
router.get('/all',async(req,res)=>{
  try {
    const user = await userSchema.find()
    if(!user) return res.status(404).send({message:'no user found'})
    res.status(200).send(user)
  } catch (e) {
    res.status(500).send({message:e.message})
  }
})
module.exports = router;