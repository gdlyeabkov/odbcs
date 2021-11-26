<template>
    <div>
        <Header />
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
                                23
                            </span>
                            <span class="collectionsHeaderItem">
                                COLLECTIONS:
                            </span>
                            <span class="collectionsHeaderItem">
                                50
                            </span>
                        </div>
                        <div class="collectionsHeaderContainer">
                            <span class="collectionsHeaderItem">
                                Default landing
                            </span>
                            <span class="collectionsHeaderItem">
                                VISUALIZE YOUR DATA
                            </span>
                            <span class="collectionsHeaderItem">
                                REFRESH
                            </span>
                        </div>
                    </div>
                    <div class="coolectionsBody">
                        <div class="coolectionsBodyAside">
                            <button class="btn btn-light" @click="isCreateDatabaseDialog = true">
                                + Создать базу данных
                            </button>
                            <input type="text" placeholder="Пространства имен" class="form-control" />
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
                                <div v-for="database in databases" :key="database.name" class="database" @click="switchDatabase($event, database)">
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
                                            <span class="material-icons databaseItem">
                                                delete
                                            </span>
                                        </div>
                                    </div>
                                    <div v-for="collection in collections.filter(collection => database.collections.map(collection => collection.id).includes(collection._id) && database.isOpen)" :key="collection._id" class="databaseMain collectionPreview" @mouseover="collection.isHover = true" @mouseout="collection.isHover = false">
                                        <div id="collectionTargetId" class="databaseBlock" @click="activeCollection = collection">
                                            <span id="collectionTargetId" :class="{databaseItem: true, activeDatabaseItem: activeCollection.name === collection.name }">
                                                {{
                                                    collection.name
                                                }}
                                            </span>
                                        </div>
                                        <div class="databaseBlock">
                                            <span class="material-icons databaseItem">
                                                delete
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="activeDatabase.name.length >= 1 && activeCollection.name.length <= 0" class="coolectionsBodyArticle">
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
                            <div class="coolectionsBodyArticleTable">
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Collection Name&nbsp;&nbsp;
                                    </span>
                                    <!-- <span class="link coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;myusers&nbsp;&nbsp;
                                    </span> -->
                                    <span v-for="collection in collections" :key="collection.name" class="link coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;
                                            {{
                                                '36KB'
                                            }}
                                        &nbsp;&nbsp;
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="activeDatabase.name.length >= 1 && activeCollection.name.length >= 1" class="coolectionsBodyArticle">
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
                            <div class="coolectionsBodyArticleTable">
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Collection Name&nbsp;&nbsp;
                                    </span>
                                    <!-- <span class="link coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;myusers&nbsp;&nbsp;
                                    </span> -->
                                    <span v-for="collection in collections" :key="collection.name" class="link coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
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
                                    <span v-for="collection in collections" :key="collection.name" class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;
                                            {{
                                                '36KB'
                                            }}
                                        &nbsp;&nbsp;
                                    </span>
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
                name: ''
            },
            cacher: null,
            cluster: null,
            databases: [],
            collections: [],
            isCreateDatabaseDialog: false,
            isCreateCollectionDialog: false,
            isCappedCollection: false,
            databaseName: '',
            collectionName: '',
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
        switchDatabase(event, database) {
            if (event.target.id !== 'collectionTargetId') {
                this.activeDatabase = database
                this.activeCollection.name = ''
                this.getCollections()
            }
        },
        toggleDatabase(database) {
            database.isOpen = !database.isOpen
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

            fetch(`http://localhost:4000/api/databases/create/?clusterid=${this.cluster._id}&databasename=${this.databaseName}`, {
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
        height: 500px;
    }

    .coolectionsBodyAside {
        box-sizing: border-box;
        padding: 15px;
        width: 25%;
        border-right: 1px solid rgb(200, 200, 200);
    }

    .coolectionsBodyArticle {
        width: 75%;
        box-sizing: border-box;
        padding: 15px;
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
        font-weight: bolder;
        font-size: 28px;
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
        margin-left: 25px;
    }

</style>