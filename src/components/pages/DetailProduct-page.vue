<template>
    <div>
        <nav-bar/>

        <div class="h-[100px] bg-[#642C0C] px-[100px] py-[39px]">
            <div class="flex items-center text-[#ffff]">
                    <h2 class="text-[#F4F4F49E] open-sans text-[16px]">Home</h2>
                    <FlIOsArrowRtl class="mx-[16px] text-[#C0772C] " style="font-size: 14px;"/>
                    <h2 class="text-[#F4F4F49E] open-sans text-[16px]">Product</h2>
                    <FlIOsArrowRtl class="mx-[16px] text-[#C0772C]" style="font-size: 15px;"/>
                    <h2 class="text-[#FFFFFF] open-sans text-[30px]">|</h2>
                    <h2 class="mx-[16px] text-[#FFFFFF]  open-sans text-[16px]">Nama Product</h2>
            </div> 
        </div>
<!-- DETAIL PRODUCT -->
        <div class="pl-[100px] ">
            <div class="bg-[#ffffff] flex gap-[106px]">
                <div class=" pt-[52px] w-[100%]  ">
                    <img src="../../assets/img/spacejoy-ctyssSFmXmU-unsplash 1.png" class="w-[605px] h-[447px] "/>
                    <div class="flex pt-[25px] gap-[29px]">
                        <img src="../../assets/img/spacejoy-EVjqpcn79AM-unsplash 1.png"  class="w-[182px] h-[134px]"/>
                        <img src="../../assets/img/spacejoy-x3mSC1WnWhc-unsplash 1.png" class="w-[182px] h-[134px]"/>
                        <img src="../../assets/img/spacejoy-c0JoR_-2x3E-unsplash 1.png" class="w-[182px] h-[134px]"/>
                    </div>
                </div>
                <div class= "pt-[52px] w-[100%] ">
                    <h1 class="text-[42px] text-[#642C0C]">Judul Produk</h1>
                    <p class="text-[#642C0C] open-sans font-semibold text-[24px]">Rp. 1.999.999</p>
                    <div class="flex  pt-[20px] gap-[20px] items-center">
                        <img class="w-[124px] h-[20px]" src="../../assets/icons/Group 88.png"/>
                        <span class="text-[30px] text-[#9F9F9F]">|</span>
                        <p class="text-[#E5D097] open-sans text-[13px]">5 Customers Review</p>
                    </div>
                    <p class="text-[#CCC4B4] text-[16px] open-sans pt-[12px] pr-[237px]">This compact sofa fits in small areas and is perfect for family parties and continuous TV viewing. It has a neat design and is easy to lift when you want to refurbish, clean or move.</p>
                    <h2 class="text-[#642C0C] open-sans text-[14px] pt-[28px]">Size</h2>
                    <div class="flex gap-[16px] pt-[14px] pb-[40px]">
                        <button class="w-[30px] h-[30px] bg-[#642C0C] poppins text-[#FFFFFF] rounded-md">L</button>
                        <button class="w-[30px] h-[30px] bg-[#CCC4B4] poppins text-[#642C0C] rounded-md">XL</button>
                        <button class="w-[30px] h-[30px] bg-[#CCC4B4] poppins text-[#642C0C] rounded-md">XS</button>
                    </div>
                    <div class="border-[2px] w-[119px] h-[51px] border-[#642C0C] flex items-center">
                        <button class="open-sans text-[#642C0C] text-[32px] pl-[16px] pb-[5px]">-</button>
                        <span class="text-[#642C0C] text-[24px] open-sans  px-[24px]">1</span>
                        <button  class="open-sans text-[#642C0C] text-[24px] pr-[16px]">+</button>
                    </div>
                    <div class="pt-[38px] flex items-center pb-[42px]">
                        <div class="flex items-center">
                            <button class="w-[171px] items-center flex gap-[8px] h-[51px] bg-[#C0772C]">
                                <img src="../../assets/icons/ant-design_shopping-cart-outlined (1).png" class="text-[#FFFFFF] pl-[16px]" />
                                <p class="text-[#FFFFFF] pr-[16px] font-extrabold text-[20px]">Add to Cart</p>
                            </button>
                        </div>

                        <button class="pl-[26px]">
                            <img src="../../assets/icons/heart.png" />
                        </button>
                    </div>
                    <div class=" border-t-[2px] border-[#D9D9D9] mr-[77px]">
                        <button class=" flex items-center w-full h-[115px] justify-between">
                            <div class=" flex items-center ">
                                <img src="../../assets/icons/deliv.png" />
                                <div class="text-left pl-[24px]">
                                    <p class="open-sans text-[16px] text-[#642C0C] font-bold">Shipping costs start from</p>
                                    <p class="open-sans text-[16px] text-[#642C0C]" >Calculate now</p>
                                </div>
                            </div>
                            <FlIOsArrowRtl class="mx-[16px] text-[#201600]" style="font-size: 24px;"/>
                        </button>
                    </div>
                    <div class=" border-t-[2px] border-[#D9D9D9] mr-[77px] pb-[112px]">
                        <button class=" flex items-center w-full h-[115px]">
                                <img src="../../assets/icons/Ellipse 107.png" />
                                <div class="text-left pl-[24px]">
                                    <p class="open-sans text-[16px] text-[#642C0C] font-bold">Shipping costs start from</p>
                                    <p class="open-sans text-[16px] text-[#642C0C]">Stock available for Online purchase 25 available</p>
                                </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
