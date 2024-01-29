<template>
    <nav class="menu-wrap">
        <ul :class="{ scroll : scroll }">
            <li>
                <nuxt-link to="/">
                    Home
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/posts">
                    Posts
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/users">
                    Users
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/random">
                    Random
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/animation">
                    Animation
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MenuComp',
    data() {
        return {
            scroll: false
        }
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},
    methods: {
		handleScroll() {
            this.scroll = window.scrollY > 0;
		}
	},
}
</script>

<style lang="scss" scoped>
    .menu-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        ul {
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eee;
            transition: all .2s ease;

            &.scroll {
                height: 40px;
            }

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