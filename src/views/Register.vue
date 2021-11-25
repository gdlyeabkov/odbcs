<template>
    <div class="authContainer">
        <div class="authContainerItem authContainerAside">
            
        </div>
        <div class="authContainerItem authContainerForm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="Mongo db" width="250px" />
            <span class="authContainerFormHeader authContainerFormItem">
                Create your account
            </span>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1">
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="25px" />
                </span>
                <button class="w-75 btn btn-primary">
                    Sign up with Google
                </button>
            </div>
            <span class="authContainerFormItem">
                or
            </span>
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Email Address
                </label>
            </div>
            <span>
                We recommend using your work email
            </span>
            <input type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    First name
                </label>
            </div>
            <input type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Last name
                </label>
            </div>
            <input type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Password
                </label>
            </div>
            <input type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Phone Number
                </label>
            </div>
            <input type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Company Name
                </label>
            </div>
            <input type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Job Function
                </label>
            </div>
            <input type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Country
                </label>
            </div>
            <input type="text" class="form-control w-75 authContainerFormItem" />
            <div class="acception">
                <input class="acceptionItem" type="checkbox" />
                <span class="acceptionItem">
                    I accept the Privacy Policy and the Terms of Service
                </span>
            </div>
            <div class="authContainerFormItem">
                <button class="btn btn-secondary authContainerFormSubitem">
                    Sign up
                </button>
                <span class="authContainerFormSubitem">
                    Have an account?
                </span>
                <span class="link authContainerFormSubitem">
                    Log in now
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            email: '',
            email: '',
            email: '',
            email: '',
            email: '',
        }
    }
}
</script>

<style scoped>
    
    .authContainer {
        display: flex;
        width: 100%;
        height: 1200px;
        position: static;
        top: 0px;
        left: 0px;
    }

    .authContainerItem {
        box-sizing: border-box;
        padding: 55px;
        display: flex;
        flex-direction: column;
        height: 1200px;
    }
    
    .authContainerForm {
        align-items: flex-start;
        width: 70%;
    }

    .authContainerAside {
        font-weight: bolder;
        color: rgb(255, 255, 255);
        background-size: cover;
        background-position: 100% 50%;
        background-color: rgb(0, 100, 70);
        width: 30%;
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

    .acception {
        display: flex;
        align-items: center;
    }

    .acceptionItem {
        margin: 0px 5px;
    }

</style>