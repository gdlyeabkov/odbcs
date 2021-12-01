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
                <div class="totalContainerItem" :style="`${globalClusterConfigurationSetter ? 'height: 400px;' : ''}`" @click="toggleGlobalClusterConfigurationSetter($event)">
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
                    <div class="clusterRegisterInputBlock dropdownClusterMenu" v-if="globalClusterConfigurationSetter">
                        <div class="setterColumn">
                            <span class="clusterRegisterInputBlockItemHeader ">
                                Enable Global Writes (M30 and up)
                            </span>
                            <span>
                                Low-latency reads and writes from anywhere in the world. View documentation
                            </span>
                        </div>
                        <div class="clusterRegisterInputBlockItem">
                            <span id="setterId" class="settingItemChip material-icons" @click="enableGlobalWrites = !enableGlobalWrites">
                                {{
                                    !enableGlobalWrites ?
                                        'toggle_off'
                                    :
                                        'toggle_on'
                                }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="totalContainerItem" :style="`${cloudProviderAndRegionSetter ? 'height: 1200px;' : ''}`" @click="toggleCloudProviderAndRegionSetter($event)">
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
                    <div class="clusterRegisterInputBlock dropdownClusterMenu" v-if="cloudProviderAndRegionSetter">
                        <div class="">
                            <img src="https://cloud.mongodb.com/static/images/aws_logo_nds_cluster_form.png" alt="" width="75px" class="cloudProvider" />
                            <img src="https://cloud.mongodb.com/static/images/gcp_logo_nds_cluster_form.png" alt="" width="75px" class="cloudProvider" />
                            <img src="https://cloud.mongodb.com/static/images/azure_logo_nds_cluster_form.png" alt="" width="75px" class="cloudProvider" />
                        </div>
                    </div>
                    <div class="clusterRegisterInputBlock dropdownClusterMenu" v-if="cloudProviderAndRegionSetter">
                        <div class="setterRow">
                            <img src="https://cloud.mongodb.com/static/images/cluster-clouds.png" alt="" width="175px" />
                            <div class="setterColumn">
                                <span class="clusterRegisterInputBlockItemHeader ">
                                    Multi-Cloud, Multi-Region & Workload Isolation (M10+ clusters)
                                </span>
                                <span>
                                    Distribute data across clouds AWS Logo GCP Logo Azure Logo or regions for improved availability and local read performance, or introduce replicas for workload isolation. Learn more
                                </span>
                            </div>
                        </div>
                        <div class="clusterRegisterInputBlockItem">
                            <span id="setterId" class="settingItemChip material-icons" @click="workloadIsolation = !workloadIsolation">
                                {{
                                    !workloadIsolation ?
                                        'toggle_off'
                                    :
                                        'toggle_on'
                                }}
                            </span>
                        </div>
                    </div>
                    <div class="clusterRegisterInputBlock dropdownClusterMenu" v-if="cloudProviderAndRegionSetter">
                        <div class="setterColumn regionContainer">
                            <div class="region">
                                <span class="regionHeader">
                                    NORTH AMERICA / SOUTH AMERICA
                                </span>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Las Vegas (us-west4)'}" @click="activeCity = 'Las Vegas (us-west4)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-usa.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Las Vegas (us-west4)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'N. Virginia (us-east4)'}" @click="activeCity = 'N. Virginia (us-east4)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-usa.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        N. Virginia (us-east4)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Los Angeles (us-west2)'}" @click="activeCity = 'Los Angeles (us-west2)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-usa.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Los Angeles (us-west2)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'South Carolina (us-east1)'}" @click="activeCity = 'South Carolina (us-east1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-usa.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        South Carolina (us-east1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Sao Paulo (southamerica-east1)'}" @click="activeCity = 'Sao Paulo (southamerica-east1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-brazil.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Sao Paulo (southamerica-east1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="freeTier" id="setterId">
                                        Free tier available
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Montreal (northamerica-northeast1)'}" @click="activeCity = 'Montreal (northamerica-northeast1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-canada.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Montreal (northamerica-northeast1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Salt Lake City (us-west3)'}" @click="activeCity = 'Salt Lake City (us-west3)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-usa.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Salt Lake City (us-west3)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Oregon (us-west1)'}" @click="activeCity = 'Oregon (us-west1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-usa.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Oregon (us-west1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Iowa (us-central1)'}" @click="activeCity = 'Iowa (us-central1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-usa.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Iowa (us-central1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="freeTier" id="setterId">
                                        Free tier available
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="setterColumn regionContainer">
                            <div class="region">
                                <span class="regionHeader">
                                    EUROPE / MIDDLE EAST / AFRICA
                                </span>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'London (europe-west2)'}" @click="activeCity = 'London (europe-west2)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-britain.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        London (europe-west2)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Netherlands (europe-west4)'}" @click="activeCity = 'Netherlands (europe-west4)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-netherlands.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Netherlands (europe-west4)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Frankfurt (europe-west3)'}" @click="activeCity = 'Frankfurt (europe-west3)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-germany.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Frankfurt (europe-west3)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Zurich (europe-west6)'}" @click="activeCity = 'Zurich (europe-west6)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-swiss.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Zurich (europe-west6)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Finland (europe-north1)'}" @click="activeCity = 'Finland (europe-north1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-finland.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Finland (europe-north1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Belgium (europe-west1)'}" @click="activeCity = 'Belgium (europe-west1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-belgium.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Belgium (europe-west1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="freeTier" id="setterId">
                                        Free tier available
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Warsaw (europe-central2)'}" @click="activeCity = 'Warsaw (europe-central2)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-poland.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Warsaw (europe-central2)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="region">
                                <span class="regionHeader">
                                    AUSTRALIA
                                </span>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Sydney (australia-southeast1)'}" @click="activeCity = 'Sydney (australia-southeast1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-australia.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Sydney (australia-southeast1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Melbourne (australia-southeast2)'}" @click="activeCity = 'Melbourne (australia-southeast2)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-australia.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Melbourne (australia-southeast2)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="setterColumn regionContainer">
                            <div class="region">
                                <span class="regionHeader">
                                    ASIA PACIFIC
                                </span>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Tokyo (asia-northeast1)'}" @click="activeCity = 'Tokyo (asia-northeast1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-japan.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Tokyo (asia-northeast1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="freeTier" id="setterId">
                                        Free tier available
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Mumbai (asia-south1)'}" @click="activeCity = 'Mumbai (asia-south1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-india.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Mumbai (asia-south1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="freeTier" id="setterId">
                                        Free tier available
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Melbourne (australia-southeast2)'}" @click="activeCity = 'Melbourne (australia-southeast2)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-hongkong.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Hong Kong (asia-east2)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Singapore (asia-southeast1)'}" @click="activeCity = 'Singapore (asia-southeast1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-singapore.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Singapore (asia-southeast1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="freeTier" id="setterId">
                                        Free tier available
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Osaka (asia-northeast2)'}" @click="activeCity = 'Osaka (asia-northeast2)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-japan.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Osaka (asia-northeast2)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Taiwan (asia-east1)'}" @click="activeCity = 'Taiwan (asia-east1)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-taiwan.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Taiwan (asia-east1)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="freeTier" id="setterId">
                                        Free tier available
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Delhi (asia-south2)'}" @click="activeCity = 'Delhi (asia-south2)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-india.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Delhi (asia-south2)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="" id="setterId">
                                        
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Jakarta (asia-southeast2)'}" @click="activeCity = 'Jakarta (asia-southeast2)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-indonesia.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Jakarta (asia-southeast2)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="freeTier" id="setterId">
                                        Free tier available
                                    </div>
                                </div>
                            </div>
                            <div :class="{city: true, activeCity: activeCity === 'Seoul (asia-northeast3)'}" @click="activeCity = 'Seoul (asia-northeast3)'" id="setterId">
                                <div class="cityItem" id="setterId">
                                    <img class="cityItemElement" src="https://cloud.mongodb.com/static/images/flag-korea.svg" alt="" id="setterId" />
                                    <span class="cityItemElement cityItemHeader" id="setterId">
                                        Seoul (asia-northeast3)
                                    </span>
                                    <span  class="cityItemElement material-icons" id="setterId">
                                        star
                                    </span>
                                </div>
                                <div class="cityItem" id="setterId">
                                    <div class="freeTier" id="setterId">
                                        Free tier available
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="totalContainerItem" :style="`${clusterTierSetter ? 'height: 1200px;' : ''}`" @click="toggleClusterTierSetter($event)">
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
                    <div class="clusterRegisterInputBlock dropdownClusterMenu" v-if="clusterTierSetter">
                        <div class="setterColumn">
                            <span class="clusterRegisterInputBlockItemHeader ">
                                Base hourly rate is for a MongoDB replica set with 3 data bearing servers.
                            </span>
                            <span>
                                Dedicated Clusters for development environments and low-traffic applications
                            </span>
                            <table>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        Tier
                                    </td>
                                    <td class="tableCell">
                                        RAM
                                    </td>
                                    <td class="tableCell">
                                        Storage
                                    </td>
                                    <td class="tableCell">
                                        vCPU
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        Base Price
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M10
                                    </td>
                                    <td class="tableCell">
                                        2 GB
                                    </td>
                                    <td class="tableCell">
                                        10 GB
                                    </td>
                                    <td class="tableCell">
                                        2 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $0.08/hr
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M20
                                    </td>
                                    <td class="tableCell">
                                        4 GB
                                    </td>
                                    <td class="tableCell">
                                        20 GB
                                    </td>
                                    <td class="tableCell">
                                        2 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $0.20/hr
                                    </td>
                                </tr>
                            </table>
                            <span>
                                Dedicated Clusters for high-traffic applications and large datasets
                            </span>
                            <span>
                                Additional hardware configurations available for specialized workloads
                            </span>
                            <table>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M40
                                    </td>
                                    <td class="tableCell">
                                        16 GB
                                    </td>
                                    <td class="tableCell">
                                        80 GB
                                    </td>
                                    <td class="tableCell">
                                        4 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $1.04/hr
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M50
                                    </td>
                                    <td class="tableCell">
                                        32 GB
                                    </td>
                                    <td class="tableCell">
                                        160 GB
                                    </td>
                                    <td class="tableCell">
                                        8 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $2.00/hr
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M60
                                    </td>
                                    <td class="tableCell">
                                        64 GB
                                    </td>
                                    <td class="tableCell">
                                        320 GB
                                    </td>
                                    <td class="tableCell">
                                        16 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $3.95/hr
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M80
                                    </td>
                                    <td class="tableCell">
                                        128 GB
                                    </td>
                                    <td class="tableCell">
                                        750 GB
                                    </td>
                                    <td class="tableCell">
                                        32 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $7.30/hr
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M140
                                    </td>
                                    <td class="tableCell">
                                        192 GB
                                    </td>
                                    <td class="tableCell">
                                        1000 GB
                                    </td>
                                    <td class="tableCell">
                                        48 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $10.99/hr
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M200
                                    </td>
                                    <td class="tableCell">
                                        256 GB
                                    </td>
                                    <td class="tableCell">
                                        1500 GB
                                    </td>
                                    <td class="tableCell">
                                        64 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $14.59/hr
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M300
                                    </td>
                                    <td class="tableCell">
                                        384 GB
                                    </td>
                                    <td class="tableCell">
                                        2000 GB
                                    </td>
                                    <td class="tableCell">
                                        96 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $21.85/hr
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M400
                                    </td>
                                    <td class="tableCell">
                                        512 GB
                                    </td>
                                    <td class="tableCell">
                                        3000 GB
                                    </td>
                                    <td class="tableCell">
                                        64 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $22.40/hr
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tableCell firstTableCell">
                                        M700
                                    </td>
                                    <td class="tableCell">
                                        768 GB
                                    </td>
                                    <td class="tableCell">
                                        4096 GB
                                    </td>
                                    <td class="tableCell">
                                        96 vCPUs
                                    </td>
                                    <td class="tableCell lastTableCell">
                                        from $33.26/hr
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="totalContainerItem" :style="`${additionalSettingsSetter ? 'height: 400px;' : ''}`" @click="toggleAdditionalSettingsSetter($event)">
                    <div class="clusterRegisterInputBlock">
                        <div class="clusterRegisterInputBlockItem">
                            <span class="clusterRegisterInputBlockItemHeader">
                                Additional Settings
                            </span>
                        </div>
                        <div class="clusterRegisterInputBlockItem">
                            <span class="clusterRegisterInputBlockItemHeader">
                                {{
                                    versionLabels[version]
                                }}
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
                    <div class="clusterRegisterInputBlock dropdownClusterMenu" v-if="additionalSettingsSetter">
                        <div class="">
                            <span class="clusterRegisterInputBlockItemHeader ">
                                Select a Version
                            </span>
                            <span>
                                All clusters launch with the WiredTiger™ storage engine.
                            </span>
                        </div>
                        <div class="clusterRegisterInputBlockItem">
                            <select id="setterId" v-model="version" class="form-select h-50">
                                <option value="4.0">MongoDB 4.0</option>
                                <option value="4.2">MongoDB 4.2</option>
                                <option value="4.4">MongoDB 4.4</option>
                                <option value="5.0">MongoDB 5.0</option>
                                <option value="auto-upgrades">Latest Release (auto-upgrades)</option>
                            </select>    
                        </div>
                    </div>
                </div>
                <div class="totalContainerItem" :style="`${clusterNameSetter ? 'height: 400px;' : ''}`" @click="toggleClusterNameSetter($event)">
                    <div class="clusterRegisterInputBlock">
                        <div class="clusterRegisterInputBlockItem">
                            <span class="clusterRegisterInputBlockItemHeader">
                                Cluster Name
                            </span>
                        </div>
                        <div class="clusterRegisterInputBlockItemRow">
                            <span class="clusterRegisterInputBlockItemRowItem clusterRegisterInputBlockItemHeader">
                                {{ clusterName }}
                            </span>
                            <span class="clusterRegisterInputBlockItemIcon material-icons clusterRegisterInputBlockItemRowItem">
                                expand_more
                            </span>
                        </div>
                    </div>
                    <div class="clusterRegisterInputBlock dropdownClusterMenu" v-if="clusterNameSetter">
                        <div class="">
                            <span class="clusterRegisterInputBlockItemHeader ">
                                One time only: once your cluster is created, you won't be able to change its name.
                            </span>
                        </div>
                        <div class="clusterRegisterInputBlockItem">
                            <input id="setterId" v-model="clusterName" type="text" class="form-control" />
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
            version: '4.4',
            region: 'AWS/Frankfurt (eu-central-1)',
            clusterTier: 'M0 Sandbox (General)',
            type: 'Replica Set - 3 nodes',
            backups: 'Inactive',
            linkedRealmApp: 'None Linked',
            atlasSearch: 'Create Index',
            cacher: null,
            globalClusterConfigurationSetter: false,
            cloudProviderAndRegionSetter: false,
            clusterTierSetter: false,
            additionalSettingsSetter: false,
            clusterNameSetter: false,
            enableGlobalWrites: false,
            workloadIsolation: false,
            activeCity: 'Las Vegas (us-west4)',
            versionLabels: {
                '4.0': 'MongoDB 4.0',
                '4.2': 'MongoDB 4.2',
                '4.4': 'MongoDB 4.4',
                '5.0': 'MongoDB 5.0',
                'auto-upgrades': 'Latest Release (auto-upgrades)',
            },
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
        toggleGlobalClusterConfigurationSetter(event) {
            if (event.target.id !== 'setterId') {
                this.globalClusterConfigurationSetter = !this.globalClusterConfigurationSetter
            }
        },
        toggleCloudProviderAndRegionSetter(event) {
            if (event.target.id !== 'setterId') {
                this.cloudProviderAndRegionSetter = !this.cloudProviderAndRegionSetter
            }
        },
        toggleAdditionalSettingsSetter(event) {
            if (event.target.id !== 'setterId') {
                this.additionalSettingsSetter = !this.additionalSettingsSetter
            }
        },
        toggleClusterTierSetter(event) {
            if (event.target.id !== 'setterId') {
                this.clusterTierSetter = !this.clusterTierSetter
            }
        },
        toggleClusterNameSetter(event) {
            if (event.target.id !== 'setterId') {
                this.clusterNameSetter = !this.clusterNameSetter
            }
        },
        createCluster() {
            
            console.log(`создал кластер`)
            fetch(`http://localhost:4000/api/clusters/create/?clustername=${this.clusterName}&free=${this.free}&shared=${this.shared}&version=${this.version}&region=${this.region}&clustertier=${this.clusterTier}&type=${this.type}&backups=${this.backups}&linkedrealmapp=${this.linkedRealmApp}&atlassearch=${this.atlasSearch}&cacheremail=${this.cacher.email}&projectname=${this.projectName}&enableglobalwrites=${this.enableGlobalWrites}&workloadisolation=${this.workloadIsolation}&datacenter=${this.activeCity}`, {
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
                    this.$router.push({ name: 'Cluster', query: { 'clusterid': cluster._id, 'projectname': this.projectName } })
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

    .totalContainerItem {
        /* display: flex; */
        /* flex-direction: column; */
        align-items: center;
        /* justify-content: space-between; */
        box-sizing: border-box;
        padding: 45px 35px;
        box-shadow: 0px 0px 15px rgb(215, 215, 215);
        width: 75%;
        margin: 35px auto;
        cursor: pointer;
    }

    .totalContainerItem > * {
        margin: 125px 0px;
    }

    .clusterRegisterInputBlock {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 45px 35px;
        /* box-shadow: 0px 0px 15px rgb(215, 215, 215); */
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
        box-shadow: 0px 0px 0px transparent;
        background-color: rgb(255, 255, 255);
    }

    .tableCell {
        border: 1px solid rgb(0, 0, 0);
        width: 15%;
        font-size: 18px;
        background-color: rgb(255, 255, 255);
    }

    .firstTableCell {
        background-color: rgb(240, 255, 240);
    }

    .lastTableCell {
        background-color: rgb(240, 240, 255);
    }

    .settingItemChip {
        font-size: 48px;
        cursor: pointer;
        user-select: none;
    }

    .setterColumn {
        /* width: 65%; */
        display: flex;
        flex-direction: column;
    }

    .cloudProvider {
        border-radius: 8px;
        border: 3px solid rgb(0, 150, 0);
        padding: 15px 15px;
        margin: 0px 15px;
    }

    .region {
        background-color: rgb(50, 50, 50);
        height: 35px;
        box-sizing: border-box;
        padding: 5px 10px;
    }

    .regionHeader {
        color: rgb(255, 255, 255);
    }

    .regionContainer {
        width: 30%;
    }

    .city {
        height: 50px;
        display: flex;
        flex-direction: column;
        margin: 15px 0px;
        align-items: center;
        border-radius: 8px;
    }

    .city:hover {
        box-shadow: 1px 1px 5px rgb(50, 50, 50);
    }

    .activeCity {
        border: 2px solid rgb(0, 150, 0);
    }

    .cityItem {
        display: flex;
        margin: 5px 0px;
    }

    .cityItemElement {
        margin: 0px 5px;
    }

    .cityItemHeader {
        font-weight: bolder;
    }

    .freeTier {
        border-radius: 15px;
        background-color: rgb(150, 180, 255);
        width: 175px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(255, 255, 255);
    }

    .setterRow {
        display: flex;
        align-items: center;
    }

</style>