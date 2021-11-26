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
                        Cluster0
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
                        <span class="material-icons">
                            timer
                        </span>
                        <span>
                            Gain insight into your database
                        </span>
                        <span>
                            Observe real-time metrics, identify slow queries, and view hot collections on dedicated clusters.
                        </span>
                        <span>
                            Currently available for M10 or higher clusters
                        </span>
                    </div>
                    <div class="realTimeItem">
                        <span>
                            Upgrade your cluster to unlock Real-Time Metrics and
                        </span>
                        <span>
                            Dedicated RAM, storage, vCPU
                        </span>
                        <span>
                            Auto-scaling storage and tier
                        </span>
                        <span>
                            Cloud backups
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
                            <button class="btn btn-light">
                                + Create Database
                            </button>
                            <input type="text" placeholder="Пространства имен" class="form-control" />
                            <div class="databases">
                                <div class="database">
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
                                </div>
                            </div>
                        </div>
                        <div class="coolectionsBodyArticle">
                            <span class="coolectionsBodyArticleHeader">
                                abtestreal
                            </span>
                            <div class="coolectionsBodyArticleInfo">
                                <div>
                                    <span>
                                        DATABASE SIZE: 666B
                                    </span>
                                    <span>
                                        INDEX SIZE: 36KB
                                    </span>
                                    <span>
                                        TOTAL COLLECTIONS: 1
                                    </span>
                                </div>
                                <button class="btn btn-success">
                                    CREATE COLLECTION
                                </button>
                            </div>
                            <div class="coolectionsBodyArticleTable">
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Collection Name&nbsp;&nbsp;
                                    </span>
                                    <span class="link coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;myusers&nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Documents&nbsp;&nbsp;
                                    </span>
                                    <span class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;6&nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Documents Size&nbsp;&nbsp;
                                    </span>
                                    <span class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;666B&nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Documents Avg&nbsp;&nbsp;
                                    </span>
                                    <span class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;111B&nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Indexes&nbsp;&nbsp;
                                    </span>
                                    <span class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;1&nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Index Size&nbsp;&nbsp;
                                    </span>
                                    <span class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;36KB&nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="coolectionsBodyArticleTableColumn">
                                    <span class="coolectionsBodyArticleTableColumnHeader coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;Index Avg&nbsp;&nbsp;
                                    </span>
                                    <span class="coolectionsBodyArticleTableColumnItem">
                                        &nbsp;&nbsp;36KB&nbsp;&nbsp;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Search'">
                    <span>
                        Make your data more discoverable with Atlas Search
                    </span>
                    <span>
                        Create search indexes and use MongoDB aggregation pipeline to get relevant results.
                    </span>
                    <div class="searchBlock">
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement">
                                search
                            </span>
                            <span class="searchBlockItemElement">
                                Autocomplete
                            </span>
                            <span class="searchBlockItemElement">
                                Suggest common search results as users type
                            </span>
                        </div>
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement">
                                search
                            </span>
                            <span class="searchBlockItemElement">
                                Rich Query DSL
                            </span>
                            <span class="searchBlockItemElement">
                                Search across different data types and languages
                            </span>
                            <button class="btn btn-success searchBlockItemElement">
                                Create Search Index
                            </button>
                            <span class="searchBlockItemElement">
                                Learn more in Docs and Tutorials 
                            </span>
                        </div>
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement">
                                search
                            </span>
                            <span class="searchBlockItemElement">
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
                        <span class="material-icons">
                            timer
                        </span>
                        <span>
                            Gain insight into your database
                        </span>
                        <span>
                            Observe real-time metrics, identify slow queries, and view hot collections on dedicated clusters.
                        </span>
                        <span>
                            Currently available for M10 or higher clusters
                        </span>
                    </div>
                    <div class="realTimeItem">
                        <span>
                            Upgrade your cluster to unlock Real-Time Metrics and
                        </span>
                        <span>
                            Dedicated RAM, storage, vCPU
                        </span>
                        <span>
                            Auto-scaling storage and tier
                        </span>
                        <span>
                            Cloud backups
                        </span>
                        <button class="btn btn-success">
                            Upgrade your Cluster
                        </button>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Performance Advisor'" class="realTime" >
                    <div class="realTimeItem">
                        <span class="material-icons">
                            timer
                        </span>
                        <span>
                            Gain insight into your database
                        </span>
                        <span>
                            Observe real-time metrics, identify slow queries, and view hot collections on dedicated clusters.
                        </span>
                        <span>
                            Currently available for M10 or higher clusters
                        </span>
                    </div>
                    <div class="realTimeItem">
                        <span>
                            Upgrade your cluster to unlock Real-Time Metrics and
                        </span>
                        <span>
                            Dedicated RAM, storage, vCPU
                        </span>
                        <span>
                            Auto-scaling storage and tier
                        </span>
                        <span>
                            Cloud backups
                        </span>
                        <button class="btn btn-success">
                            Upgrade your Cluster
                        </button>
                    </div>
                </div>
                <div v-else-if="activeClusterTab === 'Online Archive'" class="realTime" >
                    <div class="realTimeItem">
                        <span class="material-icons">
                            timer
                        </span>
                        <span>
                            Gain insight into your database
                        </span>
                        <span>
                            Observe real-time metrics, identify slow queries, and view hot collections on dedicated clusters.
                        </span>
                        <span>
                            Currently available for M10 or higher clusters
                        </span>
                    </div>
                    <div class="realTimeItem">
                        <span>
                            Upgrade your cluster to unlock Real-Time Metrics and
                        </span>
                        <span>
                            Dedicated RAM, storage, vCPU
                        </span>
                        <span>
                            Auto-scaling storage and tier
                        </span>
                        <span>
                            Cloud backups
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
                </div>
                <div class="clsterInfo">
                    <div class="clusterInfoHeader">
                        <div class="clusterInfoHeaderItem">
                            <span class="material-icons clusterInfoHeaderItemElement">
                                pending
                            </span>
                            <span class="clusterInfoHeaderItemElement">
                                Cluster0
                            </span>
                            <button class="btn btn-primary clusterInfoHeaderItemElement">
                                Connect
                            </button>
                            <button class="btn btn-primary clusterInfoHeaderItemElement">
                                View Monitoring
                            </button>
                            <button class="btn btn-primary clusterInfoHeaderItemElement">
                                Browse Collections
                            </button>
                            <button class="material-icons btn btn-primary clusterInfoHeaderItemElement">
                                more_horiz
                            </button>
                        </div>
                        <div class="clusterInfoHeaderItem">
                            <span class="clusterInfoHeaderItemElement">
                                Free
                            </span>
                            <span class="clusterInfoHeaderItemElement">
                                Shared
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
                                4.4.10
                            </span>
                        </div>
                        <div class="clusterInfoFooterItem">
                            <span class="clusterInfoFooterSubitem">
                                REGION
                            </span>
                            <span class="clusterInfoFooterSubitem">
                                AWS / Frankfurt (eu-central-1)
                            </span>
                        </div>
                        <div class="clusterInfoFooterItem">
                            <span class="clusterInfoFooterSubitem">
                                CLUSTER TIER
                            </span>
                            <span class="clusterInfoFooterSubitem">
                                M0 Sandbox (General)
                            </span>
                        </div>
                        <div class="clusterInfoFooterItem">
                            <span class="clusterInfoFooterSubitem">
                                TYPE
                            </span>
                            <span class="clusterInfoFooterSubitem">
                                Replica Set - 3 nodes
                            </span>
                        </div>
                        <div class="clusterInfoFooterItem">
                            <span class="clusterInfoFooterSubitem">
                                BACKUPS
                            </span>
                            <span class="clusterInfoFooterSubitem">
                                Inactive
                            </span>
                        </div>
                        <div class="clusterInfoFooterItem">
                            <span class="clusterInfoFooterSubitem">
                                LINKED REALM APP
                            </span>
                            <span class="clusterInfoFooterSubitem">
                                None Linked
                            </span>
                        </div>
                        <div class="clusterInfoFooterItem">
                            <span class="clusterInfoFooterSubitem">
                                ATLAS SEARCH
                            </span>
                            <span>
                                Create Index
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
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Projects',
    data() {
        return {
            activeClusterTab: 'Overview',
            activeDatabase: 'database_name',
            activeCollection: 'collection_name',
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
        width: 65%;
        height: 300px;
        margin: 50px auto;
        background-color: rgb(255, 255, 255);
        display: flex;
        box-sizing: border-box;
        padding: 25px;
    }

    .realTimeItem {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        width: 25%;
        border-right: 1px solid rgb(200, 200, 200);
    }

    .coolectionsBodyArticle {
        width: 75%;
    }

    .databases {
        display: flex;
        flex-direction: column;
    }

    .database {
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
        width: 125px;
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

</style>