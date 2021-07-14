<template>
    <div class="page-container">
        <admin-navbar></admin-navbar>
        <div class="main-content" >
            <transition name="slide-fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        
    }
}
</script>

<style lang="scss">

</style>
