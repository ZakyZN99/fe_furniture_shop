<template>
    <nav-bar-vue/>
    <div class="relative h-[400px] w-[100%] bg-[#F8F8F8]">
        <div class="absolute inset-0 bg-gradient-to-r from-[#642C0CBF] to-transparent px-[100px] py-[150px]">
            <h1 class="text-[#ffffff] text-[52px] font-bold">About</h1>
            <div class="flex items-center text-[#ffff]">
                <h2>Home</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
                <h2>About</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
            </div> 
        </div>
        <img src="../../assets/img/cover/spacejoy-zIoU4ALVugs-unsplash 1.png" class="h-full w-full object-cover" />
    </div>

    <div class="w-full px-[100px] py-[100px] bg-white flex gap-[25px] items-center justify-between">
        <div class="w-[70%]">
            <h2 class="font-medium text-[48px] text-[#642C0C] pb-[20px]">
                Transforming spaces with modern furniture that combines style and functionality.
            </h2>
            <p class="open-sans text-[18px] text-[#CCC4B4] text-justify pb-[20px]">
                At Furniture , we believe that furniture should do more than just fill a room, it should inspire and transform the spaces where life’s most memorable moments unfold. Founded with a vision to blend innovative design with superior craftsmanship, we are committed to creating furniture that not only looks stunning but also enhances your daily life.
            </p>
            <p class="open-sans text-[18px] text-[#642C0C] text-justify  pb-[20px]">
                Our journey began with a passion for design and a dedication to quality. Each piece of furniture is thoughtfully designed and meticulously crafted, using the finest materials to ensure durability and timeless beauty. From cozy living rooms to elegant dining spaces, our collections cater to a variety of tastes and styles, ensuring that everyone can find pieces that resonate with their personal aesthetic.
            </p>
            <p class="open-sans text-[18px] text-[#CCC4B4] text-justify pb-[20px]">
                We are more than just a furniture brand, we are a community of design enthusiasts who value creativity, innovation, and sustainability. Our commitment to environmental responsibility drives us to source eco-friendly materials and adopt sustainable manufacturing practices. We believe in creating furniture that not only enriches your home but also respects our planet.
            </p>
            <button @click="goToContact" class=" h-[51px] bg-[#642C0C] w-[20%] rounded-2xl text-[#FFFFFF] font-extrabold text-[20px]">Contact Us</button>
        </div>
        <div class="w-[50%]">
            <img src="../../assets/img/spacejoy-9M66C_w_ToM-unsplash 1.png" class="w-[710px] h-[600px] rounded-2xl" />
        </div>
    </div>

    <footer-bar-vue/>
</template>

<script>
import FooterBarVue from '../Footer-bar.vue'
import NavBarVue from '../Nav-bar.vue'
import { FlIOsArrowRtl } from "@kalimahapps/vue-icons";

export default {
    name: 'AboutPageVue',
    components:{
        FooterBarVue,
        NavBarVue,
        FlIOsArrowRtl
    },
    methods:{
        goToContact(){
            this.$router.push({name: "ContactPage"})
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.open-sans {
    font-family: 'Open Sans', sans-serif;
}
</style>