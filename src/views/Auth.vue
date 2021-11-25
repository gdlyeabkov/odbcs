<template>
    <div class="authContainer">
        <div class="authContainerItem authContainerForm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="Mongo db" width="250px" />
            <span class="authContainerFormHeader authContainerFormItem">
                Log in to your account
            </span>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="25px" />
                </span>
                <button class="w-75 btn btn-primary">
                    Log in with Google
                </button>
            </div>
            <span class="authContainerFormItem">
                or
            </span>
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Email Address
                </label>
                <span class="material-icons emailAddressLabelItem emailAddressLabelItemIcon">
                    info
                </span>
            </div>
            <input type="text" class="form-control w-75 authContainerFormItem" />
            <div class="authContainerFormItem">
                <button class="btn btn-secondary authContainerFormSubitem">
                    Next
                </button>
                <span class="authContainerFormSubitem">
                    Don't have an account? 
                </span>
                <span class="link authContainerFormSubitem">
                    Sign Up
                </span>
            </div>
        </div>
        <div class="authContainerItem authContainerAside">
            <span class="authContainerAsideHeader authContainerAsideItem">
                Manage Atlas clusters<br/>with Kubernetes
            </span>
            <span class="authContainerAsideItem">
                The MongoDB Atlas Operator for Kubernetes lets<br/>you control your Atlas clusters natively from<br/>Kubernetes.
            </span>
            <div class="quickStartContainer authContainerAsideItem">
                <span class="quickStart quickStartItem">
                    View Quickstart
                </span>
                <span class="quickStartItem">
                    →
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .authContainer {
        display: flex;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    .authContainerItem {
        box-sizing: border-box;
        padding: 55px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .authContainerForm {
        align-items: center;
        width: 35%;
    }

    .authContainerAside {
        font-weight: bolder;
        color: rgb(255, 255, 255);
        background-size: cover;
        background-position: 100% 50%;
        background-image: url('https://account.mongodb.com/static/images/auth/login_promo_desktop.png');
        width: 65%;
    }

    .authContainerFormHeader {
        font-size: 34px;
        font-weight: bolder;
        color: rgb(65, 65, 65);
    }

    .link {
        cursor: pointer;
        color: rgb(0, 150, 200);
    }

    .emailAddressLabel {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    }

    .emailAddressLabelItemIcon {
        font-size: 24px;
    }
    
    .emailAddressLabelItem {
        margin: 0px 5px;
        font-weight: bolder;
        color: rgb(100, 100, 100);
    }

    .authContainerFormItem {
        margin: 10px 0px;
    }

    .authContainerFormSubitem {
        margin: 0px 5px;
    }

    .authContainerAsideHeader {
        font-size: 28px;
    }

    .quickStart {
        text-decoration: underline;
        text-underline-offset: 5px;;
    }

    .quickStartContainer {
        display: flex;

    }

    .quickStartItem {
        margin: 0px 5px;
    }

    .authContainerAsideItem {
        margin: 10px 0px;
    }

    

</style>