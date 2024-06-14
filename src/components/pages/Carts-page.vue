<template>
    <nav-bar/>
    <div class="relative h-[400px] w-[100%] bg-[#F8F8F8]">
        <div class="absolute inset-0 bg-gradient-to-r from-[#642C0CBF] to-transparent px-[100px] py-[150px]">
            <h1 class="text-[#ffffff] text-[52px] font-bold">Cart</h1>
            <div class="flex items-center text-[#ffff]">
                <h2>Home</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
                <h2>Cart</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
            </div> 
        </div>
        <img src="../../assets/img/cover/spacejoy-EVjqpcn79AM-unsplash 1.png" class="h-full w-full object-cover" />
    </div>

    <div class="px-[100px] py-[100px] flex justify-between gap-[30px]">
        <div class="w-full  items-center text-center p-2">
            <table class="w-full border-collapse items-center text-center bg-[#FFFFFF] ">
                <thead class="border-[2px] border-[#CCC4B4] open-sans font-semibold text-[16px] text-[#642C0C] ">
                    <th class="">No.</th>
                    <th class="">Product</th>
                    <th class="">Name</th>
                    <th class="">Price</th>
                    <th class="">Quantity</th>
                    <th class="">Subtotal</th>
                </thead>
                <tbody >
                    <tr class="border-[2px] border-[#CCC4B4] text-[#642C0C]  text-[16px] open-sans ">
                        <td>1</td>
                        <td>
                            <div class="flex justify-center p-2">
                                <img src="../../assets/img/spacejoy-EVjqpcn79AM-unsplash 1.png" class="w-[105px] h-[105px]" />
                            </div>
                        </td>
                        <td>Mnimalis Sofa</td>
                        <td>Rp.10000000</td>
                        <td>
                            <div class=" flex justify-center">
                                <div class="border-[2px] w-[91px] h-[43px] border-[#642C0C] flex items-center text-center justify-between">
                                    <button class="open-sans text-[#642C0C] text-[26px] pl-[8px] pb-[2px]">-</button>
                                    <span class="text-[#642C0C] text-[16px] open-sans px-[12px]">1</span>
                                    <button class="open-sans text-[#642C0C] text-[24px] pr-[8px]">+</button>
                                </div>
                            </div>
                        </td>
                        <td>Rp.200000</td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </div>


        <div class="bg-[#FFFFFF] border-[2px] border-[#CCC4B4] w-[40%] h-[321px] justify-beetwen text-center">
            <h1 class="pt-[32px] pb-[50px] text-[#642C0C] font-semibold text-[32px]">Cart Totals</h1>
            <div class="flex justify-between px-[28px] pb-[30px]">
                <h2 class="open-sans font-normal text-[16px] text-[#642C0C  ]">Subtotal</h2>
                <h2 class="text-[#CCC4B4] open-sans font-normal text-[16px]">Rp. 1000000</h2>
            </div>
            <div class="flex justify-between px-[28px] pb-[40px]">
                <h2 class="open-sans font-normal text-[16px] text-[#642C0C]">Total</h2>
                <h2 class="open-sans font-semibold text-[20px] text-[#642C0C]">Rp. 1000000</h2>
            </div>
            <div class="px-[28px] pb-[32px]">
                <button class=" h-[51px] bg-[#C0772C] w-full text-[#FFFFFF] font-extrabold text-[20px]">Continue to Payment</button>
            </div>
        </div>
    </div>


    <footer-bar/>
</template>

<script>
import FooterBar from '../Footer-bar.vue';
import NavBar from '../Nav-bar.vue';
import { FlIOsArrowRtl } from "@kalimahapps/vue-icons";

export default {
    name: 'CartsPageVue',
    components:{
        FooterBar,
        NavBar,
        FlIOsArrowRtl,
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.open-sans {
    font-family: 'Open Sans', sans-serif;
}
</style>