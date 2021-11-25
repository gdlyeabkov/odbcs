<template>
    <div class="header">
        <div class="headerItem">
            <img src="https://assets-global.website-files.com/6064b31ff49a2d31e0493af1/610d75bbd917363ac7a1fec0_mongoDB.svg" alt="mongo db" width="75px" />
            <button class="btn btn-light organizationSelector">
                <span class="material-icons">
                    apartment
                </span>
                <span>
                    Gleb's Org
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
            <button class="personalArea btn btn-light">
                <span>
                    Gleb
                </span>
                <span class="material-icons">
                    arrow_drop_down
                </span>
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .header {
        margin-bottom: 5px;
        height: 50px;
        box-shadow: 0px 0px 25px rgb(200, 200, 200);
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 25px;
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

</style>