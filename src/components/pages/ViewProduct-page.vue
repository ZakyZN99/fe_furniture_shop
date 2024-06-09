<template>
    <div>
        <nav-bar/>
        <div class="relative h-[400px] w-[100%]">
            <div class="absolute inset-0 bg-gradient-to-r from-[#642C0CBF] to-transparent px-[100px] py-[150px]">
                <h1 class="text-[#ffffff] text-[52px] font-bold">Product</h1>
                <div class="flex items-center text-[#ffff]">
                    <h2>Home</h2>
                    <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
                    <h2>Product</h2>
                    <FlIOsArrowRtl class="mx-[18px]" style="font-size: 15px;"/>
                </div> 
            </div>
            <img src="../../assets/img/cover/cover_4.png" class="h-full w-full object-cover" />
        </div>

        <!-- NAVBAR PRODUCTS -->
        <div class="w-full h-[100px] flex px-[100px] py-[35px] justify-between shadow-md shadow-[#CCC4B4] ">
            <div class="flex items-center">
                <button class="flex items-center gap-[12px]">
                    <SuFiltering class=" size-[25px]"/>
                    <p class="open-sans text-[20px] text-[#642C0C]">Filter</p>
                </button>
                <span class="px-[27px] text-[#9F9F9F]">|</span>
                <p class="open-sans text-[16px] text-[#642C0C]">Showing {{ start + 1 }} - {{ end }} of {{ products.length }} results</p>
            </div>
            <div class="flex gap-[40px]">
                <p class="open-sans text-[20px] text-[#642C0C]">Show</p>
                <p class="open-sans text-[20px] text-[#E5D097]">{{ end }}</p>
                <p class="open-sans text-[20px] text-[#642C0C]">Short by</p>
                <p class="open-sans text-[20px] text-[#E5D097] pr-[190px]">Default</p>
            </div>
        </div>

        <!-- MAIN:  ALL PRODUCTS -->
        <div class="grid grid-cols-3 gap-[30px] px-[100px] pt-[50px] ">
            <div  v-for="(product, index) in paginatedProducts" :key="index"  class="border w-[393px] h-[475px]  transition ease-in-out duration-700" >
                <img :src="product.image" class="w-[393px] h-[334px]" />
                <div class="pl-[13px] pt-[18px] w-[393px] h-[141px]">
                    <h1 class="open-sans font-semibold text-[24px] text-[#642C0C]">{{product.title}}</h1>
                    <p class="open-sans font-normal text-[16px] text-[#CCC4B4]">{{product.description}}</p>
                    <p class="open-sans font-semibold text-[24px] text-[#642C0C]">{{product.price}}</p>
                </div>
            </div>
        </div>

        <!-- PAGINATION -->
            <div class="flex justify-center py-[110px]">
                <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="px-4 py-2 w-[80px] h-[60px] mx-1 border rounded bg-[#E5D097] text-white font-semibold text-[20px] open-sans">
                Prev
                </button>
                <button
                    v-for="page in totalPages"
                    :key="page"
                    @click="currentPage = page"
                    :class="['px-4 py-2 w-[60px] h-[60px] mx-1 border rounded', currentPage === page ? 'bg-[#C0772C] text-white font-semibold text-[20px] open-sans ' : 'bg-[#E5D097] text-white font-semibold text-[20px] open-sans']">
                    {{ page }}
                </button>
                <button
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                    class="px-4 py-2 w-[80px] h-[60px] mx-1 border rounded bg-[#E5D097] text-white font-semibold text-[20px] open-sans">
                    Next
                </button>
            </div>
        </div>
    <footer-bar/>
</template>

<script>
import NavBar from '../Nav-bar.vue';
import { FlIOsArrowRtl } from "@kalimahapps/vue-icons";
import { SuFiltering } from "@kalimahapps/vue-icons";
import FooterBar from '../Footer-bar.vue';

export default {
    name: 'ViewProductPageVue',
    components: {
        NavBar,
        FooterBar,
        FlIOsArrowRtl,
        SuFiltering,
    },
    data(){
        return{
            products:[],
            currentPage:1,
            productPerpage: 12
        }
    },
    computed:{
        totalPages(){
            return Math.ceil(this.products.length / this.productPerpage);
        },
        paginatedProducts(){
            const start = (this.currentPage - 1) * this.productPerpage;
            const end = start + this.productPerpage;
            return this.products.slice(start, end)
        },
        start(){
            return (this.currentPage - 1) * this.productPerpage;
        },
        end(){
            return Math.min(this.currentPage * this.productPerpage, this.products.length);
        }
    }, methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        }
    },
    mounted(){
        fetch('/dataJson/dummyProducts.json')
        .then(response => response.json())
        .then(data => {
            this.products = data.products.map(product => {
                return{
                    ...product,
                    image: require(`@/assets/img/${product.image}`)
                }
            })
            this.updateDisplayedProducts();
        }).catch(err => {
            console.error("error", err);
        })
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.open-sans {
    font-family: 'Open Sans', sans-serif;
}
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
</style>