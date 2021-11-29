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
                <span :class="{asideItem: true, activeAsideItem: projectsTab === 'Projects'}" @click="projectsTab = 'Projects'">
                    Projects
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectsTab === 'Alerts'}" @click="projectsTab = 'Alerts'">
                    Alerts 0
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectsTab === 'Activity Feed'}" @click="projectsTab = 'Activity Feed'">
                    Activity Feed
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectsTab === 'Settings'}" @click="projectsTab = 'Settings'">
                    Settings
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectsTab === 'Access Manager'}" @click="projectsTab = 'Access Manager'">
                    Access Manager
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectsTab === 'Billing'}" @click="projectsTab = 'Billing'">
                    Billing
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectsTab === 'Support'}" @click="projectsTab = 'Support'">
                    Support
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectsTab === 'Live Migration'}" @click="projectsTab = 'Live Migration'">
                    Live Migration
                </span>
            </div>
            <div class="article" v-if="projectsTab === 'Projects'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Projects
                    </span>
                    <button class="btn btn-success" @click="projectsTab = 'New Project'">
                        New project
                    </button>
                </div>
                <div v-if="projects.length >= 1">
                    <div class="input-group w-25">
                        <input v-model="keywords" type="text" placeholder="Найти проекты..." class="form-control w-25" />
                        <span class="material-icons input-group-text">
                            search
                        </span>
                    </div>
                    <div class="projectsTable">
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Project Name
                            </span>
                            <!-- <span class="projectTableCell link">
                                Project Name
                            </span>
                            <span class="projectTableCell link">
                                Project Name
                            </span> -->
                            <span v-for="project in projects.filter(project => project.name.toLowerCase().includes(keywords.toLowerCase()))" :key="project._id" class="projectTableCell link" @click="$router.push({ name: 'Home', query: { 'projectname': project.name } })">
                                {{
                                    project.name
                                }}
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Clusters
                            </span>
                            <!-- <span class="projectTableCell">
                                1 Clusters
                            </span>
                            <span class="projectTableCell">
                                1 Clusters
                            </span> -->
                            <span v-for="project in projects.filter(project => project.name.toLowerCase().includes(keywords.toLowerCase()))" :key="project._id" class="projectTableCell link">
                                {{
                                    `${project.clusters.length} Clusters`
                                }}
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Users
                            </span>
                            <!-- <span class="projectTableCell link">
                                1 User
                            </span>
                            <span class="projectTableCell link">
                                1 User
                            </span> -->
                            <span v-for="project in projects.filter(project => project.name.toLowerCase().includes(keywords.toLowerCase()))" :key="project._id" class="projectTableCell link">
                                {{
                                    `${project.members.length} User${project.members.length >= 2 ? 's' : ''}`
                                }}
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Teams
                            </span>
                            <!-- <span class="projectTableCell link">
                                0 Teams
                            </span>
                            <span class="projectTableCell link">
                                0 Teams
                            </span> -->
                            <span v-for="project in projects.filter(project => project.name.toLowerCase().includes(keywords.toLowerCase()))" :key="project._id" class="projectTableCell link">
                                {{
                                    `${project.members.length >= 2 ? 1 : 0} Teams`
                                }}
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Alerts
                            </span>
                            <!-- <span class="projectTableCell link">
                                0 Alerts
                            </span>
                            <span class="projectTableCell link">
                                0 Alerts
                            </span> -->
                            <span v-for="project in projects.filter(project => project.name.toLowerCase().includes(keywords.toLowerCase()))" :key="project._id" class="projectTableCell link">
                                {{
                                    '0 Alerts'
                                }}
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Actions
                            </span>
                            <!-- <div class="projectTableCell actionsBtns">
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
                            </div> -->
                            <span v-for="(project, projectIdx) in projects.filter(project => project.name.toLowerCase().includes(keywords.toLowerCase()))" :key="project._id" class="projectTableCell link">
                                <div class="projectTableCell actionsBtns">
                                    <span class="material-icons btn btn-light actionsBtn" @click="toggleProjectContextMenu(projectIdx)">
                                        more_horiz
                                    </span>
                                    <span class="material-icons btn btn-light actionsBtn" @click="deleteProject(project)">
                                        delete
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span>
                        Вы не создали еще ни 1 проект
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
            <div class="article" v-else-if="projectsTab === 'Alerts'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Organization Alerts
                    </span>
                    <span>

                    </span>
                </div>
                <div class="createProjectRow">
                    <div class="clusterTabs">
                        <span :class="{ clusterTab: true, activeAlertsTab: activeAlertsTab === 'All Alerts' }" @click="activeAlertsTab = 'All Alerts'">
                            &nbsp;&nbsp;&nbsp;&nbsp;All Alerts&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeAlertsTab: activeAlertsTab === 'Alert Settings' }" @click="activeAlertsTab = 'Alert Settings'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Alert Settings&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <button class="btn btn-success">
                        Add Alert
                    </button>
                </div>
                <div v-if="activeAlertsTab === 'All Alerts'">
                    <div class="projectsTable">
                        <div class="projectsTableColumn">
                            <input type="checkbox" class="projectsTableColumnHeader projectTableCell" />
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Alert Description
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Timestamps
                            </span>
                        </div>
                    </div>
                    <div class="searchBlock">
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                notifications
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                No organization alerts
                            </span>
                            <button class="btn btn-success">
                                Add Alert
                            </button>
                            <span class="link">
                                More information
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeAlertsTab === 'Alert Settings'">
                    <div class="input-group w-100">
                        <span>
                            Фильтр
                        </span>
                        <input type="text" placeholder="Статус проекта" class="form-control w-25" />
                        <span class="material-icons input-group-text">
                            search
                        </span>
                        <span>
                            MARK ACKNOWLEDGE
                        </span>
                        <span>
                            MARK UNACKNOWLEDGE
                        </span>
                    </div>
                    <div class="projectsTable">
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Target
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Condition
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Send To
                            </span>
                        </div>
                    </div>
                    <div class="searchBlock">
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                notifications
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                It looks like you have not set up any alerts.
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
            <div class="article" v-else-if="projectsTab === 'Activity Feed'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Organization Activity Feed
                    </span>
                    <span>
                        
                    </span>
                </div>
                <div class="clusterTabs">
                    <span :class="{ clusterTab: true, activeActivityFeedTab: true }">
                        &nbsp;&nbsp;&nbsp;&nbsp;All Activities&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
                <div class="createProjectRow">
                    <div class="filters">
                        <div class="input-group filter">
                            <span class="material-icons input-group-text">
                                list
                            </span>
                            <span>
                                Filter by events
                            </span>
                            <span class="material-icons input-group-text">
                                arrow_drop_down
                            </span>
                        </div>
                        <div class="input-group filter">
                            <span class="material-icons input-group-text">
                                schedule
                            </span>
                            <span>
                                Filter by time range
                            </span>
                            <span class="material-icons input-group-text">
                                arrow_drop_down
                            </span>
                        </div>
                        <button class="btn btn-light createDatabaseBtn material-icons">
                            content_copy
                        </button>
                    </div>
                    <button class="btn btn-light createDatabaseBtn">
                        Clear Filters
                    </button>
                </div>
                <div class="projectsTable">
                    <div class="projectsTableColumn">
                        <span class="projectsTableColumnHeader projectTableCell">
                            Type
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                        <span class="projectTableCell material-icons">
                            credit_card
                        </span>
                    </div>
                    <div class="projectsTableColumn">
                        <span class="projectsTableColumnHeader projectTableCell">
                            Activity Description
                        </span>
                        <span class="projectTableCell">
                            Invoice 61567917951b634e78ad8894 closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Invoice 61567917951b634e78ad8894 closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Invoice 612fbce0a4629f76b1a2035f closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Invoice 60dd729b3dcb3537b93c397b closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Invoice 60b5d0388c8177155ad2807e closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Invoice 608cf1af7ac5ed290a1537e8 closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Invoice 6065d0e6c7ba4b60b69be398 closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Invoice 603c6c2db2b3e60087657895 closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Invoice 60178a0736304d6b0dfb2638 closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Invoice 601286ece82e5f44a9d635fd closed with $0.00 due
                        </span>
                        <span class="projectTableCell">
                            Project unityGame was created
                        </span>
                        <span class="projectTableCell">
                            Project Project 0 was created
                        </span>
                        <span class="projectTableCell">
                            Organization Gleb's Org - 2021-01-28 created
                        </span>
                    </div>
                    <div class="projectsTableColumn">
                        <span class="projectsTableColumnHeader projectTableCell">
                            Creation Info
                        </span>
                        <span class="projectTableCell link">
                            11/01/21 - 03:58:57 AM
                        </span>
                        <span class="projectTableCell link">
                            07/01/21 - 07:45:31 AM
                        </span>
                        <span class="projectTableCell link">
                            08/01/21 - 06:11:58 AM
                        </span>
                        <span class="projectTableCell link">
                            06/01/21 - 06:14:16 AM
                        </span>
                        <span class="projectTableCell link">
                            05/01/21 - 06:14:07 AM
                        </span>
                        <span class="projectTableCell link">
                            04/01/21 - 01:55:50 PM
                        </span>
                        <span class="projectTableCell link">
                            03/01/21 - 04:23:09 AM
                        </span>
                        <span class="projectTableCell link">
                            02/01/21 - 04:56:39 AM
                        </span>
                        <span class="projectTableCell link">
                            01/30/21 - 02:27:53 PM by glebsilnei@mail.ru
                        </span>
                        <span class="projectTableCell link">
                            01/28/21 - 09:42:04 AM by glebsilnei@mail.ru
                        </span>
                        <span class="projectTableCell link">
                            01/28/21 - 09:42:04 AM  by glebsilnei@mail.ru
                        </span>
                        <span class="projectTableCell link">
                            01/28/21 - 09:42:04 AM  by glebsilnei@mail.ru
                        </span>
                        <span class="projectTableCell link">
                            01/28/21 - 09:42:04 AM  by glebsilnei@mail.ru
                        </span>
                        <span class="projectTableCell link">
                            01/28/21 - 09:42:04 AM  by glebsilnei@mail.ru
                        </span>
                        <span class="projectTableCell link">
                            01/28/21 - 09:42:04 AM  by glebsilnei@mail.ru
                        </span>
                        <span class="projectTableCell link">
                            01/28/21 - 09:42:04 AM  by glebsilnei@mail.ru
                        </span>
                        <span class="projectTableCell link">
                            01/28/21 - 09:42:04 AM  by glebsilnei@mail.ru
                        </span>
                        <span class="projectTableCell link">
                            01/28/21 - 09:42:04 AM  by glebsilnei@mail.ru
                        </span>
                    </div>
                </div>
                <div class="navigation">
                    <div class="navigationItem">
                        <span class="material-icons createDatabaseBtn navigationItemElement">
                            chevron_left
                        </span>
                        <span class="navigationItemElement">
                            PREVIOUS
                        </span>
                    </div>
                    <div class="navigationItem">
                        <span class="navigationItemElement">
                            NEXT
                        </span>
                        <span class="material-icons createDatabaseBtn navigationItemElement">
                            chevron_right
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
            <div class="article" v-else-if="projectsTab === 'Settings'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Organization Settings
                    </span>
                    <span>

                    </span>
                </div>
                <div class="settings">
                    <div class="settingsItem">
                        <span class="settingsItemHeader">
                            Organization ID
                        </span>
                        <span>
                            {{
                                cacher.organizationId
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <span class="settingsItemHeader">
                            Organization Name
                        </span>
                        <div class="settingsItemRow">
                            <span class="settingsItemHeader">
                                {{
                                    cacher.companyName
                                }}
                            </span>
                            <span class="btn btn-light createDatabaseBtn material-icons editBtn" @click="isEditOrganizationName = !isEditOrganizationName">
                                edit
                            </span>
                        </div>
                    </div>
                    <div v-if="isEditOrganizationName" class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Edit Organization Name
                            </span>
                            <input v-model="organizationName" type="text" class="form-control w-50">
                        </div>
                        <div class="settingsItemRow">
                            <button class="btn btn-light createDatabaseBtn">
                                Cancel
                            </button>
                            <button class="btn btn-success" @click="setCompanyName()">
                                Save
                            </button>
                        </div>
                    </div>
                    <div class="settingsItem">
                        <span class="settingsItemHeader">
                            Created On
                        </span>
                        <span>
                            {{
                                `${this.cacher.created.split('T')[0].split('-')[1]}/${this.cacher.created.split('T')[0].split('-')[2]}/${this.cacher.created.split('T')[0].split('-')[0]} - ${this.cacher.created.split('T')[1].split(':')[0]}:${this.cacher.created.split('T')[1].split(':')[1]} AM`
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Require Multi-Factor Authentication
                            </span>
                            <span>
                                This will require users to set up MFA before accessing your organization.
                            </span>
                        </div>
                        <div class="settingsItemRow">
                            <div class="firstlyEnable">
                                <span class="material-icons firstlyEnableIcon">
                                    error
                                </span>
                                <span class="firstlyEnableLabel">
                                    Enable your own MFA first
                                </span>
                            </div>
                            <span class="settingItemChip material-icons" @click="setRequireMultiFactorAuthentication">
                                {{
                                    requireMultiFactorAuthentication ?
                                        'toggle_off'
                                    :
                                        'toggle_on'
                                }}
                            </span>
                        </div>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Setup Federated Login
                            </span>
                            <span>
                                Use the MongoDB Federation Management app to configure a federated experience for all users of your organization(s).
                            </span>
                            <span class="link">
                                Visit Federation Management App
                            </span>
                        </div>
                        <span>
                            
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Require IP Access List for Public API
                            </span>
                            <span>
                                This will force all Public API operations for your organization to originate from an IP Address added to your Access List by the API Key.
                            </span>
                            <span class="link">
                                Docs
                            </span>
                        </div>
                        <span class="settingItemChip material-icons"  @click="setRequireIPAccessListForPublicAPI()">
                            {{
                                requireIPAccessListForPublicAPI ?
                                    'toggle_off'
                                :
                                    'toggle_on'
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Restrict MongoDB Production Support Employee Access to Atlas Backend Infrastructure
                            </span>
                            <span>
                                This will restrict MongoDB Production Support Employees from accessing Atlas backend infrastructure for any Atlas cluster in this organization. You may grant a 24 hour bypass to the access restriction at the Atlas cluster level.
                            </span>
                            <div>
                                <span class="settingsItemFooter">
                                    Note that restricting infrastructure access from MongoDB Production Support Employees may negatively impact cluster availability and increase support issue resolution time.
                                </span>
                                <span class="link">
                                    Docs
                                </span>
                            </div>
                        </div>
                        <span class="settingItemChip material-icons"  @click="setRestrictProductionSupportEmployeeAccessToBackendInfrastructure">
                            {{
                                restrictProductionSupportEmployeeAccessToBackendInfrastructure ?
                                    'toggle_off'
                                :
                                    'toggle_on'
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Slack Settings
                            </span>
                            <span>
                                Authorize your Slack integration to allow you to configure alerts.
                            </span>
                        </div>
                        <button class="btn btn-light createDatabaseBtn">
                            Add to Slack
                        </button>
                    </div>
                    <div class="settingsItem">
                        <span class="settingsItemHeader">
                            Delete Organization
                        </span>
                        <button class="btn btn-danger" @click="organizationName = 'Неизвестно'; setCompanyName()">
                            Delete
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
            <div class="article" v-else-if="projectsTab === 'Access Manager'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Organization Access Manager
                    </span>
                    <div>
                        <button class="btn btn-success">
                            Invite Users
                        </button>
                        <button class="btn btn-light createDatabaseBtn">
                            Create Team
                        </button>
                        <button class="btn btn-light createDatabaseBtn">
                            Create API Key
                        </button>
                    </div>
                </div>
                <span>
                    Manage access to this organization for users, teams, and API keys.
                </span>
                <div class="clusterTabs">
                    <span :class="{ clusterTab: true, activeAccessManagerTab: activeAccessManagerTab === 'Users' }" @click="activeAccessManagerTab = 'Users'">
                        &nbsp;&nbsp;&nbsp;&nbsp;Users&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeAccessManagerTab: activeAccessManagerTab === 'Teams' }" @click="activeAccessManagerTab = 'Teams'">
                        &nbsp;&nbsp;&nbsp;&nbsp;Teams&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeAccessManagerTab: activeAccessManagerTab === 'API Keys' }" @click="activeAccessManagerTab = 'API Keys'">
                        &nbsp;&nbsp;&nbsp;&nbsp;API Keys&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
                <div v-if="activeAccessManagerTab === 'Users'">
                    <div class="input-group w-25">
                        <input type="text" placeholder="Найти пользователя..." class="form-control w-25" />
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
                </div>
                <div v-else-if="activeAccessManagerTab === 'Teams'">
                    <div class="searchBlock">
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                people
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                Grant Teams of Users Access To Projects
                            </span>
                            <button class="btn btn-success">
                                Create a Team
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else-if="activeAccessManagerTab === 'API Keys'">
                    <div class="searchBlock">
                        <div class="searchBlockItem">
                            <span class="material-icons searchBlockItemElement searchBlockItemElementIcon">
                                badge
                            </span>
                            <span class="searchBlockItemElementHeader searchBlockItemElement">
                                Manage Your Infrastructure In Code
                            </span>
                            <button class="btn btn-success">
                                Create API Key
                            </button>
                            <span class="link">
                                Learn More About API Keys
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
            <div class="article" v-else-if="projectsTab === 'Billing'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Billing
                    </span>
                    <span>
                        
                    </span>
                </div>
                <div class="clusterTabs">
                    <span :class="{ clusterTab: true, activeBillingTab: activeBillingTab === 'Overview' }" @click="activeBillingTab = 'Overview'">
                        &nbsp;&nbsp;&nbsp;&nbsp;Overview&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span :class="{ clusterTab: true, activeBillingTab: activeBillingTab === 'Invoices' }" @click="activeBillingTab = 'Invoices'">
                        &nbsp;&nbsp;&nbsp;&nbsp;Invoices&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
                <div v-if="activeBillingTab === 'Overview'">
                </div>
                <div v-else-if="activeBillingTab === 'Invoices'">
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
            <div class="article" v-else-if="projectsTab === 'Support'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Support
                    </span>
                    <span>
                        
                    </span>
                </div>
                <div class="input-group">
                    <input type="text" placeholder="Поиск по нашей документации..." class="form-control w-25" />
                    <span class="material-icons input-group-text">
                        search
                    </span>
                </div>
                <div class="supportContainer">
                    <div class="supportItem firstSupportItem">
                        <span>
                            Support Plans
                        </span>
                        <div class="supportPlans">
                            <div class="supportPlan">
                                <span class="supportPlanName">
                                    Basic
                                </span>
                                <span class="supportPlanPrice">
                                    FREE
                                </span>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        Access to in-app Support Monday-Friday
                                    </span>
                                </div>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        In app Chat Support, response time may vary
                                    </span>
                                </div>
                                <button class="btn btn-light createDatabaseBtn">
                                    Current Plan
                                </button>
                            </div>
                            <div class="supportPlan">
                                <span class="supportPlanName">
                                    Developer
                                </span>
                                <span class="supportPlanPrice">
                                    Starting at $49/month*
                                </span>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        Access to Support 24/7
                                    </span>
                                </div>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        End-to-end database support (advice on data best practices and performance improvements)
                                    </span>
                                </div>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        First response within 8 hrs
                                    </span>
                                </div>
                                <button class="btn btn-light createDatabaseBtn">
                                    Start 30 Day Free Trial
                                </button>
                                <span class="link">
                                    Learn more
                                </span>
                            </div>
                            <div class="supportPlan">
                                <span class="supportPlanName">
                                    Pro
                                </span>
                                <span class="supportPlanPrice">
                                    Starting at $799/month*
                                </span>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        Access to Support 24/7
                                    </span>
                                </div>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        End-to-end database support (advice on data best practices and performance improvements)
                                    </span>
                                </div>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        First response within 2 hrs
                                    </span>
                                </div>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        Proactive customer success management
                                    </span>
                                </div>
                                <button class="btn btn-success createDatabaseBtn">
                                    Select Plan
                                </button>
                                <span class="link">
                                    Learn More
                                </span>
                            </div>
                            <div class="supportPlan">
                                <span class="supportPlanName">
                                    Enterprise
                                </span>
                                <span class="supportPlanPrice">
                                    Contact Us for Pricing* 
                                </span>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        Access to Support 24/7
                                    </span>
                                </div>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        End-to-end database support (advice on data best practices and performance improvements)
                                    </span>
                                </div>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        First response options from 15 minutes to 2 hrs.
                                    </span>
                                </div>
                                <div class="supportPlanBenefit">
                                    <span class="supportPlanBenefitItem material-icons supportPlanIcon">
                                        check
                                    </span>
                                    <span class="supportPlanBenefitItem">
                                        Tailored white glove support and customer success management
                                    </span>
                                </div>
                                <button class="btn btn-light createDatabaseBtn">
                                    Contact u
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="supportItemsRow">
                        <div class="supportContainer supportAside">
                            <div class="supportItem secondSupportItem">
                                <span class="supportPlanName">
                                    Flex Consulting
                                </span>
                                <span>
                                    Get expert advice on your most important projects. Our consulting engineers help drive success at all stages of application development and digital transformation with MongoDB.
                                </span>
                                <div>
                                    <button class="btn btn-light createDatabaseBtn">
                                        Buy Flex Consulting
                                    </button>
                                    <span class="link">
                                        Learn more about Flex Consulting 
                                    </span>
                                </div>
                            </div>
                            <div class="supportItem thirdSupportItem">
                                <span class="supportPlanName">
                                    Request Support
                                </span>
                                <span>
                                    You must have a Developer or Premium support plan to file a support ticket. This will enable you to create private support cases in our case tracking system where we will work with you to resolve any issues.
                                </span>
                                <div>
                                    <button class="btn btn-light createDatabaseBtn">
                                        Create New Case
                                    </button>
                                    <button class="btn btn-ligh createDatabaseBtn">
                                        Visit Support Portal
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="supportItem fourthSupportItem">
                            <span class="supportPlanName">
                                Developer Resources
                            </span>
                            <span class="supportPlanName">
                                Community Resources
                            </span>
                            <span class="supportPlanPrice">
                                In app chat support
                            </span>
                            <span class="supportPlanPrice">
                                Ask the MongoDB community
                            </span>
                            <span class="supportPlanName">
                                Documentation
                            </span>
                            <span class="supportPlanPrice">
                                MongoDB Atlas Docs
                            </span>
                            <span class="supportPlanPrice">
                                MongoDB University Courses on Atlas
                            </span>
                            <span class="supportPlanPrice">
                                Connect to Atlas
                            </span>
                            <span class="supportPlanPrice">
                                MongoDB Atlas API
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
            <div class="article" v-else-if="projectsTab === 'Live Migration'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Live Migration to Atlas
                    </span>
                    <span>
                        
                    </span>
                </div>
                <span>
                    Easily migrate your existing MongoDB deployments to Atlas with minimal downtime to your application. This service creates an initial sync between your source cluster and the target cluster in Atlas, and then keeps the two clusters in sync until your team is ready to cut over. 
                </span>
                <span>
                    Learn more about Atlas Live Migration in our documentation.
                </span>
                <div class="liveMigrationContainer">
                    <div class="liveMigrationItem">
                        <img src="https://cloud.mongodb.com/static/dist/images/20aed0fc72dd7367b0258dd90ba9a54d.svg" alt="" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                Migrate from Ops Manager or Cloud Manager
                            </span>
                            <span>
                                Migrate a deployment managed by Ops Manager or Cloud Manager. Atlas provisions the Live Migration Service in your existing project, which enables Ops Manager or Cloud Manager to push data to Atlas.
                            </span>
                            <button class="btn btn-success">
                                Migrate from Ops Manager or Cloud Manager
                            </button>
                        </div>
                    </div>
                    <div class="liveMigrationItem">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzcyIDEyOSI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTExLC5jbHMtMTIsLmNscy0xNXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy0ze2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNHtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTIpO30uY2xzLTV7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0zKTt9LmNscy02e2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtNCk7fS5jbHMtN3tmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTUpO30uY2xzLTh7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTIpO30uY2xzLTl7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC02KTt9LmNscy0xMHtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTcpO30uY2xzLTExe3N0cm9rZTojZjdhNzZmO30uY2xzLTExLC5jbHMtMTIsLmNscy0xNXtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5jbHMtMTJ7c3Ryb2tlOiM4M2RiYTc7fS5jbHMtMTN7ZmlsbDojMGIzYjM1O30uY2xzLTE0e2ZpbGw6I2ZjZWJlMjt9LmNscy0xNXtzdHJva2U6I2ZlZjdlMzt9LmNscy0xNntmaWxsOiNmZWY3ZTM7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIxMTEuNTciIHkxPSIxOTMuNDIiIHgyPSIyNjAuNDMiIHkyPSItNjQuNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZWYyYzgiIHN0b3Atb3BhY2l0eT0iMC4yNSIvPjxzdG9wIG9mZnNldD0iMC4xNyIgc3RvcC1jb2xvcj0iI2Y0ZWZkMCIgc3RvcC1vcGFjaXR5PSIwLjM5Ii8+PHN0b3Agb2Zmc2V0PSIwLjc1IiBzdG9wLWNvbG9yPSIjZDJlN2U4IiBzdG9wLW9wYWNpdHk9IjAuODMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjNWU0ZjIiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj48cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzNzIiIGhlaWdodD0iMTI5Ii8+PC9jbGlwUGF0aD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iLTcxMDQuNDciIHkxPSI4ODguMDEiIHgyPSItNzEwNC40NyIgeTI9IjkzOS4wNSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg3MjA4LjkgLTg5MC42MSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNjNWU0ZjIiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMC4yNCIgc3RvcC1jb2xvcj0iI2M1ZTRmMiIgc3RvcC1vcGFjaXR5PSIwLjI5Ii8+PHN0b3Agb2Zmc2V0PSIwLjUxIiBzdG9wLWNvbG9yPSIjYzVlNGYyIiBzdG9wLW9wYWNpdHk9IjAuNTkiLz48c3RvcCBvZmZzZXQ9IjAuNzQiIHN0b3AtY29sb3I9IiNjNWU0ZjIiIHN0b3Atb3BhY2l0eT0iMC44MSIvPjxzdG9wIG9mZnNldD0iMC45MSIgc3RvcC1jb2xvcj0iI2M1ZTRmMiIgc3RvcC1vcGFjaXR5PSIwLjk1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzVlNGYyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0zIiB4MT0iMjUwLjUzIiB5MT0iOTExLjk1IiB4Mj0iMjUwLjUzIiB5Mj0iOTUxLjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEsIDAsIDAsIDEsIDI1My42MiwgLTg5MC42MSkiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQtMiIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTQiIHgxPSItNzQxNi4xNiIgeTE9IjgwNi42NiIgeDI9Ii03NDE2LjE2IiB5Mj0iODY1Ljk5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIC0xLCA3NzQ2LjA1LCA5NDcuOTYpIiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50LTIiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC01IiB4MT0iMzc2LjA2IiB5MT0iODI0LjIiIHgyPSIzNzYuMDYiIHkyPSI4NTguOTciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgLTEsIC0xMzEsIDk0Ny45NikiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQtMiIvPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTIiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMzkyLjMiIHdpZHRoPSIzNzIiIGhlaWdodD0iMTI5Ii8+PC9jbGlwUGF0aD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC02IiB4MT0iMzk5LjUxIiB5MT0iNTkuMSIgeDI9IjQ2OC4yNiIgeTI9Ii01OS45OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudC0yIi8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNyIgeDE9IjI2My44NCIgeTE9IjI5Ljg0IiB4Mj0iNDYyLjQyIiB5Mj0iNjQuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNjNWU0ZjIiLz48c3RvcCBvZmZzZXQ9IjAuMDkiIHN0b3AtY29sb3I9IiNjNWU0ZjIiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjxzdG9wIG9mZnNldD0iMC4yNiIgc3RvcC1jb2xvcj0iI2M1ZTRmMiIgc3RvcC1vcGFjaXR5PSIwLjgxIi8+PHN0b3Agb2Zmc2V0PSIwLjQ5IiBzdG9wLWNvbG9yPSIjYzVlNGYyIiBzdG9wLW9wYWNpdHk9IjAuNTkiLz48c3RvcCBvZmZzZXQ9IjAuNzYiIHN0b3AtY29sb3I9IiNjNWU0ZjIiIHN0b3Atb3BhY2l0eT0iMC4yOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2M1ZTRmMiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9IkJHIj48cmVjdCBjbGFzcz0iY2xzLTIiIHdpZHRoPSIzNzIiIGhlaWdodD0iMTI5Ii8+PGcgY2xhc3M9ImNscy0zIj48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xODUuMDktMi42SDIzLjc3QTIxLjI3LDIxLjI3LDAsMCwwLDQ1LDE4LjQzYTE5LjE0LDE5LjE0LDAsMCwwLDMuNy0uMzNBMjkuNjMsMjkuNjMsMCwwLDAsNzYuMzEsMzdhMjguOSwyOC45LDAsMCwwLDkuODctMS43LDQxLjE1LDQxLjE1LDAsMCwwLDY5LjI3LTE1LjA3LDI0LDI0LDAsMCwwLDYsLjc3LDIzLjU2LDIzLjU2LDAsMCwwLDIzLjYyLTIzLjVaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNLTQ3LjkyLDIyLjA1QTE2LjMxLDE2LjMxLDAsMCwwLTMxLjYzLDM4LjM3YTE2LjMxLDE2LjMxLDAsMCwwLDguMDctMi4xMywyOC43LDI4LjcsMCwwLDAsNTYuMzksMS41N0ExNywxNywwLDAsMCw1My41NSwyNS43NGExNy4xNSwxNy4xNSwwLDAsMCwuNTUtNC4zOSIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTQyMy42NywxNDEuMjhhMjcuMzgsMjcuMzgsMCwwLDAtMjcuNDMtMjcuMzQsMjguMTMsMjguMTMsMCwwLDAtNywuODksNDcuODQsNDcuODQsMCwwLDAtODAuNTQtMTcuNTIsMzMuNzUsMzMuNzUsMCwwLDAtMTEuNDgtMiwzNC40NywzNC40NywwLDAsMC0zMi4xMSwyMS45MiwyMy43NywyMy43NywwLDAsMC00LjI5LS4zOSwyNC43MiwyNC43MiwwLDAsMC0yNC43MiwyNC40NUg0MjMuNjdaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMjkwLjM5LDEyMy4xNGExNC40OSwxNC40OSwwLDAsMC0yMS42NC0xMi42MSwyNS41MSwyNS41MSwwLDAsMC01MC4xMy0xLjQsMTUuMDcsMTUuMDcsMCwwLDAtMTguNCwxMC43NiwxNC44MywxNC44MywwLDAsMC0uNDksMy44NyIvPjwvZz48L2c+PGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGcgY2xhc3M9ImNscy04Ij48cmVjdCBjbGFzcz0iY2xzLTkiIHg9IjMzMi4wNyIgeT0iLTM2LjExIiB3aWR0aD0iMjAzLjY0IiBoZWlnaHQ9IjcxLjMzIiByeD0iMzUuNjciLz48cmVjdCBjbGFzcz0iY2xzLTEwIiB4PSIyNjEuMzEiIHk9IjExLjY4IiB3aWR0aD0iMjAzLjY0IiBoZWlnaHQ9IjcxLjMzIiByeD0iMzUuNjciLz48L2c+PHBhdGggY2xhc3M9ImNscy0xMSIgZD0iTTcyLjg1LDEwNC45M3MzLjQxLTMuNDgsNywxLjQ0YzMuNi00LjkyLDctMS40NCw3LTEuNDQiLz48cGF0aCBjbGFzcz0iY2xzLTExIiBkPSJNODkuODIsMTE2LjA2czMuNDEtMy40OCw3LDEuNDRjMy42LTQuOTIsNy0xLjQ0LDctMS40NCIvPjxwYXRoIGNsYXNzPSJjbHMtMTEiIGQ9Ik01MC40NCw5OXMzLjQxLTMuNDcsNywxLjQ1YzMuNi00LjkyLDctMS40NSw3LTEuNDUiLz48cGF0aCBjbGFzcz0iY2xzLTExIiBkPSJNNTkuMDksMTExczMuNDEtMy40Nyw3LDEuNDVjMy41OS00LjkyLDctMS40NSw3LTEuNDUiLz48cGF0aCBjbGFzcz0iY2xzLTExIiBkPSJNODUuNTksOTcuNzNzMy40Mi0zLjQ4LDcsMS40NGMzLjU5LTQuOTIsNy0xLjQ0LDctMS40NCIvPjxwYXRoIGNsYXNzPSJjbHMtMTEiIGQ9Ik02Ni4xLDkxLjU2czMuNDEtMy40OCw3LDEuNDRjMy42LTQuOTIsNy0xLjQ0LDctMS40NCIvPjxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIxNjIuMzMiIHkxPSIxNi4zMiIgeDI9IjkzLjg1IiB5Mj0iODkuNDciLz48bGluZSBjbGFzcz0iY2xzLTEyIiB4MT0iMTAzLjg0IiB5MT0iOTMuNDciIHgyPSIxNjMuNjkiIHkyPSI1MS45NiIvPjxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIxMTEuODMiIHkxPSIxMTEuMTQiIHgyPSIyOTYuMDYiIHkyPSI3NS44MSIvPjxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIyMTUuMTkiIHkxPSI3NS4yNCIgeDI9Ijk2LjgyIiB5Mj0iMTA2LjA5Ii8+PGcgaWQ9IlRlY2hub2xvZ3lfVGVybWluYWxfd2luZG93X2xhcmdlIiBkYXRhLW5hbWU9IlRlY2hub2xvZ3lfVGVybWluYWwgd2luZG93IGxhcmdlIj48ZyBpZD0iVGl0bGVzIj48cmVjdCBjbGFzcz0iY2xzLTEzIiB4PSIxNTYuNiIgeT0iMTEuNSIgd2lkdGg9IjE0My45MiIgaGVpZ2h0PSI3MS42Ii8+PHJlY3QgY2xhc3M9ImNscy0xNCIgeD0iMTYzLjY5IiB5PSIyNS4zNyIgd2lkdGg9IjgwLjY3IiBoZWlnaHQ9IjMuMzEiLz48cmVjdCBjbGFzcz0iY2xzLTE0IiB4PSIxNjMuNjkiIHk9IjMzLjEzIiB3aWR0aD0iNjQuMjkiIGhlaWdodD0iMy4zMSIvPjxyZWN0IGNsYXNzPSJjbHMtMTQiIHg9IjE2My42OSIgeT0iNDAuODkiIHdpZHRoPSI0Mi4zNiIgaGVpZ2h0PSIzLjMxIi8+PHJlY3QgY2xhc3M9ImNscy0xNCIgeD0iMTYzLjY5IiB5PSI0OC42NSIgd2lkdGg9IjgwLjY3IiBoZWlnaHQ9IjMuMzEiLz48cmVjdCBjbGFzcz0iY2xzLTE0IiB4PSIxNjMuNjkiIHk9IjU2LjQyIiB3aWR0aD0iMTEuNTUiIGhlaWdodD0iMy4zMSIvPjxyZWN0IGNsYXNzPSJjbHMtMTQiIHg9IjE3OC4xMiIgeT0iNTYuNDIiIHdpZHRoPSIxMS41NSIgaGVpZ2h0PSIzLjMxIi8+PHJlY3QgY2xhc3M9ImNscy0xNCIgeD0iMTkyLjU0IiB5PSI1Ni40MiIgd2lkdGg9IjExLjU1IiBoZWlnaHQ9IjMuMzEiLz48cmVjdCBjbGFzcz0iY2xzLTE0IiB4PSIxNjMuNjkiIHk9IjY0LjE4IiB3aWR0aD0iODAuNjciIGhlaWdodD0iMy4zMSIvPjxyZWN0IGNsYXNzPSJjbHMtMTQiIHg9IjE2My42OSIgeT0iNzEuOTQiIHdpZHRoPSI3NC41MSIgaGVpZ2h0PSIzLjMxIi8+PGxpbmUgY2xhc3M9ImNscy0xNSIgeDE9IjE2MS4zOSIgeTE9IjE5LjI2IiB4Mj0iMjk2LjA2IiB5Mj0iMTkuMjYiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMTYiIGN4PSIxNjIuMzMiIGN5PSIxNS4zOCIgcj0iMC45NCIvPjxjaXJjbGUgY2xhc3M9ImNscy0xNiIgY3g9IjE2Ny4zNSIgY3k9IjE1LjM4IiByPSIwLjk0Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTE2IiBjeD0iMTcyLjM4IiBjeT0iMTUuMzgiIHI9IjAuOTQiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                General Live Migration
                            </span>
                            <span>
                                Migrate from an on-premises deployment, a cloud deployment, or your local machine. Any firewalls for the source cluster must grant access to the fully-managed live migration service.
                            </span>
                            <button class="btn btn-success">
                                Select Cluster for General Live Migration
                            </button>
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
            <div class="article" v-else-if="projectsTab === 'New Project'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Create a Project
                    </span>
                    <span>
                        
                    </span>
                </div>
                <div class="createProjectRow">
                    <div class="privateEndpointRowBtns">
                        <button class="createProjectStep input group btn btn-light createDatabaseBtn">
                            <span v-if="createProjectTab === 'second'" class="btn btn-light material-icons isCreateProjectStepComplete">
                                check
                            </span>
                            <span>
                                Name Your Project
                            </span>
                        </button>
                        <button class="createProjectStep btn btn-light createDatabaseBtn"  @click="privateEndpointTab = 'dataLakeOnlineArchive'">
                            Add Members
                        </button>
                    </div>
                    <button v-if="createProjectTab === 'first'" :disabled="projectName.length <= 0" :class="{btn: true, 'btn-light': projectName.length <= 0, 'btn-success': projectName.length >= 1, createDatabaseBtn: true}"  @click="createProjectTab = 'second'">
                        Next
                    </button>
                    <div v-else-if="createProjectTab === 'second'">
                        <span class="link" @click="createProjectTab = 'first'">
                            Go Back
                        </span>
                        <button :class="{btn: true, 'btn-success': true, createDatabaseBtn: true}"  @click="createProject">
                            Create Project
                        </button>
                    </div>
                </div>
                <div v-if="createProjectTab === 'first'" class="createProjectContainer">
                    <span>
                        Name Your Project
                    </span>
                    <span>
                        Project names have to be unique within the organization (and other restrictions).
                    </span>
                    <input placeholder="Project Name" v-model="projectName" type="text" class="form-control" />
                    <div class="createProjectRow">
                        <span></span>
                        <div class="privateEndpointRowBtns">
                            <button class="btn btn-light createDatabaseBtn" @click="projectsTab = 'Projects'; createProjectStep = 'first'">
                                Cancel
                            </button>
                            <button :disabled="projectName.length <= 0" :class="{btn: true, 'btn-light': projectName.length <= 0, 'btn-success': projectName.length >= 1, createDatabaseBtn: true}"  @click="createProjectTab = 'second'">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else-if="createProjectTab === 'second'" class="createProjectContainer">
                    <span>
                        Add Members and Set Permissions
                    </span>
                    <input @keyup.enter="addProjectMember" placeholder="Invite new or existing users via email address..." v-model="newProjectMember" type="text" class="form-control" />
                    <span>
                        Give your members access permissions below.
                    </span>
                    <hr />
                    <div class="projectMember" v-for="projectMember in projectMembers" :key="projectMember">
                        <span>
                            {{
                                projectMember.email
                            }}
                        </span>
                        <select @change="debugProjectMembers" v-model="projectMember.role" class="form-select h-75 w-25">
                            <option value="Project Owner">Project Owner</option>
                        </select>    
                    </div>
                    <div class="createProjectRow">
                        <span></span>
                        <div class="privateEndpointRowBtns">
                            <button class="btn btn-light createDatabaseBtn" @click="projectsTab = 'Projects'; createProjectStep = 'first'">
                                Cancel
                            </button>
                            <button class="link btn btn-light createDatabaseBtn" @click="createProjectTab = 'first'">
                                Go Back
                            </button>
                            <button :class="{btn: true, 'btn-success': true, createDatabaseBtn: true}"  @click="createProject">
                                Create Project
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="projectContextMenu" v-if="isProjectContextMenu" ref="projectContextMenu">
            <span class="projectContextMenuItem">
                Move Project
            </span>
            <span class="projectContextMenuItem">
                Edit Project
            </span>
            <span class="projectContextMenuItem">
                Copy Project ID
            </span>
            <span class="projectContextMenuItem">
                Visit Project Settings
            </span>
            <span class="projectContextMenuItem">
                Leave Project
            </span>
        </div>
        <div v-if="isProjectRenameDialog" class="dialogBackdrop">
            <div class="dialog">

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
            projectsTab: 'Projects',
            activeAlertsTab: 'All Alerts',
            activeAccessManagerTab: 'Users',
            activeBillingTab: 'Overview',
            requireMultiFactorAuthentication: false,
            requireIPAccessListForPublicAPI: false,
            restrictProductionSupportEmployeeAccessToBackendInfrastructure: false,
            isEditOrganizationName: false,
            organizationName: '',
            isProjectCreateDialog: false,
            projectName: '',
            createProjectTab: 'first',
            newProjectMember: '',
            projects: [],
            keywords: '',
            projectMembers: [],
            cacher: {},
            isProjectContextMenu: false,
            isProjectRenameDialog: false,
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
                    this.getProjects()
                    this.projectMembers = [
                        {
                            email: `${this.cacher.email} (you)`,
                            role: 'Project Owner'
                        }
                    ]
                    this.requireMultiFactorAuthentication = this.cacher.requireMultiFactorAuthentication
                    this.requireIPAccessListForPublicAPI = this.cacher.requireIPAccessListForPublicAPI
                    this.restrictProductionSupportEmployeeAccessToBackendInfrastructure = this.cacher.restrictProductionSupportEmployeeAccessToBackendInfrastructure
                }
            })

        })

    },
    methods: {
        setRestrictProductionSupportEmployeeAccessToBackendInfrastructure() {

            fetch(`http://localhost:4000/api/cachers/restrictproductionsupportemployeeaccesstobackendinfrastructure/set/?cacheremail=${this.cacher.email}&value=${!this.restrictProductionSupportEmployeeAccessToBackendInfrastructure}`, {
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
                    this.isProjectRenameDialog = true
                }
            })

        },
        toggleProjectContextMenu(delta) {
            alert(`delta: ${delta}`)
            this.isProjectContextMenu = !this.isProjectContextMenu
            this.$refs.projectContextMenu.style = `
                display: flex;
                flex-direction: column;
                width: 200px;
                height: 195px;
                background-color: rgb(255, 255, 255);
                border-radius: 8px;
                box-shadow: 0px 0px 10px rgb(150, 150, 150);
                position: absolute;
                top: ${410 + 50 * delta}px;
                left: 1015px;
                z-index: 5;
                box-sizing: border-box;
                padding: 15px;
            `

        },
        setRestrictProductionSupportEmployeeAccessToBackendInfrastructure() {

            fetch(`http://localhost:4000/api/cachers/restrictproductionsupportemployeeaccesstobackendinfrastructure/set/?cacheremail=${this.cacher.email}&value=${!this.restrictProductionSupportEmployeeAccessToBackendInfrastructure}`, {
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
                    alert('Обновил переключатель № 3')
                    this.restrictProductionSupportEmployeeAccessToBackendInfrastructure = !this.restrictProductionSupportEmployeeAccessToBackendInfrastructure
                    this.cacher.restrictProductionSupportEmployeeAccessToBackendInfrastructure = this.restrictProductionSupportEmployeeAccessToBackendInfrastructure
                }
            })

        },
        setRequireIPAccessListForPublicAPI() {

            fetch(`http://localhost:4000/api/cachers/requireipaccesslistforpublicapi/set/?value=${this.cacher.email}&value=${!this.requireIPAccessListForPublicAPI}`, {
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
                    alert('Обновил переключатель № 2')
                    this.requireIPAccessListForPublicAPI = !this.requireIPAccessListForPublicAPI
                    this.cacher.requireIPAccessListForPublicAPI = this.requireIPAccessListForPublicAPI
                }
            })

        },
        setRequireMultiFactorAuthentication() {

            fetch(`http://localhost:4000/api/cachers/requiremultifactorauthentication/set/?cacheremail=${this.cacher.email}&value=${!this.requireMultiFactorAuthentication}`, {
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
                    alert('Обновил переключатель № 1')
                    this.requireMultiFactorAuthentication = !this.requireMultiFactorAuthentication
                    this.cacher.requireMultiFactorAuthentication = this.requireMultiFactorAuthentication
                }
            })

        },
        setCompanyName() {

            fetch(`http://localhost:4000/api/cachers/companyname/set/?cacheremail=${this.cacher.email}&companyname=${this.organizationName}`, {
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
                    alert('Обновил имя компании')
                    this.cacher.companyName = this.organizationName
                    this.organizationName = ''
                    this.isEditOrganizationName = false
                }
            })

        },
        debugProjectMembers() {
            this.projectMembers.map(projectMember => {
                alert(`Отладка: ${projectMember.email}; ${projectMember.role}`)
            })
        },
        addProjectMember() {
            // alert('Добавляю участника проекта')
            this.projectMembers.push({
                email: this.newProjectMember,
                role: 'Project Owner'
            })
            this.newProjectMember = ''
            // this.debugProjectMembers()
        },
        deleteProject(currentProject) {

            fetch(`http://localhost:4000/api/projects/delete/?projectid=${currentProject._id}`, {
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
                    alert('Удалил проект')
                    this.getProjects()
                }
            })

        },
        getProjects() {

            fetch(`http://localhost:4000/api/projects/all/`, {
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
                    alert('Проекты получил')
                    this.projects = JSON.parse(result).projects
                }
            })
        
        },
        createProject() {
            console.log('создаю проект')
            fetch(`http://localhost:4000/api/projects/create/?cacheremail=${this.cacher.email}&projectname=${this.projectName}&projectmembers=${JSON.stringify(this.projectMembers)}`, {
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
                    alert('Проект создал')
                    this.getProjects()
                    this.createProjectTab = 'first'
                    this.projectsTab = 'Projects'
                    this.projectName = ''
                    this.projectMembers = [
                        {
                            email: `${this.cacher.email} (you)`,
                            role: 'Project Owner'
                        }
                    ]
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
        height: 30px;
        display: flex;
        align-items: center;
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

    .activeAsideItem {
        background-color: rgba(100, 255, 255, 0.2);
        font-weight: bolder;
        border-left: 4px solid rgba(100, 200, 200, 0.7);
    }

    .clusterTabs {
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
        display: flex;
        margin: 15px 0px;
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

    
    .activeAlertsTab, .activeAccessManagerTab, .activeBillingTab, .activeActivityFeedTab {
        font-weight: bolder;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: rgb(0, 150, 0);
        text-decoration-thickness: 3px;
    }

    .clusterTab {
        cursor: pointer;
    }

    .liveMigrationContainer {
        display: flex;
        margin: 25px 0px;
    }

    .liveMigrationItem {
        box-shadow: 0px 0px 5px rgb(150, 150, 150);
        width: 35%;
        height: 400px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px 35px;
    }

    .liveMigrationItemHeader {
        font-weight: bolder;
    }
    
    .liveMigrationNestedItem {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0px 25px;
        align-items: center;
    }

    .supportContainer {
        display: flex;
        flex-direction: column;
    }

    .supportItem {
        box-shadow: 0px 0px 10px rgb(150, 150, 150);
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        margin: 25px;
        box-sizing: border-box;
        padding: 20px 35px;
    }

    .supportItemsRow {
        display: flex;
    }

    .firstSupportItem {
        width: 95%;
        height: 450px;
    }

    .supportPlans {
        display: flex;
        justify-content: space-between;
    }

    .supportPlan {
        display: flex;
        flex-direction: column;
        width: 23%;
    }

    .supportPlanBenefit {
        display: flex;
        align-items: center;
    }

    .supportPlanBenefitItem {
        margin: 0px 8px;
    }

    .supportPlanIcon {
        color: rgb(0, 150, 0);
    }

    .supportPlanName {
        font-weight: bolder;
        font-size: 22px;
    }

    .supportPlanPrice {
        color: rgb(0, 100, 200);
        font-size: 20px;
    }

    .secondSupportItem, .thirdSupportItem {
        height: 250px;
        display: flex;
        flex-direction: column;
    }

    .supportAside {
        width: 52%;
    }

    .fourthSupportItem {
        height: calc(250px * 2 + 30);
        width: 48%;
        display: flex;
        flex-direction: column;
    }

    .filters {
        display: flex;
    }

    .filter {
        display: flex;
        width: 245px;
        align-items: center;
        background-color: rgb(240, 240, 240);
        height: 35px;
    }

    .navigation {
        box-shadow: 0px 4px 2px rgb(235, 235, 235), 0px -4px 2px rgb(235, 235, 235);
        display: flex;
        justify-content: space-between;
    }

    .navigationItem {
        display: flex;
        align-items: center;
    }

    .navigationItemElement {
        margin: 0px 5px;
    }

    .settings {
        display: flex;
        flex-direction: column;
    }

    .settingsItem {
        display: flex;
        justify-content: space-between;
        min-height: 50px;
        border-bottom: 1px solid rgb(215, 215, 215);
        align-items: center;
    }

    .settingsItemHeader {
        font-size: 18px;
    }

    .settingsItemValue {
        
    }

    .settingItemChip {
        font-size: 48px;
    }

    .settingsItemColumn {
        display: flex;
        flex-direction: column;
        width: 75%;
    }

    .settingsItemFooter {
        font-weight: bolder;
    }

    .settingsItemRow {
        display: flex;
        align-items: center;
    }

    .firstlyEnable {
        color: rgb(240, 0, 0);
        margin: 0px 10px;
        display: flex;
        align-items: center;
    }

    .firstlyEnableIcon {
        font-size: 18px;
        margin: 0px 5px;
    }

    .firstlyEnableLabel {
        font-size: 12px;
        margin: 0px 5px;
    }

    .editBtn {
        cursor: pointer;
    }

    .privateEndpointRowBtns {
        display: flex;
    }

    .createProjectContainer {
        display: flex;
        flex-direction: column;
    }

    .projectMember {
        justify-content: space-around;
        display: flex;
        margin: 10px 0px;
    }

    .isCreateProjectStepComplete {
        color: rgb(0, 150, 0);
        height: 15px;
        box-sizing: border-box;
        padding-bottom: 15px;
        align-self: flex-start;
        align-items: flex-start;
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
    }

    .createProjectStep {
        margin: 0px 10px;
        height: 35px;
        display: flex;
    }

    .projectContextMenu {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 195px;
        background-color: rgb(255, 255, 255);
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgb(150, 150, 150);
        position: absolute;
        top: 410px;
        left: 1015px;
        z-index: 5;
        box-sizing: border-box;
        padding: 15px;
    }

    .projectContextMenuItem {
        margin: 5px 0px;
    }

    .dialogBackdrop {
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
    }

    .dialog {
        width: 50%;
        height: 50%;
        background-color: rgb(255, 255, 255);
        border-radius: 15px;
        box-sizing: border-box;
        padding: 35px;
    }

</style>