<!-- RECENT PRODUCT -->
        <div class=" border-t-[2px] border-[#D9D9D9] mx-[97px]">
            <h1 class="text-center text-[#642C0C] text-[48px] font-medium my-[100px]">Recent Product</h1>
            <div class="flex ml-[3px] mr-[100px] gap-[30px] pb-[62px]">
                <div  class="border w-[393px] h-[475px]">
                    <img src="../../assets/img/spacejoy-k2pumSRYYss-unsplash 1.png"  class="w-[393px] h-[334px]" />
                    <div class="pl-[13px] pt-[18px] w-[393px] h-[141px]">
                        <h1 class="open-sans font-semibold text-[24px] text-[#642C0C]">Modern Minimalis Sofa</h1>
                        <p class="open-sans font-normal text-[16px] text-[#CCC4B4]">Elegan, Minimalis, Modern</p>
                        <p class="open-sans font-semibold text-[24px] text-[#642C0C]">Rp. 12.000.000.00</p>
                    </div>
                </div>
                <div  class="border w-[393px] h-[475px]">
                    <img src="../../assets/img/spacejoy-k2pumSRYYss-unsplash 1.png"  class="w-[393px] h-[334px]" />
                    <div class="pl-[13px] pt-[18px] w-[393px] h-[141px]">
                        <h1 class="open-sans font-semibold text-[24px] text-[#642C0C]">Modern Minimalis Sofa</h1>
                        <p class="open-sans font-normal text-[16px] text-[#CCC4B4]">Elegan, Minimalis, Modern</p>
                        <p class="open-sans font-semibold text-[24px] text-[#642C0C]">Rp. 12.000.000.00</p>
                    </div>
                </div>
                <div  class="border w-[393px] h-[475px]">
                    <img src="../../assets/img/spacejoy-k2pumSRYYss-unsplash 1.png"  class="w-[393px] h-[334px]" />
                    <div class="pl-[13px] pt-[18px] w-[393px] h-[141px]">
                        <h1 class="open-sans font-semibold text-[24px] text-[#642C0C]">Modern Minimalis Sofa</h1>
                        <p class="open-sans font-normal text-[16px] text-[#CCC4B4]">Elegan, Minimalis, Modern</p>
                        <p class="open-sans font-semibold text-[24px] text-[#642C0C]">Rp. 12.000.000.00</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center pb-[100px]">
                <button class="bg-[#C0772C] w-[164px] h-[51px] text-[#FFFFFF] text-[20px] font-extrabold">Show</button>
            </div>
        </div>
<!-- FAQ -->
        <div class="bg-[#F8F8F8] w-[100%] items-center text-center justify-center pb-[100px]">
            <h1 class="pt-[100px] text-[48px] text-[#642C0C] font-medium">Frequently Asked Questions</h1>
            <p class="pt-[24px] text-[18px] text-[#CCC4B4] pb-[100px]">Find answers to common questions about furniture care, delivery, and returns policies.</p>
            <div class=" flex justify-center">
                <section class="w-[820px] ">
                    <div v-for="(faq,index) in faqs" :key="index" @click="toggleFAQ(index)" class=" border-b-[1px] border-[#CCC4B4] " >
                        <button   class=" w-full text-left flex justify-between items-center"> 
                            <span class="text-[#642C0C] text-[20px] py-[24px] font-bold open-sans">{{ faq.question }}</span>
                            <svg :class="{'transform rotate-180': openIndex === index, 'transform rotate-0': openIndex !== index}"
                                class="w-6 h-6 text-[#642C0C] transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div v-if="openIndex === index" class=" text-left text-[18px] open-sans pb-[24px] text-[#CCC4B4]" >{{faq.answer}}</div>
                    </div>
                </section>
            </div>
        </div>

        <footer-bar/>
    </div>
</template>w

<script>
import FooterBar from '../Footer-bar.vue'
import NavBar from '../Nav-bar.vue'
import { FlIOsArrowRtl } from "@kalimahapps/vue-icons";


export default {
    nama: 'DetailProduct',
    components:{
        FooterBar,
        NavBar,
        FlIOsArrowRtl,
    },
    data(){
        return{
            openIndex: null,
            faqs:[
                {
                    question: "What is the material?",
                    answer : "Our modern furniture is crafted using high-quality materials that ensure durability and style."
                },{
                    question: "What are the dimensions?",
                    answer : "We provide detailed dimensions for each furniture item on the product page."
                },{
                    question: "What is the shipping cost?",
                    answer : `Shipping costs vary depending on the size and weight of the furniture item. Please contact our customer support for more information.`
                },{
                    question: "Do you offer returns?",
                    answer : "Yes, we offer a hassle-free return policy. Please refer to our Returns & Refunds page for more details."
                },{
                    question: "Is assembly required?",
                    answer : "Assembly requirements vary for each furniture item. Please check the product description for assembly details."
                },
            ]
        }
    },
    methods:{
        toggleFAQ(index){
            if(this.openIndex === index){
                this.openIndex = null;
            }else{
                this.openIndex = index;
            }
        },
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Poppins');
.open-sans {
    font-family: 'Open Sans', sans-serif;
}
.poppins {
    font-family: 'Poppins', sans-serif;
}
</style>