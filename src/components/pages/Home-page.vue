<template>
    <div class="relative h-[725px] w-[100%]">
        <div class="absolute inset-0 bg-gradient-to-r from-white to-transparent pl-[99px] pt-[163px]">
            <p class="">
                <span class="text-[#642C0C] text-[52px] font-bold">Discover the </span>
                <span class="text-[#C0772C] text-[52px] font-bold">Perfect<br/> Furniture </span>
                <span class="text-[#642C0C] text-[52px] font-bold">for Your <br/> Home</span>
            </p>
            <p class="text-[#C0772C] text-[18px] open-sans font-light pb-[40px]">Transform your living space with our stylish and modern <br/> furniture collections.</p>
            <button class="text-[#ffffff] w-[181px] h-[51px] bg-[#C0772C] font-extrabold text-[16px]">Shop Now</button>
        </div>
        <img class="h-full w-full object-cover" src="../../assets/img/spacejoy-ctyssSFmXmU-unsplash 1.png">
    </div>
    <div class="pl-[100px] pr-[100px]">
        <p class="text-[#CCC4B4] open-sans font-normal text-[18px] pt-[100px]">Discover</p>
        <h1 class="text-[#642C0C] font-medium text-[48px]">Featured</h1>
        <div class="flex items-center justify-between">
            <p class="open-sans font-normal text-[#CCC4B4]">Explore our selection of modern furniture for your home.</p>
            <button class="text-[#ffffff] w-[120px] h-[51px] bg-[#C0772C] font-extrabold">View All</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.open-sans {
    font-family: 'Open Sans', sans-serif;
}
.font-light {
    font-weight: 300;
}
</style>