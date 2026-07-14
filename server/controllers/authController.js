const User = require('../models/User');
const OTP = require('../models/OTP');

exports.registerUser=async(req,res)=>{
    const{name,email,password}=req.body;
    let userExists=await User.findOne({email});
    if(userExists){
        return res.status(400).json({error:'User already exists'});
    }
const salt=await bcrypt.genSalt(10);
const hashedPassworconst User = require('../models/User.js');
const OTP = require('../models/OTP');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendOTPEmail } = require('../utils/email');

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

exports.register = async (req, res) => {
};
d=await bcrypt.hash(password,salt);


    try{
        const user=new User.create({name,email,password:hashedPassword,roler:'user',isVerified:false});
    
        res.status(201).json({message:'User registered successfully'});

        const otp=Math.floor(10000+Math.random()*900000).toString();
        console.log(`OTP for ${email}:${otp}`);
await sendOTPEmail(email,otp,'account_verification');


    }catch(error){
        res.status(400).json({error:error.message});
    }
};