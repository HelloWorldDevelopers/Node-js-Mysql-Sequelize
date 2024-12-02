const express=require('express')
const {User,Address}=require('./User')
const db=require('./db');
 const app=express();

app.get('/api/users', async (req, res) => {

           const address = new Address({
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    postalCode: '62701',
    country: 'USA'
    });

const savedAddress=await address.save();
   const user = new User({
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
      phone: '123-456-7890',
     });

    const savedUser=await user.save();
    res.send(savedUser);
})


app.get('/api/user', async (req, res) => {
     
                        const users = await User.find({})
        .select('name email ')  // Select only name and email, exclude phone and age
        .populate({
            path: 'address',  // Populate the address field (reference to Address collection)
            select: 'street city state',
            
         })


    res.send(users);
})


app.listen(3000,() => {
    console.log('Server running on port 3000');
})
