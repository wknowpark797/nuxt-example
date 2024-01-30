<template>
    <div>
        <h1>Category</h1>

        <ul class="category-list">
            <li 
                v-for="item in categories" 
                :key="item.idCategory">

                <div class="box">
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
                }
            }

            .box {
                width: 350px;
                border: 1px solid #333;
                padding: 10px;

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