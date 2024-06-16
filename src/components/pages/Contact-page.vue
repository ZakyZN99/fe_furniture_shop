<template>
    <nav-bar-vue/>
    <div class="relative h-[400px] w-[100%] bg-[#F8F8F8]">
        <div class="absolute inset-0 bg-gradient-to-r from-[#642C0CBF] to-transparent px-[100px] py-[150px]">
            <h1 class="text-[#ffffff] text-[52px] font-bold">Contact</h1>
            <div class="flex items-center text-[#ffff]">
                <h2>Home</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
                <h2>Contact</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
            </div> 
        </div>
        <img src="../../assets/img/cover/spacejoy-c0JoR_-2x3E-unsplash 1.png" class="h-full w-full object-cover" />
    </div>

    <div class="px-[100px] py-[100px] bg-white gap-[25px]">
        <h1 class="text-[48px] font-medium text-[#642C0C]">Get in Touch</h1>
        <p class="open-sans text-[18px] text-[#CCC4B4] pt-[24px] pb-[70px]">Have a question or need assistance? Feel free to reach out to us!</p>
        <div class="w-full flex justify-between">
            <div class="w-[70%]">
                <h3 class="pb-[24px] open-sans font-semibold text-[20px] text-[#642C0C]">Email</h3>
                <p class="open-sans text-[#642C0C] text-[18px] pb-[28px]">contact@furniture.com</p>
                <h3 class="pb-[24px] open-sans font-semibold text-[20px] text-[#642C0C]">Phone</h3>
                <p class="open-sans text-[#642C0C] text-[18px] pb-[28px]">+62 00225 555</p>
                <h3 class="pb-[24px] open-sans font-semibold text-[20px] text-[#642C0C]">Office</h3>
                <p class="open-sans text-[#642C0C] text-[18px] pb-[48px]">Jl. Gatot Subroto, Bandung</p>
            </div>
            <form @submit.prevent="submitForm" class="open-sans text-[16px] w-[30%]">
                <div class="w-full pb-[24px] ">
                    <h4 class="text-[#642C0C]">Your Name :</h4>
                    <input type="text" v-model="formData.name" placeholder="Type your name..." class="w-[528.75px] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] "/>
                    <div v-if="formErrors.name" class="text-red-500">{{ formErrors.name }}</div>
                </div>
                <div class="w-full pb-[24px] ">
                    <h4 class="text-[#642C0C]">Email address :</h4>
                    <input type="text" v-model="formData.email" placeholder="Type your email address..." class="w-[528.75px] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] "/>
                    <div v-if="formErrors.email" class="text-red-500">{{ formErrors.email }}</div>
                </div>
                <div class="w-full pb-[24px] ">
                    <h4 class="text-[#642C0C]">Subject :</h4>
                    <input type="text" v-model="formData.subject" placeholder="This is an optional" class="w-[528.75px] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] "/>
                    <div v-if="formErrors.subject" class="text-red-500">{{ formErrors.subject }}</div>
                </div>
                <div class="w-full pb-[24px] ">
                    <h4 class="text-[#642C0C]">Message :</h4>
                    <textarea type="text" v-model="formData.msg" placeholder="Hi! i’d like to ask about" class="w-[528.75px] p-2  h-[150px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] "/>
                    <div v-if="formErrors.msg" class="text-red-500">{{ formErrors.msg }}</div>
                </div>
                <div>
                    <button class=" h-[51px] bg-[#C0772C] w-[194px] text-[#FFFFFF] font-extrabold text-[16px]">Contact Us</button>
                </div>
            </form>
        </div>
    </div>
    <div class="px-[100px] pb-[50px]">
        <l-map style="height: 500px; width: full;" :zoom="13" :center="[-6.9350452, 107.6368356]">
            <l-tile-layer :url="'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'"></l-tile-layer>
            <l-marker :lat-lng="[-6.9267596, 107.6316847]"></l-marker>
        </l-map>
    </div>

    <footer-bar-vue/>
</template>

<script>
import "leaflet/dist/leaflet.css";


import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import FooterBarVue from '../Footer-bar.vue'
import NavBarVue from '../Nav-bar.vue'
import { FlIOsArrowRtl } from "@kalimahapps/vue-icons";

export default {
    name: 'ContactPage',
    components:{
        LMap,
        LTileLayer,
        LMarker,
        FooterBarVue,
        NavBarVue,
        FlIOsArrowRtl
    },
    data(){
        return{
            formData: {
                name: '',
                email:'',
                subject: '',
                msg: ''
            },
            formErrors: {},
        }
    },
    methods:{
        validateForm() {
            this.formErrors = {}; 

            if (!this.formData.name.trim()) {
                this.formErrors.name = 'Name is required.';
            }

            if (!this.formData.email.trim()) {
                this.formErrors.email = 'Email is required.';
            } else if (!this.validEmail(this.formData.email)) {
                this.formErrors.email = 'Email must be valid (example@gmail.com).';
            }

            if (!this.formData.subject) {
                this.formErrors.subject = 'Subject is required.';
            }

            if (!this.formData.msg) {
                this.formErrors.msg = 'Message is required.';
            }
            return Object.keys(this.formErrors).length === 0;
        },
        validEmail(email) {
             // eslint-disable-next-line 
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
            return re.test(email);
        },
        submitForm() {
            if (this.validateForm()) {
                console.log("Form submitted successfully");
                // Here you can add your form submission logic
            } else {
                console.log("Form validation failed");
            }
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.open-sans {
    font-family: 'Open Sans', sans-serif;
}
</style>