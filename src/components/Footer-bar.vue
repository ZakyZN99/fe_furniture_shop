<template>
    <div>
        <footer class="bg-[#642C0C] px-[100px] py-[48px]">
            <div class="flex justify-between">
                <div>
                    <img src="../assets/Logo-2.png" class="w-[168.17px] h-[48px]" />
                    <h2 class="text-[#ffff] open-sans text-[20px] font-semibold pt-[48px]">Office</h2>
                    <h3 class="text-[#ffff] open-sans text-[18px] pt-[24px]">Jl. Gatot Subroto, Bandung</h3>
                </div>
                <div class="flex justify-between gap-[50px]">
                    <div >
                        <h5 class="text-[#CCC4B4] open-sans text-[16px]">Link</h5>
                        <h5 class="text-[#FFFFFF] text-[16px] pt-[15px]"><router-link to="/" >Home</router-link></h5>
                        <h5 class="text-[#FFFFFF] text-[16px] pt-[15px]"><router-link to="/products">Product</router-link></h5>
                        <h5 class="text-[#FFFFFF] text-[16px] pt-[15px]"><router-link to="/contact">Contact</router-link></h5>
                        <h5 class="text-[#FFFFFF] text-[16px] pt-[15px]"><router-link to="/about">About</router-link></h5>
                    </div>
                    <div>
                        <h5 class="text-[#CCC4B4] open-sans text-[16px]">Help</h5>
                        <h5 class="text-[#FFFFFF] text-[16px] pt-[15px]"><router-link to="" >Payment option</router-link></h5>
                        <h5 class="text-[#FFFFFF] text-[16px] pt-[15px]"><router-link to="" >Privacy Policy</router-link></h5>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'FooterBar',
}
</script>