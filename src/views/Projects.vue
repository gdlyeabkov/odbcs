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
                    Projects
                </span>
                <span class="asideItem">
                    Alerts 0
                </span>
                <span class="asideItem">
                    Activity Feed
                </span>
                <span class="asideItem">
                    Settings
                </span>
                <span class="asideItem">
                    Access Manager
                </span>
                <span class="asideItem">
                    Billing
                </span>
                <span class="asideItem">
                    Support
                </span>
                <span class="asideItem">
                    Live Migration
                </span>
            </div>
            <div class="article">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Projects
                    </span>
                    <button class="btn btn-success">
                        New project
                    </button>
                </div>
                <div class="input-group w-25">
                    <input type="text" placeholder="Найти проекты..." class="form-control w-25" />
                    <span class="material-icons input-group-text">
                        search
                    </span>
                </div>
                <div class="projectsTable">
                    <div class="projectsTableColumn">
                        <span class="projectsTableColumnHeader projectTableCell">
                            Project Name
                        </span>
                        <span class="projectTableCell link">
                            Project Name
                        </span>
                        <span class="projectTableCell link">
                            Project Name
                        </span>
                    </div>
                    <div class="projectsTableColumn">
                        <span class="projectsTableColumnHeader projectTableCell">
                            Clusters
                        </span>
                        <span class="projectTableCell">
                            1 Clusters
                        </span>
                        <span class="projectTableCell">
                            1 Clusters
                        </span>
                    </div>
                    <div class="projectsTableColumn">
                        <span class="projectsTableColumnHeader projectTableCell">
                            Users
                        </span>
                        <span class="projectTableCell link">
                            1 User
                        </span>
                        <span class="projectTableCell link">
                            1 User
                        </span>
                    </div>
                    <div class="projectsTableColumn">
                        <span class="projectsTableColumnHeader projectTableCell">
                            Teams
                        </span>
                        <span class="projectTableCell link">
                            0 Teams
                        </span>
                        <span class="projectTableCell link">
                            0 Teams
                        </span>
                    </div>
                    <div class="projectsTableColumn">
                        <span class="projectsTableColumnHeader projectTableCell">
                            Alerts
                        </span>
                        <span class="projectTableCell link">
                            0 Alerts
                        </span>
                        <span class="projectTableCell link">
                            0 Alerts
                        </span>
                    </div>
                    <div class="projectsTableColumn">
                        <span class="projectsTableColumnHeader projectTableCell">
                            Actions
                        </span>
                        <div class="projectTableCell actionsBtns">
                            <span class="material-icons btn btn-light actionsBtn">
                                more_horiz
                            </span>
                            <span class="material-icons btn btn-light actionsBtn">
                                delete
                            </span>
                        </div>
                        <div class="projectTableCell actionsBtns">
                            <span class="material-icons btn btn-light actionsBtn">
                                more_horiz
                            </span>
                            <span class="material-icons btn btn-light actionsBtn">
                                delete
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

</style>