const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
const authRoutes=require('./routes/auth.js');
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth',authRoutes);
//mongoose connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Connected to mongoDb');
})
.catch((error)=>{
    console.log('Error connecting to mongoDb:', error);
});





const PORT=process.env.PORT||5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});