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