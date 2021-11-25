<template>
    <div class="authContainer">
        <div class="authContainerItem authContainerAside">
            <img src="https://cdn.optimizely.com/img/15508090763/8869415207d54bcba7fef3d688947be5.png" alt="" />
            <div class="authBenefitItem">
                <img class="authBenefitIcon" src="https://cdn.jsdelivr.net/gh/LoneKnight/test-content/mongodb-document-model.png" alt="" /> 
                <div class="authBenefitSubitem">
                    <span>
                        Work with your data as code
                    </span>
                    <span class="authBenefitSubitemContent">
                        Documents in MongoDB map directly to objects in your programming language. Modify your schema as your apps grow over time.
                    </span>
                </div>
            </div>
            <div class="authBenefitItem">
                <img class="authBenefitIcon" src="https://cdn.jsdelivr.net/gh/LoneKnight/test-content/mongodb-phone.png" alt="" /> 
                <div class="authBenefitSubitem">
                    <span>
                        Focus on building, not managing
                    </span>
                    <span class="authBenefitSubitemContent">
                        Let MongoDB Atlas take care of the infrastructure operations you need for performance at scale, from always-on security to point-in-time recovery.
                    </span>
                </div>
            </div>
            <div class="authBenefitItem">
                <img class="authBenefitIcon" src="https://cdn.jsdelivr.net/gh/LoneKnight/test-content/mongodb-api.png" alt="" /> 
                <div class="authBenefitSubitem">
                    <span>
                        Simplify your data dependencies
                    </span>
                    <span class="authBenefitSubitemContent">
                        Leverage application data for full-text search, real-time analytics, rich visualizations and more with a single API and minimal data movement.
                    </span>
                </div>
            </div>
        </div>
        <div class="authContainerItem authContainerForm" v-if="activeTab === 'first'">
            <div class="alreadyHaveAnAccount">
                <div class="alreadyHaveAnAccountLabel">
                    <span>
                        Already have an account? 
                    </span>
                    <span class="signIn" @click="$router.push({ name: 'Auth' })">
                        Sign in.
                    </span>
                </div>
                <span class="wantToHost">
                    Want to host MongoDB yourself?
                </span>
            </div>
            <span class="authContainerFormHeader authContainerFormItem">
                Get started free
            </span>
            <span>
                No credit card required
            </span>
            <input placeholder="Your Work Email" v-model="email" type="text" class="form-control w-75 authContainerFormItem" />
            <input placeholder="Password (8 characters minimum)" v-model="password" type="password" class="form-control w-75 authContainerFormItem" />
            <div class="authContainerFormItem">
                <button class="btn btn-success authContainerFormSubitem" @click="activeTab = 'second'">
                    Continue
                </button>
            </div>
            <span>
                or
            </span>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1">
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="25px" />
                </span>
                <button class="w-75 btn btn-primary">
                    Sign up with Google
                </button>
            </div>
            <div class="authFormTabs">
                <span class="material-icons authFormTab" @click="activeTab = 'first'">
                    circle
                </span>
                <span :style="`color: ${activeTab === 'first' ? 'rgb(215, 215, 215)' : 'rgb(0, 150, 0)' };`" class="material-icons authFormTab" @click="activeTab = 'second'">
                    circle
                </span>
            </div>
        </div>
        <div class="authContainerItem authContainerForm" v-else-if="activeTab === 'second'">
            <div class="alreadyHaveAnAccount">
                <div class="alreadyHaveAnAccountLabel">
                    <span>
                        Already have an account? 
                    </span>
                    <span class="signIn" @click="$router.push({ name: 'Auth' })">
                        Sign in.
                    </span>
                </div>
                <span class="wantToHost">
                    Want to host MongoDB yourself?
                </span>
            </div>
            
            <span class="authContainerFormHeader authContainerFormItem">
                About you
            </span>
            <span>
                We'll only use this information to improve your MongoDB experience.
            </span>
            <div class="inputFields">
                <input placeholder="First Name" v-model="firstName" type="text" class="inputField form-control w-75 authContainerFormItem" />
                <input placeholder="Last Name" v-model="lastName" type="text" class="inputField form-control w-75 authContainerFormItem" />
            </div>
            <input placeholder="Your company (optional)" v-model="company" type="text" class="inputField form-control w-50 authContainerFormItem" />
            <div class="acception">
                <input v-model="isAccept" class="acceptionItem" type="checkbox" />
                <span class="acceptionItem">
                    I agree to the 
                    <span class="acceptionLabel">
                        terms of service
                    </span>
                         and 
                    <span class="acceptionLabel">
                        privacy policy
                    </span>
                    .
                </span>
            </div>
            
            <div class="authContainerFormItem inputRow">
                <span class="authContainerFormSubitem backLabel" @click="activeTab = 'first'">
                    ← Back
                </span>
                <button :disabled="!isAccept" class="btn btn-success authContainerFormSubitem" @click="signUp">
                    Create account
                </button>
            </div>
            <span>
                or
            </span>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1">
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="25px" />
                </span>
                <button class="w-75 btn btn-primary">
                    Sign up with Google
                </button>
            </div>
            
            <div class="authFormTabs">
                <span class="material-icons authFormTab" @click="activeTab = 'first'">
                    circle
                </span>
                <span :style="`color: ${activeTab === 'first' ? 'rgb(215, 215, 215)' : 'rgb(0, 150, 0)' };`" class="material-icons authFormTab" @click="activeTab = 'second'">
                    circle
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
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            companyName: '',
            activeTab: 'first',
            isAccept: false
        }
    },
    methods: {
        signUp() {
            console.log('регистрирую')
            fetch(`http://localhost:4000/api/cachers/create/?cacheremail=${this.email}&cacherfirstname=${this.firstName}&cacherlastname=${this.lastName}&cacherpassword=${this.password}&cachercompanyname=${this.companyName}`, {
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
                    alert('Создал пользователя')
                }
            })

        }

    }
    
}
</script>

<style scoped>
    
    .authContainer {
        display: flex;
        width: 100%;
        height: 1220px;
        position: static;
        top: 0px;
        left: 0px;
    }

    .authContainerItem {
        box-sizing: border-box;
        padding: 55px;
        display: flex;
        flex-direction: column;
        height: 1220px;
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
        background-image: url('https://cdn.jsdelivr.net/gh/LoneKnight/test-content/mongobg.png');
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

    .inputFields {
        display: flex;
    }

    .inputField {
        margin: 5px;
    }

    .authBenefitItem {
        display: flex;
        align-items: flex-start;
        margin: 15px 0px;
    }

    .authBenefitSubitem {
        display: flex;
        flex-direction: column;
    }

    .authBenefitIcon {
        margin: 10px;
    }

    .authBenefitSubitemContent {
        color: rgb(185, 185, 185);
        font-weight: normal;
    }

    .wantToHost {
        color: rgb(0, 150, 0);cursor: pointer;
    }

    .wantToHost:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    .alreadyHaveAnAccount {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .signIn {
        font-weight: bolder;
        color: rgb(0, 150, 0);
        cursor: pointer;
    }

    .signIn:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    .alreadyHaveAnAccountLabel {
        font-size: 14px;
    }

    .backLabel {
        color: rgb(0, 150, 0);
        cursor: pointer;
    }

    .inputRow {
        /* display: flex; */
    }

    .acceptionLabel {
        color: rgb(0, 150, 0);
        cursor: pointer;
    }

    .authFormTabs {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .authFormTab {
        font-size: 10px;
        color: rgb(0, 150, 0);
        margin: 0px 5px;
        cursor: pointer;
    }

</style>