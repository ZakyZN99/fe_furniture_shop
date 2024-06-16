<template>
    <nav-bar-vue/>

    <div class="relative h-[400px] w-[100%] bg-[#F8F8F8]">
        <div class="absolute inset-0 bg-gradient-to-r from-[#642C0CBF] to-transparent px-[100px] py-[150px]">
            <h1 class="text-[#ffffff] text-[52px] font-bold">Payment</h1>
            <div class="flex items-center text-[#ffff]">
                <h2>Home</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
                <h2>Payment</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
                <h2>Payment Method</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
            </div> 
        </div>
        <img src="../../assets/img/cover/living-room-with-modern-beautiful-decoration.jpg" class="h-full w-full object-cover" />
    </div>

    <div class="bg-[#F8F8F8] w-full px-[100px] pt-[100px]">
        <h1 class="text-[#000000] font-semibold text-[32px] pb-[20px]">Payment</h1>
        <p class="text-[#9F9F9F] open-sans text-[16px] pb-[20px]"> 2 From 2 Step</p>
        <div class="flex gap-[30px]">
            <div>
                <div class="border-[2px] border-[#C0772C] w-[289px] h-[5px] bg-[#C0772C] rounded-md" />
                <div class="py-[24px] flex items-center gap-[8px]">
                    <div class="bg-[#642C0C] text-[#FFFFFF] w-[24px] h-[24px] rounded-full text-center open-sans text-[16px]">1</div>
                    <p class="text-[#642C0C] font-semibold text-[16px]">Set Up Order</p>
                </div>
            </div>
            <div>
                <div class="border-[2px] border-[#C0772C] w-[289px] h-[5px] bg-[#C0772C] rounded-md" />
                <div class="py-[24px] flex items-center gap-[8px]">
                    <div class="bg-[#642C0C] text-[#FFFFFF] w-[24px] h-[24px] rounded-full text-center open-sans text-[16px]">2</div>
                    <p class="text-[#642C0C] font-semibold text-[16px]">Pay Order</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="bg-[#F8F8F8] px-[100px] py-[32px] flex gap-[50px]">
        <div class="w-[70%] h-full border-[2px] bg-[#FFFFFF] border-[#CCC4B4] px-[32px] py-[32px]">
                <!-- E-Wallet -->
                <div class="flex gap-[400px]">
                    <div>
                        <h1 class="open-sans font-semibold text-[20px]">E-Wallet</h1>
                        <div class="flex items-center pt-[20px]">
                        <input type="radio" id="Dana" name="payment-method" value="dana" class="mr-[10px]" />
                            <label for="dana" class="flex items-center">
                                <img src="../../assets/img/payment/Dana.png" alt="Dana" class="w-[58px] mr-[10px]" />
                                <span class="text-[16px] text-[#642C0C] open-sans font-semibold">Dana</span>
                            </label>
                        </div>
                        <div class="flex items-center pt-[20px]">
                            <input type="radio" id="OVO" name="payment-method" value="OVO" class="mr-[10px]" />
                                <label for="OVO" class="flex items-center">
                                    <img src="../../assets/img/payment/Ovo.png" alt="OVO" class="w-[58px] mr-[10px]" />
                                    <span class="text-[16px] text-[#642C0C] open-sans font-semibold">OVO</span>
                                </label>
                        </div>
                        <div class="flex items-center pt-[20px]">
                            <input type="radio" id="Gopay" name="payment-method" value="Gopay" class="mr-[10px]" />
                                <label for="Gopay" class="flex items-center">
                                    <img src="../../assets/img/payment/GoPay.png" alt="Gopay" class="w-[58px] mr-[10px]" />
                                    <span class="text-[16px] text-[#642C0C] open-sans font-semibold">GoPay</span>
                                </label>
                        </div>
                        <div class="flex items-center pt-[20px]">
                            <input type="radio" id="shopeepay" name="payment-method" value="shopeepay" class="mr-[10px]" />
                                <label for="shopeepay" class="flex items-center">
                                    <img src="../../assets/img/payment/ShopeePay.png" alt="shopeepay" class="w-[58px] mr-[10px]" />
                                    <span class="text-[16px] text-[#642C0C] open-sans font-semibold">ShopeePay</span>
                                </label>
                        </div>
                        <div class="flex items-center pt-[20px]">
                            <input type="radio" id="linkaja" name="payment-method" value="linkaja" class="mr-[10px]" />
                                <label for="linkaja" class="flex items-center">
                                    <img src="../../assets/img/payment/LinkAja.png" alt="linkaja" class="w-[58px] mr-[10px]" />
                                    <span class="text-[16px] text-[#642C0C] open-sans font-semibold">LinkAja</span>
                                </label>
                        </div>
                    </div>
                    <!-- ATM/Transfer BANK -->
                    <div>
                        <h1 class="open-sans font-semibold text-[20px]">ATM/Bank Transfer</h1>
                        <div class="flex items-center pt-[20px]">
                        <input type="radio" id="Dana" name="payment-method" value="dana" class="mr-[10px]" />
                            <label for="dana" class="flex items-center">
                                <img src="../../assets/img/payment/Dana.png" alt="Dana" class="w-[58px] mr-[10px]" />
                                <span class="text-[16px] text-[#642C0C] open-sans font-semibold">Dana</span>
                            </label>
                        </div>
                        <div class="flex items-center pt-[20px]">
                            <input type="radio" id="OVO" name="payment-method" value="OVO" class="mr-[10px]" />
                                <label for="OVO" class="flex items-center">
                                    <img src="../../assets/img/payment/Ovo.png" alt="OVO" class="w-[58px] mr-[10px]" />
                                    <span class="text-[16px] text-[#642C0C] open-sans font-semibold">OVO</span>
                                </label>
                        </div>
                        <div class="flex items-center pt-[20px]">
                            <input type="radio" id="Gopay" name="payment-method" value="Gopay" class="mr-[10px]" />
                                <label for="Gopay" class="flex items-center">
                                    <img src="../../assets/img/payment/GoPay.png" alt="Gopay" class="w-[58px] mr-[10px]" />
                                    <span class="text-[16px] text-[#642C0C] open-sans font-semibold">GoPay</span>
                                </label>
                        </div>
                        <div class="flex items-center pt-[20px]">
                            <input type="radio" id="shopeepay" name="payment-method" value="shopeepay" class="mr-[10px]" />
                                <label for="shopeepay" class="flex items-center">
                                    <img src="../../assets/img/payment/ShopeePay.png" alt="shopeepay" class="w-[58px] mr-[10px]" />
                                    <span class="text-[16px] text-[#642C0C] open-sans font-semibold">ShopeePay</span>
                                </label>
                        </div>
                        <div class="flex items-center pt-[20px]">
                            <input type="radio" id="linkaja" name="payment-method" value="linkaja" class="mr-[10px]" />
                                <label for="linkaja" class="flex items-center">
                                    <img src="../../assets/img/payment/LinkAja.png" alt="linkaja" class="w-[58px] mr-[10px]" />
                                    <span class="text-[16px] text-[#642C0C] open-sans font-semibold">LinkAja</span>
                                </label>
                        </div>
                    </div>
                </div>
        </div>
        <div class="w-[30%] h-[350px] border-[2px] bg-[#FFFFFF] border-[#CCC4B4] px-[32px] py-[32px]">
            <div class="flex gap-[16px]">
                <input type="text" placeholder="Insert Voucher Code" class="w-[80%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] open-sans text-[#642C0C]"/>
                <button class="border-[#642C0C] border-[2px] text-[#642C0C] text-[20px] font-extrabold w-[76px] h-[50px]">Use</button>
            </div>
            <a href="#"> <p class="open-sans text-[#000000]">View available vouchers</p></a>
            <hr class="bg-[#D9D9D9] justify-center my-[24px] h-[2px]"/>
            <div class="flex justify-between">
                <h2 class="open-sans font-normal text-[16px] text-[#642C0C]">Total</h2>
                <h2 class="text-[#000] open-sans font-normal text-[16px]">Rp. {{ cartTotal }}</h2>
            </div>
            <hr class="bg-[#D9D9D9] justify-center my-[24px] h-[2px]"/>
            <div class="">
                <button class=" h-[51px] bg-[#C0772C] w-full text-[#FFFFFF] font-extrabold text-[20px]">Pay Now</button>
            </div>
        </div>
    </div>
    <footer-bar-vue/>
</template>

<script>
import FooterBarVue from '../Footer-bar.vue'
import NavBarVue from '../Nav-bar.vue'
import { FlIOsArrowRtl } from "@kalimahapps/vue-icons";



export default {
    name: 'PaymentMethodPageVue',
    props: ['cartTotal'],
    components:{
        FooterBarVue,
        NavBarVue,
        FlIOsArrowRtl
    },
    mounted() {
        console.log('Cart Total:', this.cartTotal); // Check if cartTotal is received
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.open-sans {
    font-family: 'Open Sans', sans-serif;
}
</style>