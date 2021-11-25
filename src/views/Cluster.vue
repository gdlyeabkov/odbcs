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
                    <span :class="{ clusterTab, activeClusterTab: activeClusterTab === 'Overview' }" @click="activeClusterTab = 'Overview'">
                        &nbsp;&nbsp;Overview&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab, activeClusterTab: activeClusterTab === 'Real Time' }" @click="activeClusterTab = 'Real Time'">
                        &nbsp;&nbsp;Real Time&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab, activeClusterTab: activeClusterTab === 'Metrics' }" @click="activeClusterTab = 'Metrics'">
                        &nbsp;&nbsp;Metrics&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab, activeClusterTab: activeClusterTab === 'Collections' }" @click="activeClusterTab = 'Collections'">
                        &nbsp;&nbsp;Collections&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab, activeClusterTab: activeClusterTab === 'Search' }" @click="activeClusterTab = 'Search'">
                        &nbsp;&nbsp;Search&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab, activeClusterTab: activeClusterTab === 'Profiler' }" @click="activeClusterTab = 'Profiler'">
                        &nbsp;&nbsp;Profiler&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab, activeClusterTab: activeClusterTab === 'Performance Advisor' }" @click="activeClusterTab = 'Performance Advisor'">
                        &nbsp;&nbsp;Performance Advisor&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab, activeClusterTab: activeClusterTab === 'Online Archive' }" @click="activeClusterTab = 'Online Archive'">
                        &nbsp;&nbsp;Online Archive&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab, activeClusterTab: activeClusterTab === 'Command Line Tools' }" @click="activeClusterTab = 'Command Line Tools'">
                        &nbsp;&nbsp;Command Line Tools&nbsp;&nbsp;
                    </span>
                </div>
                <div class="input-group w-25">
                    <input type="text" placeholder="Найти развертывание базы данных..." class="form-control w-25" />
                    <span class="material-icons input-group-text">
                        search
                    </span>
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
            activeClusterTab: 'Overview'
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

    .activeClusterTab {
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: rgb(0, 150, 0);
        text-decoration-thickness: 3px;
    }

</style>