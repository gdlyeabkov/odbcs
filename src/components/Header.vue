<template>
    <div class="header">
        <div class="headerRow">
            <div class="headerItem">
                <img @click="$router.push({ name: 'Projects' })" src="https://assets-global.website-files.com/6064b31ff49a2d31e0493af1/610d75bbd917363ac7a1fec0_mongoDB.svg" alt="mongo db" width="75px" class="logo" />
                <button class="btn btn-light organizationSelector">
                    <span class="material-icons">
                        apartment
                    </span>
                    <span>
                        {{
                            cacher.companyName
                        }}
                    </span>
                </button>
                <span class="settingsShortcut material-icons btn btn-light">
                    settings
                </span>
                <div class="headerSubitem accessManager">
                    <span>
                        Диспетчер доступа
                    </span>
                    <span class="material-icons">
                        arrow_drop_down
                    </span>
                </div>
                <span class="billing">
                    Счета
                </span>
            </div>
            <div class="headerItem">
                <span class="allClusters headerItemElement">
                    Все класеры
                </span>
                <span class="getHelpBtn headerItemElement">
                    Получить помощь    
                </span>
                <button class="personalArea btn btn-light" @click="isContextMenu = !isContextMenu">
                    <span>
                        {{
                            `${cacher.firstName}`
                        }}
                    </span>
                    <span class="material-icons">
                        arrow_drop_down
                    </span>
                </button>
            </div>
        </div>
        <div class="headerRow" v-if="showProjectPreview">
            <div class="headerTabs">
                <div class="input-group">
                    <span class="material-icons input-group-text">
                        folder
                    </span>
                    <span class="btn btn-secondary">
                        {{
                            previewProject.name
                        }}
                    </span>
                    <span class="material-icons input-group-text">
                        arrow_drop_down
                    </span>
                </div>
                <span class="material-icons">
                    more_vert
                </span>
                <div :class="{activeHeaderTab: activeHeaderTab === 'Atlas', headerTab: true}" @click="activeHeaderTab = 'Atlas'">
                    <span :class="{'material-icons': true,  headerTabIcon: true, activeHeaderTab: activeHeaderTab === 'Atlas'}">
                        analytics
                    </span>
                    <span>
                        Atlas
                    </span>
                </div>
                <div :class="{activeHeaderTab: activeHeaderTab === 'Realm', headerTab: true}" @click="activeHeaderTab = 'Realm'">
                    <span :class="{'material-icons': true,  headerTabIcon: true, activeHeaderTab: activeHeaderTab === 'Realm'}">
                        analytics
                    </span>
                    <span>
                        Realm
                    </span>
                </div>
                <div :class="{activeHeaderTab: activeHeaderTab === 'Charts', headerTab: true}" @click="activeHeaderTab = 'Charts'">
                    <span :class="{'material-icons': true,  headerTabIcon: true, activeHeaderTab: activeHeaderTab === 'Charts'}">
                        analytics
                    </span>
                    <span>
                        Charts
                    </span>
                </div>
            </div>
            <div class="headerTabs">
                <div class="headerTab">
                    <span class="material-icons headerTabIcon">
                        person_add
                    </span>
                </div>
                <div class="headerTab">
                    <span class="material-icons headerTabIcon">
                        file_copy
                    </span>
                </div>
                <div class="headerTab">
                    <span class="material-icons headerTabIcon">
                        notifications
                    </span>
                </div>
            </div>
        </div>
        <div v-if="isContextMenu" class="contextMenu">
            <div class="contextMenuMainItem">
                <img src="https://assets-global.website-files.com/6064b31ff49a2d31e0493af1/610d75bbd917363ac7a1fec0_mongoDB.svg" alt="mongo db" class="contextMenuMainItemItem" width="75px" />
                <span class="contextMenuMainItemItem contextMenuMainItemItemHeader">
                    Gleb Dyakov
                </span>
                <span class="contextMenuMainItemItem">
                    glebsilnei@mail.ru
                </span>
                <button class="btn btn-dark manageYourDBAccountBtn contextMenuMainItemItem">
                    Manage your MongoDB Account
                </button>
            </div>
            <div class="contextMenuItem firstContextMenuItem">
                <span class="material-icons">
                    cloud
                </span>
                <div class="contextMenuItemContent">
                    <span class="contextMenuItemContentHeader">
                        Cloud
                    </span>
                    <span class="contextMenuItemContentDescription">
                        cloud.mongodb.com
                    </span>
                </div>
                <span class="material-icons">
                    arrow_drop_down
                </span>
            </div>
            <div class="contextMenuItem">
                <span class="material-icons">
                    menu_book
                </span>
                <div class="contextMenuItemContent">
                    <span class="contextMenuItemContentHeader">
                        Documentation
                    </span>
                    <span class="contextMenuItemContentDescription">
                        docs.mongodb.com
                    </span>
                </div>
                <span class="material-icons">
                    arrow_drop_down
                </span>
            </div>
            <div class="contextMenuItem">
                <span class="material-icons">
                    school
                </span>
                <div class="contextMenuItemContent">
                    <span class="contextMenuItemContentHeader">
                        University
                    </span>
                    <span class="contextMenuItemContentDescription">
                        university.mongodb.com
                    </span>
                </div>
                <span class="material-icons">
                    arrow_drop_down
                </span>
            </div>
            <div class="contextMenuItem">
                <span class="material-icons">
                    forum
                </span>
                <div class="contextMenuItemContent">
                    <span class="contextMenuItemContentHeader">
                        Developer Hub
                    </span>
                    <span class="contextMenuItemContentDescription">
                        developer.mongodb.com
                    </span>
                </div>
                <span class="material-icons">
                    arrow_drop_down
                </span>
            </div>
            <div class="contextMenuItem">
                <span class="material-icons">
                    hub
                </span>
                <div class="contextMenuItemContent">
                    <span class="contextMenuItemContentHeader">
                        Support
                    </span>
                    <span class="contextMenuItemContentDescription">
                        support.mongodb.com
                    </span>
                </div>
                <span class="material-icons">
                    arrow_drop_down
                </span>
            </div>
            <div class="contextMenuItem">
                <span class="material-icons">
                    support_agent
                </span>
                <div class="contextMenuItemContent">
                    <span class="contextMenuItemContentHeader">
                        Give us feedback
                    </span>
                    <span class="contextMenuItemContentDescription">
                        
                    </span>
                </div>
                <span class="material-icons">
                    
                </span>
            </div>
            <div class="contextMenuItem" @click="logout">
                <div class="contextMenuItemContent">
                    <span class="contextMenuItemContentHeader">
                        Logout
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Header',
    props: {
        activeTab: {
            type: String,
            default: 'Atlas'
        },
        showProjectPreview: {
            type: Boolean,
            default: false
        },
        previewProject: {
            type: Object,
            default: {
                name: ''
            }
        }
    },
    data() {
        return {
            activeHeaderTab: 'Atlas',
            isContextMenu: false,
            cacher: {
                firstName: 'Неизвестно',
                lastName: 'Неизвестно',
                companyName: 'Неизвестно'
            },
            token: window.localStorage.getItem('odbcstoken')
        }
    },
    watch: {
        activeTab(tab) {
            this.activeHeaderTab = tab
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
                }
            })
            
        })

    },
    methods: {
        logout() {
            
            this.token = jwt.sign({
              cacher: ''
            }, 'odbcssecret', { expiresIn: 1 })
            window.localStorage.setItem("odbcstoken", this.token)
            setTimeout(() => {
                this.$router.push({ 'name': "Auth" })
            }, 1000)

        }
    }
}
</script>

