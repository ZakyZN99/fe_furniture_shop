<template>
    <div>
        <nav class="flex justify-between items-center p-4 bg-white shadow-md pl-[100px] pr-[100px]">
            <div class="flex items-center space-x-8">
                <a href="#"><img src="../assets/Logo-1.png" alt="Logo" ></a>
                <ul class="hidden md:flex space-x-8 justify-center">
                <li><a href="#" class="hover:text-[#C0772C] font-extrabold text-[#C0772C]">Home</a></li>
                <li><a href="#" class="hover:text-[#C0772C] font-normal text-[#E5D097]">About</a></li>
                <li><a href="#" class="hover:text-[#C0772C] font-normal text-[#E5D097]">Product</a></li>
                <li><a href="#" class="hover:text-[#C0772C] font-normal text-[#E5D097]">Contact</a></li>
            </ul>
            </div>
            <div class="hidden items-center md:flex space-x-[44px]">
                <ul class="md:flex space-x-[44px]">
                    <input v-if="isSearchActive" type="text" placeholder="Search" class="border border-gray-300 rounded-md focus:outline-none focus:border-[#C0772C]">
                    <li><a href="#"><img src="../assets/icons/akar-icons_search.png" @click="toggleSearch" /></a></li>
                    <li><a href="#"><img src="../assets/icons/akar-icons_heart.png" /></a></li>
                    <li><a href="#"><img src="../assets/icons/ant-design_shopping-cart-outlined.png" /></a></li>
                </ul>
                <button class="hover:bg-[#E5D097] items-center font-extrabold bg-[#C0772C] w-[110px] h-[45px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] flex text-[#ffffff] gap-1"><img src="../assets/icons/user 1.png" />Sign In</button>
            </div>

            <button @click="toggleMenu" class="md:hidden flex items-center text-xl">
                ☰
            </button>
        </nav>
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
export default {
    name: 'NavBar',
    data() {
        return {
            isMenuActive: false,
            isSearchActive: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
        toggleSearch(){
            this.isSearchActive = !this.isSearchActive
        }
    }
}
</script>