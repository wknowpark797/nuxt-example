<template>
    <nav class="menu-wrap">
        <ul>
            <li>
                <nuxt-link to="/">
                    Home
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/users">
                    Users
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MenuComp',
}
</script>

<style lang="scss" scoped>
    .menu-wrap {
        ul {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eee;

            li {
                &:not(:first-child) {
                    margin-left: 15px;
                }

                a {
                    color: #333;

                    &.active {
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>