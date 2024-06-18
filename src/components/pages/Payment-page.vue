<template>
    <nav-bar/>

    <div class="relative h-[400px] w-[100%] bg-[#F8F8F8]">
        <div class="absolute inset-0 bg-gradient-to-r from-[#642C0CBF] to-transparent px-[100px] py-[150px]">
            <h1 class="text-[#ffffff] text-[52px] font-bold">Payment</h1>
            <div class="flex items-center text-[#ffff]">
                <h2>Home</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
                <h2>Payment</h2>
                <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
            </div> 
        </div>
        <img src="../../assets/img/cover/living-room-with-modern-beautiful-decoration.jpg" class="h-full w-full object-cover" />
    </div>

    <div class="bg-[#F8F8F8] w-full px-[100px] py-[100px]">
        <h1 class="text-[#000000] font-semibold text-[32px] pb-[20px]">Payment</h1>
        <p class="text-[#9F9F9F] open-sans text-[16px] pb-[20px]"> 1 From 2 Step</p>
        <div class="flex gap-[30px]">
            <div>
                <div class="border-[2px] border-[#C0772C] w-[289px] h-[5px] bg-[#C0772C] rounded-md" />
                <div class="py-[24px] flex items-center gap-[8px]">
                    <div class="bg-[#642C0C] text-[#FFFFFF] w-[24px] h-[24px] rounded-full text-center open-sans text-[16px]">1</div>
                    <p class="text-[#642C0C] font-semibold text-[16px]">Set Up Order</p>
                </div>
            </div>
            <div>
                <div class="border-[2px] border-[#CCC4B4] w-[289px] h-[5px] bg-[#CCC4B4] rounded-md" />
                <div class="py-[24px] flex items-center gap-[8px]">
                    <div class="bg-[#CCC4B4] text-[#FFFFFF] w-[24px] h-[24px] rounded-full text-center open-sans text-[16px]">2</div>
                    <p class="text-[#CCC4B4] font-semibold text-[16px]">Pay Order</p>
                </div>
            </div>
        </div>
        
        <div class="w-full">
            <form  @submit.prevent="submitForm" >
                <!-- ADDRESS -->
                <div  class="w-full border-[2px] bg-[#FFFFFF] border-[#CCC4B4] px-[32px] py-[32px] ">
                    <h2 class="open-sans font-semibold text-[20px] text-[#642C0C] ">Where do you send it?</h2>
                    <div class="flex gap-[30px] pt-[20px]">
                        <div class="w-[50%]">
                            <h4 class="text-[16px] text-[#642C0C] open-sans font-semibold">Name :</h4>
                            <input type="text" v-model="formData.name" class="w-[100%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] "/>
                            <div v-if="formErrors.name" class="text-red-500">{{ formErrors.name }}</div>
                        </div>
                        <div class="w-[50%]">
                            <h4 class="text-[16px] text-[#642C0C] open-sans font-semibold">Address :</h4>
                            <input type="text" v-model="formData.address" class="w-[100%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] "/>
                            <div v-if="formErrors.address" class="text-red-500">{{ formErrors.address }}</div>
                        </div>
                    </div>
                    <div class="flex gap-[30px] pt-[20px]">
                        <div class="w-[50%]">
                            <h4 class="text-[16px] text-[#642C0C] open-sans font-semibold">Province :</h4>
                            <select v-model="formData.province" @change="fetchRegencies(formData.province)" class="w-[100%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] ">
                                <option value="">Select Province</option>
                                <option v-for="province in provinces" :key="province.id" :value="province.id">{{ province.name }}</option>
                            </select>
                            <div v-if="formErrors.province" class="text-red-500">{{ formErrors.province }}</div>
                        </div>
                        <div class="w-[50%]">
                            <h4 class="text-[16px] text-[#642C0C] open-sans font-semibold">Regency :</h4>
                            <select v-model="formData.regency" @change="fetchDistricts(formData.regency)" class="w-[100%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] ">
                                <option value="">Select Regency</option>
                                <option v-for="regency in regencies" :key="regency.id" :value="regency.id">{{ regency.name }}</option>
                            </select>
                            <div v-if="formErrors.regency" class="text-red-500">{{ formErrors.regency }}</div>
                        </div>
                    </div>
                    <div class="flex gap-[30px] pt-[20px]">
                        <div class="w-[50%]">
                            <h4 class="text-[16px] text-[#642C0C] open-sans font-semibold">District :</h4>
                            <select v-model="formData.district" @change="fetchVillages(formData.district)" class="w-[100%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] ">
                                <option value="">Select District</option>
                                <option v-for="district in districts" :key="district.id" :value="district.id">{{ district.name }}</option>
                            </select>
                            <div v-if="formErrors.district" class="text-red-500">{{ formErrors.district }}</div>
                        </div>
                        <div class="w-[50%]">
                            <h4 class="text-[16px] text-[#642C0C] open-sans font-semibold">Village :</h4>
                            <select v-model="formData.village" class="w-[100%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] ">
                                <option value="">Select Village</option>
                                <option v-for="village in villages" :key="village.id" :value="village.id">{{ village.name }}</option>
                            </select>
                            <div v-if="formErrors.village" class="text-red-500">{{ formErrors.village }}</div>
                        </div>
                    </div>
                </div>
                <!-- Checkout -->
                <span class="p-[100px]"/>
                <div class="flex gap-[30px]">
                    <div class="w-full border-[2px] bg-[#FFFFFF] border-[#CCC4B4] px-[32px] py-[32px]">
                        <div class="w-full  items-center text-center">
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
                                    <tr v-for="(item, index) in cartItems" :key="item.id" class="border-[2px] border-[#CCC4B4] text-[#642C0C]  text-[16px] open-sans ">
                                        <td>{{index + 1}}</td>
                                        <td>
                                            <div class="flex justify-center p-2">
                                                <img :src="item.image" class="w-[105px] h-[105px]" />
                                            </div>
                                        </td>
                                        <td>{{item.name}}</td>
                                        <td>Rp. {{item.price.toLocaleString()}}</td>
                                        <td>
                                            <div class=" flex justify-center">
                                                <div class="border-[2px] w-[91px] h-[43px] border-[#642C0C] flex items-center text-center justify-between">
                                                    <button class="open-sans text-[#642C0C] text-[26px] pl-[8px] pb-[2px]">-</button>
                                                    <span class="text-[#642C0C] text-[16px] open-sans px-[12px]">{{item.quantity}}</span>
                                                    <button class="open-sans text-[#642C0C] text-[24px] pr-[8px]">+</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Rp. {{(item.price * item.quantity).toLocaleString()}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr class="bg-[#D9D9D9] justify-center my-[32px] h-[2px]"/>

                        <input type="text" placeholder="Add a note (Optional)" class="w-[100%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] open-sans "/>
                        <h5 class="text-[#642C0C] open-sans font-semibold text-[20px] py-[32px]">Shipping</h5>
                        <select v-model="formData.shippingOption" class="w-[100%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] open-sans text-[#642C0C]">
                            <option value="">Choose Delivery Method</option>
                            <option v-for="option in shippingOptions" :key="option.id" :value="option.id">{{ option.name }} - Rp. {{ option.price.toLocaleString() }}</option>
                        </select>
                        <div v-if="formErrors.shippingOption" class="text-red-500">{{ formErrors.shippingOption }}</div>

                        <div class="flex items-center pt-[20px]">
                            <input type="checkbox" id="shipping-insurance" class="mr-[10px]" />
                            <label for="shipping-insurance" class="text-[16px] text-[#642C0C] open-sans font-semibold">Shipping insurance</label>
                        </div>
                        <p class="text-[#000000] open-sans font-light text-[14px]">Risk coverage if the item is lost or damaged in transit. <a class="text-[#642C0C] font-semibold" href="#">Learn more</a></p>
                    </div>
                        <!-- TOTAL -->
                    <div class="w-[30%] border-[2px] bg-[#FFFFFF] border-[#CCC4B4] px-[32px] py-[32px]">
                        <div class="flex gap-[16px]">
                            <input type="text" placeholder="Insert Voucher Code" class="w-[80%] h-[50px] text-[16px] border-[#CCC4B4] px-[10px] border-[2px] open-sans text-[#642C0C]"/>
                            <button class="border-[#642C0C] border-[2px] text-[#642C0C] text-[20px] font-extrabold w-[76px] h-[50px]">Use</button>
                        </div>
                        <p class="open-sans text-[#000000]">View available vouchers</p>
                        <hr class="bg-[#D9D9D9] justify-center my-[24px] h-[2px]"/>
                        <div class="flex justify-between pb-[24px]">
                            <h2 class="open-sans font-normal text-[16px] text-[#642C0C]">Subtotal</h2>
                            <h2 class="text-[#000] open-sans font-normal text-[16px]">Rp.  {{ cartSubtotal.toLocaleString() }}</h2>
                        </div>
                        <div class="flex justify-between pb-[24px]">
                            <h2 class="open-sans font-normal text-[16px] text-[#642C0C]">Shipping Fee</h2>
                            <h2 class="text-[#000] open-sans font-normal text-[16px]">Rp. {{ getShippingPrice() }}</h2>
                        </div>
                        <div class="flex justify-between">
                            <h2 class="open-sans font-normal text-[16px] text-[#642C0C]">Total</h2>
                            <h2 class="text-[#000] open-sans font-normal text-[16px]">Rp. {{ calculatedCartTotal.toLocaleString() }}</h2>
                        </div>
                        <hr class="bg-[#D9D9D9] justify-center my-[24px] h-[2px]"/>
                        <div class="">
                            <button  type="submit" class=" h-[51px] bg-[#C0772C] w-full text-[#FFFFFF] font-extrabold text-[20px]">Choose Payment Methode</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <footer-bar/>
</template>

<script>
import NavBar from '../Nav-bar.vue';
import FooterBar from '../Footer-bar.vue';
import { FlIOsArrowRtl } from "@kalimahapps/vue-icons";
import { mapState, mapActions, mapMutations } from 'vuex';
import axios from 'axios';

export default {
    name: 'PaymentPageVue',
    components:{
        NavBar,
        FooterBar,
        FlIOsArrowRtl,
    },
    data() {
        return {
            formData: {
                name: '',
                address:'',
                province: '',
                regency: '',
                district: '',
                village: '',
                shippingOption: '',
            },
            formErrors: {},
            provinces: [],
            regencies: [],
            districts: [],
            villages: [],
            shippingOptions: [ 
            { id: 1, name: 'Regular (3 - 7 Working Days)', price: 50000 },
            { id: 2, name: 'Express (1 - 2 Working Days)', price: 100000 },
            ],
        };
    },
    mounted() {
        this.fetchProvinces();
    },
    computed:{
        ...mapState(['cart']),
        cartItems() {
            return this.cart;
        },
        cartSubtotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        calculatedCartTotal() {
            const subtotal = this.cart.reduce((total, item) => total + item.price * item.quantity, 0);

            const shippingOption = this.shippingOptions.find(option => option.id === parseInt(this.formData.shippingOption));

            return subtotal + (shippingOption ? shippingOption.price : 0);
        },
    },
    methods:{
        ...mapActions(['updateQuantity']),
        ...mapMutations(['SET_SHIPPING_FEE', 'SET_TOTAL_PRICE_PAYMENT']),
        async fetchProvinces() {
            try {
                const response = await axios.get('https://zakyzn99.github.io/api-wilayah-indonesia/api/provinces.json');
                this.provinces = response.data;
            } catch (error) {
                console.error('Error fetching provinces:', error);
            }       
        },
        async fetchRegencies(provinceId) {
            try {
                const response = await axios.get(`https://zakyzn99.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
                this.regencies = response.data;
            } catch (error) {
                console.error('Error fetching regencies:', error);
            }
        },
        async fetchDistricts(regencyId) {
            try {
                const response = await axios.get(`https://zakyzn99.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`);
                this.districts = response.data;
            } catch (error) {
                console.error('Error fetching districts:', error);
            }
        },
        async fetchVillages(districtId) {
            try {
                const response = await axios.get(`https://zakyzn99.github.io/api-wilayah-indonesia/api/villages/${districtId}.json`);
                this.villages = response.data;
            } catch (error) {
                console.error('Error fetching villages:', error);
            }
        },
        getShippingPrice() {
            const selectedShippingOption = this.shippingOptions.find(option => option.id === parseInt(this.formData.shippingOption));
            return selectedShippingOption ? selectedShippingOption.price.toLocaleString() : '0';
        },
        validateForm() {
            this.formErrors = {}; 

            if (!this.formData.name.trim()) {
                this.formErrors.name = 'Name is required.';
            }

            if (!this.formData.address.trim()) {
                this.formErrors.address = 'Address is required.';
            }

            if (!this.formData.province) {
                this.formErrors.province = 'Province is required.';
            }

            if (!this.formData.regency) {
                this.formErrors.regency = 'Regency is required.';
            }

            if (!this.formData.district) {
                this.formErrors.district = 'District is required.';
            }

            if (!this.formData.village) {
                this.formErrors.village = 'Village is required.';
            }
            if (!this.formData.shippingOption) {
                this.formErrors.shippingOption = 'Shipping option is required.';
            }

            return Object.keys(this.formErrors).length === 0;
        },
        submitForm() {
            if (this.validateForm()) {
                const shippingOption = this.shippingOptions.find(option => option.id === parseInt(this.formData.shippingOption));
                const shippingFee = shippingOption ? shippingOption.price : 0;
                const totalPricePayment = this.calculatedCartTotal;
                    
                this.$store.commit('SET_SHIPPING_FEE', shippingFee);
                this.$store.commit('SET_TOTAL_PRICE_PAYMENT', totalPricePayment);

                console.log(`TotalPrice: ${totalPricePayment}`)
                console.log(`ShippingFee: ${shippingFee}`)

                this.$router.push({name: 'PaymentMethodPageVue' })
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