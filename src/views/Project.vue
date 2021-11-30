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
                        ПРОЕКТ
                    </span>
                </div>
                <span :class="{asideItem: true, activeAsideItem: projectTab === 'Project Settings'}" @click="projectTab = 'Project Settings'">
                    Settings
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectTab === 'Alerts'}" @click="projectTab = 'Alerts'">
                    Alerts
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectTab === 'Activity Feed'}" @click="projectTab = 'Activity Feed'">
                    Activity Feed
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectTab === 'Access Manager'}" @click="projectTab = 'Access Manager'">
                    Access Manager
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectTab === 'Support'}" @click="projectTab = 'Support'">
                    Support
                </span>
                <span :class="{asideItem: true, activeAsideItem: projectTab === 'Integrations'}" @click="projectTab = 'Integrations'">
                    Integrations
                </span>
            </div>
            <div class="article" v-if="projectTab === 'Project Settings'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Project Settings
                    </span>
                    <span>

                    </span>
                </div>
                <div class="settings">
                    <div class="settingsItem">
                        <span class="settingsItemHeader">
                            Project ID
                        </span>
                        <span>
                            {{
                                project._id
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <span class="settingsItemHeader">
                            Project Name
                        </span>
                        <div class="settingsItemRow">
                            <span class="settingsItemHeader">
                                {{
                                    project.name
                                }}
                            </span>
                            <span class="btn btn-light createDatabaseBtn material-icons editBtn" @click="isEditProjectName = !isEditProjectName">
                                edit
                            </span>
                        </div>
                    </div>
                    <div v-if="isEditProjectName" class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Edit Project Name
                            </span>
                            <input v-model="newProjectName" type="text" class="form-control w-50">
                        </div>
                        <div class="settingsItemRow">
                            <button class="btn btn-light createDatabaseBtn">
                                Cancel
                            </button>
                            <button class="btn btn-success" @click="renameProject()">
                                Save
                            </button>
                        </div>
                    </div>
                    <div class="settingsItem">
                        <span class="settingsItemHeader">
                            Project Time Zone
                        </span>
                        <select v-model="timeZone" class="form-select h-75 w-25">
                            <option value="Please set your time zone">Please set your time zone</option>
                        </select>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Multiple Regionalized Private Endpoints
                            </span>
                            <span>
                                (Applicable to projects with sharded clusters exclusively) This setting lifts the restriction of limiting to one Private Endpoint per region for a multi-region cluster. As a result, you will be able to create multiple Private Endpoints across multiple regions, and connect to mongoses in a region via a regionalized private endpoint connection string. Once enabled, you will have to configure your application to update any existing connection strings, which may cause downtime. Learn more
                            </span>
                        </div>
                        <div class="settingsItemRow">
                            <span class="settingItemChip material-icons" @click="setMultipleRegionalizedPrivateEndpoints">
                                {{
                                    multipleRegionalizedPrivateEndpoints ?
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
                                Collect Database Specific Statistics
                            </span>
                            <span>
                                Normally this should be enabled. If you have a database with an enormous number of collections, you may want to disable dbstats collection. If you disable dbstats, you will not see any storage information in your db storage charts.
                            </span>
                        </div>
                        <span class="settingItemChip material-icons"  @click="setCollectDatabaseSpecificStatistics">
                            {{
                                collectDatabaseSpecificStatistics ?
                                    'toggle_off'
                                :
                                    'toggle_on'
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Set Preferred Cluster Maintenance Start Time
                            </span>
                            <span>
                                Choose the day of the week and time when you would want Atlas to perform automated maintenance on your clusters. During maintenance, replica set elections will occur, but no downtime is required.
                            </span>
                        </div>
                        <span class="settingItemChip material-icons"  @click="setPreferredClusterMaintenanceStartTime">
                            {{
                                preferredClusterMaintenanceStartTime ?
                                    'toggle_off'
                                :
                                    'toggle_on'
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Atlas Security Quickstart
                            </span>
                            <span>
                                Once you have completed setting up database and network access for the first cluster in your project, this interface will be disabled. Enabling it again will allow you to revisit these configurations from a consolidated page.
                            </span>
                        </div>
                        <span class="settingItemChip material-icons"  @click="setSecurityQuickstart">
                            {{
                                securityQuickstart ?
                                    'toggle_off'
                                :
                                    'toggle_on'
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Real Time Performance Panel
                            </span>
                            <span>
                                See real time metrics from your MongoDB database
                            </span>
                        </div>
                        <span class="settingItemChip material-icons"  @click="setRealTimePerformancePanel">
                            {{
                                realTimePerformancePanel ?
                                    'toggle_off'
                                :
                                    'toggle_on'
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Data Explorer
                            </span>
                            <span>
                                Query your database with an easy to use interface
                            </span>
                        </div>
                        <span class="settingItemChip material-icons"  @click="setDataExplorer">
                            {{
                                dataExplorer ?
                                    'toggle_off'
                                :
                                    'toggle_on'
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Performance Advisor and Profiler
                            </span>
                            <span>
                                Analyze database logs and recommend performance improvements
                            </span>
                        </div>
                        <span class="settingItemChip material-icons"  @click="setPerformanceAdvisorAndProfiler">
                            {{
                                performanceAdvisorAndProfiler ?
                                    'toggle_off'
                                :
                                    'toggle_on'
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <div class="settingsItemColumn">
                            <span class="settingsItemHeader">
                                Schema Advisor
                            </span>
                            <span>
                                Customized recommendations to optimize your data model and enhance performance
                            </span>
                        </div>
                        <span class="settingItemChip material-icons"  @click="setSchemaAdvisor">
                            {{
                                schemaAdvisor ?
                                    'toggle_off'
                                :
                                    'toggle_on'
                            }}
                        </span>
                    </div>
                    <div class="settingsItem">
                        <span class="settingsItemHeader">
                            Delete Project
                        </span>
                        <button class="btn btn-danger" @click="deleteProject()">
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
            <div class="article" v-else-if="projectTab === 'Alerts'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Project Alerts
                    </span>
                    <span>

                    </span>
                </div>
                <div class="createProjectRow">
                    <div class="clusterTabs">
                        <span :class="{ clusterTab: true, activeAlertsTab: activeAlertsTab === 'Open Alerts' }" @click="activeAlertsTab = 'Open Alerts'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Open Alerts&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeAlertsTab: activeAlertsTab === 'Closed Alerts' }" @click="activeAlertsTab = 'Closed Alerts'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Closed Alerts&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span :class="{ clusterTab: true, activeAlertsTab: activeAlertsTab === 'Alert Settings' }" @click="activeAlertsTab = 'Alert Settings'">
                            &nbsp;&nbsp;&nbsp;&nbsp;Alert Settings&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <button class="btn btn-success">
                        Add New Alert
                    </button>
                </div>
                <div v-if="activeAlertsTab === 'Open Alerts'">
                    <button class="btn btn-light createDatabaseBtn">
                        ACKNOWLEDGE
                    </button>
                    <span>
                        No Alerts
                    </span>
                </div>
                <div v-else-if="activeAlertsTab === 'Closed Alerts'">
                    <span>
                        No Alerts
                    </span>
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
            <div class="article" v-else-if="projectTab === 'Activity Feed'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Project Activity Feed
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
                                cloud
                            </span>
                            <span>
                                Filter by cluster(s)
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
                            Description
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
                            Created On
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
            <div class="article" v-else-if="projectTab === 'Access Manager'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Project Access Manager
                    </span>
                    <div>
                        <button class="btn btn-success">
                            Invite To Project
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
                                Display Name
                            </span>
                            <span class="projectTableCell link">
                                Gleb Dyakov
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Email/Username
                            </span>
                            <span class="projectTableCell">
                                glebsilnei@mail.ru
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Project Role
                            </span>
                            <span class="projectTableCell link">
                                Project Owner
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Created
                            </span>
                            <span class="projectTableCell link">
                                01/28/21 - 09:42:04 AM
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                Last Login
                            </span>
                            <span class="projectTableCell link">
                                11/30/21 - 05:24:40 AM
                            </span>
                        </div>
                        <div class="projectsTableColumn">
                            <span class="projectsTableColumnHeader projectTableCell">
                                
                            </span>
                            <div class="projectTableCell actionsBtns">
                                <span class="material-icons btn btn-light actionsBtn">
                                    edit
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
            <div class="article" v-else-if="projectTab === 'Support'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Project Support
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
                    <div class="supportItemsRow">
                        <div class="supportContainer supportAside">
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
            <div class="article" v-else-if="projectTab === 'Integrations'">
                <span>
                    GLEB'S ORG - 2021-01-28
                </span>
                <div class="createProjectRow">
                    <span class="createProjectRowHeader">
                        Project Integrations
                    </span>
                    <span>
                        
                    </span>
                </div>
                <div class="liveMigrationContainer">
                    <div class="liveMigrationItem">
                        <img src="https://cloud.mongodb.com/static/dist/images/1620ad486adf8651f3cdc329f2688df1.svg" alt="aws" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                AWS IAM Role Access
                            </span>
                            <span>
                                Delegate Atlas access to your AWS environment using authorized AWS IAM roles.
                            </span>
                            <button class="btn btn-light createDatabaseBtn">
                                Configure
                            </button>
                        </div>
                    </div>
                    <div class="liveMigrationItem">
                        <img src="data:image/png;base64,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" alt="PagerDuty" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                PagerDuty Alerts
                            </span>
                            <span>
                                Allows Atlas alerts to create PagerDuty incidents. Sets the default service key for alert configuration.
                            </span>
                            <button class="btn btn-light createDatabaseBtn">
                                Configure
                            </button>
                        </div>
                    </div>
                </div>
                <div class="liveMigrationContainer">
                    <div class="liveMigrationItem">
                        <img src="data:image/png;base64,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" alt="slack" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                Slack Alerts
                            </span>
                            <span>
                                Allows Atlas alerts to post messages to your Slack channel.
                            </span>
                            <button class="btn btn-light createDatabaseBtn">
                                Configure
                            </button>
                        </div>
                    </div>
                    <div class="liveMigrationItem">
                        <img src="data:image/png;base64,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" alt="data dog" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                Datadog Alerts and Monitoring
                            </span>
                            <span>
                                Allows Atlas to send monitoring data and alerts to your Datadog dashboard.
                            </span>
                            <button class="btn btn-light createDatabaseBtn">
                                Configure
                            </button>
                        </div>
                    </div>
                </div>
                <div class="liveMigrationContainer">
                    <div class="liveMigrationItem">
                        <img src="https://cloud.mongodb.com/static/dist/images/fa597ada7f94f98143ce5cfb43d1beff.png" alt="sumo logic" width="50%" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                SumoLogic Monitoring
                            </span>
                            <span>
                                Allows for Atlas clusters to be comprehensively monitored by performance, health, and security.
                            </span>
                            <button class="btn btn-light createDatabaseBtn">
                                Configure
                            </button>
                        </div>
                    </div>
                    <div class="liveMigrationItem">
                        <img src="data:image/png;base64,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" alt="Opsgenie Alerts" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                Opsgenie Alerts
                            </span>
                            <span>
                                Allows Atlas alerts to create Opsgenie alerts. Sets the default API key for alert configuration.
                            </span>
                            <button class="btn btn-light createDatabaseBtn">
                                Configure
                            </button>
                        </div>
                    </div>
                </div>
                <div class="liveMigrationContainer">
                    <div class="liveMigrationItem">
                        <img src="data:image/png;base64,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" alt="VictorOps" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                VictorOps Alerts
                            </span>
                            <span>
                                Allows Atlas alerts to create VictorOps incidences. Sets the default API key for alert configuration.
                            </span>
                            <button class="btn btn-light createDatabaseBtn">
                                Configure
                            </button>
                        </div>
                    </div>
                    <div class="liveMigrationItem">
                        <img src="data:image/png;base64,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" alt="flowdock" />
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                Flowdock Alerts
                            </span>
                            <span>
                                Allows Atlas alerts to post messages to your organization's flow.
                            </span>
                            <button class="btn btn-light createDatabaseBtn">
                                Configure
                            </button>
                        </div>
                    </div>
                </div>
                <div class="liveMigrationContainer">
                    <div class="liveMigrationItem">
                        <div class="liveMigrationNestedItem">
                            <span class="liveMigrationItemHeader">
                                Webhook Settings
                            </span>
                            <span>
                                Allows Atlas alerts to post to your custom webhook.
                            </span>
                            <button class="btn btn-light createDatabaseBtn">
                                Configure
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
            <span class="projectContextMenuItem" @click="isProjectRenameDialog = true">
                Edit Project
            </span>
            <span class="projectContextMenuItem" @click="copyProjectId">
                Copy Project ID
            </span>
            <span class="projectContextMenuItem" @click="currentProject = null; projectsTab = 'Settings'">
                Visit Project Settings
            </span>
            <span class="projectContextMenuItem">
                Leave Project
            </span>
        </div>
        <div v-if="isProjectRenameDialog" class="dialogBackdrop">
            <div class="dialog">
                <div class="closeRow">
                    <span class="material-icons closeBtn" @click="isProjectRenameDialog = false">
                        close
                    </span>
                </div>
                <span>
                    Rename Project
                </span>
                <hr />
                <span>
                    Change the name of the project vueVideos below.
                </span>
                <input v-model="projectNewName" type="text" class="form-control" />
                <div class="createCollectionDialogItem createCollectionDialogItemBtns">
                    <button class="btn btn-light createCollectionDialogItemBtn" @click="isProjectRenameDialog = false">
                        Отмена
                    </button>
                    <button class="btn btn-success createCollectionDialogItemBtn" @click="renameProject">
                        Переименовать Проект
                    </button>
                </div>
            </div>
        </div>
        <input readonly class="hiddenProjectID" type="text" ref="currentProjectId" />
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Project',
    data() {
        return {
            projectTab: 'Project Settings',
            activeAlertsTab: 'Open Alerts',
            activeAccessManagerTab: 'Users',
            activeBillingTab: 'Overview',
            schemaAdvisor: true,
            performanceAdvisorAndProfiler: true,
            dataExplorer: true,
            realTimePerformancePanel: true,
            securityQuickstart: false,
            preferredClusterMaintenanceStartTime: false,
            collectDatabaseSpecificStatistics: true,
            multipleRegionalizedPrivateEndpoints: false,
            isEditProjectName: false,
            newProjectName: '',
            isProjectCreateDialog: false,
            createProjectTab: 'first',
            newProjectMember: '',
            projects: [],
            keywords: '',
            projectMembers: [],
            cacher: {},
            isProjectContextMenu: false,
            isProjectRenameDialog: false,
            projectNewName: '',
            project: null, 
            projectName: '',
            timeZone: 'Please set your time zone',
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
                    this.projectName = this.$route.query.projectname
                    this.getProject()
                }
            })

        })

    },
    methods: {
        copyProjectId() {
            this.$refs.currentProjectId.value = this.currentProject._id
            this.$refs.currentProjectId.select()
            document.execCommand('copy')
            alert(`id текущего проекта скопирован`)
            this.currentProject = null
            this.$refs.currentProjectId.value = ''
            this.isProjectContextMenu = false
        },
        renameProject() {

            fetch(`http://localhost:4000/api/projects/rename/?projectid=${this.project._id}&projectname=${this.projectNewName}`, {
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
                    this.isProjectRenameDialog = false
                    this.projectName = this.projectNewName
                    this.getProject()
                    this.projectNewName = ''
                }
            })

        },
        setMultipleRegionalizedPrivateEndpoints() {

            fetch(`http://localhost:4000/api/project/multipleregionalizedprivateendpoints/set/?projectid=${this.project._id}&value=${!this.multipleRegionalizedPrivateEndpoints}`, {
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
                    this.multipleRegionalizedPrivateEndpoints = !this.multipleRegionalizedPrivateEndpoints
                    this.project.multipleRegionalizedPrivateEndpoints = this.multipleRegionalizedPrivateEndpoints
                }
            })

        },
        setCollectDatabaseSpecificStatistics() {

            fetch(`http://localhost:4000/api/project/collectdatabasespecificstatistics/set/?projectid=${this.project._id}&value=${!this.collectDatabaseSpecificStatistics}`, {
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
                    this.collectDatabaseSpecificStatistics = !this.collectDatabaseSpecificStatistics
                    this.project.collectDatabaseSpecificStatistics = this.collectDatabaseSpecificStatistics
                }
            })

        },
        setPreferredClusterMaintenanceStartTime() {

            fetch(`http://localhost:4000/api/project/preferredclustermaintenancestarttime/set/?projectid=${this.project._id}&value=${!this.preferredClusterMaintenanceStartTime}`, {
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
                    this.preferredClusterMaintenanceStartTime = !this.preferredClusterMaintenanceStartTime
                    this.project.preferredClusterMaintenanceStartTime = this.preferredClusterMaintenanceStartTime
                }
            })

        },
        setSecurityQuickstart() {

            fetch(`http://localhost:4000/api/cachers/securityquickstart/set/?projectid=${this.project._id}&value=${!this.securityQuickstart}`, {
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
                    alert('Обновил переключатель № 4')
                    this.securityQuickstart = !this.securityQuickstart
                    this.project.securityQuickstart = this.securityQuickstart
                }
            })

        },
        setRealTimePerformancePanel() {

            fetch(`http://localhost:4000/api/project/realtimeperformancepanel/set/?projectid=${this.project._id}&value=${!this.realTimePerformancePanel}`, {
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
                    alert('Обновил переключатель № 5')
                    this.realTimePerformancePanel = !this.realTimePerformancePanel
                    this.project.realTimePerformancePanel = this.realTimePerformancePanel
                }
            })

        },
        setDataExplorer() {

            fetch(`http://localhost:4000/api/project/dataexplorer/set/?projectid=${this.project._id}&value=${!this.dataExplorer}`, {
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
                    alert('Обновил переключатель № 6')
                    this.dataExplorer = !this.dataExplorer
                    this.project.dataExplorer = this.dataExplorer
                }
            })

        },
        setPerformanceAdvisorAndProfiler() {

            fetch(`http://localhost:4000/api/project/performanceadvisorandprofiler/set/?projectid=${this.project._id}&value=${!this.performanceAdvisorAndProfiler}`, {
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
                    alert('Обновил переключатель № 7')
                    this.performanceAdvisorAndProfiler = !this.performanceAdvisorAndProfiler
                    this.project.performanceAdvisorAndProfiler = this.performanceAdvisorAndProfiler
                }
            })

        },
        setSchemaAdvisor() {

            fetch(`http://localhost:4000/api/project/schemaadvisor/set/?projectid=${this.project._id}&value=${!this.schemaAdvisor}`, {
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
                    alert('Обновил переключатель № 8')
                    this.schemaAdvisor = !this.schemaAdvisor
                    this.project.schemaAdvisor = this.schemaAdvisor
                }
            })

        },
        deleteProject() {

            fetch(`http://localhost:4000/api/projects/delete/?projectid=${this.project._id}`, {
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
                    this.$router.push({ name: 'Projects' })
                }
            })

        },
        getProject() {

            fetch(`http://localhost:4000/api/projects/get/?projectname=${this.projectName}`, {
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
                    alert('Проект получил')
                    this.project = JSON.parse(result).project

                    this.multipleRegionalizedPrivateEndpoints = this.project.multipleRegionalizedPrivateEndpoints
                    this.collectDatabaseSpecificStatistics = this.project.collectDatabaseSpecificStatistics
                    this.preferredClusterMaintenanceStartTime = this.project.preferredClusterMaintenanceStartTime
                    this.securityQuickstart = this.project.securityQuickstart
                    this.realTimePerformancePanel = this.project.realTimePerformancePanel
                    this.performanceAdvisorAndProfiler = this.project.performanceAdvisorAndProfiler
                    this.dataExplorer = this.project.dataExplorer
                    this.schemaAdvisor = this.project.schemaAdvisor

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
        height: 275px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0px 35px;
        box-sizing: border-box;
        padding: 25px;
    }

    .liveMigrationItemHeader {
        font-weight: bolder;
    }
    
    .liveMigrationNestedItem {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0px 25px;
        align-items: flex-start;
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
        cursor: pointer;
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
        cursor: pointer;
    }

    .dialogBackdrop {
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dialog {
        z-index: 15;
        width: 50%;
        height: 50%;
        background-color: rgb(255, 255, 255);
        border-radius: 15px;
        box-sizing: border-box;
        padding: 35px;
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

    .closeBtn {
        cursor: pointer;
    }

    .closeRow {
        display: flex;
        justify-content: flex-end;
    }

    .dialogHeader {
        font-size: 20px;
        font-weight: bolder;
    }

    .hiddenProjectID {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: default;
    }

</style>