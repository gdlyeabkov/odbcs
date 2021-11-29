<template>
    <div>
        <div class="header">
            <img src="https://assets-global.website-files.com/6064b31ff49a2d31e0493af1/610d75bbd917363ac7a1fec0_mongoDB.svg" alt="mongo db" width="75px" />
            <button class="personalArea btn btn-light">
                <span>
                    Gleb
                </span>
                <span class="material-icons">
                    arrow_drop_down
                </span>
            </button>
        </div>
        <div class="body">
            <div class="bodyHeader">
                <span class="createClusterLabel">
                    CLUSTERS > CREATE NEW CLUSTER
                </span>
                <span class="createClusterHeader">
                    Create New Cluster
                </span>
            </div> 
            <div class="clusterForm">
                <div class="clusterTypes">
                    <div :class="{clusterType: true, activeClusterType: activeClusterType === 'Serverless'}" @click="activeClusterType = 'Serverless'">
                        <span>
                            Preview Serverless
                        </span>
                    </div>
                    <div :class="{clusterType: true, activeClusterType: activeClusterType === 'Dedicated'}" @click="activeClusterType = 'Dedicated'">
                        <span>
                            Dedicated
                        </span>
                    </div>
                    <div :class="{clusterType: true, activeClusterType: activeClusterType === 'Shared'}" @click="activeClusterType = 'Shared'">
                        <span>
                            Shared
                        </span>
                    </div>
                </div>
                <div class="clusterRegisterInputBlock">
                    <div class="clusterRegisterInputBlockItem">
                        <span class="clusterRegisterInputBlockItemHeader">
                            For production applications with sophisticated workload requirements. Advanced configuration controls.
                        </span>
                        <span>
                            Network isolation, end-to-end encryption, and fine-grained access controls.
                        </span>
                        <span>
                            On-demand performance advice, including index and schema suggestions.
                        </span>
                    </div>
                    <div class="clusterRegisterInputBlockItem">
                        <span class="clusterRegisterInputBlockItemIcon material-icons">
                            close
                        </span>
                    </div>
                </div>
                <div class="clusterRegisterInputBlock">
                    <div class="clusterRegisterInputBlockItem">
                        <span class="clusterRegisterInputBlockItemHeader">
                            Global Cluster Configuration
                        </span>
                    </div>
                    <div class="clusterRegisterInputBlockItem">
                        <span class="clusterRegisterInputBlockItemIcon material-icons">
                            expand_more
                        </span>
                    </div>
                </div>
                <div class="clusterRegisterInputBlock">
                    <div class="clusterRegisterInputBlockItem">
                        <span class="clusterRegisterInputBlockItemHeader">
                            Cloud Provider & Region
                        </span>
                    </div>
                    <div class="clusterRegisterInputBlockItemRow">
                        <span class="clusterRegisterInputBlockItemRowItem clusterRegisterInputBlockItemHeader">
                            AWS, N. Virginia (us-east-1)
                        </span>
                        <span class="clusterRegisterInputBlockItemIcon material-icons clusterRegisterInputBlockItemRowItem">
                            expand_more
                        </span>
                    </div>
                </div>
                <div class="clusterRegisterInputBlock">
                    <div class="clusterRegisterInputBlockItem">
                        <span class="clusterRegisterInputBlockItemHeader">
                            Cluster Tier
                        </span>
                    </div>
                    <div class="clusterRegisterInputBlockItem">
                        <span class="clusterRegisterInputBlockItemHeader">
                            M30 (8 GB RAM, 40 GB Storage)
                        </span>
                        <div class="clusterRegisterInputBlockItemRow">
                            <span class="clusterRegisterInputBlockItemRowItem">
                                3 000 IOPS, Encrypted, Auto-expand Storage
                            </span>
                            <span class="clusterRegisterInputBlockItemIcon material-icons clusterRegisterInputBlockItemRowItem">
                                expand_more
                            </span>
                        </div>
                    </div>
                </div>
                <div class="clusterRegisterInputBlock">
                    <div class="clusterRegisterInputBlockItem">
                        <span class="clusterRegisterInputBlockItemHeader">
                            Additional Settings
                        </span>
                    </div>
                    <div class="clusterRegisterInputBlockItem">
                        <span class="clusterRegisterInputBlockItemHeader">
                            MongoDB 4.4, Backup
                        </span>
                        <div class="clusterRegisterInputBlockItemRow">
                            <span class="clusterRegisterInputBlockItemRowItem">
                                Cloud Backup
                            </span>
                            <span class="clusterRegisterInputBlockItemIcon material-icons clusterRegisterInputBlockItemRowItem">
                                expand_more
                            </span>
                        </div>
                    </div>
                </div>
                <div class="" @click="clusterNameSetter = !clusterNameSetter">
                    <div class="clusterRegisterInputBlock">
                        <div class="clusterRegisterInputBlockItem">
                            <span class="clusterRegisterInputBlockItemHeader">
                                Cluster Name
                            </span>
                        </div>
                        <div class="clusterRegisterInputBlockItemRow">
                            <span class="clusterRegisterInputBlockItemRowItem clusterRegisterInputBlockItemHeader">
                                Cluster 1
                            </span>
                            <span class="clusterRegisterInputBlockItemIcon material-icons clusterRegisterInputBlockItemRowItem">
                                expand_more
                            </span>
                        </div>
                    </div>
                    <div class="clusterRegisterInputBlock dropdownClusterMenu" v-if="clusterNameSetter">
                        <div class="">
                            <span class="clusterRegisterInputBlockItemHeader">
                                One time only: once your cluster is created, you won't be able to change its name.
                            </span>
                        </div>
                        <div class="clusterRegisterInputBlockItem">
                            <input v-model="clusterName" type="text" class="form-control" />
                            <span class="clusterRegisterInputBlockItemRowItem clusterRegisterInputBlockItemHeader">
                                Cluster names can only contain ASCII letters, numbers, and hyphens.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer">
            <span class="clusterPricing footerItem">
                $0.54/hour
            </span>
            <span class="clusterPricingLabel footerItem">
                Pay-as-you-go! You will be billed hourly and can terminate your cluster anytime. Excludes<br/>variable data transfer, backup, and taxes.
            </span>
            <div class="footerItem">
                <button class="footerBtn btn btn-light">
                    Cancel
                </button>
                <button class="btn btn-success footerBtn" @click="createCluster">
                    Create Cluster
                </button>
            </div>
            <div class="chat">

            </div>
        </div>
    </div>
