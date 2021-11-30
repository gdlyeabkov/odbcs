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
    projects: [mongoose.Schema.Types.Map],
    clusters: [mongoose.Schema.Types.Map],
    requireMultiFactorAuthentication: {
        type: Boolean,
        default: false
    },
    requireIPAccessListForPublicAPI: {
        type: Boolean,
        default: false
    },
    restrictProductionSupportEmployeeAccessToBackendInfrastructure: {
        type: Boolean,
        default: false
    },
    organizationId: String
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
    databases: [mongoose.Schema.Types.Map],
    project: String,
    enableGlobalWrites: Boolean,
    workloadIsolation: Boolean
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

const ProjectSchema = new mongoose.Schema({
    name: String,
    cacher: String,
    multipleRegionalizedPrivateEndpoints: {
        type: Boolean,
        default: false
    },
    collectDatabaseSpecificStatistics: {
        type: Boolean,
        default: true
    },
    preferredClusterMaintenanceStartTime: {
        type: Boolean,
        default: false
    },
    securityQuickstart: {
        type: Boolean,
        default: false
    },
    realTimePerformancePanel: {
        type: Boolean,
        default: true
    },
    performanceAdvisorAndProfiler: {
        type: Boolean,
        default: true
    },
    dataExplorer: {
        type: Boolean,
        default: true
    },
    schemaAdvisor: {
        type: Boolean,
        default: true
    },
    clusters: [mongoose.Schema.Types.Map],
    members: [mongoose.Schema.Types.Map]
}, { collection : 'myprojects' })

