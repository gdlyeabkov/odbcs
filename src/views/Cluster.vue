<template>
    <div>
        <Header :activeTab="activeHeaderTab" />
        <div class="main">
            <div class="aside">
                <div class="asideItemHeader">
                    <span class="material-icons asideItemHeaderElement">
                        apartment
                    </span>
                    <span class="asideItemHeaderElement">
                        DEPLOYMENT
                    </span>
                </div>
                <span class="asideItem">
                    Databases
                </span>
                <span class="asideItem">
                    Data Lake
                </span>
                <div class="asideItemHeader">
                    <span class="material-icons asideItemHeaderElement">
                        computer
                    </span>
                    <span class="asideItemHeaderElement">
                        DATA SERVICES
                    </span>
                </div>
                <span class="asideItem">
                    Triggers
                </span>
                <span class="asideItem">
                    Data API
                </span>
                <div class="asideItemHeader">
                    <span class="material-icons asideItemHeaderElement">
                        lock
                    </span>
                    <span class="asideItemHeaderElement">
                        ORGANIZATION
                    </span>
                </div>
                <span class="asideItem">
                    Database Access
                </span>
                <span class="asideItem">
                    Network Access
                </span>
                <span class="asideItem">
                    Advanced
                </span>
            </div>
            <div class="article">
                <span>
                    GLEB'S ORG - 2021-01-28 > UNITYGAME
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        {{
                            cluster.name
                        }}
                    </span>
                    <div class="clusterInfo">
                        <div class="clusterInfoColumn">
                            <span>
                                VERSION
                            </span>
                            <span>
                                4.4.10
                            </span>
                        </div>
                        <div class="clusterInfoColumn">
                            <span>
                                REGION
                            </span>
                            <span>
                                AWS Frankfurt (eu-central-1)
                            </span>
                        </div>
                    </div>
                </div>
                <div class="clusterTabs">
                    <span :class="{ clusterTab: true, activeClusterTab: activeClusterTab === 'Overview' }" @click="activeClusterTab = 'Overview'">
                        &nbsp;&nbsp;Overview&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeClusterTab: activeClusterTab === 'Real Time' }" @click="activeClusterTab = 'Real Time'">
                        &nbsp;&nbsp;Real Time&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeClusterTab: activeClusterTab === 'Metrics' }" @click="activeClusterTab = 'Metrics'">
                        &nbsp;&nbsp;Metrics&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeClusterTab: activeClusterTab === 'Collections' }" @click="activeClusterTab = 'Collections'">
                        &nbsp;&nbsp;Collections&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeClusterTab: activeClusterTab === 'Search' }" @click="activeClusterTab = 'Search'">
                        &nbsp;&nbsp;Search&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeClusterTab: activeClusterTab === 'Profiler' }" @click="activeClusterTab = 'Profiler'">
                        &nbsp;&nbsp;Profiler&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeClusterTab: activeClusterTab === 'Performance Advisor' }" @click="activeClusterTab = 'Performance Advisor'">
                        &nbsp;&nbsp;Performance Advisor&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeClusterTab: activeClusterTab === 'Online Archive' }" @click="activeClusterTab = 'Online Archive'">
                        &nbsp;&nbsp;Online Archive&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeClusterTab: activeClusterTab === 'Command Line Tools' }" @click="activeClusterTab = 'Command Line Tools'">
                        &nbsp;&nbsp;Command Line Tools&nbsp;&nbsp;
                    </span>
                </div>
                <div v-if="activeClusterTab === 'Overview'">
                    <div class="overviewHeader">
                        <div class="s">
                            <span>
                                SANDBOX
                            </span>
                            <span>
                                NODES
                            </span>
                            <span>
                                REPLICA SET
                            </span>
                        </div>
                        <div class="">
                            <button class="btn btn-light">
                                CONNECT
                            </button>
                            <button class="btn btn-light">
                                CONFIGURATION
                            </button>
                            <span class="btn btn-light material-icons">
                                more_horiz
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Real Time'" class="realTime">
                    <div class="realTimeItem">
                        <span class="material-icons realTimeItemIcon">
                            timer
                        </span>
                        <span class="realTimeItemHeader">
                            Gain insight into your database
                        </span>
                        <span class="realTimeItemContent">
                            Observe real-time metrics, identify slow queries, and view hot collections on dedicated clusters.
                        </span>
                        <span class="realTimeItemAvailable">
                            Currently available for M10 or higher clusters
                        </span>
                    </div>
                    <div class="realTimeItem">
                        <span class="realTimeItemHeader">
                            Upgrade your cluster to unlock Real-Time Metrics and
                        </span>
                        <span class="realTimeItemContent">
                            - Dedicated RAM, storage, vCPU
                        </span>
                        <span class="realTimeItemContent">
                            - Auto-scaling storage and tier
                        </span>
                        <span class="realTimeItemContent realTimeItemBenefit">
                            - Cloud backups
                        </span>
                        <button class="btn btn-success">
                            Upgrade your Cluster
                        </button>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Metrics'">
                    <div class="metricsHeader">
                        <span class="metricsHeaderItem">
                            GRANULARITY 
                        </span>
                        <span class="metricsHeaderItem">
                            Auto
                        </span>
                        <span class="metricsHeaderItem">
                            ZOOM 
                        </span>
                        <span class="metricsHeaderItem">
                            1 hour
                        </span>
                        <span class="metricsHeaderItem">
                            CURRENT DISPLAY 
                        </span>
                        <span class="metricsHeaderItem">
                            11/26/2021
                        </span>
                        <span class="metricsHeaderItem">
                            06:39am
                        </span>
                        <span class="metricsHeaderItem">
                            to 
                        </span>
                        <span class="metricsHeaderItem">
                            11/26/2021
                        </span>
                        <span class="metricsHeaderItem">
                            07:39am
                        </span>
                        <span class="metricsHeaderItem">
                            AT 1 MINUTE GRANULARITY
                        </span>
                    </div>
                    <div class="metricsHeader">
                        <span class="metricsHeaderItem">
                            TOGGLE MEMBERS
                        </span>
                        <input type="checkbox" class="metricsHeaderItem" />
                        <span class="metricsHeaderItem">
                            $
                        </span>
                        <input type="checkbox" class="metricsHeaderItem" />
                        <span class="metricsHeaderItem">
                            P
                        </span>
                        <input type="checkbox" class="metricsHeaderItem" />
                        <span class="metricsHeaderItem">
                            $
                        </span>
                        <span class="metricsHeaderItem btn btn-light">
                            ADD CHART
                        </span>
                        <input type="checkbox" class="metricsHeaderItem" />
                        <span class="metricsHeaderItem">
                            DISPLAY OPCOUNTERS ON SEPARATE CHARTS
                        </span>
                        <input type="checkbox" class="metricsHeaderItem" />
                        <span class="metricsHeaderItem">
                            DISPLAY TIMELINE ANNOTATIONS
                        </span>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Collections'">
                    <div class="collectionsHeader">
                        <div class="collectionsHeaderContainer">
                            <span class="collectionsHeaderItem">
                                DATABASES:
                            </span>
                            <span class="collectionsHeaderItem">
                                {{
                                    databases.length
                                }}
                            </span>
                            <span class="collectionsHeaderItem">
                                COLLECTIONS:
                            </span>
                            <span class="collectionsHeaderItem">
                                {{
                                    collections.length
                                }}
                            </span>
                        </div>
                        <div class="collectionsHeaderContainer">
                            <div class="defaultLanding input-group collectionsHeaderItem">
                                <span class="defaultLandingItem">
                                    Default landing
                                </span>
                                <span  class="defaultLandingItem defaultLandingItemIcon material-icons">
                                    info
                                </span>
                                <span  class="defaultLandingItem defaultLandingItemIcon material-icons">
                                    toggle_off
                                </span>
                            </div>
                            <div class="databasesHeaderBtnSize databasesHeaderBtn input-group collectionsHeaderItem" @click="activeHeaderTab = 'Charts'">
                                <span class="databasesHeaderBtnSize material-icons input-group-text">
                                    insert_chart_outlined
                                </span>
                                <span>
                                    VISUALIZE YOUR DATA
                                </span>
                            </div>
                            <div class="databasesHeaderBtnSize databasesHeaderBtn input-group collectionsHeaderItem">
                                <span class="databasesHeaderBtnSize material-icons input-group-text">
                                    refresh
                                </span>
                                <span>
                                    REFRESH
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="coolectionsBody">
                        <div class="coolectionsBodyAside">
                            <button class="btn btn-light createDatabaseBtn" @click="isCreateDatabaseDialog = true">
                                + Создать базу данных
                            </button>
                            <div class="input-group">
                                <span class="material-icons input-group-text">
                                    search
                                </span>
                                <input v-model="namespaces" type="text" placeholder="Пространства имен" class="form-control" />
                            </div>
                            
                            <div class="databases">
                                <!-- <div class="database">
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            arrow_right
                                        </span>
                                        <span :class="{databaseItem: true, activeDatabaseItem: activeDatabase === 'database_name' }">
                                            database_name
                                        </span>
                                    </div>
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            add
                                        </span>
                                        <span class="material-icons databaseItem">
                                            delete
                                        </span>
                                    </div>
                                </div>
                                <div class="database">
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            arrow_right
                                        </span>
                                        <span class="databaseItem">
                                            database_name
                                        </span>
                                    </div>
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            add
                                        </span>
                                        <span class="material-icons databaseItem">
                                            delete
                                        </span>
                                    </div>
                                </div>
                                <div class="database">
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            arrow_right
                                        </span>
                                        <span class="databaseItem">
                                            database_name
                                        </span>
                                    </div>
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            add
                                        </span>
                                        <span class="material-icons databaseItem">
                                            delete
                                        </span>
                                    </div>
                                </div>
                                <div class="database">
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            arrow_right
                                        </span>
                                        <span class="databaseItem">
                                            database_name
                                        </span>
                                    </div>
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            add
                                        </span>
                                        <span class="material-icons databaseItem">
                                            delete
                                        </span>
                                    </div>
                                </div>
                                <div class="database">
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            arrow_right
                                        </span>
                                        <span class="databaseItem">
                                            database_name
                                        </span>
                                    </div>
                                    <div class="databaseBlock">
                                        <span class="material-icons databaseItem">
                                            add
                                        </span>
                                        <span class="material-icons databaseItem">
                                            delete
                                        </span>
                                    </div>
                                </div> -->
                                <div v-for="database in databases.filter(database => database.name.includes(namespaces) || collections.filter(collection => database.collections.map(collection => collection.id).includes(collection._id)).some(collection => collection.name.includes(namespaces)))" :key="database.name" class="database" @click="switchDatabase($event, database)">
                                    <div class="databaseMain">
                                        <div class="databaseBlock">
                                            <span class="material-icons databaseItem" @click="toggleDatabase(database)">
                                                {{
                                                    !database.isOpen ?
                                                        'arrow_right'
                                                    :
                                                        'arrow_drop_down'
                                                }}
                                            </span>
                                            <span :class="{databaseItem: true, activeDatabaseItem: activeDatabase.name === database.name }" @mouseenter="database.isHover = true" @mouseleave="database.isHover = false">
                                                {{
                                                    database.name
                                                }}
                                            </span>
                                        </div>
                                        <div class="databaseBlock" v-if="database.isHover">
                                            <span class="material-icons databaseItem" @click="activeDatabase = database.name; isCreateCollectionDialog = true">
                                                add
                                            </span>
                                            <span class="material-icons databaseItem" @click="deleteDatabase">
                                                delete
                                            </span>
                                        </div>
                                    </div>
                                    <div v-for="collection in collections.filter(collection => database.collections.map(collection => collection.id).includes(collection._id) && database.isOpen)" :key="collection._id" :class="{databaseMain: true, collectionPreview: true, activeCollectionPreview: activeCollection.name === collection.name}" @mouseover="collection.isHover = true" @mouseout="collection.isHover = false">
                                        <div id="collectionTargetId" class="databaseBlock" @click="activeDatabase = databases.filter(database => database._id === collection.database)[0]; activeCollection = collection; getDocuments()">
                                            <span id="collectionTargetId" :class="{databaseItem: true, collectionPreviewContent: true, activeDatabaseItem: activeCollection.name === collection.name }">
                                                {{
                                                    collection.name
                                                }}
                                            </span>
                                        </div>
                                        <div class="databaseBlock">
                                            <span class="material-icons databaseItem" @click="deleteCollection">
                                                delete
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="activeDatabase.name.length >= 1 && activeCollection.name.length <= 0" class="coolectionsBodyArticle collectionsBodyArticleContainer">
                            <span class="coolectionsBodyArticleHeader">
                                {{
                                    activeDatabase.name
                                }}
                            </span>
                            <div class="coolectionsBodyArticleInfo">
                                <div>
                                    <span>
                                        DATABASE SIZE: {{ 666 * activeDatabase.collections.length }}B
                                    </span>
                                    <span>
                                        INDEX SIZE: {{ 36 * activeDatabase.collections.length }}KB
                                    </span>
                                    <span>
                                        TOTAL COLLECTIONS: {{ activeDatabase.collections.length }}
                                    </span>
                                </div>
                                <button class="btn btn-success" @click="isCreateCollectionDialog = true">
                                    CREATE COLLECTION
                                </button>
                            </div>
                            <div class="coolectionsBodyArticleTable" v-if="collections.filter(collection => activeDatabase.collections.map(collection => collection.id).includes(collection._id)).length >= 1">
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Collection Name&nbsp;&nbsp;
                                    </span>
                                    <!-- <span class="link coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;myusers&nbsp;&nbsp;
                                    </span> -->
                                    <span v-for="collection in collections.filter(collection => activeDatabase.collections.map(collection => collection.id).includes(collection._id))" :key="collection.name" class="link coolectionsBodyArticleTableColumnItem" @click="activeCollection = collection; getDocuments()">
                                        &nbsp;&nbsp;
                                        {{
                                            collection.name
                                        }}
                                        &nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Documents&nbsp;&nbsp;
                                    </span>
                                    <span v-for="collection in collections.filter(collection => activeDatabase.collections.map(collection => collection.id).includes(collection._id))" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;
                                            {{
                                                '6'
                                            }}
                                        &nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Documents Size&nbsp;&nbsp;
                                    </span>
                                    <span v-for="collection in collections.filter(collection => activeDatabase.collections.map(collection => collection.id).includes(collection._id))" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;
                                            {{
                                                '666B'
                                            }}
                                        &nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Documents Avg&nbsp;&nbsp;
                                    </span>
                                    <span v-for="collection in collections.filter(collection => activeDatabase.collections.map(collection => collection.id).includes(collection._id))" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;
                                            {{
                                                '111B'
                                            }}
                                        &nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Indexes&nbsp;&nbsp;
                                    </span>
                                    <span v-for="collection in collections.filter(collection => activeDatabase.collections.map(collection => collection.id).includes(collection._id))" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;
                                            {{
                                                '1'
                                            }}
                                        &nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Index Size&nbsp;&nbsp;
                                    </span>
                                    <span v-for="collection in collections.filter(collection => activeDatabase.collections.map(collection => collection.id).includes(collection._id))" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;
                                            {{
                                                '36KB'
                                            }}
                                        &nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Index Avg&nbsp;&nbsp;
                                    </span>
                                    <span v-for="collection in collections.filter(collection => activeDatabase.collections.map(collection => collection.id).includes(collection._id))" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;
                                            {{
                                                '36KB'
                                            }}
                                        &nbsp;&nbsp;
                                    </span>
                                </div>
                            </div>
                            <span v-else>
                                Вы еще не создали ни 1 коллекцию для этой БД
                            </span>
                        </div>
                        <div v-else-if="activeDatabase.name.length >= 1 && activeCollection.name.length >= 1" class="coolectionsBodyArticle">
                            <div class="collectionsBodyArticleContainer">
                                <span class="coolectionsBodyArticleHeader">
                                    {{
                                        `${activeDatabase.name}.${activeCollection.name}`
                                    }}
                                </span>
                                <div class="coolectionsBodyArticleInfo">
                                    <div class="collectionInfo">
                                        <div class="collectionInfoItem">
                                            <span class="collectionInfoItemHeader">
                                                COLLECTION SIZE: 
                                            </span>
                                            <span>
                                                {{ 666 * documents.filter(document => activeCollection.documents.map(document => document.id).includes(document._id)).length }}B
                                            </span>
                                        </div>
                                        <div class="collectionInfoItem">
                                            <span class="collectionInfoItemHeader">
                                                TOTAL DOCUMENTS: 
                                            </span>
                                            <span>
                                                {{ documents.filter(document => activeCollection.documents.map(document => document.id).includes(document._id)).length }}
                                            </span>
                                        </div>
                                        <div class="collectionInfoItem">
                                            <span class="collectionInfoItemHeader">
                                                INDEXES TOTAL SIZE: 
                                            </span>
                                            <span>
                                                {{ 36 * documents.filter(document => activeCollection.documents.map(document => document.id).includes(document._id)).length }}KB
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="collectionTabs">
                                    <span @click="activeCollectionTab = 'Find'" :class="{collectionTab: true, activeCollectionTab: activeCollectionTab === 'Find'}">
                                        Find
                                    </span>
                                    <span @click="activeCollectionTab = 'Indexes'" :class="{collectionTab: true, activeCollectionTab: activeCollectionTab === 'Indexes'}">
                                        Indexes
                                    </span>
                                    <span @click="activeCollectionTab = 'Schema Anti-Patterns'" :class="{collectionTab: true, activeCollectionTab: activeCollectionTab === 'Schema Anti-Patterns'}">
                                        Schema Anti-Patterns
                                    </span>
                                    <span @click="activeCollectionTab = 'Aggregation'" :class="{collectionTab: true, activeCollectionTab: activeCollectionTab === 'Aggregation'}">
                                        Aggregation
                                    </span>
                                    <span class="collectionTab" @click="activeClusterTab = 'Search'">
                                        Search Indexes
                                    </span>
                                </div>
                            </div>
                            <div class="collectionBody" v-if="activeCollectionTab === 'Find'">
                                <div class="insertDocumentBtnContainer">
                                    <button class="btn btn-light createDatabaseBtn" @click="isCreateDocumentDialog = true">
                                        INSERT DOCUMENT
                                    </button>
                                </div>
                                <div class="documentsFilter">
                                    <input type="text" class="form-control w-75" />
                                    <div>
                                        <button class="btn btn-success documentsFilterBtn">
                                            Apply
                                        </button>
                                        <button class="btn btn-light createDatabaseBtn documentsFilterBtn">
                                            Reset
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        QUERY RESULTS
                                    </span>
                                    <span>
                                        1-{{ documents.filter(document => activeCollection.documents.map(document => document.id).includes(document._id)).length }} ИЗ {{ documents.filter(document => activeCollection.documents.map(document => document.id).includes(document._id)).length }}
                                    </span>
                                </div>
                                <!-- <div v-for="document in activeCollection.documents" :key="document._id">
                                    {{
                                        document.id
                                    }}
                                    <span v-for="field in document.fields" :key="field">
                                        {{
                                            field.type
                                        }}
                                    </span>
                                </div> -->
                                <div v-for="document in documents.filter(document => activeCollection.documents.map(document => document.id).includes(document._id))" :key="document._id" class="fields">
                                    <div v-for="field in document.fields" :key="field" :style="`margin-left: calc(15px * ${1});`">
                                        <span class="fieldKey fieldData">
                                            {{
                                                `${field.key}: `
                                            }}
                                        </span>
                                        <span v-if="typeof field.value  === 'string'" :class="{fieldValue: true, fieldData: true, fieldValueString: true}">
                                            {{
                                                `\"${field.value}\"`
                                            }}
                                        </span>
                                        <span v-else-if="typeof field.value  === 'object'" :class="{fieldValue: true, fieldData: true, fieldValueObject: true}">
                                            Object
                                            <span v-for="(nestedFld, nestedFldIdx) in Object.values(field.value)" :key="nestedFld" :style="`position: relative; left: calc(25px * ${depthOf(field.value)});`" >
                                                <br/>
                                                {{
                                                    `${[Object.keys(field.value), Object.values(field.value)].map((nestedField, fieldIdx) => {
                                                        return `${Object.keys(field.value)[fieldIdx]}: ${Object.values(field.value)[fieldIdx]}`
                                                    })[nestedFldIdx]}`
                                                }}

                                            </span>
                                        </span>
                                        <span v-else :class="{fieldValue: true, fieldData: true, fieldValueString: typeof field.value  === 'string', fieldValueNumber: typeof field.value  === 'number', fieldValueBoolean: typeof field.value  === 'boolean', fieldValueObject: typeof field.value  === 'object'}">
                                            {{
                                                field.value
                                            }}
                                        </span>
                                    </div>
                                    <!-- <span>
                                        a
                                    </span> -->
                                </div>

                            </div>
                            <div class="collectionBody" v-else-if="activeCollectionTab === 'Indexes'">
                                <div class="insertDocumentBtnContainer">
                                    <button class="btn btn-success" @click="isCreateDocumentDialog = true">
                                        CREATE INDEX
                                    </button>
                                </div>
                                <div class="coolectionsBodyArticleTable indexesCollectionBody" v-if="collections.filter(collection => activeDatabase.collections.map(collection => collection.id).includes(collection._id)).length >= 1">
                                    <div class="coolectionsBodyArticleTableColumn">
                                        <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;Name&nbsp;&nbsp;
                                        </span>
                                        <!-- <span class="link coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;myusers&nbsp;&nbsp;
                                        </span> -->
                                        <span class="coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;
                                                <span class="indexesHeader" v-text="'_id'"></span>
                                            &nbsp;&nbsp;
                                        </span>
                                    </div>
                                    <div class="coolectionsBodyArticleTableColumn">
                                        <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;SIZE&nbsp;&nbsp;
                                        </span>
                                        <span class="coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;
                                                <span class="indexesHeader" v-text="`'36.0KB'`"></span>
                                            &nbsp;&nbsp;
                                        </span>
                                    </div>
                                    <div class="coolectionsBodyArticleTableColumn">
                                        <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;USAGE&nbsp;&nbsp;
                                        </span>
                                        <span class="coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;
                                                <span class="indexesHeader" v-text="`\< 1min`"></span>
                                            &nbsp;&nbsp;
                                        </span>
                                    </div>
                                    <div class="coolectionsBodyArticleTableColumn">
                                        <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;PROPERTIES&nbsp;&nbsp;
                                        </span>
                                        <span class="coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;
                                                <span class="indexesHeader" v-text="''"></span>
                                            &nbsp;&nbsp;
                                        </span>
                                    </div>
                                    <div class="coolectionsBodyArticleTableColumn">
                                        <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;ACTION&nbsp;&nbsp;
                                        </span>
                                        <span class="coolectionsBodyArticleTableColumnItem">
                                            &nbsp;&nbsp;
                                                <span class="indexesHeader" v-text="''"></span>
                                            &nbsp;&nbsp;
                                        </span>
                                    </div>
                                </div> 

                            </div>
                            <div class="collectionBody" v-else-if="activeCollectionTab === 'Schema Anti-Patterns'">
                            
                                <div class="searchBlock">
                                    <div class="searchBlockItem">
                                        <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                            code
                                        </span>
                                        <span class="searchBlockItemElementHeader searchBlockItemElement">
                                            No Schema suggestions for now.
                                        </span>
                                        <span class="searchBlockItemElement">
                                            Schema suggestions are based on anti-patterns detected from a sample of documents in this collection. To see suggestions for the most active collections, visit the Performance Advisor page.
                                        </span>
                                        <button class="btn btn-success">
                                            View docs
                                        </button>
                                        <span class="link">
                                            Why don’t I see any schema recommendations?
                                        </span>
                                    </div>
                                </div>
                            
                            </div>

                        </div>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Search'">
                    <div class="searchBlockHeaders">
                        <span class="searchBlockHeadersMain">
                            Make your data more discoverable with Atlas Search
                        </span>
                        <span>
                            Create search indexes and use MongoDB aggregation pipeline to get relevant results.
                        </span>
                    </div>
                    <div class="searchBlock">
                        <div class="searchBlockItem">
                            <span class="searchBlockItemElementIcon material-icons searchBlockItemElement">
                                search
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                Autocomplete
                            </span>
                            <span class="searchBlockItemElement">
                                Suggest common search results as users type
                            </span>
                        </div>
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                emoji_symbols
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                Rich Query DSL
                            </span>
                            <span class="searchBlockItemElement">
                                Search across different data types and languages
                            </span>
                            <button class="btn btn-success searchBlockItemElement">
                                Create Search Index
                            </button>
                            <span class="link searchBlockItemElement">
                                Learn more in Docs and Tutorials 
                            </span>
                        </div>
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                title
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                Custom Scoring
                            </span>
                            <span class="searchBlockItemElement">
                                Fine-tune relevance and boost promoted content
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Profiler'" class="realTime" >
                    <div class="realTimeItem">
                        <span class="material-icons realTimeItemIcon">
                            search
                        </span>
                        <span class="realTimeItemHeader">
                            Gain insight into your database
                        </span>
                        <span class="realTimeItemContent">
                            Observe real-time metrics, identify slow queries, and view hot collections on dedicated clusters.
                        </span>
                        <span class="realTimeItemAvailable">
                            Currently available for M10 or higher clusters
                        </span>
                    </div>
                    <div class="realTimeItem">
                        <span class="realTimeItemHeader">
                            Upgrade your cluster to unlock Real-Time Metrics and
                        </span>
                        <span class="realTimeItemContent">
                            - Dedicated RAM, storage, vCPU
                        </span>
                        <span class="realTimeItemContent">
                            - Auto-scaling storage and tier
                        </span>
                        <span class="realTimeItemContent realTimeItemBenefit">
                            - Cloud backups
                        </span>
                        <button class="btn btn-success">
                            Upgrade your Cluster
                        </button>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Performance Advisor'" class="realTime" >
                    <div class="realTimeItem">
                        <span class="material-icons realTimeItemIcon">
                            tungsten
                        </span>
                        <span class="realTimeItemHeader">
                            Automated Index and Schema Recommendations
                        </span>
                        <span class="realTimeItemContent">
                            Review performance optimization suggestions based on automated analysis of your collection metadata and slow query logs.
                        </span>
                        <span class="realTimeItemAvailable">
                            Currently available for M10 or higher clusters
                        </span>
                    </div>
                    <div class="realTimeItem">
                        <span class="realTimeItemHeader">
                            Upgrade your cluster to unlock Real-Time Metrics and
                        </span>
                        <span class="realTimeItemContent">
                            - Dedicated RAM, storage, vCPU
                        </span>
                        <span class="realTimeItemContent">
                            - Auto-scaling storage and tier
                        </span>
                        <span class="realTimeItemContent realTimeItemBenefit">
                            - Cloud backups
                        </span>
                        <button class="btn btn-success">
                            Upgrade your Cluster
                        </button>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Online Archive'" class="realTime" >
                    <div class="realTimeItem">
                        <span class="material-icons realTimeItemIcon">
                            build
                        </span>
                        <span class="realTimeItemHeader">
                            Automatically Archive Your Data
                        </span>
                        <span class="realTimeItemContent">
                            Create rules to automatically move infrequently-accessed, immutable data to queryable, read-only storage and free up space in your clusters.                            
                        </span>
                        <span class="realTimeItemAvailable">
                            Currently available for M10 or higher clusters
                        </span>
                        <span class="link">
                            Learn more about Online Archive
                        </span>
                    </div>
                    <div class="realTimeItem">
                        <span class="realTimeItemHeader">
                            Upgrade your cluster to unlock Real-Time Metrics and
                        </span>
                        <span class="realTimeItemContent realTimeItemBenefit">
                            - Dedicated RAM, storage, vCPU
                        </span>
                        <span class="realTimeItemContent realTimeItemBenefit">
                            - Auto-scaling storage and tier
                        </span>
                        <span class="realTimeItemContent realTimeItemBenefit">
                            - Cloud backups
                        </span>
                        <button class="btn btn-success">
                            Upgrade your Cluster
                        </button>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Command Line Tools'">
                    <div class="cmdItem">
                        <span class="cmdHeader cmdSubitem">
                            Connect To Your Cluster
                        </span>
                        <span class="cmdContent cmdSubitem">
                            Methods to connect your application to your cluster via MongoShell, URI, or Compass can be found in the connect modal.
                        </span>
                        <button class="btn btn-light cmdBtn cmdSubitem">
                            Connect Instructions
                        </button>
                    </div>
                    <div class="cmdItem">
                        <span class="cmdHeader cmdSubitem">
                            Manage Your Cluster From the Command Line Interface
                        </span>
                        <span class="cmdContent cmdSubitem">
                            Provision and manage clusters with the MongoDB CLI for easier scripting and testing. To get started, create a programmatic <span class="link">API Key</span>  for your project (Project ID: 601286ece82e5f44a9d63601).
                        </span>
                        <button class="btn btn-light cmdBtn cmdSubitem">
                            Install MongoDB CLI
                        </button>
                    </div>
                    <div class="cmdItem">
                        <span class="cmdHeader cmdSubitem">
                            Binary Import and Export Tools
                        </span>
                        <span class="cmdContent cmdSubitem">
                            Replace <span class="wildcard">PASSWORD</span> with the password for the admin user and <span class="wildcard">DATABASE</span> with the name of the database you wish to import/export to your cluster.
                        </span>
                        <span class="cmdContent cmdSubitem">
                            <span class="link">mongorestore</span> | creates a new database or adds data to an existing database. By default, mongorestore reads the database dump in the dump/ sub-directory of the current directory; to restore from a different directory, pass in the path to the directory as a final argument.
                        </span>
                        <div class="codeExample">
                            <span class="cmdContent cmdSubitem codeString" v-text="`mongorestore --uri mongodb+srv://glebClusterUser:<PASSWORD>@${cluster.name}.fvfru.mongodb.net`">
                                {{
                                    
                                }}
                            </span>
                            <span class="material-icons codeExampleCopyBtn">
                                {{
                                    'content_copy'
                                }}
                            </span>
                        </div>
                        <span class="cmdContent cmdSubitem">
                            <span class="link">mongodump</span> | creates a binary export of the contents of a database
                        </span>
                        <div class="codeExample">
                            <span class="cmdContent cmdSubitem codeString" v-text="`mongodump --uri mongodb+srv://glebClusterUser:<PASSWORD>@${cluster.name}.fvfru.mongodb.net/<DATABASE>`">
                                {{
                                    
                                }}
                            </span>
                            <span class="material-icons codeExampleCopyBtn">
                                {{
                                    'content_copy'
                                }}
                            </span>
                        </div>
                    </div>
                    <div class="cmdItem">
                        <span class="cmdHeader cmdSubitem">
                            Data Import and Export Tools
                        </span>
                        <span class="cmdContent cmdSubitem">
                            Replace <span class="wildcard">PASSWORD</span> with the password for the admin user, <span class="wildcard">DATABASE</span> with the name of the database you wish to import/export to your cluster, and <span class="wildcard">COLLECTION</span> with the name of the collection you wish to import/export to your cluster. Replace <span class="wildcard">FILETYPE</span> with "json" or "csv" to specify the file type. Where applicable, replace <span class="wildcard">FILENAME</span> with the location and name of the output file (for export) or data source (for import).
                        </span>
                        <span class="cmdContent cmdSubitem">
                            NOTE: When exporting or importing CSV data, an additional --fields flag is often required. See documentation for the specific tool for additional details.
                        </span>
                        <span class="cmdContent cmdSubitem">
                            <span class="link">mongoimport</span> | imports content from an Extended JSON, CSV, or TSV export
                        </span>
                        <div class="codeExample">
                            <span class="cmdContent cmdSubitem codeString" v-text="`mongoimport --uri mongodb+srv://glebClusterUser:<PASSWORD>@${cluster.name}.fvfru.mongodb.net/<DATABASE> --collection <COLLECTION> --type <FILETYPE> --file <FILENAME>`">
                                {{
                                    
                                }}
                            </span>
                            <span class="material-icons codeExampleCopyBtn">
                                {{
                                    'content_copy'
                                }}
                            </span>
                        </div>
                        <span class="cmdContent cmdSubitem">
                            <span class="link">mongoexport</span> | produces a JSON or CSV export of data stored in a MongoDB instance
                        </span>
                        <div class="codeExample">
                            <span class="cmdContent cmdSubitem codeString" v-text="`mongoexport --uri mongodb+srv://glebClusterUser:<PASSWORD>@${cluster.name}.fvfru.mongodb.net/<DATABASE> --collection <COLLECTION> --type <FILETYPE> --out <FILENAME>`">
                                {{
                                    
                                }}
                            </span>
                            <span class="material-icons codeExampleCopyBtn">
                                {{
                                    'content_copy'
                                }}
                            </span>
                        </div>
                    </div>
                    <div class="cmdItem">
                        <span class="cmdHeader cmdSubitem">
                            Set Up Diagnostics
                        </span>
                        <span class="cmdContent cmdSubitem">
                            Replace <span class="wildcard">PASSWORD</span> with the password for the admin user.
                        </span>
                        <span class="cmdContent cmdSubitem">
                            <span class="link">mongostat</span> | provides a quick overview of the status of a currently running mongod or mongos instance
                        </span>
                        <div class="codeExample">
                            <span class="cmdContent cmdSubitem codeString" v-text="`mongostat --uri mongodb+srv://glebClusterUser:\<PASSWORD\>@${cluster.name}.fvfru.mongodb.net `">
                                {{
                                    
                                }}
                            </span>
                            <span class="material-icons codeExampleCopyBtn">
                                {{
                                    'content_copy'
                                }}
                            </span>
                        </div>
                        
                        <span class="cmdContent cmdSubitem">
                            <span class="link">mongotop</span> | tracks the amount of time a MongoDB instance spends reading and writing data
                        </span>
                        <div class="codeExample">
                            <span class="cmdContent cmdSubitem codeString" v-text="`mongotop --uri mongodb+srv://glebClusterUser:\<PASSWORD\>@${cluster.name}.fvfru.mongodb.net`">
                                {{}}
                            </span>
                            <span class="material-icons codeExampleCopyBtn">
                                {{
                                    'content_copy'
                                }}
                            </span>
                        </div>
                    </div>
                    
                </div>
                <div class="projectsFooter">
                    <span>
                        System Status <span class="systemStatus">All Good</span>
                    </span>
                    <span>
                        ©2021 MongoDB, Inc.StatusTermsPrivacyAtlas BlogContact Sales
                    </span>
                </div>
            </div>
        </div>
        <Footer />
        <div v-if="isCreateDatabaseDialog" class="createCollectionDialogBackdrop">
            <div class="createCollectionDialog">
                <div class="closeRow">
                    <span class="material-icons closeBtn" @click="isCreateDatabaseDialog = false">
                        close
                    </span>
                </div>
                <span class="createCollectionDialogItem createCollectionDialogHeader">
                    Создать базу данных
                </span>
                <label for="" class="createCollectionDialogItem createCollectionDialogLabel">
                    Имя базы данных
                </label>
                <input  v-model="databaseName" placeholder="Введите имя базы данных" type="text" class="form-control w-75 createCollectionDialogItem" />
                <label for="" class="createCollectionDialogItem createCollectionDialogLabel">
                    Имя коллекции
                </label>
                <input v-model="collectionName" placeholder="Введите имя коллекции" type="text" class="form-control w-75 createCollectionDialogItem" />
                <label for="" class="createCollectionDialogItem createCollectionDialogLabel">
                    Дополнительные настройки
                </label>
                <div class="createCollectionDialogContainer createCollectionDialogItem">
                    <input v-model="isCappedCollection" type="checkbox" class="createCollectionDialogContainerItem" />
                    <span class="createCollectionDialogContainerItem">
                        закрытая коллекция
                    </span>
                    <span class="material-icons createCollectionDialogContainerItem">
                        info
                    </span>
                </div>
                <hr />
                <div class="createCollectionDialogItem createCollectionDialogItemBtns">
                    <button class="btn btn-light createCollectionDialogItemBtn" @click="isCreateDatabaseDialog = false">
                        Отмена
                    </button>
                    <button class="btn btn-light createCollectionDialogItemBtn" @click="createDatabase">
                        Создать
                    </button>
                </div>
            </div>
        </div>
        <div v-else-if="isCreateCollectionDialog" class="createCollectionDialogBackdrop">
            <div class="createCollectionDialog">
                <div class="closeRow">
                    <span class="material-icons closeBtn" @click="isCreateCollectionDialog = false">
                        close
                    </span>
                </div>
                <span class="createCollectionDialogItem createCollectionDialogHeader">
                    Создать коллекцию
                </span>
                <label for="" class="createCollectionDialogItem createCollectionDialogLabel">
                    Имя базы данных
                </label>
                <input disabled="true" :value="activeDatabase.name" type="text" class="form-control w-75 createCollectionDialogItem" />
                <label for="" class="createCollectionDialogItem createCollectionDialogLabel">
                    Имя коллекции
                </label>
                <input v-model="collectionName" placeholder="Введите имя коллекции" type="text" class="form-control w-75 createCollectionDialogItem" />
                <label for="" class="createCollectionDialogItem createCollectionDialogLabel">
                    Дополнительные настройки
                </label>
                <div class="createCollectionDialogContainer createCollectionDialogItem">
                    <input v-model="isCappedCollection" type="checkbox" class="createCollectionDialogContainerItem" />
                    <span class="createCollectionDialogContainerItem">
                        закрытая коллекция
                    </span>
                    <span class="material-icons createCollectionDialogContainerItem">
                        info
                    </span>
                </div>
                <hr />
                <div class="createCollectionDialogItem createCollectionDialogItemBtns">
                    <button class="btn btn-light createCollectionDialogItemBtn" @click="isCreateCollectionDialog = false">
                        Отмена
                    </button>
                    <button class="btn btn-light createCollectionDialogItemBtn" @click="createCollection">
                        Создать
                    </button>
                </div>
            </div>
        </div>
        <div v-else-if="isCreateDocumentDialog" class="createCollectionDialogBackdrop">
            <div class="createCollectionDialog">
                <div class="closeRow">
                    <span class="material-icons closeBtn" @click="isCreateDocumentDialog = false">
                        close
                    </span>
                </div>
                <span class="createCollectionDialogItem createCollectionDialogHeader">
                    Вставить в коллекцию
                </span>
                <hr />
                <label for="" class="createCollectionDialogItem createCollectionDialogLabel">
                    Просмотр
                </label>
                <div>
                    <span class="createDatabaseBtn material-icons btn btn-light">
                        code
                    </span>
                    <span class="createDatabaseBtn material-icons btn btn-light">
                        list
                    </span>
                </div>
                <textarea v-model="code">

                </textarea>
                <hr />
                <div class="createCollectionDialogItem createCollectionDialogItemBtns">
                    <button class="btn btn-light createCollectionDialogItemBtn" @click="isCreateCollectionDialog = false">
                        Отмена
                    </button>
                    <button class="btn btn-success createCollectionDialogItemBtn" @click="createDocument">
                        Вставить
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import Header from '@/components/Header.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Projects',
    data() {
        return {
            activeClusterTab: 'Overview',
            activeDatabase: {
                name: ''
            },
            activeCollection: {
                name: '',
                documents: []
            },
            cacher: null,
            cluster: null,
            databases: [],
            collections: [],
            documents: [],
            isCreateDatabaseDialog: false,
            isCreateCollectionDialog: false,
            isCreateDocumentDialog: false,
            isCappedCollection: false,
            databaseName: '',
            collectionName: '',
            code: `{
    \"_id\": ${Math.floor(Math.random() * 10000)}
}`,
            isCodeViewDocuemnt: true, 
            namespaces: '',
            activeCollectionTab: 'Find',
            activeHeaderTab: 'Atlas',
            token: window.localStorage.getItem('odbcstoken')
        }
    },
    mounted() {
        
        jwt.verify(this.token, 'odbcssecret', (err, decoded) => {
            if (err) {
                return this.$router.push({ name: 'Auth' })
            }
            fetch(`http://localhost:4000/api/cachers/get/?cacheremail=${decoded.cacher}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value)
                                push()
                            })
                        }
                        push()
                    }
                })
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    alert('Пользователя нашел')
                    this.cacher = JSON.parse(result).cacher
                    
                    fetch(`http://localhost:4000/api/clusters/get/?clusterid=${this.$route.query.clusterid}`, {
                        mode: 'cors',
                        method: 'GET'
                    }).then(response => response.body).then(rb  => {
                        const reader = rb.getReader()
                        return new ReadableStream({
                            start(controller) {
                                function push() {
                                    reader.read().then( ({done, value}) => {
                                        if (done) {
                                            controller.close();
                                            return;
                                        }
                                        controller.enqueue(value)
                                        push()
                                    })
                                }
                                push()
                            }
                        })
                    }).then(stream => {
                        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                    })
                    .then(result => {
                        if (JSON.parse(result).status === 'OK') {
                            alert('Кластер нашел')
                            this.cacher = JSON.parse(result).cacher
                            this.cluster = JSON.parse(result).cluster
                            this.getDatabases()
                        }
                    })      

                }
            })
            
        })

    },
    methods: {
        depthOf(object) {
            let level = 1
            for(let key in object) {
                if (!object.hasOwnProperty(key)) continue
                if(typeof object[key] == 'object'){
                    var depth = this.depthOf(object[key]) + 1
                    level = Math.max(depth, level)
                }
            }
            console.log(`level: ${level}`)
            return level
        },
        getDocuments(collection = this.activeCollection) {

            fetch(`http://localhost:4000/api/documents/all/?collectionid=${collection._id}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value)
                                push()
                            })
                        }
                        push()
                    }
                })
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    // alert('получил документы')
                    this.documents = JSON.parse(result).documents
                    console.log(`this.documents: ${this.documents.length}`)
                }
            })      

        },
        createDocument() {

            fetch(`http://localhost:4000/api/documents/create/?collectionid=${this.activeCollection._id}&document=${this.code}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value)
                                push()
                            })
                        }
                        push()
                    }
                })
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    alert('Вставил в коллекцию')
                    this.getCollections()
                    this.isCreateDocumentDialog = false
                    this.code = `{
    \"_id\": ${Math.floor(Math.random() * 10000)}
}`
                }
            })

        },
        deleteCollection() {

            fetch(`http://localhost:4000/api/collections/delete/?databaseid=${this.activeDatabase._id}&collectionid=${this.activeCollection._id}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value)
                                push()
                            })
                        }
                        push()
                    }
                })
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    alert('Удалил коллекцию')
                    this.activeCollection = {
                        name: ''
                    }
                    this.getCollections()
                }
            })

        },
        deleteDatabase() {

            fetch(`http://localhost:4000/api/databases/delete/?databaseid=${this.activeDatabase._id}&clusterid=${this.cluster._id}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value)
                                push()
                            })
                        }
                        push()
                    }
                })
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    alert('Удалил базу данных')
                    this.getDatabases()
                    this.activeDatabase = {
                        name: ''
                    }
                    this.activeCollection = {
                        name: ''
                    }
                }
            })

        },
        switchDatabase(event, database) {
            if (event.target.id !== 'collectionTargetId') {
                console.log('меняем бд')
                this.activeDatabase = database
                this.activeCollection = {
                    name: ''
                }
                this.getCollections()
            }
        },
        toggleDatabase(database) {
            database.isOpen = !database.isOpen
            database.isHover = !database.isHover
        },
        getCollections(database = this.activeDatabase) {

            fetch(`http://localhost:4000/api/collections/all/?databaseid=${database._id}&collectionname=${this.collectionName}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value)
                                push()
                            })
                        }
                        push()
                    }
                })
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    // alert('получил коллекции')
                    this.collections = JSON.parse(result).collections
                    this.collections = this.collections.map(collection => {
                        collection.isHover = false
                        return collection
                    })

                    // this.getDocuments()
                    
                }
            })      

        },
        getDatabases() {

            fetch(`http://localhost:4000/api/databases/all/?clusterid=${this.cluster._id}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value)
                                push()
                            })
                        }
                        push()
                    }
                })
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    alert('получил Базы данных')
                    this.databases = JSON.parse(result).databases
                    this.databases = this.databases.map(database => {
                        database.isOpen = false
                        database.isHover = false
                        return database
                    })

                    if (this.databases.length >= 1) {
                        this.activeDatabase = this.databases[0]
                    }

                }
            })      

        },
        createDatabase() {

            fetch(`http://localhost:4000/api/databases/create/?clusterid=${this.cluster._id}&databasename=${this.databaseName}&collectionname=${this.collectionName}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value)
                                push()
                            })
                        }
                        push()
                    }
                })
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    alert('Базу данных создал')
                    this.isCreateDatabaseDialog = false
                    this.databaseName = ''
                    this.collectionName = ''

                    this.getDatabases()

                }
            })      

        },
        createCollection() {

            fetch(`http://localhost:4000/api/collections/create/?databaseid=${this.activeDatabase._id}&collectionname=${this.collectionName}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value)
                                push()
                            })
                        }
                        push()
                    }
                })
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if (JSON.parse(result).status === 'OK') {
                    alert('Коллекцию создал')
                    this.isCreateCollectionDialog = false
                    this.collectionName = ''
                    this.getCollections()
                }
            })      

        }
    },
    components: {
        Header
    }
}
</script>

