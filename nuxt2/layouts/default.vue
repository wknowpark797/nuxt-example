<template>
    <div id="app">
        <MenuComp />
        <Nuxt />
    </div>
</template>

<script>
import MenuComp from '~/components/common/MenuComp.vue'

export default {
    components: {
        MenuComp
    }
}
</script>

<style lang="scss" scoped>
    #app {
        margin-top: 55px;
        padding-top: 20px;
    }
</style>