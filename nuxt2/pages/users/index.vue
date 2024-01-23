<template>
    <div>
        <p>Users</p>

        <ul>
            <li>
                <nuxt-link to="/users/1">1번 User</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/users/2">2번 User</nuxt-link>
            </li>
        </ul>

        <div style="height: 1000px" />
    </div>
</template>

<script>
export default {
    name: "UserIndex"
}
</script>