<style scoped>
    
    .main {
        height: 100%;
        width: 100%;
        display: flex;
    }

    .aside {
        width: 15%;
        height: 100%;
        background-color: rgb(235, 235, 235);
        display: flex;
        flex-direction: column;
    }

    .article {
        box-sizing: border-box;
        padding: 25px;
        width: 85%;
        height: 100%;
        background-color: rgb(255, 255, 255);
    }

    .asideItem {
        box-sizing: border-box;
        padding: 15px 15px;
        cursor: pointer;
    }

    .asideItem:hover {
        color: rgb(0, 100, 200);
        background-color: rgb(215, 205, 245);
    }

    .asideItemHeader {
        box-sizing: border-box;
        padding: 15px 15px;
        display: flex;
    }

    .asideItemHeaderElement {
        margin: 0px 5px;
    }

    .createProjectRow {
        display: flex;
        justify-content: space-between;
        /* box-shadow: 0px 4px 2px rgb(235, 235, 235); */
        padding: 10px;
        margin: 15px 0px;
    }

    .createProjectRowHeader {
        font-weight: bolder;
        font-size: 24px;
    }

    .projectsTable {
        display: flex;
        width: 100%;

    }

    .projectsTableColumn {
        display: flex;
        flex-direction: column;
        width: 25%;
    }

    .projectsTableColumnHeader {
        border-left: 1px solid rgb(200, 200, 200);
        border-right: 1px solid rgb(200, 200, 200);
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
    }

    .projectTableCell {
        box-sizing: border-box;
        padding: 0px 10px;
        margin: 15px 0px;
    }

    .actionsBtn {
        border: 1px solid rgb(150, 150, 150);
        margin: 0px 5px;
        font-size: 16px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .actionsBtns {
        display: flex;
    }

    .link {
        color: rgb(0, 200, 200);
        cursor: pointer;
    }

    .link:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    .projectsFooter {
        border-top: 1px solid rgb(215, 215, 215);
        box-sizing: border-box;
        padding: 10px;
        /* font-size: 12px; */
        color: rgb(165, 165, 165);
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    .clusterInfo {
        display: flex;
        /* display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 15px;
        margin: 30px 0px;
        border-radius: 8px;
        box-shadow: 0px 0px 5px rgb(200, 200, 200); */
    }

    .clusterInfoHeader {
        margin: 15px 0px;
        display: flex;
        justify-content: space-between;
    }

    .clusterInfoBody {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 75px 0px;
    }

    .clusterInfoFooter {
        display: flex;
    }

    .clusterInfoHeaderItem {
        display: flex;
        align-items: center;
    }

    .clusterInfoHeaderItemElement {
        margin: 0px 5px;
    }

    .clusterInfoFooterItem {
        display: flex;
        flex-direction: column;
        margin: 0px 10px;
    }

    .clusterInfoFooterSubitem {
        
    }

    .clusterInfoBodyItem {
        margin: 5px 0px;
    }

    .clusterInfoBodyItemContent {
        color: rgb(165, 165, 165);
    }

    .clusterInfoColumn {
        display: flex;
        flex-direction: column;
        margin: 0px 5px;
    }

    .clusterTabs {
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
        display: flex;
        margin: 15px 0px;
    }

    .clusterTab {
        box-sizing: border-box;
        padding: 0px 5px;
        margin: 0px 5px;
        cursor: pointer;
    }

    .clusterTab:hover {
        font-size: 14px;
        font-weight: bolder;
    }

    .activeClusterTab {
        
        font-weight: bolder;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: rgb(0, 150, 0);
        text-decoration-thickness: 3px;
    }

    .overviewHeader {
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
    }

    .realTime {
        border-radius: 8px;
        border: 1px solid rgb(200, 200, 200);
        width: 75%;
        height: 350px;
        margin: 50px auto;
        background-color: rgb(255, 255, 255);
        display: flex;
        box-sizing: border-box;
        padding: 25px;
        /* align-items: center; */
    }

    .realTimeItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .metricsHeader {
        display: flex;
        justify-content: center;
        margin: 15px 0px;
    }

    .metricsHeaderItem {
        margin: 0px 10px;
        font-size: 12px;
    }

    .collectionsHeader {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(200, 200, 200);
    }

    .collectionsHeaderItem {
        margin: 0px 10px;
    }

    .collectionsHeaderContainer {
        display: flex;
    }

    .coolectionsBody {
        display: flex;
        min-height: 500px;
    }

    .coolectionsBodyAside {
        box-sizing: border-box;
        padding: 15px;
        width: 25%;
        border-right: 1px solid rgb(200, 200, 200);
    }

    .coolectionsBodyArticle {
        width: 75%;
        /* box-sizing: border-box;
        padding: 15px; */
    }

    .databases {
        display: flex;
        flex-direction: column;
    }

    .database {
        margin: 15px 0px;
        /* justify-content: space-between; */
        display: flex;
        flex-direction: column;
        align-items: space-between;
    }

    .databaseMain {
        margin: 15px 0px;
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    .databaseItem {
        cursor: pointer;
    }

    .databaseBlock {
        display: flex;
        align-items: center;
    }

    .activeDatabaseItem {
        font-weight: bolder;
        color: rgb(0, 150, 0);
    }

    .coolectionsBodyArticleHeader {
        font-weight: 500;
        font-size: 24px;
        color: rgb(65, 65, 65);
    }

    .coolectionsBodyArticleInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .coolectionsBodyArticleTable {
        display: flex;
    }

    .coolectionsBodyArticleTableColumn {
        display: flex;
        flex-direction: column;
    }

    .coolectionsBodyArticleTableColumnHeader {
        font-weight: bolder;
        font-size: 14px;
        color: rgb(65, 65, 65);
    }
    
    .coolectionsBodyArticleTableColumnItem {
        margin: 15px 0px;
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
    }

    .searchBlock {
        display: flex;
        justify-content: center;
    }

    .searchBlockItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px 25px;
    }

    .searchBlockItemElement {
        margin: 5px 0px;
        text-align: center;
    }

    .cmdHeader {
        font-size: 24px;
    }

    .cmdContent {
        
    }

    .cmdBtn {
        color: rgb(0, 150, 0);
        border: 1px solid rgb(0, 150, 0);
        width: 200px;
    }

    .cmdItem {
        display: flex;
        flex-direction: column;
        width: 500px;
    }

    .cmd {
        display: flex;
        flex-direction: column;
    }

    .cmdSubitem {
        margin: 10px 0px;
    }

    .wildcard {
        font-weight: bolder;
        color: rgb(0, 150, 0);
    }

    .codeExample {
        border-radius: 15px;
        margin: 5px;
        background-color: rgb(235, 235, 235);    
        box-sizing: border-box;
        padding: 10px;
    }

    .codeExampleCopyBtn {
        /* font-size: 8px; */
        float: right;
        width: 35px;
        height: 15px;
    }
    .codeString {
        padding: 15px;
        width: 500px;
    }

    .realTimeItemHeader {
        font-size: 24px;
    }

    .realTimeItemAvailable {
        font-weight: bolder;
        font-size: 18px;
    }

    .realTimeItemContent {
        font-weight: 500;
    }

    .realTimeItemIcon {
        font-size: 48px;
    }

    .realTimeItemBenefit {
        align-self: flex-start;
    }

    .searchBlockItemElementIcon {
        font-size: 48px;
    }

    .searchBlockItemElementHeader {
        font-weight: bolder;
        font-size: 18px;
    }

    .searchBlockHeaders {
        display: flex;
        flex-direction: column;
        font-weight: 500;
        font-size: 18px;
        align-items: center;
        margin: 35px 0px;
    }

    .searchBlockHeadersMain {
        font-weight: bolder;
        font-size: 20px;
        margin: 15px 0px;
    }

    .systemStatus {
        color: rgb(0, 150, 0);
    }

    .createCollectionDialogBackdrop {
        position: fixed;
        top: 0px;
        left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .createCollectionDialog {
        box-sizing: border-box;
        padding: 0px 25px;
        width: 65%;
        height: 65%;
        background-color: rgb(255, 255, 255);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
    }

    .closeRow {
        display: flex;
        justify-content: flex-end;
    }

    .closeBtn {
        cursor: pointer;
    }

    .createCollectionDialogHeader {
        font-size: 24px;
        font-weight: bolder;
    }

    .createCollectionDialogItem {
        margin: 5px 0px;
    }

    .createCollectionDialogContainer {
        display: flex;
        align-items: center;
    }

    .createCollectionDialogContainerItem {
        margin: 0px 10px;
    }

    .createCollectionDialogItemBtns {
        display: flex;
        justify-content: flex-end;
    }

    .createCollectionDialogItemBtn {
        margin: 0px 5px;
        border: 1px solid rgb(200, 200, 200);
    }

    .createCollectionDialogLabel {
        font-weight: bolder;
    }

    .collectionPreview {
        /* margin-left: 25px; */
        /* text-indent: 25px; */
    }

    .createDatabaseBtn {
        font-weight: bolder;
        border: 1px solid rgb(200, 200, 200);
        margin: 10px 0px;
    }

    .activeCollectionPreview {
        border-left: 3px solid rgb(0, 150, 0);
    }

    .collectionPreviewContent {
        text-indent: 25px;
    }

    .fieldKey {
        font-weight: bolder;
    }

    .fieldValue {
        font-style: italic;
    }

    .fieldValueString {
        color: rgb(0, 100, 200);
    }

    .fieldValueNumber {
        color: rgb(0, 150, 0);
    }

    .fieldValueBoolean {
        color: rgb(150, 50, 150);
    }

    .fieldValueObject {
        font-weight: bolder;
    }

    .fieldData {
        /* font-size: 12px; */
    }

    .fields {
        margin: 25px 0px;
    }

    .insertDocumentBtnContainer {
        display: flex;
        justify-content: flex-end;
        margin: 15px 0px;
    }

    .documentsFilter {
        display: flex;
        align-items: center;
    }

    .documentsFilterBtn {
        margin: 0px 5px;
    }

    .collectionTabs {
        display: flex;
        justify-content: space-between;
    }

    .collectionTab {
        margin: 0px 5px;
        cursor: pointer;
        color: rgb(125, 125, 125);
        font-weight: bolder;
    }

    .collectionTab:hover {
        color: rgb(0, 150, 0);
    }

    .activeCollectionTab {
        color: rgb(0, 150, 0);
    }

    .collectionInfo {
        margin: 15px 0px;
        display: flex;
        justify-content: space-between;
    }
    .collectionInfoItem {
        margin: 0px 10px;
    }

    .collectionInfoItemHeader {
        color: rgb(175, 175, 175);
    }

    .collectionBody {
        background-color: rgb(230, 230, 230);
        box-sizing: border-box;
        padding: 15px;
    }

    .collectionsBodyArticleContainer {
        box-sizing: border-box;
        padding: 15px;
    }

    .indexesCollectionBody {
        background-color: rgb(255, 255, 255);
        width: 100%;
    }

    .indexesHeader {
        font-size: 24px;
    }

    .databasesHeaderBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(235, 235, 235);
        width: 140px;
        font-size: 9px !important;
        border-radius: 8px;
        outline: 1px solid rgb(150, 150, 150) !important;
    }

    .databasesHeaderBtnSize {
        height: 35px;
        border: none;
        font-size: 18px;
    }

    .defaultLanding {
        width: 160px;
        align-items: center;
        display: flex;
    }

    .defaultLandingItem {
        margin: 0px 5px;
    }

    .defaultLandingItemIcon {
        font-size: 16px;
    }

</style>