const ProjectModel = mongoose.model('ProjectModel', ProjectSchema)

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
        if (cacherExists) {
            return res.json({ status: 'Error' })
        } else {
            
            let alphabet = "abcdefghjiklmnoprstuvwxyz"
            let organizationId = ''
            for(let i = 0; i < Math.floor(Math.random() * 10); i++){
                let randomIndex = Math.floor(Math.random() * alphabet.length)
                let randomLetter = alphabet[randomIndex]
                organizationId += randomLetter
            }
            let encodedOrganizationId = bcrypt.hashSync(organizationId, saltRounds)
            

            let encodedPassword = "#"
            const salt = bcrypt.genSalt(saltRounds)
            encodedPassword = bcrypt.hashSync(req.query.cacherpassword, saltRounds)
            let companyName = req.query.cachercompanyname
            if (companyName.length <= 0) {
                companyName = `Неизвестно`
            }
            const cacher = new CacherModel({ email: req.query.cacheremail, firstName: req.query.cacherfirstname, lastName: req.query.cacherlastname, password: encodedPassword, phoneNumber: req.query.cacherphonenumber, companyName: companyName, jobFunction: req.query.cacherjobfunction, country: req.query.cachercountry, project: req.query.projectname, organizationId: encodedOrganizationId })
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
                            return res.json({ "status": "Error" })
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
                                                    return res.json({ "status": "Error" })
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
                Object.values(JSON.parse(req.query.document)).map((field, fieldIdx) => {
                
                    DocumentModel.updateOne({ _id: document._id },
                        { $push: 
                            {
                                fields: [
                                    {
                                        key: [Object.keys(JSON.parse(req.query.document)), Object.values(JSON.parse(req.query.document))][0][fieldIdx],
                                        value: [Object.keys(JSON.parse(req.query.document)), Object.values(JSON.parse(req.query.document))][1][fieldIdx]
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
                                    return res.json({ "status": "Error" })
                                } else {
                                    // return res.json({ "status": "OK" })    
                                }
                            })
                        }
                    })

                })
                return res.json({ "status": "OK" })

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
            // if (cluster.name.includes(req.query.clustername)) {
            //     clusterExists = true
            // }
        })
        if (clusterExists) {
            return res.json({ status: 'Error' })
        } else {
            const cluster = new ClusterModel({ name: req.query.clustername, free: req.query.free, shared: req.query.shared, version: req.query.version, region: req.query.region, clusterTier: req.query.clustertier, type: req.query.type, backups: req.query.backups, linkedRealmApp: req.query.linkedrealmapp, atlasSearch: req.query.atlassearch, project: req.query.projectname, enableGlobalWrites: req.query.enableglobalwrites, workloadIsolation: req.query.workisolation })
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
                        if (err) {
                            return res.json({ "status": "error" })
                        } else {
                            ProjectModel.updateOne({ name: req.query.projectname },
                                { $push: 
                                    {
                                        clusters: [
                                            {
                                                id: cluster._id
                                            }
                                        ]
                                        
                                    }
                            }, (err, project) => {
                                if (err) {
                                    return res.json({ "status": "error" })
                                } else {
                                    return res.json({ "status": "OK", 'cluster': cluster })
                                }
                            })
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
  
    // let query =  CacherModel.findOne({ 'email': req.query.cacheremail }, function(err, cacher) {
    //     if (err || cacher === undefined || cacher === null) {
    //         return res.json({ "status": 'Error'})
    //     } else {
    //         let query = ClusterModel.find({ _id: { $in: cacher.clusters.flatMap(cluster => new Map(cluster).get('id')) } })                    
    //         query.exec((error, clusters) => {
    //             if (error) {
    //                 return res.json({ "status": 'Error'})
    //             }
    //             return res.json({ clusters: clusters, status: 'OK' })
    //         })
    //     }
    // })

    let query =  ProjectModel.findOne({ '_id': req.query.projectid }, function(err, project) {
        if (err || project === undefined || project === null) {
            return res.json({ "status": 'Error'})
        } else {
            let query = ClusterModel.find({ _id: { $in: project.clusters.flatMap(cluster => new Map(cluster).get('id')) } })                    
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

app.get('/api/projects/delete', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
      
    let query = ProjectModel.findOne({ _id: req.query.projectid })
    query.exec(async (err, project) => {
        if (err) {
            return res.json({ 'status': 'false' })
        } else {
            
            await project.clusters.map(async cluster => {
                await ClusterModel.deleteMany({ _id: new Map(cluster).get('id')  })
            })
            
            await ProjectModel.deleteMany({ _id: req.query.projectid  })
            return res.json({ status: 'OK' })
        }
    })

})

app.get('/api/projects/create', (req, res) => {
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = ProjectModel.find({  })
    query.exec((err, allProjects) => {
        if (err) {
            return res.json({ "status": "Error" })
        }
        
        let projectExists = false

        allProjects.forEach(project => {
            if(project.name.includes(req.query.projectname)){
                projectExists = true
            }
        })
        if (projectExists) {
            return res.json({ status: 'Error' })
        } else {
            let members = JSON.parse(req.query.projectmembers)

            let project = new ProjectModel({ name: req.query.projectname, cacher: req.query.cacheremail, members: members })
            project.save(function (err, project) {
                if (err) {
                    return res.json({ "status": "Error" })
                } else {
                    CacherModel.updateOne({ email: req.query.cacheremail },
                        { $push: 
                            {
                                projects: [
                                    {
                                        id: project._id
                                    }
                                ]
                                
                            }
                    }, (err, cacher) => {
                        if(err){
                            return res.json({ "status": "Error" })
                        } else {
                            
                            return res.json({ "status": "OK" })

                        }
                    })

                }
            })
        }
    })

})

app.get('/api/projects/all', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = ProjectModel.find({  })
    query.exec((err, projects) => {
        if (err) {
            return res.json({ 'status': 'false' })
        }
        return res.json({ 'status': 'OK', 'projects': projects })
    })

})

app.get('/api/projects/get', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = ProjectModel.findOne({ name: req.query.projectname })
    query.exec((err, project) => {
        if (err) {
            return res.json({ 'status': 'false' })
        }
        return res.json({ 'status': 'OK', 'project': project })
    })

})

app.get('/api/cachers/companyname/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    CacherModel.updateOne({ email: req.query.cacheremail },
    {
        companyName: req.query.companyname
    }, (err, cacher) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/cachers/restrictproductionsupportemployeeaccesstobackendinfrastructure/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    CacherModel.updateOne({ email: req.query.cacheremail },
    {
        restrictProductionSupportEmployeeAccessToBackendInfrastructure: req.query.value
    }, (err, cacher) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/cachers/requiremultifactorauthentication/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    CacherModel.updateOne({ email: req.query.cacheremail },
    {
        requireMultiFactorAuthentication: req.query.value
    }, (err, cacher) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/cachers/requireipaccesslistforpublicapi/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    console.log(`req.query.value: ${req.query.value}`)
    CacherModel.updateOne({ email: req.query.cacheremail },
    {
        requireIPAccessListForPublicAPI: req.query.value
    }, (err, cacher) => {
        if (err) {
            // return res.json({ status: 'Error' })
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/projects/rename', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ProjectModel.updateOne({ _id: req.query.projectid },
    {
        name: req.query.projectname
    }, (err, cacher) => {
        if (err) {
            return res.json({ status: 'Error' })
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/project/multipleregionalizedprivateendpoints/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ProjectModel.updateOne({ _id: req.query.projectid },
    {
        multipleRegionalizedPrivateEndpoints: req.query.value
    }, (err, project) => {
        if (err) {
            return res.json({ status: 'Error' })
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/project/collectdatabasespecificstatistics/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ProjectModel.updateOne({ _id: req.query.projectid },
    {
        collectDatabaseSpecificStatistics: req.query.value
    }, (err, project) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/project/preferredclustermaintenancestarttime/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ProjectModel.updateOne({ _id: req.query.projectid },
    {
        preferredClusterMaintenanceStartTime: req.query.value
    }, (err, project) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/project/securityquickstart/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ProjectModel.updateOne({ _id: req.query.projectid },
    {
        securityQuickstart: req.query.value
    }, (err, project) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/project/realtimeperformancepanel/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ProjectModel.updateOne({ _id: req.query.projectid },
    {
        realTimePerformancePanel: req.query.value
    }, (err, project) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/project/dataexplorer/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ProjectModel.updateOne({ _id: req.query.projectid },
    {
        dataExplorer: req.query.value
    }, (err, project) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/project/performanceadvisorandprofiler/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ProjectModel.updateOne({ _id: req.query.projectid },
    {
        performanceAdvisorAndProfiler: req.query.value
    }, (err, project) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
    })
})

app.get('/api/project/schemaadvisor/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ProjectModel.updateOne({ _id: req.query.projectid },
    {
        schemaAdvisor: req.query.value
    }, (err, project) => {
        if (err) {
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })
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