<style scoped>
    
    .header {
        margin-bottom: 5px;
        min-height: 50px;
        box-shadow: 0px 0px 25px rgb(200, 200, 200);
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 25px;
        display: flex;
        flex-direction: column;
        
    }

    .headerItem {
        display: flex;
        align-items: center;
    }

    .headerSubitem {
        display: flex;
        margin: 0 15px;
    }

    .settingsShortcut {
        color: rgb(150, 150, 150);
        border: 1px solid rgb(150, 150, 150);
        margin: 0px 15px;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
    }

    .settingsShortcut:hover {
        background-color: rgb(200, 255, 255);
        color: rgb(100, 100, 100);
    }
    
    
    .accessManager {
        padding: 0px 5px;
        cursor: pointer;
    }

    .accessManager:hover {
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
    }

    .billing {
        cursor: pointer;
    }

    .billing:hover {
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
        color: rgb(0, 150, 150);
    }

    .personalArea {
        border-radius: 35px;
        border: 1px solid rgb(200, 200, 200);
        display: flex;
        align-items: center;
        width: 100px;
        margin: 0px 10px;
        justify-content: space-between;
    }

    .personalArea:hover {
        box-shadow: 0px 0px 5px rgb(200, 200, 200);
    }

    .headerItemElement {
        margin: 0 10px;
    }

    .organizationSelector {
        font-weight: bolder;
        width: 150px;
        justify-content: space-between;
        border: 1px solid rgb(215, 215, 215);
        display: flex;
        align-items: center;
    }

    .getHelpBtn {
        cursor: pointer;
    }

    .getHelpBtn:hover {
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
    }

    .allClusters {
        cursor: pointer;
    }

    .allClusters:hover {
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
        color: rgb(0, 150, 150);
    }

    .headerRow {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .headerTabs {
        display: flex;
    }

    .headerTab {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 0px 10px;
    }

    .headerTabIcon {
        color: rgb(200, 200, 200);
    }

    .activeHeaderTab {
        font-weight: bolder;
        color: rgb(0, 150, 0);
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
    }

    .contextMenu {
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        width: calc(325px - 15px);
        min-height: 450px;
        position: absolute;
        top: 75px;
        left: calc(100% - 325px);
        z-index: 5;
        border: 1px solid rgb(200, 200, 200);
    }

    .firstContextMenuItem {
        border-left: 5px solid rgb(0, 125, 0);
    }

    .contextMenuItem {
        box-sizing: border-box;
        padding: 0px 25px;
        width: 100%;
        height: 50px;
        border-top: 1px solid rgb(200, 200, 200);
        border-bottom: 1px solid rgb(200, 200, 200);
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .contextMenuMainItem {
        color: rgb(255, 255, 255);
        width: 100%;
        height: 250px;
        background-color: rgb(0, 0, 0);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contextMenuItemContent {
        display: flex;
        flex-direction: column;
    }

    .manageYourDBAccountBtn {
        border: 1px solid rgb(255, 255, 255);
    }

    .contextMenuMainItemItem {
        margin: 5px 0px;
    }

    .contextMenuMainItemItemHeader {
        font-weight: bolder;
    }

    .contextMenuItemContentHeader {
        font-weight: bolder;
    }

    .contextMenuItemContentDescription {
        color: rgb(0, 100, 255);
    }

    .logo {
        cursor: pointer;
    }

</style>