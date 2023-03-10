// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./User');
// ADD THIS PART
// CREATES A NEW USER
router.post('/', async function (req, res) {
    try {
        console.log("REQUEST BODY");
        console.log(req.body);
        const result = await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        });
        res.send(result);
        console.log("SUCCESS");
        console.log(result);
    } catch (err) {
        console.log("FAILED");
        console.log(err);
    }

    // User.create({
    //         name : req.body.name,
    //         email : req.body.email,
    //         password : req.body.password
    //     }, 
    //     function (err, user) {
    //         if (err) return res.status(500).send("There was a problem adding the information to the database.");
    //         res.status(200).send(user);
    //     });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', async function (req, res) {
    try {
        const result = await User.find();
        res.send(result);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
    

    // User.find({}, function (err, users) {
    //     if (err) return res.status(500).send("There was a problem finding the users.");
    //     res.status(200).send(users);
    // });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', async function (req, res) {
    try {
        const result = await User.findById(req.params.id);
        res.send(result);
        console.log(result);
    } catch (err) {
        console.log(err);
        console.log("There was a problem finding the user");
    }
    
    
    // User.findById(req.params.id, function (err, user) {
    //     if (err) return res.status(500).send("There was a problem finding the user.");
    //     if (!user) return res.status(404).send("No user found.");
    //     res.status(200).send(user);
    // });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', async function (req, res) {
    
    try {
        const result = await User.findByIdAndRemove(req.params.id);
        res.send(result);
        console.log(result);
    } catch (err) {
        console.log(err);
        console.log("There was a problem updating the user");
    }
    
    // User.findByIdAndRemove(req.params.id, function (err, user) {
    //     if (err) return res.status(500).send("There was a problem deleting the user.");
    //     res.status(200).send("User "+ user.name +" was deleted.");
    // });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', async function (req, res) {

    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(result);
        console.log(result);
    } catch (err) {
        console.log(err);
        console.log("There was a problem updating the user");
    }
    
    // User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
    //     if (err) return res.status(500).send("There was a problem updating the user.");
    //     res.status(200).send(user);
    // });
});

module.exports = router;