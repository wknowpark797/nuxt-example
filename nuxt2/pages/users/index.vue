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
        <section class="section">
            <h2>Hooper Carousel</h2>

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
        </section>

        <!-- splide -->
        <section class="section">
            <h2>Vue Splide</h2>

            <div class="splide-wrap">
                
            </div>
        </section>
        
        <!-- draggable -->
        <section class="section">
            <h2>Draggable</h2>

            <div class="drag-wrap">
                <draggable 
                    :list="list" 
                    :disabled="false" 
                    ghost-class="ghost" 
                    :move="checkMove"
                    :animation=300
                    @start="dragging = true"
                    @end="dragging = false">

                    <div v-for="item in list" :key="item.name" class="drag-item">
                        {{ item.name }}
                    </div>
                </draggable>

                <p>Dragging : {{ dragging }}</p>
            </div>
        </section>

        <!-- clipboard -->
        <section class="section">
            <h2>Vue Clipboard</h2>

            <div class="clipboard-wrap">
                <input type="text" v-model="clipboardInput">
                <button 
                    type="button"
                    v-clipboard:copy="clipboardInput"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onCopyError">
                    COPY
                </button>

                <ul>
                    <li 
                        v-for="item in clipboardList" 
                        :key="item"
                        v-clipboard:copy="item"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onCopyError">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </section>

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
import draggable from 'vuedraggable';

export default {
    name: "UserIndex",
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,
        HooperProgress,
        draggable
    },
    head() {
        return {
            title: 'Nuxt2 Users',
            meta: [
                { 
                    hid: 'description', 
                    name: 'description', 
                    content: 'users page description'
                },
            ]
        }
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
            hooperData: [
                { id: 1, name: "slide01"},
                { id: 2, name: "slide02"},
                { id: 3, name: "slide03"},
                { id: 4, name: "slide04"},
                { id: 5, name: "slide05"}
            ],
            carouselData: 0,
            
            list: [
                { name: 'name01', id: 0 },
                { name: 'name02', id: 1 },
                { name: 'name03', id: 2 },
            ],
            dragging: false,

            clipboardInput: '',
            clipboardList: [
                'copy text 001',
                'copy text 002',
                'copy text 003',
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
        },

        checkMove(e) {
            // console.log(e);
            window.console.log('future index: ' + e.draggedContext.futureIndex);
        },

        onCopy(e) {
            alert(`Input text copied : ${e.text}`);
        },
        onCopyError() {
            alert('Failed to copy text');
        }
    }
}
</script>

<style lang="scss" scoped>
    .section {
        margin-top: 30px;

        h2 {
            margin-bottom: 10px;
        }
    }

    .drag-wrap {
        > div {
            display: inline-block;
        }
        .drag-item {
            background: #eee;
            border: 1px solid #fff;
            padding: 10px 20px;
            cursor: pointer;
        }
        .ghost {
            opacity: 0.5;
            background: #c8ebfb;
        }        
    }

    .clipboard-wrap {
        ul {
            margin-top: 30px;

            li {
                cursor: pointer;
            }
        }
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