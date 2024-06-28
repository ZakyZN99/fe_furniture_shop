<template>
    <div>
        <nav-bar/>
        <div class="relative h-[725px] w-[100%]">
            <div class="absolute inset-0 bg-gradient-to-r from-white to-transparent pl-[99px] pt-[163px]">
                <p class="">
                    <span class="text-[#642C0C] text-[52px] font-bold">Discover the </span>
                    <span class="text-[#C0772C] text-[52px] font-bold">Perfect<br/> Furniture </span>
                    <span class="text-[#642C0C] text-[52px] font-bold">for Your <br/> Home</span>
                </p>
                <p class="text-[#C0772C] text-[18px] open-sans font-light pb-[40px]">Transform your living space with our stylish and modern <br/> furniture collections.</p>
                <button  @click="goToShop" class="text-[#ffffff] w-[181px] h-[51px] bg-[#C0772C] font-extrabold text-[16px]">Shop Now</button>
            </div>
            <img class="h-full w-full object-cover" src="../../assets/img/spacejoy-ctyssSFmXmU-unsplash 1.png">
        </div>

        <div class="pl-[100px] pr-[100px] bg-[#F8F8F8] pb-[100px]">
            <p class="text-[#CCC4B4] open-sans font-normal text-[18px] pt-[100px]">Discover</p>
            <h1 class="text-[#642C0C] font-medium text-[48px]">Featured</h1>
            <div class="flex items-center justify-between">
                <p class="open-sans font-normal text-[#CCC4B4]">Explore our selection of modern furniture for your home.</p>
                <button @click="goToShop" class="text-[#ffffff] w-[120px] h-[51px] bg-[#C0772C] font-extrabold">View All</button>
            </div>
            <div class="pt-[40px] flex gap-[30px]  overflow-x-hidden relative scrollbar-hide"  ref="productContainer">
                <div  v-for="(product, index) in products" :key="index" class="border w-[393px] h-[475px]  transition ease-in-out duration-700"  :style="{ transform: `translateX(-${currentImageIndex}px)` }">
                    <img :src="product.image" class="w-[393px] h-[334px]" />
                    <div class="pl-[13px] pt-[18px] w-[393px] h-[141px]">
                        <h1 class="open-sans font-semibold text-[24px] text-[#642C0C]">{{product.title}}</h1>
                        <p class="open-sans font-normal text-[16px] text-[#CCC4B4]">{{product.description}}</p>
                        <p class="open-sans font-semibold text-[24px] text-[#642C0C]">{{product.price}}</p>
                    </div>
                </div>
            </div>
            <div class="flex pt-[71px] items-center justify-between ">
                <div class="flex gap-[12px]">
                    <!-- <img  src="../../assets/icons/Ellipse 99.png" class="w-[13.74px] h-[13.47px]"/>
                    <img src="../../assets/icons/Ellipse 100.png" class="w-[13.74px] h-[13.47px]"/>
                    <img src="../../assets/icons/Ellipse 100.png" class="w-[13.74px] h-[13.47px] "/>
                    <img src="../../assets/icons/Ellipse 100.png" class="w-[13.74px] h-[13.47px] "/> -->
                </div>
                <div class="flex space-x-[24px]">
                    <button @click="prevImage" class=" hover:bg-white flex justify-center items-center rounded-full border-[#E5D097] w-[60px] h-[60px] border-2"><img class="w-[25.67px] h-[21.98px]" src="../../assets/icons/arrow_back.png"/></button>
                    <button @click="nextImage" class=" hover:bg-white flex justify-center items-center rounded-full border-[#E5D097] w-[60px] h-[60px] border-2"><img class="w-[25.67px] h-[21.98px]" src="../../assets/icons/arrow_forward.png"/></button>
                </div>
            </div>
        </div>

        <div class="w-[100%] h-[700px] relative " >
            <div class=" pl-[100px] pt-[100px] absolute w-[700px] h-full bg-opacity-75 bg-[#642C0C] pr-[10px]">
                <p class=" open-sans font-light text-[18px] text-[#CCC4B4]">Discover</p>
                <h1 class="text-[#ffffff] font-medium text-[48px]">Experience Modern <br/>Furniture Like Never<br/> Before</h1>
                <p class="open-sans font-normal text-[18px] text-[#CCC4B4] pt-[24px] pb-[24px]">At our online store, we offer a wide range of modern furniture that combines quality craftsmanship, innovative design, and sustainable materials. Whether you're looking for a statement piece or a complete home makeover, our collection has something for every style and budget.</p>
                <div class="flex gap-[24px]">
                    <div>
                        <h5 class=" font-semibold text-[18px] text-[#ffffff]">Quality</h5>
                        <p class="open-sans text-[14px] text-[#CCC4B4] pt-[20px]">Experience the finest craftsmanship and attention to detail in every piece.</p>
                    </div>
                    <div class="">
                        <h5 class=" font-semibold text-[18px] text-[#ffffff]">Design</h5>
                        <p class="open-sans text-[14px] text-[#CCC4B4] pt-[20px]" >Discover modern furniture designs that are both functional and aesthetically pleasing.</p>
                    </div>
                </div>
            </div>
            <img class="h-full w-full object-cover" src="../../assets/img/spacejoy-k2pumSRYYss-unsplash 1.png" />
        </div>

        <div class="w-[100%] h-[700px]">
            <div class="absolute flex pl-[300px] pt-[100px] pr-[200px]">
                <img src="../../assets/img/cover/cover_3.png" class="w-[605px] h-[500px] object-cover " />
                <div class=" pl-[30px] pt-[32px] pr-[95px]">
                    <p class="open-sans text-[18px] text-[#CCC4B4]">Quality</p>
                    <h1 class=" font-medium text-[48px] text-[#642C0C]">Experience the Best in<br/> Modern Furniture</h1>
                    <p class="open-sans text-[18px] text-[#CCC4B4]">Discover our impressive growth, exceptional customer satisfaction, and wide range of high-quality products.</p>
                    <div class="flex gap-[20px]">
                        <div class="">
                            <h1 class="text-[#642C0C] text-[52px] font-semibold">50%</h1>
                            <p class="open-sans text-[14px] text-[#CCC4B4]">Increase in Customer Satisfaction</p>
                        </div>
                        <div class="">
                            <h1 class="text-[#642C0C] text-[52px] font-semibold">50%</h1>
                            <p class="open-sans text-[14px] text-[#CCC4B4]">Growth in Product Selection</p>
                        </div>
                    </div>
                    <div class="pt-[28px] gap-[22px] flex">
                        <button class="w-[119px] h-[45px] border-[#642C0C] border-2 text-[#642C0C] text-[16px] font-extrabold">Learn More</button>
                        <button class="w-[119px] h-[45px] justify-center flex gap-1 items-center text-[#642C0C] text-[16px] font-extrabold border-[#ffff] hover:border-[#642C0C] border-2">Sign Up <img src="../../assets/icons/angle-right 1.png" width="12px" height="12px" /></button>
                    </div>
                </div>
            </div>
            <img src="../../assets/CurveLine.png" class="object-cover w-[1170px] h-[700px]"/>
        </div>

        <div class="w-[100%] h-[408px]">
            <div class="absolute bg-opacity-75 bg-[#642C0C] w-[50%] h-[408px] pl-[100px] pr-[30px] pt-[50px]">
                <h1 class="text-[#ffffff] font-medium text-[48px]">Discover Our Latest <br/>Furniture Collections</h1>
                <p class="pt-[24px] open-sans text-[20px] text-[#CCC4B4] ">Explore our new arrivals and seasonal collections to find the perfect furniture for your home.</p>
                <div class="pt-[45px] flex gap-[22px]">
                    <button @click="goToShop" class="bg-[#C0772C] text-[#ffff] text-[16px] font-extrabold w-[107px] h-[45px] hover:bg-[#ffffff] hover:text-[#C0772C]">Shop Now</button>
                    <button @click="goToShop" class="border-[#C0772C] text-[#ffff] border-[1px] font-extrabold text-[16px] w-[107px] h-[45px] hover:bg-[#C0772C] ">Browse</button>
                </div>
            </div>
            <img src="../../assets/img/cover/cover_4.png" class="w-[100%] h-full object-cover" />
        </div>

        <div class="bg-[#F8F8F8] w-[100%] items-center text-center justify-center">
            <h1 class="pt-[100px] text-[48px] text-[#642C0C] font-medium">Frequently Asked Questions</h1>
            <p class="pt-[24px] text-[18px] text-[#CCC4B4] pb-[100px]">Find answers to common questions about furniture care, delivery, and returns policies.</p>
            <div class=" flex justify-center">
                <section class="w-[820px] ">
                    <div v-for="(faq,index) in faqs" :key="index" @click="toggleFAQ(index)" class=" border-b-[1px] border-[#CCC4B4] " >
                        <button   class=" w-full text-left flex justify-between items-center"> 
                            <span class="text-[#642C0C] text-[20px] py-[24px] font-bold">{{ faq.question }}</span>
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
            <div class="pb-[94px]">
                <p class="text-[#642C0C] font-medium text-[48px] pt-[100px]">Still have questions?</p>
                <p class="text-[#CCC4B4] text-[18px] open-sans pb-[32px] pt-[24px]">Contact our support team for assistance.</p>
                <button @click="goToContact" class="w-[130px] h-[51px] bg-[#C0772C]  text-[#ffffff] text-[16px] font-semibold ">Contact</button>
            </div>
        </div>
        
    <footer-bar/>
    </div>
