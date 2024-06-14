<template>
    <div>
        <nav class="flex justify-between items-center p-4 bg-white shadow-md pl-[100px] pr-[100px]">
            <div class="flex items-center space-x-8">
                <a href="#"><img src="../assets/Logo-1.png" alt="Logo" ></a>
                <ul class="hidden md:flex space-x-8 justify-center">
                <li><router-link to="/" class="hover:text-[#C0772C] font-extrabold text-[#C0772C]">Home</router-link></li>
                <li><router-link to="/products" class="hover:text-[#C0772C] font-normal text-[#E5D097]">About</router-link></li>
                <li><a href="#" class="hover:text-[#C0772C] font-normal text-[#E5D097]">Product</a></li>
                <li><a href="#" class="hover:text-[#C0772C] font-normal text-[#E5D097]">Contact</a></li>
            </ul>
            </div>
            <div class="hidden items-center md:flex space-x-[44px]">
                <ul class="md:flex space-x-[44px]">
                    <input v-if="isSearchActive" type="text" placeholder="Search" class="border p-1 border-gray-300 rounded-md focus:outline-none focus:border-[#C0772C]">
                    <li><a href="#"><img src="../assets/icons/akar-icons_search.png" @click="toggleSearch" /></a></li>
                    <li><a href="#"><img src="../assets/icons/akar-icons_heart.png" /></a></li>
                    <li class="relative" @click="toggleCarts" @mouseenter="toggleCarts" >
                        <a href="#"><img src="../assets/icons/ant-design_shopping-cart-outlined.png" /></a>
                    <div v-if="isCartsActive" class="absolute right-0 mt-2 w-[300px] h-[292.57px] bg-white shadow-md p-4">
                            <h1 class="text-[#642C0C] font-medium pb-[18px] text-[18px]">Cart</h1>
                            <div v-for="item in cartItems" :key="item.id" class="flex justify-between gap-[16px] border-b pb-[28px] items-center">
                                <img :src="item.image" class="w-[100px] h-[78px]" />
                                <div>
                                    <h1 class="text-[#642C0C] font-semibold text-[16px]">{{ item.name }}</h1>
                                    <div class="border-[2px] w-[61px] h-[25px] border-[#642C0C] flex items-center">
                                        <button @click="updateQuantity(item.id, item.quantity - 1)" class="open-sans text-[#642C0C] text-[16px] pl-[8px] pb-[2px]">-</button>
                                        <span class="text-[#642C0C] text-[12px] open-sans px-[12px]">{{ item.quantity }}</span>
                                        <button @click="updateQuantity(item.id, item.quantity + 1)" class="open-sans text-[#642C0C] text-[14px] pr-[8px]">+</button>
                                    </div>
                                    <p class="text-[#C0772C] open-sans text-[12px] font-normal pt-[8px]">Rp. {{ item.price.toLocaleString() }}</p>
                                </div>
                                <div>
                                    <button @click="removeFromCart(item.id)"><img src="../assets/icons/cross.png" /></button>
                                </div>
                            </div>
                            <div class="flex py-[24px] justify-between">
                                <h2 class="text-[#CCC4B4] font-medium text-[16px]">Subtotal</h2>
                                <p class="text-[#642C0C] open-sans text-[14px] font-semibold">Rp. {{ cartSubtotal.toLocaleString() }}</p>
                            </div>
                            <button class="flex items-center px-[12px] justify-between border-[2px] border-[#642C0C] w-[121px] h-[37px]">
                                <img src="../assets/icons/ant-design_shopping-cart-outlined (2).png" />
                                <p class="text-[#642C0C] font-extrabold text-[16px]">View Cart</p>
                            </button>
                    </div></li>
                </ul>
                <button class="hover:bg-[#E5D097] items-center font-extrabold bg-[#C0772C] w-[110px] h-[45px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] flex text-[#ffffff] gap-1"><img src="../assets/icons/user 1.png" />Sign In</button>
            </div>

            <button @click="toggleMenu" class="md:hidden flex items-center text-xl">
                ☰
            </button>
        </nav>
        <div v-if="isCartsActive" class="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div v-if="isMenuActive" class="md:hidden bg-white shadow-md p-4 flex flex-col space-y-4">
            <a href="#" class="hover:text-[#C0772C] font-extrabold text-[#C0772C]">Home</a>
            <a href="#" class="hover:text-[#C0772C] font-normal text-[#E5D097]">About</a>
            <a href="#" class="hover:text-[#C0772C] font-normal text-[#E5D097]">Product</a>
            <a href="#" class="hover:text-[#C0772C] font-normal text-[#E5D097]">Contact</a>
            <button class="hover:bg-[#E5D097] items-center font-extrabold bg-[#C0772C] w-[110px] h-[45px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] flex text-[#ffffff] gap-1"><img src="../assets/icons/user 1.png" />Sign In</button>
            
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'NavBar',
    data() {
        return {
            isMenuActive: false,
            isSearchActive: false,
            isCartsActive: false
        };
    },
    computed: {
    ...mapState(['cart']),
        cartItems() {
            return this.cart;
        },cartSubtotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    },
    methods: {
        ...mapActions(['removeFromCart', 'updateQuantity']),
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
        toggleSearch(){
            this.isSearchActive = !this.isSearchActive
        },
        toggleCarts(){
            this.isCartsActive = !this.isCartsActive
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.open-sans {
    font-family: 'Open Sans', sans-serif;
}
.navbar-cart:hover .cart-dropdown,
.cart-dropdown:hover {
    display: block;
}

.cart-dropdown {
    display: none;
}
</style>