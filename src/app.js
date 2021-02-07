const express = require('express')
const { connect } = require('mongodb')

require('./db/mongoose')
let Person = require('./models/person')

const app = express()
app.use(express.json())

//create record person using the person model and save it to the database
/*let person = new Person ({
    name : 'fatima',
    age :19,
    favoriteFood : ["Banana","cheese"]
})

person
    .save()
    .then((doc)=>{
         console.log("person is :")
         console.log(doc)
    })
    .catch((err) => console.error(err))*/


// Create Many Records with model.create()
// Array of People
let arrayOfPeople = [
    {
        name: "Ali",
        age: 15,
        favoriteFoods: ["Oranges", "Chicken"]
    },
    {
        name: "Ania",
        age: 6,
        favoriteFoods: ["fish","Soupe"],
    }
];
// Add the array to the database using Person.create 
/*Person.create(arrayOfPeople, (err, data) => {
    if (err) {
        Person(err);
    }
    Person(data);
})*/


//use Person.find() to Search on Database , all person
// Use Person.find() to Search on Database, all person
/*Person
    .find()
    .then((doc) => {
        console.log("Finding persons: ")
        console.log(doc);
    })
    .catch((err) => console.error(err));*/


// Use model.findOne() to Return a Single Matching Document from  Database using 
//the food argument
/*Person
    .findOne({ favoriteFoods: ["fish","Soupe"] })
    .then((doc) => {
        console.log("In findOne: ")
        console.log(doc)
    })
    .catch((err) => console.error(err))*/

// Use model.findById() to Search Your Database By _id
/*Person
    .findById({ _id: '601d17be3f42dd17d8fafb99' })
    .then((doc) => {
        console.log("In findById: ")
        console.log(doc)
    })
    .catch((err) => console.error(err))*/

// Perform Classic Updates by Running Find, Edit, then Save
/*Person
    .findById({ _id:'601d17be3f42dd17d8fafb99' })
    .then((doc) => {
        doc.favoriteFoods.push("hamburger")
        doc.save();
        console.log(doc);
    })
    .catch((err) => console.error(err));*/
                       
//Delete One Document Using model.findById And Remove
/*Person.findByIdAndRemove({ _id :'601d0ea616a44914f42bf18c'})
    .then((doc) => {
        console.log("the person is remove: ")
        
    })
    .catch((err) => console.error(err))*/

// MongoDB and Mongoose - 
//Delete Many Documents with model.remove() with name Ania
/*Person
   .remove({ name: 'fatima' })
     .then((doc) => {
        console.log(doc);
    })
   .catch((err) => console.error(err));*/

//MongoDB and Mongoose - Delete Many Documents with model.remove()
//Find people who like burrito. Sort them by name, limit the results to two documents,
// and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). 
//Pass the done(err, data) callback to exec().
Person
    .find({ favoriteFoods:{"$in": ["legume"]}  }).sort({name : -1}).limit(2).select({name : 1, age: 1, favoriteFoods: 1})
    .exec((err, doc)=>{
        if (err) {
            console.log("something wrong when removing data!")
        }
        console.log("In remove")
        console.log(doc)
    })
    