</template>

<script>

import * as jwt from 'jsonwebtoken'

export default {
    name: 'ClusterRegister',
    data() {
        return {
            activeClusterType: 'Dedicated',
            clusterName: 'Cluster1',
            free: true,
            shared: true,
            version: '4.4.10',
            region: 'AWS/Frankfurt (eu-central-1)',
            clusterTier: 'M0 Sandbox (General)',
            type: 'Replica Set - 3 nodes',
            backups: 'Inactive',
            linkedRealmApp: 'None Linked',
            atlasSearch: 'Create Index',
            cacher: null,
            clusterNameSetter: false,
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
                }
            })
            
        })

    },
    methods: {
        createCluster() {
            
            console.log(`создал кластер`)
            fetch(`http://localhost:4000/api/clusters/create/?clustername=${this.clusterName}&free=${this.free}&shared=${this.shared}&version=${this.version}&region=${this.region}&clustertier=${this.clusterTier}&type=${this.type}&backups=${this.backups}&linkedrealmapp=${this.linkedRealmApp}&atlassearch=${this.atlasSearch}&cacheremail=${this.cacher.email}&projectname=${this.projectName}`, {
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
                    alert('кластер создан')
                    let cluster = JSON.parse(result).cluster
                    this.$router.push({ name: 'Cluster', query: { 'clusterid': cluster._id } })
                }
            })

        }
    }
}
</script>

<style scoped>
    
    .header {
        /* box-sizing: border-box;
        padding: 15px; */
        position: fixed;
        margin: 15px 0px;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
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

    .body {
        position: relative;
        top: 65px;
    }

    .bodyHeader {
        box-shadow: 0px 4px 2px rgb(235, 235, 235);
        box-sizing: border-box;
        padding: 25px 125px;
        display: flex;
        flex-direction: column;
    }
    
    .createClusterHeader {
        font-size: 24px;
        font-weight: bolder;
    }

    .createClusterLabel {
        color: rgb(175, 175, 175);
        font-size: 12px;
    }

    .footer {
        box-sizing: border-box;
        padding: 0px 125px;
        position: fixed;
        top: calc(100% - 50px);
        left: 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .clusterPricing {
        font-size: 24px;
    }
    
    .clusterPricingLabel {
        font-size: 12px;
    }

    .footerItem {
        margin: 0px 15px;
    }

    .footerBtn {
        font-weight: bolder;
        border: 1px solid rgb(0, 0, 0);
        margin: 0px 5px;
    }

    .chat {
        border-radius: 100%;
        background-color: rgb(0, 0, 0);
        width: 45px;
        height: 45px;
    }

    .clusterRegisterInputBlock {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 45px 35px;
        box-shadow: 0px 0px 15px rgb(215, 215, 215);
        width: 75%;
        height: 200px;
        margin: 35px auto;
        cursor: pointer;
    }

    .clusterRegisterInputBlockItem {
        display: flex;
        flex-direction: column;
    }

    .clusterRegisterInputBlockItemIcon {
        color: rgb(200, 200, 200);
        font-weight: bolder;
    }

    .clusterRegisterInputBlockItemHeader {
        font-weight: bolder;
    }

    .clusterRegisterInputBlockItemRow {
        flex-direction: row;
        align-items: flex-start;
        display: flex;
    }

    .clusterRegisterInputBlockItemRowItem {
        margin: 0px 10px;
    }

    .clusterTypes {
        display: flex;
        margin: 50px 0px;
    }

    .clusterType {
        cursor: pointer;
        background-color: rgb(255, 255, 255);
        border-radius: 8px;
        border: 1px solid rgb(200, 200, 200);
        width: 25%;
        height: 85px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        margin: 0px 35px;
    }

    .clusterForm {
        margin: auto;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        /* justify-content: center; */
    }

    .activeClusterType {
        border: 2px solid rgb(0, 200, 0);
    }

    .dropdownClusterMenu {
        margin-top: -150px;
    }

</style>