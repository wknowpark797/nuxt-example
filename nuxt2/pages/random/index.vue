// scroll 이벤트 throttle 최적화 예제

<template>
    <div>
        <h1>Category</h1>

        <ul class="category-list">
            <li 
                v-for="item in categories" 
                :key="item.idCategory">

                <div ref="box" class="box">
                    <div class="title-wrap">
                        <p>{{ item.strCategory }}</p>

                        <div class="thumb">
                            <img :src="item.strCategoryThumb" :alt="item.strCategory">
                        </div>
                    </div>
                    
                    <p class="desc">{{ item.strCategoryDescription }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "RandomIndex",
    head() {
        return {
            title: 'Nuxt2 Random',
            meta: [
                { 
                    hid: 'description', 
                    name: 'description', 
                    content: 'random page description'
                },
            ]
        }
    },
    data() {
        return {
            boxes: [],          // 각 box element
            boxOffsetTop: [],   // 각 box의 offset값
            scrollY: 0,         // 현재 스크롤 값
            limit: 0,
        }
    },
    methods: {
        scrollPosition() {
            this.boxOffsetTop = [];

            this.boxes.forEach((box) => {
                this.boxOffsetTop.push(box.offsetTop);
            })
        },
        scrollAction() {
            this.scrollY = window.scrollY;

            this.boxOffsetTop.forEach((position, idx) => {
                if(this.scrollY >= position + this.limit) {
                    this.boxes[idx].classList.add('on');
                } else {
                    this.boxes[idx].classList.remove('on');
                }
            })
        },
    },

    mounted() {
        this.boxes = this.$refs.box;
        this.limit = -window.innerHeight / 2;

        this.$nextTick(() => {
            window.addEventListener('resize', this.scrollPosition);
            window.addEventListener('scroll', this.scrollAction);
        })
        this.scrollPosition();
        this.scrollAction();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.scrollPosition);
        window.removeEventListener('scroll', this.scrollAction);
    },

    // Axios
	async asyncData({ $axios }) {
		const response = await $axios.$get('https://www.themealdb.com/api/json/v1/1/categories.php');
		return { categories: response.categories };
	},
}
</script>

<style lang="scss" scoped>
    .category-list {
        li {
            margin: 30px 0;

            &:nth-child(even) {
                .box {
                    margin-left: auto;
                    transform: translateX(-150px);
                }
            }

            .box {
                width: 50%;
                border: 1px solid #333;
                padding: 10px;

                opacity: 0;
                transform: translateX(150px);
                transition: 0.5s;

                &.on {
                    opacity: 1;
                    transform: translateX(0);
                }

                .title-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;

                    .thumb {
                        width: 150px;

                        img {
                            width: 100%;
                            object-fit: cover;
                        }
                    }
                }
                
                .desc {
                    white-space: normal;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            }
        }
    }
</style>