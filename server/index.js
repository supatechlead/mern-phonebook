const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require("mongoose")
const Phonebook = require("./Model/PhoneBook")

mongoose.connect('mongodb://localhost/phonebook', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then( () => {
    console.log('Database connected...')
});


app.use(express.json())
app.use(cors())
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

app.post('/add-phone', async(req, res) => {
    console.log("New phone added")
    const phoneNumber = new Phonebook(req.body)
    try {
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data: {
                phoneNumber
            }
        })
    } catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

app.get('/get-phone', async (req, res) => {
    console.log("")
    const phoneNumbers = await Phonebook.find({})
    try{
        res.status(200).json({
            status: 'Success',
            data: {
                phoneNumbers
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

app.patch('/update-phone/:id', async(req, res) => {
    const updatePhone = await Phonebook.findByIdAndUpdate(req.params.id.body, {
        new: true,
        runValidators: true
    })
    try{
        res.status(200).json({
            status: 'Success',
            data: {
                updatedPhone
            }
        })
    } catch(err){
        console.log(err)
    }
})

app.delete('/delete-phone/:id', async(req, res) => {
    await Phonebook.findByIdAndDelete(req.params.id)

    try{
        res.status(204).json({
            status: 'Success',
            data: {}
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})