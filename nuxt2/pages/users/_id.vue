<template>
    <div>
        {{ id }}번 User
    </div>
</template>

<script>
export default {
    name: "UserDetail",
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>