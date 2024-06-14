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
                    <h2 class="mx-[16px] text-[#FFFFFF]  open-sans text-[16px]">{{selectedProduct.name}}</h2>
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
                    <h1 class="text-[42px] text-[#642C0C]">{{selectedProduct.name}}</h1>
                    <p class="text-[#642C0C] open-sans font-semibold text-[24px]">Rp. {{ selectedProduct.price.toLocaleString() }}</p>
                    <div class="flex  pt-[20px] gap-[20px] items-center">
                        <img class="w-[124px] h-[20px]" src="../../assets/icons/Group 88.png"/>
                        <span class="text-[30px] text-[#9F9F9F]">|</span>
                        <p class="text-[#E5D097] open-sans text-[13px]">{{ selectedProduct.reviews }} Customers Review</p>
                    </div>
                    <p class="text-[#CCC4B4] text-[16px] open-sans pt-[12px] pr-[237px]">{{selectedProduct.description}}</p>
                    <h2 class="text-[#642C0C] open-sans text-[14px] pt-[28px]">Size</h2>
                    <div class="flex gap-[16px] pt-[14px] pb-[40px]">
                        <button @click="setSize('XS')" :class="{ 'bg-[#642C0C] text-[#FFFFFF]': selectedProduct.size === 'XS', 'bg-[#CCC4B4] text-[#642C0C]': selectedProduct.size !== 'XS' }" class="w-[30px] h-[30px] poppins rounded-md">XS</button>
                        <button @click="setSize('L')" :class="{ 'bg-[#642C0C] text-[#FFFFFF]': selectedProduct.size === 'L', 'bg-[#CCC4B4] text-[#642C0C]': selectedProduct.size !== 'L' }" class="w-[30px] h-[30px] poppins rounded-md">L</button>
                        <button @click="setSize('XL')" :class="{ 'bg-[#642C0C] text-[#FFFFFF]': selectedProduct.size === 'XL', 'bg-[#CCC4B4] text-[#642C0C]': selectedProduct.size !== 'XL' }" class="w-[30px] h-[30px] poppins rounded-md">XL</button>
                    </div>
                    <div class="border-[2px] w-[119px] h-[51px] border-[#642C0C] flex items-center">
                        <button @click="decrementQuantity" class="open-sans text-[#642C0C] text-[32px] pl-[16px] pb-[5px]">-</button>
                        <span class="text-[#642C0C] text-[24px] open-sans  px-[24px]">{{ selectedProduct.quantity }}</span>
                        <button @click="incrementQuantity"  class="open-sans text-[#642C0C] text-[24px] pr-[16px]">+</button>
                    </div>
                    <div class="pt-[38px] flex items-center pb-[42px]">
                        <div class="flex items-center">
                            <button class="w-[171px] items-center flex gap-[8px] h-[51px] bg-[#C0772C]"  @click="addToCart(selectedProduct)">
                                <img src="../../assets/icons/ant-design_shopping-cart-outlined (1).png" class="text-[#FFFFFF] pl-[16px]" />
                                <p class="text-[#FFFFFF] pr-[16px] font-extrabold text-[20px]">Add to Cart</p>
                            </button>
                        </div>

                        <button class="pl-[26px]" @click="toggleFavorite">
                            <component :is="selectedProduct.isFavorite ? 'AnFilledHeart' : 'AnOutlinedHeart'" class="size-[40px] text-[#C0772C]" />
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
                </div>
            </div>
        </div>
        <footer-bar/>
    </div>
</template>w

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import FooterBar from '../Footer-bar.vue';
import NavBar from '../Nav-bar.vue';
import { FlIOsArrowRtl, AnOutlinedHeart , AnFilledHeart } from "@kalimahapps/vue-icons";

export default {
    name: 'DetailProduct',
    components: {
    FooterBar,
    NavBar,
    FlIOsArrowRtl,
    AnOutlinedHeart ,
    AnFilledHeart
    },
    computed: {
        ...mapState(['selectedProduct']),
        ...mapGetters(['cartItems'])
    },
    methods: {
        ...mapActions(['addToCart', 'setSize', 'setQuantity', 'setFavorite']),
        incrementQuantity(){
            const newQuantity  = this.selectedProduct.quantity + 1;
            this.setQuantity(newQuantity)
        },
        decrementQuantity() {
        if (this.selectedProduct.quantity > 1) {
            const newQuantity = this.selectedProduct.quantity - 1;
            this.setQuantity(newQuantity);
            }
        },
        toggleFavorite() {
            this.setFavorite(!this.selectedProduct.isFavorite);
        },
        ...mapMutations(['ADD_TO_CART'])
        }
    };
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