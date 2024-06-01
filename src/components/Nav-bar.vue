<template>
    <div>
        <nav class="flex justify-between items-center p-4 bg-white shadow-md">
            <a href="#"><img src="../assets/Logo-1.png" alt="Logo" ></a>
            <ul class="hidden md:flex space-x-8">
                <li><a href="#" class="hover:text-gray-600">Home</a></li>
                <li><a href="#" class="hover:text-gray-600">About</a></li>
                <li><a href="#" class="hover:text-gray-600">Product</a></li>
                <li><a href="#" class="hover:text-gray-600">Contact</a></li>
            </ul>
            <button @click="toggleMenu" class="md:hidden flex items-center text-xl">
                ☰
            </button>
        </nav>
        <div v-if="isMenuActive" class="md:hidden bg-white shadow-md p-4 flex flex-col space-y-4">
            <a href="#" class="hover:text-gray-600">Home</a>
            <a href="#" class="hover:text-gray-600">About</a>
            <a href="#" class="hover:text-gray-600">Product</a>
            <a href="#" class="hover:text-gray-600">Contact</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isMenuActive: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        }
    }
}
</script>