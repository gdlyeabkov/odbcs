const fs = require('fs')
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
const bcrypt = require('bcrypt')
const saltRounds = 10

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/odbcs?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const CacherSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    phoneNumber: String,
    companyName: String,
    jobFunction: {
        type: String,
        default: 'Разработчик'
    },
    country: {
        type: String,
        default: 'Россия'
    },
    created: {
        type: Date,
        default: Date.now
    },
    clusters: [mongoose.Schema.Types.Map]
}, { collection : 'mycachers' });

const CacherModel = mongoose.model('CacherModel', CacherSchema);

app.get('/api/cachers/create', (req, res) => {
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = CacherModel.find({  })
    query.exec((err, allCachers) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        
        let cacherExists = false

        allCachers.forEach(cacher => {
            if(cacher.email.includes(req.query.cacheremail)){
                cacherExists = true
            }
        })
        if(cacherExists){
            return res.json({ status: 'Error' })

        } else {
            let encodedPassword = "#"
            const salt = bcrypt.genSalt(saltRounds)
            encodedPassword = bcrypt.hashSync(req.query.cacherpassword, saltRounds)
            const cacher = new CacherModel({ email: req.query.cacheremail, firstName: req.query.cacherfirstname, lastName: req.query.cacherlastname, password: encodedPassword, phoneNumber: req.query.cacherphonenumber, companyName: req.query.cachercompanyname, jobFunction: req.query.cacherjobfunction, country: req.query.cachercountry });
            cacher.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    return res.json({ "status": "OK" })
                    
                }
            })
        }
    })

})

app.get('/api/cachers/check', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let query =  CacherModel.findOne({'email': req.query.cacheremail}, function(err, cacher){
        if (err || cacher == undefined || cacher == null){
            return res.json({ "status": "Error" })
        } else {
            
            let passwordCheck = bcrypt.compareSync(req.query.cacherpassword, cacher.password) && req.query.cacherpassword !== ''

            if(req.query.cacheremail === cacher.email && passwordCheck){
                return res.json({ "cacher": cacher, "status": "OK" })
            } else {
                return res.json({ "status": "Error" })
            }
        }
    })

})


app.get('**', (req, res) => { 

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)

})

// const port = process.env.PORT || 8080
const port = 4000

app.listen(port)