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
                        ORGANIZATION
                    </span>
                </div>
                <span :class="{asideItem: true, activeAsideItem: activeAsideTab === 'Databases'}" @click="activeAsideTab = 'Databases'">
                    Databases
                </span>
                <span :class="{asideItem: true, activeAsideItem: activeAsideTab === 'Data Lake'}" @click="activeAsideTab = 'Data Lake'">
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
                <span :class="{asideItem: true, activeAsideItem: activeAsideTab === 'Triggers'}" @click="activeAsideTab = 'Triggers'">
                    Triggers
                </span>
                <span :class="{asideItem: true, activeAsideItem: activeAsideTab === 'Data API'}" @click="activeAsideTab = 'Data API'">
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
                <span :class="{asideItem: true, activeAsideItem: activeAsideTab === 'Database Access'}" @click="activeAsideTab = 'Database Access'">
                    Database Access
                </span>
                <span :class="{asideItem: true, activeAsideItem: activeAsideTab === 'Network Access'}" @click="activeAsideTab = 'Network Access'">
                    Network Access
                </span>
                <span :class="{asideItem: true, activeAsideItem: activeAsideTab === 'Advanced'}" @click="activeAsideTab = 'Advanced'">
                    Advanced
                </span>
            </div>
            <div class="article" v-if="activeAsideTab === 'Databases'">
                <span>
                    GLEB'S ORG - 2021-01-28 > UNITYGAME
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Database Deployments
                    </span>
                    <button @click="$router.push({ name: 'ClusterRegister' })" class="btn btn-success">
                        Создать
                    </button>
                </div>
                <div class="input-group w-25">
                    <input type="text" placeholder="Найти развертывание базы данных..." class="form-control w-25" />
                    <span class="material-icons input-group-text">
                        search
                    </span>
                </div>
                <div v-if="clusters.length >= 1">
                    <div v-for="cluster in clusters" :key="cluster.name" class="clusterInfo">
                        <div class="clusterInfoHeader">
                            <div class="clusterInfoHeaderItem">
                                <div class="material-icons clusterInfoHeaderItemElement clusterInfoHeaderItemElementStatus">
                                    
                                </div>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.name
                                    }}
                                </span>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    Connect
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    View Monitoring
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement" @click="$router.push({ name: 'Cluster', query: { clusterid: cluster._id } })">
                                    Browse Collections
                                </button>
                                <button class="material-icons btn btn-primary clusterInfoHeaderItemElement">
                                    more_horiz
                                </button>
                            </div>
                            <div class="clusterInfoHeaderItem">
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.free ?
                                            'Бесплатный'
                                        :
                                            'Платный'
                                    }}
                                </span>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.shared ?
                                            'Общий'
                                        :
                                            'Частный' 
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="clusterInfoBody">
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Your cluster has been automatically paused due to prolonged inactivity.
                            </span>
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Resume your cluster to connect to it and to gain access to your data.
                            </span>
                            <button class="btn btn-success clusterInfoBodyItem">
                                Resume
                            </button>
                        </div>
                        <div class="clusterInfoFooter">
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    VERSION
                                </span>
                                <span>
                                    {{
                                        cluster.version
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    REGION
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.region
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    CLUSTER TIER
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.clusterTier
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    TYPE
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.type
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    BACKUPS
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.backups
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    LINKED REALM APP
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.linkedRealmApp
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    ATLAS SEARCH
                                </span>
                                <span>
                                    {{
                                        cluster.atlasSearch
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span>
                        Вы еще ни создали ни 1 кластер
                    </span>
                </div>
                <div class="projectsFooter">
                    <span>
                        System StatusAll GoodLast Login212.7.233.236
                    </span>
                    <span>
                        ©2021 MongoDB, Inc.StatusTermsPrivacyAtlas BlogContact Sales
                    </span>
                </div>
            </div>
            <div class="article" v-else-if="activeAsideTab === 'Data Lake'">
                <span>
                    GLEB'S ORG - 2021-01-28 > UNITYGAME
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Data Lake
                    </span>
                    <button @click="$router.push({ name: 'ClusterRegister' })" class="btn btn-success">
                        Создать
                    </button>
                </div>
                <div class="input-group w-25">
                    <input type="text" placeholder="Найти развертывание базы данных..." class="form-control w-25" />
                    <span class="material-icons input-group-text">
                        search
                    </span>
                </div>
                <div v-if="clusters.length >= 1">
                    <div v-for="cluster in clusters" :key="cluster.name" class="clusterInfo">
                        <div class="clusterInfoHeader">
                            <div class="clusterInfoHeaderItem">
                                <div class="material-icons clusterInfoHeaderItemElement clusterInfoHeaderItemElementStatus">
                                    
                                </div>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.name
                                    }}
                                </span>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    Connect
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    View Monitoring
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement" @click="$router.push({ name: 'Cluster', query: { clusterid: cluster._id } })">
                                    Browse Collections
                                </button>
                                <button class="material-icons btn btn-primary clusterInfoHeaderItemElement">
                                    more_horiz
                                </button>
                            </div>
                            <div class="clusterInfoHeaderItem">
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.free ?
                                            'Бесплатный'
                                        :
                                            'Платный'
                                    }}
                                </span>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.shared ?
                                            'Общий'
                                        :
                                            'Частный' 
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="clusterInfoBody">
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Your cluster has been automatically paused due to prolonged inactivity.
                            </span>
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Resume your cluster to connect to it and to gain access to your data.
                            </span>
                            <button class="btn btn-success clusterInfoBodyItem">
                                Resume
                            </button>
                        </div>
                        <div class="clusterInfoFooter">
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    VERSION
                                </span>
                                <span>
                                    {{
                                        cluster.version
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    REGION
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.region
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    CLUSTER TIER
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.clusterTier
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    TYPE
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.type
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    BACKUPS
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.backups
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    LINKED REALM APP
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.linkedRealmApp
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    ATLAS SEARCH
                                </span>
                                <span>
                                    {{
                                        cluster.atlasSearch
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span>
                        Вы еще ни создали ни 1 кластер
                    </span>
                </div>
                <div class="projectsFooter">
                    <span>
                        System StatusAll GoodLast Login212.7.233.236
                    </span>
                    <span>
                        ©2021 MongoDB, Inc.StatusTermsPrivacyAtlas BlogContact Sales
                    </span>
                </div>
            </div>
            <div class="article" v-else-if="activeAsideTab === 'Triggers'">
                <span>
                    GLEB'S ORG - 2021-01-28 > UNITYGAME
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Triggers
                    </span>
                    <button @click="$router.push({ name: 'ClusterRegister' })" class="btn btn-success">
                        Создать
                    </button>
                </div>
                <div class="input-group w-25">
                    <input type="text" placeholder="Найти развертывание базы данных..." class="form-control w-25" />
                    <span class="material-icons input-group-text">
                        search
                    </span>
                </div>
                <div v-if="clusters.length >= 1">
                    <div v-for="cluster in clusters" :key="cluster.name" class="clusterInfo">
                        <div class="clusterInfoHeader">
                            <div class="clusterInfoHeaderItem">
                                <div class="material-icons clusterInfoHeaderItemElement clusterInfoHeaderItemElementStatus">
                                    
                                </div>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.name
                                    }}
                                </span>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    Connect
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    View Monitoring
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement" @click="$router.push({ name: 'Cluster', query: { clusterid: cluster._id } })">
                                    Browse Collections
                                </button>
                                <button class="material-icons btn btn-primary clusterInfoHeaderItemElement">
                                    more_horiz
                                </button>
                            </div>
                            <div class="clusterInfoHeaderItem">
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.free ?
                                            'Бесплатный'
                                        :
                                            'Платный'
                                    }}
                                </span>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.shared ?
                                            'Общий'
                                        :
                                            'Частный' 
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="clusterInfoBody">
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Your cluster has been automatically paused due to prolonged inactivity.
                            </span>
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Resume your cluster to connect to it and to gain access to your data.
                            </span>
                            <button class="btn btn-success clusterInfoBodyItem">
                                Resume
                            </button>
                        </div>
                        <div class="clusterInfoFooter">
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    VERSION
                                </span>
                                <span>
                                    {{
                                        cluster.version
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    REGION
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.region
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    CLUSTER TIER
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.clusterTier
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    TYPE
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.type
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    BACKUPS
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.backups
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    LINKED REALM APP
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.linkedRealmApp
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    ATLAS SEARCH
                                </span>
                                <span>
                                    {{
                                        cluster.atlasSearch
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span>
                        Вы еще ни создали ни 1 кластер
                    </span>
                </div>
                <div class="projectsFooter">
                    <span>
                        System StatusAll GoodLast Login212.7.233.236
                    </span>
                    <span>
                        ©2021 MongoDB, Inc.StatusTermsPrivacyAtlas BlogContact Sales
                    </span>
                </div>
            </div>
            <div class="article" v-else-if="activeAsideTab === 'Data API'">
                <span>
                    GLEB'S ORG - 2021-01-28 > UNITYGAME
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Data API
                    </span>
                    <button @click="$router.push({ name: 'ClusterRegister' })" class="btn btn-success">
                        Создать
                    </button>
                </div>
                <div class="input-group w-25">
                    <input type="text" placeholder="Найти развертывание базы данных..." class="form-control w-25" />
                    <span class="material-icons input-group-text">
                        search
                    </span>
                </div>
                <div v-if="clusters.length >= 1">
                    <div v-for="cluster in clusters" :key="cluster.name" class="clusterInfo">
                        <div class="clusterInfoHeader">
                            <div class="clusterInfoHeaderItem">
                                <div class="material-icons clusterInfoHeaderItemElement clusterInfoHeaderItemElementStatus">
                                    
                                </div>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.name
                                    }}
                                </span>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    Connect
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    View Monitoring
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement" @click="$router.push({ name: 'Cluster', query: { clusterid: cluster._id } })">
                                    Browse Collections
                                </button>
                                <button class="material-icons btn btn-primary clusterInfoHeaderItemElement">
                                    more_horiz
                                </button>
                            </div>
                            <div class="clusterInfoHeaderItem">
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.free ?
                                            'Бесплатный'
                                        :
                                            'Платный'
                                    }}
                                </span>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.shared ?
                                            'Общий'
                                        :
                                            'Частный' 
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="clusterInfoBody">
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Your cluster has been automatically paused due to prolonged inactivity.
                            </span>
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Resume your cluster to connect to it and to gain access to your data.
                            </span>
                            <button class="btn btn-success clusterInfoBodyItem">
                                Resume
                            </button>
                        </div>
                        <div class="clusterInfoFooter">
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    VERSION
                                </span>
                                <span>
                                    {{
                                        cluster.version
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    REGION
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.region
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    CLUSTER TIER
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.clusterTier
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    TYPE
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.type
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    BACKUPS
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.backups
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    LINKED REALM APP
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.linkedRealmApp
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    ATLAS SEARCH
                                </span>
                                <span>
                                    {{
                                        cluster.atlasSearch
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span>
                        Вы еще ни создали ни 1 кластер
                    </span>
                </div>
                <div class="projectsFooter">
                    <span>
                        System StatusAll GoodLast Login212.7.233.236
                    </span>
                    <span>
                        ©2021 MongoDB, Inc.StatusTermsPrivacyAtlas BlogContact Sales
                    </span>
                </div>
            </div>
            
            <div class="article" v-else-if="activeAsideTab === 'Network Access'">
                <span>
                    GLEB'S ORG - 2021-01-28 > UNITYGAME
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Network Access
                    </span>
                    <button @click="$router.push({ name: 'ClusterRegister' })" class="btn btn-success">
                        Создать
                    </button>
                </div>
                <div class="input-group w-25">
                    <input type="text" placeholder="Найти развертывание базы данных..." class="form-control w-25" />
                    <span class="material-icons input-group-text">
                        search
                    </span>
                </div>
                <div v-if="clusters.length >= 1">
                    <div v-for="cluster in clusters" :key="cluster.name" class="clusterInfo">
                        <div class="clusterInfoHeader">
                            <div class="clusterInfoHeaderItem">
                                <div class="material-icons clusterInfoHeaderItemElement clusterInfoHeaderItemElementStatus">
                                    
                                </div>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.name
                                    }}
                                </span>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    Connect
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    View Monitoring
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement" @click="$router.push({ name: 'Cluster', query: { clusterid: cluster._id } })">
                                    Browse Collections
                                </button>
                                <button class="material-icons btn btn-primary clusterInfoHeaderItemElement">
                                    more_horiz
                                </button>
                            </div>
                            <div class="clusterInfoHeaderItem">
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.free ?
                                            'Бесплатный'
                                        :
                                            'Платный'
                                    }}
                                </span>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.shared ?
                                            'Общий'
                                        :
                                            'Частный' 
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="clusterInfoBody">
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Your cluster has been automatically paused due to prolonged inactivity.
                            </span>
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Resume your cluster to connect to it and to gain access to your data.
                            </span>
                            <button class="btn btn-success clusterInfoBodyItem">
                                Resume
                            </button>
                        </div>
                        <div class="clusterInfoFooter">
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    VERSION
                                </span>
                                <span>
                                    {{
                                        cluster.version
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    REGION
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.region
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    CLUSTER TIER
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.clusterTier
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    TYPE
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.type
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    BACKUPS
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.backups
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    LINKED REALM APP
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.linkedRealmApp
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    ATLAS SEARCH
                                </span>
                                <span>
                                    {{
                                        cluster.atlasSearch
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span>
                        Вы еще ни создали ни 1 кластер
                    </span>
                </div>
                <div class="projectsFooter">
                    <span>
                        System StatusAll GoodLast Login212.7.233.236
                    </span>
                    <span>
                        ©2021 MongoDB, Inc.StatusTermsPrivacyAtlas BlogContact Sales
                    </span>
                </div>
            </div>
            <div class="article" v-else-if="activeAsideTab === 'Advanced'">
                <span>
                    GLEB'S ORG - 2021-01-28 > UNITYGAME
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Advanced
                    </span>
                    <button @click="$router.push({ name: 'ClusterRegister' })" class="btn btn-success">
                        Создать
                    </button>
                </div>
                <div class="input-group w-25">
                    <input type="text" placeholder="Найти развертывание базы данных..." class="form-control w-25" />
                    <span class="material-icons input-group-text">
                        search
                    </span>
                </div>
                <div v-if="clusters.length >= 1">
                    <div v-for="cluster in clusters" :key="cluster.name" class="clusterInfo">
                        <div class="clusterInfoHeader">
                            <div class="clusterInfoHeaderItem">
                                <div class="material-icons clusterInfoHeaderItemElement clusterInfoHeaderItemElementStatus">
                                    
                                </div>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.name
                                    }}
                                </span>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    Connect
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement">
                                    View Monitoring
                                </button>
                                <button class="btn btn-primary clusterInfoHeaderItemElement" @click="$router.push({ name: 'Cluster', query: { clusterid: cluster._id } })">
                                    Browse Collections
                                </button>
                                <button class="material-icons btn btn-primary clusterInfoHeaderItemElement">
                                    more_horiz
                                </button>
                            </div>
                            <div class="clusterInfoHeaderItem">
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.free ?
                                            'Бесплатный'
                                        :
                                            'Платный'
                                    }}
                                </span>
                                <span class="clusterInfoHeaderItemElement">
                                    {{
                                        cluster.shared ?
                                            'Общий'
                                        :
                                            'Частный' 
                                    }}
                                </span>
                            </div>
                        </div>
                        <div class="clusterInfoBody">
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Your cluster has been automatically paused due to prolonged inactivity.
                            </span>
                            <span class="clusterInfoBodyItem clusterInfoBodyItemContent">
                                Resume your cluster to connect to it and to gain access to your data.
                            </span>
                            <button class="btn btn-success clusterInfoBodyItem">
                                Resume
                            </button>
                        </div>
                        <div class="clusterInfoFooter">
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    VERSION
                                </span>
                                <span>
                                    {{
                                        cluster.version
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    REGION
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.region
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    CLUSTER TIER
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.clusterTier
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    TYPE
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.type
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    BACKUPS
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.backups
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    LINKED REALM APP
                                </span>
                                <span class="clusterInfoFooterSubitem">
                                    {{
                                        cluster.linkedRealmApp
                                    }}
                                </span>
                            </div>
                            <div class="clusterInfoFooterItem">
                                <span class="clusterInfoFooterSubitem">
                                    ATLAS SEARCH
                                </span>
                                <span>
                                    {{
                                        cluster.atlasSearch
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span>
                        Вы еще ни создали ни 1 кластер
                    </span>
                </div>
                <div class="projectsFooter">
                    <span>
                        System StatusAll GoodLast Login212.7.233.236
                    </span>
                    <span>
                        ©2021 MongoDB, Inc.StatusTermsPrivacyAtlas BlogContact Sales
                    </span>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Projects',
    data() {
        return {
            cacher: {
                clusters: []
            },
            clusters: [],
            activeAsideTab: 'Databases',
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
                    
                    fetch(`http://localhost:4000/api/clusters/all/?cacheremail=${this.cacher.email}`, {
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
                            alert('Кластеры нашел')
                            this.cacher = JSON.parse(result).cacher
                            this.clusters = JSON.parse(result).clusters
                        }
                    })      

                }
            })
            
        })

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

    .activeAsideItem {
        background-color: rgba(100, 255, 255, 0.2);
        font-weight: bolder;
        border-left: 4px solid rgba(100, 200, 200, 0.7);
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
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
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

    .projectsFooter {
        border-top: 1px solid rgb(215, 215, 215);
        box-sizing: border-box;
        padding: 10px;
        font-size: 12px;
        color: rgb(165, 165, 165);
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    .clusterInfo {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 15px;
        margin: 30px 0px;
        border-radius: 8px;
        box-shadow: 0px 0px 5px rgb(200, 200, 200);
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

    .clusterInfoHeaderItemElementStatus {
        border-radius: 100%;
        width: 15px;
        height: 15px;
        background-color: rgb(0, 150, 0);
    }

</style>