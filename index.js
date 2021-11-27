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
}, { collection : 'mycachers' })

const CacherModel = mongoose.model('CacherModel', CacherSchema);

const ClusterSchema = new mongoose.Schema({
    name: String,
    free: Boolean,
    shared: Boolean,
    version: String,
    region: String,
    clusterTier: String,
    type: String,
    backups: String,
    linkedRealmApp: String,
    atlasSearch: String,
    paused: {
        type: Boolean,
        default: false
    },
    databases: [mongoose.Schema.Types.Map]
}, { collection : 'myclusters' })

const ClusterModel = mongoose.model('ClusterModel', ClusterSchema)

const DatabaseSchema = new mongoose.Schema({
    name: String,
    cluster: String,
    collections: [mongoose.Schema.Types.Map]
}, { collection : 'mydatabases' })

const DatabaseModel = mongoose.model('DatabaseModel', DatabaseSchema)

const CollectionSchema = new mongoose.Schema({
    name: String,
    database: String,
    documents: [mongoose.Schema.Types.Map]
}, { collection : 'mycollections' })

const CollectionModel = mongoose.model('CollectionModel', CollectionSchema)

const DocumentSchema = new mongoose.Schema({
    fields: [mongoose.Schema.Types.Map],
    collectionId: String
}, { collection : 'mydocuments' })

const DocumentModel = mongoose.model('DocumentModel', DocumentSchema)

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

app.get('/api/databases/create', (req, res) => {
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = DatabaseModel.find({  })
    query.exec((err, allDatabases) => {
        if (err) {
            return res.json({ "status": "Error" })
        }
        
        let databaseExists = false

        allDatabases.forEach(database => {
            if(database.name.includes(req.query.databasename)){
                databaseExists = true
            }
        })
        if (databaseExists) {
            return res.json({ status: 'Error' })

        } else {
            const database = new DatabaseModel({ name: req.query.databasename, cluster: req.query.clusterid })
            database.save(function (err, currentDatabase) {
                if (err) {
                    return res.json({ "status": "Error" })
                } else {
                    ClusterModel.updateOne({ _id: req.query.clusterid },
                        { $push: 
                            {
                                databases: [
                                    {
                                        id: database._id
                                    }
                                ]
                                
                            }
                    }, (err, cacher) => {
                        if(err){
                            return res.json({ "status": "error" })
                        } else {

                            // здесь
                            let query = CollectionModel.find({  })
                            query.exec((err, allCollections) => {
                                if (err) {
                                    return res.json({ "status": "Error" })
                                }
                                
                                let collectionExists = false

                                allCollections.forEach(collection => {
                                    if(collection.name.includes(req.query.collectionname)){
                                        collectionExists = true
                                    }
                                })
                                if (collectionExists) {
                                    return res.json({ status: 'Error' })

                                } else {
                                    const collection = new CollectionModel({ name: req.query.collectionname, database: currentDatabase._id })
                                    collection.save(function (err, collection) {
                                        if (err) {
                                            return res.json({ "status": "Error" })
                                        } else {
                                            DatabaseModel.updateOne({ _id: currentDatabase._id },
                                                { $push: 
                                                    {
                                                        collections: [
                                                            {
                                                                id: collection._id
                                                            }
                                                        ]
                                                        
                                                    }
                                            }, (err, database) => {
                                                if (err) {
                                                    return res.json({ "status": "error" })
                                                } else {
                                                    return res.json({ "status": "OK" })    
                                                }
                                            })

                                        }
                                    })
                                }
                            })

                            // return res.json({ "status": "OK" })
                            
                        }
                    })

                }
            })
        }
    })

})

app.get('/api/collections/create', (req, res) => {
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = CollectionModel.find({  })
    query.exec((err, allCollections) => {
        if (err) {
            return res.json({ "status": "Error" })
        }
        
        let collectionExists = false

        allCollections.forEach(collection => {
            if(collection.name.includes(req.query.collectionname)){
                collectionExists = true
            }
        })
        if (collectionExists) {
            return res.json({ status: 'Error' })

        } else {
            const collection = new CollectionModel({ name: req.query.collectionname, database: req.query.databaseid })
            collection.save(function (err, collection) {
                if (err) {
                    return res.json({ "status": "Error" })
                } else {
                    DatabaseModel.updateOne({ _id: req.query.databaseid },
                        { $push: 
                            {
                                collections: [
                                    {
                                        id: collection._id
                                    }
                                ]
                                
                            }
                    }, (err, database) => {
                        if (err) {
                            return res.json({ "status": "error" })
                        } else {
                            return res.json({ "status": "OK" })    
                        }
                    })

                }
            })
        }
    })

})

