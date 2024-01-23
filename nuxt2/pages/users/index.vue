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

        <!-- hooper -->
        <div class="carousel-wrap">
            <hooper ref="carousel" @slide="slideUpdate" :settings="hooperSettings">
                <slide v-for="(item, idx) in hooperData" :key="idx" :index="idx">
                    {{ item.name }}
                </slide>

                <!-- navigation -->
                <hooper-navigation slot="hooper-addons"></hooper-navigation>

                <!-- pagination -->
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
                <hooper-pagination slot="hooper-addons" mode="fraction" class="fraction"></hooper-pagination>

                <!-- progress -->
                <hooper-progress slot="hooper-addons"></hooper-progress>
            </hooper>

            <!-- carousel controller -->
            <button @click.prevent="slidePrev">PREV</button>
            <input v-model="carouselData" type="number" min="0" :max="hooperData.length - 1">
            <button @click.prevent="slideNext">NEXT</button>
            <p>carouselData: {{ carouselData }}</p>
        </div>

        <div style="height: 1000px" />
    </div>
</template>

<script>
import { 
    Hooper, 
    Slide, 
    Navigation as HooperNavigation,
    Pagination as HooperPagination,
    Progress as HooperProgress,
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: "UserIndex",
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,
        HooperProgress
    },
    data() {
        return {
            hooperSettings: {
                initialSlide: 2,
                itemsToShow: 2,
                centerMode: false,
                pagination: "yes",
                // infiniteScroll: true,
                // autoPlay: true,
                // playSpeed: 1000,
                breakpoints: {
                    800: {
                        itemsToShow: 1.25,
                        centerMode: true,
                    }
                },
                rtl: false
            },
            carouselData: 0,
            hooperData: [
                { id: 1, name: "slide01"},
                { id: 2, name: "slide02"},
                { id: 3, name: "slide03"},
                { id: 4, name: "slide04"},
                { id: 5, name: "slide05"}
            ]
        }
    },
    watch: {
        carouselData() {
            this.$refs.carousel.slideTo(this.carouselData);
        }
    },
    methods: {
        slidePrev() {
            this.$refs.carousel.slidePrev();
        },
        slideNext() {
            this.$refs.carousel.slideNext();
        },
        slideUpdate(payload) {
            // console.log('payload: ', payload);
            this.carouselData = payload.currentSlide;
        }
    }
}
</script>

<style lang="scss" scoped>
    .carousel-wrap {
        margin-top: 30px;
    }
</style>

<style lang="scss">
    .carousel-wrap {
        .hooper-slide {
            background: #eee;
            border: 1px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .hooper-navigation {
            button {
                background: rgba(255, 255, 255, .5);
            }
        }
        .hooper-pagination {
            &.fraction {
                bottom: -35px;
            }
        }
        .hooper-progress {
            background: #c0ddff;
        }
    }
</style>