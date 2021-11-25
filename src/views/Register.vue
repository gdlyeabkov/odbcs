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
            <input placeholder="Email address" v-model="email" type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    First name
                </label>
            </div>
            <input placeholder="Имя" v-model="firstName" type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Last name
                </label>
            </div>
            <input placeholder="Фамилия" v-model="lastName" type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Password
                </label>
            </div>
            <input placeholder="Пароль" v-model="password" type="phone" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Phone Number
                </label>
            </div>
            <input placeholder="Номер телефона" v-model="phoneNumber" type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Company Name
                </label>
            </div>
            <input placeholder="Название компании" v-model="companyName" type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Job Function
                </label>
            </div>
            <input placeholder="Ваша должность" v-model="jobFunction" type="text" class="form-control w-75 authContainerFormItem" />
            <div class="emailAddressLabel authContainerFormItem">
                <label for="" class="emailAddressLabelItem">
                    Country
                </label>
            </div>
            <input placeholder="Страна" v-model="country" type="text" class="form-control w-75 authContainerFormItem" />
            <div class="acception">
                <input v-model="isAccept" class="acceptionItem" type="checkbox" />
                <span class="acceptionItem">
                    I accept the Privacy Policy and the Terms of Service
                </span>
            </div>
            <div class="authContainerFormItem">
                <button :disabled="!isAccept" class="btn btn-secondary authContainerFormSubitem" @click="signUp">
                    Sign up
                </button>
                <span class="authContainerFormSubitem">
                    Have an account?
                </span>
                <span @click="$router.push({ name: 'Auth' })" class="link authContainerFormSubitem">
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
            firstName: '',
            lastName: '',
            password: '',
            phoneNumber: '',
            companyName: '',
            jobFunction: '',
            country: '',
            isAccept: false
        }
    },
    methods: {
        signUp() {
            console.log('регистрирую')
            fetch(`http://localhost:4000/api/cachers/create/?cacheremail=${this.email}&cacherfirstname=${this.firstName}&cacherlastname=${this.lastName}&cacherpassword=${this.password}&cacherphonenumber=${this.phoneNumber}&cachercompanyname=${this.companyName}&cacherjobfunction=${this.jobFunction}&cachercountry=${this.country}`, {
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