app.get('/api/documents/create', (req, res) => {
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = DocumentModel.find({  })
    query.exec((err, allDocuments) => {
        if (err) {
            return res.json({ "status": "Error" })
        }
        const document = new DocumentModel({ collectionId: req.query.collectionid })
        document.save(function (err, document) {
            if (err) {
                return res.json({ "status": "Error" })
            } else {
                DocumentModel.updateOne({ _id: document._id },
                    { $push: 
                        {
                            fields: [
                                {
                                    type: JSON.parse(req.query.document),
                                    value: JSON.parse(req.query.document)
                                }
                            ]
                            
                        }
                }, (err, otherDocument) => {
                    if (err) {
                        return res.json({ "status": "error" })
                    } else {
                        CollectionModel.updateOne({ _id: req.query.collectionid },
                            { $push: 
                                {
                                    documents: [
                                        {
                                            id: document._id
                                        }
                                    ]
                                    
                                }
                        }, (err, collection) => {
                            if (err) {
                                return res.json({ "status": "error" })
                            } else {
                                return res.json({ "status": "OK" })    
                            }
                        })
                    }
                })

            }
        })
        
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

app.get('/api/clusters/create', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    
    let query = ClusterModel.find({  })
    query.exec((err, allClusters) => {
        if (err) {
            return res.json({ "status": "Error" })
        }
        
        let clusterExists = false

        allClusters.forEach(cluster => {
            if(cluster.name.includes(req.query.clustername)){
                clusterExists = true
            }
        })
        if(clusterExists){
            return res.json({ status: 'Error' })

        } else {
            const cluster = new ClusterModel({ name: req.query.clustername, free: req.query.free, shared: req.query.shared, version: req.query.version, region: req.query.region, clusterTier: req.query.clustertier, type: req.query.type, backups: req.query.backups, linkedRealmApp: req.query.linkedrealmapp, atlasSearch: req.query.atlassearch  })
            cluster.save(function (err, cluster) {
                if (err) {
                    return res.json({ "status": "Error" })
                } else {
                    CacherModel.updateOne({ email: req.query.cacheremail },
                        { $push: 
                            {
                                clusters: [
                                    {
                                        id: cluster._id
                                    }
                                ]
                                
                            }
                    }, (err, cacher) => {
                        if(err){
                            return res.json({ "status": "error" })
                        } else {
                            return res.json({ "status": "OK" })
                        }
                    })
                }
            })
        }
    })

})

app.get('/api/cachers/get', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = CacherModel.findOne({ email: req.query.cacheremail })
    query.exec((err, cacher) => {
        if (err) {
            return res.json({ 'status': 'false' })
        }
        return res.json({ 'status': 'OK', 'cacher': cacher })
    })

})

app.get('/api/clusters/all', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
    let query =  CacherModel.findOne({ 'email': req.query.cacheremail }, function(err, cacher) {
        if (err || cacher === undefined || cacher === null) {
            return res.json({ "status": 'Error'})
        } else {
            let query = ClusterModel.find({ _id: { $in: cacher.clusters.flatMap(cluster => new Map(cluster).get('id')) } })                    
            query.exec((error, clusters) => {
                if (error) {
                    return res.json({ "status": 'Error'})
                }
                return res.json({ clusters: clusters, status: 'OK' })
            })
        }
    })

})

app.get('/api/databases/all', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
    let query =  ClusterModel.findOne({ '_id': req.query.clusterid }, function(err, cluster) {
        if (err || cluster === undefined || cluster === null) {
            return res.json({ "status": 'Error'})
        } else {
            let query = DatabaseModel.find({ _id: { $in: cluster.databases.flatMap(database => new Map(database).get('id')) } })                    
            query.exec((error, databases) => {
                if (error) {
                    return res.json({ "status": 'Error'})
                }
                return res.json({ databases: databases, status: 'OK' })
            })
        }
    })

})

app.get('/api/collections/all', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
    let query =  DatabaseModel.findOne({ '_id': req.query.databaseid }, function(err, database) {
        if (err || database === undefined || database === null) {
            return res.json({ "status": 'Error'})
        } else {
            // let query = CollectionModel.find({ _id: { $in: database.collections.flatMap(collection => new Map(collection).get('id')) } })
            let query = CollectionModel.find({  })
            query.exec((error, collections) => {
                if (error) {
                    return res.json({ "status": 'Error'})
                }
                return res.json({ collections: collections, status: 'OK' })
            })
        }
    })

})

app.get('/api/documents/all', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  
    let query =  CollectionModel.findOne({ '_id': req.query.collectionid }, function(err, collection) {
        if (err || collection === undefined || collection === null) {
            return res.json({ "status": 'Error'})
        } else {
            // let query = CollectionModel.find({ _id: { $in: database.collections.flatMap(collection => new Map(collection).get('id')) } })
            let query = DocumentModel.find({  })
            query.exec((error, documents) => {
                if (error) {
                    return res.json({ "status": 'Error'})
                }
                return res.json({ documents: documents, status: 'OK' })
            })
        }
    })

})

app.get('/api/clusters/get', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query =  ClusterModel.findOne({'_id': req.query.clusterid}, function(err, cluster) {
        if (err || cluster == undefined || cluster == null){
            return res.json({ "status": "Error" })
        } else {
          return res.json({ status: 'OK', cluster: cluster })
        }
    })
    
})

app.get('/api/databases/delete', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
      
    mongoose.connection.collection("myclusters").updateOne(
        { _id: req.query.clusterid },
        { $pull: { 'databases': { _id: req.query.databaseid } } }
    )

    await DatabaseModel.deleteMany({ _id: req.query.databaseid  })
    return res.json({ status: 'OK' })
})

app.get('/api/collections/delete', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
      
    mongoose.connection.collection("mydatabases").updateOne(
        { _id: req.query.databaseid },
        { $pull: { 'collections': { _id: req.query.collectionid } } }
    )

    await CollectionModel.deleteMany({ _id: req.query.collectionid  })
    return res.json({ status: 'OK' })
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