</template>


<script>
import NavBar from '../Nav-bar.vue';
import FooterBar from '../Footer-bar.vue';

export default {
    name: 'HomePageVue',
    components: {
        NavBar,
        FooterBar
    },
    data(){
        return{
            products:[],
            currentImageIndex: 0,
            productWidth: 393 + 30,
            visibleProducts: 3,
            openIndex: null,
            faqs:[
                {
                    question: "How do I care for my furniture?",
                    answer : "Proper care for your furniture includes regular cleaning and avoiding direct sunlight."
                },{
                    question: "What is your delivery process?",
                    answer : "We offer fast and reliable delivery services to ensure your furniture arrives safely."
                },{
                    question: "What is your returns policy?",
                    answer : "If you're not satisfied with your purchase, we accept returns within 30 days."
                },{
                    question: "Can I customize my furniture?",
                    answer : "Yes, we offer customization options for select furniture pieces."
                },{
                    question: "Do you offer warranty?",
                    answer : "Yes, we provide a warranty for our furniture to ensure customer satisfaction."
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
        nextImage(){
            const maxOffset = (this.products.length - this.visibleProducts) * this.productWidth;
            if(this.currentImageIndex < maxOffset){
                this.currentImageIndex+=this.productWidth;
            }else{
                this.currentImageIndex = 0
            }
            this.$refs.productContainer.classList.add('transform', `translate-x(-${this.currentImageIndex}px)`);
        },
        prevImage(){
            if(this.currentImageIndex > 0){
                this.currentImageIndex-= this.productWidth;
            }else{
                const maxOffset = (this.products.length - this.visibleProducts) * this.productWidth;
                this.currentImageIndex = maxOffset;
            }
            this.$refs.productContainer.classList.add('transform', `translate-x(-${this.currentImageIndex}px)`);
        },
        goToShop(){
            this.$router.push({ name: "ViewProductPageVue" });
        },
        goToContact(){
            this.$router.push({ name: "ContactPage" });
        }
    },
    mounted(){
    fetch('/dataJson/dummyProducts.json')
    .then(response => response.text()) 
    .then(data => {
        console.log(data); 
        try {
            const jsonData = JSON.parse(data);
            this.products = jsonData.products.map(product => {
                return{
                    ...product,
                    image: require(`@/assets/img/${product.image}`)
                }
            });
        } catch (err) {
            console.error("Failed to parse JSON", err);
        }
    }).catch(err => {
        console.error("Error fetching data", err);
    });
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.open-sans {
    font-family: 'Open Sans', sans-serif;
}
</style>
