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
                        Сконфигурировать новое озеро данных
                    </button>
                </div>
                <div class="searchBlock">
                    <div class="searchBlockItem">
                        <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                            water
                        </span>
                        <span class="searchBlockItemElementHeader searchBlockItemElement">
                            Create a Data Lake
                        </span>
                        <span class="searchBlockItemElement">
                            Natively query and analyze data across AWS S3, Atlas Clusters and HTTP(S) Stores in-place using MQL
                        </span>
                        <button class="btn btn-success">
                            Создать озеро данных
                        </button>
                    </div>
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
                        Добавить триггер
                    </button>
                </div>
                <div class="searchBlock">
                    <div class="searchBlockItem">
                        <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                            bolt
                        </span>
                        <span class="searchBlockItemElementHeader searchBlockItemElement">
                            This application has no triggers.
                        </span>
                        <span class="searchBlockItemElement">
                            Triggers allow you to execute functions in real time based on database or scheduled events.
                        </span>
                        <button class="btn btn-success">
                            Добавить триггер
                        </button>
                        <span class="link">
                            Learn more about Triggers
                        </span>
                    </div>
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
                <div class="searchBlock">
                    <div class="searchBlockItem">
                        <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                            power
                        </span>
                        <span class="searchBlockItemElementHeader searchBlockItemElement">
                            Enable the Data API
                        </span>
                        <span class="searchBlockItemElement">
                            Access the data in your collection over fully managed and secure HTTPS Endpoints
                        </span>
                        <span class="searchBlockItemElement">
                            Select the data source(s) you would like to enable the API on
                        </span>
                        <button disabled class="createDatabaseBtn btn btn-success">
                            Включить Data API
                        </button>
                        <span class="link">
                            Learn more about the Data API
                        </span>
                    </div>
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
            <div class="article" v-else-if="activeAsideTab === 'Database Access'">
                <span>
                    GLEB'S ORG - 2021-01-28 > UNITYGAME
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Database Access
                    </span>
                </div>
                <div class="clusterTabs">
                    <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Database Users' }" @click="activeDatabaseAccessTab = 'Database Users'">
                        &nbsp;&nbsp;&nbsp;&nbsp;Database Users&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Custom Roles' }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                        &nbsp;&nbsp;&nbsp;&nbsp;Custom Roles&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
                <div v-if="activeDatabaseAccessTab === 'Database Users'">
                    <div class="createProjectRow">
                        <span>

                        </span>
                        <button @click="$router.push({ name: 'ClusterRegister' })" class="btn btn-success">
                            Добавить нового пользователя БД
                        </button>
                    </div>
                    <div class="clusterTabs">
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Database Users' }" @click="activeDatabaseAccessTab = 'Database Users'">
                            &nbsp;&nbsp;&nbsp;&nbsp;User Name&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Custom Roles' }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Authentication Method&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Custom Roles' }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                            &nbsp;&nbsp;&nbsp;&nbsp;MongoDB Roles&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Custom Roles' }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Resources&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Custom Roles' }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Actions&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <div class="clusterTabs">
                        <span :class="{ clusterTab: true, databaseUser: true }" @click="activeDatabaseAccessTab = 'Database Users'">
                            &nbsp;&nbsp;&nbsp;&nbsp;glebClusterUser&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, databaseUser: true }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                            &nbsp;&nbsp;&nbsp;&nbsp;SCRAM&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="databaseUser">readWriteAnyDatabase</span>@admin&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, databaseUser: true }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                            &nbsp;&nbsp;&nbsp;&nbsp;All Resources&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, databaseUserActions: true, databaseUserActionsSize: true }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                            <div class="input-group databaseUserActions btn btn-light">
                                <span class="material-icons input-group-text">
                                    edit
                                </span>
                                <span>
                                    EDIT
                                </span>
                            </div>
                            <div class="input-group databaseUserActions">
                                <span class="material-icons input-group-text">
                                    delete
                                </span>
                                <span>
                                    DELETE
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
                <div v-else-if="activeDatabaseAccessTab === 'Custom Roles'">
                    <div class="searchBlock">
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                people_alt
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                Create a Custom Role
                            </span>
                            <span class="searchBlockItemElement">
                                Set up custom roles in order to assign actions and customize role permission assignments for your database users.
                            </span>
                            <button class="btn btn-success">
                                Add New Custom Role
                            </button>
                            <span class="link">
                                Learn more
                            </span>
                        </div>
                    </div>
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
                </div>
                <div class="clusterTabs">
                    <span :class="{ clusterTab: true, activeNetworkAccessTab: activeNetworkAccessTab === 'IP Access List' }" @click="activeNetworkAccessTab = 'IP Access List'">
                        &nbsp;&nbsp;&nbsp;&nbsp;IP Access List&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeNetworkAccessTab: activeNetworkAccessTab === 'Peering' }" @click="activeNetworkAccessTab = 'Peering'">
                        &nbsp;&nbsp;&nbsp;&nbsp;Peering&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeNetworkAccessTab: activeNetworkAccessTab === 'Private Endpoint' }" @click="activeNetworkAccessTab = 'Private Endpoint'">
                        &nbsp;&nbsp;&nbsp;&nbsp;Private Endpoint&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
                <div v-if="activeNetworkAccessTab === 'IP Access List'">
                    <div class="createProjectRow">
                        <span>

                        </span>
                        <button @click="$router.push({ name: 'ClusterRegister' })" class="btn btn-success">
                            Добавить IP адресс
                        </button>
                    </div>
                    <div class="clusterTabs">
                        <span :class="{ clusterTab: true, activeNetworkAccessTab: activeNetworkAccessTab === 'IP Address' }" @click="activeDatabaseAccessTab = 'IP Address'">
                            &nbsp;&nbsp;&nbsp;&nbsp;IP Address&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Comment' }" @click="activeDatabaseAccessTab = 'Comment'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Comment&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Status' }" @click="activeDatabaseAccessTab = 'Status'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Status&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Actions' }" @click="activeDatabaseAccessTab = 'Actions'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Actions&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <div class="clusterTabs">
                        <span :class="{ clusterTab: true, activeNetworkAccessTab: activeNetworkAccessTab === 'IP Address' }" @click="activeDatabaseAccessTab = 'IP Address'">
                            &nbsp;&nbsp;&nbsp;&nbsp;0.0.0.0/0 (includes your current IP address)&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Comment' }" @click="activeDatabaseAccessTab = 'Comment'">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeDatabaseAccessTab: activeDatabaseAccessTab === 'Status' }" @click="activeDatabaseAccessTab = 'Status'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Active&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, databaseUserActions: true, databaseUserActionsSize: true }" @click="activeDatabaseAccessTab = 'Custom Roles'">
                            <div class="input-group databaseUserActions btn btn-light">
                                <span class="material-icons input-group-text">
                                    edit
                                </span>
                                <span>
                                    EDIT
                                </span>
                            </div>
                            <div class="input-group databaseUserActions">
                                <span class="material-icons input-group-text">
                                    delete
                                </span>
                                <span>
                                    DELETE
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
                <div v-else-if="activeNetworkAccessTab === 'Peering'">
                    <div class="searchBlock">
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                cloud
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                Create a Peering Connection
                            </span>
                            <span class="searchBlockItemElement">
                                Peer your application VPC with your Atlas VPC.
                            </span>
                            <button class="btn btn-success">
                                Add Peering Connection
                            </button>
                            <span class="link">
                                Learn more
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeNetworkAccessTab === 'Private Endpoint'">
                    <div class="privateEndpointRowBtns">
                        <button class="btn btn-light createDatabaseBtn" @click="privateEndpointTab = 'dedicatedCluster'">
                            Dedicated cluster
                        </button>
                        <button class="btn btn-light createDatabaseBtn"  @click="privateEndpointTab = 'dataLakeOnlineArchive'">
                            Data Lake/Online Archive
                        </button>
                    </div>
                    <div v-if="privateEndpointTab === 'dedicatedCluster'" class="searchBlock">
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                link
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                Create a Private Endpoint
                            </span>
                            <span class="searchBlockItemElement">
                                Configure AWS PrivateLink, Google Cloud Private Service Connect, or Azure Private Link to connect to your cluster.
                            </span>
                            <button class="btn btn-success">
                                Add Private Endpoint
                            </button>
                            <span class="link">
                                Learn more
                            </span>
                        </div>
                    </div>
                    <div v-else-if="privateEndpointTab === 'dataLakeOnlineArchive'" class="searchBlock">
                        <div  class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                link
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                Configure a Private Endpoint
                            </span>
                            <span class="searchBlockItemElement">
                                Configure AWS PrivateLink to connect to your Data Lake / Online Archive.
                            </span>
                            <div class="privateEndpointRowBtns">
                                <button class="btn btn-success">
                                    Create new endpoint
                                </button>
                                <button class="btn btn-light createDatabaseBtn">
                                    Add existing endpoint
                                </button>
                            </div>
                            <span class="link">
                                Learn more
                            </span>
                        </div>
                    </div>
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
                    <span>
                        
                    </span>
                </div>
                <div class="advancedBlock">
                    <span>
                        LDAP Authentication cannot be configured without an active dedicated cluster running MongoDB 3.6 or higher.
                    </span>
                </div>
                <div class="cmdItem">
                    <span class="cmdHeader cmdSubitem">
                        LDAP Authentication
                    </span>
                    <span class="cmdContent cmdSubitem">
                        LDAP authentication allows database users to log into dedicated (M10 or higher) Atlas clusters using credentials that are verified by a LDAP server you control. Database users can be configured in the project-level Access Manager.
                    </span>
                    <span class="cmdContent cmdSubitem advancedFooterContent">
                        Turning on this feature will increase your daily cluster pricing. Read more.
                    </span>
                </div>
                <div class="cmdItem">
                    <span class="cmdHeader cmdSubitem">
                        LDAP Authorization (LDAP Authentication required)
                    </span>
                    <span class="cmdContent cmdSubitem">
                        LDAP authorization allows database users to be managed at LDAP group level. LDAP groups can be managed in the project-level Access Manager and be assigned a specific set of privileges. All database users in an LDAP group can then authenticate to dedicated (M10 or higher) Atlas clusters with those privileges.
                    </span>
                    <span class="cmdContent cmdSubitem advancedFooterContent">
                        Turning on this feature will increase your daily cluster pricing. Read more.
                    </span>
                </div>
                <div class="cmdItem">
                    <span class="cmdHeader cmdSubitem">
                        Encryption at Rest using your Key Management
                    </span>
                    <span class="cmdContent cmdSubitem">
                        Provide your AWS Key Management Service (AWS KMS), Azure Key Vault, or Google Cloud KMS encryption key details to enable Encryption at Rest with the WiredTiger™ Encrypted Storage Engine.
                    </span>
                    <span class="cmdContent cmdSubitem advancedFooterContent">
                        Newly deployed clusters will use your encryption key by default. Pre-existing clusters will not use your encryption key until you enable them individually. This feature will increase your daily cluster pricing. Read more.
                    </span>
                </div>
                <div class="cmdItem">
                    <span class="cmdHeader cmdSubitem">
                        Database Auditing
                    </span>
                    <span class="cmdContent cmdSubitem">
                        Database auditing allows you to customize log downloads with the users, groups, and actions you want to audit.
                    </span>
                    <span class="cmdContent cmdSubitem advancedFooterContent">
                        Turning on this feature will increase your daily cluster pricing. Read more.
                    </span>
                </div>
                <div class="cmdItem">
                    <span class="cmdHeader cmdSubitem">
                        Self-managed X.509 Authentication
                    </span>
                    <span class="cmdContent cmdSubitem">
                        With self-managed X.509 authentication, you can configure Atlas to trust your public key infrastructure and issue certificates to users yourself. Read more
                    </span>
                    <span class="cmdContent cmdSubitem link">
                        Read more
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
            activeDatabaseAccessTab: 'Database Users',
            activeNetworkAccessTab: 'IP Access List',
            privateEndpointTab: 'dedicatedCluster',
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

    .searchBlockItemElementIcon {
        font-size: 48px;
    }

    .searchBlockItemElementHeader {
        font-weight: bolder;
        font-size: 18px;
    }

    .createDatabaseBtn {
        font-weight: bolder;
        border: 1px solid rgb(200, 200, 200);
        margin: 10px 0px;
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

    .advancedFooterContent {
        font-weight: bolder;
    }

    .advancedBlock {
        box-sizing: border-box;
        padding: 0px 25px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        border: 1px solid rgb(210, 150, 130);
        background-color: rgb(250, 220, 230);
        width: 85%;
        height: 50px;
        margin: auto;
    }

    .clusterTabs {
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
        display: flex;
        margin: 15px 0px;
    }

    .clusterTab {
        cursor: pointer;
    }
    
    .activeDatabaseAccessTab {
        font-weight: bolder;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: rgb(0, 150, 0);
        text-decoration-thickness: 3px;
    }

    .activeNetworkAccessTab {
        font-weight: bolder;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: rgb(0, 150, 0);
        text-decoration-thickness: 3px;
    }


    .databaseUser {
        font-weight: bolder;
    }

    .databaseUserActions {
        display: flex;
        align-items: center;
        width: 150px;
    }

    .databaseUserActionsSize {
        width: 500px;
        height: 35px;
    }

    .privateEndpointRowBtns {
        display: flex;
    }

</style>